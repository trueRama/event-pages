// Sample events data
const eventsData = [
    {
        id: 1,
        title: "MIIC Annual Conference 2025",
        type: "event",
        date: "2025-11-15",
        description: "Join us for our annual conference featuring keynote speakers, workshops, and networking opportunities.",
        location: "San Francisco, CA"
    },
    {
        id: 2,
        title: "Product Launch: NextGen Platform",
        type: "launch",
        date: "2025-11-01",
        description: "Introducing our revolutionary NextGen platform with enhanced features and improved performance.",
        location: "Virtual Event"
    },
    {
        id: 3,
        title: "Developer Workshop: Advanced APIs",
        type: "event",
        date: "2025-11-22",
        description: "Hands-on workshop covering advanced API development, best practices, and real-world applications.",
        location: "New York, NY"
    },
    {
        id: 4,
        title: "New Mobile App Release",
        type: "launch",
        date: "2025-12-01",
        description: "Experience our redesigned mobile application with intuitive interface and powerful new features.",
        location: "Global Release"
    },
    {
        id: 5,
        title: "Tech Summit 2025",
        type: "event",
        date: "2025-12-10",
        description: "Annual technology summit bringing together industry leaders, innovators, and tech enthusiasts.",
        location: "Austin, TX"
    },
    {
        id: 6,
        title: "AI Integration Launch",
        type: "launch",
        date: "2025-12-15",
        description: "Announcing our new AI-powered features designed to streamline workflows and boost productivity.",
        location: "Virtual Event"
    }
];

// DOM Elements
const eventsContainer = document.getElementById('events-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// Format date to readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Create event card HTML
function createEventCard(event) {
    return `
        <div class="event-card" data-type="${event.type}">
            <span class="event-type ${event.type}">${event.type}</span>
            <h3>${event.title}</h3>
            <div class="date">${formatDate(event.date)}</div>
            <p class="description">${event.description}</p>
            <div class="location">${event.location}</div>
        </div>
    `;
}

// Render events
function renderEvents(filter = 'all') {
    const filteredEvents = filter === 'all' 
        ? eventsData 
        : eventsData.filter(event => event.type === filter);
    
    eventsContainer.innerHTML = filteredEvents
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(event => createEventCard(event))
        .join('');
}

// Filter event handlers
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter events
        const filter = button.dataset.filter;
        renderEvents(filter);
    });
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
});
