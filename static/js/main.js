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
  
  button.onclick = sender => {
    const sound = sounds[sender.path[1].index]
    sound.play()
  }

  return wrapper
}

Array(8).fill().forEach((_, idx) => {
  idx += 1
  sounds.push(new Audio(`/static/${idx}.mp3`))

  const rowNumber = (idx-1) / 4 < 1 ? 0 : 1

  document.getElementById(`row-${rowNumber}`).appendChild(createButton(idx))
})
