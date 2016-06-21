<ctx-row-list>
  <ctx-row-list-present show="{ctx && ctx.ctx_row$$filter$$.length}">
    <row
      each="{ctx_row in ctx.ctx_row$$filter$$}"
      class="{select: ctx_row.ctx_row_index === ctx.ctx_row_index}"
      onclick="{tag$row$onclick}"
      data-ctx-row-index="{ctx_row.ctx_row_index}"
    >{ctx_row.name}</row>
  </ctx-row-list-present>
  <ctx-row-list-blank show="{!(ctx && ctx.ctx_row$$filter$$.length)}">
    Loading&hellip;
  </ctx-row-list-blank>
  <style>
    ctx-row-list ctx-row-list-present row {
      display: block;
      padding: 2px;
      list-style-type: none;
      cursor: pointer;
    }
    ctx-row-list ctx-row-list-present row.select {
      background: #cccccc;
      font-weight: bold;
    }
    ctx-row-list ctx-row-list-blank {
      display: block;
    }
  </style>
  <script type="text/babel">
    import {fn$tag,fn$assign__ctx$update} from "ctx-core/tag/lib";
    import {route} from "ctx-core/route/lib";
    import {array$} from "ctx-core/array/lib";
    import {tag$mount__table} from "ctx-core/table/tag";
    import {dom$$} from "ctx-core/dom/lib";
    import dom$classes from "ctx-core/dom-classes/lib";
    import {log,debug} from "ctx-core/logger/lib";
    const assign__ctx$update = fn$assign__ctx$update({after: assign__ctx$update$after})
        , tag = fn$tag(this, {
            assign__ctx$update: assign__ctx$update,
            tag$row$onclick: tag$row$onclick
          })
        , logPrefix = "ctx-core/d3/ctx-row-list.tag";
    let ctx = tag.ctx;
    log(logPrefix);
    tag$mount__table(tag, {
      ctx_row_index$agent$on$change: ctx_row_index$agent$on$change,
      ctx_row$$filter$$$on$change: ctx_row$$filter$$$on$change
    });
    tag.on("mount", on$mount);
    function on$mount() {
      log(`${logPrefix}|on$mount`);
      tag.assign__ctx$update(ctx);
    }
    function ctx_row$$filter$$$on$change(ctx) {
      log(`${logPrefix}|ctx_row$$filter$$$on$change`);
      tag.assign__ctx$update(ctx);
    }
    function ctx_row_index$agent$on$change(ctx) {
      log(`${logPrefix}|ctx_row_index$agent$on$change`);
      tag.assign__ctx$update(ctx);
    }
    function assign__ctx$update$after() {
      log(`${logPrefix}|assign__ctx$update$after`);
      let ctx_row_index = tag.ctx.ctx_row_index;
      dom$row_data_ctx_row_index$$(ctx_row_index).forEach(
        dom$row_data_ctx_row_index =>
          dom$classes.add(dom$row_data_ctx_row_index, "highlight"));
    }
    function tag$row$onclick(e) {
      log(`${logPrefix}|tag$row$onclick`);
      const tag$row_list$target = e.target
          , ctx_row_index = parseInt(tag$row_list$target.getAttribute("data-ctx-row-index"));
      route(ctx, `${ctx.route$path}?ctx_row_index=${encodeURIComponent(ctx_row_index)}`);
    }
    function dom$row_data_ctx_row_index$$(ctx_row_index) {
      return array$(dom$$(`row[data-ctx-row-index="${ctx_row_index}"]`));
    }
  </script>
</ctx-row-list>