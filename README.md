# MIIC Events and Launches

A modern, responsive web application for displaying MIIC events and product launches.

## Features

- **Event Listing**: Display upcoming MIIC events and product launches
- **Filtering**: Filter events by type (All, Events, Launches)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required - pure HTML, CSS, and JavaScript

### Running the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/trueRama/event-pages.git
   cd event-pages
   ```

2. Open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or simply double-click the `index.html` file.

3. You can also use a local development server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server package)
   npx http-server
   ```

   Then navigate to `http://localhost:8000` in your browser.

## Project Structure

```
event-pages/
├── index.html      # Main HTML file
├── styles.css      # Styling and layout
├── app.js          # Application logic and event data
└── README.md       # This file
```

## Customization

### Adding New Events

Edit the `eventsData` array in `app.js`:

```javascript
{
    id: 7,
    title: "Your Event Title",
    type: "event",  // or "launch"
    date: "2025-12-31",
    description: "Event description here",
    location: "Event location"
}
```

### Styling

Modify `styles.css` to customize colors, fonts, and layout. CSS custom properties are defined at the top of the file for easy theming:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... more variables */
}
```

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Contributing

Feel free to submit issues and enhancement requests!
