<ctx-row-cells class="{
  present: !!(ctx && ctx.ctx_row),
  compact: !!(ctx && ctx.tag$row_details$compact)}">
  <ctx-cells-present if="{ctx && ctx.ctx_row}">
    <ul>
      <li>
        Column
      </li>
      <li>
        <span if="{ctx && ctx.tag$row_details$compact}">Rank ({ctx && ctx.ctx_row$$.length})</span>
        <span if="{ctx && !ctx.tag$row_details$compact}">Rank (out of {ctx && ctx.ctx_row$$.length})</span>
      </li>
      <li>
        <span if="{ctx && ctx.tag$row_details$compact}">Rating</span>
        <span if="{ctx && !ctx.tag$row_details$compact}">MSCI Rating</span>
      </li>
    </ul>
    <ctx-cell
      each="{ctx_cell in ctx.ctx_row.ctx_cell$$}">
      <ctx-column>{ctx_cell.column$display}</ctx-column>
      <ctx-cell-rank>{ctx_cell.cell$rank}</ctx-cell-rank>
      <ctx-cell-value>{ctx_cell.cell$value}</ctx-cell-value>
    </ctx-cell>
  </ctx-cells-present>
  <ctx-cells-blank if="{!(ctx && ctx.ctx_row)}">
    Select a company&hellip;
  </ctx-cells-blank>
  <style>
    ctx-row-cells {
      border: 1px dotted #111111;
    }
    ctx-row-cells ctx-cells-present {
      display: table;
    }
    ctx-row-cells ctx-cells-present > * {
      display: table-row;
    }
    ctx-row-cells ctx-cells-present > * > * {
      display: table-cell;
      padding: 2px 20px;
    }
    ctx-row-cells.compact ctx-cells-present > * > * {
      padding: 2px 10px;
    }
    ctx-row-cells ctx-cells-present ul {
      list-style: none;
    }
    ctx-row-cells ctx-cells-present ul li {
      text-decoration: underline;
    }
    ctx-row-cells ctx-cells-blank {
      display: block;
    }
  </style>
  <script type="text/babel">
    import {tag__assign} from "ctx-core/tag/lib";
    import {assign__agent__ctx_row} from "ctx-core/table/agent";
    import {log,debug} from "ctx-core/logger/lib";
    const tag = tag__assign(this, {
            registerElement: [
              "ctx-cells-present",
              "ctx-cell",
              "ctx-column",
              "ctx-cell-rank",
              "ctx-cell-value",
              "ctx-cells-blank"
            ]
          })
        , logPrefix = "ctx-core/d3/ctx-row-cells.tag";
    log(logPrefix);
    tag.on("mount", on$mount);
    tag.on("unmount", on$unmount);
    function on$mount() {
      log(`${logPrefix}|on$mount`);
      let ctx = tag.ctx;
      assign__agent__ctx_row(ctx);
      ctx.agent__ctx_row.on("change", ctx_row__on$change);
      ctx_row__on$change();
    }
    function on$unmount() {
      log(`${logPrefix}|on$unmount`);
      let ctx = tag.ctx;
      ctx.agent__ctx_row.off("change", ctx_row__on$change);
    }
    function ctx_row__on$change() {
      log(`${logPrefix}|ctx_row__on$change`);
      tag.ctx$update();
    }
  </script>
</ctx-row-cells>