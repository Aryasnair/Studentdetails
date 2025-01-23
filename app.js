const express = require('express'); // Import express
const app = new express(); // Create express instance

const morgan = require('morgan'); // morgan is used for logging requests
app.use(morgan('dev'));

// Set up view engine as ejs
app.set('view engine', 'ejs');
app.set("views", __dirname + '/views');

// Serve static files from the 'public' folder
app.use(express.static('public'));//any of the file stored in public.

// Define navbar array for use in views
const navbar = [
  { link: '/basic', name: 'Home' },
  { link: '/basic/form', name: 'Add Student' }
];

// Import routes (ensure you only declare it once)
const basicroutes = require('./routes/basic')(navbar);

// Middleware to use routes
// const ejs=require(ejs);
app.use('/basic', basicroutes); 





// Start the server
app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
