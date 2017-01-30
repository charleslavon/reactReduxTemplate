import Express from 'express';


const app = Express();
const PORT = process.env.PORT;

app.use(Express.static('dist'));

app.get('/bower_components/polymer/{filename}', (req, res) => {
    res.render(`dist/bower_components/polymer/${filename}.html`);
});
app.get('/bower_components/iron-{type}/{filename}', (req, res) => {
    res.render(`dist/bower_components/iron-${type}/${filename}.html`);
});
app.get('/', (req, res) => {
  res.render('dist/index.html');
});


let server = app.listen(PORT, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`spottr-ui listening at http://${host}/${port}`);
});
