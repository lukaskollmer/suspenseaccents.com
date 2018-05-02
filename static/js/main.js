const sounds = [undefined]

const createButton = index => {
  const wrapper = document.createElement('div')
  const button  = document.createElement('a')
  const text    = document.createElement('p')

  wrapper.appendChild(button)
  button.appendChild(text)

  wrapper.classList.add('three', 'columns')
  button.classList.add("button")
  button.index = index
  text.innerHTML = `Play #${index}`

  button.onclick = function() {
    sounds[this.index].play()
  }

  return wrapper
}

Array(8).fill().forEach((_, idx) => {
  const rowNumber = idx / 4 < 1 ? 0 : 1

  idx += 1

  sounds.push(new Audio(`/static/${idx}.mp3`))

  document.getElementById(`row-${rowNumber}`).appendChild(createButton(idx))
})
