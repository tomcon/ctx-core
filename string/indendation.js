export function new__indentation(spaces) {
  return new Array(spaces+1).join(" ");
}
export function indentation$regexp(spaces) {
  const regexpSource = "^"+new__indentation(spaces);
  return new RegExp(regexpSource, "gm");
}