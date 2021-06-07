/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.1
 * - git commit v2.0.1-1-g9e27804 on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "libuvc.h"
 * - SHA256: 1e358dcf56e054434234ecb3a2ee72a10beeab90083c946e7e07770e502fa110
 *
 * Generator options:
 * - Library: null
 * - Single file: true
 * - Prefixes: []
 * - Compiler arguments: []
 */

const FFI = require("ffi-napi");
const ref = require("ref-napi");
const ArrayType = require("ref-array-di")(ref);
const Struct = require("ref-struct-di")(ref);
const Union = require("ref-union-di")(ref);

const constants = {
  uvc_ct_ctrl_selector: {
    UVC_CT_CONTROL_UNDEFINED: 0,
    UVC_CT_SCANNING_MODE_CONTROL: 1,
    UVC_CT_AE_MODE_CONTROL: 2,
    UVC_CT_AE_PRIORITY_CONTROL: 3,
    UVC_CT_EXPOSURE_TIME_ABSOLUTE_CONTROL: 4,
    UVC_CT_EXPOSURE_TIME_RELATIVE_CONTROL: 5,
    UVC_CT_FOCUS_ABSOLUTE_CONTROL: 6,
    UVC_CT_FOCUS_RELATIVE_CONTROL: 7,
    UVC_CT_FOCUS_AUTO_CONTROL: 8,
    UVC_CT_IRIS_ABSOLUTE_CONTROL: 9,
    UVC_CT_IRIS_RELATIVE_CONTROL: 10,
    UVC_CT_ZOOM_ABSOLUTE_CONTROL: 11,
    UVC_CT_ZOOM_RELATIVE_CONTROL: 12,
    UVC_CT_PANTILT_ABSOLUTE_CONTROL: 13,
    UVC_CT_PANTILT_RELATIVE_CONTROL: 14,
    UVC_CT_ROLL_ABSOLUTE_CONTROL: 15,
    UVC_CT_ROLL_RELATIVE_CONTROL: 16,
    UVC_CT_PRIVACY_CONTROL: 17,
    UVC_CT_FOCUS_SIMPLE_CONTROL: 18,
    UVC_CT_DIGITAL_WINDOW_CONTROL: 19,
    UVC_CT_REGION_OF_INTEREST_CONTROL: 20,
    0: "UVC_CT_CONTROL_UNDEFINED",
    1: "UVC_CT_SCANNING_MODE_CONTROL",
    2: "UVC_CT_AE_MODE_CONTROL",
    3: "UVC_CT_AE_PRIORITY_CONTROL",
    4: "UVC_CT_EXPOSURE_TIME_ABSOLUTE_CONTROL",
    5: "UVC_CT_EXPOSURE_TIME_RELATIVE_CONTROL",
    6: "UVC_CT_FOCUS_ABSOLUTE_CONTROL",
    7: "UVC_CT_FOCUS_RELATIVE_CONTROL",
    8: "UVC_CT_FOCUS_AUTO_CONTROL",
    9: "UVC_CT_IRIS_ABSOLUTE_CONTROL",
    10: "UVC_CT_IRIS_RELATIVE_CONTROL",
    11: "UVC_CT_ZOOM_ABSOLUTE_CONTROL",
    12: "UVC_CT_ZOOM_RELATIVE_CONTROL",
    13: "UVC_CT_PANTILT_ABSOLUTE_CONTROL",
    14: "UVC_CT_PANTILT_RELATIVE_CONTROL",
    15: "UVC_CT_ROLL_ABSOLUTE_CONTROL",
    16: "UVC_CT_ROLL_RELATIVE_CONTROL",
    17: "UVC_CT_PRIVACY_CONTROL",
    18: "UVC_CT_FOCUS_SIMPLE_CONTROL",
    19: "UVC_CT_DIGITAL_WINDOW_CONTROL",
    20: "UVC_CT_REGION_OF_INTEREST_CONTROL",
  },
  uvc_device_power_mode: {
    UVC_VC_VIDEO_POWER_MODE_FULL: 11,
    UVC_VC_VIDEO_POWER_MODE_DEVICE_DEPENDENT: 27,
    11: "UVC_VC_VIDEO_POWER_MODE_FULL",
    27: "UVC_VC_VIDEO_POWER_MODE_DEVICE_DEPENDENT",
  },
  uvc_error: {
    UVC_SUCCESS: 0,
    UVC_ERROR_IO: -1,
    UVC_ERROR_INVALID_PARAM: -2,
    UVC_ERROR_ACCESS: -3,
    UVC_ERROR_NO_DEVICE: -4,
    UVC_ERROR_NOT_FOUND: -5,
    UVC_ERROR_BUSY: -6,
    UVC_ERROR_TIMEOUT: -7,
    UVC_ERROR_OVERFLOW: -8,
    UVC_ERROR_PIPE: -9,
    UVC_ERROR_INTERRUPTED: -10,
    UVC_ERROR_NO_MEM: -11,
    UVC_ERROR_NOT_SUPPORTED: -12,
    UVC_ERROR_INVALID_DEVICE: -50,
    UVC_ERROR_INVALID_MODE: -51,
    UVC_ERROR_CALLBACK_EXISTS: -52,
    UVC_ERROR_OTHER: -99,
    0: "UVC_SUCCESS",
    "-1": "UVC_ERROR_IO",
    "-2": "UVC_ERROR_INVALID_PARAM",
    "-3": "UVC_ERROR_ACCESS",
    "-4": "UVC_ERROR_NO_DEVICE",
    "-5": "UVC_ERROR_NOT_FOUND",
    "-6": "UVC_ERROR_BUSY",
    "-7": "UVC_ERROR_TIMEOUT",
    "-8": "UVC_ERROR_OVERFLOW",
    "-9": "UVC_ERROR_PIPE",
    "-10": "UVC_ERROR_INTERRUPTED",
    "-11": "UVC_ERROR_NO_MEM",
    "-12": "UVC_ERROR_NOT_SUPPORTED",
    "-50": "UVC_ERROR_INVALID_DEVICE",
    "-51": "UVC_ERROR_INVALID_MODE",
    "-52": "UVC_ERROR_CALLBACK_EXISTS",
    "-99": "UVC_ERROR_OTHER",
  },
  uvc_et_type: {
    UVC_EXTERNAL_VENDOR_SPECIFIC: 1024,
    UVC_COMPOSITE_CONNECTOR: 1025,
    UVC_SVIDEO_CONNECTOR: 1026,
    UVC_COMPONENT_CONNECTOR: 1027,
    1024: "UVC_EXTERNAL_VENDOR_SPECIFIC",
    1025: "UVC_COMPOSITE_CONNECTOR",
    1026: "UVC_SVIDEO_CONNECTOR",
    1027: "UVC_COMPONENT_CONNECTOR",
  },
  uvc_frame_format: {
    UVC_FRAME_FORMAT_UNKNOWN: 0,
    UVC_FRAME_FORMAT_ANY: 0,
    UVC_FRAME_FORMAT_UNCOMPRESSED: 1,
    UVC_FRAME_FORMAT_COMPRESSED: 2,
    UVC_FRAME_FORMAT_YUYV: 3,
    UVC_FRAME_FORMAT_UYVY: 4,
    UVC_FRAME_FORMAT_RGB: 5,
    UVC_FRAME_FORMAT_BGR: 6,
    UVC_FRAME_FORMAT_MJPEG: 7,
    UVC_FRAME_FORMAT_GRAY8: 8,
    UVC_FRAME_FORMAT_GRAY16: 9,
    UVC_FRAME_FORMAT_BY8: 10,
    UVC_FRAME_FORMAT_BA81: 11,
    UVC_FRAME_FORMAT_SGRBG8: 12,
    UVC_FRAME_FORMAT_SGBRG8: 13,
    UVC_FRAME_FORMAT_SRGGB8: 14,
    UVC_FRAME_FORMAT_SBGGR8: 15,
    UVC_FRAME_FORMAT_COUNT: 16,
    0: "UVC_FRAME_FORMAT_UNKNOWN",
    0: "UVC_FRAME_FORMAT_ANY",
    1: "UVC_FRAME_FORMAT_UNCOMPRESSED",
    2: "UVC_FRAME_FORMAT_COMPRESSED",
    3: "UVC_FRAME_FORMAT_YUYV",
    4: "UVC_FRAME_FORMAT_UYVY",
    5: "UVC_FRAME_FORMAT_RGB",
    6: "UVC_FRAME_FORMAT_BGR",
    7: "UVC_FRAME_FORMAT_MJPEG",
    8: "UVC_FRAME_FORMAT_GRAY8",
    9: "UVC_FRAME_FORMAT_GRAY16",
    10: "UVC_FRAME_FORMAT_BY8",
    11: "UVC_FRAME_FORMAT_BA81",
    12: "UVC_FRAME_FORMAT_SGRBG8",
    13: "UVC_FRAME_FORMAT_SGBRG8",
    14: "UVC_FRAME_FORMAT_SRGGB8",
    15: "UVC_FRAME_FORMAT_SBGGR8",
    16: "UVC_FRAME_FORMAT_COUNT",
  },
  uvc_it_type: {
    UVC_ITT_VENDOR_SPECIFIC: 512,
    UVC_ITT_CAMERA: 513,
    UVC_ITT_MEDIA_TRANSPORT_INPUT: 514,
    512: "UVC_ITT_VENDOR_SPECIFIC",
    513: "UVC_ITT_CAMERA",
    514: "UVC_ITT_MEDIA_TRANSPORT_INPUT",
  },
  uvc_ot_type: {
    UVC_OTT_VENDOR_SPECIFIC: 768,
    UVC_OTT_DISPLAY: 769,
    UVC_OTT_MEDIA_TRANSPORT_OUTPUT: 770,
    768: "UVC_OTT_VENDOR_SPECIFIC",
    769: "UVC_OTT_DISPLAY",
    770: "UVC_OTT_MEDIA_TRANSPORT_OUTPUT",
  },
  uvc_pu_ctrl_selector: {
    UVC_PU_CONTROL_UNDEFINED: 0,
    UVC_PU_BACKLIGHT_COMPENSATION_CONTROL: 1,
    UVC_PU_BRIGHTNESS_CONTROL: 2,
    UVC_PU_CONTRAST_CONTROL: 3,
    UVC_PU_GAIN_CONTROL: 4,
    UVC_PU_POWER_LINE_FREQUENCY_CONTROL: 5,
    UVC_PU_HUE_CONTROL: 6,
    UVC_PU_SATURATION_CONTROL: 7,
    UVC_PU_SHARPNESS_CONTROL: 8,
    UVC_PU_GAMMA_CONTROL: 9,
    UVC_PU_WHITE_BALANCE_TEMPERATURE_CONTROL: 10,
    UVC_PU_WHITE_BALANCE_TEMPERATURE_AUTO_CONTROL: 11,
    UVC_PU_WHITE_BALANCE_COMPONENT_CONTROL: 12,
    UVC_PU_WHITE_BALANCE_COMPONENT_AUTO_CONTROL: 13,
    UVC_PU_DIGITAL_MULTIPLIER_CONTROL: 14,
    UVC_PU_DIGITAL_MULTIPLIER_LIMIT_CONTROL: 15,
    UVC_PU_HUE_AUTO_CONTROL: 16,
    UVC_PU_ANALOG_VIDEO_STANDARD_CONTROL: 17,
    UVC_PU_ANALOG_LOCK_STATUS_CONTROL: 18,
    UVC_PU_CONTRAST_AUTO_CONTROL: 19,
    0: "UVC_PU_CONTROL_UNDEFINED",
    1: "UVC_PU_BACKLIGHT_COMPENSATION_CONTROL",
    2: "UVC_PU_BRIGHTNESS_CONTROL",
    3: "UVC_PU_CONTRAST_CONTROL",
    4: "UVC_PU_GAIN_CONTROL",
    5: "UVC_PU_POWER_LINE_FREQUENCY_CONTROL",
    6: "UVC_PU_HUE_CONTROL",
    7: "UVC_PU_SATURATION_CONTROL",
    8: "UVC_PU_SHARPNESS_CONTROL",
    9: "UVC_PU_GAMMA_CONTROL",
    10: "UVC_PU_WHITE_BALANCE_TEMPERATURE_CONTROL",
    11: "UVC_PU_WHITE_BALANCE_TEMPERATURE_AUTO_CONTROL",
    12: "UVC_PU_WHITE_BALANCE_COMPONENT_CONTROL",
    13: "UVC_PU_WHITE_BALANCE_COMPONENT_AUTO_CONTROL",
    14: "UVC_PU_DIGITAL_MULTIPLIER_CONTROL",
    15: "UVC_PU_DIGITAL_MULTIPLIER_LIMIT_CONTROL",
    16: "UVC_PU_HUE_AUTO_CONTROL",
    17: "UVC_PU_ANALOG_VIDEO_STANDARD_CONTROL",
    18: "UVC_PU_ANALOG_LOCK_STATUS_CONTROL",
    19: "UVC_PU_CONTRAST_AUTO_CONTROL",
  },
  uvc_req_code: {
    UVC_RC_UNDEFINED: 0,
    UVC_SET_CUR: 1,
    UVC_GET_CUR: 129,
    UVC_GET_MIN: 130,
    UVC_GET_MAX: 131,
    UVC_GET_RES: 132,
    UVC_GET_LEN: 133,
    UVC_GET_INFO: 134,
    UVC_GET_DEF: 135,
    0: "UVC_RC_UNDEFINED",
    1: "UVC_SET_CUR",
    129: "UVC_GET_CUR",
    130: "UVC_GET_MIN",
    131: "UVC_GET_MAX",
    132: "UVC_GET_RES",
    133: "UVC_GET_LEN",
    134: "UVC_GET_INFO",
    135: "UVC_GET_DEF",
  },
  uvc_status_attribute: {
    UVC_STATUS_ATTRIBUTE_VALUE_CHANGE: 0,
    UVC_STATUS_ATTRIBUTE_INFO_CHANGE: 1,
    UVC_STATUS_ATTRIBUTE_FAILURE_CHANGE: 2,
    UVC_STATUS_ATTRIBUTE_UNKNOWN: 255,
    0: "UVC_STATUS_ATTRIBUTE_VALUE_CHANGE",
    1: "UVC_STATUS_ATTRIBUTE_INFO_CHANGE",
    2: "UVC_STATUS_ATTRIBUTE_FAILURE_CHANGE",
    255: "UVC_STATUS_ATTRIBUTE_UNKNOWN",
  },
  uvc_status_class: {
    UVC_STATUS_CLASS_CONTROL: 16,
    UVC_STATUS_CLASS_CONTROL_CAMERA: 17,
    UVC_STATUS_CLASS_CONTROL_PROCESSING: 18,
    16: "UVC_STATUS_CLASS_CONTROL",
    17: "UVC_STATUS_CLASS_CONTROL_CAMERA",
    18: "UVC_STATUS_CLASS_CONTROL_PROCESSING",
  },
  uvc_term_type: {
    UVC_TT_VENDOR_SPECIFIC: 256,
    UVC_TT_STREAMING: 257,
    256: "UVC_TT_VENDOR_SPECIFIC",
    257: "UVC_TT_STREAMING",
  },
  uvc_vs_desc_subtype: {
    UVC_VS_UNDEFINED: 0,
    UVC_VS_INPUT_HEADER: 1,
    UVC_VS_OUTPUT_HEADER: 2,
    UVC_VS_STILL_IMAGE_FRAME: 3,
    UVC_VS_FORMAT_UNCOMPRESSED: 4,
    UVC_VS_FRAME_UNCOMPRESSED: 5,
    UVC_VS_FORMAT_MJPEG: 6,
    UVC_VS_FRAME_MJPEG: 7,
    UVC_VS_FORMAT_MPEG2TS: 10,
    UVC_VS_FORMAT_DV: 12,
    UVC_VS_COLORFORMAT: 13,
    UVC_VS_FORMAT_FRAME_BASED: 16,
    UVC_VS_FRAME_FRAME_BASED: 17,
    UVC_VS_FORMAT_STREAM_BASED: 18,
    0: "UVC_VS_UNDEFINED",
    1: "UVC_VS_INPUT_HEADER",
    2: "UVC_VS_OUTPUT_HEADER",
    3: "UVC_VS_STILL_IMAGE_FRAME",
    4: "UVC_VS_FORMAT_UNCOMPRESSED",
    5: "UVC_VS_FRAME_UNCOMPRESSED",
    6: "UVC_VS_FORMAT_MJPEG",
    7: "UVC_VS_FRAME_MJPEG",
    10: "UVC_VS_FORMAT_MPEG2TS",
    12: "UVC_VS_FORMAT_DV",
    13: "UVC_VS_COLORFORMAT",
    16: "UVC_VS_FORMAT_FRAME_BASED",
    17: "UVC_VS_FRAME_FRAME_BASED",
    18: "UVC_VS_FORMAT_STREAM_BASED",
  },
};

