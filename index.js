const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look mamam i can can code now.')
});


const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '01788888888' },
    { id: 2, name: 'shabnur', email: 'shabnur@gmail.com', phone: '01788888888' },
    { id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'suchandha', email: 'suchandha@gmail.com', phone: '01788888888' },
    { id: 5, name: 'sraboni', email: 'sraboni@gmail.com', phone: '01788888888' },
    { id: 6, name: 'komola', email: 'komola@gmail.com', phone: '01788888888' },
    { id: 7, name: 'vobhita', email: 'vobhita@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listenning to port', port)
})