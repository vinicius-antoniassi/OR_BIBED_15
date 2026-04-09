const express = require('express');
const app = express();
const port = 3000;

// Middleware to set the COOP header on all responses
app.use((req, res, next) => {
    // Change 'same-origin' to 'unsafe-none' later to see the difference
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    next();
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`COOP Test Server running at http://localhost:${port}`);
});