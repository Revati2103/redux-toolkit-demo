const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.port || 5800;

app.use(cors());

app.get('/api', function(req,res) {
    console.log('Called API');
    res.send({result: 'Hello!'})
})

app.get('/quit', function(req,res) {
    console.log('Called Quit');
    res.send({result: 'Bye...'})
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}....`);
})
