import {clone} from 'ctx-core/object/lib'
import {agent__layers} from 'ctx-core/layer/agent'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/layer/dom.mjs'
export function mount__layers(tag, ...array__ctx__mount) {
  log(`${logPrefix}|mount__layers`)
  const ctx__mount = clone(...array__ctx__mount)
      , {el=document.body} = ctx__mount
  let {ctx} = tag
  agent__layers(ctx)
  ctx.agent__layers.unshift({
      layers: [{
        zIndex: 0,
        el
      }]
    })
  tag.on('mount', onmount)
  tag.on('unmount', onunmount)
  return tag
  function onmount() {
    log(`${logPrefix}|mount__layers|onmount`)
    ctx.agent__layers.pick__on(ctx__mount)
  }
  function onunmount() {
    log(`${logPrefix}|mount__layers|onunmount`)
    ctx.agent__layers.pick__off(ctx__mount)
  }
}