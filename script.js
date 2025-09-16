// Wait until the entire HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Select key elements from the DOM
  const btn = document.querySelector(".btn");           // The button that triggers the color change
  const son = document.querySelector(".son");           // The box whose background will change
  const gSonText = document.querySelector(".g_son p");  // The paragraph text inside the box
  const parent = document.querySelector(".parent");     // The outer container (optional for extra effect)

  // Function to generate a random number between 0 and the given max value
  function ran(num) {
    return Math.floor(Math.random() * (num + 1));
  }

  // Function to generate a random RGB color string
  function randomRGB() {
    return `rgb(${ran(255)}, ${ran(255)}, ${ran(255)})`;
  }

  // Add a click event listener to the button
  btn.addEventListener("click", () => {
    // Generate random colors for background and text
    const newBg = randomRGB();         // Background color for the .son box
    const newTextColor = randomRGB();  // Text color for the paragraph
    const newParentBg = randomRGB();   // Optional: background color for the parent container

    // Apply smooth transitions using inline styles
    son.style.transition = "background-color 0.6s ease";
    gSonText.style.transition = "color 0.6s ease";
    parent.style.transition = "background-color 0.6s ease";

    // Update styles with new random colors
    son.style.backgroundColor = newBg;
    gSonText.style.color = newTextColor;
    parent.style.backgroundColor = newParentBg;

    // Update button text to reflect the change
    btn.innerHTML = "✨ Colors Updated!";
  });
});
