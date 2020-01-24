const express = require ('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Jon', lastName: 'Doe'},
        {id: 2, firstName: 'Jack', lastName: 'Dorn'},
        {id: 3, firstName: 'Mary', lastName: 'Dern'},
    ]

    res.json(customers)
});

//^^hook up database entry points here!!

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
