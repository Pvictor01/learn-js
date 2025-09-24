export const name = 'Paulo'

export function label(attributes) {
  const element = document.createElement('label') //Sintaxe: Object.assign(alvo, fonte1, fonte2, ...)
  Object.assign(element, attributes)
  return element
}

export function input(attributes) {
  const element = document.createElement('input')
  Object.assign(element, attributes)
  return element
}

export function br() {
  const element = document.createElement('br')
  return element
}