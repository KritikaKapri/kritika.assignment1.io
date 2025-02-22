/**
 * about.js
 *
 * Author: Kritika Kapri, Amal Baradia
 * Student ID: 100938161, 100886422
 * Date of Completion: 2025-02-22
 **/

"use strict";

// Show or hide the "Back to Home" button
const backToHomeButton = document.getElementById("backToHome");
window.onscroll = () => {
    if (window.scrollY > 300) {
        backToHomeButton.style.display = "block";
    } else {
        backToHomeButton.style.display = "none";
    }
};
