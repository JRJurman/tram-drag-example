// create a new card, basically just a starterObject
const newCard = (startX, startY) => ({
  active: false,
  currentX: startX,
  currentY: startY,
  initialX: null,
  initialY: null
})

// function that takes in a set of cards, a card to update, and a
// function to update with. this is a helper method that makes it
// easy to update just a single card, but return the whole list
const updateCards = (cards, updateIndex, updatedCard) => {
  return cards.map((card, cardIndex) => {
    if (cardIndex !== updateIndex) return card
    return Object.assign({}, card, updatedCard(card))
  })
}

module.exports = {
  // create however many cards we want using newCard function
  init: () => [
    newCard(-100, -100),
    newCard(0, 0),
    newCard(100, 100)
  ],
  // initiate dragging for a single card
  dragStart: (cards, {cardIndex, x, y}) => {
    return updateCards(cards, cardIndex, card => ({
      active: true,
      initialX: x - card.currentX,
      initialY: y - card.currentY
    }))
  },
  // this event sets all cards to not active
  dragEnd: (cards) => {
    return cards.map(card =>
      Object.assign({}, card, {active: false})
    )
  },
  // this event drags a single card (at cardIndex)
  drag: (cards, {cardIndex, x, y}) => {
    return updateCards(cards, cardIndex, card => ({
      currentX: x - card.initialX,
      currentY: y - card.initialY
    }))
  }
}
