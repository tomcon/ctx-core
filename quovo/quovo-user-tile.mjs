import {tag__assign} from 'ctx-core/riot/tag'
import {agent__route} from 'ctx-core/route/agent'
import {agent__user__quovo} from 'ctx-core/quovo/agent'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/quovo/quovo-user-tile'
export function init(tag) {
  log(`${logPrefix}|init`)
  tag__assign(tag)
  const {ctx} = tag
  agent__user__quovo(ctx)
  agent__route(ctx)
  tag.on('mount', onmount)
  tag.on('unmount', onunmount)
  function onmount() {
    log(`${logPrefix}|onmount`)
    ctx.agent__route.on('change', onchange__route)
    ctx.agent__user__quovo
      .on('change', onchange__user__quovo)
  }
  function onunmount() {
    log(`${logPrefix}|onunmount`)
    ctx.agent__route.off('change', onchange__route)
    ctx.agent__user__quovo
      .off('change', onchange__user__quovo)
  }
  function onchange__route() {
    log(`${logPrefix}|onchange__route`)
    tag.update()
  }
  function onchange__user__quovo() {
    log(`${logPrefix}|onchange__user__quovo`)
    tag.update()
  }
}