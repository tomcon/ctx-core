#!/usr/bin/env babel-node
import {promise__catch} from 'ctx-core/promise/lib'
import env from 'ctx-core/quovo/env'
import {post__user__quovo__iframe__token} from 'ctx-core/quovo/rpc'
import {assert__equal,assert__match} from 'ctx-core/test/asserts'
import {log,info,debug} from 'ctx-core/logger/lib'
const base64Regexp = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    , logPrefix = 'ctx-core/quovo/post__user__quovo__iframe__token.test'
let ctx = {}
promise__catch(ctx, async () => {
  log(`${logPrefix}|co`)
  let ctx = {}
  await post__user__quovo__iframe__token(ctx, {
    user_id__quovo: env.QUOVO_USER_ID_DEMO
  })
  assert__equal({actual: env.QUOVO_USER_ID_DEMO > 0, expected: true})
  assert__equal({actual: ctx.user_id__quovo, expected: env.QUOVO_USER_ID_DEMO})
  assert__match({actual: ctx.token__iframe__quovo, match: base64Regexp})
  const {url__iframe__quovo} = ctx
  assert__match({actual: url__iframe__quovo,
    match: `https://www.quovo.com/index.php?action=remoteauth&u=${ctx.user_id__quovo}&k=${ctx.token__iframe__quovo}`})
  info(url__iframe__quovo)
  return ctx
})