const path = require('path');
const express =  require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

//Static express middleware
app.use(express.static(publicPath));

// Start server on Port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});