/**
 * JavaScript - Hotspot Klinik Harapan Sehat
 * Handles dynamic greetings and interactive elements.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Greeting based on time of day
    const welcomeTitle = document.querySelector('.welcome-title');
    const highlightText = document.querySelector('.highlight-text');
    
    if (welcomeTitle && highlightText) {
        const hour = new Date().getHours();
        let greeting = 'Selamat ';
        
        if (hour >= 5 && hour < 11) {
            greeting += 'Pagi';
        } else if (hour >= 11 && hour < 15) {
            greeting += 'Siang';
        } else if (hour >= 15 && hour < 18) {
            greeting += 'Sore';
        } else {
            greeting += 'Malam';
        }
        
        welcomeTitle.innerHTML = `${greeting}, Selamat datang di Website Hotspot<br><span class="highlight-text">${highlightText.textContent}</span>`;
    }

    console.log("Klinik Harapan Sehat - Welcome Portal Loaded.");
});
