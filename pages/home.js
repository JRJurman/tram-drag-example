const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../elements/app-header'),
  'drag-container': require('../elements/drag-container'),
  'card': require('../elements/card')
})

const getCardIndex = event => {
  return parseInt(event.target.attributes.card.value)
}

const getXY = event => {
  return event.type === "touchstart" ?
      {x: event.touches[0].clientX, y: event.touches[0].clientY} :
      {x: event.clientX, y: event.clientY}
}

module.exports = (store, actions) => {
  const advanceColor = () => {
    actions.advance()
  }

  const onDragStart = event => {
    if (!event.target.className.split(' ').includes('draggable')) return
    const cardIndex = getCardIndex(event)
    const {x, y} = getXY(event)
    actions.dragStart({cardIndex, x, y})
  }

  const onDragEnd = event => {
    actions.dragEnd()
  }

  const onDrag = event => {
    // only drag if there is a card that is active
    const cardIndex = store.cards
      .map(card => card.active)
      .indexOf(true)
    if (cardIndex === -1) return
    const {x, y} = getXY(event)
    actions.drag({cardIndex, x, y})
  }

  return html`
    <div>
      <app-header color=${store.color} onclick=${advanceColor} />
      <drag-container
        ondragstart=${onDragStart} ondragend=${onDragEnd} ondrag=${onDrag}>
        <card card=0 x=${store.cards[0].currentX} y=${store.cards[0].currentY}/>
        <card card=1 x=${store.cards[1].currentX} y=${store.cards[1].currentY}/>
        <card card=2 x=${store.cards[2].currentX} y=${store.cards[2].currentY}/>
      </drag-container>
    </div>
  `
}
