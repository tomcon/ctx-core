import {assign,clone} from "ctx-core/object/lib";
import {log,debug} from "ctx-core/logger/lib";
const logPrefix = "ctx-core/db3/tag";
export function refresh__background$filter$highlight__d3$chart(ctx, ...ctx$rest$$) {
  log(`${logPrefix}|refresh__background$filter$highlight__d3$chart`);
  const background__ctx_row$$__d3$selection =
          refresh__d3$chart(ctx, ...ctx$rest$$, {attr$class: "background"})
      , filter__ctx_row$$__d3$selection =
          refresh__d3$chart(ctx, ...ctx$rest$$, {attr$class: "filter"})
      , highlight__ctx_row$$__d3$selection =
          refresh__d3$chart(ctx, ...ctx$rest$$, {attr$class: "highlight"});
  return assign(ctx, {
    background__ctx_row$$__d3$selection: background__ctx_row$$__d3$selection,
    filter__ctx_row$$__d3$selection: filter__ctx_row$$__d3$selection,
    highlight__ctx_row$$__d3$selection: highlight__ctx_row$$__d3$selection
  }, ...ctx$rest$$);
}
export function refresh__d3$chart(ctx, ...ctx$rest$$) {
  const ctx$clone = clone(...arguments)
      , d3$select = ctx$clone.d3$select || ctx$clone.d3$svg
      , attr$class = ctx$clone.attr$class;
  log(`${logPrefix}|refresh__d3$chart`, attr$class, d3$select);
  if (!d3$select) return;
  const ctx$d3$line = ctx.d3$line
      , ctx_row$$ = ctx.ctx_row$$;
  let d3$select$g = d3$select.select(`g.${attr$class}`);
  const isNew__d3$svg$g = d3$select$g.empty();
  if (isNew__d3$svg$g) {
    log(`${logPrefix}|refresh__d3$chart|isNew__d3$svg$g`, attr$class);
    d3$select$g = d3$select
      .append("g")
      .classed(attr$class, true);
    d3$select$g.selectAll("path").data(ctx_row$$)
      .enter()
        .append("path")
        .attr("data-ctx-row-id", ctx_row => ctx_row.ctx_row_id)
        .attr("data-ctx-row-name", ctx_row => ctx_row.name);
  }
  const d3$select$g$path = d3$select$g
          .selectAll("path")
          .attr("d", ctx_row => ctx$d3$line(ctx_row.ctx_cell$$));
  refresh__filter__d3$chart(ctx);
  refresh__highlight__d3$chart(ctx);
  return d3$select$g$path;
}
export function refresh__filter__d3$chart(ctx) {
  log(`${logPrefix}|refresh__filter__d3$chart`);
  const filter__ctx_row$$__d3$selection = ctx.filter__ctx_row$$__d3$selection
      , ctx_row$$filter$$map = ctx.ctx_row$$filter$$map;
  hide__d3$chart$select(filter__ctx_row$$__d3$selection, ctx_row$$filter$$map);
}
export function refresh__highlight__d3$chart(ctx) {
  log(`${logPrefix}|refresh__highlight__d3$chart`);
  const highlight__ctx_row$$__d3$selection = ctx.highlight__ctx_row$$__d3$selection
      , ctx_row$$filter$$highlight = ctx.ctx_row$$filter$$highlight;
  let ctx_row$map$index = {};
  if (ctx_row$$filter$$highlight) {
    const ctx_row_id = ctx_row$$filter$$highlight.ctx_row_id;
    ctx_row$map$index[ctx_row_id] = ctx_row$$filter$$highlight;
  }
  hide__d3$chart$select(highlight__ctx_row$$__d3$selection, ctx_row$map$index);
}
function hide__d3$chart$select(d3$select, ctx_row$$table={}) {
  log(`${logPrefix}|hide__d3$chart$select`);
  if (d3$select) {
    d3$select
      .classed(
        "hide",
        ctx_row => {
          return !ctx_row || !ctx_row$$table[ctx_row.ctx_row_id];
        })
  }
}