const Tram = require('tram-one')
const html = Tram.html({
  'app-header': require('../elements/app-header'),
  'drag-container': require('../elements/drag-container'),
  'drag-item': require('../elements/drag-item')
})

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
    const {x, y} = getXY(event)
    actions.dragStart({x, y})
  }

  const onDragEnd = event => {
    actions.dragEnd()
  }

  const onDrag = event => {
    const {x, y} = getXY(event)
    actions.drag({x, y})
  }

  return html`
    <div>
      <app-header color=${store.color} onclick=${advanceColor} />
      <drag-container
        ondragstart=${onDragStart} ondragend=${onDragEnd} ondrag=${onDrag}>
        <drag-item x=${store.drag.currentX} y=${store.drag.currentY}/>
      </drag-container>
    </div>
  `
}
