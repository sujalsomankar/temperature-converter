document.addEventListener('DOMContentLoaded', () => {
  const tempInput = document.getElementById('temp-input');
  const convertBtn = document.getElementById('convert-btn');
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');
  const historyList = document.getElementById('history-list');
  const themeToggle = document.getElementById('theme-toggle');
  const tempCircle = document.getElementById('temp-circle');
  let history = [];

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') 
      ? 'Toggle Light Mode' 
      : 'Toggle Dark Mode';
  });

  // Conversion logic
  convertBtn.addEventListener('click', () => {
    const temp = parseFloat(tempInput.value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    errorDiv.textContent = '';
    resultDiv.style.display = 'none';

    // Input validation
    if (isNaN(temp)) {
      errorDiv.textContent = 'Please enter a valid number.';
      return;
    }
    if (unit === 'Kelvin' && temp < 0) {
      errorDiv.textContent = 'Kelvin temperature cannot be negative.';
      return;
    }

    // Perform conversions
    let celsius, fahrenheit, kelvin;
    if (unit === 'Celsius') {
      celsius = temp;
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
    } else if (unit === 'Fahrenheit') {
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
    } else {
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = temp;
    }

    // Round results to 2 decimal places
    celsius = celsius.toFixed(2);
    fahrenheit = fahrenheit.toFixed(2);
    kelvin = kelvin.toFixed(2);

    // Display results
    resultDiv.innerHTML = `
      <p>${temp} ${unit} = ${celsius} °C</p>
      <p>${temp} ${unit} = ${fahrenheit} °F</p>
      <p>${temp} ${unit} = ${kelvin} K</p>
    `;
    resultDiv.style.display = 'block';

    // Update gradient circle (color changes based on temperature)
    const gradientColor = temp < 0 ? '#00f' : temp < 20 ? '#0ff' : '#f00';
    tempCircle.style.background = `linear-gradient(135deg, ${gradientColor}, #fff)`;

    // Add to history
    const conversion = `${temp} ${unit} → ${celsius} °C, ${fahrenheit} °F, ${kelvin} K`;
    history.push(conversion);
    if (history.length > 5) history.shift(); // Keep only last 5 conversions
    historyList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
  });
});