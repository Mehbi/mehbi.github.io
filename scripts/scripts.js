// Toggle dark mode
function toggleDarkMode() {
    const popup = document.createElement('div');
    popup.textContent = "It doesn't work yet lol";
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#333';
    popup.style.color = '#fff';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    popup.style.zIndex = '1000';

    // Append the popup to the body
    document.body.appendChild(popup);

    // Remove the popup after 2 seconds
    setTimeout(() => {
        document.body.removeChild(popup);
    }, 2000);
}

function toggleLanguage() {
    const languageDiv = document.createElement('div');
    languageDiv.style.position = 'fixed';
    languageDiv.style.top = '50%';
    languageDiv.style.left = '50%';
    languageDiv.style.transform = 'translate(-50%, -50%)';
    languageDiv.style.backgroundColor = '#fff';
    languageDiv.style.color = '#000';
    languageDiv.style.padding = '10px 20px';
    languageDiv.style.borderRadius = '5px';
    languageDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    languageDiv.style.zIndex = '1000';
    languageDiv.style.textAlign = 'center';

    // Add language options
    languageDiv.innerHTML = `
        <p>Select a language:</p>
        <button onclick="alert('English selected')">English</button>
        <button onclick="alert('Spanish selected')">Spanish</button>
        <button onclick="alert('French selected')">French</button>
    `;

    document.body.appendChild(languageDiv);

    setTimeout(() => {
        if (document.body.contains(languageDiv)) {
            document.body.removeChild(languageDiv);
        }
    }, 5000);
}

document.getElementById('change-language').addEventListener('click', toggleLanguage);