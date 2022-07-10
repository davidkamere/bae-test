const express = require("express")
const bodyParser = require("body-parser")
const clients = require('./database/clients')
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(express.static(path.resolve(__dirname, '../frontend/build')))

//finds all clients
app.get('/api/clients', (req, res) => {
  res.json(clients.list)
})

// finds a client by their ID
app.get('/api/clients/:id', (req, res) => {
  // look up the client and handle 404
  const client = clients.list.find(c => c.id === parseInt(req.params.id) )
  if(!client) res.status(404).send('The client with the given ID was not found')

  res.json(client)
})

// creates a new client
app.post('/api/clients/create', (req, res) => {
  const client = {
      id: Math.floor(Date.now() * Math.random()),
      "first_name": req.body.firstName,
      "last_name": req.body.lastName,
      email: req.body.email,
      gender: req.body.gender,
      image: req.body.image
  }


  clients.list.push(client)
  res.send(client)
})

// delete a client from the database
app.delete('/api/clients/:id', (req, res) => {
  // look up the client and handle 404
  const client = clients.list.find(c => c.id === parseInt(req.params.id) )
  if(!client) res.status(404).send('The client with the given ID was not found')

  // delete
  const index = clients.list.indexOf(client)
  clients.list.splice(index, 1)

  res.send(client)
})

// overall GET requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});