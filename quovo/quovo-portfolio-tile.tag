<quovo-portfolio-tile
  class="quovo-tile {
    quovo-positions: ctx.route__portfolio__account__user__quovo,
    quovo-portfolio-history: ctx.route__portfolio_history__account__user__quovo
  }"
>
  <quovo-portfolio-nav class="quovo-nav" ctx="{opts.ctx}"></quovo-portfolio-nav>
  <section>
    <quovo-positions ctx="{opts.ctx}"></quovo-positions>
    <quovo-portfolio-history ctx="{opts.ctx}"></quovo-portfolio-history>
  </section>
  <script type="text/ecmascript-6">
    import {tag__assign} from 'ctx-core/riot/tag'
    import {mount__route} from 'ctx-core/route/tag'
    import {log,debug} from 'ctx-core/logger/lib'
    const logPrefix = 'ctx-core/quovo/quovo-portfolio-tile.tag'
    log(logPrefix)
    const tag = tag__assign(this)
    mount__route(tag, {
      on$change__route
    })
    function on$change__route() {
      log(`${logPrefix}|on$change__route`)
      tag.update__ctx()
    }
  </script>
</quovo-portfolio-tile>