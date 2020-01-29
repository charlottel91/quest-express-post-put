const express = require('express');
const app = express();
// const port = 5000;
const connection = require('../index');

app.get('/user', res.send('je suis sur la bonne route'));


// Added user
app.post('/user', res => {
    const formData= req.body
    connection.query('INSERT INTO user SET ?', formData, err =>{ 
        if(err){
            res.status(500).send(`Erreur lors de l'ajout du user`)
        } else {
            res.send(200)
        }
    })
})

app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
  });