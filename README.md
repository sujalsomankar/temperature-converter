# Temperature Converter

## Project Description
A responsive web-based Temperature Converter application that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin. Built with Node.js for the backend and HTML/CSS/JavaScript for the frontend, it features a clean UI with a gradient circle for visual temperature representation, dark/light mode, conversion history, and error handling.

## Features
- Convert temperatures between Celsius, Fahrenheit, and Kelvin.
- Responsive UI with a card-based design and gradient effects.
- Dark/light mode toggle.
- Visual temperature representation with a gradient half-circle.
- Conversion history (last 5 conversions).
- Error handling for invalid inputs (non-numeric values, negative Kelvin).
- Animated transitions for result display.
- Mobile-friendly layout.

## Setup Steps
1. **Clone the Repository**:
   
   git clone <repository-url>
   cd temperature-converter
   

2. **Install Dependencies**
   Ensure Node.js is installed. Then run:
   npm install express


3. **Run the Application**
   Start the server:
   node server.js

   Open `http://localhost:3000` in your browser.

4. **Deploy to Netlify/GitHub Pages**
   - For Netlify: Deploy the `public` folder as a static site.
   - For GitHub Pages: Configure GitHub Pages to serve the `public` folder.
   - Note: Node.js backend may require a platform like Render or Heroku for full functionality.

## Live Demo
[Link to live demo](#) (Update with actual link after deployment)

## Technologies Used
- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: CSS with gradients, responsive design
- **Deployment**: Netlify/GitHub Pages (static) or Render/Heroku (full app)

## Usage
1. Enter a temperature value in the input field.
2. Select the input unit (Celsius, Fahrenheit, or Kelvin) using the radio buttons.
3. Click "Convert" to see the results in all three units.
4. Toggle between dark and light modes using the theme button.
5. View past conversions in the history section.

## Screenshots
(Include screenshots in your GitHub repository or LinkedIn post)

## License
MIT License