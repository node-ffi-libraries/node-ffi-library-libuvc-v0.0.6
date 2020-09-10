var FFI = require("ffi-napi"),
  ref = require("ref-napi"),
  ArrayType = require("ref-array-di")(ref),
  Struct = require("ref-struct-di")(ref),
  Union = require("ref-union-di")(ref);

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {};

exports.functions = new FFI.Library(null, {});
