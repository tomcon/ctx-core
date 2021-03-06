import env
      , { assign__env
        , $env__process
        , throw__missing__env} from 'ctx-core/env'
import 'ctx-core/svelte/env'
const QUOVO_API_URL =
        env.QUOVO_API_URL
        || 'https://api.quovo.com/v2'
    , QUOVO_ACCESS_TOKEN_KEY_PREFIX =
        env.QUOVO_ACCESS_TOKEN_KEY_PREFIX
        || $env__process('QUOVO_ACCESS_TOKEN_KEY_PREFIX')
        || 'censible-core'
    , QUOVO_LOGIN =
        env.QUOVO_LOGIN
        || $env__process('QUOVO_LOGIN')
        || throw__missing__env('QUOVO_LOGIN')
    , QUOVO_PASSWORD =
        env.QUOVO_PASSWORD
        || $env__process('QUOVO_PASSWORD')
        || throw__missing__env('QUOVO_PASSWORD')
    , QUOVO_BROKERAGE_ID_DEMO =
        env.QUOVO_BROKERAGE_ID_DEMO
        || $env__process('QUOVO_BROKERAGE_ID_DEMO', 'QUOVO_BROKERAGE_ID_TEST', 'TEST_QUOVO_BROKERAGE_ID')
        || throw__missing__env('QUOVO_BROKERAGE_ID_DEMO')
    , QUOVO_BROKERAGE_USERNAME_DEMO =
        env.QUOVO_BROKERAGE_USERNAME_DEMO
        || $env__process('QUOVO_BROKERAGE_USERNAME_DEMO', 'QUOVO_BROKERAGE_USERNAME_TEST', 'TEST_QUOVO_BROKERAGE_USERNAME')
        || throw__missing__env('QUOVO_BROKERAGE_USERNAME_DEMO')
    , QUOVO_BROKERAGE_PASSWORD_DEMO =
        env.QUOVO_BROKERAGE_PASSWORD_DEMO
        || $env__process('QUOVO_BROKERAGE_PASSWORD_DEMO', 'QUOVO_BROKERAGE_PASSWORD_TEST', 'TEST_QUOVO_BROKERAGE_PASSWORD')
        || throw__missing__env('QUOVO_BROKERAGE_PASSWORD_DEMO')
    , QUOVO_USER_ID_DEMO =
        env.QUOVO_USER_ID_DEMO
        || $env__process('QUOVO_USER_ID_DEMO', 'QUOVO_USER_ID_TEST', 'TEST_QUOVO_USER_ID')
        || throw__missing__env('QUOVO_USER_ID_DEMO')
    , QUOVO_USERNAME_DEMO =
        env.QUOVO_USERNAME_DEMO
        || $env__process('QUOVO_USERNAME_DEMO', 'QUOVO_USERNAME_TEST', 'TEST_QUOVO_USERNAME')
        || throw__missing__env('QUOVO_USERNAME_DEMO')
    , QUOVO_ACCOUNT_ID_DEMO =
        env.QUOVO_ACCOUNT_ID_DEMO
        || $env__process('QUOVO_ACCOUNT_ID_DEMO', 'QUOVO_ACCOUNT_ID_TEST', 'TEST_QUOVO_ACCOUNT_ID')
        || throw__missing__env('QUOVO_ACCOUNT_ID_DEMO')
    , QUOVO_PORTFOLIO_ID_DEMO =
        env.QUOVO_PORTFOLIO_ID_DEMO
        || $env__process('QUOVO_PORTFOLIO_ID_DEMO', 'QUOVO_PORTFOLIO_ID_TEST', 'TEST_QUOVO_PORTFOLIO_ID')
        || throw__missing__env('QUOVO_PORTFOLIO_ID_DEMO')
assign__env({
  QUOVO_ACCESS_TOKEN_KEY_PREFIX,
  QUOVO_LOGIN,
  QUOVO_PASSWORD,
  QUOVO_BROKERAGE_ID_DEMO: parseInt(QUOVO_BROKERAGE_ID_DEMO),
  QUOVO_BROKERAGE_USERNAME_DEMO,
  QUOVO_BROKERAGE_PASSWORD_DEMO,
  QUOVO_USER_ID_DEMO: parseInt(QUOVO_USER_ID_DEMO),
  QUOVO_USERNAME_DEMO,
  QUOVO_ACCOUNT_ID_DEMO: parseInt(QUOVO_ACCOUNT_ID_DEMO),
  QUOVO_PORTFOLIO_ID_DEMO: parseInt(QUOVO_PORTFOLIO_ID_DEMO)
})
export default env
export function $user__quovo__demo(ctx) {
  return {
    username: ctx.user__quovoname,
    name: 'Quovo Test2',
    email: 'development@quovo.com',
    phone: ''
  }
}