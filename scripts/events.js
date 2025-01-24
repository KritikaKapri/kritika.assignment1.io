/**
 * events.js
 *
 * Author: Kritika Kapri, Amal Baradia
 * Student ID: 100938161, 100886422
 * Date of Completion: 2025-01-24
 **/

"use strict";

// Event class to store event details
class Event {
    constructor(title, description, date, category) {
        this.title = title;
        this.description = description;
        this.date = new Date(date); // Convert string to Date object
        this.category = category; // e.g., 'Fundraiser', 'Workshop', 'Cleanup'
    }

    // Method to render event details in calendar grid
    render() {
        return `
            <div class="event-card" data-category="${this.category}" data-date="${this.date.toISOString()}">
                <h5 class="event-title">${this.title}</h5>
                <p class="event-description">${this.description}</p>
                <p class="event-date">${this.date.toDateString()}</p>
                <p class="event-category">${this.category}</p>
            </div>
        `;
    }
}

// Array to hold events (sample data)
const events = [
    new Event("Beach Cleanup", "Join us for a day at the beach to clean up the shoreline.", "2025-02-05T09:00:00", "Cleanup"),
    new Event("Fundraising Gala", "A night of elegance and giving to support local charities.", "2025-02-10T19:00:00", "Fundraiser"),
    new Event("Workshop on Sustainability", "Learn about sustainable practices for a better future.", "2025-02-15T14:00:00", "Workshop"),
    new Event("Park Cleanup", "Help clean up the park and protect our green spaces.", "2025-03-01T08:00:00", "Cleanup"),
    new Event("Tech for Good", "A workshop on using technology for social good.", "2025-03-10T09:00:00", "Workshop")
];

// Function to display events on the page
function displayEventsPage() {
    console.log("Displaying Events Page...");

    const eventContainer = document.getElementById('event-list');
    eventContainer.innerHTML = "";  // Clear previous events

    // Render each event
    events.forEach(event => {
        eventContainer.innerHTML += event.render();
    });

    // Attach filter event listener
    attachFilterEventListeners();
}

// Function to handle event filtering by category
function filterEvents(category) {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        if (category === "All" || card.getAttribute('data-category') === category) {
            card.style.display = "block"; // Show matching event
        } else {
            card.style.display = "none"; // Hide non-matching event
        }
    });
}

// Function to attach filter event listeners
function attachFilterEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            filterEvents(category);
        });
    });
}

// Initialize the page
function start() {
    console.log("Starting Events Page...");
    displayEventsPage();
}

// Call start function when the page loads
window.addEventListener("load", start);

