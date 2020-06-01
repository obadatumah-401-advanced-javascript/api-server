'use strict';

const time = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const notFound = require('../middleware/404');
const serverError = require('../middleware/500');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(time);
app.use(logger);

let db = {
    categories: [
        {
            name: "food",
            display_name: "FOOD",
            description: "life as should to be",
            id: 1
        },
        {
            name: "animals",
            display_name: "ANIMAL",
            description: "some animals",
            id: 2
        },
        {
            name: "trees",
            display_name: "TREES",
            description: "Planets",
            id: 3
        }
    ],
    products: [
        {
            category: "food",
            name: "pizza",
            display_name: "PIZZA",
            description: "meaning of life part two",
            id: 1
        },
        {
            category: "animals",
            name: "cat",
            display_name: "CAT",
            description: "some strange animal",
            id: 2
        },
        {
            category: "animals",
            name: "dog",
            display_name: "DOG",
            description: "some strange animal part two",
            id: 3
        }
    ]
}

app.get('/products/', (req, res) => {
    let count = db.products.length;
    // console.log('date>>>>>>>>>>',req.requestTime)
    let results = db.products;
    res.status(200).json({ count, results });
});

app.get('/categories/', (req, res) => {
    let count = db.categories.length;
    let results = db.categories;
    res.status(200).json({ count, results });
});

app.get('/products/:id', (req, res) => {
    const count = db.products.length;
    const results = db.products;
    const { id } = req.params;
    let reqProduct = results.filter(product => product.id == id)
    res.status(200).json(reqProduct);
});

app.get('/categories/:id', (req, res) => {
    const count = db.categories.length;
    const results = db.categories;
    const { id } = req.params;
    let reqCategories = results.filter(category => category.id == id)
    res.status(200).json(reqCategories);
});

app.post('/products/', (req, res) => {
    const count = db.products.length;
    const results = db.products;
    const newProduct = req.body;
    newProduct.id = db.products.length + 1;
    results.push(newProduct);
    res.status(202).json({ count, results });
});

app.post('/categories/', (req, res) => {
    const count = db.categories.length;
    const results = db.categories;
    const newCategory = req.body;
    newCategory.id = db.categories.length + 1;
    results.push(newCategory);
    res.status(202).json({ count, results });
});

app.put('/products/:id', (req, res) => {
    const count = db.products.length;
    const results = db.products;
    const { id } = req.params;
    const newProduct = req.body;
    newProduct.id = Number(id);
    results.forEach((product, index) => {
        product.id == id ? results[index] = newProduct : '';
    })
    res.status(202).json({ count, results });
});

app.put('/categories/:id', (req, res) => {
    const count = db.categories.length;
    const results = db.categories;
    const { id } = req.params;
    const newCategory = req.body;
    newCategory.id = Number(id);
    results.forEach((category, index) => {
        category.id == id ? results[index] = newCategory : '';
    })
    res.status(202).json({ count, results });
});

app.delete('/products/:id', (req, res) => {
    const count = db.products.length;
    const results = db.products;
    const { id } = req.params;
    const newProduct = req.body;
    newProduct.id = Number(id);
    results.forEach((product, index) => {
        product.id == id ? results.splice(index, 1) : '';
    })
    res.status(202).json({ count, results });
});

app.delete('/categories/:id', (req, res) => {
    const count = db.categories.length;
    const results = db.categories;
    const { id } = req.params;
    const newCategory = req.body;
    newCategory.id = Number(id);
    results.forEach((category, index) => {
        category.id == id ? results.splice(index, 1) : '';
    })
    res.status(202).json({ count, results });
});

app.use('*', notFound);
app.use(serverError);


module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
    }
}