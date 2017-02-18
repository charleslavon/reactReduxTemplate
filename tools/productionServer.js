import Express from 'express';


const app = Express();
const PORT = process.env.PORT;

app.use(Express.static('dist'));

app.get('/', (req, res) => {
  res.render('dist/index.html');
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
    console.info(`spottr-ui listening at http://localhost:${PORT}`);
});
