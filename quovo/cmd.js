import {
  http$get__account$$,
  http$get__user$account$$,
  http$get__brokerage$$,
  http$post__user$account$$,
  http$delete__account,
  http$post__account$sync,
  http$get__account$sync,
  http$get__account$$challenge$$,
  http$put__account$$challenge$$,
  http$post__user$iframe_token,
  http$get__portfolio$$,
  http$get__account$portfolio$$,
  http$get__portfolio$history,
  http$get__position$$,
  http$get__user$$,
  http$post__user$$
} from "ctx-core/quovo/fetch";
import {delegate$cmd$map__assign,cmd$api} from "ctx-core/cmd/lib";
import {log,debug} from "ctx-core/logger/lib";
const logPrefix = "ctx-core/quovo/cmd";
log(logPrefix);
delegate$cmd$map__assign({
  quovo$account$$cmd: quovo$account$$cmd,
  quovo$user$account$$cmd: quovo$user$account$$cmd,
  quovo$brokerage$$post$cmd: quovo$brokerage$$post$cmd,
  quovo$user$iframe$token$post$cmd: quovo$user$iframe$token$post$cmd,
  quovo$portfolio$$cmd: quovo$portfolio$$cmd,
  quovo$account$portfolio$$cmd: quovo$account$portfolio$$cmd,
  quovo$portfolio$history$cmd: quovo$portfolio$history$cmd,
  quovo$position$$cmd: quovo$position$$cmd,
  quovo$user$$post$cmd: quovo$user$$post$cmd,
  quovo$user$$cmd: quovo$user$$cmd
});
export function *quovo$account$$cmd() {
  const cmd$key = "quovo$account$$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$$"
    ],
    cmd$api$required: [
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$account$$) return;
    yield http$get__account$$(cmd$ctx);
    return {quovo$account$$: cmd$ctx.quovo$account$$};
  }
}
export function *quovo$user$account$$cmd() {
  const cmd$key = "quovo$user$account$$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$user$account$$",
      "quovo$user$id"
    ],
    cmd$api$required: [
      "quovo$user$id"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$user$account$$) return;
    if (cmd$ctx.quovo$user$id) {
      yield http$get__user$account$$(cmd$ctx);
    }
    return {quovo$user$account$$: cmd$ctx.quovo$user$account$$};
  }
}
export function *quovo$account$$post$cmd() {
  const cmd$key = "quovo$account$$post$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account",
      "quovo$account$id",
      "quovo$user$id",
      "quovo$brokerage$username",
      "quovo$brokerage$password"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$account || cmd$ctx.quovo$account$id) return;
    const quovo$brokerage$id = cmd$ctx.quovo$brokerage$id
        , quovo$brokerage$username = cmd$ctx.quovo$brokerage$username
        , quovo$brokerage$password = cmd$ctx.quovo$brokerage$password;
    yield http$post__user$account$$(cmd$ctx, {
      body: JSON.stringify({
        brokerage: quovo$brokerage$id,
        username: quovo$brokerage$username,
        password: quovo$brokerage$password
      })
    });
    return {
      quovo$account: cmd$ctx.quovo$account,
      quovo$account$id: cmd$ctx.quovo$account$id};
  }
}
export function *quovo$account$delete$cmd() {
  const cmd$key = "quovo$account$delete$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`, cmd$ctx.quovo$account$id);
    if (!cmd$ctx.quovo$account$id) return;
    yield http$delete__account(cmd$ctx);
    return {
      quovo$account: null,
      quovo$account$id: null
    };
  }
}
export function *quovo$account$sync$post$cmd() {
  const cmd$key = "quovo$account$sync$post$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id",
      "body"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (!cmd$ctx.quovo$account$id) return;
    yield http$post__account$sync(cmd$ctx);
    return {
      quovo$account$sync: cmd$ctx.quovo$account$sync
    };
  }
}
export function *quovo$user$account$$sync$cmd() {
  const cmd$key = "quovo$user$account$$sync$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (!cmd$ctx.quovo$account$id) return;
    yield http$post__account$sync(cmd$ctx);
    yield http$get__account$sync(cmd$ctx);
    return {
      quovo$account$sync: cmd$ctx.quovo$account$sync};
  }
}
export function *quovo$account$challenge$$cmd() {
  const cmd$key = "quovo$account$challenge$$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (!cmd$ctx.quovo$account$id) return;
    yield http$get__account$$challenge$$(cmd$ctx);
    return {
      quovo$account$challenge$$: cmd$ctx.quovo$account$challenge$$};
  }
}
export function *quovo$account$challenge$$put$cmd() {
  const cmd$key = "quovo$account$challenge$$put$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (!cmd$ctx.quovo$account$id) return;
    yield http$put__account$$challenge$$(cmd$ctx);
    return {
      quovo$account$challenge$$: cmd$ctx.quovo$account$challenge$$};
  }
}
export function *quovo$brokerage$$post$cmd() {
  const cmd$key = "quovo$brokerage$$post$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$brokerage$$) return;
    yield http$get__brokerage$$(cmd$ctx);
    return {quovo$brokerage$$: cmd$ctx.quovo$brokerage$$};
  }
}
export function *quovo$user$iframe$token$post$cmd() {
  const cmd$key = "quovo$user$iframe$token$post$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id",
      "quovo$user$id",
      "quovo$iframe$token",
      "quovo$iframe$url"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$iframe$token && cmd$ctx.quovo$iframe$url) return;
    yield http$post__user$iframe_token(cmd$ctx);
    return {
      quovo$iframe$token: cmd$ctx.quovo$iframe$token,
      quovo$iframe$url: cmd$ctx.quovo$iframe$url
    };
  }
}
export function *quovo$portfolio$history$cmd() {
  const cmd$key = "quovo$portfolio$history$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$portfolio$id"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$portfolio$history) return;
    yield http$get__portfolio$history(cmd$ctx);
    return {quovo$portfolio$history: cmd$ctx.quovo$portfolio$history};
  }
}
export function *quovo$portfolio$$cmd() {
  const cmd$key = "quovo$portfolio$$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id",
      "quovo$portfolio$$"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$portfolio$$) return;
    yield http$get__portfolio$$(cmd$ctx);
    return {quovo$portfolio$$: cmd$ctx.quovo$portfolio$$};
  }
}
export function *quovo$account$portfolio$$cmd() {
  const cmd$key = "quovo$account$portfolio$$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id",
      "quovo$account$portfolio$$"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$account$portfolio$$) return;
    yield http$get__account$portfolio$$(cmd$ctx);
    return {quovo$account$portfolio$$: cmd$ctx.quovo$account$portfolio$$};
  }
}
export function *quovo$position$$cmd() {
  const cmd$key = "quovo$position$$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "quovo$account$id",
      "quovo$portfolio$id",
      "quovo$position$$"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$position$$) return;
    yield http$get__position$$(cmd$ctx);
    return {quovo$position$$: cmd$ctx.quovo$position$$};
  }
}
export function *quovo$user$$cmd() {
  const cmd$key = "quovo$user$$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    if (cmd$ctx.quovo$user$$) return;
    yield http$get__user$$(cmd$ctx);
    return {quovo$user$$: cmd$ctx.quovo$user$$};
  }
}
export function *quovo$user$$post$cmd() {
  const cmd$key = "quovo$user$$post$cmd";
  log(`${logPrefix}|${cmd$key}`);
  return yield cmd$api(...arguments, {
    cmd$key: cmd$key,
    cmd$api$whitelist: [
      "body"
    ],
    cmd__fn: cmd__fn
  });
  function *cmd__fn(cmd$ctx) {
    log(`${logPrefix}|${cmd$key}|cmd__fn`);
    yield http$post__user$$(cmd$ctx);
    return {
      quovo$user: cmd$ctx.quovo$user,
      quovo$user$id: cmd$ctx.quovo$user$id
    };
  }
}