// NOTE: defining individual types as "global" constants to be able to reference them without any prefix, but also under the "types" object to be able to reference them recursively.
const types = {};

const js_uchar = ref.types.uchar;
const js_int32 = ref.types.int32;
const uvc_error_t = js_int32;
const js_void = ref.types.void;
const js_voidPointer = ref.refType(js_void);
const uvc_context = js_voidPointer;
const uvc_context_t = uvc_context;
const uvc_context_tPointer = ref.refType(uvc_context_t);
const libusb_context = js_voidPointer;
const uvc_device = js_voidPointer;
const uvc_device_t = uvc_device;
const uvc_device_tPointer = ref.refType(uvc_device_t);
const __uint8_t = js_uchar;
const uint8_t = __uint8_t;
const js_ushort = ref.types.ushort;
const __uint16_t = js_ushort;
const uint16_t = __uint16_t;
const js_CString = ref.types.CString;
const uvc_device_descriptor = Struct({
  idVendor: uint16_t,
  idProduct: uint16_t,
  bcdUVC: uint16_t,
  serialNumber: js_CString,
  manufacturer: js_CString,
  product: js_CString,
});
const uvc_device_descriptor_t = uvc_device_descriptor;
const uvc_device_descriptor_tPointer = ref.refType(uvc_device_descriptor_t);
const uvc_device_handle = js_voidPointer;
const uvc_device_handle_t = uvc_device_handle;
const uvc_device_handle_tPointer = ref.refType(uvc_device_handle_t);
const libusb_device_handle = js_voidPointer;
const js_uint32 = ref.types.uint32;
const js_ulong = ref.types.ulong;
const size_t = js_ulong;
const FunctionProto_0 = FFI.Function(ref.types.void, [
  js_uint32,
  js_int32,
  js_int32,
  js_uint32,
  js_voidPointer,
  size_t,
  js_voidPointer,
]);
const uvc_status_callback_t = FunctionProto_0;
const FunctionProto_1 = FFI.Function(ref.types.void, [
  js_int32,
  js_int32,
  js_voidPointer,
]);
const uvc_button_callback_t = FunctionProto_1;
const __uint64_t = js_ulong;
const uint64_t = __uint64_t;
const uvc_input_terminal = Struct({
  prev: types.uvc_input_terminal,
  next: types.uvc_input_terminal,
  bTerminalID: uint8_t,
  wTerminalType: js_uint32,
  wObjectiveFocalLengthMin: uint16_t,
  wObjectiveFocalLengthMax: uint16_t,
  wOcularFocalLength: uint16_t,
  bmControls: uint64_t,
});
const uvc_input_terminal_t = uvc_input_terminal;
const uvc_input_terminal_tPointer = ref.refType(uvc_input_terminal_t);
const uvc_output_terminal = Struct({
  prev: types.uvc_output_terminal,
  next: types.uvc_output_terminal,
});
const uvc_output_terminal_t = uvc_output_terminal;
const uvc_output_terminal_tPointer = ref.refType(uvc_output_terminal_t);
const uvc_selector_unit = Struct({
  prev: types.uvc_selector_unit,
  next: types.uvc_selector_unit,
  bUnitID: uint8_t,
});
const uvc_selector_unit_t = uvc_selector_unit;
const uvc_selector_unit_tPointer = ref.refType(uvc_selector_unit_t);
const uvc_processing_unit = Struct({
  prev: types.uvc_processing_unit,
  next: types.uvc_processing_unit,
  bUnitID: uint8_t,
  bSourceID: uint8_t,
  bmControls: uint64_t,
});
const uvc_processing_unit_t = uvc_processing_unit;
const uvc_processing_unit_tPointer = ref.refType(uvc_processing_unit_t);
const uint8_t_array_16 = ArrayType(uint8_t, 16);
const uvc_extension_unit = Struct({
  prev: types.uvc_extension_unit,
  next: types.uvc_extension_unit,
  bUnitID: uint8_t,
  guidExtensionCode: uint8_t_array_16,
  bmControls: uint64_t,
});
const uvc_extension_unit_t = uvc_extension_unit;
const uvc_extension_unit_tPointer = ref.refType(uvc_extension_unit_t);
const __uint32_t = js_uint32;
const uint32_t = __uint32_t;
const uvc_stream_ctrl = Struct({
  bmHint: uint16_t,
  bFormatIndex: uint8_t,
  bFrameIndex: uint8_t,
  dwFrameInterval: uint32_t,
  wKeyFrameRate: uint16_t,
  wPFrameRate: uint16_t,
  wCompQuality: uint16_t,
  wCompWindowSize: uint16_t,
  wDelay: uint16_t,
  dwMaxVideoFrameSize: uint32_t,
  dwMaxPayloadTransferSize: uint32_t,
  dwClockFrequency: uint32_t,
  bmFramingInfo: uint8_t,
  bPreferredVersion: uint8_t,
  bMinVersion: uint8_t,
  bMaxVersion: uint8_t,
  bInterfaceNumber: uint8_t,
});
const uvc_stream_ctrl_t = uvc_stream_ctrl;
const uvc_stream_ctrl_tPointer = ref.refType(uvc_stream_ctrl_t);
const uvc_format_desc = js_voidPointer;
const uvc_format_desc_t = uvc_format_desc;
const uvc_format_desc_tPointer = ref.refType(uvc_format_desc_t);
const js_long = ref.types.long;
const __time_t = js_long;
const __suseconds_t = js_long;
const timeval = Struct({
  tv_sec: __time_t,
  tv_usec: __suseconds_t,
});
const uvc_frame = Struct({
  data: js_voidPointer,
  data_bytes: size_t,
  width: uint32_t,
  height: uint32_t,
  frame_format: js_uint32,
  step: size_t,
  sequence: uint32_t,
  capture_time: timeval,
  source: uvc_device_handle_tPointer,
  library_owns_data: uint8_t,
});
const FunctionProto_2 = FFI.Function(ref.types.void, [
  uvc_frame,
  js_voidPointer,
]);
const uvc_frame_callback_t = FunctionProto_2;
const uvc_frame_callback_tPointer = ref.refType(uvc_frame_callback_t);
const uvc_stream_handle = js_voidPointer;
const uvc_stream_handle_t = uvc_stream_handle;
const uvc_stream_handle_tPointer = ref.refType(uvc_stream_handle_t);
const uvc_frame_t = uvc_frame;
const uvc_frame_tPointer = ref.refType(uvc_frame_t);
const __int32_t = js_int32;
const int32_t = __int32_t;
const uint8_tPointer = ref.refType(uint8_t);
const uint32_tPointer = ref.refType(uint32_t);
const js_char = ref.types.char;
const __int8_t = js_char;
const int8_t = __int8_t;
const int8_tPointer = ref.refType(int8_t);
const uint16_tPointer = ref.refType(uint16_t);
const int32_tPointer = ref.refType(int32_t);
const js_short = ref.types.short;
const __int16_t = js_short;
const int16_t = __int16_t;
const int16_tPointer = ref.refType(int16_t);
const _IO_FILE = js_voidPointer;
const FILE = _IO_FILE;
const FILEPointer = ref.refType(FILE);

