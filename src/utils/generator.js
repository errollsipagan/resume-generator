const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const partialsDir = path.join(__dirname, '../templates/partials');
fs.readdirSync(partialsDir).forEach(filename => {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) return;
    const name = matches[1];
    const filepath = path.join(partialsDir, filename);
    const template = fs.readFileSync(filepath, 'utf8');
    Handlebars.registerPartial(name, template);
});

function generateResume(details) {
    const templatePath = path.join(__dirname, '../templates/resumeTemplate.hbs');
    const templateSource = fs.readFileSync(templatePath, 'utf-8');
    const template = Handlebars.compile(templateSource);

    // Pass the entire details object to the template
    return template(details);
}

module.exports = { generateResume };