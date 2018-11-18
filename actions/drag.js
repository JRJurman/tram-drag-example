module.exports = {
  init: () => ({
    active: false,
    xOffset: 0,
    yOffset: 0,
    currentX: null,
    currentY: null,
    initialX: null,
    initialY: null
  }),
  dragStart: (drag, {x, y}) => Object.assign(
    {}, drag, {
      active: true,
      initialX: x - drag.xOffset,
      initialY: y - drag.yOffset
    }),
  dragEnd: (drag) => Object.assign(
    {}, drag, {
      active: false,
      initialX: drag.currentX,
      initialY: drag.currentY
    }),
  drag: (drag, {x, y}, actions) => {
    if (!drag.active) return drag
    return Object.assign({}, drag, {
      currentX: x - drag.initialX,
      currentY: y - drag.initialY,
      xOffset: x - drag.initialX,
      yOffset: y - drag.initialY
    })
  }
}
