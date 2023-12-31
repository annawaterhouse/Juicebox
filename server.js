const express = require('express');
const app = express();
const morgan = require('morgan')

const PORT = 7567;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Api route 
app.use('/api', require('./api'))


app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status ?? 500;
    const message = err.message ?? 'Internal server error.';
    res.status(status).json({ message });
  });



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});