const app = require('./app.ts')
const mongoose = require('mongoose')

const {PORT = 3000, DB_HOST} = process.env;

mongoose.connect(DB_HOST)
.then(console.log("Database connection successful"))
.then(app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
}))
.catch(error => {
  console.log(error.message);
  process.exit(1);
});

export {}
