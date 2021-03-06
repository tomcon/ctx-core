export function trigger__event__native(el, name__event) {
  const event = document.createEvent('HTMLEvents')
  event.initEvent(name__event, true, false)
  el.dispatchEvent(event)
}
export function trigger__event__custom(el, name__event, data) {
  let event
  if (window.CustomEvent) {
    event = new CustomEvent(name__event, {detail: data})
  } else {
    event = document.createEvent('CustomEvent')
    event.initCustomEvent(name__event, true, true, data)
  }
  el.dispatchEvent(event)
}
export function $MouseEvent(
  eventType,
  params={bubbles: false, cancelable: false}
) {
  try {
    return new MouseEvent(eventType, params)
  } catch (e) {
  }
  const mouseEvent = document.createEvent('MouseEvent')
  mouseEvent.initMouseEvent(
    eventType,
    params.bubbles,
    params.cancelable,
    params.view || window,
    params.detail || 0,
    params.screenX || 0,
    params.screenY || 0,
    params.clientX || 0,
    params.clientY || 0,
    params.ctrlKey || false,
    params.altKey || false,
    params.shiftKey || false,
    params.metaKey || false,
    params.button || 0,
    params.relatedTarget || null
  )
  return mouseEvent
}