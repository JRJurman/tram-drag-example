const newCard = (startX, startY) => ({
  active: false,
  currentX: 0,
  currentY: 0,
  initialX: null,
  initialY: null
})

const updateCards = (cards, updateIndex, updatedCard) => {
  return cards.map((card, cardIndex) => {
    if (cardIndex !== updateIndex) return card
    return Object.assign({}, card, updatedCard(card))
  })
}

module.exports = {
  init: () => [
    newCard(),
    newCard(),
    newCard()
  ],
  dragStart: (cards, {cardIndex, x, y}) => {
    return updateCards(cards, cardIndex, card => ({
      active: true,
      initialX: x - card.currentX,
      initialY: y - card.currentY
    }))
  },
  dragEnd: (cards) => {
    return cards.map(card =>
      Object.assign({}, card, {active: false})
    )
  },
  drag: (cards, {cardIndex, x, y}) => {
    return updateCards(cards, cardIndex, card => ({
      currentX: x - card.initialX,
      currentY: y - card.initialY
    }))
  }
}
