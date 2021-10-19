const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000



app.get('/', (req, res) => {
    res.send("WOW,I am excited because i am learning node.now go")
})

const users = [
    { id: 1, name: 'Shabana', email: "shabana@gmail.com", phone: "0125678765432" },
    { id: 2, name: 'Shabnoor', email: "shabnoor@gmail.com", phone: "01342343234" },
    { id: 3, name: 'jahangir', email: "jahangir@gmail.com", phone: "01923454345" },
    { id: 4, name: 'boshir', email: "boshir@gmail.com", phone: "0172345432" },
    { id: 5, name: 'manna', email: "manna@gmail.com", phone: "018234543234" },
    { id: 6, name: 'bapparaz', email: "bapparaz@gmail.com", phone: "0153454345" }
]
app.get('/users', (req, res) => {
    const search = (req.query.search)
    if (search) {
        const searchResult = users.filter(r => r.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})
app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'banana', 'apples'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy mangoes')
})
//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitted the server", req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log("listening to the port", port)
})