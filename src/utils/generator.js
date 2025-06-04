const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

function generateResume(details) {
    const templatePath = path.join(__dirname, '../templates/resumeTemplate.hbs');
    const templateSource = fs.readFileSync(templatePath, 'utf-8');
    const template = Handlebars.compile(templateSource);

    // Pass the entire details object to the template
    return template(details);
}

module.exports = { generateResume };