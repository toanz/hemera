/*!
 * hemera
 * Copyright(c) 2016 Dustin Deus (deusdustin@gmail.com)
 * MIT Licensed
 */

function inbound (ctx) {
  return {
    id: ctx.request$.id,
    duration: ctx.request$.duration / 1000000,
    pattern: ctx.request$.method
  }
}

function outbound (ctx) {
  return {
    id: ctx._message.request.id,
    pattern: ctx.trace$.method
  }
}

export default {
  outbound,
  inbound
}
