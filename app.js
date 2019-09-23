const express = require('express');
// variabel app yang mereferensi ke express
const app = express();

// route public `/` yang mengembalikan respons string `Hello World`
app.get('/', (req, res) => {
  res.send('Hello Ilham');
})

// listen untuk menjalakan express
app.listen(8081, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Running`);
});