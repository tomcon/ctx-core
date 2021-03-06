import {assign} from 'ctx-core/object/lib'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'ctx-core/addtocalendar.com/html.mjs'
export function html__addtocalendar() {
  log(`${logPrefix}|html__addtocalendar`)
  const ctx = assign({indentation: ''}, ...arguments)
      , {indentation} = ctx
  return `<script type="text/javascript">(function () {
      if (window.addtocalendar)if(typeof window.addtocalendar.start == 'function')return
      if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1
          var d = document, s = d.createElement('script'), g = 'getElementsByTagName'
          s.type = 'text/javascript's.charset = 'UTF-8's.async = true
          s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js'
          var h = d[g]('body')[0]h.appendChild(s) }})()
    </script>`.replace(/^    /, indentation)
}