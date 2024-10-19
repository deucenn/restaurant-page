# Restaurant Page
 
A book library build with Webpack and JavaScript.


[Live View](https://deucenn.github.io/restaurant-page/)

----------------------------------------------------------------
 
## Features

- **Home Page**: Displays a welcome message, an introduction to the restaurant, and a hero image.
- **Menu Page**: Lists the restaurant’s offerings in categorized sections (appetizers, main courses, desserts).
- **Contact Page**: Shows the restaurant's contact information and a contact form.
- **Tabbed Navigation**: Users can switch between Home, Menu, and Contact sections using a tabbed interface without reloading the page.
- **Modern Design**: Uses clean, modern CSS for a professional appearance.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/deucenn/restaurant-page.git
   ```

2. Navigate into the project directory:

   ```bash
   cd restaurant-page
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server and see the website live:

1. Run the Webpack development server:

   ```bash
   npx webpack serve
   ```

2. Open your browser and visit [http://localhost:8080](http://localhost:8080) to view the website.

## Built With

- **JavaScript (ES6)**: Dynamically generates the website's content.
- **CSS**: Provides the styling for a professional and clean look.
- **Webpack**: Bundles the project and serves it via Webpack Dev Server.

## Deployment

To deploy the project on GitHub Pages:

1. Create a `gh-pages` branch:

   ```bash
   git branch gh-pages
   ```

2. Merge changes from `main` to `gh-pages`:

   ```bash
   git checkout gh-pages
   git merge main --no-edit
   ```

3. Build the project:

   ```bash
   npx webpack
   ```

4. Push the contents of the `dist` folder to the `gh-pages` branch:

   ```bash
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

5. Update the GitHub repository settings to use the `gh-pages` branch for GitHub Pages deployment.