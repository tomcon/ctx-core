import {change__agents as change__agents__} from 'ctx-core/agent/lib'
import {ensure__router} from 'ctx-core/route/lib'
import {agent__route} from 'ctx-core/route/agent'
import {log,info,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/quovo-demo/route.mjs'
export function mount__router__quovo(ctx, ...ctx__route$$) {
  log(`${logPrefix}|mount__router__quovo`)
  agent__route(ctx)
  ensure__router(ctx)
    .add(
      new RegExp('quovo/users/(.*)'),
      route__user__quovo)
    .add(
      new RegExp('quovo/users/(.*)/accounts/(.*)'),
      route__account__user__quovo())
    .add(
      new RegExp('quovo/users/(.*)/accounts/(.*)/portfolios/(.*)/history'),
      route__portfolio__account__user__quovo)
    .add(
      new RegExp('quovo/users/(.*)/sync'),
      route__sync__user__quovo)
    .add(
      new RegExp('quovo'),
      route__quovo)
    .listen()
  return ctx
  function route__quovo() {
    log(`${logPrefix}|route__quovo`)
    ctx.agent__route.set({
      route: 'quovo'
    })
  }
  function route__user__quovo(user_id__quovo__) {
    log(`${logPrefix}|route__user__quovo`)
    route__user__quovo__('user__quovo', user_id__quovo__)
  }
  function route__sync__user__quovo(user_id__quovo__) {
    log(`${logPrefix}|route__sync__user__quovo`)
    route__user__quovo__('sync__user__quovo', user_id__quovo__)
  }
  function route__user__quovo__(route, user_id__quovo__) {
    log(`${logPrefix}|_route__user__quovo`)
    const user_id__quovo =
            parseInt(user_id__quovo__)
            || null
    ctx.agent__route.set({
      route,
      query__route: {
        user_id__quovo
      }
    })
    change__agents(ctx, {
      user_id__quovo,
      tile__route__user__quovo: true
    })
  }
  function route__account__user__quovo(
    user_id__quovo__,
    account_id__quovo__
  ) {
    info(`${logPrefix}|route__account__user__quovo`)
    const user_id__quovo =
            parseInt(user_id__quovo__)
            || null
        , account_id__quovo =
            parseInt(account_id__quovo__)
            || null
    ctx.agent__route.set({
      route: 'account__user__quovo',
      query__route: {
        user_id__quovo,
        account_id__quovo
      }
    })
    change__agents(ctx, {
      user_id__quovo,
      account_id__quovo,
      tile__route__user__quovo: true,
      tile__route__quovo__account: true
    })
  }
  function route__portfolio__account__user__quovo(
    user_id__quovo__,
    account_id__quovo__,
    portfolio_id__quovo__
  ) {
    info(`${logPrefix}|route__portfolio__account__user__quovo`)
    const user_id__quovo =
            parseInt(user_id__quovo__)
            || null
        , account_id__quovo =
            parseInt(account_id__quovo__)
            || null
        , portfolio_id__quovo =
            parseInt(portfolio_id__quovo__)
            || null
    ctx.agent__route.set({
      route: 'portfolio__account__user__quovo',
      query__route: {
        user_id__quovo,
        account_id__quovo,
        portfolio_id__quovo
      }
    })
    change__agents(ctx, {
      user_id__quovo,
      account_id__quovo,
      portfolio_id__quovo,
      tile__route__user__quovo: true,
      tile__route__quovo__account: true,
      tile__route__portfolio__quovo: true
    })
  }
}
function change__agents() {
  log(`${logPrefix}|change__agents`)
  return change__agents__({
    tile__route__user__quovo: null,
    tile__route__quovo__account: null,
    tile__route__portfolio__quovo: null,
    user_id__quovo: null,
    account_id__quovo: null,
    portfolio_id__quovo: null
  }, ...arguments)
}