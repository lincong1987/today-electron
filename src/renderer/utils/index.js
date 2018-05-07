export function oneOf(a, from) {
  if (Array.isArray(from) && from.indexOf(a) > -1) {
    return true
  } else if (typeof from === 'object') {
    Object.keys(from).forEach(key => {
      if (from[key] === a) {
        return true
      }
    })
  }
  return false
}

export const on = function(element, event, handler) {
  if (element && event && handler) {
    element.addEventListener(event, handler, false)
  }
}
