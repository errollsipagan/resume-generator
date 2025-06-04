# Resume Generator

This is a Node.js application that generates a resume based on a template using user-provided details and skills. 

## Features

- Generate a personalized resume using a Handlebars template.
- Accept user details and skills as input parameters.
- Serve the generated resume as a downloadable document.

## Project Structure

```
resume-generator
├── src
│   ├── generateResume.js       # Entry point of the application
│   ├── templates
│   │   └── resumeTemplate.hbs  # Handlebars template for the resume
│   └── utils
│       └── generator.js        # Utility for generating the resume
├── input
│   └── resumeDetails.json      # JSON for generating the resume
├── package.json                # NPM configuration file
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd resume-generator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Make a copy of input/resumeDetails.sample.json and name it resumeDetails.json and change it according your details

2. Generate the resume
   ```
   npm start
   ```

3. Check output folder for the generated resume

## License

This project is licensed under the MIT License.