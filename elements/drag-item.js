const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  const itemStyle = `
    transform:  translate3d(${attrs.x}px, ${attrs.y}px, 0)
                rotate(${attrs.x/40}deg);
  `
  return html`
    <div class="draggable" style=${itemStyle} />
  `
}
