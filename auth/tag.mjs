import {clone} from 'ctx-core/object/lib'
import {throw__error} from 'ctx-core/error/lib'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/auth/tag'
export function mount__authentication(tag, ...array__opts) {
  log(`${logPrefix}|mount__authentication`)
  let {ctx} = tag
  const opts = clone(...array__opts)
      , {agent__authentication} = opts
  if (!agent__authentication) {
    throw__error(ctx, 'Missing opts.agent__authentication') }
  tag.on('mount', onmount)
  tag.on('unmount', onunmount)
  return tag
  function onmount() {
    log(`${logPrefix}|onmount`)
    agent__authentication.on('change', onchange__authentication)
  }
  function onunmount() {
    log(`${logPrefix}|onunmount`)
    agent__authentication.off('change', onchange__authentication)
  }
  function onchange__authentication() {
    log(`${logPrefix}|onchange__authentication`)
    tag.update()
  }
}