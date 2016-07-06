<quovo-portfolio-history class="{
  loading: !ctx.quovo$portfolio$history,
  empty: ctx.quovo$portfolio$history && !ctx.quovo$portfolio$history.length}">
  <x-headers show="{ctx.quovo$portfolio$history.length}">
    <x-date>Date</x-date>
    <quovo-tran-type>Tran Type</quovo-tran-type>
    <x-market-code></x-market-code>
    <x-ticker>Ticker</x-ticker>
    <x-ticker-name>Name</x-ticker-name>
    <quovo-portfolio-history-quantity>Quantity</quovo-portfolio-history-quantity>
    <quovo-portfolio-history-value>Value</quovo-portfolio-history-value>
  </x-headers>
  <quovo-position
    each="{quovo$position in ctx.quovo$portfolio$history}">
    <x-date title="{quovo$position.date}">{quovo$position.date}</x-date>
    <quovo-tran-type title="{tran_type$map[quovo$position.tran_type]}">{tran_type$map[quovo$position.tran_type]}</quovo-tran-type>
    <x-market-code title="{quovo$position.market_code}">{quovo$position.market_code}</x-market-code>
    <x-ticker title="{quovo$position.ticker}">{quovo$position.ticker}</x-ticker>
    <x-ticker-name title="{quovo$position.ticker_name}">{quovo$position.ticker_name}</x-ticker-name>
    <quovo-portfolio-history-quantity title="{quovo$position.quantity}">{quovo$position.quantity}</quovo-portfolio-history-quantity>
    <quovo-portfolio-history-value title="{currency$format(quovo$position)}">{currency$format(quovo$position)}</quovo-portfolio-history-value>
  </quovo-position>
  <style>
    quovo-portfolio-history {
      display: table;
      border-spacing: 10px;
      padding: 10px;
    }
    quovo-portfolio-history.empty:before {
      content: "No Transaction History";
    }
    quovo-portfolio-history > * {
      display: block;
    }
    quovo-portfolio-history > * {
      display: block;
      overflow: hidden;
      border: 1px dotted #000000;
      padding: 10px;
      clear: both;
    }
    quovo-portfolio-history > * > * {
      display: block;
      float: left;
      width: 100px;
      min-height: 1px;
      height: 1.25em;
      line-height: 1.25;
      overflow: hidden;
    }
    quovo-portfolio-history > x-headers {
      display: table-header-group;
    }
    quovo-portfolio-history > x-headers > * {
      display: table-cell;
      font-weight: bold;
    }
    quovo-portfolio-history > * {
      display: table-row;
      padding: 10px 0;
      border-top: 1px dashed #000000;
      overflow: hidden;
    }
    quovo-portfolio-history > * > * {
      display: table-cell;
    }
    quovo-portfolio-history > * > x-market-code {
      min-width: 40px;
    }
    quovo-portfolio-history > * > x-ticker-name {
      min-width: 300px;
    }
    quovo-portfolio-history > * > security-type {
      min-width: 200px;
    }
    quovo-portfolio-history > * > asset-class {
      min-width: 200px;
    }
  </style>
  <script type="text/babel">
    import {tag__assign} from "ctx-core/tag/lib";
    import {tran_type$map} from "ctx-core/quovo/lib";
    import {assign__agent__quovo$portfolio$history} from "ctx-core/quovo/agent";
    import {currency$format} from "ctx-core/currency/lib"
    import {log,debug} from "ctx-core/logger/lib";
    const tag = tag__assign(this, {
            currency$format: currency$format,
            tran_type$map: tran_type$map,
            registerElement: [
              "x-headers",
              "x-date",
              "quovo-tran-type",
              "x-market-code",
              "x-ticker",
              "x-ticker-name",
              "quovo-portfolio-history-quantity",
              "quovo-portfolio-history-value"
            ]
          })
        , quovo$portfolio$id = parseInt(opts.quovo_portfolio_id)
        , logPrefix = "ctx-core/quovo/quovo-portfolio-history.tag";
    log(logPrefix);
    tag.on("mount", on$mount);
    tag.on("unmount", on$unmount);
    function on$mount() {
      log(`${logPrefix}|on$mount`);
      let ctx = tag.ctx;
      assign__agent__quovo$portfolio$history(ctx);
      ctx.agent__quovo$portfolio$history.on("change", quovo$portfolio$history__on$change);
      tag.ctx$update();
    }
    function on$unmount() {
      log(`${logPrefix}|on$unmount`);
      const ctx = tag.ctx;
      ctx.agent__quovo$portfolio$history.off("change", quovo$portfolio$history__on$change);
    }
    function quovo$portfolio$history__on$change() {
      log(`${logPrefix}|quovo$portfolio$history__on$change`);
      tag.ctx$update();
    }
  </script>
</quovo-portfolio-history>