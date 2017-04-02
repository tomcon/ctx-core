import env from 'ctx-core/quovo/env'
import {assign,keys} from 'ctx-core/object/lib'
import $html__layout from 'ctx-core/layout/html'
import {$indentation,$indentation$regexp} from 'ctx-core/string/indendation'
import {$html__js} from 'ctx-core/html/lib'
import {$versioned
      , $versioned__js
      , $ctx__html__core} from 'ctx-core/html/node'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/quovo-demo/html'
export function quovo_demo__html(ctx, ...ctx$rest$$) {
  return $html__layout(ctx, {
    title: 'quovo demo',
    body: $body__quovo_demo(ctx),
    css: [$versioned('/dist/quovo-demo.css')]
  }, ...ctx$rest$$)
}
export function $body__quovo_demo(ctx) {
  const ctx$ = assign({
          js: $js__html__files(ctx)
        }, ...arguments)
      , $ctx__html = ctx$.$ctx__html || $ctx__html__core
      , ctx__html = $ctx__html(ctx$, {
          CENSIBLE_API_URL: env.CENSIBLE_API_URL
        })
  log(`${logPrefix}|$body__quovo_demo`, ctx$.user_id__quovo, keys(ctx$))
  return `
    <body>
      <quovo-demo-page ctx="{opts.ctx}"></quovo-demo-page>
      ${$html__js(ctx$, {indentation: $indentation(6), indentFirstLine: false})}
      <script>
        (function() {
          $ctx.mount({
            ctx: ${JSON.stringify(ctx__html)},
            mount: [document.querySelector('quovo-demo-page')]
          })
        })()
      </script>
    </body>`.trim().replace($indentation$regexp(4), '')
}
export function $js__html__files(opts) {
  const rest = opts.rest || []
  return [
    env.BABEL__POLYFILL__URL,
    env.RIOT_URL,
    $versioned__js('/dist/quovo-demo', opts)
  ].concat(...rest)
}