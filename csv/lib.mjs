import {assign} from 'ctx-core/object/lib'
import {difference} from 'ctx-core/array/lib'
import {agent__table} from 'ctx-core/table/agent'
import {fetch} from 'ctx-core/fetch/lib'
import {log,info,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/csv/lib.mjs'
export function transform__table__csv(csv='', opts={}) {
  log(`${logPrefix}|transform__table__csv`)
  const $cell =
          opts.$cell
          || (cell__csv => cell__csv)
      , table__csv =
          Papa.parse(csv, opts).data
      , columns__csv =
          table__csv[0]
      , rows__csv =
          table__csv.slice(1)
      , rows = []
  for (let i=0; i < rows__csv.length; i++) {
    const row__csv = rows__csv[i]
    let row = {}
    for (let j=0; j < columns__csv.length; j++) {
      const column = columns__csv[j]
          , value = row__csv[j]
          , cell =
              $cell(
                value,
                column,
                j,
                value)
      row[column] = cell
    }
    rows.push(row)
  }
  return rows
}
export function load__data__csv(ctx) {
  log(`${logPrefix}|load__data__csv`)
  let ctx__ = assign(...arguments)
  agent__table(ctx)
  const {path__csv} = ctx
  let { table
      , domain__table
      , domain__ticks
      } = ctx__
  return new Promise(
    resolve => {
      log(`${logPrefix}|load__data__csv|Promise`)
      // TODO: move to a web worker
      setTimeout((async () => {
        info(`${logPrefix}|load__data__csv|Promise|setTimeout`)
        if (!table && path__csv) {
          log(`${logPrefix}|load__data__csv|Promise|setTimeout|path__csv`, path__csv)
          const response = await fetch(path__csv)
              , text = await response.text()
          table = Papa.parse(text).data
          const columns = table[0]
              , rows = table.slice(1)
              , columns__data =
                  difference(columns, ctx.exclude__columns)
          cast__rows()
          push__row_id$i()
          ctx.agent__table.set({
            table,
            domain__table,
            domain__ticks,
            columns__data
          })
          // wait for agent change events to propagate
          ctx.agent__table.one('change', () => {
            log(`${logPrefix}|load__data__csv|Promise|setTimeout|path__csv|change`, path__csv)
            resolve(table)
          })
          function cast__rows() {
            log(`${logPrefix}|load__data__csv|Promise|setTimeout|path__csv|cast__rows`)
            for (let i=0; i < rows.length; i++) {
              const row = rows[i]
              for (let j=0; j < columns.length; j++) {
                let value__f = parseFloat(row[j])
                if (!Number.isNaN(value__f)) {
                  row[j] = value__f
                }
              }
            }
          }
          function push__row_id$i() {
            log(`${logPrefix}|load__data__csv|Promise|setTimeout|path__csv|push__row_id$i`)
            columns.push('row_id', 'i')
            for (let i=0; i < rows.length; i++) {
              rows[i].push(i + 1) // id based on index
              rows[i].push(i) // index
            }
          }
        }
      })(), 0)
    })
}
export async function load__data__csv__worker(ctx) {
  info(`${logPrefix}|load__data__csv|Promise|setTimeout`)
  let table
  const {path__csv} = ctx
  if (path__csv) {
    log(`${logPrefix}|load__data__csv|Promise|setTimeout|path__csv`, path__csv)
    const response =
            await fetch(path__csv)
        , text =
            await response.text()
    table = Papa.parse(text)
    // wait for agent change events to propagate
    ctx.agent__table.one('change', () => {
      table
    })
  }
}
export function toLowerCase__headers__csv(csv) {
  const array__csv = csv.split('\n')
      , csv__ =
          [
            array__csv[0].toLowerCase(),
            ...array__csv.slice(1)
          ].join('\n')
  return csv__
}