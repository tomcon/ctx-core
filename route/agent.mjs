/**
 * Route agents
 * @module ctx-core/route/agent
 */
import {ensure__agent, set as set__agent} from 'ctx-core/agent/lib'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/route/agent.mjs'
export function agent__route(ctx, ...array__opts) {
  let agent
  return ensure__agent(ctx, {
    key: 'agent__route',
    scope:
      [ 'route',
        'query__route'],
    init,
    set
  }, ...array__opts)
  function init() {
    log(`${logPrefix}|agent__route|init`)
    agent = this
  }
  async function set() {
    set__agent.apply(agent, [{
      route: '',
      query__route: {}
    }, ...arguments])
  }
}