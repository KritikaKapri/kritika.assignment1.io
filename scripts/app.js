/**
 * app.js
 *
 * Author: Kritika Kapri, Amal Baradia
 * Student ID: 100938161, 100886422
 * Date of Completion: 2025-01-24
 **/

"use strict";

// IIFE - Immediately Invoked Functional Expression
(function () {
    /**
     * Start the app based on the page title or other criteria
     */
    function startApp() {
        console.log("Starting App...");

        switch (document.title) {
            case "Volunteer Opportunities":
                // The opportunities page will be managed by opportunities.js
                break;

            case "Home":
                displayHomePage();
                break;

            case "Contact Us":
                displayContactPage();
                break;

            // Other page cases can be added as necessary
        }
    }

    /**
     * Example: Display the home page content.
     */
    function displayHomePage() {
        console.log("Displaying Home Page...");
    }

    /**
     * Example: Display the contact page content.
     */
    function displayContactPage() {
        console.log("Displaying Contact Page...");
    }

    // Show or hide the "Back to Top" button
    const backToTopButton = document.getElementById("backToTop");
    window.onscroll = () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Smooth scroll to top when the button is clicked
    backToTopButton.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Run the start function when the page is loaded
    window.addEventListener("load", startApp);
})();
