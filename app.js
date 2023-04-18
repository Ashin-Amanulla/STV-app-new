const express = require('express')
const helmet = require("helmet");
const cors = require('cors')
const logger =require('morgan')
const compression = require('compression')


require('dotenv').config() //environmental variables
require('./db') //DB initialisation
const PORT = 3400 || process.env.PORT

const app = express()
app.use(helmet({crossOriginResourcePolicy: false}));
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(compression())

// routeHandler 
app.use('/api',require('./routes'))

//testing
// const {Borda} = require('votes')
// const borda = new Borda({
//     candidates: ['Lion', 'Bear', 'Sheep'],
//     ballots: [
//       { ranking: [['Lion'], ['Sheep'], ['Bear']], weight: 1 },
//       { ranking: [['Sheep'], ['Lion'], ['Bear']], weight: 1 },
//       { ranking: [['Bear'], ['Sheep'], ['Bear']], weight: 1},
//     ],
//   })
  
//   const scores = borda.scores()
//   console.log('scores : ',scores)
//   // -> { Bear: 10, Lion: 8, Sheep: 9}
  
//   const ranking = borda.ranking()
//   console.log('ranking : ',ranking)
//   // -> [ [ 'Bear' ], [ 'Sheep' ], [ 'Lion' ] ]



  //Apis 
  app.use('/api/candidate', require('./routes/candidate'))
  app.use('/api/voting', require('./routes/voting'))

  //login apis
  app.use('/api/authentication', require('./routes/auth'))


app.listen(PORT, () => { console.log(`Server is running at ${PORT}`) })
  