function cardHover(evt) {
  const card = evt.target;

  const rect = card.getBoundingClientRect();
  const x = evt.clientX - rect.left;
  const y = evt.clientY - rect.top;

  card.style.setProperty('--mouseX', `${x}px`);
  card.style.setProperty('--mouseY', `${y}px`);
}

function addHoverToElement(element) {
  element.addEventListener('mousemove', (evt) => {
    cardHover(evt)
  })
}

function addHoverToListElement(list) {
  list.forEach(element => {
    addHoverToElement(element)
  })
}

export { addHoverToListElement }