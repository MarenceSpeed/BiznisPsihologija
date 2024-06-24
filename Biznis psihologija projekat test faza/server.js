const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const userInput = req.body.userInput;
    console.log('Received user input:', userInput);

    // Process the data as needed
    // ...

    res.json({ status: 'success', data: userInput });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
