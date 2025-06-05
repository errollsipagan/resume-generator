const { generateResume } = require('./utils/generator');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Get parameters from command line or use defaults
const args = process.argv.slice(2);
const inputFile = args[0] || 'resumeDetails.json';
const outputFile = args[1] || 'resume.pdf';

// Load resume details from JSON file
const detailsPath = path.join(__dirname, '../input', inputFile);
if (!fs.existsSync(detailsPath)) {
    console.error(`${inputFile} not found in input directory.`);
    process.exit(1);
}
const resumeDetails = JSON.parse(fs.readFileSync(detailsPath, 'utf-8'));

// Generate HTML from template
const resumeHtml = generateResume(resumeDetails);

const outputDir = path.join(__dirname, '../output');
const outputPath = path.join(outputDir, outputFile);

fs.mkdirSync(outputDir, { recursive: true });

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(resumeHtml, { waitUntil: 'networkidle0' });
    await page.pdf({ path: outputPath, format: 'A4' });
    await browser.close();
    console.log(`Resume PDF generated at ${outputPath}`);
})();