types["FILE"] = FILE;
types["FILEPointer"] = FILEPointer;
types["FunctionProto_0"] = FunctionProto_0;
types["FunctionProto_1"] = FunctionProto_1;
types["FunctionProto_2"] = FunctionProto_2;
types["_IO_FILE"] = _IO_FILE;
types["__int16_t"] = __int16_t;
types["__int32_t"] = __int32_t;
types["__int8_t"] = __int8_t;
types["__suseconds_t"] = __suseconds_t;
types["__time_t"] = __time_t;
types["__uint16_t"] = __uint16_t;
types["__uint32_t"] = __uint32_t;
types["__uint64_t"] = __uint64_t;
types["__uint8_t"] = __uint8_t;
types["int16_t"] = int16_t;
types["int16_tPointer"] = int16_tPointer;
types["int32_t"] = int32_t;
types["int32_tPointer"] = int32_tPointer;
types["int8_t"] = int8_t;
types["int8_tPointer"] = int8_tPointer;
types["js_CString"] = js_CString;
types["js_char"] = js_char;
types["js_int32"] = js_int32;
types["js_long"] = js_long;
types["js_short"] = js_short;
types["js_uchar"] = js_uchar;
types["js_uint32"] = js_uint32;
types["js_ulong"] = js_ulong;
types["js_ushort"] = js_ushort;
types["js_void"] = js_void;
types["js_voidPointer"] = js_voidPointer;
types["libusb_context"] = libusb_context;
types["libusb_device_handle"] = libusb_device_handle;
types["size_t"] = size_t;
types["timeval"] = timeval;
types["uint16_t"] = uint16_t;
types["uint16_tPointer"] = uint16_tPointer;
types["uint32_t"] = uint32_t;
types["uint32_tPointer"] = uint32_tPointer;
types["uint64_t"] = uint64_t;
types["uint8_t"] = uint8_t;
types["uint8_tPointer"] = uint8_tPointer;
types["uint8_t_array_16"] = uint8_t_array_16;
types["uvc_button_callback_t"] = uvc_button_callback_t;
types["uvc_context"] = uvc_context;
types["uvc_context_t"] = uvc_context_t;
types["uvc_context_tPointer"] = uvc_context_tPointer;
types["uvc_device"] = uvc_device;
types["uvc_device_descriptor"] = uvc_device_descriptor;
types["uvc_device_descriptor_t"] = uvc_device_descriptor_t;
types["uvc_device_descriptor_tPointer"] = uvc_device_descriptor_tPointer;
types["uvc_device_handle"] = uvc_device_handle;
types["uvc_device_handle_t"] = uvc_device_handle_t;
types["uvc_device_handle_tPointer"] = uvc_device_handle_tPointer;
types["uvc_device_t"] = uvc_device_t;
types["uvc_device_tPointer"] = uvc_device_tPointer;
types["uvc_error_t"] = uvc_error_t;
types["uvc_extension_unit"] = uvc_extension_unit;
types["uvc_extension_unit_t"] = uvc_extension_unit_t;
types["uvc_extension_unit_tPointer"] = uvc_extension_unit_tPointer;
types["uvc_format_desc"] = uvc_format_desc;
types["uvc_format_desc_t"] = uvc_format_desc_t;
types["uvc_format_desc_tPointer"] = uvc_format_desc_tPointer;
types["uvc_frame"] = uvc_frame;
types["uvc_frame_callback_t"] = uvc_frame_callback_t;
types["uvc_frame_callback_tPointer"] = uvc_frame_callback_tPointer;
types["uvc_frame_t"] = uvc_frame_t;
types["uvc_frame_tPointer"] = uvc_frame_tPointer;
types["uvc_input_terminal"] = uvc_input_terminal;
types["uvc_input_terminal_t"] = uvc_input_terminal_t;
types["uvc_input_terminal_tPointer"] = uvc_input_terminal_tPointer;
types["uvc_output_terminal"] = uvc_output_terminal;
types["uvc_output_terminal_t"] = uvc_output_terminal_t;
types["uvc_output_terminal_tPointer"] = uvc_output_terminal_tPointer;
types["uvc_processing_unit"] = uvc_processing_unit;
types["uvc_processing_unit_t"] = uvc_processing_unit_t;
types["uvc_processing_unit_tPointer"] = uvc_processing_unit_tPointer;
types["uvc_selector_unit"] = uvc_selector_unit;
types["uvc_selector_unit_t"] = uvc_selector_unit_t;
types["uvc_selector_unit_tPointer"] = uvc_selector_unit_tPointer;
types["uvc_status_callback_t"] = uvc_status_callback_t;
types["uvc_stream_ctrl"] = uvc_stream_ctrl;
types["uvc_stream_ctrl_t"] = uvc_stream_ctrl_t;
types["uvc_stream_ctrl_tPointer"] = uvc_stream_ctrl_tPointer;
types["uvc_stream_handle"] = uvc_stream_handle;
types["uvc_stream_handle_t"] = uvc_stream_handle_t;
types["uvc_stream_handle_tPointer"] = uvc_stream_handle_tPointer;

