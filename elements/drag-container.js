const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  return html`
    <div class="draggable-container"
      ontouchstart=${attrs.ondragstart} onmousedown=${attrs.ondragstart}
      ontouchend=${attrs.ondragend} onmouseup=${attrs.ondragend}
      ontouchmove=${attrs.ondrag} onmousemove=${attrs.ondrag}
    >
      ${children}
    </div>
  `
}
