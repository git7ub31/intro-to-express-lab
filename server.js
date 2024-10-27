
// 1st question
const express = require('express')
const app = express()

app.get('greetings',() =>{
    alert('a')
    // res.send(`Hello there, ${req.params.name}`)
})

//2nd question
// app.get('/:number',(req,res) => {
//     alert(req)
//     // if(req.params.number != Number.IsInteger{
//     //     res.send("You must specify a number.")
    // }else( //create a variable and then call it below in send
    //     math.floor()
    //     // res.send(`You rolled a ${req.params.number}`)
    // )
// })
// app.get('/role/:number',(req,res) => {
//     if(isNaN(Number(req.params.number))){
//         res.send("You must specify a number.")
//     }else{ //create a variable and then call it below in send
//        let x = Math.floor(Math.random() * req.params.number)
//         res.send(`You rolled a ${x}`)
//     }
// })

//do the opposite 
//3rd question > check parse (converts anything into desire)

// app.get('/collectibles/:number',(req,res) => {
//     let number = Number(req.params.number)
//     if(isNaN(number)){
//         res.send("You must specify a number.")
//     }else{ //create a variable and then call it below in send
//         const collectibles = [
//             { name: 'shiny ball', price: 5.95 },
//             { name: 'autographed picture of a dog', price: 10 },
//             { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//           ];
//           if (number >= 0 && number < collectibles.length) {
//             res.send(`So, you want the ${collectibles[number].name}? For ${collectibles[number].price}, it can be yours!`)
//           } else {
//             res.send(`This item is not yet in stock. Check back soon!`)
//           }
//     }
// })

//4th question
app.get('/shoes', (req, res) => {
    const shoes = [
      { name: 'Birkenstocks', price: 50, type: 'sandal' },
      { name: 'Air Jordans', price: 500, type: 'sneaker' },
      { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
      { name: 'Utility Boots', price: 20, type: 'boot' },
      { name: 'Velcro Sandals', price: 15, type: 'sandal' },
      { name: 'Jet Boots', price: 1000, type: 'boot' },
      { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
    ]
    let minNum = Number(req.query.min_price)
    let maxNum = Number(req.query.max_price)
    if (req.params.length == null) {
      res.send(`${shoes}`)
  } else {
      if (!isNaN(minNum) && !isNaN(maxNum)) {
          res.send(`${shoes}`)
          // if()
      } else {
          res.send('${shoes}')
      }
    }
  })
  

