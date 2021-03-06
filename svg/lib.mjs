import {clone} from 'ctx-core/object/lib'
import {agent__matrix2d__svg} from 'ctx-core/svg/agent'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/svg/lib.mjs'
export function set__matrix2d__svg(ctx, ...array__ctx__set) {
  log(`${logPrefix}|set__matrix2d__svg`)
  agent__matrix2d__svg(ctx)
  const ctx__set = clone(...array__ctx__set)
      , margin__svg =
          ctx__set.margin__svg
          || ctx.margin__svg
          || {top: 20, right: 20, bottom: 60, left: 100 }
      , width__svg =
          ctx__set.width__svg
          || ctx.width__svg
      , height__svg =
          ctx__set.height__svg
          || ctx.height__svg
      , { left
        , right
        , top
        , bottom
        } = margin__svg
      , width__content__svg =
          width__svg - left - right
      , height__content__svg =
          height__svg - top - bottom
  ctx.agent__matrix2d__svg.set({
    margin__svg,
    width__svg,
    height__svg,
    width__content__svg,
    height__content__svg
  }, ...array__ctx__set)
  return ctx
}
