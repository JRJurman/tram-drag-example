const Tram = require('tram-one')
require("babel-polyfill")

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addRoute('/no-js', require('./pages/no-js'))
app.addActions({
  color: require('./actions/color'),
  cards: require('./actions/cards')
})
app.start('.main')

app.addListener((store, actions, actionName, actionArgs) => {
  console.log('action', actionName)
  console.log('cards', JSON.stringify(store.cards))
})
