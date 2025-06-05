# Resume Generator

A Node.js application that generates a resume PDF from your details using modular Handlebars templates and partials.

## Features

- Generates a professional resume PDF from a single JSON file.
- Modular Handlebars templates: each resume section is a partial for easy customization.
- Supports sections like education, experience (with projects and achievements), skills, certifications, languages, projects, and references.
- No command-line parameters needed—just edit your JSON file.

## Project Structure

```
resume-generator
├── input
│   ├── resumeDetails.json           # Your resume data (edit this file)
│   └── resumeDetails.sample.json    # Sample data structure
├── output
│   └── resume.pdf                   # Generated PDF resume
├── src
│   ├── generateResume.js            # Main script to generate the resume
│   ├── templates
│   │   ├── resumeTemplate.hbs       # Main Handlebars template
│   │   └── partials                 # Folder for section partials
│   │       ├── education.hbs
│   │       ├── experience.hbs
│   │       ├── skills.hbs
│   │       ├── certifications.hbs
│   │       ├── languages.hbs
│   │       ├── projects.hbs
│   │       └── references.hbs
│   └── utils
│       └── generator.js             # Registers partials and renders template
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/errollsipagan/resume-generator.git
   cd resume-generator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Copy the sample data and edit it:
   ```sh
   cp input/resumeDetails.sample.json input/resumeDetails.json
   ```
   Edit `input/resumeDetails.json` with your information.

2. Generate your resume PDF:
   
   Default (no params)
   ```sh
   npm start
   ```
   or With custom files
   ```sh
   node src/generateResume.js myCustomDetails.json myCustomResume.pdf
   ```

3. Find your generated PDF in the `output/` folder.

## Customization

- To change the look or structure, edit the main template (`src/templates/resumeTemplate.hbs`) or any partial in `src/templates/partials/`.
- Each section (education, experience, etc.) is a separate partial for easy editing.

## License

This project is licensed under the MIT License.

## Credits

This project was developed with the help of GitHub Copilot.