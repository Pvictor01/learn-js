const keydown = (input, allowedKeys, calculate) => input.addEventListener('keydown', function(ev) {
  ev.preventDefault()

  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key 
    return
  } 

  if(ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)//'fatiar' do zero até o ultimo caractere, mas sem incluí-lo
  }
 
  if(ev.key === 'Enter') {
    calculate()
  }
})

export default keydown