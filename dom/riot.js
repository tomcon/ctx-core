import {new__url$anchor} from "ctx-core/dom/lib";
import {change__agent$$} from "ctx-core/agent/lib";
import {log,error,debug} from "ctx-core/logger/lib";
const logPrefix = "ctx-core/dom/riot";
export function riot$route$url$anchor(route__fn) {
  log(`${logPrefix}|riot$route$url$anchor`);
  const route = riot.route.create();
  route("*", anchor => {
    try {
      log(`${logPrefix}|riot$route$url$anchor|route|*`, anchor);
      if (route__fn) new__url$anchor__route__fn$(route__fn);
    } catch (e) {
      error(e);
      throw e;
    }
  });
  return route;
}
export function new__url$anchor__route__fn$(route__fn) {
  log(`${logPrefix}|new__url$anchor__route__fn`);
  route__fn(new__url$anchor());
}
export function route$url$anchor__fn(ctx) {
  log(`${logPrefix}|route$url$anchor__fn`);
  return (anchor$ctx) => {
    log(`${logPrefix}|route$url$anchor__fn|fn`, ctx, anchor$ctx);
    change__agent$$(ctx, anchor$ctx);
  }
}