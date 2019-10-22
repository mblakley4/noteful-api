const { PORT, DATABASE_URL } = require('./config')
const app = require('./app')
const knex = require('knex')


const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
})

//set the knex instance as a property 'db' on the app
app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
