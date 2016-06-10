<ctx-size>
  <lte-960></lte-960>
  <lte-650></lte-650>
  <lte-480></lte-480>
  <yield/>
  <style>
    ctx-size {
      display: block;
    }
    ctx-size > * {
      display: none;
    }
    @media (max-width: 960px) {
      ctx-size > lte-960 {
        display: block;
      }
    }
    @media (max-width: 900px) {
      ctx-size > lte-650 {
        display: block;
      }
    }
    @media (max-width: 480px) {
      ctx-size > lte-480 {
        display: block;
      }
    }
  </style>
  <script type="text/babel">
    import {fn$tag} from "ctx-core/tag/lib";
    import {assign} from "ctx-core/object/lib";
    import {dom$} from "ctx-core/dom/lib";
    const tag = fn$tag(this)
        , dom$root = tag.root
        , getComputedStyle = window.getComputedStyle
        , logPrefix = "ctx-core/dom/ctx-size.tag";
    let $isLte960, $isLte650, $isLte480;
    tag.on("mount", on$mount);
    tag.on("unmount", on$unmount);
    console.log(logPrefix);
    // TODO: Handle window.onresize
    function on$mount() {
      console.log(`${logPrefix}|on$mount`);
      $isLte960 = dom$("lte-960", dom$root);
      $isLte650 = dom$("lte-650", dom$root);
      $isLte480 = dom$("lte-480", dom$root);
      assign(tag.ctx, {
        isLte960: isLte960,
        isLte650: isLte650,
        isLte480: isLte480
      });
    }
    function on$unmount() {
      console.log(`${logPrefix}|on$mount`);
      let ctx = tag.ctx;
      delete ctx.isLte480;
      delete ctx.isLte650;
      delete ctx.isLte960;
    }
    function isLte960() {
      console.log(`${logPrefix}|isLte960`);
      return getComputedStyle($isLte960).display === "block";
    }
    function isLte650() {
      console.log(`${logPrefix}|isLte650`);
      return getComputedStyle($isLte650).display === "block";
    }
    function isLte480() {
      console.log(`${logPrefix}|isLte480`);
      return getComputedStyle($isLte480).display === "block";
    }
  </script>
</ctx-size>