const express = require('express');
const app = express();
const port = 3000;

// 1st question:
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}`);
});

// 2nd question: 
app.get('/roll/:number', (req, res) => {
    const rollNum = req.params.number;

    if (isNaN(rollNum)) {
        res.send("You must specify a number.");
    } else {
        const randomNum = Math.floor(Math.random() * rollNum);
        res.send(`You rolled a ${randomNum}`);
    }
});

// 3rd question: 
app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= collectibles.length) {
        res.send("This item is not yet in stock. Check back soon!");
    } else {
        const collectible = collectibles[index];
        res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
    }
});

// 4th question: 
app.get('/shoes', (req, res) => {
    const shoes = [
        { name: 'Birkenstocks', price: 50, type: 'sandal' },
        { name: 'Air Jordans', price: 500, type: 'sneaker' },
        { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
        { name: 'Utility Boots', price: 20, type: 'boot' },
        { name: 'Velcro Sandals', price: 15, type: 'sandal' },
        { name: 'Jet Boots', price: 1000, type: 'boot' },
        { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
    ];

    let filteredShoes = shoes;

    // min-price
    if (req.query['min-price']) {
        const minPrice = parseFloat(req.query['min-price']);
        if (!isNaN(minPrice)) {
            filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
        }
    }

    // max-price
    if (req.query['max-price']) {
        const maxPrice = parseFloat(req.query['max-price']);
        if (!isNaN(maxPrice)) {
            filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
        }
    }

    if (req.query['type']) {
        const type = req.query['type'].toLowerCase();
        filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type);
    }

    let response = filteredShoes.map(shoe => {
        return `Name: ${shoe.name}, Price: ${shoe.price}, Type: ${shoe.type}`;
    }).join("\n");

    res.send(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
