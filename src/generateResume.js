const { generateResume } = require('./utils/generator');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const args = require('minimist')(process.argv.slice(2));

const name = args.name || 'Your Name';
const email = args.email || 'your.email@example.com';
const phone = args.phone || '123-456-7890';
const skills = args.skills ? args.skills.split(',').map(s => s.trim()) : [];

if (!skills.length) {
    console.error('Please provide skills using --skills="Skill1, Skill2, ..."');
    process.exit(1);
}

// You can add more fields as needed
const resumeHtml = generateResume({
    name,
    email,
    phone,
    skills,
    objective: args.objective || '',
    education: args.education || '',
    experience: args.experience || '',
    projects: args.projects || '',
    references: args.references || ''
});

const outputDir = path.join(__dirname, '../output');
const outputPath = path.join(outputDir, 'resume.pdf');

fs.mkdirSync(outputDir, { recursive: true });

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(resumeHtml, { waitUntil: 'networkidle0' });
    await page.pdf({ path: outputPath, format: 'A4' });
    await browser.close();
    console.log(`Resume PDF generated at ${outputPath}`);
})();