document.addEventListener('DOMContentLoaded', () => {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'Make Website Black';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '1000';

    // Add an event listener to change the background color to black
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'; // Optional: Change text color to white for visibility
    });

    // Append the button to the body
    document.body.appendChild(button);
});