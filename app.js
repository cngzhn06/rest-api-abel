const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/routes.js');
const app = express();
dotenv.config();
routes(app);
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('initial');
});

app.listen(PORT, function(err) {
  if(err){
    console.log(err, 'errow while starting the server');
  }else{
    console.log(`server is running on port ${PORT}`);
  }
}); 