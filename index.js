const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const CONTACTS_FILE = './contacts.json';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui/index.html'));
});

app.post('/add-contact', (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = { name, email, phone };

  let contacts = [];
  if (fs.existsSync(CONTACTS_FILE)) {
    contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE));
  }

    //complete the code
});

app.get('/contacts', (req, res) => {
  let contacts = [];
  if (fs.existsSync(CONTACTS_FILE)) {
    contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE));
  }
  //complete the code
});

const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
  
module.exports = app;
