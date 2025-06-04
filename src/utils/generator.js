const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

function generateResume({ name, email, phone, skills }) {
    const templatePath = path.join(__dirname, '../templates/resumeTemplate.hbs');
    const templateSource = fs.readFileSync(templatePath, 'utf-8');
    const template = Handlebars.compile(templateSource);

    return template({ name, email, phone, skills });
}

module.exports = { generateResume };