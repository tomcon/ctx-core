/**
 * Agent methods for layers.
 * @module ctx-core/layer/agent
 */
import {clone} from 'ctx-core/object/lib'
import {
  clone__concat__array,
  last__array} from 'ctx-core/array/lib'
import {array__agent} from 'ctx-core/agent/array'
import {throw__invalid_state} from 'ctx-core/error/lib'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/layer/agent'
export function layers__agent(ctx, ...agent$ctx$$) {
  log(`${logPrefix}|layers__agent`)
  const agent$ctx = clone(...agent$ctx$$)
  return array__agent(ctx, {
    key: 'layers__agent',
    scope: ['layers'],
    zIndex__base: agent$ctx.zIndex__base || 0,
    load,
    push,
    top,
    zIndex__top,
  }, ...agent$ctx$$)
  function load() {
    log(`${logPrefix}|layers__agent|load`)
    const agent = this
    if (agent.scope.every(scope$ => ctx[scope$])) return
    log(`${logPrefix}|layers__agent|load|load__array`)
    agent.load__array(...arguments)
  }
  function push(...layers$ctx$$) {
    log(`${logPrefix}|layers__agent|push`)
    const agent = this
        , layers$ctx = clone__concat__array(...layers$ctx$$)
    let table__zIndex__top = {}
    const {scope} = agent
    for (let i=0; i < scope.length; i++) {
      const scope$ = scope[i]
          , layers = layers$ctx[scope$] || []
      for (let j=0; j < layers.length; j++) {
        const layer = layers[j]
            , {zIndex} = layer
            , zIndex__top =
                Number.isNaN(table__zIndex__top[scope$])
                ? agent.zIndex__top(scope$)
                : table__zIndex__top[scope$]
        if (Number.isNaN(zIndex)) {
          layer.zIndex =
            Number.isNaN(zIndex__top)
            ? agent.zIndex__base
            : zIndex__top + 1
        } else {
          if (zIndex__top != null && zIndex <= zIndex__top) {
            throw__invalid_state(ctx, {
              key: scope$,
              reason: `zIndex must be greater than ctx.${agent.key}.zIndex__top('${scope$}')`
            })
          }
        }
        table__zIndex__top[scope$] = layer.zIndex
      }
    }
    agent.push__array__agent(layers$ctx)
    return agent
  }
  function top(key) {
    log(`${logPrefix}|layers__agent|top`)
    const agent = this
    key = key || agent.scope$()
    const layers = ctx[key]
    return last__array(layers)
  }
  function zIndex__top() {
    log(`${logPrefix}|layers__agent|zIndex__top`)
    const agent = this
        , top = agent.top(...arguments)
    return top && top.zIndex
  }
}