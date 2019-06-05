const express = require('express');

const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})