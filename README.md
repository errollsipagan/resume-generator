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
│   ├── index.js               # Entry point of the application
│   ├── templates
│   │   └── resumeTemplate.hbs  # Handlebars template for the resume
│   ├── utils
│   │   └── generator.js        # Utility for generating the resume
│   └── data
│       └── userDetails.json    # Default user details
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

1. Start the application:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.