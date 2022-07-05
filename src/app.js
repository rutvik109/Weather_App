const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 80;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../Templates/views");
const partials_path = path.join(__dirname, "../Templates/partials");

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(static_path);
app.use(express.static(static_path));

app.get('/', (req, res) => {
  res.render("index");
})


app.get("*", (req, res) => {
  res.render('404', {
    errorMsg: "Opps! page not found, Click Here to go back"
  })
})

app.listen(port, () => {
  console.log(`App is listioning at ${port}`)
})