const functions = new FFI.Library(null, {
  uvc_allocate_frame: [uvc_frame_tPointer, [size_t]],
  uvc_any2bgr: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_any2rgb: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_close: [js_void, [uvc_device_handle_tPointer]],
  uvc_duplicate_frame: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_exit: [js_void, [uvc_context_tPointer]],
  uvc_find_device: [
    uvc_error_t,
    [uvc_context_tPointer, uvc_device_tPointer, js_int32, js_int32, js_CString],
  ],
  uvc_find_devices: [
    uvc_error_t,
    [uvc_context_tPointer, uvc_device_tPointer, js_int32, js_int32, js_CString],
  ],
  uvc_free_device_descriptor: [js_void, [uvc_device_descriptor_tPointer]],
  uvc_free_device_list: [js_void, [uvc_device_tPointer, uint8_t]],
  uvc_free_frame: [js_void, [uvc_frame_tPointer]],
  uvc_get_ae_mode: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_ae_priority: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_analog_video_lock_status: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_analog_video_standard: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_backlight_compensation: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_brightness: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int16_tPointer, js_uint32],
  ],
  uvc_get_bus_number: [uint8_t, [uvc_device_tPointer]],
  uvc_get_camera_terminal: [
    uvc_input_terminal_tPointer,
    [uvc_device_handle_tPointer],
  ],
  uvc_get_contrast: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_contrast_auto: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_ctrl: [
    js_int32,
    [
      uvc_device_handle_tPointer,
      uint8_t,
      uint8_t,
      js_voidPointer,
      js_int32,
      js_uint32,
    ],
  ],
  uvc_get_ctrl_len: [js_int32, [uvc_device_handle_tPointer, uint8_t, uint8_t]],
  uvc_get_device: [uvc_device_tPointer, [uvc_device_handle_tPointer]],
  uvc_get_device_address: [uint8_t, [uvc_device_tPointer]],
  uvc_get_device_descriptor: [
    uvc_error_t,
    [uvc_device_tPointer, uvc_device_descriptor_tPointer],
  ],
  uvc_get_device_list: [
    uvc_error_t,
    [uvc_context_tPointer, uvc_device_tPointer],
  ],
  uvc_get_digital_multiplier: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_digital_multiplier_limit: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_digital_roi: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      js_uint32,
    ],
  ],
  uvc_get_digital_window: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      uint16_tPointer,
      js_uint32,
    ],
  ],
  uvc_get_exposure_abs: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint32_tPointer, js_uint32],
  ],
  uvc_get_exposure_rel: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int8_tPointer, js_uint32],
  ],
  uvc_get_extension_units: [
    uvc_extension_unit_tPointer,
    [uvc_device_handle_tPointer],
  ],
  uvc_get_focus_abs: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_focus_auto: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_focus_rel: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int8_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_focus_simple_range: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_format_descs: [
    uvc_format_desc_tPointer,
    [uvc_device_handle_tPointer],
  ],
  uvc_get_gain: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_gamma: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_hue: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int16_tPointer, js_uint32],
  ],
  uvc_get_hue_auto: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_input_select: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_input_terminals: [
    uvc_input_terminal_tPointer,
    [uvc_device_handle_tPointer],
  ],
  uvc_get_iris_abs: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_iris_rel: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_libusb_handle: [libusb_device_handle, [uvc_device_handle_tPointer]],
  uvc_get_output_terminals: [
    uvc_output_terminal_tPointer,
    [uvc_device_handle_tPointer],
  ],
  uvc_get_pantilt_abs: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int32_tPointer, int32_tPointer, js_uint32],
  ],
  uvc_get_pantilt_rel: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      int8_tPointer,
      uint8_tPointer,
      int8_tPointer,
      uint8_tPointer,
      js_uint32,
    ],
  ],
  uvc_get_power_line_frequency: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_power_mode: [
    uvc_error_t,
    [uvc_device_handle_tPointer, js_uint32, js_uint32],
  ],
  uvc_get_privacy: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_processing_units: [
    uvc_processing_unit_tPointer,
    [uvc_device_handle_tPointer],
  ],
  uvc_get_roll_abs: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int16_tPointer, js_uint32],
  ],
  uvc_get_roll_rel: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int8_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_saturation: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_scanning_mode: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_selector_units: [
    uvc_selector_unit_tPointer,
    [uvc_device_handle_tPointer],
  ],
  uvc_get_sharpness: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_stream_ctrl_format_size: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      uvc_stream_ctrl_tPointer,
      js_uint32,
      js_int32,
      js_int32,
      js_int32,
    ],
  ],
  uvc_get_white_balance_component: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_white_balance_component_auto: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_white_balance_temperature: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_white_balance_temperature_auto: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_tPointer, js_uint32],
  ],
  uvc_get_zoom_abs: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_tPointer, js_uint32],
  ],
  uvc_get_zoom_rel: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      int8_tPointer,
      uint8_tPointer,
      uint8_tPointer,
      js_uint32,
    ],
  ],
  uvc_init: [uvc_error_t, [uvc_context_tPointer, libusb_context]],
  uvc_mjpeg2rgb: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_open: [uvc_error_t, [uvc_device_tPointer, uvc_device_handle_tPointer]],
  uvc_perror: [js_void, [uvc_error_t, js_CString]],
  uvc_print_diag: [js_void, [uvc_device_handle_tPointer, FILEPointer]],
  uvc_print_stream_ctrl: [js_void, [uvc_stream_ctrl_tPointer, FILEPointer]],
  uvc_probe_stream_ctrl: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uvc_stream_ctrl_tPointer],
  ],
  uvc_ref_device: [js_void, [uvc_device_tPointer]],
  uvc_set_ae_mode: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_ae_priority: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_analog_video_lock_status: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_t],
  ],
  uvc_set_analog_video_standard: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_t],
  ],
  uvc_set_backlight_compensation: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_t],
  ],
  uvc_set_brightness: [uvc_error_t, [uvc_device_handle_tPointer, int16_t]],
  uvc_set_button_callback: [
    js_void,
    [uvc_device_handle_tPointer, uvc_button_callback_t, js_voidPointer],
  ],
  uvc_set_contrast: [uvc_error_t, [uvc_device_handle_tPointer, uint16_t]],
  uvc_set_contrast_auto: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_ctrl: [
    js_int32,
    [uvc_device_handle_tPointer, uint8_t, uint8_t, js_voidPointer, js_int32],
  ],
  uvc_set_digital_multiplier: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_t],
  ],
  uvc_set_digital_multiplier_limit: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_t],
  ],
  uvc_set_digital_roi: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      uint16_t,
      uint16_t,
      uint16_t,
      uint16_t,
      uint16_t,
    ],
  ],
  uvc_set_digital_window: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      uint16_t,
      uint16_t,
      uint16_t,
      uint16_t,
      uint16_t,
      uint16_t,
    ],
  ],
  uvc_set_exposure_abs: [uvc_error_t, [uvc_device_handle_tPointer, uint32_t]],
  uvc_set_exposure_rel: [uvc_error_t, [uvc_device_handle_tPointer, int8_t]],
  uvc_set_focus_abs: [uvc_error_t, [uvc_device_handle_tPointer, uint16_t]],
  uvc_set_focus_auto: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_focus_rel: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int8_t, uint8_t],
  ],
  uvc_set_focus_simple_range: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_t],
  ],
  uvc_set_gain: [uvc_error_t, [uvc_device_handle_tPointer, uint16_t]],
  uvc_set_gamma: [uvc_error_t, [uvc_device_handle_tPointer, uint16_t]],
  uvc_set_hue: [uvc_error_t, [uvc_device_handle_tPointer, int16_t]],
  uvc_set_hue_auto: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_input_select: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_iris_abs: [uvc_error_t, [uvc_device_handle_tPointer, uint16_t]],
  uvc_set_iris_rel: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_pantilt_abs: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int32_t, int32_t],
  ],
  uvc_set_pantilt_rel: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int8_t, uint8_t, int8_t, uint8_t],
  ],
  uvc_set_power_line_frequency: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_t],
  ],
  uvc_set_power_mode: [uvc_error_t, [uvc_device_handle_tPointer, js_uint32]],
  uvc_set_privacy: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_roll_abs: [uvc_error_t, [uvc_device_handle_tPointer, int16_t]],
  uvc_set_roll_rel: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int8_t, uint8_t],
  ],
  uvc_set_saturation: [uvc_error_t, [uvc_device_handle_tPointer, uint16_t]],
  uvc_set_scanning_mode: [uvc_error_t, [uvc_device_handle_tPointer, uint8_t]],
  uvc_set_sharpness: [uvc_error_t, [uvc_device_handle_tPointer, uint16_t]],
  uvc_set_status_callback: [
    js_void,
    [uvc_device_handle_tPointer, uvc_status_callback_t, js_voidPointer],
  ],
  uvc_set_white_balance_component: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_t, uint16_t],
  ],
  uvc_set_white_balance_component_auto: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_t],
  ],
  uvc_set_white_balance_temperature: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint16_t],
  ],
  uvc_set_white_balance_temperature_auto: [
    uvc_error_t,
    [uvc_device_handle_tPointer, uint8_t],
  ],
  uvc_set_zoom_abs: [uvc_error_t, [uvc_device_handle_tPointer, uint16_t]],
  uvc_set_zoom_rel: [
    uvc_error_t,
    [uvc_device_handle_tPointer, int8_t, uint8_t, uint8_t],
  ],
  uvc_start_iso_streaming: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      uvc_stream_ctrl_tPointer,
      uvc_frame_callback_tPointer,
      js_voidPointer,
    ],
  ],
  uvc_start_streaming: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      uvc_stream_ctrl_tPointer,
      uvc_frame_callback_tPointer,
      js_voidPointer,
      uint8_t,
    ],
  ],
  uvc_stop_streaming: [js_void, [uvc_device_handle_tPointer]],
  uvc_stream_close: [js_void, [uvc_stream_handle_tPointer]],
  uvc_stream_ctrl: [
    uvc_error_t,
    [uvc_stream_handle_tPointer, uvc_stream_ctrl_tPointer],
  ],
  uvc_stream_get_frame: [
    uvc_error_t,
    [uvc_stream_handle_tPointer, uvc_frame_tPointer, int32_t],
  ],
  uvc_stream_open_ctrl: [
    uvc_error_t,
    [
      uvc_device_handle_tPointer,
      uvc_stream_handle_tPointer,
      uvc_stream_ctrl_tPointer,
    ],
  ],
  uvc_stream_start: [
    uvc_error_t,
    [
      uvc_stream_handle_tPointer,
      uvc_frame_callback_tPointer,
      js_voidPointer,
      uint8_t,
    ],
  ],
  uvc_stream_start_iso: [
    uvc_error_t,
    [uvc_stream_handle_tPointer, uvc_frame_callback_tPointer, js_voidPointer],
  ],
  uvc_stream_stop: [uvc_error_t, [uvc_stream_handle_tPointer]],
  uvc_strerror: [js_CString, [uvc_error_t]],
  uvc_unref_device: [js_void, [uvc_device_tPointer]],
  uvc_uyvy2bgr: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_uyvy2rgb: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_yuyv2bgr: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_yuyv2rgb: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_yuyv2uv: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
  uvc_yuyv2y: [uvc_error_t, [uvc_frame_tPointer, uvc_frame_tPointer]],
});

module.exports = {
  constants,
  types,
  functions,
};
