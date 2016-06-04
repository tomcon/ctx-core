<ctx-dialog-position-right>
  <style>
    ctx-dialog-position-right {
      display: none;
    }
    ctx-dialog > dialog {
      left: 100%;
      height: 100%;
      width: 400px;
    }
    ctx-dialog.start > mask {
      background: none;
      opacity: 1.0;
    }
    ctx-dialog.start > dialog {
      left: calc(100% - 400px);
    }
    ctx-dialog > dialog > topbar > title {
      font-size: 24px;
    }
    ctx-dialog > dialog > topbar > back-button {
      float: left;
    }
    ctx-dialog > dialog > topbar > back-button:before {
      content: "\02192";
    }
    ctx-dialog.start > dialog > topbar > back-button:before {
      content: "\02190";
    }
    ctx-dialog > dialog > content {
      padding-left: 40px;
    }
  </style>
</ctx-dialog-position-right>