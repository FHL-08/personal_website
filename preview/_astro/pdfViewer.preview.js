"use strict";
var __pdfViewerExports = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var __privateWrapper = (obj, member, setter, getter) => ({
    set _(value) {
      __privateSet(obj, member, value, setter);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  });

  // src/scripts/pdfViewer.js
  var pdfViewer_exports = {};
  __export(pdfViewer_exports, {
    destroyPdfViewer: () => destroyPdfViewer,
    mountPdfViewer: () => mountPdfViewer
  });

  // node_modules/pdfjs-dist/build/pdf.min.mjs
  var import_meta = {};
  var t = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type);
  var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  var i = new Float32Array(e);
  var n = [1e-3, 0, 0, 1e-3, 0, 0];
  var s = 1.35;
  var a = "http://www.w3.org/2000/svg";
  var r = 1;
  var o = 2;
  var l = 4;
  var h = 16;
  var c = 32;
  var d = 64;
  var u = 128;
  var p = 256;
  var g = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 };
  var m = "pdfjs_internal_id_";
  var f = "pdfjs_internal_editor_";
  var b = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15, POPUP: 16, SIGNATURE: 101, COMMENT: 102 };
  var y = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23, INK_COLOR_AND_OPACITY: 24, HIGHLIGHT_COLOR: 31, HIGHLIGHT_THICKNESS: 32, HIGHLIGHT_FREE: 33, HIGHLIGHT_SHOW_ALL: 34, DRAW_STEP: 41 };
  var v = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 };
  var A = 0;
  var w = 1;
  var x = 2;
  var C = 3;
  var E = 3;
  var S = 4;
  var T = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
  var k = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26, RICHMEDIA: 27 };
  var _ = 1;
  var M = 2;
  var D = 3;
  var P = 4;
  var I = 5;
  var F = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
  var B = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91, setStrokeTransparent: 92, setFillTransparent: 93, rawFillPath: 94 };
  var L = 0;
  var O = 1;
  var R = 2;
  var N = 3;
  var U = 4;
  var H = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
  var z = F.WARNINGS;
  function setVerbosityLevel(t2) {
    Number.isInteger(t2) && (z = t2);
  }
  function getVerbosityLevel() {
    return z;
  }
  function info(t2) {
    z >= F.INFOS && console.info(`Info: ${t2}`);
  }
  function warn(t2) {
    z >= F.WARNINGS && console.warn(`Warning: ${t2}`);
  }
  function unreachable(t2) {
    throw new Error(t2);
  }
  function assert(t2, e2) {
    t2 || unreachable(e2);
  }
  function createValidAbsoluteUrl(t2, e2 = null, i2 = null) {
    if (!t2) return null;
    if (i2 && "string" == typeof t2) {
      if (i2.addDefaultProtocol && t2.startsWith("www.")) {
        const e3 = t2.match(/\./g);
        e3?.length >= 2 && (t2 = `http://${t2}`);
      }
      if (i2.tryConvertEncoding) try {
        t2 = (function stringToUTF8String(t3) {
          return decodeURIComponent(escape(t3));
        })(t2);
      } catch {
      }
    }
    const n2 = e2 ? URL.parse(t2, e2) : URL.parse(t2);
    return (function _isValidProtocol(t3) {
      switch (t3?.protocol) {
        case "http:":
        case "https:":
        case "ftp:":
        case "mailto:":
        case "tel:":
          return true;
        default:
          return false;
      }
    })(n2) ? n2 : null;
  }
  function updateUrlHash(t2, e2, i2 = false) {
    const n2 = URL.parse(t2);
    if (n2) {
      n2.hash = e2;
      return n2.href;
    }
    return i2 && createValidAbsoluteUrl(t2, "http://example.com") ? t2.split("#", 1)[0] + (e2 ? `#${e2}` : "") : "";
  }
  function stripPath(t2) {
    return t2.substring(t2.lastIndexOf("/") + 1);
  }
  function shadow(t2, e2, i2, n2 = false) {
    Object.defineProperty(t2, e2, { value: i2, enumerable: !n2, configurable: true, writable: false });
    return i2;
  }
  var G = (function BaseExceptionClosure() {
    function BaseException(t2, e2) {
      this.message = t2;
      this.name = e2;
    }
    BaseException.prototype = new Error();
    BaseException.constructor = BaseException;
    return BaseException;
  })();
  var PasswordException = class extends G {
    constructor(t2, e2) {
      super(t2, "PasswordException");
      this.code = e2;
    }
  };
  var UnknownErrorException = class extends G {
    constructor(t2, e2) {
      super(t2, "UnknownErrorException");
      this.details = e2;
    }
  };
  var InvalidPDFException = class extends G {
    constructor(t2) {
      super(t2, "InvalidPDFException");
    }
  };
  var ResponseException = class extends G {
    constructor(t2, e2, i2) {
      super(t2, "ResponseException");
      this.status = e2;
      this.missing = i2;
    }
  };
  var FormatError = class extends G {
    constructor(t2) {
      super(t2, "FormatError");
    }
  };
  var AbortException = class extends G {
    constructor(t2) {
      super(t2, "AbortException");
    }
  };
  function stringToBytes(t2) {
    "string" != typeof t2 && unreachable("Invalid argument for stringToBytes");
    const e2 = t2.length, i2 = new Uint8Array(e2);
    for (let n2 = 0; n2 < e2; ++n2) i2[n2] = 255 & t2.charCodeAt(n2);
    return i2;
  }
  var FeatureTest = class {
    static get isLittleEndian() {
      const t2 = new Uint8Array(4);
      t2[0] = 1;
      return shadow(this, "isLittleEndian", 1 === new Uint32Array(t2.buffer, 0, 1)[0]);
    }
    static get isOffscreenCanvasSupported() {
      return shadow(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas);
    }
    static get isImageDecoderSupported() {
      return shadow(this, "isImageDecoderSupported", "undefined" != typeof ImageDecoder);
    }
    static get isFloat16ArraySupported() {
      return shadow(this, "isFloat16ArraySupported", "undefined" != typeof Float16Array);
    }
    static get isSanitizerSupported() {
      return shadow(this, "isSanitizerSupported", "undefined" != typeof Sanitizer);
    }
    static get platform() {
      const { platform: t2, userAgent: e2 } = navigator;
      return shadow(this, "platform", { isAndroid: e2.includes("Android"), isLinux: t2.includes("Linux"), isMac: t2.includes("Mac"), isWindows: t2.includes("Win"), isFirefox: e2.includes("Firefox") });
    }
    static get isCanvasFilterSupported() {
      let t2;
      this.isOffscreenCanvasSupported ? t2 = new OffscreenCanvas(1, 1).getContext("2d") : "undefined" != typeof document && (t2 = document.createElement("canvas").getContext("2d"));
      return shadow(this, "isCanvasFilterSupported", void 0 !== t2?.filter);
    }
    static get isAlphaColorInputSupported() {
      if ("undefined" == typeof document) return shadow(this, "isAlphaColorInputSupported", false);
      const t2 = document.createElement("input");
      t2.type = "color";
      t2.setAttribute("alpha", "");
      t2.value = "#ff000080";
      return shadow(this, "isAlphaColorInputSupported", "#ff0000" !== t2.value);
    }
    static get isBackdropFilterSupported() {
      return shadow(this, "isBackdropFilterSupported", "undefined" != typeof CSS && CSS.supports("backdrop-filter", "blur(1px)"));
    }
  };
  var _Util_static, t_fn, e_fn;
  var Util = class {
    static get hexNums() {
      return shadow(this, "hexNums", Array.from(Array(256).keys(), (t2) => t2.toString(16).padStart(2, "0")));
    }
    static makeHexColor(t2, e2, i2) {
      return `#${this.hexNums[t2]}${this.hexNums[e2]}${this.hexNums[i2]}`;
    }
    static transform(t2, e2) {
      return [t2[0] * e2[0] + t2[2] * e2[1], t2[1] * e2[0] + t2[3] * e2[1], t2[0] * e2[2] + t2[2] * e2[3], t2[1] * e2[2] + t2[3] * e2[3], t2[0] * e2[4] + t2[2] * e2[5] + t2[4], t2[1] * e2[4] + t2[3] * e2[5] + t2[5]];
    }
    static multiplyByDOMMatrix(t2, e2) {
      return [t2[0] * e2.a + t2[2] * e2.b, t2[1] * e2.a + t2[3] * e2.b, t2[0] * e2.c + t2[2] * e2.d, t2[1] * e2.c + t2[3] * e2.d, t2[0] * e2.e + t2[2] * e2.f + t2[4], t2[1] * e2.e + t2[3] * e2.f + t2[5]];
    }
    static applyTransform(t2, e2, i2 = 0) {
      const n2 = t2[i2], s2 = t2[i2 + 1];
      t2[i2] = n2 * e2[0] + s2 * e2[2] + e2[4];
      t2[i2 + 1] = n2 * e2[1] + s2 * e2[3] + e2[5];
    }
    static applyTransformToBezier(t2, e2, i2 = 0) {
      const n2 = e2[0], s2 = e2[1], a2 = e2[2], r2 = e2[3], o2 = e2[4], l2 = e2[5];
      for (let e3 = 0; e3 < 6; e3 += 2) {
        const h2 = t2[i2 + e3], c2 = t2[i2 + e3 + 1];
        t2[i2 + e3] = h2 * n2 + c2 * a2 + o2;
        t2[i2 + e3 + 1] = h2 * s2 + c2 * r2 + l2;
      }
    }
    static applyInverseTransform(t2, e2) {
      const i2 = t2[0], n2 = t2[1], s2 = e2[0] * e2[3] - e2[1] * e2[2];
      t2[0] = (i2 * e2[3] - n2 * e2[2] + e2[2] * e2[5] - e2[4] * e2[3]) / s2;
      t2[1] = (-i2 * e2[1] + n2 * e2[0] + e2[4] * e2[1] - e2[5] * e2[0]) / s2;
    }
    static axialAlignedBoundingBox(t2, e2, i2) {
      const n2 = e2[0], s2 = e2[1], a2 = e2[2], r2 = e2[3], o2 = e2[4], l2 = e2[5], h2 = t2[0], c2 = t2[1], d2 = t2[2], u2 = t2[3];
      let p2 = n2 * h2 + o2, g2 = p2, m2 = n2 * d2 + o2, f2 = m2, b2 = r2 * c2 + l2, y2 = b2, v2 = r2 * u2 + l2, A2 = v2;
      if (0 !== s2 || 0 !== a2) {
        const t3 = s2 * h2, e3 = s2 * d2, i3 = a2 * c2, n3 = a2 * u2;
        p2 += i3;
        f2 += i3;
        m2 += n3;
        g2 += n3;
        b2 += t3;
        A2 += t3;
        v2 += e3;
        y2 += e3;
      }
      i2[0] = Math.min(i2[0], p2, m2, g2, f2);
      i2[1] = Math.min(i2[1], b2, v2, y2, A2);
      i2[2] = Math.max(i2[2], p2, m2, g2, f2);
      i2[3] = Math.max(i2[3], b2, v2, y2, A2);
    }
    static inverseTransform(t2) {
      const e2 = t2[0] * t2[3] - t2[1] * t2[2];
      return [t2[3] / e2, -t2[1] / e2, -t2[2] / e2, t2[0] / e2, (t2[2] * t2[5] - t2[4] * t2[3]) / e2, (t2[4] * t2[1] - t2[5] * t2[0]) / e2];
    }
    static singularValueDecompose2dScale(t2, e2) {
      const i2 = t2[0], n2 = t2[1], s2 = t2[2], a2 = t2[3], r2 = i2 ** 2 + n2 ** 2, o2 = i2 * s2 + n2 * a2, l2 = s2 ** 2 + a2 ** 2, h2 = (r2 + l2) / 2, c2 = Math.sqrt(h2 ** 2 - (r2 * l2 - o2 ** 2));
      e2[0] = Math.sqrt(h2 + c2 || 1);
      e2[1] = Math.sqrt(h2 - c2 || 1);
    }
    static normalizeRect(t2) {
      const e2 = t2.slice(0);
      if (t2[0] > t2[2]) {
        e2[0] = t2[2];
        e2[2] = t2[0];
      }
      if (t2[1] > t2[3]) {
        e2[1] = t2[3];
        e2[3] = t2[1];
      }
      return e2;
    }
    static intersect(t2, e2) {
      const i2 = Math.max(Math.min(t2[0], t2[2]), Math.min(e2[0], e2[2])), n2 = Math.min(Math.max(t2[0], t2[2]), Math.max(e2[0], e2[2]));
      if (i2 > n2) return null;
      const s2 = Math.max(Math.min(t2[1], t2[3]), Math.min(e2[1], e2[3])), a2 = Math.min(Math.max(t2[1], t2[3]), Math.max(e2[1], e2[3]));
      return s2 > a2 ? null : [i2, s2, n2, a2];
    }
    static pointBoundingBox(t2, e2, i2) {
      i2[0] = Math.min(i2[0], t2);
      i2[1] = Math.min(i2[1], e2);
      i2[2] = Math.max(i2[2], t2);
      i2[3] = Math.max(i2[3], e2);
    }
    static rectBoundingBox(t2, e2, i2, n2, s2) {
      s2[0] = Math.min(s2[0], t2, i2);
      s2[1] = Math.min(s2[1], e2, n2);
      s2[2] = Math.max(s2[2], t2, i2);
      s2[3] = Math.max(s2[3], e2, n2);
    }
    static bezierBoundingBox(t2, e2, i2, n2, s2, a2, r2, o2, l2) {
      l2[0] = Math.min(l2[0], t2, r2);
      l2[1] = Math.min(l2[1], e2, o2);
      l2[2] = Math.max(l2[2], t2, r2);
      l2[3] = Math.max(l2[3], e2, o2);
      __privateMethod(this, _Util_static, e_fn).call(this, t2, i2, s2, r2, e2, n2, a2, o2, 3 * (3 * (i2 - s2) - t2 + r2), 6 * (t2 - 2 * i2 + s2), 3 * (i2 - t2), l2);
      __privateMethod(this, _Util_static, e_fn).call(this, t2, i2, s2, r2, e2, n2, a2, o2, 3 * (3 * (n2 - a2) - e2 + o2), 6 * (e2 - 2 * n2 + a2), 3 * (n2 - e2), l2);
    }
  };
  _Util_static = new WeakSet();
  t_fn = function(t2, e2, i2, n2, s2, a2, r2, o2, l2, h2) {
    if (l2 <= 0 || l2 >= 1) return;
    const c2 = 1 - l2, d2 = l2 * l2, u2 = d2 * l2, p2 = c2 * (c2 * (c2 * t2 + 3 * l2 * e2) + 3 * d2 * i2) + u2 * n2, g2 = c2 * (c2 * (c2 * s2 + 3 * l2 * a2) + 3 * d2 * r2) + u2 * o2;
    h2[0] = Math.min(h2[0], p2);
    h2[1] = Math.min(h2[1], g2);
    h2[2] = Math.max(h2[2], p2);
    h2[3] = Math.max(h2[3], g2);
  };
  e_fn = function(t2, e2, i2, n2, s2, a2, r2, o2, l2, h2, c2, d2) {
    if (Math.abs(l2) < 1e-12) {
      Math.abs(h2) >= 1e-12 && __privateMethod(this, _Util_static, t_fn).call(this, t2, e2, i2, n2, s2, a2, r2, o2, -c2 / h2, d2);
      return;
    }
    const u2 = h2 ** 2 - 4 * c2 * l2;
    if (u2 < 0) return;
    const p2 = Math.sqrt(u2), g2 = 2 * l2;
    __privateMethod(this, _Util_static, t_fn).call(this, t2, e2, i2, n2, s2, a2, r2, o2, (-h2 + p2) / g2, d2);
    __privateMethod(this, _Util_static, t_fn).call(this, t2, e2, i2, n2, s2, a2, r2, o2, (-h2 - p2) / g2, d2);
  };
  __privateAdd(Util, _Util_static);
  var W = null;
  var V = null;
  function normalizeUnicode(t2) {
    if (!W) {
      W = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
      V = /* @__PURE__ */ new Map([["\uFB05", "\u017Ft"]]);
    }
    return t2.replaceAll(W, (t3, e2, i2) => e2 ? e2.normalize("NFKC") : V.get(i2));
  }
  function getUuid() {
    if ("function" == typeof crypto.randomUUID) return crypto.randomUUID();
    const t2 = new Uint8Array(32);
    crypto.getRandomValues(t2);
    return (function bytesToString(t3) {
      "object" == typeof t3 && void 0 !== t3?.length || unreachable("Invalid argument for bytesToString");
      const e2 = t3.length, i2 = 8192;
      if (e2 < i2) return String.fromCharCode.apply(null, t3);
      const n2 = [];
      for (let s2 = 0; s2 < e2; s2 += i2) {
        const a2 = Math.min(s2 + i2, e2), r2 = t3.subarray(s2, a2);
        n2.push(String.fromCharCode.apply(null, r2));
      }
      return n2.join("");
    })(t2);
  }
  var makeArr = () => [];
  var makeMap = () => /* @__PURE__ */ new Map();
  var makeObj = () => /* @__PURE__ */ Object.create(null);
  function MathClamp(t2, e2, i2) {
    return Math.min(Math.max(t2, e2), i2);
  }
  var PageViewport = class _PageViewport {
    constructor({ viewBox: t2, userUnit: e2, scale: i2, rotation: n2, offsetX: s2 = 0, offsetY: a2 = 0, dontFlip: r2 = false }) {
      this.viewBox = t2;
      this.userUnit = e2;
      this.scale = i2;
      this.rotation = n2;
      this.offsetX = s2;
      this.offsetY = a2;
      i2 *= e2;
      const o2 = (t2[2] + t2[0]) / 2, l2 = (t2[3] + t2[1]) / 2;
      let h2, c2, d2, u2, p2, g2, m2, f2;
      (n2 %= 360) < 0 && (n2 += 360);
      switch (n2) {
        case 180:
          h2 = -1;
          c2 = 0;
          d2 = 0;
          u2 = 1;
          break;
        case 90:
          h2 = 0;
          c2 = 1;
          d2 = 1;
          u2 = 0;
          break;
        case 270:
          h2 = 0;
          c2 = -1;
          d2 = -1;
          u2 = 0;
          break;
        case 0:
          h2 = 1;
          c2 = 0;
          d2 = 0;
          u2 = -1;
          break;
        default:
          throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
      }
      if (r2) {
        d2 = -d2;
        u2 = -u2;
      }
      if (0 === h2) {
        p2 = Math.abs(l2 - t2[1]) * i2 + s2;
        g2 = Math.abs(o2 - t2[0]) * i2 + a2;
        m2 = (t2[3] - t2[1]) * i2;
        f2 = (t2[2] - t2[0]) * i2;
      } else {
        p2 = Math.abs(o2 - t2[0]) * i2 + s2;
        g2 = Math.abs(l2 - t2[1]) * i2 + a2;
        m2 = (t2[2] - t2[0]) * i2;
        f2 = (t2[3] - t2[1]) * i2;
      }
      this.transform = [h2 * i2, c2 * i2, d2 * i2, u2 * i2, p2 - h2 * i2 * o2 - d2 * i2 * l2, g2 - c2 * i2 * o2 - u2 * i2 * l2];
      this.width = m2;
      this.height = f2;
    }
    get rawDims() {
      const t2 = this.viewBox;
      return shadow(this, "rawDims", { pageWidth: t2[2] - t2[0], pageHeight: t2[3] - t2[1], pageX: t2[0], pageY: t2[1] });
    }
    clone({ scale: t2 = this.scale, rotation: e2 = this.rotation, offsetX: i2 = this.offsetX, offsetY: n2 = this.offsetY, dontFlip: s2 = false } = {}) {
      return new _PageViewport({ viewBox: this.viewBox.slice(), userUnit: this.userUnit, scale: t2, rotation: e2, offsetX: i2, offsetY: n2, dontFlip: s2 });
    }
    convertToViewportPoint(t2, e2) {
      const i2 = [t2, e2];
      Util.applyTransform(i2, this.transform);
      return i2;
    }
    convertToPdfPoint(t2, e2) {
      const i2 = [t2, e2];
      Util.applyInverseTransform(i2, this.transform);
      return i2;
    }
  };
  var XfaText = class _XfaText {
    static textContent(t2) {
      const e2 = [], i2 = { items: e2, styles: /* @__PURE__ */ Object.create(null) };
      !(function walk(t3) {
        if (!t3) return;
        let i3 = null;
        const n2 = t3.name;
        if ("#text" === n2) i3 = t3.value;
        else {
          if (!_XfaText.shouldBuildText(n2)) return;
          t3?.attributes?.textContent ? i3 = t3.attributes.textContent : t3.value && (i3 = t3.value);
        }
        null !== i3 && e2.push({ str: i3 });
        if (t3.children) for (const e3 of t3.children) walk(e3);
      })(t2);
      return i2;
    }
    static shouldBuildText(t2) {
      return !("textarea" === t2 || "input" === t2 || "option" === t2 || "select" === t2);
    }
  };
  var XfaLayer = class {
    static setupStorage(t2, e2, i2, n2, s2) {
      const a2 = n2.getValue(e2, { value: null });
      switch (i2.name) {
        case "textarea":
          null !== a2.value && (t2.textContent = a2.value);
          if ("print" === s2) break;
          t2.addEventListener("input", (t3) => {
            n2.setValue(e2, { value: t3.target.value });
          });
          break;
        case "input":
          if ("radio" === i2.attributes.type || "checkbox" === i2.attributes.type) {
            a2.value === i2.attributes.xfaOn ? t2.setAttribute("checked", true) : a2.value === i2.attributes.xfaOff && t2.removeAttribute("checked");
            if ("print" === s2) break;
            t2.addEventListener("change", (t3) => {
              n2.setValue(e2, { value: t3.target.checked ? t3.target.getAttribute("xfaOn") : t3.target.getAttribute("xfaOff") });
            });
          } else {
            null !== a2.value && t2.setAttribute("value", a2.value);
            if ("print" === s2) break;
            t2.addEventListener("input", (t3) => {
              n2.setValue(e2, { value: t3.target.value });
            });
          }
          break;
        case "select":
          if (null !== a2.value) {
            t2.setAttribute("value", a2.value);
            for (const t3 of i2.children) t3.attributes.value === a2.value ? t3.attributes.selected = true : Object.hasOwn(t3.attributes, "selected") && delete t3.attributes.selected;
          }
          t2.addEventListener("input", (t3) => {
            const i3 = t3.target.options, s3 = -1 === i3.selectedIndex ? "" : i3[i3.selectedIndex].value;
            n2.setValue(e2, { value: s3 });
          });
      }
    }
    static setAttributes({ html: t2, element: e2, storage: i2 = null, intent: n2, linkService: s2 }) {
      const { attributes: a2 } = e2, r2 = t2 instanceof HTMLAnchorElement;
      "radio" === a2.type && (a2.name = `${a2.name}-${n2}`);
      for (const [e3, i3] of Object.entries(a2)) if (null != i3) switch (e3) {
        case "class":
          i3.length && t2.setAttribute(e3, i3.join(" "));
          break;
        case "dataId":
          break;
        case "id":
          t2.setAttribute("data-element-id", i3);
          break;
        case "style":
          Object.assign(t2.style, i3);
          break;
        case "textContent":
          t2.textContent = i3;
          break;
        default:
          (!r2 || "href" !== e3 && "newWindow" !== e3) && t2.setAttribute(e3, i3);
      }
      r2 && s2.addLinkAttributes(t2, a2.href, a2.newWindow);
      i2 && a2.dataId && this.setupStorage(t2, a2.dataId, e2, i2);
    }
    static render(t2) {
      const e2 = t2.annotationStorage, i2 = t2.linkService, n2 = t2.xfaHtml, s2 = t2.intent || "display", a2 = document.createElement(n2.name);
      n2.attributes && this.setAttributes({ html: a2, element: n2, intent: s2, linkService: i2 });
      const r2 = "richText" !== s2, o2 = t2.div;
      o2.append(a2);
      if (t2.viewport) {
        const e3 = `matrix(${t2.viewport.transform.join(",")})`;
        o2.style.transform = e3;
      }
      r2 && o2.setAttribute("class", "xfaLayer xfaFont");
      const l2 = [];
      if (0 === n2.children.length) {
        if (n2.value) {
          const t3 = document.createTextNode(n2.value);
          a2.append(t3);
          r2 && XfaText.shouldBuildText(n2.name) && l2.push(t3);
        }
        return { textDivs: l2 };
      }
      const h2 = [[n2, -1, a2]];
      for (; h2.length > 0; ) {
        const [t3, n3, a3] = h2.at(-1);
        if (n3 + 1 === t3.children.length) {
          h2.pop();
          continue;
        }
        const o3 = t3.children[++h2.at(-1)[1]];
        if (null === o3) continue;
        const { name: c2 } = o3;
        if ("#text" === c2) {
          const t4 = document.createTextNode(o3.value);
          l2.push(t4);
          a3.append(t4);
          continue;
        }
        const d2 = o3?.attributes?.xmlns ? document.createElementNS(o3.attributes.xmlns, c2) : document.createElement(c2);
        a3.append(d2);
        o3.attributes && this.setAttributes({ html: d2, element: o3, storage: e2, intent: s2, linkService: i2 });
        if (o3.children?.length > 0) h2.push([o3, -1, d2]);
        else if (o3.value) {
          const t4 = document.createTextNode(o3.value);
          r2 && XfaText.shouldBuildText(c2) && l2.push(t4);
          d2.append(t4);
        }
      }
      for (const t3 of o2.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) t3.setAttribute("readOnly", true);
      return { textDivs: l2 };
    }
    static update(t2) {
      const e2 = `matrix(${t2.viewport.transform.join(",")})`;
      t2.div.style.transform = e2;
      t2.div.hidden = false;
    }
    static getPageViewport(t2, { scale: e2 = 1, rotation: i2 = 0 }) {
      const { width: n2, height: s2 } = t2.attributes.style;
      return new PageViewport({ viewBox: [0, 0, parseInt(n2, 10), parseInt(s2, 10)], userUnit: 1, scale: e2, rotation: i2 });
    }
  };
  var _PixelsPerInch = class _PixelsPerInch {
  };
  __publicField(_PixelsPerInch, "CSS", 96);
  __publicField(_PixelsPerInch, "PDF", 72);
  __publicField(_PixelsPerInch, "PDF_TO_CSS_UNITS", _PixelsPerInch.CSS / _PixelsPerInch.PDF);
  var PixelsPerInch = _PixelsPerInch;
  async function fetchData(t2, e2 = "text") {
    if (isValidFetchUrl(t2, document.baseURI)) {
      const i2 = await fetch(t2);
      if (!i2.ok) throw new Error(i2.statusText);
      switch (e2) {
        case "blob":
          return i2.blob();
        case "bytes":
          return i2.bytes();
        case "json":
          return i2.json();
      }
      return i2.text();
    }
    return new Promise((i2, n2) => {
      const s2 = new XMLHttpRequest();
      s2.open("GET", t2, true);
      s2.responseType = "bytes" === e2 ? "arraybuffer" : e2;
      s2.onreadystatechange = () => {
        if (s2.readyState === XMLHttpRequest.DONE) if (200 !== s2.status && 0 !== s2.status) n2(new Error(s2.statusText));
        else {
          switch (e2) {
            case "bytes":
              i2(new Uint8Array(s2.response));
              return;
            case "blob":
            case "json":
              i2(s2.response);
              return;
          }
          i2(s2.responseText);
        }
      };
      s2.send(null);
    });
  }
  var RenderingCancelledException = class extends G {
    constructor(t2, e2 = 0) {
      super(t2, "RenderingCancelledException");
      this.extraDelay = e2;
    }
  };
  function isDataScheme(t2) {
    const e2 = t2.length;
    let i2 = 0;
    for (; i2 < e2 && "" === t2[i2].trim(); ) i2++;
    return "data:" === t2.substring(i2, i2 + 5).toLowerCase();
  }
  function isPdfFile(t2) {
    return "string" == typeof t2 && /\.pdf$/i.test(t2);
  }
  function getFilenameFromUrl(t2) {
    [t2] = t2.split(/[#?]/, 1);
    return stripPath(t2);
  }
  function getPdfFilenameFromUrl(t2, e2 = "document.pdf") {
    if ("string" != typeof t2) return e2;
    if (isDataScheme(t2)) {
      warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
      return e2;
    }
    const i2 = ((t3) => {
      try {
        return new URL(t3);
      } catch {
      }
      try {
        return new URL(decodeURIComponent(t3));
      } catch {
      }
      try {
        return new URL(t3, "https://foo.bar");
      } catch {
      }
      try {
        return new URL(decodeURIComponent(t3), "https://foo.bar");
      } catch {
      }
      return null;
    })(t2);
    if (!i2) return e2;
    const decode = (t3) => {
      try {
        let e3 = decodeURIComponent(t3);
        if (e3.includes("/")) {
          e3 = stripPath(e3);
          if (4 === e3.length && n2.test(e3)) return t3;
        }
        return e3;
      } catch {
        return t3;
      }
    }, n2 = /\.pdf$/i, s2 = stripPath(i2.pathname);
    if (n2.test(s2)) return decode(s2);
    if (i2.searchParams.size > 0) {
      const getLast = (t4) => [...t4].findLast((t5) => n2.test(t5)), t3 = getLast(i2.searchParams.values()) ?? getLast(i2.searchParams.keys());
      if (t3) return decode(t3);
    }
    if (i2.hash) {
      const t3 = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i2.hash);
      if (t3) return decode(t3[0]);
    }
    return e2;
  }
  var _i;
  var StatTimer = class {
    constructor() {
      __privateAdd(this, _i, /* @__PURE__ */ new Map());
      __publicField(this, "times", []);
    }
    time(t2) {
      __privateGet(this, _i).has(t2) && warn(`Timer is already running for ${t2}`);
      __privateGet(this, _i).set(t2, Date.now());
    }
    timeEnd(t2) {
      __privateGet(this, _i).has(t2) || warn(`Timer has not been started for ${t2}`);
      this.times.push({ name: t2, start: __privateGet(this, _i).get(t2), end: Date.now() });
      __privateGet(this, _i).delete(t2);
    }
    toString() {
      const t2 = Math.max(...this.times.map((t3) => t3.name.length));
      return this.times.map((e2) => `${e2.name.padEnd(t2)} ${e2.end - e2.start}ms
`).join("");
    }
  };
  _i = new WeakMap();
  function isValidFetchUrl(t2, e2) {
    const i2 = e2 ? URL.parse(t2, e2) : URL.parse(t2);
    return /https?:/.test(i2?.protocol ?? "");
  }
  function noContextMenu(t2) {
    t2.preventDefault();
  }
  function stopEvent(t2) {
    t2.preventDefault();
    t2.stopPropagation();
  }
  var _n;
  var PDFDateString = class {
    static toDateObject(t2) {
      if (t2 instanceof Date) return t2;
      if (!t2 || "string" != typeof t2) return null;
      __privateGet(this, _n) || __privateSet(this, _n, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+\\-])?(\\d{2})?'?(\\d{2})?'?"));
      const e2 = __privateGet(this, _n).exec(t2);
      if (!e2) return null;
      const i2 = parseInt(e2[1], 10);
      let n2 = parseInt(e2[2], 10);
      n2 = n2 >= 1 && n2 <= 12 ? n2 - 1 : 0;
      let s2 = parseInt(e2[3], 10);
      s2 = s2 >= 1 && s2 <= 31 ? s2 : 1;
      let a2 = parseInt(e2[4], 10);
      a2 = a2 >= 0 && a2 <= 23 ? a2 : 0;
      let r2 = parseInt(e2[5], 10);
      r2 = r2 >= 0 && r2 <= 59 ? r2 : 0;
      let o2 = parseInt(e2[6], 10);
      o2 = o2 >= 0 && o2 <= 59 ? o2 : 0;
      const l2 = e2[7] || "Z";
      let h2 = parseInt(e2[8], 10);
      h2 = h2 >= 0 && h2 <= 23 ? h2 : 0;
      let c2 = parseInt(e2[9], 10) || 0;
      c2 = c2 >= 0 && c2 <= 59 ? c2 : 0;
      if ("-" === l2) {
        a2 += h2;
        r2 += c2;
      } else if ("+" === l2) {
        a2 -= h2;
        r2 -= c2;
      }
      return new Date(Date.UTC(i2, n2, s2, a2, r2, o2));
    }
  };
  _n = new WeakMap();
  __privateAdd(PDFDateString, _n);
  function getRGBA(t2) {
    if (t2.startsWith("#")) {
      const e3 = t2.slice(1);
      return [parseInt(e3.slice(0, 2), 16), parseInt(e3.slice(2, 4), 16), parseInt(e3.slice(4, 6), 16), e3.length >= 8 ? parseInt(e3.slice(6, 8), 16) / 255 : 1];
    }
    if (t2.startsWith("rgb(")) {
      const [e3, i2, n2] = t2.slice(4, -1).split(",").map((t3) => parseInt(t3, 10));
      return [e3, i2, n2, 1];
    }
    if (t2.startsWith("rgba(")) {
      const e3 = t2.slice(5, -1).split(",");
      return [parseInt(e3[0], 10), parseInt(e3[1], 10), parseInt(e3[2], 10), parseFloat(e3[3])];
    }
    const e2 = t2.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+|none))?\)$/);
    return e2 ? [Math.round(255 * parseFloat(e2[1])), Math.round(255 * parseFloat(e2[2])), Math.round(255 * parseFloat(e2[3])), void 0 !== e2[4] && "none" !== e2[4] ? parseFloat(e2[4]) : 1] : null;
  }
  function getRGB(t2) {
    const e2 = getRGBA(t2);
    if (!e2) {
      warn(`Not a valid color format: "${t2}"`);
      return [0, 0, 0];
    }
    return e2.slice(0, 3);
  }
  function getCurrentTransform(t2) {
    const { a: e2, b: i2, c: n2, d: s2, e: a2, f: r2 } = t2.getTransform();
    return [e2, i2, n2, s2, a2, r2];
  }
  function getCurrentTransformInverse(t2) {
    const { a: e2, b: i2, c: n2, d: s2, e: a2, f: r2 } = t2.getTransform().invertSelf();
    return [e2, i2, n2, s2, a2, r2];
  }
  function setLayerDimensions(t2, e2, i2 = false, n2 = true) {
    if (e2 instanceof PageViewport) {
      const { pageWidth: n3, pageHeight: s2 } = e2.rawDims, { style: a2 } = t2, r2 = `round(down, var(--total-scale-factor) * ${n3}px, var(--scale-round-x))`, o2 = `round(down, var(--total-scale-factor) * ${s2}px, var(--scale-round-y))`;
      if (i2 && e2.rotation % 180 != 0) {
        a2.width = o2;
        a2.height = r2;
      } else {
        a2.width = r2;
        a2.height = o2;
      }
    }
    n2 && t2.setAttribute("data-main-rotation", e2.rotation);
  }
  var OutputScale = class _OutputScale {
    constructor() {
      const { pixelRatio: t2 } = _OutputScale;
      this.sx = t2;
      this.sy = t2;
    }
    get scaled() {
      return 1 !== this.sx || 1 !== this.sy;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
    limitCanvas(t2, e2, i2, n2, s2 = -1) {
      let a2 = 1 / 0, r2 = 1 / 0, o2 = 1 / 0;
      (i2 = _OutputScale.capPixels(i2, s2)) > 0 && (a2 = Math.sqrt(i2 / (t2 * e2)));
      if (-1 !== n2) {
        r2 = n2 / t2;
        o2 = n2 / e2;
      }
      const l2 = Math.min(a2, r2, o2);
      if (this.sx > l2 || this.sy > l2) {
        this.sx = l2;
        this.sy = l2;
        return true;
      }
      return false;
    }
    static get pixelRatio() {
      return globalThis.devicePixelRatio || 1;
    }
    static capPixels(t2, e2) {
      if (e2 >= 0) {
        const i2 = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e2 / 100));
        return t2 > 0 ? Math.min(t2, i2) : i2;
      }
      return t2;
    }
  };
  var j = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
  var ColorScheme = class {
    static get isDarkMode() {
      return shadow(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
    }
  };
  var CSSConstants = class {
    static get commentForegroundColor() {
      const t2 = document.createElement("span");
      t2.classList.add("comment", "sidebar");
      const { style: e2 } = t2;
      e2.width = e2.height = "0";
      e2.display = "none";
      e2.color = "var(--comment-fg-color)";
      document.body.append(t2);
      const { color: i2 } = window.getComputedStyle(t2);
      t2.remove();
      return shadow(this, "commentForegroundColor", getRGB(i2));
    }
  };
  function applyOpacity(t2, e2) {
    const i2 = 255 * (1 - (e2 = MathClamp(e2 ?? 1, 0, 1)));
    return t2.map((t3) => Math.round(t3 * e2 + i2));
  }
  function RGBToHSL(t2, e2) {
    const i2 = t2[0] / 255, n2 = t2[1] / 255, s2 = t2[2] / 255, a2 = Math.max(i2, n2, s2), r2 = Math.min(i2, n2, s2), o2 = (a2 + r2) / 2;
    if (a2 === r2) e2[0] = e2[1] = 0;
    else {
      const t3 = a2 - r2;
      e2[1] = o2 < 0.5 ? t3 / (a2 + r2) : t3 / (2 - a2 - r2);
      switch (a2) {
        case i2:
          e2[0] = 60 * ((n2 - s2) / t3 + (n2 < s2 ? 6 : 0));
          break;
        case n2:
          e2[0] = 60 * ((s2 - i2) / t3 + 2);
          break;
        case s2:
          e2[0] = 60 * ((i2 - n2) / t3 + 4);
      }
    }
    e2[2] = o2;
  }
  function HSLToRGB(t2, e2) {
    const i2 = t2[0], n2 = t2[1], s2 = t2[2], a2 = (1 - Math.abs(2 * s2 - 1)) * n2, r2 = a2 * (1 - Math.abs(i2 / 60 % 2 - 1)), o2 = s2 - a2 / 2;
    switch (Math.floor(i2 / 60)) {
      case 0:
        e2[0] = a2 + o2;
        e2[1] = r2 + o2;
        e2[2] = o2;
        break;
      case 1:
        e2[0] = r2 + o2;
        e2[1] = a2 + o2;
        e2[2] = o2;
        break;
      case 2:
        e2[0] = o2;
        e2[1] = a2 + o2;
        e2[2] = r2 + o2;
        break;
      case 3:
        e2[0] = o2;
        e2[1] = r2 + o2;
        e2[2] = a2 + o2;
        break;
      case 4:
        e2[0] = r2 + o2;
        e2[1] = o2;
        e2[2] = a2 + o2;
        break;
      case 5:
      case 6:
        e2[0] = a2 + o2;
        e2[1] = o2;
        e2[2] = r2 + o2;
    }
  }
  function computeLuminance(t2) {
    return t2 <= 0.03928 ? t2 / 12.92 : ((t2 + 0.055) / 1.055) ** 2.4;
  }
  function contrastRatio(t2, e2, i2) {
    HSLToRGB(t2, i2);
    i2.map(computeLuminance);
    const n2 = 0.2126 * i2[0] + 0.7152 * i2[1] + 0.0722 * i2[2];
    HSLToRGB(e2, i2);
    i2.map(computeLuminance);
    const s2 = 0.2126 * i2[0] + 0.7152 * i2[1] + 0.0722 * i2[2];
    return n2 > s2 ? (n2 + 0.05) / (s2 + 0.05) : (s2 + 0.05) / (n2 + 0.05);
  }
  var $ = /* @__PURE__ */ new Map();
  function findContrastColor(t2, e2) {
    const i2 = t2[0] + 256 * t2[1] + 65536 * t2[2] + 16777216 * e2[0] + 4294967296 * e2[1] + 1099511627776 * e2[2];
    let n2 = $.get(i2);
    if (n2) return n2;
    const s2 = new Float32Array(9), a2 = s2.subarray(0, 3), r2 = s2.subarray(3, 6);
    RGBToHSL(t2, r2);
    const o2 = s2.subarray(6, 9);
    RGBToHSL(e2, o2);
    const l2 = o2[2] < 0.5, h2 = l2 ? 12 : 4.5;
    r2[2] = l2 ? Math.sqrt(r2[2]) : 1 - Math.sqrt(1 - r2[2]);
    if (contrastRatio(r2, o2, a2) < h2) {
      let t3, e3;
      if (l2) {
        t3 = r2[2];
        e3 = 1;
      } else {
        t3 = 0;
        e3 = r2[2];
      }
      const i3 = 5e-3;
      for (; e3 - t3 > i3; ) {
        const i4 = r2[2] = (t3 + e3) / 2;
        l2 === contrastRatio(r2, o2, a2) < h2 ? t3 = i4 : e3 = i4;
      }
      r2[2] = l2 ? e3 : t3;
    }
    HSLToRGB(r2, a2);
    n2 = Util.makeHexColor(Math.round(255 * a2[0]), Math.round(255 * a2[1]), Math.round(255 * a2[2]));
    $.set(i2, n2);
    return n2;
  }
  function renderRichText({ html: t2, dir: e2, className: i2 }, n2) {
    const s2 = document.createDocumentFragment();
    if ("string" == typeof t2) {
      const i3 = document.createElement("p");
      i3.dir = e2 || "auto";
      const n3 = t2.split(/\r\n?|\n/);
      for (let t3 = 0, e3 = n3.length; t3 < e3; ++t3) {
        const s3 = n3[t3];
        i3.append(document.createTextNode(s3));
        t3 < e3 - 1 && i3.append(document.createElement("br"));
      }
      s2.append(i3);
    } else XfaLayer.render({ xfaHtml: t2, div: s2, intent: "richText" });
    s2.firstElementChild.classList.add("richText", i2);
    n2.append(s2);
  }
  function makePathFromDrawOPS(t2) {
    const e2 = new Path2D();
    if (!t2) return e2;
    for (let i2 = 0, n2 = t2.length; i2 < n2; ) switch (t2[i2++]) {
      case L:
        e2.moveTo(t2[i2++], t2[i2++]);
        break;
      case O:
        e2.lineTo(t2[i2++], t2[i2++]);
        break;
      case R:
        e2.bezierCurveTo(t2[i2++], t2[i2++], t2[i2++], t2[i2++], t2[i2++], t2[i2++]);
        break;
      case N:
        e2.quadraticCurveTo(t2[i2++], t2[i2++], t2[i2++], t2[i2++]);
        break;
      case U:
        e2.closePath();
        break;
      default:
        warn(`Unrecognized drawing path operator: ${t2[i2 - 1]}`);
    }
    return e2;
  }
  var _s, _a, _r, _o, _l, _h, _c, _d, _u, _EditorToolbar_static, p_fn, _EditorToolbar_instances, g_fn, m_fn, f_fn, b_get;
  var _EditorToolbar = class _EditorToolbar {
    constructor(t2) {
      __privateAdd(this, _EditorToolbar_instances);
      __privateAdd(this, _s, null);
      __privateAdd(this, _a, null);
      __privateAdd(this, _r);
      __privateAdd(this, _o, null);
      __privateAdd(this, _l, null);
      __privateAdd(this, _h, null);
      __privateAdd(this, _c, null);
      __privateAdd(this, _d, null);
      __privateSet(this, _r, t2);
      __privateGet(_EditorToolbar, _u) || __privateSet(_EditorToolbar, _u, Object.freeze({ freetext: "pdfjs-editor-remove-freetext-button", highlight: "pdfjs-editor-remove-highlight-button", ink: "pdfjs-editor-remove-ink-button", stamp: "pdfjs-editor-remove-stamp-button", signature: "pdfjs-editor-remove-signature-button" }));
    }
    render() {
      const t2 = __privateSet(this, _s, document.createElement("div"));
      t2.classList.add("editToolbar", "hidden");
      t2.setAttribute("role", "toolbar");
      const e2 = __privateGet(this, _r)._uiManager._signal;
      if (e2 instanceof AbortSignal && !e2.aborted) {
        t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
        t2.addEventListener("pointerdown", __privateMethod(_EditorToolbar, _EditorToolbar_static, p_fn), { signal: e2 });
      }
      const i2 = __privateSet(this, _o, document.createElement("div"));
      i2.className = "buttons";
      t2.append(i2);
      const n2 = __privateGet(this, _r).toolbarPosition;
      if (n2) {
        const { style: e3 } = t2, i3 = "ltr" === __privateGet(this, _r)._uiManager.direction ? 1 - n2[0] : n2[0];
        e3.insetInlineEnd = 100 * i3 + "%";
        e3.top = `calc(${100 * n2[1]}% + var(--editor-toolbar-vert-offset))`;
      }
      return t2;
    }
    get div() {
      return __privateGet(this, _s);
    }
    hide() {
      __privateGet(this, _s).classList.add("hidden");
      __privateGet(this, _a)?.hideDropdown();
    }
    show() {
      __privateGet(this, _s).classList.remove("hidden");
      __privateGet(this, _l)?.shown();
      __privateGet(this, _h)?.shown();
    }
    addDeleteButton() {
      const { editorType: t2, _uiManager: e2 } = __privateGet(this, _r), i2 = document.createElement("button");
      i2.classList.add("basic", "deleteButton");
      i2.tabIndex = 0;
      i2.setAttribute("data-l10n-id", __privateGet(_EditorToolbar, _u)[t2]);
      __privateMethod(this, _EditorToolbar_instances, f_fn).call(this, i2) && i2.addEventListener("click", (t3) => {
        e2.delete();
      }, { signal: e2._signal });
      __privateGet(this, _o).append(i2);
    }
    async addAltText(t2) {
      const e2 = await t2.render();
      __privateMethod(this, _EditorToolbar_instances, f_fn).call(this, e2);
      __privateGet(this, _o).append(e2, __privateGet(this, _EditorToolbar_instances, b_get));
      __privateSet(this, _l, t2);
    }
    addComment(t2, e2 = null) {
      if (__privateGet(this, _h)) return;
      const i2 = t2.renderForToolbar();
      if (!i2) return;
      __privateMethod(this, _EditorToolbar_instances, f_fn).call(this, i2);
      const n2 = __privateSet(this, _c, __privateGet(this, _EditorToolbar_instances, b_get));
      if (e2) {
        __privateGet(this, _o).insertBefore(i2, e2);
        __privateGet(this, _o).insertBefore(n2, e2);
      } else __privateGet(this, _o).append(i2, n2);
      __privateSet(this, _h, t2);
      t2.toolbar = this;
    }
    addColorPicker(t2) {
      if (__privateGet(this, _a)) return;
      __privateSet(this, _a, t2);
      const e2 = t2.renderButton();
      __privateMethod(this, _EditorToolbar_instances, f_fn).call(this, e2);
      __privateGet(this, _o).append(e2, __privateGet(this, _EditorToolbar_instances, b_get));
    }
    async addEditSignatureButton(t2) {
      const e2 = __privateSet(this, _d, await t2.renderEditButton(__privateGet(this, _r)));
      __privateMethod(this, _EditorToolbar_instances, f_fn).call(this, e2);
      __privateGet(this, _o).append(e2, __privateGet(this, _EditorToolbar_instances, b_get));
    }
    removeButton(t2) {
      if ("comment" === t2) {
        __privateGet(this, _h)?.removeToolbarCommentButton();
        __privateSet(this, _h, null);
        __privateGet(this, _c)?.remove();
        __privateSet(this, _c, null);
      }
    }
    async addButton(t2, e2) {
      switch (t2) {
        case "colorPicker":
          e2 && this.addColorPicker(e2);
          break;
        case "altText":
          e2 && await this.addAltText(e2);
          break;
        case "editSignature":
          e2 && await this.addEditSignatureButton(e2);
          break;
        case "delete":
          this.addDeleteButton();
          break;
        case "comment":
          e2 && this.addComment(e2);
      }
    }
    async addButtonBefore(t2, e2, i2) {
      if (!e2 && "comment" === t2) return;
      const n2 = __privateGet(this, _o).querySelector(i2);
      n2 && "comment" === t2 && this.addComment(e2, n2);
    }
    updateEditSignatureButton(t2) {
      __privateGet(this, _d) && (__privateGet(this, _d).title = t2);
    }
    remove() {
      __privateGet(this, _s).remove();
      __privateGet(this, _a)?.destroy();
      __privateSet(this, _a, null);
    }
  };
  _s = new WeakMap();
  _a = new WeakMap();
  _r = new WeakMap();
  _o = new WeakMap();
  _l = new WeakMap();
  _h = new WeakMap();
  _c = new WeakMap();
  _d = new WeakMap();
  _u = new WeakMap();
  _EditorToolbar_static = new WeakSet();
  p_fn = function(t2) {
    t2.stopPropagation();
  };
  _EditorToolbar_instances = new WeakSet();
  g_fn = function(t2) {
    __privateGet(this, _r)._focusEventsAllowed = false;
    stopEvent(t2);
  };
  m_fn = function(t2) {
    __privateGet(this, _r)._focusEventsAllowed = true;
    stopEvent(t2);
  };
  f_fn = function(t2) {
    const e2 = __privateGet(this, _r)._uiManager._signal;
    if (!(e2 instanceof AbortSignal) || e2.aborted) return false;
    t2.addEventListener("focusin", __privateMethod(this, _EditorToolbar_instances, g_fn).bind(this), { capture: true, signal: e2 });
    t2.addEventListener("focusout", __privateMethod(this, _EditorToolbar_instances, m_fn).bind(this), { capture: true, signal: e2 });
    t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
    return true;
  };
  b_get = function() {
    const t2 = document.createElement("div");
    t2.className = "divider";
    return t2;
  };
  __privateAdd(_EditorToolbar, _EditorToolbar_static);
  __privateAdd(_EditorToolbar, _u, null);
  var EditorToolbar = _EditorToolbar;
  var _o2, _s2, _y, _FloatingToolbar_instances, v_fn, w_fn, A_fn;
  var FloatingToolbar = class {
    constructor(t2) {
      __privateAdd(this, _FloatingToolbar_instances);
      __privateAdd(this, _o2, null);
      __privateAdd(this, _s2, null);
      __privateAdd(this, _y);
      __privateSet(this, _y, t2);
    }
    show(t2, e2, i2) {
      const [n2, s2] = __privateMethod(this, _FloatingToolbar_instances, w_fn).call(this, e2, i2), { style: a2 } = __privateGet(this, _s2) || __privateSet(this, _s2, __privateMethod(this, _FloatingToolbar_instances, v_fn).call(this));
      t2.append(__privateGet(this, _s2));
      a2.insetInlineEnd = 100 * n2 + "%";
      a2.top = `calc(${100 * s2}% + var(--editor-toolbar-vert-offset))`;
    }
    hide() {
      __privateGet(this, _s2).remove();
    }
  };
  _o2 = new WeakMap();
  _s2 = new WeakMap();
  _y = new WeakMap();
  _FloatingToolbar_instances = new WeakSet();
  v_fn = function() {
    const t2 = __privateSet(this, _s2, document.createElement("div"));
    t2.className = "editToolbar";
    t2.setAttribute("role", "toolbar");
    const e2 = __privateGet(this, _y)._signal;
    e2 instanceof AbortSignal && !e2.aborted && t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
    const i2 = __privateSet(this, _o2, document.createElement("div"));
    i2.className = "buttons";
    t2.append(i2);
    __privateGet(this, _y).hasCommentManager() && __privateMethod(this, _FloatingToolbar_instances, A_fn).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
      __privateGet(this, _y).commentSelection("floating_button");
    });
    __privateMethod(this, _FloatingToolbar_instances, A_fn).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
      __privateGet(this, _y).highlightSelection("floating_button");
    });
    return t2;
  };
  w_fn = function(t2, e2) {
    let i2 = 0, n2 = 0;
    for (const s2 of t2) {
      const t3 = s2.y + s2.height;
      if (t3 < i2) continue;
      const a2 = s2.x + (e2 ? s2.width : 0);
      if (t3 > i2) {
        n2 = a2;
        i2 = t3;
      } else e2 ? a2 > n2 && (n2 = a2) : a2 < n2 && (n2 = a2);
    }
    return [e2 ? 1 - n2 : n2, i2];
  };
  A_fn = function(t2, e2, i2, n2) {
    const s2 = document.createElement("button");
    s2.classList.add("basic", t2);
    s2.tabIndex = 0;
    s2.setAttribute("data-l10n-id", e2);
    const a2 = document.createElement("span");
    s2.append(a2);
    a2.className = "visuallyHidden";
    a2.setAttribute("data-l10n-id", i2);
    const r2 = __privateGet(this, _y)._signal;
    if (r2 instanceof AbortSignal && !r2.aborted) {
      s2.addEventListener("contextmenu", noContextMenu, { signal: r2 });
      s2.addEventListener("click", n2, { signal: r2 });
    }
    __privateGet(this, _o2).append(s2);
  };
  var K = Object.freeze({ internal: "068f09d6-5b37-4f77-a97a-f8ff4f253b68" });
  function bindEvents(t2, e2, i2) {
    for (const n2 of i2) e2.addEventListener(n2, t2[n2].bind(t2));
  }
  var _x, _C, _E, _S;
  var _CurrentPointers = class _CurrentPointers {
    static initializeAndAddPointerId(t2) {
      (__privateGet(_CurrentPointers, _C) || __privateSet(_CurrentPointers, _C, /* @__PURE__ */ new Set())).add(t2);
    }
    static setPointer(t2, e2) {
      __privateGet(_CurrentPointers, _x) || __privateSet(_CurrentPointers, _x, e2);
      __privateGet(_CurrentPointers, _S) ?? __privateSet(_CurrentPointers, _S, t2);
    }
    static setTimeStamp(t2) {
      __privateSet(_CurrentPointers, _E, t2);
    }
    static isSamePointerId(t2) {
      return __privateGet(_CurrentPointers, _x) === t2;
    }
    static isSamePointerIdOrRemove(t2) {
      if (__privateGet(_CurrentPointers, _x) === t2) return true;
      __privateGet(_CurrentPointers, _C)?.delete(t2);
      return false;
    }
    static isSamePointerType(t2) {
      return __privateGet(_CurrentPointers, _S) === t2;
    }
    static isInitializedAndDifferentPointerType(t2) {
      return null !== __privateGet(_CurrentPointers, _S) && !_CurrentPointers.isSamePointerType(t2);
    }
    static isSameTimeStamp(t2) {
      return __privateGet(_CurrentPointers, _E) === t2;
    }
    static isUsingMultiplePointers() {
      return __privateGet(_CurrentPointers, _C)?.size >= 1;
    }
    static clearPointerType() {
      __privateSet(_CurrentPointers, _S, null);
    }
    static clearPointerIds() {
      __privateSet(_CurrentPointers, _x, NaN);
      __privateSet(_CurrentPointers, _C, null);
    }
    static clearTimeStamp() {
      __privateSet(_CurrentPointers, _E, NaN);
    }
  };
  _x = new WeakMap();
  _C = new WeakMap();
  _E = new WeakMap();
  _S = new WeakMap();
  __privateAdd(_CurrentPointers, _x, NaN);
  __privateAdd(_CurrentPointers, _C, null);
  __privateAdd(_CurrentPointers, _E, NaN);
  __privateAdd(_CurrentPointers, _S, null);
  var CurrentPointers = _CurrentPointers;
  var _T;
  var IdManager = class {
    constructor() {
      __privateAdd(this, _T, 0);
    }
    get id() {
      return `${f}${__privateWrapper(this, _T)._++}`;
    }
  };
  _T = new WeakMap();
  var _k, _T2, __, _ImageManager_instances, M_fn;
  var _ImageManager = class _ImageManager {
    constructor() {
      __privateAdd(this, _ImageManager_instances);
      __privateAdd(this, _k, getUuid());
      __privateAdd(this, _T2, 0);
      __privateAdd(this, __, null);
    }
    static get _isSVGFittingCanvas() {
      const t2 = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="${a}"><rect width="1" height="1" style="fill:red;"/></svg>`, e2 = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: true }), i2 = new Image();
      i2.src = t2;
      return shadow(this, "_isSVGFittingCanvas", i2.decode().then(() => {
        e2.drawImage(i2, 0, 0, 1, 1, 0, 0, 1, 3);
        return 0 === new Uint32Array(e2.getImageData(0, 0, 1, 1).data.buffer)[0];
      }));
    }
    async getFromFile(t2) {
      const { lastModified: e2, name: i2, size: n2, type: s2 } = t2;
      return __privateMethod(this, _ImageManager_instances, M_fn).call(this, `${e2}_${i2}_${n2}_${s2}`, t2);
    }
    async getFromUrl(t2) {
      return __privateMethod(this, _ImageManager_instances, M_fn).call(this, t2, t2);
    }
    async getFromBlob(t2, e2) {
      const i2 = await e2;
      return __privateMethod(this, _ImageManager_instances, M_fn).call(this, t2, i2);
    }
    async getFromId(t2) {
      __privateGet(this, __) || __privateSet(this, __, /* @__PURE__ */ new Map());
      const e2 = __privateGet(this, __).get(t2);
      if (!e2) return null;
      if (e2.bitmap) {
        e2.refCounter += 1;
        return e2;
      }
      if (e2.file) return this.getFromFile(e2.file);
      if (e2.blobPromise) {
        const { blobPromise: t3 } = e2;
        delete e2.blobPromise;
        return this.getFromBlob(e2.id, t3);
      }
      return this.getFromUrl(e2.url);
    }
    getFromCanvas(t2, e2) {
      __privateGet(this, __) || __privateSet(this, __, /* @__PURE__ */ new Map());
      let i2 = __privateGet(this, __).get(t2);
      if (i2?.bitmap) {
        i2.refCounter += 1;
        return i2;
      }
      const n2 = new OffscreenCanvas(e2.width, e2.height);
      n2.getContext("2d").drawImage(e2, 0, 0);
      i2 = { bitmap: n2.transferToImageBitmap(), id: `image_${__privateGet(this, _k)}_${__privateWrapper(this, _T2)._++}`, refCounter: 1, isSvg: false };
      __privateGet(this, __).set(t2, i2);
      __privateGet(this, __).set(i2.id, i2);
      return i2;
    }
    getSvgUrl(t2) {
      const e2 = __privateGet(this, __).get(t2);
      return e2?.isSvg ? e2.svgUrl : null;
    }
    deleteId(t2) {
      __privateGet(this, __) || __privateSet(this, __, /* @__PURE__ */ new Map());
      const e2 = __privateGet(this, __).get(t2);
      if (!e2) return;
      e2.refCounter -= 1;
      if (0 !== e2.refCounter) return;
      const { bitmap: i2 } = e2;
      if (!e2.url && !e2.file) {
        const t3 = new OffscreenCanvas(i2.width, i2.height);
        t3.getContext("bitmaprenderer").transferFromImageBitmap(i2);
        e2.blobPromise = t3.convertToBlob();
      }
      i2.close?.();
      e2.bitmap = null;
    }
    isValidId(t2) {
      return t2.startsWith(`image_${__privateGet(this, _k)}_`);
    }
  };
  _k = new WeakMap();
  _T2 = new WeakMap();
  __ = new WeakMap();
  _ImageManager_instances = new WeakSet();
  M_fn = async function(t2, e2) {
    __privateGet(this, __) || __privateSet(this, __, /* @__PURE__ */ new Map());
    let i2 = __privateGet(this, __).get(t2);
    if (null === i2) return null;
    if (i2?.bitmap) {
      i2.refCounter += 1;
      return i2;
    }
    try {
      i2 || (i2 = { bitmap: null, id: `image_${__privateGet(this, _k)}_${__privateWrapper(this, _T2)._++}`, refCounter: 0, isSvg: false });
      let t3;
      if ("string" == typeof e2) {
        i2.url = e2;
        t3 = await fetchData(e2, "blob");
      } else e2 instanceof File ? t3 = i2.file = e2 : e2 instanceof Blob && (t3 = e2);
      if ("image/svg+xml" === t3.type) {
        const e3 = _ImageManager._isSVGFittingCanvas, n2 = new FileReader(), s2 = new Image(), a2 = new Promise((t4, a3) => {
          s2.onload = () => {
            i2.bitmap = s2;
            i2.isSvg = true;
            t4();
          };
          n2.onload = async () => {
            const t5 = i2.svgUrl = n2.result;
            s2.src = await e3 ? `${t5}#svgView(preserveAspectRatio(none))` : t5;
          };
          s2.onerror = n2.onerror = a3;
        });
        n2.readAsDataURL(t3);
        await a2;
      } else i2.bitmap = await createImageBitmap(t3);
      i2.refCounter = 1;
    } catch (t3) {
      warn(t3);
      i2 = null;
    }
    __privateGet(this, __).set(t2, i2);
    i2 && __privateGet(this, __).set(i2.id, i2);
    return i2;
  };
  var ImageManager = _ImageManager;
  var _D, _P, _I, _F;
  var CommandManager = class {
    constructor(t2 = 128) {
      __privateAdd(this, _D, []);
      __privateAdd(this, _P, false);
      __privateAdd(this, _I);
      __privateAdd(this, _F, -1);
      __privateSet(this, _I, t2);
    }
    add({ cmd: t2, undo: e2, post: i2, mustExec: n2, type: s2 = NaN, overwriteIfSameType: a2 = false, keepUndo: r2 = false }) {
      n2 && t2();
      if (__privateGet(this, _P)) return;
      const o2 = { cmd: t2, undo: e2, post: i2, type: s2 };
      if (-1 === __privateGet(this, _F)) {
        __privateGet(this, _D).length > 0 && (__privateGet(this, _D).length = 0);
        __privateSet(this, _F, 0);
        __privateGet(this, _D).push(o2);
        return;
      }
      if (a2 && __privateGet(this, _D)[__privateGet(this, _F)].type === s2) {
        r2 && (o2.undo = __privateGet(this, _D)[__privateGet(this, _F)].undo);
        __privateGet(this, _D)[__privateGet(this, _F)] = o2;
        return;
      }
      const l2 = __privateGet(this, _F) + 1;
      if (l2 === __privateGet(this, _I)) __privateGet(this, _D).splice(0, 1);
      else {
        __privateSet(this, _F, l2);
        l2 < __privateGet(this, _D).length && __privateGet(this, _D).splice(l2);
      }
      __privateGet(this, _D).push(o2);
    }
    undo() {
      if (-1 === __privateGet(this, _F)) return;
      __privateSet(this, _P, true);
      const { undo: t2, post: e2 } = __privateGet(this, _D)[__privateGet(this, _F)];
      t2();
      e2?.();
      __privateSet(this, _P, false);
      __privateSet(this, _F, __privateGet(this, _F) - 1);
    }
    redo() {
      if (__privateGet(this, _F) < __privateGet(this, _D).length - 1) {
        __privateSet(this, _F, __privateGet(this, _F) + 1);
        __privateSet(this, _P, true);
        const { cmd: t2, post: e2 } = __privateGet(this, _D)[__privateGet(this, _F)];
        t2();
        e2?.();
        __privateSet(this, _P, false);
      }
    }
    hasSomethingToUndo() {
      return -1 !== __privateGet(this, _F);
    }
    hasSomethingToRedo() {
      return __privateGet(this, _F) < __privateGet(this, _D).length - 1;
    }
    cleanType(t2) {
      if (-1 !== __privateGet(this, _F)) {
        for (let e2 = __privateGet(this, _F); e2 >= 0; e2--) if (__privateGet(this, _D)[e2].type !== t2) {
          __privateGet(this, _D).splice(e2 + 1, __privateGet(this, _F) - e2);
          __privateSet(this, _F, e2);
          return;
        }
        __privateGet(this, _D).length = 0;
        __privateSet(this, _F, -1);
      }
    }
    destroy() {
      __privateSet(this, _D, null);
    }
  };
  _D = new WeakMap();
  _P = new WeakMap();
  _I = new WeakMap();
  _F = new WeakMap();
  var _KeyboardManager_static, B_fn, L_fn;
  var _KeyboardManager = class _KeyboardManager {
    constructor(t2) {
      var _a4;
      this.callbacks = /* @__PURE__ */ new Map();
      const { isMac: e2 } = FeatureTest.platform;
      for (const [i2, n2, s2 = {}] of t2) {
        const t3 = i2.some((t4) => t4.startsWith("mac+"));
        for (const a2 of i2) {
          let i3 = a2;
          if (t3) {
            const t4 = a2.startsWith("mac+");
            if (e2 !== t4) continue;
            t4 && (i3 = a2.slice(4));
          }
          const [r2, o2] = __privateMethod(_a4 = _KeyboardManager, _KeyboardManager_static, B_fn).call(_a4, i3);
          null !== r2 && this.callbacks.getOrInsertComputed(r2, makeArr).push({ callback: n2, options: s2, modifiers: o2 });
        }
      }
    }
    exec(t2, e2) {
      var _a4;
      let i2 = this.callbacks.get(e2.key);
      if (!i2) {
        if (/^[a-z]$/i.test(e2.key)) return;
        const t3 = __privateMethod(_a4 = _KeyboardManager, _KeyboardManager_static, L_fn).call(_a4, e2.code);
        if (null === t3 || t3 === e2.key) return;
        i2 = this.callbacks.get(t3);
        if (!i2) return;
      }
      const n2 = (e2.altKey ? _KeyboardManager.ALT : 0) | (e2.ctrlKey ? _KeyboardManager.CTRL : 0) | (e2.metaKey ? _KeyboardManager.META : 0) | (e2.shiftKey ? _KeyboardManager.SHIFT : 0), s2 = i2.find((t3) => t3.modifiers === n2);
      if (!s2) return;
      const { callback: a2, options: { bubbles: r2 = false, args: o2 = [], checker: l2 = null } } = s2;
      if (!l2 || l2(t2, e2)) {
        a2.bind(t2, ...o2, e2)();
        r2 || stopEvent(e2);
      }
    }
  };
  _KeyboardManager_static = new WeakSet();
  B_fn = function(t2) {
    let e2 = null, i2 = 0;
    for (let n2 of t2.split("+")) {
      n2 = n2.trim();
      if (!n2) continue;
      const s2 = n2.toUpperCase(), a2 = _KeyboardManager[s2];
      if (a2) i2 |= a2;
      else {
        if (null !== e2) {
          warn(`KeyboardManager: multiple keys in shortcut "${t2}"`);
          break;
        }
        e2 = "SPACE" === s2 ? " " : n2;
      }
    }
    null === e2 && warn(`KeyboardManager: no key found in shortcut "${t2}"`);
    return [e2, i2];
  };
  L_fn = function(t2) {
    const e2 = /^(?:Key([A-Z])|(?:Digit|Numpad)(\d))$/.exec(t2);
    return e2 ? e2[1]?.toLowerCase() ?? e2[2] : null;
  };
  __privateAdd(_KeyboardManager, _KeyboardManager_static);
  __publicField(_KeyboardManager, "ALT", 1);
  __publicField(_KeyboardManager, "CTRL", 2);
  __publicField(_KeyboardManager, "META", 4);
  __publicField(_KeyboardManager, "SHIFT", 8);
  var KeyboardManager = _KeyboardManager;
  var _ColorManager = class _ColorManager {
    get _colors() {
      const t2 = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
      !(function getColorValues(t3) {
        const e2 = document.createElement("span");
        e2.style.visibility = "hidden";
        e2.style.colorScheme = "only light";
        document.body.append(e2);
        for (const i2 of t3.keys()) {
          e2.style.color = i2;
          const n2 = window.getComputedStyle(e2).color;
          t3.set(i2, getRGB(n2));
        }
        e2.remove();
      })(t2);
      return shadow(this, "_colors", t2);
    }
    convert(t2) {
      const e2 = getRGB(t2);
      if (!window.matchMedia("(forced-colors: active)").matches) return e2;
      for (const [t3, i2] of this._colors) if (i2.every((t4, i3) => t4 === e2[i3])) return _ColorManager._colorsMapping.get(t3);
      return e2;
    }
    getHexCode(t2) {
      const e2 = this._colors.get(t2);
      return e2 ? Util.makeHexColor(...e2) : t2;
    }
  };
  __publicField(_ColorManager, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
  var ColorManager = _ColorManager;
  var _O, _R, _N, _U, _H, _z, _G, _W, _V, _j, _$, _K, _X, _q, _Y, _Q, _J, _Z, _tt, _et, _it, _nt, _st, _at, _rt, _ot, _lt, _ht, _ct, _dt, _ut, _pt, _gt, _mt, _ft, _bt, _yt, _vt, _At, _wt, _xt, _Ct, _Et, _St, _Tt, _kt, __t, _Mt, _Dt, _Pt, _AnnotationEditorUIManager_instances, Ot_fn, Rt_fn, It_fn, Nt_fn, Ut_fn, zt_fn, Ft_fn, Gt_fn, Wt_fn, Lt_fn, Vt_fn, jt_fn, $t_fn, Bt_fn, Ht_fn, qt_fn, Qt_fn, Jt_fn, Kt_fn, Zt_get, Yt_fn, Xt_fn;
  var _AnnotationEditorUIManager = class _AnnotationEditorUIManager {
    constructor(t2, e2, i2, n2, s2, a2, r2, o2, l2, h2, c2, d2, u2, p2, g2, m2) {
      __privateAdd(this, _AnnotationEditorUIManager_instances);
      __privateAdd(this, _O, new AbortController());
      __privateAdd(this, _R, null);
      __privateAdd(this, _N, null);
      __privateAdd(this, _U, /* @__PURE__ */ new Map());
      __privateAdd(this, _H, /* @__PURE__ */ new Map());
      __privateAdd(this, _z, null);
      __privateAdd(this, _G, null);
      __privateAdd(this, _W, null);
      __privateAdd(this, _V, null);
      __privateAdd(this, _j, new CommandManager());
      __privateAdd(this, _$, null);
      __privateAdd(this, _K, null);
      __privateAdd(this, _X, null);
      __privateAdd(this, _q, 0);
      __privateAdd(this, _Y, /* @__PURE__ */ new Set());
      __privateAdd(this, _Q, null);
      __privateAdd(this, _J, null);
      __privateAdd(this, _Z, /* @__PURE__ */ new Set());
      __publicField(this, "_editorUndoBar", null);
      __privateAdd(this, _tt, false);
      __privateAdd(this, _et, false);
      __privateAdd(this, _it, false);
      __privateAdd(this, _nt, null);
      __privateAdd(this, _st, null);
      __privateAdd(this, _at, null);
      __privateAdd(this, _rt, null);
      __privateAdd(this, _ot, false);
      __privateAdd(this, _lt, null);
      __privateAdd(this, _ht, new IdManager());
      __privateAdd(this, _ct, false);
      __privateAdd(this, _dt, false);
      __privateAdd(this, _ut, false);
      __privateAdd(this, _pt, null);
      __privateAdd(this, _gt, null);
      __privateAdd(this, _mt, null);
      __privateAdd(this, _ft, null);
      __privateAdd(this, _bt, null);
      __privateAdd(this, _yt, b.NONE);
      __privateAdd(this, _vt, /* @__PURE__ */ new Set());
      __privateAdd(this, _At, null);
      __privateAdd(this, _wt, null);
      __privateAdd(this, _xt, null);
      __privateAdd(this, _Ct, null);
      __privateAdd(this, _Et, null);
      __privateAdd(this, _St, { isEditing: false, isEmpty: true, hasSomethingToUndo: false, hasSomethingToRedo: false, hasSelectedEditor: false, hasSelectedText: false });
      __privateAdd(this, _Tt, [0, 0]);
      __privateAdd(this, _kt, null);
      __privateAdd(this, __t, null);
      __privateAdd(this, _Mt, null);
      __privateAdd(this, _Dt, null);
      __privateAdd(this, _Pt, null);
      const f2 = this._signal = __privateGet(this, _O).signal;
      __privateSet(this, __t, t2);
      __privateSet(this, _Mt, e2);
      __privateSet(this, _Dt, i2);
      __privateSet(this, _G, n2);
      __privateSet(this, _$, s2);
      __privateSet(this, _wt, a2);
      __privateSet(this, _Et, o2);
      this._eventBus = r2;
      const b2 = { signal: f2, ...K };
      r2.on("editingaction", this.onEditingAction.bind(this), b2);
      r2.on("pagechanging", this.onPageChanging.bind(this), b2);
      r2.on("scalechanging", this.onScaleChanging.bind(this), b2);
      r2.on("rotationchanging", this.onRotationChanging.bind(this), b2);
      r2.on("setpreference", this.onSetPreference.bind(this), b2);
      r2.on("switchannotationeditorparams", (t3) => this.updateParams(t3.type, t3.value), b2);
      window.addEventListener("pointerdown", () => {
        __privateSet(this, _dt, true);
      }, { capture: true, signal: f2 });
      window.addEventListener("pointerup", () => {
        __privateSet(this, _dt, false);
      }, { capture: true, signal: f2 });
      window.addEventListener("beforeunload", __privateMethod(this, _AnnotationEditorUIManager_instances, It_fn).bind(this), { capture: true, signal: f2 });
      __privateMethod(this, _AnnotationEditorUIManager_instances, Ft_fn).call(this);
      __privateMethod(this, _AnnotationEditorUIManager_instances, Bt_fn).call(this);
      __privateMethod(this, _AnnotationEditorUIManager_instances, Lt_fn).call(this);
      __privateSet(this, _W, o2.annotationStorage);
      __privateSet(this, _nt, o2.filterFactory);
      __privateSet(this, _xt, l2);
      __privateSet(this, _rt, h2 || null);
      __privateSet(this, _tt, c2);
      __privateSet(this, _et, d2);
      __privateSet(this, _it, u2);
      __privateSet(this, _bt, p2 || null);
      this.viewParameters = { realScale: PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
      this.isShiftKeyDown = false;
      this._editorUndoBar = g2 || null;
      this._supportsPinchToZoom = false !== m2;
      s2?.setSidebarUiManager(this);
    }
    static get _keyboardManager() {
      const t2 = _AnnotationEditorUIManager.prototype, arrowChecker = (t3) => __privateGet(t3, __t).contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t3.hasSomethingToControl(), textInputChecker = (t3, { target: e3 }) => {
        if (e3 instanceof HTMLInputElement) {
          const { type: t4 } = e3;
          return "text" !== t4 && "number" !== t4;
        }
        return true;
      }, e2 = this.TRANSLATE_SMALL, i2 = this.TRANSLATE_BIG;
      return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], t2.selectAll, { checker: textInputChecker }], [["ctrl+z", "mac+meta+z"], t2.undo, { checker: textInputChecker }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t2.redo, { checker: textInputChecker }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t2.delete, { checker: textInputChecker }], [["Enter"], t2.addNewEditorFromKeyboard, { checker: (t3, { target: e3 }) => !(e3 instanceof HTMLButtonElement) && __privateGet(t3, __t).contains(e3) && !t3.isEnterHandled }], [["Space"], t2.addNewEditorFromKeyboard, { checker: (t3, { target: e3 }) => !(e3 instanceof HTMLButtonElement) && __privateGet(t3, __t).contains(document.activeElement) }], [["Escape"], t2.unselectAll], [["ArrowLeft"], t2.translateSelectedEditors, { args: [-e2, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2.translateSelectedEditors, { args: [-i2, 0], checker: arrowChecker }], [["ArrowRight"], t2.translateSelectedEditors, { args: [e2, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2.translateSelectedEditors, { args: [i2, 0], checker: arrowChecker }], [["ArrowUp"], t2.translateSelectedEditors, { args: [0, -e2], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2.translateSelectedEditors, { args: [0, -i2], checker: arrowChecker }], [["ArrowDown"], t2.translateSelectedEditors, { args: [0, e2], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2.translateSelectedEditors, { args: [0, i2], checker: arrowChecker }]]));
    }
    destroy() {
      __privateGet(this, _Pt)?.resolve();
      __privateSet(this, _Pt, null);
      __privateGet(this, _O)?.abort();
      __privateSet(this, _O, null);
      this._signal = null;
      for (const t2 of __privateGet(this, _H).values()) t2.destroy();
      __privateGet(this, _H).clear();
      __privateGet(this, _U).clear();
      __privateGet(this, _Z).clear();
      __privateGet(this, _ft)?.clear();
      __privateSet(this, _R, null);
      __privateGet(this, _vt).clear();
      __privateGet(this, _j).destroy();
      __privateGet(this, _G)?.destroy();
      __privateGet(this, _$)?.destroy();
      __privateGet(this, _wt)?.destroy();
      __privateGet(this, _lt)?.hide();
      __privateSet(this, _lt, null);
      __privateGet(this, _mt)?.destroy();
      __privateSet(this, _mt, null);
      __privateSet(this, _N, null);
      if (__privateGet(this, _st)) {
        clearTimeout(__privateGet(this, _st));
        __privateSet(this, _st, null);
      }
      if (__privateGet(this, _kt)) {
        clearTimeout(__privateGet(this, _kt));
        __privateSet(this, _kt, null);
      }
      this._editorUndoBar?.destroy();
      __privateSet(this, _Et, null);
    }
    combinedSignal(t2) {
      return AbortSignal.any([this._signal, t2.signal]);
    }
    get mlManager() {
      return __privateGet(this, _bt);
    }
    get useNewAltTextFlow() {
      return __privateGet(this, _et);
    }
    get useNewAltTextWhenAddingImage() {
      return __privateGet(this, _it);
    }
    get hcmFilter() {
      return shadow(this, "hcmFilter", __privateGet(this, _xt) ? __privateGet(this, _nt).addHCMFilter(__privateGet(this, _xt).foreground, __privateGet(this, _xt).background) : "none");
    }
    get direction() {
      return shadow(this, "direction", getComputedStyle(__privateGet(this, __t)).direction);
    }
    get _highlightColors() {
      return shadow(this, "_highlightColors", __privateGet(this, _rt) ? new Map(__privateGet(this, _rt).split(",").map((t2) => {
        (t2 = t2.split("=").map((t3) => t3.trim()))[1] = t2[1].toUpperCase();
        return t2;
      })) : null);
    }
    get highlightColors() {
      const { _highlightColors: t2 } = this;
      if (!t2) return shadow(this, "highlightColors", null);
      const e2 = /* @__PURE__ */ new Map(), i2 = !!__privateGet(this, _xt);
      for (const [n2, s2] of t2) {
        const t3 = n2.endsWith("_HCM");
        i2 && t3 ? e2.set(n2.replace("_HCM", ""), s2) : i2 || t3 || e2.set(n2, s2);
      }
      return shadow(this, "highlightColors", e2);
    }
    get highlightColorNames() {
      return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t2) => t2.reverse())) : null);
    }
    getNonHCMColor(t2) {
      if (!this._highlightColors) return t2;
      const e2 = this.highlightColorNames.get(t2);
      return this._highlightColors.get(e2) || t2;
    }
    getNonHCMColorName(t2) {
      return this.highlightColorNames.get(t2) || t2;
    }
    setCurrentDrawingSession(t2) {
      if (t2) {
        this.unselectAll();
        this.disableUserSelect(true);
      } else this.disableUserSelect(false);
      __privateSet(this, _X, t2);
    }
    setMainHighlightColorPicker(t2) {
      __privateSet(this, _mt, t2);
    }
    editAltText(t2, e2 = false) {
      __privateGet(this, _G)?.editAltText(this, t2, e2);
    }
    hasCommentManager() {
      return !!__privateGet(this, _$);
    }
    editComment(t2, e2, i2, n2) {
      __privateGet(this, _$)?.showDialog(this, t2, e2, i2, n2);
    }
    selectComment(t2, e2) {
      const i2 = __privateGet(this, _H).get(t2), n2 = i2?.getEditorByUID(e2);
      n2?.toggleComment(true, true);
    }
    updateComment(t2) {
      __privateGet(this, _$)?.updateComment(t2.getData());
    }
    updatePopupColor(t2) {
      __privateGet(this, _$)?.updatePopupColor(t2);
    }
    removeComment(t2) {
      __privateGet(this, _$)?.removeComments([t2.uid]);
    }
    deleteComment(t2, e2) {
      const undo = () => {
        t2.comment = e2;
      };
      this.addCommands({ cmd: () => {
        this._editorUndoBar?.show(undo, "comment");
        this.toggleComment(null);
        t2.comment = null;
      }, undo, mustExec: true });
    }
    toggleComment(t2, e2, i2 = void 0) {
      __privateGet(this, _$)?.toggleCommentPopup(t2, e2, i2);
    }
    makeCommentColor(t2, e2) {
      return t2 && __privateGet(this, _$)?.makeCommentColor(t2, e2) || null;
    }
    getCommentDialogElement() {
      return __privateGet(this, _$)?.dialogElement || null;
    }
    async waitForEditorsRendered(t2) {
      if (__privateGet(this, _H).has(t2 - 1)) return;
      const { resolve: e2, promise: i2 } = Promise.withResolvers(), onEditorsRendered = (i3) => {
        if (i3.pageNumber === t2) {
          this._eventBus.off("editorsrendered", onEditorsRendered);
          e2();
        }
      };
      this._eventBus.on("editorsrendered", onEditorsRendered, K);
      await i2;
    }
    getSignature(t2) {
      __privateGet(this, _wt)?.getSignature({ uiManager: this, editor: t2 });
    }
    get signatureManager() {
      return __privateGet(this, _wt);
    }
    switchToMode(t2, e2) {
      this._eventBus.on("annotationeditormodechanged", e2, { once: true, signal: this._signal, ...K });
      this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t2 });
    }
    setPreference(t2, e2) {
      this._eventBus.dispatch("setpreference", { source: this, name: t2, value: e2 });
    }
    onSetPreference({ name: t2, value: e2 }) {
      if ("enableNewAltTextWhenAddingImage" === t2) __privateSet(this, _it, e2);
    }
    onPageChanging({ pageNumber: t2 }) {
      __privateSet(this, _q, t2 - 1);
    }
    deletePage(t2) {
      for (const e2 of this.getEditors(t2)) e2.remove();
      __privateGet(this, _H).delete(t2);
      __privateGet(this, _q) === t2 && __privateSet(this, _q, 0);
    }
    focusMainContainer() {
      __privateGet(this, __t).focus();
    }
    findParent(t2, e2) {
      for (const i2 of __privateGet(this, _H).values()) {
        const { x: n2, y: s2, width: a2, height: r2 } = i2.div.getBoundingClientRect();
        if (t2 >= n2 && t2 <= n2 + a2 && e2 >= s2 && e2 <= s2 + r2) return i2;
      }
      return null;
    }
    disableUserSelect(t2 = false) {
      __privateGet(this, _Mt).classList.toggle("noUserSelect", t2);
    }
    addShouldRescale(t2) {
      __privateGet(this, _Z).add(t2);
    }
    removeShouldRescale(t2) {
      __privateGet(this, _Z).delete(t2);
    }
    onScaleChanging({ scale: t2 }) {
      this.commitOrRemove();
      this.viewParameters.realScale = t2 * PixelsPerInch.PDF_TO_CSS_UNITS;
      for (const t3 of __privateGet(this, _Z)) t3.onScaleChanging();
      __privateGet(this, _X)?.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t2 }) {
      this.commitOrRemove();
      this.viewParameters.rotation = t2;
    }
    highlightSelection(t2 = "", e2 = false) {
      const i2 = document.getSelection();
      if (!i2 || i2.isCollapsed) return;
      const { anchorNode: n2, anchorOffset: s2, focusNode: a2, focusOffset: r2 } = i2, o2 = i2.toString(), l2 = __privateMethod(this, _AnnotationEditorUIManager_instances, Ot_fn).call(this, i2).closest(".textLayer"), h2 = this.getSelectionBoxes(l2);
      if (!h2) return;
      i2.empty();
      const c2 = __privateMethod(this, _AnnotationEditorUIManager_instances, Rt_fn).call(this, l2), d2 = __privateGet(this, _yt) === b.NONE, callback = () => {
        const i3 = c2?.createAndAddNewEditor({ x: 0, y: 0 }, false, { methodOfCreation: t2, boxes: h2, anchorNode: n2, anchorOffset: s2, focusNode: a2, focusOffset: r2, text: o2 });
        d2 && this.showAllEditors("highlight", true, true);
        e2 && i3?.editComment();
      };
      d2 ? this.switchToMode(b.HIGHLIGHT, callback) : callback();
    }
    commentSelection(t2 = "") {
      this.highlightSelection(t2, true);
    }
    getAndRemoveDataFromAnnotationStorage(t2) {
      if (!__privateGet(this, _W)) return null;
      const e2 = `${f}${t2}`, i2 = __privateGet(this, _W).getRawValue(e2);
      i2 && __privateGet(this, _W).remove(e2);
      return i2;
    }
    addToAnnotationStorage(t2) {
      t2.isEmpty() || !__privateGet(this, _W) || __privateGet(this, _W).has(t2.id) || __privateGet(this, _W).setValue(t2.id, t2);
    }
    a11yAlert(t2, e2 = null) {
      const i2 = __privateGet(this, _Dt);
      if (i2) {
        i2.setAttribute("data-l10n-id", t2);
        e2 ? i2.setAttribute("data-l10n-args", JSON.stringify(e2)) : i2.removeAttribute("data-l10n-args");
      }
    }
    blur() {
      this.isShiftKeyDown = false;
      if (__privateGet(this, _ot)) {
        __privateSet(this, _ot, false);
        __privateMethod(this, _AnnotationEditorUIManager_instances, zt_fn).call(this, "main_toolbar");
      }
      if (!this.hasSelection) return;
      const { activeElement: t2 } = document;
      for (const e2 of __privateGet(this, _vt)) if (e2.div.contains(t2)) {
        __privateSet(this, _gt, [e2, t2]);
        e2._focusEventsAllowed = false;
        break;
      }
    }
    focus() {
      if (!__privateGet(this, _gt)) return;
      const [t2, e2] = __privateGet(this, _gt);
      __privateSet(this, _gt, null);
      e2.addEventListener("focusin", () => {
        t2._focusEventsAllowed = true;
      }, { once: true, signal: this._signal });
      e2.focus();
    }
    addEditListeners() {
      __privateMethod(this, _AnnotationEditorUIManager_instances, Lt_fn).call(this);
      this.setEditingState(true);
    }
    removeEditListeners() {
      __privateMethod(this, _AnnotationEditorUIManager_instances, Vt_fn).call(this);
      this.setEditingState(false);
    }
    dragOver(t2) {
      for (const { type: e2 } of t2.dataTransfer.items) for (const i2 of __privateGet(this, _J)) if (i2.isHandlingMimeForPasting(e2)) {
        t2.dataTransfer.dropEffect = "copy";
        t2.preventDefault();
        return;
      }
    }
    drop(t2) {
      for (const e2 of t2.dataTransfer.items) for (const i2 of __privateGet(this, _J)) if (i2.isHandlingMimeForPasting(e2.type)) {
        i2.paste(e2, this.currentLayer);
        t2.preventDefault();
        return;
      }
    }
    copy(t2) {
      t2.preventDefault();
      __privateGet(this, _R)?.commitOrRemove();
      if (!this.hasSelection) return;
      const e2 = [];
      for (const t3 of __privateGet(this, _vt)) {
        const i2 = t3.serialize(true);
        i2 && e2.push(i2);
      }
      0 !== e2.length && t2.clipboardData.setData("application/pdfjs", JSON.stringify(e2));
    }
    cut(t2) {
      this.copy(t2);
      this.delete();
    }
    async paste(t2) {
      t2.preventDefault();
      const { clipboardData: e2 } = t2;
      for (const t3 of e2.items) for (const e3 of __privateGet(this, _J)) if (e3.isHandlingMimeForPasting(t3.type)) {
        e3.paste(t3, this.currentLayer);
        return;
      }
      let i2 = e2.getData("application/pdfjs");
      if (!i2) return;
      try {
        i2 = JSON.parse(i2);
      } catch (t3) {
        warn(`paste: "${t3.message}".`);
        return;
      }
      if (!Array.isArray(i2)) return;
      this.unselectAll();
      const n2 = this.currentLayer;
      try {
        const t3 = [];
        for (const e3 of i2) {
          const i3 = await n2.deserialize(e3);
          if (!i3) return;
          t3.push(i3);
        }
        const cmd = () => {
          for (const e3 of t3) __privateMethod(this, _AnnotationEditorUIManager_instances, Kt_fn).call(this, e3);
          __privateMethod(this, _AnnotationEditorUIManager_instances, Xt_fn).call(this, t3);
        }, undo = () => {
          for (const e3 of t3) e3.remove();
        };
        this.addCommands({ cmd, undo, mustExec: true });
      } catch (t3) {
        warn(`paste: "${t3.message}".`);
      }
    }
    keydown(t2) {
      this.isShiftKeyDown || "Shift" !== t2.key || (this.isShiftKeyDown = true);
      __privateGet(this, _yt) === b.NONE || this.isEditorHandlingKeyboard || _AnnotationEditorUIManager._keyboardManager.exec(this, t2);
    }
    keyup(t2) {
      if (this.isShiftKeyDown && "Shift" === t2.key) {
        this.isShiftKeyDown = false;
        if (__privateGet(this, _ot)) {
          __privateSet(this, _ot, false);
          __privateMethod(this, _AnnotationEditorUIManager_instances, zt_fn).call(this, "main_toolbar");
        }
      }
    }
    onEditingAction({ name: t2 }) {
      switch (t2) {
        case "undo":
        case "redo":
        case "delete":
        case "selectAll":
          this[t2]();
          break;
        case "highlightSelection":
          this.highlightSelection("context_menu");
          break;
        case "commentSelection":
          this.commentSelection("context_menu");
      }
    }
    updatePageIndex(t2, e2) {
      for (const i3 of this.getEditors(t2)) i3.pageIndex = e2;
      const i2 = __privateGet(this, _z).get(t2);
      if (i2) {
        i2.pageIndex = e2;
        __privateGet(this, _H).set(e2, i2);
        __privateGet(this, _ct) ? i2.enable() : i2.disable();
      }
    }
    startUpdatePages() {
      __privateSet(this, _z, new Map(__privateGet(this, _H)));
      __privateGet(this, _H).clear();
    }
    endUpdatePages() {
      __privateSet(this, _z, null);
    }
    clonePage(t2, e2) {
      for (const i2 of this.getEditors(t2)) {
        const t3 = i2.serialize(i2.mode !== b.HIGHLIGHT);
        if (t3) {
          t3.pageIndex = e2;
          t3.id = this.getId();
          t3.isClone = true;
          delete t3.popupRef;
          __privateGet(this, _W).setValue(t3.id, t3);
        }
      }
    }
    findClonesForPage(t2) {
      const e2 = [], { pageIndex: i2 } = t2;
      for (const [n2, s2] of __privateGet(this, _W)) if (s2.pageIndex === i2 && s2.isClone) {
        __privateGet(this, _W).remove(n2);
        e2.push(t2.deserialize(s2).then((e3) => {
          if (e3) {
            e3.isClone = true;
            t2.addOrRebuild(e3);
          }
        }));
      }
      return Promise.all(e2);
    }
    setEditingState(t2) {
      if (t2) {
        __privateMethod(this, _AnnotationEditorUIManager_instances, Gt_fn).call(this);
        __privateMethod(this, _AnnotationEditorUIManager_instances, jt_fn).call(this);
        __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { isEditing: __privateGet(this, _yt) !== b.NONE, isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, Yt_fn).call(this), hasSomethingToUndo: __privateGet(this, _j).hasSomethingToUndo(), hasSomethingToRedo: __privateGet(this, _j).hasSomethingToRedo(), hasSelectedEditor: false });
      } else {
        __privateMethod(this, _AnnotationEditorUIManager_instances, Wt_fn).call(this);
        __privateMethod(this, _AnnotationEditorUIManager_instances, $t_fn).call(this);
        __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { isEditing: false });
        this.disableUserSelect(false);
      }
    }
    registerEditorTypes(t2) {
      if (!__privateGet(this, _J)) {
        __privateSet(this, _J, t2);
        for (const t3 of __privateGet(this, _J)) __privateMethod(this, _AnnotationEditorUIManager_instances, qt_fn).call(this, t3.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return __privateGet(this, _ht).id;
    }
    get currentLayer() {
      return __privateGet(this, _H).get(__privateGet(this, _q));
    }
    getLayer(t2) {
      return __privateGet(this, _H).get(t2);
    }
    get currentPageIndex() {
      return __privateGet(this, _q);
    }
    addLayer(t2) {
      __privateGet(this, _H).set(t2.pageIndex, t2);
      __privateGet(this, _ct) ? t2.enable() : t2.disable();
    }
    removeLayer(t2) {
      __privateGet(this, _H).delete(t2.pageIndex);
    }
    async updateMode(t2, e2 = null, i2 = false, n2 = false, s2 = false, a2 = false) {
      if (__privateGet(this, _yt) !== t2) {
        if (__privateGet(this, _Pt)) {
          await __privateGet(this, _Pt).promise;
          if (!__privateGet(this, _Pt)) return;
        }
        __privateSet(this, _Pt, Promise.withResolvers());
        __privateGet(this, _X)?.commitOrRemove();
        __privateGet(this, _yt) === b.POPUP && __privateGet(this, _$)?.hideSidebar();
        __privateGet(this, _$)?.destroyPopup();
        __privateSet(this, _yt, t2);
        if (t2 !== b.NONE) {
          for (const t3 of __privateGet(this, _U).values()) t3.addStandaloneCommentButton();
          t2 === b.SIGNATURE && await __privateGet(this, _wt)?.loadSignatures();
          i2 && CurrentPointers.clearPointerType();
          this.setEditingState(true);
          await __privateMethod(this, _AnnotationEditorUIManager_instances, Qt_fn).call(this);
          this.unselectAll();
          for (const e3 of __privateGet(this, _H).values()) e3.updateMode(t2);
          if (t2 === b.POPUP) {
            __privateGet(this, _N) || __privateSet(this, _N, await __privateGet(this, _Et).getAnnotationsByType(new Set(__privateGet(this, _J).map((t4) => t4._editorType))));
            const t3 = /* @__PURE__ */ new Set(), e3 = [];
            for (const i3 of __privateGet(this, _U).values()) {
              const { annotationElementId: n3, hasComment: s3, deleted: a3 } = i3;
              n3 && t3.add(n3);
              s3 && !a3 && e3.push(i3.getData());
            }
            for (const i3 of __privateGet(this, _N)) {
              const { id: n3, popupRef: s3, contentsObj: a3 } = i3;
              s3 && a3?.str && !t3.has(n3) && !__privateGet(this, _Y).has(n3) && e3.push(i3);
            }
            __privateGet(this, _$)?.showSidebar(e3);
          }
          if (e2) {
            for (const t3 of __privateGet(this, _U).values()) if (t3.uid === e2) {
              this.setSelected(t3);
              a2 ? t3.editComment() : s2 ? t3.enterInEditMode() : t3.focus();
            } else t3.unselect();
            __privateGet(this, _Pt).resolve();
          } else {
            n2 && this.addNewEditorFromKeyboard();
            __privateGet(this, _Pt).resolve();
          }
        } else {
          this.setEditingState(false);
          __privateMethod(this, _AnnotationEditorUIManager_instances, Jt_fn).call(this);
          for (const t3 of __privateGet(this, _U).values()) t3.hideStandaloneCommentButton();
          this._editorUndoBar?.hide();
          this.toggleComment(null);
          __privateGet(this, _Pt).resolve();
        }
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t2) {
      t2.mode !== __privateGet(this, _yt) && this._eventBus.dispatch("switchannotationeditormode", { source: this, ...t2 });
    }
    updateParams(t2, e2) {
      if (__privateGet(this, _J)) {
        switch (t2) {
          case y.CREATE:
            this.currentLayer.addNewEditor(e2);
            return;
          case y.HIGHLIGHT_SHOW_ALL:
            this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } });
            (__privateGet(this, _Ct) || __privateSet(this, _Ct, /* @__PURE__ */ new Map())).set(t2, e2);
            this.showAllEditors("highlight", e2);
        }
        if (this.hasSelection) for (const i2 of __privateGet(this, _vt)) i2.updateParams(t2, e2);
        else for (const i2 of __privateGet(this, _J)) i2.updateDefaultParams(t2, e2);
      }
    }
    showAllEditors(t2, e2, i2 = false) {
      for (const i3 of __privateGet(this, _U).values()) i3.editorType === t2 && i3.show(e2);
      (__privateGet(this, _Ct)?.get(y.HIGHLIGHT_SHOW_ALL) ?? true) !== e2 && __privateMethod(this, _AnnotationEditorUIManager_instances, qt_fn).call(this, [[y.HIGHLIGHT_SHOW_ALL, e2]]);
    }
    enableWaiting(t2 = false) {
      if (__privateGet(this, _ut) !== t2) {
        __privateSet(this, _ut, t2);
        for (const e2 of __privateGet(this, _H).values()) {
          t2 ? e2.disableClick() : e2.enableClick();
          e2.div.classList.toggle("waiting", t2);
        }
      }
    }
    *getEditors(t2) {
      for (const e2 of __privateGet(this, _U).values()) e2.pageIndex === t2 && (yield e2);
    }
    getEditor(t2) {
      return __privateGet(this, _U).get(t2);
    }
    addEditor(t2) {
      __privateGet(this, _U).set(t2.id, t2);
    }
    removeEditor(t2) {
      if (t2.div.contains(document.activeElement)) {
        __privateGet(this, _st) && clearTimeout(__privateGet(this, _st));
        __privateSet(this, _st, setTimeout(() => {
          this.focusMainContainer();
          __privateSet(this, _st, null);
        }, 0));
      }
      __privateGet(this, _U).delete(t2.id);
      t2.annotationElementId && __privateGet(this, _ft)?.delete(t2.annotationElementId);
      this.unselect(t2);
      t2.annotationElementId && __privateGet(this, _Y).has(t2.annotationElementId) || __privateGet(this, _W)?.remove(t2.id);
    }
    addDeletedAnnotationElement(t2) {
      __privateGet(this, _Y).add(t2.annotationElementId);
      this.addChangedExistingAnnotation(t2);
      t2.deleted = true;
    }
    isDeletedAnnotationElement(t2) {
      return __privateGet(this, _Y).has(t2);
    }
    removeDeletedAnnotationElement(t2) {
      __privateGet(this, _Y).delete(t2.annotationElementId);
      this.removeChangedExistingAnnotation(t2);
      t2.deleted = false;
    }
    setActiveEditor(t2) {
      if (__privateGet(this, _R) !== t2) {
        __privateSet(this, _R, t2);
        t2 && __privateMethod(this, _AnnotationEditorUIManager_instances, qt_fn).call(this, t2.propertiesToUpdate);
      }
    }
    updateUI(t2) {
      __privateGet(this, _AnnotationEditorUIManager_instances, Zt_get) === t2 && __privateMethod(this, _AnnotationEditorUIManager_instances, qt_fn).call(this, t2.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t2) {
      __privateMethod(this, _AnnotationEditorUIManager_instances, qt_fn).call(this, t2.defaultPropertiesToUpdate);
    }
    toggleSelected(t2) {
      if (__privateGet(this, _vt).has(t2)) {
        __privateGet(this, _vt).delete(t2);
        t2.unselect();
        __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedEditor: this.hasSelection });
      } else {
        __privateGet(this, _vt).add(t2);
        t2.select();
        __privateMethod(this, _AnnotationEditorUIManager_instances, qt_fn).call(this, t2.propertiesToUpdate);
        __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedEditor: true });
      }
    }
    setSelected(t2) {
      this.updateToolbar({ mode: t2.mode, editId: t2.uid });
      __privateGet(this, _X)?.commitOrRemove();
      for (const e2 of __privateGet(this, _vt)) e2 !== t2 && e2.unselect();
      __privateGet(this, _$)?.destroyPopup();
      __privateGet(this, _vt).clear();
      __privateGet(this, _vt).add(t2);
      t2.select();
      __privateMethod(this, _AnnotationEditorUIManager_instances, qt_fn).call(this, t2.propertiesToUpdate);
      __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedEditor: true });
    }
    get firstSelectedEditor() {
      return __privateGet(this, _vt).values().next().value;
    }
    unselect(t2) {
      t2.unselect();
      __privateGet(this, _vt).delete(t2);
      __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedEditor: this.hasSelection });
    }
    get hasSelection() {
      return 0 !== __privateGet(this, _vt).size;
    }
    get isEnterHandled() {
      return 1 === __privateGet(this, _vt).size && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      __privateGet(this, _j).undo();
      __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSomethingToUndo: __privateGet(this, _j).hasSomethingToUndo(), hasSomethingToRedo: true, isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, Yt_fn).call(this) });
      this._editorUndoBar?.hide();
    }
    redo() {
      __privateGet(this, _j).redo();
      __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSomethingToUndo: true, hasSomethingToRedo: __privateGet(this, _j).hasSomethingToRedo(), isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, Yt_fn).call(this) });
    }
    addCommands(t2) {
      __privateGet(this, _j).add(t2);
      __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSomethingToUndo: true, hasSomethingToRedo: false, isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, Yt_fn).call(this) });
    }
    cleanUndoStack(t2) {
      __privateGet(this, _j).cleanType(t2);
    }
    delete() {
      this.commitOrRemove();
      const t2 = this.currentLayer?.endDrawingSession(true);
      if (!this.hasSelection && !t2) return;
      const e2 = t2 ? [t2] : [...__privateGet(this, _vt)], undo = () => {
        for (const t3 of e2) __privateMethod(this, _AnnotationEditorUIManager_instances, Kt_fn).call(this, t3);
      };
      this.addCommands({ cmd: () => {
        this._editorUndoBar?.show(undo, 1 === e2.length ? e2[0].editorType : e2.length);
        for (const t3 of e2) t3.remove();
      }, undo, mustExec: true });
    }
    commitOrRemove() {
      __privateGet(this, _R)?.commitOrRemove();
    }
    hasSomethingToControl() {
      return __privateGet(this, _R) || this.hasSelection;
    }
    selectAll() {
      for (const t2 of __privateGet(this, _vt)) t2.commit();
      __privateMethod(this, _AnnotationEditorUIManager_instances, Xt_fn).call(this, __privateGet(this, _U).values());
    }
    unselectAll() {
      if (__privateGet(this, _R)) {
        __privateGet(this, _R).commitOrRemove();
        if (__privateGet(this, _yt) !== b.NONE) return;
      }
      if (!__privateGet(this, _X)?.commitOrRemove()) {
        __privateGet(this, _$)?.destroyPopup();
        if (this.hasSelection) {
          for (const t2 of __privateGet(this, _vt)) t2.unselect();
          __privateGet(this, _vt).clear();
          __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedEditor: false });
        }
      }
    }
    translateSelectedEditors(t2, e2, i2 = false) {
      i2 || this.commitOrRemove();
      if (!this.hasSelection) return;
      __privateGet(this, _Tt)[0] += t2;
      __privateGet(this, _Tt)[1] += e2;
      const [n2, s2] = __privateGet(this, _Tt), a2 = [...__privateGet(this, _vt)];
      __privateGet(this, _kt) && clearTimeout(__privateGet(this, _kt));
      __privateSet(this, _kt, setTimeout(() => {
        __privateSet(this, _kt, null);
        __privateGet(this, _Tt)[0] = __privateGet(this, _Tt)[1] = 0;
        this.addCommands({ cmd: () => {
          for (const t3 of a2) if (__privateGet(this, _U).has(t3.id)) {
            t3.translateInPage(n2, s2);
            t3.translationDone();
          }
        }, undo: () => {
          for (const t3 of a2) if (__privateGet(this, _U).has(t3.id)) {
            t3.translateInPage(-n2, -s2);
            t3.translationDone();
          }
        }, mustExec: false });
      }, 1e3));
      for (const i3 of a2) {
        i3.translateInPage(t2, e2);
        i3.translationDone();
      }
    }
    setUpDragSession() {
      if (this.hasSelection) {
        this.disableUserSelect(true);
        __privateSet(this, _Q, /* @__PURE__ */ new Map());
        for (const t2 of __privateGet(this, _vt)) __privateGet(this, _Q).set(t2, { savedX: t2.x, savedY: t2.y, savedPageIndex: t2.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
      }
    }
    endDragSession() {
      if (!__privateGet(this, _Q)) return false;
      this.disableUserSelect(false);
      const t2 = __privateGet(this, _Q);
      __privateSet(this, _Q, null);
      let e2 = false;
      for (const [{ x: i2, y: n2, pageIndex: s2 }, a2] of t2) {
        a2.newX = i2;
        a2.newY = n2;
        a2.newPageIndex = s2;
        e2 || (e2 = i2 !== a2.savedX || n2 !== a2.savedY || s2 !== a2.savedPageIndex);
      }
      if (!e2) return false;
      const move = (t3, e3, i2, n2) => {
        if (__privateGet(this, _U).has(t3.id)) {
          const s2 = __privateGet(this, _H).get(n2);
          if (s2) t3._setParentAndPosition(s2, e3, i2);
          else {
            t3.pageIndex = n2;
            t3.x = e3;
            t3.y = i2;
          }
        }
      };
      this.addCommands({ cmd: () => {
        for (const [e3, { newX: i2, newY: n2, newPageIndex: s2 }] of t2) move(e3, i2, n2, s2);
      }, undo: () => {
        for (const [e3, { savedX: i2, savedY: n2, savedPageIndex: s2 }] of t2) move(e3, i2, n2, s2);
      }, mustExec: true });
      return true;
    }
    dragSelectedEditors(t2, e2) {
      if (__privateGet(this, _Q)) for (const i2 of __privateGet(this, _Q).keys()) i2.drag(t2, e2);
    }
    rebuild(t2) {
      if (null === t2.parent) {
        const e2 = this.getLayer(t2.pageIndex);
        if (e2) {
          e2.changeParent(t2);
          e2.addOrRebuild(t2);
        } else {
          this.addEditor(t2);
          this.addToAnnotationStorage(t2);
          t2.rebuild();
        }
      } else t2.parent.addOrRebuild(t2);
    }
    get isEditorHandlingKeyboard() {
      return this.getActive()?.shouldGetKeyboardEvents() || 1 === __privateGet(this, _vt).size && this.firstSelectedEditor.shouldGetKeyboardEvents();
    }
    isActive(t2) {
      return __privateGet(this, _R) === t2;
    }
    getActive() {
      return __privateGet(this, _R);
    }
    getMode() {
      return __privateGet(this, _yt);
    }
    isEditingMode() {
      return __privateGet(this, _yt) !== b.NONE;
    }
    get imageManager() {
      return shadow(this, "imageManager", new ImageManager());
    }
    getSelectionBoxes(t2) {
      if (!t2) return null;
      const e2 = document.getSelection();
      for (let i3 = 0, n3 = e2.rangeCount; i3 < n3; i3++) if (!t2.contains(e2.getRangeAt(i3).commonAncestorContainer)) return null;
      const { x: i2, y: n2, width: s2, height: a2 } = t2.getBoundingClientRect();
      let r2;
      switch (t2.getAttribute("data-main-rotation")) {
        case "90":
          r2 = (t3, e3, r3, o3) => ({ x: (e3 - n2) / a2, y: 1 - (t3 + r3 - i2) / s2, width: o3 / a2, height: r3 / s2 });
          break;
        case "180":
          r2 = (t3, e3, r3, o3) => ({ x: 1 - (t3 + r3 - i2) / s2, y: 1 - (e3 + o3 - n2) / a2, width: r3 / s2, height: o3 / a2 });
          break;
        case "270":
          r2 = (t3, e3, r3, o3) => ({ x: 1 - (e3 + o3 - n2) / a2, y: (t3 - i2) / s2, width: o3 / a2, height: r3 / s2 });
          break;
        default:
          r2 = (t3, e3, r3, o3) => ({ x: (t3 - i2) / s2, y: (e3 - n2) / a2, width: r3 / s2, height: o3 / a2 });
      }
      const o2 = [];
      for (let t3 = 0, i3 = e2.rangeCount; t3 < i3; t3++) {
        const i4 = e2.getRangeAt(t3);
        if (!i4.collapsed) for (const { x: t4, y: e3, width: n3, height: s3 } of i4.getClientRects()) 0 !== n3 && 0 !== s3 && o2.push(r2(t4, e3, n3, s3));
      }
      return 0 === o2.length ? null : o2;
    }
    addChangedExistingAnnotation({ annotationElementId: t2, id: e2 }) {
      (__privateGet(this, _V) || __privateSet(this, _V, /* @__PURE__ */ new Map())).set(t2, e2);
    }
    removeChangedExistingAnnotation({ annotationElementId: t2 }) {
      __privateGet(this, _V)?.delete(t2);
    }
    renderAnnotationElement(t2) {
      const e2 = __privateGet(this, _V)?.get(t2.data.id);
      if (!e2) return;
      const i2 = __privateGet(this, _W).getRawValue(e2);
      i2 && (__privateGet(this, _yt) !== b.NONE || i2.hasBeenModified) && i2.renderAnnotationElement(t2);
    }
    setMissingCanvas(t2, e2, i2) {
      const n2 = __privateGet(this, _ft)?.get(t2);
      if (n2) {
        n2.setCanvas(e2, i2);
        __privateGet(this, _ft).delete(t2);
      }
    }
    addMissingCanvas(t2, e2) {
      (__privateGet(this, _ft) || __privateSet(this, _ft, /* @__PURE__ */ new Map())).set(t2, e2);
    }
  };
  _O = new WeakMap();
  _R = new WeakMap();
  _N = new WeakMap();
  _U = new WeakMap();
  _H = new WeakMap();
  _z = new WeakMap();
  _G = new WeakMap();
  _W = new WeakMap();
  _V = new WeakMap();
  _j = new WeakMap();
  _$ = new WeakMap();
  _K = new WeakMap();
  _X = new WeakMap();
  _q = new WeakMap();
  _Y = new WeakMap();
  _Q = new WeakMap();
  _J = new WeakMap();
  _Z = new WeakMap();
  _tt = new WeakMap();
  _et = new WeakMap();
  _it = new WeakMap();
  _nt = new WeakMap();
  _st = new WeakMap();
  _at = new WeakMap();
  _rt = new WeakMap();
  _ot = new WeakMap();
  _lt = new WeakMap();
  _ht = new WeakMap();
  _ct = new WeakMap();
  _dt = new WeakMap();
  _ut = new WeakMap();
  _pt = new WeakMap();
  _gt = new WeakMap();
  _mt = new WeakMap();
  _ft = new WeakMap();
  _bt = new WeakMap();
  _yt = new WeakMap();
  _vt = new WeakMap();
  _At = new WeakMap();
  _wt = new WeakMap();
  _xt = new WeakMap();
  _Ct = new WeakMap();
  _Et = new WeakMap();
  _St = new WeakMap();
  _Tt = new WeakMap();
  _kt = new WeakMap();
  __t = new WeakMap();
  _Mt = new WeakMap();
  _Dt = new WeakMap();
  _Pt = new WeakMap();
  _AnnotationEditorUIManager_instances = new WeakSet();
  Ot_fn = function({ anchorNode: t2 }) {
    return t2.nodeType === Node.TEXT_NODE ? t2.parentElement : t2;
  };
  Rt_fn = function(t2) {
    const { currentLayer: e2 } = this;
    if (e2.hasTextLayer(t2)) return e2;
    for (const e3 of __privateGet(this, _H).values()) if (e3.hasTextLayer(t2)) return e3;
    return null;
  };
  It_fn = function(t2) {
    this.commitOrRemove();
    this.currentLayer?.endDrawingSession(false);
  };
  Nt_fn = function() {
    const t2 = document.getSelection();
    if (!t2 || t2.isCollapsed) return;
    const e2 = __privateMethod(this, _AnnotationEditorUIManager_instances, Ot_fn).call(this, t2).closest(".textLayer"), i2 = this.getSelectionBoxes(e2);
    if (i2) {
      __privateGet(this, _lt) || __privateSet(this, _lt, new FloatingToolbar(this));
      __privateGet(this, _lt).show(e2, i2, "ltr" === this.direction);
    }
  };
  Ut_fn = function() {
    const t2 = document.getSelection();
    if (!t2 || t2.isCollapsed) {
      if (__privateGet(this, _At)) {
        __privateGet(this, _lt)?.hide();
        __privateSet(this, _At, null);
        __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedText: false });
      }
      return;
    }
    const { anchorNode: e2 } = t2;
    if (e2 === __privateGet(this, _At)) return;
    const i2 = __privateMethod(this, _AnnotationEditorUIManager_instances, Ot_fn).call(this, t2).closest(".textLayer");
    if (i2) {
      __privateGet(this, _lt)?.hide();
      __privateSet(this, _At, e2);
      __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedText: true });
      if (__privateGet(this, _yt) === b.HIGHLIGHT || __privateGet(this, _yt) === b.NONE) {
        __privateGet(this, _yt) === b.HIGHLIGHT && this.showAllEditors("highlight", true, true);
        __privateSet(this, _ot, this.isShiftKeyDown);
        if (!this.isShiftKeyDown) {
          const t3 = __privateGet(this, _yt) === b.HIGHLIGHT ? __privateMethod(this, _AnnotationEditorUIManager_instances, Rt_fn).call(this, i2) : null;
          t3?.toggleDrawing();
          if (__privateGet(this, _dt)) {
            const e3 = new AbortController(), i3 = this.combinedSignal(e3), pointerup = (i4) => {
              if ("pointerup" !== i4.type || 0 === i4.button) {
                e3.abort();
                t3?.toggleDrawing(true);
                "pointerup" === i4.type && __privateMethod(this, _AnnotationEditorUIManager_instances, zt_fn).call(this, "main_toolbar");
              }
            };
            window.addEventListener("pointerup", pointerup, { signal: i3 });
            window.addEventListener("blur", pointerup, { signal: i3 });
          } else {
            t3?.toggleDrawing(true);
            __privateMethod(this, _AnnotationEditorUIManager_instances, zt_fn).call(this, "main_toolbar");
          }
        }
      }
    } else if (__privateGet(this, _At)) {
      __privateGet(this, _lt)?.hide();
      __privateSet(this, _At, null);
      __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedText: false });
    }
  };
  zt_fn = function(t2 = "") {
    __privateGet(this, _yt) === b.HIGHLIGHT ? this.highlightSelection(t2) : __privateGet(this, _tt) && __privateMethod(this, _AnnotationEditorUIManager_instances, Nt_fn).call(this);
  };
  Ft_fn = function() {
    document.addEventListener("selectionchange", __privateMethod(this, _AnnotationEditorUIManager_instances, Ut_fn).bind(this), { signal: this._signal });
  };
  Gt_fn = function() {
    if (__privateGet(this, _at)) return;
    __privateSet(this, _at, new AbortController());
    const t2 = this.combinedSignal(__privateGet(this, _at));
    window.addEventListener("focus", this.focus.bind(this), { signal: t2 });
    window.addEventListener("blur", this.blur.bind(this), { signal: t2 });
  };
  Wt_fn = function() {
    __privateGet(this, _at)?.abort();
    __privateSet(this, _at, null);
  };
  Lt_fn = function() {
    if (__privateGet(this, _pt)) return;
    __privateSet(this, _pt, new AbortController());
    const t2 = this.combinedSignal(__privateGet(this, _pt));
    window.addEventListener("keydown", this.keydown.bind(this), { signal: t2 });
    window.addEventListener("keyup", this.keyup.bind(this), { signal: t2 });
  };
  Vt_fn = function() {
    __privateGet(this, _pt)?.abort();
    __privateSet(this, _pt, null);
  };
  jt_fn = function() {
    if (__privateGet(this, _K)) return;
    __privateSet(this, _K, new AbortController());
    const t2 = this.combinedSignal(__privateGet(this, _K));
    document.addEventListener("copy", this.copy.bind(this), { signal: t2 });
    document.addEventListener("cut", this.cut.bind(this), { signal: t2 });
    document.addEventListener("paste", this.paste.bind(this), { signal: t2 });
  };
  $t_fn = function() {
    __privateGet(this, _K)?.abort();
    __privateSet(this, _K, null);
  };
  Bt_fn = function() {
    const t2 = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), { signal: t2 });
    document.addEventListener("drop", this.drop.bind(this), { signal: t2 });
  };
  Ht_fn = function(t2) {
    if (Object.entries(t2).some(([t3, e2]) => __privateGet(this, _St)[t3] !== e2)) {
      this._eventBus.dispatch("editingstateschanged", { source: this, details: Object.assign(__privateGet(this, _St), t2) });
      __privateGet(this, _yt) === b.HIGHLIGHT && false === t2.hasSelectedEditor && __privateMethod(this, _AnnotationEditorUIManager_instances, qt_fn).call(this, [[y.HIGHLIGHT_FREE, true]]);
    }
  };
  qt_fn = function(t2) {
    this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t2 });
  };
  Qt_fn = async function() {
    if (!__privateGet(this, _ct)) {
      __privateSet(this, _ct, true);
      const t2 = [];
      for (const e2 of __privateGet(this, _H).values()) t2.push(e2.enable());
      await Promise.all(t2);
      for (const t3 of __privateGet(this, _U).values()) t3.enable();
    }
  };
  Jt_fn = function() {
    this.unselectAll();
    if (__privateGet(this, _ct)) {
      __privateSet(this, _ct, false);
      for (const t2 of __privateGet(this, _H).values()) t2.disable();
      for (const t2 of __privateGet(this, _U).values()) t2.disable();
    }
  };
  Kt_fn = function(t2) {
    const e2 = __privateGet(this, _H).get(t2.pageIndex);
    if (e2) e2.addOrRebuild(t2);
    else {
      this.addEditor(t2);
      this.addToAnnotationStorage(t2);
    }
  };
  Zt_get = function() {
    let t2 = null;
    for (t2 of __privateGet(this, _vt)) ;
    return t2;
  };
  Yt_fn = function() {
    if (0 === __privateGet(this, _U).size) return true;
    if (1 === __privateGet(this, _U).size) for (const t2 of __privateGet(this, _U).values()) return t2.isEmpty();
    return false;
  };
  Xt_fn = function(t2) {
    for (const t3 of __privateGet(this, _vt)) t3.unselect();
    __privateGet(this, _vt).clear();
    for (const e2 of t2) if (!e2.isEmpty()) {
      __privateGet(this, _vt).add(e2);
      e2.select();
    }
    __privateMethod(this, _AnnotationEditorUIManager_instances, Ht_fn).call(this, { hasSelectedEditor: this.hasSelection });
  };
  __publicField(_AnnotationEditorUIManager, "TRANSLATE_SMALL", 1);
  __publicField(_AnnotationEditorUIManager, "TRANSLATE_BIG", 10);
  var AnnotationEditorUIManager = _AnnotationEditorUIManager;
  var _l2, _te, _ee, _ie, _ne, _se, _ae, _re, _r2, _oe, _le, _he, _ce, _AltText_instances, de_get, ue_fn;
  var _AltText = class _AltText {
    constructor(t2) {
      __privateAdd(this, _AltText_instances);
      __privateAdd(this, _l2, null);
      __privateAdd(this, _te, false);
      __privateAdd(this, _ee, null);
      __privateAdd(this, _ie, null);
      __privateAdd(this, _ne, null);
      __privateAdd(this, _se, null);
      __privateAdd(this, _ae, false);
      __privateAdd(this, _re, null);
      __privateAdd(this, _r2, null);
      __privateAdd(this, _oe, null);
      __privateAdd(this, _le, null);
      __privateAdd(this, _he, false);
      __privateSet(this, _r2, t2);
      __privateSet(this, _he, t2._uiManager.useNewAltTextFlow);
      __privateGet(_AltText, _ce) || __privateSet(_AltText, _ce, Object.freeze({ added: "pdfjs-editor-new-alt-text-added-button", "added-label": "pdfjs-editor-new-alt-text-added-button-label", missing: "pdfjs-editor-new-alt-text-missing-button", "missing-label": "pdfjs-editor-new-alt-text-missing-button-label", review: "pdfjs-editor-new-alt-text-to-review-button", "review-label": "pdfjs-editor-new-alt-text-to-review-button-label" }));
    }
    static initialize(t2) {
      _AltText._l10n ?? (_AltText._l10n = t2);
    }
    async render() {
      const t2 = __privateSet(this, _ee, document.createElement("button"));
      t2.className = "altText";
      t2.tabIndex = "0";
      const e2 = __privateSet(this, _ie, document.createElement("span"));
      t2.append(e2);
      if (__privateGet(this, _he)) {
        t2.classList.add("new");
        t2.setAttribute("data-l10n-id", __privateGet(_AltText, _ce).missing);
        e2.setAttribute("data-l10n-id", __privateGet(_AltText, _ce)["missing-label"]);
      } else {
        t2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
        e2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
      }
      const i2 = __privateGet(this, _r2)._uiManager._signal;
      t2.addEventListener("contextmenu", noContextMenu, { signal: i2 });
      t2.addEventListener("pointerdown", (t3) => t3.stopPropagation(), { signal: i2 });
      const onClick = (t3) => {
        t3.preventDefault();
        __privateGet(this, _r2)._uiManager.editAltText(__privateGet(this, _r2));
        __privateGet(this, _he) && __privateGet(this, _r2)._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_clicked", data: { label: __privateGet(this, _AltText_instances, de_get) } });
      };
      t2.addEventListener("click", onClick, { capture: true, signal: i2 });
      t2.addEventListener("keydown", (e3) => {
        if (e3.target === t2 && "Enter" === e3.key) {
          __privateSet(this, _ae, true);
          onClick(e3);
        }
      }, { signal: i2 });
      await __privateMethod(this, _AltText_instances, ue_fn).call(this);
      return t2;
    }
    finish() {
      if (__privateGet(this, _ee)) {
        __privateGet(this, _ee).focus({ focusVisible: __privateGet(this, _ae) });
        __privateSet(this, _ae, false);
      }
    }
    isEmpty() {
      return __privateGet(this, _he) ? null === __privateGet(this, _l2) : !__privateGet(this, _l2) && !__privateGet(this, _te);
    }
    hasData() {
      return __privateGet(this, _he) ? null !== __privateGet(this, _l2) || !!__privateGet(this, _oe) : this.isEmpty();
    }
    get guessedText() {
      return __privateGet(this, _oe);
    }
    async setGuessedText(t2) {
      if (null === __privateGet(this, _l2)) {
        __privateSet(this, _oe, t2);
        __privateSet(this, _le, await _AltText._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", { generatedAltText: t2 }));
        __privateMethod(this, _AltText_instances, ue_fn).call(this);
      }
    }
    toggleAltTextBadge(t2 = false) {
      if (__privateGet(this, _he) && !__privateGet(this, _l2)) {
        if (!__privateGet(this, _re)) {
          const t3 = __privateSet(this, _re, document.createElement("div"));
          t3.className = "noAltTextBadge";
          __privateGet(this, _r2).div.append(t3);
        }
        __privateGet(this, _re).classList.toggle("hidden", !t2);
      } else {
        __privateGet(this, _re)?.remove();
        __privateSet(this, _re, null);
      }
    }
    serialize(t2) {
      let e2 = __privateGet(this, _l2);
      t2 || __privateGet(this, _oe) !== e2 || (e2 = __privateGet(this, _le));
      return { altText: e2, decorative: __privateGet(this, _te), guessedText: __privateGet(this, _oe), textWithDisclaimer: __privateGet(this, _le) };
    }
    get data() {
      return { altText: __privateGet(this, _l2), decorative: __privateGet(this, _te) };
    }
    set data({ altText: t2, decorative: e2, guessedText: i2, textWithDisclaimer: n2, cancel: s2 = false }) {
      if (i2) {
        __privateSet(this, _oe, i2);
        __privateSet(this, _le, n2);
      }
      if (__privateGet(this, _l2) !== t2 || __privateGet(this, _te) !== e2) {
        if (!s2) {
          __privateSet(this, _l2, t2);
          __privateSet(this, _te, e2);
        }
        __privateMethod(this, _AltText_instances, ue_fn).call(this);
      }
    }
    toggle(t2 = false) {
      if (__privateGet(this, _ee)) {
        if (!t2 && __privateGet(this, _se)) {
          clearTimeout(__privateGet(this, _se));
          __privateSet(this, _se, null);
        }
        __privateGet(this, _ee).disabled = !t2;
      }
    }
    shown() {
      __privateGet(this, _r2)._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_displayed", data: { label: __privateGet(this, _AltText_instances, de_get) } });
    }
    destroy() {
      __privateGet(this, _ee)?.remove();
      __privateSet(this, _ee, null);
      __privateSet(this, _ie, null);
      __privateSet(this, _ne, null);
      __privateGet(this, _re)?.remove();
      __privateSet(this, _re, null);
    }
  };
  _l2 = new WeakMap();
  _te = new WeakMap();
  _ee = new WeakMap();
  _ie = new WeakMap();
  _ne = new WeakMap();
  _se = new WeakMap();
  _ae = new WeakMap();
  _re = new WeakMap();
  _r2 = new WeakMap();
  _oe = new WeakMap();
  _le = new WeakMap();
  _he = new WeakMap();
  _ce = new WeakMap();
  _AltText_instances = new WeakSet();
  de_get = function() {
    return (__privateGet(this, _l2) ? "added" : null === __privateGet(this, _l2) && this.guessedText && "review") || "missing";
  };
  ue_fn = async function() {
    const t2 = __privateGet(this, _ee);
    if (!t2) return;
    if (__privateGet(this, _he)) {
      t2.classList.toggle("done", !!__privateGet(this, _l2));
      t2.setAttribute("data-l10n-id", __privateGet(_AltText, _ce)[__privateGet(this, _AltText_instances, de_get)]);
      __privateGet(this, _ie)?.setAttribute("data-l10n-id", __privateGet(_AltText, _ce)[`${__privateGet(this, _AltText_instances, de_get)}-label`]);
      if (!__privateGet(this, _l2)) {
        __privateGet(this, _ne)?.remove();
        return;
      }
    } else {
      if (!__privateGet(this, _l2) && !__privateGet(this, _te)) {
        t2.classList.remove("done");
        __privateGet(this, _ne)?.remove();
        return;
      }
      t2.classList.add("done");
      t2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e2 = __privateGet(this, _ne);
    if (!e2) {
      __privateSet(this, _ne, e2 = document.createElement("span"));
      e2.className = "tooltip";
      e2.setAttribute("role", "tooltip");
      e2.id = `alt-text-tooltip-${__privateGet(this, _r2).id}`;
      const i3 = 100, n2 = __privateGet(this, _r2)._uiManager._signal;
      n2.addEventListener("abort", () => {
        clearTimeout(__privateGet(this, _se));
        __privateSet(this, _se, null);
      }, { once: true });
      t2.addEventListener("mouseenter", () => {
        __privateSet(this, _se, setTimeout(() => {
          __privateSet(this, _se, null);
          __privateGet(this, _ne).classList.add("show");
          __privateGet(this, _r2)._reportTelemetry({ action: "alt_text_tooltip" });
        }, i3));
      }, { signal: n2 });
      t2.addEventListener("mouseleave", () => {
        if (__privateGet(this, _se)) {
          clearTimeout(__privateGet(this, _se));
          __privateSet(this, _se, null);
        }
        __privateGet(this, _ne)?.classList.remove("show");
      }, { signal: n2 });
    }
    if (__privateGet(this, _te)) e2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
    else {
      e2.removeAttribute("data-l10n-id");
      e2.textContent = __privateGet(this, _l2);
    }
    e2.parentNode || t2.append(e2);
    const i2 = __privateGet(this, _r2).getElementForAltText();
    i2?.setAttribute("aria-describedby", e2.id);
  };
  __privateAdd(_AltText, _ce, null);
  __publicField(_AltText, "_l10n", null);
  var AltText = _AltText;
  var _pe, _ge, _me, _r3, _fe, _be, _ye, _ve, _Ae, _we, _Comment_instances, v_fn2;
  var Comment = class {
    constructor(t2) {
      __privateAdd(this, _Comment_instances);
      __privateAdd(this, _pe, null);
      __privateAdd(this, _ge, null);
      __privateAdd(this, _me, false);
      __privateAdd(this, _r3, null);
      __privateAdd(this, _fe, null);
      __privateAdd(this, _be, null);
      __privateAdd(this, _ye, null);
      __privateAdd(this, _ve, null);
      __privateAdd(this, _Ae, false);
      __privateAdd(this, _we, null);
      __privateSet(this, _r3, t2);
    }
    renderForToolbar() {
      const t2 = __privateSet(this, _ge, document.createElement("button"));
      t2.className = "comment";
      return __privateMethod(this, _Comment_instances, v_fn2).call(this, t2, false);
    }
    renderForStandalone() {
      const t2 = __privateSet(this, _pe, document.createElement("button"));
      t2.className = "annotationCommentButton";
      const e2 = __privateGet(this, _r3).commentButtonPosition;
      if (e2) {
        const { style: i2 } = t2;
        i2.insetInlineEnd = `calc(${100 * ("ltr" === __privateGet(this, _r3)._uiManager.direction ? 1 - e2[0] : e2[0])}% - var(--comment-button-dim))`;
        i2.top = `calc(${100 * e2[1]}% - var(--comment-button-dim))`;
        const n2 = __privateGet(this, _r3).commentButtonColor;
        n2 && (i2.backgroundColor = n2);
      }
      return __privateMethod(this, _Comment_instances, v_fn2).call(this, t2, true);
    }
    focusButton() {
      setTimeout(() => {
        (__privateGet(this, _pe) ?? __privateGet(this, _ge))?.focus();
      }, 0);
    }
    onUpdatedColor() {
      if (!__privateGet(this, _pe)) return;
      const t2 = __privateGet(this, _r3).commentButtonColor;
      t2 && (__privateGet(this, _pe).style.backgroundColor = t2);
      __privateGet(this, _r3)._uiManager.updatePopupColor(__privateGet(this, _r3));
    }
    get commentButtonWidth() {
      return (__privateGet(this, _pe)?.getBoundingClientRect().width ?? 0) / __privateGet(this, _r3).parent.boundingClientRect.width;
    }
    get commentPopupPositionInLayer() {
      if (__privateGet(this, _we)) return __privateGet(this, _we);
      if (!__privateGet(this, _pe)) return null;
      const { x: t2, y: e2, height: i2 } = __privateGet(this, _pe).getBoundingClientRect(), { x: n2, y: s2, width: a2, height: r2 } = __privateGet(this, _r3).parent.boundingClientRect;
      return [(t2 - n2) / a2, (e2 + i2 - s2) / r2];
    }
    set commentPopupPositionInLayer(t2) {
      __privateSet(this, _we, t2);
    }
    hasDefaultPopupPosition() {
      return null === __privateGet(this, _we);
    }
    removeStandaloneCommentButton() {
      __privateGet(this, _pe)?.remove();
      __privateSet(this, _pe, null);
    }
    removeToolbarCommentButton() {
      __privateGet(this, _ge)?.remove();
      __privateSet(this, _ge, null);
    }
    setCommentButtonStates({ selected: t2, hasPopup: e2 }) {
      if (__privateGet(this, _pe)) {
        __privateGet(this, _pe).classList.toggle("selected", t2);
        __privateGet(this, _pe).ariaExpanded = e2;
      }
    }
    edit(t2) {
      const e2 = this.commentPopupPositionInLayer;
      let i2, n2;
      if (e2) [i2, n2] = e2;
      else {
        [i2, n2] = __privateGet(this, _r3).commentButtonPosition;
        const { width: t3, height: e3, x: s3, y: a3 } = __privateGet(this, _r3);
        i2 = s3 + i2 * t3;
        n2 = a3 + n2 * e3;
      }
      const s2 = __privateGet(this, _r3).parent.boundingClientRect, { x: a2, y: r2, width: o2, height: l2 } = s2;
      __privateGet(this, _r3)._uiManager.editComment(__privateGet(this, _r3), a2 + i2 * o2, r2 + n2 * l2, { ...t2, parentDimensions: s2 });
    }
    finish() {
      if (__privateGet(this, _ge)) {
        __privateGet(this, _ge).focus({ focusVisible: __privateGet(this, _me) });
        __privateSet(this, _me, false);
      }
    }
    isDeleted() {
      return __privateGet(this, _Ae) || "" === __privateGet(this, _ye);
    }
    isEmpty() {
      return null === __privateGet(this, _ye);
    }
    hasBeenEdited() {
      return this.isDeleted() || __privateGet(this, _ye) !== __privateGet(this, _fe);
    }
    serialize() {
      return this.data;
    }
    get data() {
      return { text: __privateGet(this, _ye), richText: __privateGet(this, _be), date: __privateGet(this, _ve), deleted: this.isDeleted() };
    }
    set data(t2) {
      t2 !== __privateGet(this, _ye) && __privateSet(this, _be, null);
      if (null !== t2) {
        __privateSet(this, _ye, t2);
        __privateSet(this, _ve, /* @__PURE__ */ new Date());
        __privateSet(this, _Ae, false);
      } else {
        __privateSet(this, _ye, "");
        __privateSet(this, _Ae, true);
      }
    }
    restoreData({ text: t2, richText: e2, date: i2 }) {
      __privateSet(this, _ye, t2);
      __privateSet(this, _be, e2);
      __privateSet(this, _ve, i2);
      __privateSet(this, _Ae, false);
    }
    setInitialText(t2, e2 = null) {
      __privateSet(this, _fe, t2);
      this.data = t2;
      __privateSet(this, _ve, null);
      __privateSet(this, _be, e2);
    }
    shown() {
    }
    destroy() {
      __privateGet(this, _ge)?.remove();
      __privateSet(this, _ge, null);
      __privateGet(this, _pe)?.remove();
      __privateSet(this, _pe, null);
      __privateSet(this, _ye, "");
      __privateSet(this, _be, null);
      __privateSet(this, _ve, null);
      __privateSet(this, _r3, null);
      __privateSet(this, _me, false);
      __privateSet(this, _Ae, false);
    }
  };
  _pe = new WeakMap();
  _ge = new WeakMap();
  _me = new WeakMap();
  _r3 = new WeakMap();
  _fe = new WeakMap();
  _be = new WeakMap();
  _ye = new WeakMap();
  _ve = new WeakMap();
  _Ae = new WeakMap();
  _we = new WeakMap();
  _Comment_instances = new WeakSet();
  v_fn2 = function(t2, e2) {
    if (!__privateGet(this, _r3)._uiManager.hasCommentManager()) return null;
    t2.tabIndex = "0";
    t2.ariaHasPopup = "dialog";
    if (e2) {
      t2.ariaControls = "commentPopup";
      t2.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
    } else {
      t2.ariaControlsElements = [__privateGet(this, _r3)._uiManager.getCommentDialogElement()];
      t2.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button");
    }
    const i2 = __privateGet(this, _r3)._uiManager._signal;
    if (!(i2 instanceof AbortSignal) || i2.aborted) return t2;
    t2.addEventListener("contextmenu", noContextMenu, { signal: i2 });
    if (e2) {
      t2.addEventListener("focusin", (t3) => {
        __privateGet(this, _r3)._focusEventsAllowed = false;
        stopEvent(t3);
      }, { capture: true, signal: i2 });
      t2.addEventListener("focusout", (t3) => {
        __privateGet(this, _r3)._focusEventsAllowed = true;
        stopEvent(t3);
      }, { capture: true, signal: i2 });
    }
    t2.addEventListener("pointerdown", (t3) => t3.stopPropagation(), { signal: i2 });
    const onClick = (e3) => {
      e3.preventDefault();
      t2 === __privateGet(this, _ge) ? this.edit() : __privateGet(this, _r3).toggleComment(true);
    };
    t2.addEventListener("click", onClick, { capture: true, signal: i2 });
    t2.addEventListener("keydown", (e3) => {
      if (e3.target === t2 && "Enter" === e3.key) {
        __privateSet(this, _me, true);
        onClick(e3);
      }
    }, { signal: i2 });
    t2.addEventListener("pointerenter", () => {
      __privateGet(this, _r3).toggleComment(false, true);
    }, { signal: i2 });
    t2.addEventListener("pointerleave", () => {
      __privateGet(this, _r3).toggleComment(false, false);
    }, { signal: i2 });
    return t2;
  };
  var __t2, _xe, _Ce, _Ee, _Se, _Te, _ke, __e, _Me, _De, _Pe, _Ie, _TouchManager_instances, Fe_fn, Be_fn, Le_fn;
  var _TouchManager = class _TouchManager {
    constructor({ container: t2, isPinchingDisabled: e2 = null, isPinchingStopped: i2 = null, onPinchStart: n2 = null, onPinching: s2 = null, onPinchEnd: a2 = null, signal: r2 }) {
      __privateAdd(this, _TouchManager_instances);
      __privateAdd(this, __t2);
      __privateAdd(this, _xe, false);
      __privateAdd(this, _Ce, null);
      __privateAdd(this, _Ee);
      __privateAdd(this, _Se);
      __privateAdd(this, _Te);
      __privateAdd(this, _ke);
      __privateAdd(this, __e, null);
      __privateAdd(this, _Me);
      __privateAdd(this, _De, null);
      __privateAdd(this, _Pe);
      __privateAdd(this, _Ie, null);
      __privateSet(this, __t2, t2);
      __privateSet(this, _Ce, i2);
      __privateSet(this, _Ee, e2);
      __privateSet(this, _Se, n2);
      __privateSet(this, _Te, s2);
      __privateSet(this, _ke, a2);
      __privateSet(this, _Pe, new AbortController());
      __privateSet(this, _Me, AbortSignal.any([r2, __privateGet(this, _Pe).signal]));
      t2.addEventListener("touchstart", __privateMethod(this, _TouchManager_instances, Fe_fn).bind(this), { passive: false, signal: __privateGet(this, _Me) });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return 35 / OutputScale.pixelRatio;
    }
    destroy() {
      __privateGet(this, _Pe)?.abort();
      __privateSet(this, _Pe, null);
      __privateGet(this, __e)?.abort();
      __privateSet(this, __e, null);
    }
  };
  __t2 = new WeakMap();
  _xe = new WeakMap();
  _Ce = new WeakMap();
  _Ee = new WeakMap();
  _Se = new WeakMap();
  _Te = new WeakMap();
  _ke = new WeakMap();
  __e = new WeakMap();
  _Me = new WeakMap();
  _De = new WeakMap();
  _Pe = new WeakMap();
  _Ie = new WeakMap();
  _TouchManager_instances = new WeakSet();
  Fe_fn = function(t2) {
    var _a4, _b, _c2;
    if ((_a4 = __privateGet(this, _Ee)) == null ? void 0 : _a4.call(this)) return;
    if (1 === t2.touches.length) {
      if (__privateGet(this, __e)) return;
      const t3 = __privateSet(this, __e, new AbortController()), e3 = AbortSignal.any([__privateGet(this, _Me), t3.signal]), i3 = __privateGet(this, __t2), n2 = { capture: true, signal: e3, passive: false }, cancelPointerDown = (t4) => {
        if ("touch" === t4.pointerType) {
          __privateGet(this, __e)?.abort();
          __privateSet(this, __e, null);
        }
      };
      i3.addEventListener("pointerdown", (t4) => {
        if ("touch" === t4.pointerType) {
          stopEvent(t4);
          cancelPointerDown(t4);
        }
      }, n2);
      i3.addEventListener("pointerup", cancelPointerDown, n2);
      i3.addEventListener("pointercancel", cancelPointerDown, n2);
      return;
    }
    if (!__privateGet(this, _Ie)) {
      __privateSet(this, _Ie, new AbortController());
      const t3 = AbortSignal.any([__privateGet(this, _Me), __privateGet(this, _Ie).signal]), e3 = __privateGet(this, __t2), i3 = { signal: t3, capture: false, passive: false };
      e3.addEventListener("touchmove", __privateMethod(this, _TouchManager_instances, Be_fn).bind(this), i3);
      const n2 = __privateMethod(this, _TouchManager_instances, Le_fn).bind(this);
      e3.addEventListener("touchend", n2, i3);
      e3.addEventListener("touchcancel", n2, i3);
      i3.capture = true;
      e3.addEventListener("pointerdown", stopEvent, i3);
      e3.addEventListener("pointermove", stopEvent, i3);
      e3.addEventListener("pointercancel", stopEvent, i3);
      e3.addEventListener("pointerup", stopEvent, i3);
      (_b = __privateGet(this, _Se)) == null ? void 0 : _b.call(this);
    }
    stopEvent(t2);
    if (2 !== t2.touches.length || ((_c2 = __privateGet(this, _Ce)) == null ? void 0 : _c2.call(this))) {
      __privateSet(this, _De, null);
      return;
    }
    let [e2, i2] = t2.touches;
    e2.identifier > i2.identifier && ([e2, i2] = [i2, e2]);
    __privateSet(this, _De, { touch0X: e2.screenX, touch0Y: e2.screenY, touch1X: i2.screenX, touch1Y: i2.screenY });
  };
  Be_fn = function(t2) {
    var _a4;
    if (!__privateGet(this, _De) || 2 !== t2.touches.length) return;
    stopEvent(t2);
    let [e2, i2] = t2.touches;
    e2.identifier > i2.identifier && ([e2, i2] = [i2, e2]);
    const { screenX: n2, screenY: s2 } = e2, { screenX: a2, screenY: r2 } = i2, o2 = __privateGet(this, _De), { touch0X: l2, touch0Y: h2, touch1X: c2, touch1Y: d2 } = o2, u2 = c2 - l2, p2 = d2 - h2, g2 = a2 - n2, m2 = r2 - s2, f2 = Math.hypot(g2, m2) || 1, b2 = Math.hypot(u2, p2) || 1;
    if (!__privateGet(this, _xe) && Math.abs(b2 - f2) <= _TouchManager.MIN_TOUCH_DISTANCE_TO_PINCH) return;
    o2.touch0X = n2;
    o2.touch0Y = s2;
    o2.touch1X = a2;
    o2.touch1Y = r2;
    if (!__privateGet(this, _xe)) {
      __privateSet(this, _xe, true);
      return;
    }
    const y2 = [(n2 + a2) / 2, (s2 + r2) / 2];
    (_a4 = __privateGet(this, _Te)) == null ? void 0 : _a4.call(this, y2, b2, f2);
  };
  Le_fn = function(t2) {
    var _a4;
    if (!(t2.touches.length >= 2)) {
      if (__privateGet(this, _Ie)) {
        __privateGet(this, _Ie).abort();
        __privateSet(this, _Ie, null);
        (_a4 = __privateGet(this, _ke)) == null ? void 0 : _a4.call(this);
      }
      if (__privateGet(this, _De)) {
        stopEvent(t2);
        __privateSet(this, _De, null);
        __privateSet(this, _xe, false);
      }
    }
  };
  var TouchManager = _TouchManager;
  var _Oe, _Re, _l3, _h2, _pe2, _Ne, _Ue, _He, _ze, _Ge, _We, _Ve, _je, _$e, _Ke, _Xe, _qe, _Ye, _Qe, _Je, _Ze, _ti, _ei, _ii, _ni, _si, _AnnotationEditor_instances, ri_fn, _AnnotationEditor_static, oi_fn, li_fn, hi_fn, ci_fn, pi_fn, ui_fn, di_fn, mi_fn, fi_fn, bi_fn, vi_fn, yi_fn, gi_fn, Ai_fn, wi_fn, xi_fn, Ci_fn, ai_fn;
  var _AnnotationEditor = class _AnnotationEditor {
    constructor(t2) {
      __privateAdd(this, _AnnotationEditor_instances);
      __privateAdd(this, _Oe, null);
      __privateAdd(this, _Re, null);
      __privateAdd(this, _l3, null);
      __privateAdd(this, _h2, null);
      __privateAdd(this, _pe2, null);
      __privateAdd(this, _Ne, false);
      __privateAdd(this, _Ue, null);
      __privateAdd(this, _He, "");
      __privateAdd(this, _ze, null);
      __privateAdd(this, _Ge, null);
      __privateAdd(this, _We, null);
      __privateAdd(this, _Ve, null);
      __privateAdd(this, _je, null);
      __privateAdd(this, _$e, "");
      __privateAdd(this, _Ke, false);
      __privateAdd(this, _Xe, null);
      __privateAdd(this, _qe, false);
      __privateAdd(this, _Ye, false);
      __privateAdd(this, _Qe, false);
      __privateAdd(this, _Je, null);
      __privateAdd(this, _Ze, 0);
      __privateAdd(this, _ti, 0);
      __privateAdd(this, _ei, null);
      __privateAdd(this, _ii, null);
      __publicField(this, "isSelected", false);
      __publicField(this, "_isCopy", false);
      __publicField(this, "_editToolbar", null);
      __publicField(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
      __publicField(this, "_initialData", null);
      __publicField(this, "_isVisible", true);
      __publicField(this, "_uiManager", null);
      __publicField(this, "_focusEventsAllowed", true);
      __privateAdd(this, _ni, false);
      __privateAdd(this, _si, _AnnotationEditor._zIndex++);
      this.parent = t2.parent;
      this.id = t2.id;
      this.width = this.height = null;
      this.pageIndex = t2.parent.pageIndex;
      this.name = t2.name;
      this.div = null;
      this._uiManager = t2.uiManager;
      this.annotationElementId = null;
      this._willKeepAspectRatio = false;
      this._initialOptions.isCentered = t2.isCentered;
      this._structTreeParentId = null;
      this.annotationElementId = t2.annotationElementId || null;
      this.creationDate = t2.creationDate || /* @__PURE__ */ new Date();
      this.modificationDate = t2.modificationDate || null;
      this.canAddComment = true;
      const { rotation: e2, rawDims: { pageWidth: i2, pageHeight: n2, pageX: s2, pageY: a2 } } = this.parent.viewport;
      this.rotation = e2;
      this.pageRotation = (360 + e2 - this._uiManager.viewParameters.rotation) % 360;
      this.pageDimensions = [i2, n2];
      this.pageTranslation = [s2, a2];
      const [r2, o2] = this.parentDimensions;
      this.x = t2.x / r2;
      this.y = t2.y / o2;
      this.isAttachedToDOM = false;
      this.deleted = false;
    }
    static get _resizerKeyboardManager() {
      const t2 = _AnnotationEditor.prototype._resizeWithKeyboard, e2 = AnnotationEditorUIManager.TRANSLATE_SMALL, i2 = AnnotationEditorUIManager.TRANSLATE_BIG;
      return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft"], t2, { args: [-e2, 0] }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2, { args: [-i2, 0] }], [["ArrowRight"], t2, { args: [e2, 0] }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2, { args: [i2, 0] }], [["ArrowUp"], t2, { args: [0, -e2] }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2, { args: [0, -i2] }], [["ArrowDown"], t2, { args: [0, e2] }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2, { args: [0, i2] }], [["Escape"], _AnnotationEditor.prototype._stopResizingWithKeyboard]]));
    }
    updatePageIndex(t2) {
      this.pageIndex = t2;
    }
    get editorType() {
      return Object.getPrototypeOf(this).constructor._type;
    }
    get mode() {
      return Object.getPrototypeOf(this).constructor._editorType;
    }
    static get isDrawer() {
      return false;
    }
    static get _defaultLineColor() {
      return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t2) {
      const e2 = new FakeEditor({ id: t2._uiManager.getId(), parent: t2.parent, uiManager: t2._uiManager });
      e2.annotationElementId = t2.annotationElementId;
      e2.deleted = true;
      e2._uiManager.addToAnnotationStorage(e2);
    }
    static initialize(t2, e2) {
      _AnnotationEditor._l10n ?? (_AnnotationEditor._l10n = t2);
      _AnnotationEditor._l10nAlert ?? (_AnnotationEditor._l10nAlert = Object.freeze({ highlight: "pdfjs-editor-highlight-added-alert", freetext: "pdfjs-editor-freetext-added-alert", ink: "pdfjs-editor-ink-added-alert", stamp: "pdfjs-editor-stamp-added-alert", signature: "pdfjs-editor-signature-added-alert" }));
      _AnnotationEditor._l10nResizer ?? (_AnnotationEditor._l10nResizer = Object.freeze({ topLeft: "pdfjs-editor-resizer-top-left", topMiddle: "pdfjs-editor-resizer-top-middle", topRight: "pdfjs-editor-resizer-top-right", middleRight: "pdfjs-editor-resizer-middle-right", bottomRight: "pdfjs-editor-resizer-bottom-right", bottomMiddle: "pdfjs-editor-resizer-bottom-middle", bottomLeft: "pdfjs-editor-resizer-bottom-left", middleLeft: "pdfjs-editor-resizer-middle-left" }));
      if (-1 !== _AnnotationEditor._borderLineWidth) return;
      const i2 = getComputedStyle(document.documentElement);
      _AnnotationEditor._borderLineWidth = parseFloat(i2.getPropertyValue("--outline-width")) || 0;
    }
    static updateDefaultParams(t2, e2) {
    }
    static get defaultPropertiesToUpdate() {
      return [];
    }
    static isHandlingMimeForPasting(t2) {
      return false;
    }
    static paste(t2, e2) {
      unreachable("Not implemented");
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return __privateGet(this, _ni);
    }
    set _isDraggable(t2) {
      __privateSet(this, _ni, t2);
      this.div?.classList.toggle("draggable", t2);
    }
    get uid() {
      return this.annotationElementId || this.id;
    }
    get isEnterHandled() {
      return true;
    }
    center() {
      const [t2, e2] = this.pageDimensions;
      switch (this.parentRotation) {
        case 90:
          this.x -= this.height * e2 / (2 * t2);
          this.y += this.width * t2 / (2 * e2);
          break;
        case 180:
          this.x += this.width / 2;
          this.y += this.height / 2;
          break;
        case 270:
          this.x += this.height * e2 / (2 * t2);
          this.y -= this.width * t2 / (2 * e2);
          break;
        default:
          this.x -= this.width / 2;
          this.y -= this.height / 2;
      }
      this.fixAndSetPosition();
    }
    addCommands(t2) {
      this._uiManager.addCommands(t2);
    }
    get currentLayer() {
      return this._uiManager.currentLayer;
    }
    setInBackground() {
      this.div.style.zIndex = 0;
    }
    setInForeground() {
      this.div.style.zIndex = __privateGet(this, _si);
    }
    setParent(t2) {
      if (null !== t2) {
        this.pageIndex = t2.pageIndex;
        this.pageDimensions = t2.pageDimensions;
      } else {
        __privateMethod(this, _AnnotationEditor_instances, ai_fn).call(this);
        __privateGet(this, _Ve)?.remove();
        __privateSet(this, _Ve, null);
      }
      this.parent = t2;
    }
    focusin(t2) {
      this._focusEventsAllowed && (__privateGet(this, _Ke) ? __privateSet(this, _Ke, false) : this.parent.setSelected(this));
    }
    focusout(t2) {
      if (!this._focusEventsAllowed) return;
      if (!this.isAttachedToDOM) return;
      const e2 = t2.relatedTarget;
      if (!e2?.closest(`#${this.id}`)) {
        t2.preventDefault();
        this.parent?.isMultipleSelection || this.commitOrRemove();
      }
    }
    commitOrRemove() {
      this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
      this.isInEditMode() && this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
      this._uiManager.addToAnnotationStorage(this);
    }
    setAt(t2, e2, i2, n2) {
      const [s2, a2] = this.parentDimensions;
      [i2, n2] = this.screenToPageTranslation(i2, n2);
      this.x = (t2 + i2) / s2;
      this.y = (e2 + n2) / a2;
      this.fixAndSetPosition();
    }
    _moveAfterPaste(t2, e2) {
      if (this.isClone) {
        delete this.isClone;
        return;
      }
      const [i2, n2] = this.parentDimensions;
      this.setAt(t2 * i2, e2 * n2, this.width * i2, this.height * n2);
      this._onTranslated();
    }
    translate(t2, e2) {
      __privateMethod(this, _AnnotationEditor_instances, ri_fn).call(this, this.parentDimensions, t2, e2);
    }
    translateInPage(t2, e2) {
      __privateGet(this, _Xe) || __privateSet(this, _Xe, [this.x, this.y, this.width, this.height]);
      __privateMethod(this, _AnnotationEditor_instances, ri_fn).call(this, this.pageDimensions, t2, e2);
      this.div.scrollIntoView({ block: "nearest" });
    }
    translationDone() {
      this._onTranslated(this.x, this.y);
    }
    drag(t2, e2) {
      __privateGet(this, _Xe) || __privateSet(this, _Xe, [this.x, this.y, this.width, this.height]);
      const { div: i2, parentDimensions: [n2, s2] } = this;
      this.x += t2 / n2;
      this.y += e2 / s2;
      if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
        const { x: t3, y: e3 } = this.div.getBoundingClientRect();
        if (this.parent.findNewParent(this, t3, e3)) {
          this.x -= Math.floor(this.x);
          this.y -= Math.floor(this.y);
        }
      }
      let { x: a2, y: r2 } = this;
      const [o2, l2] = this.getBaseTranslation();
      a2 += o2;
      r2 += l2;
      const { style: h2 } = i2;
      h2.left = `${(100 * a2).toFixed(2)}%`;
      h2.top = `${(100 * r2).toFixed(2)}%`;
      this._onTranslating(a2, r2);
      i2.scrollIntoView({ block: "nearest" });
    }
    _onTranslating(t2, e2) {
    }
    _onTranslated(t2, e2) {
    }
    get _hasBeenMoved() {
      return !!__privateGet(this, _Xe) && (__privateGet(this, _Xe)[0] !== this.x || __privateGet(this, _Xe)[1] !== this.y);
    }
    get _hasBeenResized() {
      return !!__privateGet(this, _Xe) && (__privateGet(this, _Xe)[2] !== this.width || __privateGet(this, _Xe)[3] !== this.height);
    }
    getBaseTranslation() {
      const [t2, e2] = this.parentDimensions, { _borderLineWidth: i2 } = _AnnotationEditor, n2 = i2 / t2, s2 = i2 / e2;
      switch (this.rotation) {
        case 90:
          return [-n2, s2];
        case 180:
          return [n2, s2];
        case 270:
          return [n2, -s2];
        default:
          return [-n2, -s2];
      }
    }
    get _mustFixPosition() {
      return true;
    }
    fixAndSetPosition(t2 = this.rotation) {
      const { div: { style: e2 }, pageDimensions: [i2, n2] } = this;
      let { x: s2, y: a2, width: r2, height: o2 } = this;
      r2 *= i2;
      o2 *= n2;
      s2 *= i2;
      a2 *= n2;
      if (this._mustFixPosition) switch (t2) {
        case 0:
          s2 = MathClamp(s2, 0, i2 - r2);
          a2 = MathClamp(a2, 0, n2 - o2);
          break;
        case 90:
          s2 = MathClamp(s2, 0, i2 - o2);
          a2 = MathClamp(a2, r2, n2);
          break;
        case 180:
          s2 = MathClamp(s2, r2, i2);
          a2 = MathClamp(a2, o2, n2);
          break;
        case 270:
          s2 = MathClamp(s2, o2, i2);
          a2 = MathClamp(a2, 0, n2 - r2);
      }
      this.x = s2 /= i2;
      this.y = a2 /= n2;
      const [l2, h2] = this.getBaseTranslation();
      s2 += l2;
      a2 += h2;
      e2.left = `${(100 * s2).toFixed(2)}%`;
      e2.top = `${(100 * a2).toFixed(2)}%`;
      this.moveInDOM();
    }
    screenToPageTranslation(t2, e2) {
      var _a4;
      return __privateMethod(_a4 = _AnnotationEditor, _AnnotationEditor_static, oi_fn).call(_a4, t2, e2, this.parentRotation);
    }
    pageTranslationToScreen(t2, e2) {
      var _a4;
      return __privateMethod(_a4 = _AnnotationEditor, _AnnotationEditor_static, oi_fn).call(_a4, t2, e2, 360 - this.parentRotation);
    }
    get parentScale() {
      return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
      return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
    }
    get parentDimensions() {
      const { parentScale: t2, pageDimensions: [e2, i2] } = this;
      return [e2 * t2, i2 * t2];
    }
    setDims() {
      const { div: { style: t2 }, width: e2, height: i2 } = this;
      t2.width = `${(100 * e2).toFixed(2)}%`;
      t2.height = `${(100 * i2).toFixed(2)}%`;
    }
    getInitialTranslation() {
      return [0, 0];
    }
    _onResized() {
    }
    static _round(t2) {
      return Math.round(1e4 * t2) / 1e4;
    }
    _onResizing() {
    }
    altTextFinish() {
      __privateGet(this, _l3)?.finish();
    }
    get toolbarButtons() {
      return null;
    }
    async addEditToolbar() {
      if (this._editToolbar || __privateGet(this, _Ye)) return this._editToolbar;
      this._editToolbar = new EditorToolbar(this);
      this.div.append(this._editToolbar.render());
      const { toolbarButtons: t2 } = this;
      if (t2) for (const [e2, i2] of t2) await this._editToolbar.addButton(e2, i2);
      this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton());
      this._editToolbar.addButton("delete");
      return this._editToolbar;
    }
    addCommentButtonInToolbar() {
      this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
    }
    removeCommentButtonFromToolbar() {
      this._editToolbar?.removeButton("comment");
    }
    removeEditToolbar() {
      this._editToolbar?.remove();
      this._editToolbar = null;
      __privateGet(this, _l3)?.destroy();
    }
    addContainer(t2) {
      const e2 = this._editToolbar?.div;
      e2 ? e2.before(t2) : this.div.append(t2);
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    createAltText() {
      if (!__privateGet(this, _l3)) {
        AltText.initialize(_AnnotationEditor._l10n);
        __privateSet(this, _l3, new AltText(this));
        if (__privateGet(this, _Oe)) {
          __privateGet(this, _l3).data = __privateGet(this, _Oe);
          __privateSet(this, _Oe, null);
        }
      }
      return __privateGet(this, _l3);
    }
    get altTextData() {
      return __privateGet(this, _l3)?.data;
    }
    set altTextData(t2) {
      __privateGet(this, _l3) && (__privateGet(this, _l3).data = t2);
    }
    get guessedAltText() {
      return __privateGet(this, _l3)?.guessedText;
    }
    async setGuessedAltText(t2) {
      await __privateGet(this, _l3)?.setGuessedText(t2);
    }
    serializeAltText(t2) {
      return __privateGet(this, _l3)?.serialize(t2);
    }
    hasAltText() {
      return !!__privateGet(this, _l3) && !__privateGet(this, _l3).isEmpty();
    }
    hasAltTextData() {
      return __privateGet(this, _l3)?.hasData() ?? false;
    }
    focusCommentButton() {
      __privateGet(this, _h2)?.focusButton();
    }
    addCommentButton() {
      return this.canAddComment ? __privateGet(this, _h2) || __privateSet(this, _h2, new Comment(this)) : null;
    }
    addStandaloneCommentButton() {
      if (this._uiManager.hasCommentManager()) {
        if (__privateGet(this, _pe2)) this._uiManager.isEditingMode() && __privateGet(this, _pe2).classList.remove("hidden");
        else if (this.hasComment) {
          __privateSet(this, _pe2, __privateGet(this, _h2).renderForStandalone());
          this.div.append(__privateGet(this, _pe2));
        }
      }
    }
    removeStandaloneCommentButton() {
      __privateGet(this, _h2).removeStandaloneCommentButton();
      __privateSet(this, _pe2, null);
    }
    hideStandaloneCommentButton() {
      __privateGet(this, _pe2)?.classList.add("hidden");
    }
    get comment() {
      if (!__privateGet(this, _h2)) return null;
      const { data: { richText: t2, text: e2, date: i2, deleted: n2 } } = __privateGet(this, _h2);
      return { text: e2, richText: t2, date: i2, deleted: n2, color: this.getNonHCMColor(), opacity: this.opacity ?? 1 };
    }
    set comment(t2) {
      __privateGet(this, _h2) || __privateSet(this, _h2, new Comment(this));
      "object" == typeof t2 && null !== t2 ? __privateGet(this, _h2).restoreData(t2) : __privateGet(this, _h2).data = t2;
      if (this.hasComment) {
        this.removeCommentButtonFromToolbar();
        this.addStandaloneCommentButton();
        this._uiManager.updateComment(this);
      } else {
        this.addCommentButtonInToolbar();
        this.removeStandaloneCommentButton();
        this._uiManager.removeComment(this);
      }
    }
    setCommentData({ comment: t2, popupRef: e2, richText: i2 }) {
      if (!e2) return;
      __privateGet(this, _h2) || __privateSet(this, _h2, new Comment(this));
      __privateGet(this, _h2).setInitialText(t2, i2);
      if (!this.annotationElementId) return;
      const n2 = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
      n2 && this.updateFromAnnotationLayer(n2);
    }
    get hasEditedComment() {
      return __privateGet(this, _h2)?.hasBeenEdited();
    }
    get hasDeletedComment() {
      return __privateGet(this, _h2)?.isDeleted();
    }
    get hasComment() {
      return !!__privateGet(this, _h2) && !__privateGet(this, _h2).isEmpty() && !__privateGet(this, _h2).isDeleted();
    }
    async editComment(t2) {
      __privateGet(this, _h2) || __privateSet(this, _h2, new Comment(this));
      __privateGet(this, _h2).edit(t2);
    }
    toggleComment(t2, e2 = void 0) {
      this.hasComment && this._uiManager.toggleComment(this, t2, e2);
    }
    setSelectedCommentButton(t2) {
      __privateGet(this, _h2).setSelectedButton(t2);
    }
    addComment(t2) {
      if (this.hasEditedComment) {
        const e2 = 180, i2 = 100, [, , , n2] = t2.rect, [s2] = this.pageDimensions, [a2] = this.pageTranslation, r2 = a2 + s2 + 1, o2 = n2 - i2, l2 = r2 + e2;
        t2.popup = { contents: this.comment.text, deleted: this.comment.deleted, rect: [r2, o2, l2, n2] };
      }
    }
    updateFromAnnotationLayer({ popup: { contents: t2, deleted: e2 } }) {
      __privateGet(this, _h2).data = e2 ? null : t2;
    }
    get parentBoundingClientRect() {
      return this.parent.boundingClientRect;
    }
    render() {
      const t2 = this.div = document.createElement("div");
      t2.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
      t2.className = this.name;
      t2.setAttribute("id", this.id);
      t2.tabIndex = __privateGet(this, _Ne) ? -1 : 0;
      t2.setAttribute("role", "application");
      this.defaultL10nId && t2.setAttribute("data-l10n-id", this.defaultL10nId);
      this._isVisible || t2.classList.add("hidden");
      this.setInForeground();
      __privateMethod(this, _AnnotationEditor_instances, gi_fn).call(this);
      const [e2, i2] = this.parentDimensions;
      if (this.parentRotation % 180 != 0) {
        t2.style.maxWidth = `${(100 * i2 / e2).toFixed(2)}%`;
        t2.style.maxHeight = `${(100 * e2 / i2).toFixed(2)}%`;
      }
      const [n2, s2] = this.getInitialTranslation();
      this.translate(n2, s2);
      bindEvents(this, t2, ["keydown", "pointerdown", "dblclick"]);
      this.isResizable && this._uiManager._supportsPinchToZoom && (__privateGet(this, _ii) || __privateSet(this, _ii, new TouchManager({ container: t2, isPinchingDisabled: () => !this.isSelected, onPinchStart: __privateMethod(this, _AnnotationEditor_instances, mi_fn).bind(this), onPinching: __privateMethod(this, _AnnotationEditor_instances, fi_fn).bind(this), onPinchEnd: __privateMethod(this, _AnnotationEditor_instances, bi_fn).bind(this), signal: this._uiManager._signal })));
      this.addStandaloneCommentButton();
      this._uiManager._editorUndoBar?.hide();
      return t2;
    }
    pointerdown(t2) {
      const { isMac: e2 } = FeatureTest.platform;
      if (0 !== t2.button || t2.ctrlKey && e2) t2.preventDefault();
      else {
        __privateSet(this, _Ke, true);
        this._isDraggable ? __privateMethod(this, _AnnotationEditor_instances, yi_fn).call(this, t2) : __privateMethod(this, _AnnotationEditor_instances, vi_fn).call(this, t2);
      }
    }
    _onStartDragging() {
    }
    _onStopDragging() {
    }
    moveInDOM() {
      __privateGet(this, _Je) && clearTimeout(__privateGet(this, _Je));
      __privateSet(this, _Je, setTimeout(() => {
        __privateSet(this, _Je, null);
        this.parent?.moveEditorInDOM(this);
      }, 0));
    }
    _setParentAndPosition(t2, e2, i2) {
      t2.changeParent(this);
      this.x = e2;
      this.y = i2;
      this.fixAndSetPosition();
      this._onTranslated();
    }
    getRect(t2, e2, i2 = this.rotation) {
      const n2 = this.parentScale, [s2, a2] = this.pageDimensions, [r2, o2] = this.pageTranslation, l2 = t2 / n2, h2 = e2 / n2, c2 = this.x * s2, d2 = this.y * a2, u2 = this.width * s2, p2 = this.height * a2;
      switch (i2) {
        case 0:
          return [c2 + l2 + r2, a2 - d2 - h2 - p2 + o2, c2 + l2 + u2 + r2, a2 - d2 - h2 + o2];
        case 90:
          return [c2 + h2 + r2, a2 - d2 + l2 + o2, c2 + h2 + p2 + r2, a2 - d2 + l2 + u2 + o2];
        case 180:
          return [c2 - l2 - u2 + r2, a2 - d2 + h2 + o2, c2 - l2 + r2, a2 - d2 + h2 + p2 + o2];
        case 270:
          return [c2 - h2 - p2 + r2, a2 - d2 - l2 - u2 + o2, c2 - h2 + r2, a2 - d2 - l2 + o2];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getRectInCurrentCoords(t2, e2) {
      const [i2, n2, s2, a2] = t2, r2 = s2 - i2, o2 = a2 - n2;
      switch (this.rotation) {
        case 0:
          return [i2, e2 - a2, r2, o2];
        case 90:
          return [i2, e2 - n2, o2, r2];
        case 180:
          return [s2, e2 - n2, r2, o2];
        case 270:
          return [s2, e2 - a2, o2, r2];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getPDFRect() {
      return this.getRect(0, 0);
    }
    getNonHCMColor() {
      return this.color && _AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
    }
    onUpdatedColor() {
      __privateGet(this, _h2)?.onUpdatedColor();
    }
    getData() {
      const { comment: { text: t2, color: e2, date: i2, opacity: n2, deleted: s2, richText: a2 }, uid: r2, pageIndex: o2, creationDate: l2, modificationDate: h2 } = this;
      return { id: r2, pageIndex: o2, rect: this.getPDFRect(), richText: a2, contentsObj: { str: t2 }, creationDate: l2, modificationDate: i2 || h2, popupRef: !s2, color: e2, opacity: n2 };
    }
    onceAdded(t2) {
    }
    isEmpty() {
      return false;
    }
    enableEditMode() {
      if (this.isInEditMode()) return false;
      this.parent.setEditingState(false);
      __privateSet(this, _Ye, true);
      return true;
    }
    disableEditMode() {
      if (!this.isInEditMode()) return false;
      this.parent.setEditingState(true);
      __privateSet(this, _Ye, false);
      return true;
    }
    isInEditMode() {
      return __privateGet(this, _Ye);
    }
    shouldGetKeyboardEvents() {
      return __privateGet(this, _Qe);
    }
    needsToBeRebuilt() {
      return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
      const { top: t2, left: e2, bottom: i2, right: n2 } = this.getClientDimensions(), { innerHeight: s2, innerWidth: a2 } = window;
      return e2 < a2 && n2 > 0 && t2 < s2 && i2 > 0;
    }
    rebuild() {
      __privateMethod(this, _AnnotationEditor_instances, gi_fn).call(this);
    }
    rotate(t2) {
    }
    resize() {
    }
    serializeDeleted() {
      return { id: this.annotationElementId, deleted: true, pageIndex: this.pageIndex, popupRef: this._initialData?.popupRef || "" };
    }
    serialize(t2 = false, e2 = null) {
      return { annotationType: this.mode, pageIndex: this.pageIndex, rect: this.getPDFRect(), rotation: this.rotation, structTreeParentId: this._structTreeParentId, popupRef: this._initialData?.popupRef || "" };
    }
    static async deserialize(t2, e2, i2) {
      const n2 = new this.prototype.constructor({ parent: e2, id: i2.getId(), uiManager: i2, annotationElementId: t2.annotationElementId, creationDate: t2.creationDate, modificationDate: t2.modificationDate });
      n2.rotation = t2.rotation;
      __privateSet(n2, _Oe, t2.accessibilityData);
      n2._isCopy = t2.isCopy || false;
      const [s2, a2] = n2.pageDimensions, [r2, o2, l2, h2] = n2.getRectInCurrentCoords(t2.rect, a2);
      n2.x = r2 / s2;
      n2.y = o2 / a2;
      n2.width = l2 / s2;
      n2.height = h2 / a2;
      return n2;
    }
    get hasBeenModified() {
      return !!this.annotationElementId && (this.deleted || null !== this.serialize());
    }
    remove() {
      __privateGet(this, _je)?.abort();
      __privateSet(this, _je, null);
      this.isEmpty() || this.commit();
      this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this);
      this.hideCommentPopup();
      if (__privateGet(this, _Je)) {
        clearTimeout(__privateGet(this, _Je));
        __privateSet(this, _Je, null);
      }
      __privateMethod(this, _AnnotationEditor_instances, ai_fn).call(this);
      this.removeEditToolbar();
      if (__privateGet(this, _ei)) {
        for (const t2 of __privateGet(this, _ei).values()) clearTimeout(t2);
        __privateSet(this, _ei, null);
      }
      this.parent = null;
      __privateGet(this, _ii)?.destroy();
      __privateSet(this, _ii, null);
      __privateGet(this, _Ve)?.remove();
      __privateSet(this, _Ve, null);
    }
    get isResizable() {
      return false;
    }
    makeResizable() {
      if (this.isResizable) {
        __privateMethod(this, _AnnotationEditor_instances, hi_fn).call(this);
        __privateGet(this, _ze).classList.remove("hidden");
      }
    }
    get toolbarPosition() {
      return null;
    }
    get commentButtonPosition() {
      return "ltr" === this._uiManager.direction ? [1, 0] : [0, 0];
    }
    get commentButtonPositionInPage() {
      const { commentButtonPosition: [t2, e2] } = this, [i2, n2, s2, a2] = this.getPDFRect();
      return [_AnnotationEditor._round(i2 + (s2 - i2) * t2), _AnnotationEditor._round(n2 + (a2 - n2) * (1 - e2))];
    }
    get commentButtonColor() {
      return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
    }
    get commentPopupPosition() {
      return __privateGet(this, _h2).commentPopupPositionInLayer;
    }
    set commentPopupPosition(t2) {
      __privateGet(this, _h2).commentPopupPositionInLayer = t2;
    }
    hasDefaultPopupPosition() {
      return __privateGet(this, _h2).hasDefaultPopupPosition();
    }
    get commentButtonWidth() {
      return __privateGet(this, _h2).commentButtonWidth;
    }
    get elementBeforePopup() {
      return this.div;
    }
    setCommentButtonStates(t2) {
      __privateGet(this, _h2)?.setCommentButtonStates(t2);
    }
    keydown(t2) {
      if (!this.isResizable || t2.target !== this.div || "Enter" !== t2.key) return;
      this._uiManager.setSelected(this);
      __privateSet(this, _We, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
      const e2 = __privateGet(this, _ze).children;
      if (!__privateGet(this, _Re)) {
        __privateSet(this, _Re, Array.from(e2));
        const t3 = __privateMethod(this, _AnnotationEditor_instances, Ai_fn).bind(this), i3 = __privateMethod(this, _AnnotationEditor_instances, wi_fn).bind(this), n3 = this._uiManager._signal;
        for (const e3 of __privateGet(this, _Re)) {
          const s3 = e3.getAttribute("data-resizer-name");
          e3.setAttribute("role", "spinbutton");
          e3.addEventListener("keydown", t3, { signal: n3 });
          e3.addEventListener("blur", i3, { signal: n3 });
          e3.addEventListener("focus", __privateMethod(this, _AnnotationEditor_instances, xi_fn).bind(this, s3), { signal: n3 });
          e3.setAttribute("data-l10n-id", _AnnotationEditor._l10nResizer[s3]);
        }
      }
      const i2 = __privateGet(this, _Re)[0];
      let n2 = 0;
      for (const t3 of e2) {
        if (t3 === i2) break;
        n2++;
      }
      const s2 = (360 - this.rotation + this.parentRotation) % 360 / 90 * (__privateGet(this, _Re).length / 4);
      if (s2 !== n2) {
        if (s2 < n2) for (let t4 = 0; t4 < n2 - s2; t4++) __privateGet(this, _ze).append(__privateGet(this, _ze).firstElementChild);
        else if (s2 > n2) for (let t4 = 0; t4 < s2 - n2; t4++) __privateGet(this, _ze).firstElementChild.before(__privateGet(this, _ze).lastElementChild);
        let t3 = 0;
        for (const i3 of e2) {
          const e3 = __privateGet(this, _Re)[t3++].getAttribute("data-resizer-name");
          i3.setAttribute("data-l10n-id", _AnnotationEditor._l10nResizer[e3]);
        }
      }
      __privateMethod(this, _AnnotationEditor_instances, Ci_fn).call(this, 0);
      __privateSet(this, _Qe, true);
      __privateGet(this, _ze).firstElementChild.focus({ focusVisible: true });
      t2.preventDefault();
      t2.stopImmediatePropagation();
    }
    _resizeWithKeyboard(t2, e2) {
      __privateGet(this, _Qe) && __privateMethod(this, _AnnotationEditor_instances, di_fn).call(this, __privateGet(this, _$e), { deltaX: t2, deltaY: e2, fromKeyboard: true });
    }
    _stopResizingWithKeyboard() {
      __privateMethod(this, _AnnotationEditor_instances, ai_fn).call(this);
      this.div.focus();
    }
    select() {
      if (this.isSelected && this._editToolbar) this._editToolbar.show();
      else {
        this.isSelected = true;
        this.makeResizable();
        this.div?.classList.add("selectedEditor");
        if (this._editToolbar) {
          this._editToolbar?.show();
          __privateGet(this, _l3)?.toggleAltTextBadge(false);
        } else this.addEditToolbar().then(() => {
          this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
        });
      }
    }
    focus() {
      this.div && !this.div.contains(document.activeElement) && setTimeout(() => this.div?.focus({ preventScroll: true }), 0);
    }
    unselect() {
      if (this.isSelected) {
        this.isSelected = false;
        __privateGet(this, _ze)?.classList.add("hidden");
        this.div?.classList.remove("selectedEditor");
        this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({ preventScroll: true });
        this._editToolbar?.hide();
        __privateGet(this, _l3)?.toggleAltTextBadge(true);
        this.hideCommentPopup();
      }
    }
    hideCommentPopup() {
      this.hasComment && this._uiManager.toggleComment(null);
    }
    updateParams(t2, e2) {
    }
    disableEditing() {
    }
    enableEditing() {
    }
    get canChangeContent() {
      return false;
    }
    enterInEditMode() {
      if (this.canChangeContent) {
        this.enableEditMode();
        this.div.focus();
      }
    }
    dblclick(t2) {
      if ("BUTTON" !== t2.target.nodeName) {
        this.enterInEditMode();
        this.parent.updateToolbar({ mode: this.constructor._editorType, editId: this.uid });
      }
    }
    getElementForAltText() {
      return this.div;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return __privateGet(this, _qe);
    }
    set isEditing(t2) {
      __privateSet(this, _qe, t2);
      if (this.parent) if (t2) {
        this.parent.setSelected(this);
        this.parent.setActiveEditor(this);
      } else this.parent.setActiveEditor(null);
    }
    static get MIN_SIZE() {
      return 16;
    }
    static canCreateNewEmptyEditor() {
      return true;
    }
    get telemetryInitialData() {
      return { action: "added" };
    }
    get telemetryFinalData() {
      return null;
    }
    _reportTelemetry(t2, e2 = false) {
      if (e2) {
        __privateGet(this, _ei) || __privateSet(this, _ei, /* @__PURE__ */ new Map());
        const { action: e3 } = t2;
        let i2 = __privateGet(this, _ei).get(e3);
        i2 && clearTimeout(i2);
        i2 = setTimeout(() => {
          this._reportTelemetry(t2);
          __privateGet(this, _ei).delete(e3);
          0 === __privateGet(this, _ei).size && __privateSet(this, _ei, null);
        }, _AnnotationEditor._telemetryTimeout);
        __privateGet(this, _ei).set(e3, i2);
        return;
      }
      t2.type || (t2.type = this.editorType);
      this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: t2 } });
    }
    show(t2 = this._isVisible) {
      this.div.classList.toggle("hidden", !t2);
      this._isVisible = t2;
    }
    enable() {
      this.div && (this.div.tabIndex = 0);
      __privateSet(this, _Ne, false);
    }
    disable() {
      this.div && (this.div.tabIndex = -1);
      __privateSet(this, _Ne, true);
    }
    updateFakeAnnotationElement(t2) {
      if (__privateGet(this, _Ve) || this.deleted) if (this.deleted) {
        __privateGet(this, _Ve).remove();
        __privateSet(this, _Ve, null);
      } else (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && __privateGet(this, _Ve).updateEdited({ rect: this.getPDFRect(), popup: this.comment });
      else __privateSet(this, _Ve, t2.addFakeAnnotation(this));
    }
    renderAnnotationElement(t2) {
      if (this.deleted) {
        t2.hide();
        return null;
      }
      let e2 = t2.container.querySelector(".annotationContent");
      if (e2) {
        if ("CANVAS" === e2.nodeName) {
          const t3 = e2;
          e2 = document.createElement("div");
          e2.classList.add("annotationContent", this.editorType);
          t3.before(e2);
        }
      } else {
        e2 = document.createElement("div");
        e2.classList.add("annotationContent", this.editorType);
        t2.container.prepend(e2);
      }
      return e2;
    }
    resetAnnotationElement(t2) {
      const { firstElementChild: e2 } = t2.container;
      "DIV" === e2?.nodeName && e2.classList.contains("annotationContent") && e2.remove();
    }
  };
  _Oe = new WeakMap();
  _Re = new WeakMap();
  _l3 = new WeakMap();
  _h2 = new WeakMap();
  _pe2 = new WeakMap();
  _Ne = new WeakMap();
  _Ue = new WeakMap();
  _He = new WeakMap();
  _ze = new WeakMap();
  _Ge = new WeakMap();
  _We = new WeakMap();
  _Ve = new WeakMap();
  _je = new WeakMap();
  _$e = new WeakMap();
  _Ke = new WeakMap();
  _Xe = new WeakMap();
  _qe = new WeakMap();
  _Ye = new WeakMap();
  _Qe = new WeakMap();
  _Je = new WeakMap();
  _Ze = new WeakMap();
  _ti = new WeakMap();
  _ei = new WeakMap();
  _ii = new WeakMap();
  _ni = new WeakMap();
  _si = new WeakMap();
  _AnnotationEditor_instances = new WeakSet();
  ri_fn = function([t2, e2], i2, n2) {
    [i2, n2] = this.screenToPageTranslation(i2, n2);
    this.x += i2 / t2;
    this.y += n2 / e2;
    this._onTranslating(this.x, this.y);
    this.fixAndSetPosition();
  };
  _AnnotationEditor_static = new WeakSet();
  oi_fn = function(t2, e2, i2) {
    switch (i2) {
      case 90:
        return [e2, -t2];
      case 180:
        return [-t2, -e2];
      case 270:
        return [-e2, t2];
      default:
        return [t2, e2];
    }
  };
  li_fn = function(t2) {
    switch (t2) {
      case 90: {
        const [t3, e2] = this.pageDimensions;
        return [0, -t3 / e2, e2 / t3, 0];
      }
      case 180:
        return [-1, 0, 0, -1];
      case 270: {
        const [t3, e2] = this.pageDimensions;
        return [0, t3 / e2, -e2 / t3, 0];
      }
      default:
        return [1, 0, 0, 1];
    }
  };
  hi_fn = function() {
    if (__privateGet(this, _ze)) return;
    __privateSet(this, _ze, document.createElement("div"));
    __privateGet(this, _ze).classList.add("resizers");
    const t2 = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e2 = this._uiManager._signal;
    for (const i2 of t2) {
      const t3 = document.createElement("div");
      __privateGet(this, _ze).append(t3);
      t3.classList.add("resizer", i2);
      t3.setAttribute("data-resizer-name", i2);
      t3.addEventListener("pointerdown", __privateMethod(this, _AnnotationEditor_instances, ci_fn).bind(this, i2), { signal: e2 });
      t3.addEventListener("contextmenu", noContextMenu, { signal: e2 });
      t3.tabIndex = -1;
    }
    this.div.prepend(__privateGet(this, _ze));
  };
  ci_fn = function(t2, e2) {
    e2.preventDefault();
    const { isMac: i2 } = FeatureTest.platform;
    if (0 !== e2.button || e2.ctrlKey && i2) return;
    __privateGet(this, _l3)?.toggle(false);
    const n2 = this._isDraggable;
    this._isDraggable = false;
    __privateSet(this, _Ge, [e2.screenX, e2.screenY]);
    const s2 = new AbortController(), a2 = this._uiManager.combinedSignal(s2);
    this.parent.togglePointerEvents(false);
    window.addEventListener("pointermove", __privateMethod(this, _AnnotationEditor_instances, di_fn).bind(this, t2), { passive: true, capture: true, signal: a2 });
    window.addEventListener("touchmove", stopEvent, { passive: false, signal: a2 });
    window.addEventListener("contextmenu", noContextMenu, { signal: a2 });
    __privateSet(this, _We, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
    const r2 = this.parent.div.style.cursor, o2 = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e2.target).cursor;
    const pointerUpCallback = () => {
      s2.abort();
      this.parent.togglePointerEvents(true);
      __privateGet(this, _l3)?.toggle(true);
      this._isDraggable = n2;
      this.parent.div.style.cursor = r2;
      this.div.style.cursor = o2;
      __privateMethod(this, _AnnotationEditor_instances, ui_fn).call(this);
    };
    window.addEventListener("pointerup", pointerUpCallback, { signal: a2 });
    window.addEventListener("blur", pointerUpCallback, { signal: a2 });
  };
  pi_fn = function(t2, e2, i2, n2) {
    this.width = i2;
    this.height = n2;
    this.x = t2;
    this.y = e2;
    this.setDims();
    this.fixAndSetPosition();
    this._onResized();
  };
  ui_fn = function() {
    if (!__privateGet(this, _We)) return;
    const { savedX: t2, savedY: e2, savedWidth: i2, savedHeight: n2 } = __privateGet(this, _We);
    __privateSet(this, _We, null);
    const s2 = this.x, a2 = this.y, r2 = this.width, o2 = this.height;
    s2 === t2 && a2 === e2 && r2 === i2 && o2 === n2 || this.addCommands({ cmd: __privateMethod(this, _AnnotationEditor_instances, pi_fn).bind(this, s2, a2, r2, o2), undo: __privateMethod(this, _AnnotationEditor_instances, pi_fn).bind(this, t2, e2, i2, n2), mustExec: true });
  };
  di_fn = function(t2, e2) {
    const [i2, n2] = this.parentDimensions, s2 = this.x, a2 = this.y, r2 = this.width, o2 = this.height, l2 = _AnnotationEditor.MIN_SIZE / i2, h2 = _AnnotationEditor.MIN_SIZE / n2, c2 = __privateMethod(this, _AnnotationEditor_instances, li_fn).call(this, this.rotation), transf = (t3, e3) => [c2[0] * t3 + c2[2] * e3, c2[1] * t3 + c2[3] * e3], d2 = __privateMethod(this, _AnnotationEditor_instances, li_fn).call(this, 360 - this.rotation);
    let u2, p2, g2 = false, m2 = false;
    switch (t2) {
      case "topLeft":
        g2 = true;
        u2 = (t3, e3) => [0, 0];
        p2 = (t3, e3) => [t3, e3];
        break;
      case "topMiddle":
        u2 = (t3, e3) => [t3 / 2, 0];
        p2 = (t3, e3) => [t3 / 2, e3];
        break;
      case "topRight":
        g2 = true;
        u2 = (t3, e3) => [t3, 0];
        p2 = (t3, e3) => [0, e3];
        break;
      case "middleRight":
        m2 = true;
        u2 = (t3, e3) => [t3, e3 / 2];
        p2 = (t3, e3) => [0, e3 / 2];
        break;
      case "bottomRight":
        g2 = true;
        u2 = (t3, e3) => [t3, e3];
        p2 = (t3, e3) => [0, 0];
        break;
      case "bottomMiddle":
        u2 = (t3, e3) => [t3 / 2, e3];
        p2 = (t3, e3) => [t3 / 2, 0];
        break;
      case "bottomLeft":
        g2 = true;
        u2 = (t3, e3) => [0, e3];
        p2 = (t3, e3) => [t3, 0];
        break;
      case "middleLeft":
        m2 = true;
        u2 = (t3, e3) => [0, e3 / 2];
        p2 = (t3, e3) => [t3, e3 / 2];
    }
    const f2 = u2(r2, o2), b2 = p2(r2, o2);
    let y2 = transf(...b2);
    const v2 = _AnnotationEditor._round(s2 + y2[0]), A2 = _AnnotationEditor._round(a2 + y2[1]);
    let w2, x2, C2 = 1, E2 = 1;
    if (e2.fromKeyboard) ({ deltaX: w2, deltaY: x2 } = e2);
    else {
      const { screenX: t3, screenY: i3 } = e2, [n3, s3] = __privateGet(this, _Ge);
      [w2, x2] = this.screenToPageTranslation(t3 - n3, i3 - s3);
      __privateGet(this, _Ge)[0] = t3;
      __privateGet(this, _Ge)[1] = i3;
    }
    [w2, x2] = (S2 = w2 / i2, T2 = x2 / n2, [d2[0] * S2 + d2[2] * T2, d2[1] * S2 + d2[3] * T2]);
    var S2, T2;
    if (g2) {
      const t3 = Math.hypot(r2, o2);
      C2 = E2 = Math.max(Math.min(Math.hypot(b2[0] - f2[0] - w2, b2[1] - f2[1] - x2) / t3, 1 / r2, 1 / o2), l2 / r2, h2 / o2);
    } else m2 ? C2 = MathClamp(Math.abs(b2[0] - f2[0] - w2), l2, 1) / r2 : E2 = MathClamp(Math.abs(b2[1] - f2[1] - x2), h2, 1) / o2;
    const k2 = _AnnotationEditor._round(r2 * C2), _2 = _AnnotationEditor._round(o2 * E2);
    y2 = transf(...p2(k2, _2));
    const M2 = v2 - y2[0], D2 = A2 - y2[1];
    __privateGet(this, _Xe) || __privateSet(this, _Xe, [this.x, this.y, this.width, this.height]);
    this.width = k2;
    this.height = _2;
    this.x = M2;
    this.y = D2;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  };
  mi_fn = function() {
    __privateSet(this, _We, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
    __privateGet(this, _l3)?.toggle(false);
    this.parent.togglePointerEvents(false);
  };
  fi_fn = function(t2, e2, i2) {
    let n2 = i2 / e2 * 0.7 + 1 - 0.7;
    if (1 === n2) return;
    const s2 = __privateMethod(this, _AnnotationEditor_instances, li_fn).call(this, this.rotation), transf = (t3, e3) => [s2[0] * t3 + s2[2] * e3, s2[1] * t3 + s2[3] * e3], [a2, r2] = this.parentDimensions, o2 = this.x, l2 = this.y, h2 = this.width, c2 = this.height, d2 = _AnnotationEditor.MIN_SIZE / a2, u2 = _AnnotationEditor.MIN_SIZE / r2;
    n2 = Math.max(Math.min(n2, 1 / h2, 1 / c2), d2 / h2, u2 / c2);
    const p2 = _AnnotationEditor._round(h2 * n2), g2 = _AnnotationEditor._round(c2 * n2);
    if (p2 === h2 && g2 === c2) return;
    __privateGet(this, _Xe) || __privateSet(this, _Xe, [o2, l2, h2, c2]);
    const m2 = transf(h2 / 2, c2 / 2), f2 = _AnnotationEditor._round(o2 + m2[0]), b2 = _AnnotationEditor._round(l2 + m2[1]), y2 = transf(p2 / 2, g2 / 2);
    this.x = f2 - y2[0];
    this.y = b2 - y2[1];
    this.width = p2;
    this.height = g2;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  };
  bi_fn = function() {
    __privateGet(this, _l3)?.toggle(true);
    this.parent.togglePointerEvents(true);
    __privateMethod(this, _AnnotationEditor_instances, ui_fn).call(this);
  };
  vi_fn = function(t2) {
    const { isMac: e2 } = FeatureTest.platform;
    t2.ctrlKey && !e2 || t2.shiftKey || t2.metaKey && e2 ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
  };
  yi_fn = function(t2) {
    const { isSelected: e2 } = this;
    this._uiManager.setUpDragSession();
    let i2 = false;
    const n2 = new AbortController(), s2 = this._uiManager.combinedSignal(n2), a2 = { capture: true, passive: false, signal: s2 }, cancelDrag = (t3) => {
      n2.abort();
      __privateSet(this, _Ue, null);
      __privateSet(this, _Ke, false);
      this._uiManager.endDragSession() || __privateMethod(this, _AnnotationEditor_instances, vi_fn).call(this, t3);
      i2 && this._onStopDragging();
    };
    if (e2) {
      __privateSet(this, _Ze, t2.clientX);
      __privateSet(this, _ti, t2.clientY);
      __privateSet(this, _Ue, t2.pointerId);
      __privateSet(this, _He, t2.pointerType);
      window.addEventListener("pointermove", (t3) => {
        if (!i2) {
          i2 = true;
          this._uiManager.toggleComment(this, true, false);
          this._onStartDragging();
        }
        const { clientX: e3, clientY: n3, pointerId: s3 } = t3;
        if (s3 !== __privateGet(this, _Ue)) {
          stopEvent(t3);
          return;
        }
        const [a3, r2] = this.screenToPageTranslation(e3 - __privateGet(this, _Ze), n3 - __privateGet(this, _ti));
        __privateSet(this, _Ze, e3);
        __privateSet(this, _ti, n3);
        this._uiManager.dragSelectedEditors(a3, r2);
      }, a2);
      window.addEventListener("touchmove", stopEvent, a2);
      window.addEventListener("pointerdown", (t3) => {
        t3.pointerType === __privateGet(this, _He) && (__privateGet(this, _ii) || t3.isPrimary) && cancelDrag(t3);
        stopEvent(t3);
      }, a2);
    }
    const pointerUpCallback = (t3) => {
      __privateGet(this, _Ue) && __privateGet(this, _Ue) !== t3.pointerId ? stopEvent(t3) : cancelDrag(t3);
    };
    window.addEventListener("pointerup", pointerUpCallback, { signal: s2 });
    window.addEventListener("blur", pointerUpCallback, { signal: s2 });
  };
  gi_fn = function() {
    if (__privateGet(this, _je) || !this.div) return;
    __privateSet(this, _je, new AbortController());
    const t2 = this._uiManager.combinedSignal(__privateGet(this, _je));
    this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t2 });
    this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t2 });
  };
  Ai_fn = function(t2) {
    _AnnotationEditor._resizerKeyboardManager.exec(this, t2);
  };
  wi_fn = function(t2) {
    __privateGet(this, _Qe) && t2.relatedTarget?.parentNode !== __privateGet(this, _ze) && __privateMethod(this, _AnnotationEditor_instances, ai_fn).call(this);
  };
  xi_fn = function(t2) {
    __privateSet(this, _$e, __privateGet(this, _Qe) ? t2 : "");
  };
  Ci_fn = function(t2) {
    if (__privateGet(this, _Re)) for (const e2 of __privateGet(this, _Re)) e2.tabIndex = t2;
  };
  ai_fn = function() {
    __privateSet(this, _Qe, false);
    __privateMethod(this, _AnnotationEditor_instances, Ci_fn).call(this, -1);
    __privateMethod(this, _AnnotationEditor_instances, ui_fn).call(this);
  };
  __privateAdd(_AnnotationEditor, _AnnotationEditor_static);
  __publicField(_AnnotationEditor, "_l10n", null);
  __publicField(_AnnotationEditor, "_l10nAlert", null);
  __publicField(_AnnotationEditor, "_l10nResizer", null);
  __publicField(_AnnotationEditor, "_borderLineWidth", -1);
  __publicField(_AnnotationEditor, "_colorManager", new ColorManager());
  __publicField(_AnnotationEditor, "_zIndex", 1);
  __publicField(_AnnotationEditor, "_telemetryTimeout", 1e3);
  var AnnotationEditor = _AnnotationEditor;
  var FakeEditor = class extends AnnotationEditor {
    constructor(t2) {
      super(t2);
      this.annotationElementId = t2.annotationElementId;
      this.deleted = true;
    }
    serialize() {
      return this.serializeDeleted();
    }
  };
  var X = 3285377520;
  var q = 4294901760;
  var Y = 65535;
  var MurmurHash3_64 = class {
    constructor(t2) {
      this.h1 = t2 ? 4294967295 & t2 : X;
      this.h2 = t2 ? 4294967295 & t2 : X;
    }
    update(t2) {
      let e2, i2;
      if ("string" == typeof t2) {
        e2 = new Uint8Array(2 * t2.length);
        i2 = 0;
        for (let n3 = 0, s3 = t2.length; n3 < s3; n3++) {
          const s4 = t2.charCodeAt(n3);
          if (s4 <= 255) e2[i2++] = s4;
          else {
            e2[i2++] = s4 >>> 8;
            e2[i2++] = 255 & s4;
          }
        }
      } else {
        if (!ArrayBuffer.isView(t2)) throw new Error("Invalid data format, must be a string or TypedArray.");
        e2 = t2.slice();
        i2 = e2.byteLength;
      }
      const n2 = i2 >> 2, s2 = i2 - 4 * n2, a2 = new Uint32Array(e2.buffer, 0, n2);
      let r2 = 0, o2 = 0, l2 = this.h1, h2 = this.h2;
      const c2 = 3432918353, d2 = 461845907, u2 = 11601, p2 = 13715;
      for (let t3 = 0; t3 < n2; t3++) if (1 & t3) {
        r2 = a2[t3];
        r2 = r2 * c2 & q | r2 * u2 & Y;
        r2 = r2 << 15 | r2 >>> 17;
        r2 = r2 * d2 & q | r2 * p2 & Y;
        l2 ^= r2;
        l2 = l2 << 13 | l2 >>> 19;
        l2 = 5 * l2 + 3864292196;
      } else {
        o2 = a2[t3];
        o2 = o2 * c2 & q | o2 * u2 & Y;
        o2 = o2 << 15 | o2 >>> 17;
        o2 = o2 * d2 & q | o2 * p2 & Y;
        h2 ^= o2;
        h2 = h2 << 13 | h2 >>> 19;
        h2 = 5 * h2 + 3864292196;
      }
      r2 = 0;
      switch (s2) {
        case 3:
          r2 ^= e2[4 * n2 + 2] << 16;
        case 2:
          r2 ^= e2[4 * n2 + 1] << 8;
        case 1:
          r2 ^= e2[4 * n2];
          r2 = r2 * c2 & q | r2 * u2 & Y;
          r2 = r2 << 15 | r2 >>> 17;
          r2 = r2 * d2 & q | r2 * p2 & Y;
          1 & n2 ? l2 ^= r2 : h2 ^= r2;
      }
      this.h1 = l2;
      this.h2 = h2;
    }
    hexdigest() {
      let t2 = this.h1, e2 = this.h2;
      t2 ^= e2 >>> 1;
      t2 = 3981806797 * t2 & q | 36045 * t2 & Y;
      e2 = 4283543511 * e2 & q | (2950163797 * (e2 << 16 | t2 >>> 16) & q) >>> 16;
      t2 ^= e2 >>> 1;
      t2 = 444984403 * t2 & q | 60499 * t2 & Y;
      e2 = 3301882366 * e2 & q | (3120437893 * (e2 << 16 | t2 >>> 16) & q) >>> 16;
      t2 ^= e2 >>> 1;
      return (t2 >>> 0).toString(16).padStart(8, "0") + (e2 >>> 0).toString(16).padStart(8, "0");
    }
  };
  var Q = Object.freeze({ map: null, hash: "", transfer: void 0 });
  var _Ei, _Si, _Ti, _ki, _AnnotationStorage_instances, _i_fn;
  var AnnotationStorage = class {
    constructor() {
      __privateAdd(this, _AnnotationStorage_instances);
      __privateAdd(this, _Ei, false);
      __privateAdd(this, _Si, null);
      __privateAdd(this, _Ti, null);
      __privateAdd(this, _ki, /* @__PURE__ */ new Map());
      __publicField(this, "onSetModified", null);
      __publicField(this, "onResetModified", null);
      __publicField(this, "onAnnotationEditor", null);
    }
    getValue(t2, e2) {
      const i2 = __privateGet(this, _ki).get(t2);
      return void 0 === i2 ? e2 : Object.assign(e2, i2);
    }
    getRawValue(t2) {
      return __privateGet(this, _ki).get(t2);
    }
    remove(t2) {
      const e2 = __privateGet(this, _ki).get(t2);
      if (void 0 !== e2) {
        e2 instanceof AnnotationEditor && __privateGet(this, _Ti).delete(e2.annotationElementId);
        __privateGet(this, _ki).delete(t2);
        0 === __privateGet(this, _ki).size && this.resetModified();
        __privateGet(this, _ki).values().some((t3) => t3 instanceof AnnotationEditor) || this.onAnnotationEditor?.(null);
      }
    }
    setValue(t2, e2) {
      const i2 = __privateGet(this, _ki).get(t2);
      let n2 = false;
      if (void 0 !== i2) {
        for (const [t3, s2] of Object.entries(e2)) if (i2[t3] !== s2) {
          n2 = true;
          i2[t3] = s2;
        }
      } else {
        n2 = true;
        __privateGet(this, _ki).set(t2, e2);
      }
      n2 && __privateMethod(this, _AnnotationStorage_instances, _i_fn).call(this);
      if (e2 instanceof AnnotationEditor) {
        (__privateGet(this, _Ti) || __privateSet(this, _Ti, /* @__PURE__ */ new Map())).set(e2.annotationElementId, e2);
        this.onAnnotationEditor?.(e2.constructor._type);
      }
    }
    has(t2) {
      return __privateGet(this, _ki).has(t2);
    }
    get size() {
      return __privateGet(this, _ki).size;
    }
    resetModified() {
      if (__privateGet(this, _Ei)) {
        __privateSet(this, _Ei, false);
        this.onResetModified?.();
      }
    }
    get print() {
      return new PrintAnnotationStorage(this);
    }
    get serializable() {
      if (0 === __privateGet(this, _ki).size) return Q;
      const t2 = /* @__PURE__ */ new Map(), e2 = new MurmurHash3_64(), i2 = [], n2 = /* @__PURE__ */ Object.create(null);
      let s2 = false;
      for (const [i3, a2] of __privateGet(this, _ki)) {
        const r2 = a2 instanceof AnnotationEditor ? a2.serialize(false, n2) : a2;
        if (a2.page) {
          a2.pageIndex = a2.page._pageIndex;
          delete a2.page;
        }
        if (r2) {
          t2.set(i3, r2);
          e2.update(`${i3}:${JSON.stringify(r2)}`);
          s2 || (s2 = !!r2.bitmap);
        }
      }
      if (s2) for (const e3 of t2.values()) e3.bitmap && i2.push(e3.bitmap);
      return t2.size > 0 ? { map: t2, hash: e2.hexdigest(), transfer: i2 } : Q;
    }
    get editorStats() {
      let t2 = null;
      const e2 = /* @__PURE__ */ new Map();
      let i2 = 0, n2 = 0;
      for (const s2 of __privateGet(this, _ki).values()) {
        if (!(s2 instanceof AnnotationEditor)) {
          s2.popup && (s2.popup.deleted ? n2 += 1 : i2 += 1);
          continue;
        }
        s2.isCommentDeleted ? n2 += 1 : s2.hasEditedComment && (i2 += 1);
        const a2 = s2.telemetryFinalData;
        if (!a2) continue;
        const { type: r2 } = a2;
        e2.getOrInsertComputed(r2, () => Object.getPrototypeOf(s2).constructor);
        t2 || (t2 = /* @__PURE__ */ Object.create(null));
        const o2 = t2[r2] || (t2[r2] = /* @__PURE__ */ new Map());
        for (const [t3, e3] of Object.entries(a2)) {
          if ("type" === t3) continue;
          const i3 = o2.getOrInsertComputed(t3, makeMap);
          i3.set(e3, (i3.get(e3) ?? 0) + 1);
        }
      }
      if (n2 > 0 || i2 > 0) {
        t2 || (t2 = /* @__PURE__ */ Object.create(null));
        t2.comments = { deleted: n2, edited: i2 };
      }
      if (!t2) return null;
      for (const [i3, n3] of e2) t2[i3] = n3.computeTelemetryFinalData(t2[i3]);
      return t2;
    }
    resetModifiedIds() {
      __privateSet(this, _Si, null);
    }
    updateEditor(t2, e2) {
      const i2 = __privateGet(this, _Ti)?.get(t2);
      if (i2) {
        i2.updateFromAnnotationLayer(e2);
        return true;
      }
      return false;
    }
    getEditor(t2) {
      return __privateGet(this, _Ti)?.get(t2) || null;
    }
    get modifiedIds() {
      if (__privateGet(this, _Si)) return __privateGet(this, _Si);
      const t2 = [];
      if (__privateGet(this, _Ti)) for (const e3 of __privateGet(this, _Ti).values()) e3.serialize() && t2.push(e3.annotationElementId);
      let e2 = "";
      if (t2.length) {
        const i2 = new MurmurHash3_64();
        i2.update(t2.join(","));
        e2 = i2.hexdigest();
      }
      return __privateSet(this, _Si, { ids: new Set(t2), hash: e2 });
    }
    [Symbol.iterator]() {
      return __privateGet(this, _ki).entries();
    }
  };
  _Ei = new WeakMap();
  _Si = new WeakMap();
  _Ti = new WeakMap();
  _ki = new WeakMap();
  _AnnotationStorage_instances = new WeakSet();
  _i_fn = function() {
    if (!__privateGet(this, _Ei)) {
      __privateSet(this, _Ei, true);
      this.onSetModified?.();
    }
  };
  var _Mi;
  var PrintAnnotationStorage = class extends AnnotationStorage {
    constructor(t2) {
      super();
      __privateAdd(this, _Mi, Q);
      const { serializable: e2 } = t2;
      if (e2 === Q) return;
      const { map: i2, hash: n2, transfer: s2 } = e2, a2 = structuredClone(i2, s2 ? { transfer: s2 } : null);
      __privateSet(this, _Mi, { map: a2, hash: n2, transfer: [] });
    }
    get print() {
      unreachable("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
      return __privateGet(this, _Mi);
    }
    get modifiedIds() {
      return shadow(this, "modifiedIds", { ids: /* @__PURE__ */ new Set(), hash: "" });
    }
  };
  _Mi = new WeakMap();
  var J = "__forcedDependency";
  var { floor: Z, ceil: tt } = Math;
  function expandBBox(t2, e2, i2, n2, s2, a2) {
    t2[4 * e2 + 0] = Math.min(t2[4 * e2 + 0], i2);
    t2[4 * e2 + 1] = Math.min(t2[4 * e2 + 1], n2);
    t2[4 * e2 + 2] = Math.max(t2[4 * e2 + 2], s2);
    t2[4 * e2 + 3] = Math.max(t2[4 * e2 + 3], a2);
  }
  var et = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
  var _Di, _Pi;
  var BBoxReader = class {
    constructor(t2, e2) {
      __privateAdd(this, _Di);
      __privateAdd(this, _Pi);
      __privateSet(this, _Di, t2);
      __privateSet(this, _Pi, e2);
    }
    get length() {
      return __privateGet(this, _Di).length;
    }
    isEmpty(t2) {
      return __privateGet(this, _Di)[t2] === et;
    }
    minX(t2) {
      return __privateGet(this, _Pi)[4 * t2 + 0] / 256;
    }
    minY(t2) {
      return __privateGet(this, _Pi)[4 * t2 + 1] / 256;
    }
    maxX(t2) {
      return (__privateGet(this, _Pi)[4 * t2 + 2] + 1) / 256;
    }
    maxY(t2) {
      return (__privateGet(this, _Pi)[4 * t2 + 3] + 1) / 256;
    }
  };
  _Di = new WeakMap();
  _Pi = new WeakMap();
  var ensureDebugMetadata = (t2, e2) => t2?.getOrInsertComputed(e2, () => ({ dependencies: /* @__PURE__ */ new Set(), isRenderingOperation: false }));
  var _Ii, _Fi, _Bi, _Li, _Oi, _Ri, _Di2, _CanvasBBoxTracker_instances, Ni_fn;
  var CanvasBBoxTracker = class {
    constructor(t2, e2) {
      __privateAdd(this, _CanvasBBoxTracker_instances);
      __privateAdd(this, _Ii, [[1, 0, 0, 1, 0, 0]]);
      __privateAdd(this, _Fi, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
      __privateAdd(this, _Bi, new Float64Array(e));
      __publicField(this, "_pendingBBoxIdx", -1);
      __privateAdd(this, _Li);
      __privateAdd(this, _Oi);
      __privateAdd(this, _Ri);
      __privateAdd(this, _Di2);
      __publicField(this, "_savesStack", []);
      __publicField(this, "_markedContentStack", []);
      __privateSet(this, _Li, t2.width);
      __privateSet(this, _Oi, t2.height);
      __privateMethod(this, _CanvasBBoxTracker_instances, Ni_fn).call(this, e2);
    }
    growOperationsCount(t2) {
      t2 >= __privateGet(this, _Di2).length && __privateMethod(this, _CanvasBBoxTracker_instances, Ni_fn).call(this, t2, __privateGet(this, _Di2));
    }
    get clipBox() {
      return __privateGet(this, _Fi);
    }
    save(t2) {
      __privateSet(this, _Fi, { __proto__: __privateGet(this, _Fi) });
      this._savesStack.push(t2);
      return this;
    }
    restore(t2, e2) {
      const i2 = Object.getPrototypeOf(__privateGet(this, _Fi));
      if (null === i2) return this;
      __privateSet(this, _Fi, i2);
      const n2 = this._savesStack.pop();
      if (void 0 !== n2) {
        e2?.(n2, t2);
        __privateGet(this, _Di2)[t2] = __privateGet(this, _Di2)[n2];
      }
      return this;
    }
    recordOpenMarker(t2) {
      this._savesStack.push(t2);
      return this;
    }
    getOpenMarker() {
      return 0 === this._savesStack.length ? null : this._savesStack.at(-1);
    }
    recordCloseMarker(t2, e2) {
      const i2 = this._savesStack.pop();
      if (void 0 !== i2) {
        e2?.(i2, t2);
        __privateGet(this, _Di2)[t2] = __privateGet(this, _Di2)[i2];
      }
      return this;
    }
    beginMarkedContent(t2) {
      this._markedContentStack.push(t2);
      return this;
    }
    endMarkedContent(t2, e2) {
      const i2 = this._markedContentStack.pop();
      if (void 0 !== i2) {
        e2?.(i2, t2);
        __privateGet(this, _Di2)[t2] = __privateGet(this, _Di2)[i2];
      }
      return this;
    }
    pushBaseTransform(t2) {
      __privateGet(this, _Ii).push(Util.multiplyByDOMMatrix(__privateGet(this, _Ii).at(-1), t2.getTransform()));
      return this;
    }
    popBaseTransform() {
      __privateGet(this, _Ii).length > 1 && __privateGet(this, _Ii).pop();
      return this;
    }
    resetBBox(t2) {
      if (this._pendingBBoxIdx !== t2) {
        this._pendingBBoxIdx = t2;
        __privateGet(this, _Bi).set(e, 0);
      }
      return this;
    }
    recordClipBox(t2, i2, n2, s2, a2, r2) {
      const o2 = Util.multiplyByDOMMatrix(__privateGet(this, _Ii).at(-1), i2.getTransform()), l2 = e.slice();
      Util.axialAlignedBoundingBox([n2, a2, s2, r2], o2, l2);
      const h2 = Util.intersect(__privateGet(this, _Fi), l2);
      if (h2) {
        __privateGet(this, _Fi)[0] = h2[0];
        __privateGet(this, _Fi)[1] = h2[1];
        __privateGet(this, _Fi)[2] = h2[2];
        __privateGet(this, _Fi)[3] = h2[3];
      } else {
        __privateGet(this, _Fi)[0] = __privateGet(this, _Fi)[1] = 1 / 0;
        __privateGet(this, _Fi)[2] = __privateGet(this, _Fi)[3] = -1 / 0;
      }
      return this;
    }
    recordBBox(t2, i2, n2, s2, a2, r2) {
      const o2 = __privateGet(this, _Fi);
      if (o2[0] === 1 / 0) return this;
      const l2 = Util.multiplyByDOMMatrix(__privateGet(this, _Ii).at(-1), i2.getTransform());
      if (o2[0] === -1 / 0) {
        Util.axialAlignedBoundingBox([n2, a2, s2, r2], l2, __privateGet(this, _Bi));
        return this;
      }
      const h2 = e.slice();
      Util.axialAlignedBoundingBox([n2, a2, s2, r2], l2, h2);
      __privateGet(this, _Bi)[0] = MathClamp(h2[0], o2[0], __privateGet(this, _Bi)[0]);
      __privateGet(this, _Bi)[1] = MathClamp(h2[1], o2[1], __privateGet(this, _Bi)[1]);
      __privateGet(this, _Bi)[2] = MathClamp(h2[2], __privateGet(this, _Bi)[2], o2[2]);
      __privateGet(this, _Bi)[3] = MathClamp(h2[3], __privateGet(this, _Bi)[3], o2[3]);
      return this;
    }
    recordFullPageBBox(t2) {
      __privateGet(this, _Bi)[0] = Math.max(0, __privateGet(this, _Fi)[0]);
      __privateGet(this, _Bi)[1] = Math.max(0, __privateGet(this, _Fi)[1]);
      __privateGet(this, _Bi)[2] = Math.min(__privateGet(this, _Li), __privateGet(this, _Fi)[2]);
      __privateGet(this, _Bi)[3] = Math.min(__privateGet(this, _Oi), __privateGet(this, _Fi)[3]);
      return this;
    }
    recordOperation(t2, e2 = false, i2) {
      if (this._pendingBBoxIdx !== t2) return this;
      const n2 = Z(256 * __privateGet(this, _Bi)[0] / __privateGet(this, _Li)), s2 = Z(256 * __privateGet(this, _Bi)[1] / __privateGet(this, _Oi)), a2 = tt(256 * __privateGet(this, _Bi)[2] / __privateGet(this, _Li)), r2 = tt(256 * __privateGet(this, _Bi)[3] / __privateGet(this, _Oi));
      expandBBox(__privateGet(this, _Ri), t2, n2, s2, a2, r2);
      if (i2) for (const e3 of i2) for (const i3 of e3) i3 !== t2 && expandBBox(__privateGet(this, _Ri), i3, n2, s2, a2, r2);
      e2 || (this._pendingBBoxIdx = -1);
      return this;
    }
    bboxToClipBoxDropOperation(t2) {
      if (this._pendingBBoxIdx === t2) {
        this._pendingBBoxIdx = -1;
        __privateGet(this, _Fi)[0] = Math.max(__privateGet(this, _Fi)[0], __privateGet(this, _Bi)[0]);
        __privateGet(this, _Fi)[1] = Math.max(__privateGet(this, _Fi)[1], __privateGet(this, _Bi)[1]);
        __privateGet(this, _Fi)[2] = Math.min(__privateGet(this, _Fi)[2], __privateGet(this, _Bi)[2]);
        __privateGet(this, _Fi)[3] = Math.min(__privateGet(this, _Fi)[3], __privateGet(this, _Bi)[3]);
      }
      return this;
    }
    take() {
      return new BBoxReader(__privateGet(this, _Di2), __privateGet(this, _Ri));
    }
    takeDebugMetadata() {
      throw new Error("Unreachable");
    }
    recordSimpleData(t2, e2) {
      return this;
    }
    recordIncrementalData(t2, e2) {
      return this;
    }
    resetIncrementalData(t2, e2) {
      return this;
    }
    recordNamedData(t2, e2) {
      return this;
    }
    recordSimpleDataFromNamed(t2, e2, i2) {
      return this;
    }
    recordFutureForcedDependency(t2, e2) {
      return this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t2) {
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      return this;
    }
    recordCharacterBBox(t2, e2, i2, n2 = 1, s2 = 0, a2 = 0, r2) {
      return this;
    }
    getSimpleIndex(t2) {
    }
    recordDependencies(t2, e2) {
      return this;
    }
    recordNamedDependency(t2, e2) {
      return this;
    }
    recordShowTextOperation(t2, e2 = false) {
      return this;
    }
  };
  _Ii = new WeakMap();
  _Fi = new WeakMap();
  _Bi = new WeakMap();
  _Li = new WeakMap();
  _Oi = new WeakMap();
  _Ri = new WeakMap();
  _Di2 = new WeakMap();
  _CanvasBBoxTracker_instances = new WeakSet();
  Ni_fn = function(t2, e2) {
    const i2 = new ArrayBuffer(4 * t2);
    __privateSet(this, _Ri, new Uint8ClampedArray(i2));
    __privateSet(this, _Di2, new Uint32Array(i2));
    if (e2 && e2.length > 0) {
      __privateGet(this, _Di2).set(e2);
      __privateGet(this, _Di2).fill(et, e2.length);
    } else __privateGet(this, _Di2).fill(et);
  };
  var _Ui, _Hi, _zi, _Gi, _Wi, _Vi, _ji, _$i;
  var CanvasDependencyTracker = class {
    constructor(t2, e2 = false) {
      __privateAdd(this, _Ui, { __proto__: null });
      __privateAdd(this, _Hi, { __proto__: null, transform: [], moveText: [], sameLineText: [], [J]: [] });
      __privateAdd(this, _zi, /* @__PURE__ */ new Map());
      __privateAdd(this, _Gi, /* @__PURE__ */ new Set());
      __privateAdd(this, _Wi, /* @__PURE__ */ new Map());
      __privateAdd(this, _Vi);
      __privateAdd(this, _ji);
      __privateAdd(this, _$i);
      __privateSet(this, _$i, t2);
      if (e2) {
        __privateSet(this, _Vi, /* @__PURE__ */ new Map());
        __privateSet(this, _ji, (t3, e3) => {
          ensureDebugMetadata(__privateGet(this, _Vi), e3).dependencies.add(t3);
        });
      }
    }
    get clipBox() {
      return __privateGet(this, _$i).clipBox;
    }
    growOperationsCount(t2) {
      __privateGet(this, _$i).growOperationsCount(t2);
    }
    save(t2) {
      __privateSet(this, _Ui, { __proto__: __privateGet(this, _Ui) });
      __privateSet(this, _Hi, { __proto__: __privateGet(this, _Hi), transform: { __proto__: __privateGet(this, _Hi).transform }, moveText: { __proto__: __privateGet(this, _Hi).moveText }, sameLineText: { __proto__: __privateGet(this, _Hi).sameLineText }, [J]: { __proto__: __privateGet(this, _Hi)[J] } });
      __privateGet(this, _$i).save(t2);
      return this;
    }
    restore(t2) {
      __privateGet(this, _$i).restore(t2, __privateGet(this, _ji));
      const e2 = Object.getPrototypeOf(__privateGet(this, _Ui));
      if (null === e2) return this;
      __privateSet(this, _Ui, e2);
      __privateSet(this, _Hi, Object.getPrototypeOf(__privateGet(this, _Hi)));
      return this;
    }
    recordOpenMarker(t2) {
      __privateGet(this, _$i).recordOpenMarker(t2, __privateGet(this, _ji));
      return this;
    }
    getOpenMarker() {
      return __privateGet(this, _$i).getOpenMarker();
    }
    recordCloseMarker(t2) {
      __privateGet(this, _$i).recordCloseMarker(t2, __privateGet(this, _ji));
      return this;
    }
    beginMarkedContent(t2) {
      __privateGet(this, _$i).beginMarkedContent(t2);
      return this;
    }
    endMarkedContent(t2) {
      __privateGet(this, _$i).endMarkedContent(t2, __privateGet(this, _ji));
      return this;
    }
    pushBaseTransform(t2) {
      __privateGet(this, _$i).pushBaseTransform(t2);
      return this;
    }
    popBaseTransform() {
      __privateGet(this, _$i).popBaseTransform();
      return this;
    }
    recordSimpleData(t2, e2) {
      __privateGet(this, _Ui)[t2] = e2;
      return this;
    }
    recordIncrementalData(t2, e2) {
      __privateGet(this, _Hi)[t2].push(e2);
      return this;
    }
    resetIncrementalData(t2, e2) {
      __privateGet(this, _Hi)[t2].length = 0;
      return this;
    }
    recordNamedData(t2, e2) {
      __privateGet(this, _zi).set(t2, e2);
      return this;
    }
    recordSimpleDataFromNamed(t2, e2, i2) {
      __privateGet(this, _Ui)[t2] = __privateGet(this, _zi).get(e2) ?? i2;
    }
    recordFutureForcedDependency(t2, e2) {
      this.recordIncrementalData(J, e2);
      return this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t2) {
      for (const e2 of t2) e2 in __privateGet(this, _Ui) && this.recordFutureForcedDependency(e2, __privateGet(this, _Ui)[e2]);
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      for (const t2 of __privateGet(this, _Gi)) this.recordFutureForcedDependency(J, t2);
      return this;
    }
    resetBBox(t2) {
      __privateGet(this, _$i).resetBBox(t2);
      return this;
    }
    recordClipBox(t2, e2, i2, n2, s2, a2) {
      __privateGet(this, _$i).recordClipBox(t2, e2, i2, n2, s2, a2);
      return this;
    }
    recordBBox(t2, e2, i2, n2, s2, a2) {
      __privateGet(this, _$i).recordBBox(t2, e2, i2, n2, s2, a2);
      return this;
    }
    recordCharacterBBox(t2, e2, i2, n2 = 1, s2 = 0, a2 = 0, r2) {
      const o2 = i2.bbox;
      let l2, h2;
      if (o2) {
        l2 = o2[2] !== o2[0] && o2[3] !== o2[1] && __privateGet(this, _Wi).get(i2);
        if (false !== l2) {
          h2 = [0, 0, 0, 0];
          Util.axialAlignedBoundingBox(o2, i2.fontMatrix, h2);
          1 === n2 && 0 === s2 && 0 === a2 || (function scaleCharBBox(t3, e3, i3, n3, s3) {
            let a3;
            if (t3) {
              if (t3 < 0) {
                a3 = s3[0];
                s3[0] = s3[2];
                s3[2] = a3;
              }
              s3[0] *= t3;
              s3[2] *= t3;
              if (e3 < 0) {
                a3 = s3[1];
                s3[1] = s3[3];
                s3[3] = a3;
              }
              s3[1] *= e3;
              s3[3] *= e3;
            } else s3.fill(0);
            s3[0] += i3;
            s3[1] += n3;
            s3[2] += i3;
            s3[3] += n3;
          })(n2, -n2, s2, a2, h2);
          if (l2) return this.recordBBox(t2, e2, h2[0], h2[2], h2[1], h2[3]);
        }
      }
      if (!r2) return this.recordFullPageBBox(t2);
      const c2 = r2();
      if (o2 && h2 && void 0 === l2) {
        l2 = h2[0] <= s2 - c2.actualBoundingBoxLeft && h2[2] >= s2 + c2.actualBoundingBoxRight && h2[1] <= a2 - c2.actualBoundingBoxAscent && h2[3] >= a2 + c2.actualBoundingBoxDescent;
        __privateGet(this, _Wi).set(i2, l2);
        if (l2) return this.recordBBox(t2, e2, h2[0], h2[2], h2[1], h2[3]);
      }
      return this.recordBBox(t2, e2, s2 - c2.actualBoundingBoxLeft, s2 + c2.actualBoundingBoxRight, a2 - c2.actualBoundingBoxAscent, a2 + c2.actualBoundingBoxDescent);
    }
    recordFullPageBBox(t2) {
      __privateGet(this, _$i).recordFullPageBBox(t2);
      return this;
    }
    getSimpleIndex(t2) {
      return __privateGet(this, _Ui)[t2];
    }
    recordDependencies(t2, e2) {
      const i2 = __privateGet(this, _Gi), n2 = __privateGet(this, _Ui), s2 = __privateGet(this, _Hi);
      for (const t3 of e2) t3 in __privateGet(this, _Ui) ? i2.add(n2[t3]) : t3 in s2 && s2[t3].forEach(i2.add, i2);
      return this;
    }
    recordNamedDependency(t2, e2) {
      __privateGet(this, _zi).has(e2) && __privateGet(this, _Gi).add(__privateGet(this, _zi).get(e2));
      return this;
    }
    recordOperation(t2, e2 = false) {
      this.recordDependencies(t2, [J]);
      if (__privateGet(this, _Vi)) {
        const e3 = ensureDebugMetadata(__privateGet(this, _Vi), t2), { dependencies: i3 } = e3;
        __privateGet(this, _Gi).forEach(i3.add, i3);
        __privateGet(this, _$i)._savesStack.forEach(i3.add, i3);
        __privateGet(this, _$i)._markedContentStack.forEach(i3.add, i3);
        i3.delete(t2);
        e3.isRenderingOperation = true;
      }
      const i2 = !e2 && t2 === __privateGet(this, _$i)._pendingBBoxIdx;
      __privateGet(this, _$i).recordOperation(t2, e2, [__privateGet(this, _Gi), __privateGet(this, _$i)._savesStack, __privateGet(this, _$i)._markedContentStack]);
      i2 && __privateGet(this, _Gi).clear();
      return this;
    }
    recordShowTextOperation(t2, e2 = false) {
      const i2 = Array.from(__privateGet(this, _Gi));
      this.recordOperation(t2, e2);
      this.recordIncrementalData("sameLineText", t2);
      for (const t3 of i2) this.recordIncrementalData("sameLineText", t3);
      return this;
    }
    bboxToClipBoxDropOperation(t2, e2 = false) {
      const i2 = !e2 && t2 === __privateGet(this, _$i)._pendingBBoxIdx;
      __privateGet(this, _$i).bboxToClipBoxDropOperation(t2);
      i2 && __privateGet(this, _Gi).clear();
      return this;
    }
    take() {
      __privateGet(this, _Wi).clear();
      return __privateGet(this, _$i).take();
    }
    takeDebugMetadata() {
      return __privateGet(this, _Vi);
    }
  };
  _Ui = new WeakMap();
  _Hi = new WeakMap();
  _zi = new WeakMap();
  _Gi = new WeakMap();
  _Wi = new WeakMap();
  _Vi = new WeakMap();
  _ji = new WeakMap();
  _$i = new WeakMap();
  var _Ki, _Xi, _qi, _Yi, _Qi;
  var _CanvasNestedDependencyTracker = class _CanvasNestedDependencyTracker {
    constructor(t2, e2, i2) {
      __privateAdd(this, _Ki);
      __privateAdd(this, _Xi);
      __privateAdd(this, _qi);
      __privateAdd(this, _Yi, 0);
      __privateAdd(this, _Qi, 0);
      if (t2 instanceof _CanvasNestedDependencyTracker && __privateGet(t2, _qi) === !!i2) return t2;
      __privateSet(this, _Ki, t2);
      __privateSet(this, _Xi, e2);
      __privateSet(this, _qi, !!i2);
    }
    get clipBox() {
      return __privateGet(this, _Ki).clipBox;
    }
    growOperationsCount() {
      throw new Error("Unreachable");
    }
    save(t2) {
      __privateWrapper(this, _Qi)._++;
      __privateGet(this, _Ki).save(__privateGet(this, _Xi));
      return this;
    }
    restore(t2) {
      if (__privateGet(this, _Qi) > 0) {
        __privateGet(this, _Ki).restore(__privateGet(this, _Xi));
        __privateWrapper(this, _Qi)._--;
      }
      return this;
    }
    recordOpenMarker(t2) {
      __privateWrapper(this, _Yi)._++;
      return this;
    }
    getOpenMarker() {
      return __privateGet(this, _Yi) > 0 ? __privateGet(this, _Xi) : __privateGet(this, _Ki).getOpenMarker();
    }
    recordCloseMarker(t2) {
      __privateWrapper(this, _Yi)._--;
      return this;
    }
    beginMarkedContent(t2) {
      return this;
    }
    endMarkedContent(t2) {
      return this;
    }
    pushBaseTransform(t2) {
      __privateGet(this, _Ki).pushBaseTransform(t2);
      return this;
    }
    popBaseTransform() {
      __privateGet(this, _Ki).popBaseTransform();
      return this;
    }
    recordSimpleData(t2, e2) {
      __privateGet(this, _Ki).recordSimpleData(t2, __privateGet(this, _Xi));
      return this;
    }
    recordIncrementalData(t2, e2) {
      __privateGet(this, _Ki).recordIncrementalData(t2, __privateGet(this, _Xi));
      return this;
    }
    resetIncrementalData(t2, e2) {
      __privateGet(this, _Ki).resetIncrementalData(t2, __privateGet(this, _Xi));
      return this;
    }
    recordNamedData(t2, e2) {
      return this;
    }
    recordSimpleDataFromNamed(t2, e2, i2) {
      __privateGet(this, _Ki).recordSimpleDataFromNamed(t2, e2, __privateGet(this, _Xi));
      return this;
    }
    recordFutureForcedDependency(t2, e2) {
      __privateGet(this, _Ki).recordFutureForcedDependency(t2, __privateGet(this, _Xi));
      return this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t2) {
      __privateGet(this, _Ki).inheritSimpleDataAsFutureForcedDependencies(t2);
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      __privateGet(this, _Ki).inheritPendingDependenciesAsFutureForcedDependencies();
      return this;
    }
    resetBBox(t2) {
      __privateGet(this, _qi) || __privateGet(this, _Ki).resetBBox(__privateGet(this, _Xi));
      return this;
    }
    recordClipBox(t2, e2, i2, n2, s2, a2) {
      __privateGet(this, _qi) || __privateGet(this, _Ki).recordClipBox(__privateGet(this, _Xi), e2, i2, n2, s2, a2);
      return this;
    }
    recordBBox(t2, e2, i2, n2, s2, a2) {
      __privateGet(this, _qi) || __privateGet(this, _Ki).recordBBox(__privateGet(this, _Xi), e2, i2, n2, s2, a2);
      return this;
    }
    recordCharacterBBox(t2, e2, i2, n2, s2, a2, r2) {
      __privateGet(this, _qi) || __privateGet(this, _Ki).recordCharacterBBox(__privateGet(this, _Xi), e2, i2, n2, s2, a2, r2);
      return this;
    }
    recordFullPageBBox(t2) {
      __privateGet(this, _qi) || __privateGet(this, _Ki).recordFullPageBBox(__privateGet(this, _Xi));
      return this;
    }
    getSimpleIndex(t2) {
      return __privateGet(this, _Ki).getSimpleIndex(t2);
    }
    recordDependencies(t2, e2) {
      __privateGet(this, _Ki).recordDependencies(__privateGet(this, _Xi), e2);
      return this;
    }
    recordNamedDependency(t2, e2) {
      __privateGet(this, _Ki).recordNamedDependency(__privateGet(this, _Xi), e2);
      return this;
    }
    recordOperation(t2) {
      __privateGet(this, _Ki).recordOperation(__privateGet(this, _Xi), true);
      return this;
    }
    recordShowTextOperation(t2) {
      __privateGet(this, _Ki).recordShowTextOperation(__privateGet(this, _Xi), true);
      return this;
    }
    bboxToClipBoxDropOperation(t2) {
      __privateGet(this, _qi) || __privateGet(this, _Ki).bboxToClipBoxDropOperation(__privateGet(this, _Xi), true);
      return this;
    }
    take() {
      throw new Error("Unreachable");
    }
    takeDebugMetadata() {
      throw new Error("Unreachable");
    }
  };
  _Ki = new WeakMap();
  _Xi = new WeakMap();
  _qi = new WeakMap();
  _Yi = new WeakMap();
  _Qi = new WeakMap();
  var CanvasNestedDependencyTracker = _CanvasNestedDependencyTracker;
  var it = ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"];
  var nt = ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"];
  var st = ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"];
  var at = ["filter", "fillColor", "fillAlpha"];
  var rt = ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"];
  var ot = ["transform"];
  var lt = ["transform", "fillColor"];
  var _Li2, _Oi2, _Ji, _Zi, _Pi2, _tn;
  var _CanvasImagesTracker = class _CanvasImagesTracker {
    constructor(t2) {
      __privateAdd(this, _Li2);
      __privateAdd(this, _Oi2);
      __privateAdd(this, _Ji, 4);
      __privateAdd(this, _Zi, 0);
      __privateAdd(this, _Pi2, new (__privateGet(_CanvasImagesTracker, _tn))(6 * __privateGet(this, _Ji)));
      __privateSet(this, _Li2, t2.width);
      __privateSet(this, _Oi2, t2.height);
    }
    record(t2, i2, n2, s2) {
      if (__privateGet(this, _Zi) === __privateGet(this, _Ji)) {
        __privateSet(this, _Ji, __privateGet(this, _Ji) * 2);
        const t3 = new (__privateGet(_CanvasImagesTracker, _tn))(6 * __privateGet(this, _Ji));
        t3.set(__privateGet(this, _Pi2));
        __privateSet(this, _Pi2, t3);
      }
      const a2 = getCurrentTransform(t2);
      let r2;
      if (s2[0] !== 1 / 0) {
        const t3 = e.slice();
        Util.axialAlignedBoundingBox([0, -n2, i2, 0], a2, t3);
        const o2 = Util.intersect(s2, t3);
        if (!o2) return;
        const [l2, h2, c2, d2] = o2;
        if (l2 !== t3[0] || h2 !== t3[1] || c2 !== t3[2] || d2 !== t3[3]) {
          const t4 = Math.atan2(a2[1], a2[0]), e2 = Math.abs(Math.sin(t4)), i3 = Math.abs(Math.cos(t4));
          if (e2 < 1e-6 || i3 < 1e-6 || Math.abs(e2 - i3) < 1e-6) r2 = [l2, h2, l2, d2, c2, h2];
          else {
            const t5 = c2 - l2, n3 = d2 - h2, s3 = e2 * e2, a3 = i3 * i3, o3 = i3 * e2, u2 = a3 - s3, p2 = (n3 * a3 - t5 * o3) / u2;
            r2 = [l2 + (n3 * o3 - t5 * s3) / u2, h2, l2, h2 + p2, c2, d2 - p2];
          }
        }
      }
      if (!r2) {
        r2 = [0, -n2, 0, 0, i2, -n2];
        Util.applyTransform(r2, a2, 0);
        Util.applyTransform(r2, a2, 2);
        Util.applyTransform(r2, a2, 4);
      }
      r2[0] /= __privateGet(this, _Li2);
      r2[1] /= __privateGet(this, _Oi2);
      r2[2] /= __privateGet(this, _Li2);
      r2[3] /= __privateGet(this, _Oi2);
      r2[4] /= __privateGet(this, _Li2);
      r2[5] /= __privateGet(this, _Oi2);
      __privateGet(this, _Pi2).set(r2, 6 * __privateGet(this, _Zi));
      __privateWrapper(this, _Zi)._++;
    }
    take() {
      return __privateGet(this, _Pi2).subarray(0, 6 * __privateGet(this, _Zi));
    }
  };
  _Li2 = new WeakMap();
  _Oi2 = new WeakMap();
  _Ji = new WeakMap();
  _Zi = new WeakMap();
  _Pi2 = new WeakMap();
  _tn = new WeakMap();
  __privateAdd(_CanvasImagesTracker, _tn, FeatureTest.isFloat16ArraySupported ? Float16Array : Float32Array);
  var CanvasImagesTracker = _CanvasImagesTracker;
  var _en, _in, _FontLoader_instances, nn_fn;
  var FontLoader = class {
    constructor({ ownerDocument: t2 = globalThis.document, styleElement: e2 = null }) {
      __privateAdd(this, _FontLoader_instances);
      __privateAdd(this, _en, /* @__PURE__ */ new Set());
      __privateAdd(this, _in, null);
      this._document = t2;
      this.nativeFontFaces = /* @__PURE__ */ new Set();
      this.styleElement = null;
      this.loadingRequests = [];
      this.loadTestFontId = 0;
    }
    addNativeFontFace(t2) {
      this.nativeFontFaces.add(t2);
      this._document.fonts.add(t2);
    }
    removeNativeFontFace(t2) {
      this.nativeFontFaces.delete(t2);
      this._document.fonts.delete(t2);
    }
    insertRule(t2) {
      const e2 = __privateMethod(this, _FontLoader_instances, nn_fn).call(this);
      e2.insertRule(t2, e2.cssRules.length);
    }
    clear() {
      for (const t2 of this.nativeFontFaces) this._document.fonts.delete(t2);
      this.nativeFontFaces.clear();
      __privateGet(this, _en).clear();
      if (__privateGet(this, _in)) {
        const { adoptedStyleSheets: t2 } = this._document;
        t2?.includes(__privateGet(this, _in)) && (this._document.adoptedStyleSheets = t2.filter((t3) => t3 !== __privateGet(this, _in)));
        __privateSet(this, _in, null);
      }
      if (this.styleElement) {
        this.styleElement.remove();
        this.styleElement = null;
      }
    }
    async loadSystemFont({ systemFontInfo: t2, disableFontFace: e2, _inspectFont: i2 }) {
      if (t2 && !__privateGet(this, _en).has(t2.loadedName)) {
        assert(!e2, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
        if (this.isFontLoadingAPISupported) {
          const { loadedName: e3, src: n2, style: s2 } = t2, a2 = new FontFace(e3, n2, s2);
          this.addNativeFontFace(a2);
          try {
            await a2.load();
            __privateGet(this, _en).add(e3);
            i2?.(t2);
          } catch {
            warn(`Cannot load system font: ${t2.baseFontName}, installing it could help to improve PDF rendering.`);
            this.removeNativeFontFace(a2);
          }
          return;
        }
        unreachable("Not implemented: loadSystemFont without the Font Loading API.");
      }
    }
    async bind(t2) {
      if (t2.attached || t2.missingFile && !t2.systemFontInfo) return;
      t2.attached = true;
      if (t2.systemFontInfo) {
        await this.loadSystemFont(t2);
        return;
      }
      if (this.isFontLoadingAPISupported) {
        const e3 = t2.createNativeFontFace();
        if (e3) {
          this.addNativeFontFace(e3);
          try {
            await e3.loaded;
          } catch (i2) {
            warn(`Failed to load font '${e3.family}': '${i2}'.`);
            t2.disableFontFace = true;
            throw i2;
          }
        }
        return;
      }
      const e2 = t2.createFontFaceRule();
      if (e2) {
        this.insertRule(e2);
        if (this.isSyncFontLoadingSupported) return;
        await new Promise((e3) => {
          const i2 = this._queueLoadingCallback(e3);
          this._prepareFontLoadEvent(t2, i2);
        });
      }
    }
    get isFontLoadingAPISupported() {
      return shadow(this, "isFontLoadingAPISupported", !!this._document?.fonts);
    }
    get isSyncFontLoadingSupported() {
      return shadow(this, "isSyncFontLoadingSupported", t || FeatureTest.platform.isFirefox);
    }
    _queueLoadingCallback(t2) {
      const { loadingRequests: e2 } = this, i2 = { done: false, complete: function completeRequest() {
        assert(!i2.done, "completeRequest() cannot be called twice.");
        i2.done = true;
        for (; e2.length > 0 && e2[0].done; ) {
          const t3 = e2.shift();
          setTimeout(t3.callback, 0);
        }
      }, callback: t2 };
      e2.push(i2);
      return i2;
    }
    get _loadTestFont() {
      return shadow(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="));
    }
    _prepareFontLoadEvent(t2, e2) {
      function int32(t3, e3) {
        return t3.charCodeAt(e3) << 24 | t3.charCodeAt(e3 + 1) << 16 | t3.charCodeAt(e3 + 2) << 8 | 255 & t3.charCodeAt(e3 + 3);
      }
      function spliceString(t3, e3, i3, n3) {
        return t3.substring(0, e3) + n3 + t3.substring(e3 + i3);
      }
      let i2, n2;
      const s2 = this._document.createElement("canvas");
      s2.width = 1;
      s2.height = 1;
      const a2 = s2.getContext("2d");
      let r2 = 0;
      const o2 = `lt${Date.now()}${this.loadTestFontId++}`;
      let l2 = this._loadTestFont;
      l2 = spliceString(l2, 976, o2.length, o2);
      const h2 = 1482184792;
      let c2 = int32(l2, 16);
      for (i2 = 0, n2 = o2.length - 3; i2 < n2; i2 += 4) c2 = c2 - h2 + int32(o2, i2) | 0;
      i2 < o2.length && (c2 = c2 - h2 + int32(o2 + "XXX", i2) | 0);
      l2 = spliceString(l2, 16, 4, (function string32(t3) {
        return String.fromCharCode(t3 >> 24 & 255, t3 >> 16 & 255, t3 >> 8 & 255, 255 & t3);
      })(c2));
      const d2 = `@font-face {font-family:"${o2}";src:${`url(data:font/opentype;base64,${btoa(l2)});`}}`;
      this.insertRule(d2);
      const u2 = this._document.createElement("div");
      u2.style.visibility = "hidden";
      u2.style.width = u2.style.height = "10px";
      u2.style.position = "absolute";
      u2.style.top = u2.style.left = "0px";
      for (const e3 of [t2.loadedName, o2]) {
        const t3 = this._document.createElement("span");
        t3.textContent = "Hi";
        t3.style.fontFamily = e3;
        u2.append(t3);
      }
      this._document.body.append(u2);
      !(function isFontReady(t3, e3) {
        if (++r2 > 30) {
          warn("Load test font never loaded.");
          e3();
          return;
        }
        a2.font = "30px " + t3;
        a2.fillText(".", 0, 20);
        a2.getImageData(0, 0, 1, 1).data[3] > 0 ? e3() : setTimeout(isFontReady.bind(null, t3, e3));
      })(o2, () => {
        u2.remove();
        e2.complete();
      });
    }
  };
  _en = new WeakMap();
  _in = new WeakMap();
  _FontLoader_instances = new WeakSet();
  nn_fn = function() {
    if (__privateGet(this, _in)) return __privateGet(this, _in);
    const t2 = this._document.defaultView?.CSSStyleSheet || globalThis.CSSStyleSheet;
    if (!this.styleElement && t2) {
      const { adoptedStyleSheets: e2 } = this._document;
      if (e2) {
        const i2 = new t2();
        e2.push(i2);
        return __privateSet(this, _in, i2);
      }
    }
    if (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
    }
    return __privateSet(this, _in, this.styleElement.sheet);
  };
  var _sn;
  var FontFaceObject = class {
    constructor(t2, e2 = null, i2, n2) {
      __publicField(this, "compiledGlyphs", /* @__PURE__ */ Object.create(null));
      __privateAdd(this, _sn);
      __privateSet(this, _sn, t2);
      this._inspectFont = e2;
      i2 && (this.charProcOperatorList = i2);
      n2 && Object.assign(this, n2);
    }
    createNativeFontFace() {
      if (!this.data || this.disableFontFace) return null;
      let t2;
      if (this.cssFontInfo) {
        const e2 = { weight: this.cssFontInfo.fontWeight };
        this.cssFontInfo.italicAngle && (e2.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
        t2 = new FontFace(this.cssFontInfo.fontFamily, this.data, e2);
      } else t2 = new FontFace(this.loadedName, this.data, {});
      this._inspectFont?.(this);
      return t2;
    }
    createFontFaceRule() {
      if (!this.data || this.disableFontFace) return null;
      const t2 = `url(data:${this.mimetype};base64,${this.data.toBase64()});`;
      let e2;
      if (this.cssFontInfo) {
        let i2 = `font-weight: ${this.cssFontInfo.fontWeight};`;
        this.cssFontInfo.italicAngle && (i2 += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
        e2 = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i2}src:${t2}}`;
      } else e2 = `@font-face {font-family:"${this.loadedName}";src:${t2}}`;
      this._inspectFont?.(this, t2);
      return e2;
    }
    getPathGenerator(t2, e2) {
      if (void 0 !== this.compiledGlyphs[e2]) return this.compiledGlyphs[e2];
      const i2 = this.loadedName + "_path_" + e2;
      let n2;
      try {
        n2 = t2.get(i2);
      } catch (t3) {
        warn(`getPathGenerator - ignoring character: "${t3}".`);
      }
      const s2 = makePathFromDrawOPS(n2?.path);
      this.fontExtraProperties || t2.delete(i2);
      return this.compiledGlyphs[e2] = s2;
    }
    get black() {
      return __privateGet(this, _sn).black;
    }
    get bold() {
      return __privateGet(this, _sn).bold;
    }
    get disableFontFace() {
      return __privateGet(this, _sn).disableFontFace;
    }
    set disableFontFace(t2) {
      shadow(this, "disableFontFace", !!t2);
    }
    get fontExtraProperties() {
      return __privateGet(this, _sn).fontExtraProperties;
    }
    get isInvalidPDFjsFont() {
      return __privateGet(this, _sn).isInvalidPDFjsFont;
    }
    get isType3Font() {
      return __privateGet(this, _sn).isType3Font;
    }
    get italic() {
      return __privateGet(this, _sn).italic;
    }
    get missingFile() {
      return __privateGet(this, _sn).missingFile;
    }
    get remeasure() {
      return __privateGet(this, _sn).remeasure;
    }
    get vertical() {
      return __privateGet(this, _sn).vertical;
    }
    get ascent() {
      return __privateGet(this, _sn).ascent;
    }
    get defaultWidth() {
      return __privateGet(this, _sn).defaultWidth;
    }
    get descent() {
      return __privateGet(this, _sn).descent;
    }
    get bbox() {
      return __privateGet(this, _sn).bbox;
    }
    get fontMatrix() {
      return __privateGet(this, _sn).fontMatrix;
    }
    get fallbackName() {
      return __privateGet(this, _sn).fallbackName;
    }
    get loadedName() {
      return __privateGet(this, _sn).loadedName;
    }
    get mimetype() {
      return __privateGet(this, _sn).mimetype;
    }
    get name() {
      return __privateGet(this, _sn).name;
    }
    get data() {
      return __privateGet(this, _sn).data;
    }
    clearData() {
      __privateGet(this, _sn).clearData();
    }
    get cssFontInfo() {
      return __privateGet(this, _sn).cssFontInfo;
    }
    get systemFontInfo() {
      return __privateGet(this, _sn).systemFontInfo;
    }
    get defaultVMetrics() {
      return __privateGet(this, _sn).defaultVMetrics;
    }
  };
  _sn = new WeakMap();
  var CSS_FONT_INFO = class {
  };
  __publicField(CSS_FONT_INFO, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
  var SYSTEM_FONT_INFO = class {
  };
  __publicField(SYSTEM_FONT_INFO, "strings", ["css", "loadedName", "baseFontName", "src"]);
  var _FONT_INFO = class _FONT_INFO {
  };
  __publicField(_FONT_INFO, "bools", ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"]);
  __publicField(_FONT_INFO, "numbers", ["ascent", "defaultWidth", "descent"]);
  __publicField(_FONT_INFO, "strings", ["fallbackName", "loadedName", "mimetype", "name"]);
  __publicField(_FONT_INFO, "OFFSET_NUMBERS", Math.ceil(2 * _FONT_INFO.bools.length / 8));
  __publicField(_FONT_INFO, "OFFSET_BBOX", _FONT_INFO.OFFSET_NUMBERS + 8 * _FONT_INFO.numbers.length);
  __publicField(_FONT_INFO, "OFFSET_FONT_MATRIX", _FONT_INFO.OFFSET_BBOX + 1 + 8);
  __publicField(_FONT_INFO, "OFFSET_DEFAULT_VMETRICS", _FONT_INFO.OFFSET_FONT_MATRIX + 1 + 48);
  __publicField(_FONT_INFO, "OFFSET_STRINGS", _FONT_INFO.OFFSET_DEFAULT_VMETRICS + 1 + 6);
  var FONT_INFO = _FONT_INFO;
  var PATTERN_INFO = class {
  };
  __publicField(PATTERN_INFO, "KIND", 0);
  __publicField(PATTERN_INFO, "HAS_BBOX", 1);
  __publicField(PATTERN_INFO, "HAS_BACKGROUND", 2);
  __publicField(PATTERN_INFO, "SHADING_TYPE", 3);
  __publicField(PATTERN_INFO, "N_COORD", 4);
  __publicField(PATTERN_INFO, "N_COLOR", 8);
  __publicField(PATTERN_INFO, "N_STOP", 12);
  __publicField(PATTERN_INFO, "N_FIGURES", 16);
  var _an, _rn, _on, _CssFontInfo_instances, ln_fn;
  var CssFontInfo = class {
    constructor(t2) {
      __privateAdd(this, _CssFontInfo_instances);
      __privateAdd(this, _an);
      __privateAdd(this, _rn, new TextDecoder());
      __privateAdd(this, _on);
      __privateSet(this, _an, t2);
      __privateSet(this, _on, new DataView(t2));
    }
    get fontFamily() {
      return __privateMethod(this, _CssFontInfo_instances, ln_fn).call(this, 0);
    }
    get fontWeight() {
      return __privateMethod(this, _CssFontInfo_instances, ln_fn).call(this, 1);
    }
    get italicAngle() {
      return __privateMethod(this, _CssFontInfo_instances, ln_fn).call(this, 2);
    }
  };
  _an = new WeakMap();
  _rn = new WeakMap();
  _on = new WeakMap();
  _CssFontInfo_instances = new WeakSet();
  ln_fn = function(t2) {
    assert(t2 < CSS_FONT_INFO.strings.length, "Invalid string index");
    let e2 = 0;
    for (let i3 = 0; i3 < t2; i3++) e2 += __privateGet(this, _on).getUint32(e2) + 4;
    const i2 = __privateGet(this, _on).getUint32(e2);
    return __privateGet(this, _rn).decode(new Uint8Array(__privateGet(this, _an), e2 + 4, i2));
  };
  var _an2, _rn2, _on2, _SystemFontInfo_instances, ln_fn2;
  var SystemFontInfo = class {
    constructor(t2) {
      __privateAdd(this, _SystemFontInfo_instances);
      __privateAdd(this, _an2);
      __privateAdd(this, _rn2, new TextDecoder());
      __privateAdd(this, _on2);
      __privateSet(this, _an2, t2);
      __privateSet(this, _on2, new DataView(t2));
    }
    get guessFallback() {
      return 0 !== __privateGet(this, _on2).getUint8(0);
    }
    get css() {
      return __privateMethod(this, _SystemFontInfo_instances, ln_fn2).call(this, 0);
    }
    get loadedName() {
      return __privateMethod(this, _SystemFontInfo_instances, ln_fn2).call(this, 1);
    }
    get baseFontName() {
      return __privateMethod(this, _SystemFontInfo_instances, ln_fn2).call(this, 2);
    }
    get src() {
      return __privateMethod(this, _SystemFontInfo_instances, ln_fn2).call(this, 3);
    }
    get style() {
      let t2 = 1;
      t2 += 4 + __privateGet(this, _on2).getUint32(t2);
      const e2 = __privateGet(this, _on2).getUint32(t2), i2 = __privateGet(this, _rn2).decode(new Uint8Array(__privateGet(this, _an2), t2 + 4, e2));
      t2 += 4 + e2;
      const n2 = __privateGet(this, _on2).getUint32(t2);
      return { style: i2, weight: __privateGet(this, _rn2).decode(new Uint8Array(__privateGet(this, _an2), t2 + 4, n2)) };
    }
  };
  _an2 = new WeakMap();
  _rn2 = new WeakMap();
  _on2 = new WeakMap();
  _SystemFontInfo_instances = new WeakSet();
  ln_fn2 = function(t2) {
    assert(t2 < SYSTEM_FONT_INFO.strings.length, "Invalid string index");
    let e2 = 5;
    for (let i3 = 0; i3 < t2; i3++) e2 += __privateGet(this, _on2).getUint32(e2) + 4;
    const i2 = __privateGet(this, _on2).getUint32(e2);
    return __privateGet(this, _rn2).decode(new Uint8Array(__privateGet(this, _an2), e2 + 4, i2));
  };
  var _an3, _rn3, _on3, _FontInfo_instances, hn_fn, cn_fn, dn_fn, ln_fn3, un_fn;
  var FontInfo = class {
    constructor({ buffer: t2, extra: e2 }) {
      __privateAdd(this, _FontInfo_instances);
      __privateAdd(this, _an3);
      __privateAdd(this, _rn3, new TextDecoder());
      __privateAdd(this, _on3);
      __privateSet(this, _an3, t2);
      __privateSet(this, _on3, new DataView(t2));
      e2 && Object.assign(this, e2);
    }
    get black() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 0);
    }
    get bold() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 1);
    }
    get disableFontFace() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 2);
    }
    get fontExtraProperties() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 3);
    }
    get isInvalidPDFjsFont() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 4);
    }
    get isType3Font() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 5);
    }
    get italic() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 6);
    }
    get missingFile() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 7);
    }
    get remeasure() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 8);
    }
    get vertical() {
      return __privateMethod(this, _FontInfo_instances, hn_fn).call(this, 9);
    }
    get ascent() {
      return __privateMethod(this, _FontInfo_instances, cn_fn).call(this, 0);
    }
    get defaultWidth() {
      return __privateMethod(this, _FontInfo_instances, cn_fn).call(this, 1);
    }
    get descent() {
      return __privateMethod(this, _FontInfo_instances, cn_fn).call(this, 2);
    }
    get bbox() {
      return __privateMethod(this, _FontInfo_instances, dn_fn).call(this, FONT_INFO.OFFSET_BBOX, 4, "getInt16", 2);
    }
    get fontMatrix() {
      return __privateMethod(this, _FontInfo_instances, dn_fn).call(this, FONT_INFO.OFFSET_FONT_MATRIX, 6, "getFloat64", 8);
    }
    get defaultVMetrics() {
      return __privateMethod(this, _FontInfo_instances, dn_fn).call(this, FONT_INFO.OFFSET_DEFAULT_VMETRICS, 3, "getInt16", 2);
    }
    get fallbackName() {
      return __privateMethod(this, _FontInfo_instances, ln_fn3).call(this, 0);
    }
    get loadedName() {
      return __privateMethod(this, _FontInfo_instances, ln_fn3).call(this, 1);
    }
    get mimetype() {
      return __privateMethod(this, _FontInfo_instances, ln_fn3).call(this, 2);
    }
    get name() {
      return __privateMethod(this, _FontInfo_instances, ln_fn3).call(this, 3);
    }
    get data() {
      const { offset: t2, length: e2 } = __privateMethod(this, _FontInfo_instances, un_fn).call(this);
      return 0 === e2 ? void 0 : new Uint8Array(__privateGet(this, _an3), t2 + 4, e2);
    }
    clearData() {
      const { offset: t2, length: e2 } = __privateMethod(this, _FontInfo_instances, un_fn).call(this);
      if (0 !== e2) {
        __privateGet(this, _on3).setUint32(t2, 0);
        __privateSet(this, _an3, new Uint8Array(__privateGet(this, _an3), 0, t2 + 4).slice().buffer);
        __privateSet(this, _on3, new DataView(__privateGet(this, _an3)));
      }
    }
    get cssFontInfo() {
      let t2 = FONT_INFO.OFFSET_STRINGS;
      t2 += 4 + __privateGet(this, _on3).getUint32(t2);
      t2 += 4 + __privateGet(this, _on3).getUint32(t2);
      const e2 = __privateGet(this, _on3).getUint32(t2);
      if (0 === e2) return null;
      const i2 = new Uint8Array(e2);
      i2.set(new Uint8Array(__privateGet(this, _an3), t2 + 4, e2));
      return new CssFontInfo(i2.buffer);
    }
    get systemFontInfo() {
      let t2 = FONT_INFO.OFFSET_STRINGS;
      t2 += 4 + __privateGet(this, _on3).getUint32(t2);
      const e2 = __privateGet(this, _on3).getUint32(t2);
      if (0 === e2) return null;
      const i2 = new Uint8Array(e2);
      i2.set(new Uint8Array(__privateGet(this, _an3), t2 + 4, e2));
      return new SystemFontInfo(i2.buffer);
    }
  };
  _an3 = new WeakMap();
  _rn3 = new WeakMap();
  _on3 = new WeakMap();
  _FontInfo_instances = new WeakSet();
  hn_fn = function(t2) {
    assert(t2 < FONT_INFO.bools.length, "Invalid boolean index");
    const e2 = Math.floor(t2 / 4), i2 = 2 * t2 % 8, n2 = __privateGet(this, _on3).getUint8(e2) >> i2 & 3;
    return 0 === n2 ? void 0 : 2 === n2;
  };
  cn_fn = function(t2) {
    assert(t2 < FONT_INFO.numbers.length, "Invalid number index");
    return __privateGet(this, _on3).getFloat64(FONT_INFO.OFFSET_NUMBERS + 8 * t2);
  };
  dn_fn = function(t2, e2, i2, n2) {
    const s2 = __privateGet(this, _on3).getUint8(t2);
    if (0 === s2) return;
    assert(s2 === e2, "Invalid array length.");
    t2 += 1;
    const a2 = new Array(s2);
    for (let e3 = 0; e3 < s2; e3++) {
      a2[e3] = __privateGet(this, _on3)[i2](t2, true);
      t2 += n2;
    }
    return a2;
  };
  ln_fn3 = function(t2) {
    assert(t2 < FONT_INFO.strings.length, "Invalid string index");
    let e2 = FONT_INFO.OFFSET_STRINGS + 4;
    for (let i3 = 0; i3 < t2; i3++) e2 += __privateGet(this, _on3).getUint32(e2) + 4;
    const i2 = __privateGet(this, _on3).getUint32(e2);
    return __privateGet(this, _rn3).decode(new Uint8Array(__privateGet(this, _an3), e2 + 4, i2));
  };
  un_fn = function() {
    let t2 = FONT_INFO.OFFSET_STRINGS;
    t2 += 4 + __privateGet(this, _on3).getUint32(t2);
    t2 += 4 + __privateGet(this, _on3).getUint32(t2);
    t2 += 4 + __privateGet(this, _on3).getUint32(t2);
    return { offset: t2, length: __privateGet(this, _on3).getUint32(t2) };
  };
  var PatternInfo = class {
    constructor(t2) {
      this.buffer = t2;
      this.view = new DataView(t2);
      this.data = new Uint8Array(t2);
    }
    getIR() {
      const t2 = this.view, i2 = this.data[PATTERN_INFO.KIND], n2 = !!this.data[PATTERN_INFO.HAS_BBOX], s2 = !!this.data[PATTERN_INFO.HAS_BACKGROUND], a2 = t2.getUint32(PATTERN_INFO.N_COORD, true), r2 = t2.getUint32(PATTERN_INFO.N_COLOR, true), o2 = t2.getUint32(PATTERN_INFO.N_STOP, true);
      let l2 = 20;
      const h2 = new Float32Array(this.buffer, l2, 2 * a2);
      l2 += 8 * a2;
      const c2 = new Uint8Array(this.buffer, l2, 4 * r2);
      l2 += 4 * r2;
      const d2 = [];
      for (let e2 = 0; e2 < o2; ++e2) {
        const e3 = t2.getFloat32(l2, true);
        l2 += 4;
        const i3 = t2.getUint32(l2, true);
        l2 += 4;
        d2.push([e3, `#${i3.toString(16).padStart(6, "0")}`]);
      }
      let u2 = null;
      if (n2) {
        u2 = [];
        for (let e2 = 0; e2 < 4; ++e2) {
          u2.push(t2.getFloat32(l2, true));
          l2 += 4;
        }
      }
      let p2 = null;
      if (s2) {
        p2 = new Uint8Array(this.buffer, l2, 3);
        l2 += 3;
      }
      if (1 === i2) return ["RadialAxial", "axial", u2, d2, Array.from(h2.slice(0, 2)), Array.from(h2.slice(2, 4)), null, null];
      if (2 === i2) return ["RadialAxial", "radial", u2, d2, [h2[0], h2[1]], [h2[3], h2[4]], h2[2], h2[5]];
      if (3 === i2) {
        const t3 = this.data[PATTERN_INFO.SHADING_TYPE];
        let i3 = null;
        if (h2.length > 0) {
          i3 = e.slice();
          for (let t4 = 0, e2 = h2.length; t4 < e2; t4 += 2) Util.pointBoundingBox(h2[t4], h2[t4 + 1], i3);
        }
        return ["Mesh", t3, h2, c2, a2, i3, u2, p2];
      }
      throw new Error(`Unsupported pattern kind: ${i2}`);
    }
  };
  var _an4;
  var FontPathInfo = class {
    constructor(t2) {
      __privateAdd(this, _an4);
      __privateSet(this, _an4, t2);
    }
    get path() {
      return FeatureTest.isFloat16ArraySupported ? new Float16Array(__privateGet(this, _an4)) : new Float32Array(__privateGet(this, _an4));
    }
  };
  _an4 = new WeakMap();
  function getFactoryUrlProp(t2) {
    if ("string" != typeof t2) return null;
    if (t2.endsWith("/")) return t2;
    throw new Error(`Invalid factory url: "${t2}" must include trailing slash.`);
  }
  var isRefProxy = (t2) => "object" == typeof t2 && Number.isInteger(t2?.num) && t2.num >= 0 && Number.isInteger(t2?.gen) && t2.gen >= 0;
  var ht = function _isValidExplicitDest(t2, e2, i2) {
    if (!Array.isArray(i2) || i2.length < 2) return false;
    const [n2, s2, ...a2] = i2;
    if (!t2(n2) && !Number.isInteger(n2)) return false;
    if (!e2(s2)) return false;
    const r2 = a2.length;
    let o2 = true;
    switch (s2.name) {
      case "XYZ":
        if (r2 < 2 || r2 > 3) return false;
        break;
      case "Fit":
      case "FitB":
        return 0 === r2;
      case "FitH":
      case "FitBH":
      case "FitV":
      case "FitBV":
        if (r2 > 1) return false;
        break;
      case "FitR":
        if (4 !== r2) return false;
        o2 = false;
        break;
      default:
        return false;
    }
    for (const t3 of a2) if (!("number" == typeof t3 || o2 && null === t3)) return false;
    return true;
  }.bind(null, isRefProxy, (t2) => "object" == typeof t2 && "string" == typeof t2?.name);
  var _pn, _gn;
  var LoopbackPort = class {
    constructor() {
      __privateAdd(this, _pn, /* @__PURE__ */ new Map());
      __privateAdd(this, _gn, Promise.resolve());
    }
    postMessage(t2, e2) {
      const i2 = { data: structuredClone(t2, e2 ? { transfer: e2 } : null) };
      __privateGet(this, _gn).then(() => {
        for (const [t3] of __privateGet(this, _pn)) t3.call(this, i2);
      });
    }
    addEventListener(t2, e2, i2 = null) {
      let n2 = null;
      if (i2?.signal instanceof AbortSignal) {
        const { signal: s2 } = i2;
        if (s2.aborted) {
          warn("LoopbackPort - cannot use an `aborted` signal.");
          return;
        }
        const onAbort = () => this.removeEventListener(t2, e2);
        n2 = () => s2.removeEventListener("abort", onAbort);
        s2.addEventListener("abort", onAbort);
      }
      __privateGet(this, _pn).set(e2, n2);
    }
    removeEventListener(t2, e2) {
      const i2 = __privateGet(this, _pn).get(e2);
      i2?.();
      __privateGet(this, _pn).delete(e2);
    }
    terminate() {
      for (const [, t2] of __privateGet(this, _pn)) t2?.();
      __privateGet(this, _pn).clear();
    }
  };
  _pn = new WeakMap();
  _gn = new WeakMap();
  var ct = 1;
  var dt = 2;
  var ut = 1;
  var pt = 2;
  var gt = 3;
  var mt = 4;
  var ft = 5;
  var bt = 6;
  var yt = 7;
  var vt = 8;
  function onFn() {
  }
  function wrapReason(t2) {
    if (t2 instanceof AbortException || t2 instanceof InvalidPDFException || t2 instanceof PasswordException || t2 instanceof ResponseException || t2 instanceof UnknownErrorException) return t2;
    t2 instanceof Error || "object" == typeof t2 && null !== t2 || unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
    switch (t2.name) {
      case "AbortException":
        return new AbortException(t2.message);
      case "InvalidPDFException":
        return new InvalidPDFException(t2.message);
      case "PasswordException":
        return new PasswordException(t2.message, t2.code);
      case "ResponseException":
        return new ResponseException(t2.message, t2.status, t2.missing);
      case "UnknownErrorException":
        return new UnknownErrorException(t2.message, t2.details);
    }
    return new UnknownErrorException(t2.message, t2.toString());
  }
  var _mn, _MessageHandler_instances, fn_fn, yn_fn, bn_fn, vn_fn;
  var MessageHandler = class {
    constructor(t2, e2, i2) {
      __privateAdd(this, _MessageHandler_instances);
      __privateAdd(this, _mn, new AbortController());
      this.sourceName = t2;
      this.targetName = e2;
      this.comObj = i2;
      this.callbackId = 1;
      this.streamId = 1;
      this.streamSinks = /* @__PURE__ */ Object.create(null);
      this.streamControllers = /* @__PURE__ */ Object.create(null);
      this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
      this.actionHandler = /* @__PURE__ */ Object.create(null);
      i2.addEventListener("message", __privateMethod(this, _MessageHandler_instances, fn_fn).bind(this), { signal: __privateGet(this, _mn).signal });
    }
    on(t2, e2) {
      const i2 = this.actionHandler;
      if (i2[t2]) throw new Error(`There is already an actionName called "${t2}"`);
      i2[t2] = e2;
    }
    send(t2, e2, i2) {
      this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t2, data: e2 }, i2);
    }
    sendWithPromise(t2, e2, i2) {
      const n2 = this.callbackId++, s2 = Promise.withResolvers();
      this.callbackCapabilities[n2] = s2;
      try {
        this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t2, callbackId: n2, data: e2 }, i2);
      } catch (t3) {
        s2.reject(t3);
      }
      return s2.promise;
    }
    sendWithStream(t2, e2, i2, n2) {
      const s2 = this.streamId++, a2 = this.sourceName, r2 = this.targetName, o2 = this.comObj;
      return new ReadableStream({ start: (i3) => {
        const l2 = Promise.withResolvers();
        this.streamControllers[s2] = { controller: i3, startCall: l2, pullCall: null, cancelCall: null, isClosed: false };
        o2.postMessage({ sourceName: a2, targetName: r2, action: t2, streamId: s2, data: e2, desiredSize: i3.desiredSize }, n2);
        return l2.promise;
      }, pull: (t3) => {
        const e3 = Promise.withResolvers();
        this.streamControllers[s2].pullCall = e3;
        o2.postMessage({ sourceName: a2, targetName: r2, stream: bt, streamId: s2, desiredSize: t3.desiredSize });
        return e3.promise;
      }, cancel: (t3) => {
        assert(t3 instanceof Error, "cancel must have a valid reason");
        const e3 = Promise.withResolvers();
        this.streamControllers[s2].cancelCall = e3;
        this.streamControllers[s2].isClosed = true;
        o2.postMessage({ sourceName: a2, targetName: r2, stream: ut, streamId: s2, reason: wrapReason(t3) });
        return e3.promise;
      } }, i2);
    }
    destroy() {
      __privateGet(this, _mn)?.abort();
      __privateSet(this, _mn, null);
    }
  };
  _mn = new WeakMap();
  _MessageHandler_instances = new WeakSet();
  fn_fn = function({ data: t2 }) {
    if (t2.targetName !== this.sourceName) return;
    if (t2.stream) {
      __privateMethod(this, _MessageHandler_instances, bn_fn).call(this, t2);
      return;
    }
    if (t2.callback) {
      const e3 = t2.callbackId, i2 = this.callbackCapabilities[e3];
      if (!i2) throw new Error(`Cannot resolve callback ${e3}`);
      delete this.callbackCapabilities[e3];
      if (t2.callback === ct) i2.resolve(t2.data);
      else {
        if (t2.callback !== dt) throw new Error("Unexpected callback case");
        i2.reject(wrapReason(t2.reason));
      }
      return;
    }
    const e2 = this.actionHandler[t2.action];
    if (!e2) throw new Error(`Unknown action from worker: ${t2.action}`);
    if (t2.callbackId) {
      const i2 = this.sourceName, n2 = t2.sourceName, s2 = this.comObj;
      Promise.try(e2, t2.data).then(function(e3) {
        s2.postMessage({ sourceName: i2, targetName: n2, callback: ct, callbackId: t2.callbackId, data: e3 });
      }, function(e3) {
        s2.postMessage({ sourceName: i2, targetName: n2, callback: dt, callbackId: t2.callbackId, reason: wrapReason(e3) });
      });
      return;
    }
    t2.streamId ? __privateMethod(this, _MessageHandler_instances, yn_fn).call(this, t2) : e2(t2.data);
  };
  yn_fn = function(t2) {
    const e2 = t2.streamId, i2 = this.sourceName, n2 = t2.sourceName, s2 = this.comObj, a2 = this, r2 = this.actionHandler[t2.action], o2 = { enqueue(t3, a3 = 1, r3) {
      if (this.isCancelled) return;
      const o3 = this.desiredSize;
      this.desiredSize -= a3;
      if (o3 > 0 && this.desiredSize <= 0) {
        this.sinkCapability = Promise.withResolvers();
        this.ready = this.sinkCapability.promise;
      }
      s2.postMessage({ sourceName: i2, targetName: n2, stream: mt, streamId: e2, chunk: t3 }, r3);
    }, close() {
      if (!this.isCancelled) {
        this.isCancelled = true;
        s2.postMessage({ sourceName: i2, targetName: n2, stream: gt, streamId: e2 });
        delete a2.streamSinks[e2];
      }
    }, error(t3) {
      assert(t3 instanceof Error, "error must have a valid reason");
      if (!this.isCancelled) {
        this.isCancelled = true;
        s2.postMessage({ sourceName: i2, targetName: n2, stream: ft, streamId: e2, reason: wrapReason(t3) });
      }
    }, sinkCapability: Promise.withResolvers(), onPull: null, onCancel: null, isCancelled: false, desiredSize: t2.desiredSize, ready: null };
    o2.sinkCapability.resolve();
    o2.ready = o2.sinkCapability.promise;
    this.streamSinks[e2] = o2;
    Promise.try(r2, t2.data, o2).then(function() {
      s2.postMessage({ sourceName: i2, targetName: n2, stream: vt, streamId: e2, success: true });
    }, function(t3) {
      s2.postMessage({ sourceName: i2, targetName: n2, stream: vt, streamId: e2, reason: wrapReason(t3) });
    });
  };
  bn_fn = function(t2) {
    const e2 = t2.streamId, i2 = this.sourceName, n2 = t2.sourceName, s2 = this.comObj, a2 = this.streamControllers[e2], r2 = this.streamSinks[e2];
    switch (t2.stream) {
      case vt:
        t2.success ? a2.startCall.resolve() : a2.startCall.reject(wrapReason(t2.reason));
        break;
      case yt:
        t2.success ? a2.pullCall.resolve() : a2.pullCall.reject(wrapReason(t2.reason));
        break;
      case bt:
        if (!r2) {
          s2.postMessage({ sourceName: i2, targetName: n2, stream: yt, streamId: e2, success: true });
          break;
        }
        r2.desiredSize <= 0 && t2.desiredSize > 0 && r2.sinkCapability.resolve();
        r2.desiredSize = t2.desiredSize;
        Promise.try(r2.onPull || onFn).then(function() {
          s2.postMessage({ sourceName: i2, targetName: n2, stream: yt, streamId: e2, success: true });
        }, function(t3) {
          s2.postMessage({ sourceName: i2, targetName: n2, stream: yt, streamId: e2, reason: wrapReason(t3) });
        });
        break;
      case mt:
        assert(a2, "enqueue should have stream controller");
        if (a2.isClosed) break;
        a2.controller.enqueue(t2.chunk);
        break;
      case gt:
        assert(a2, "close should have stream controller");
        if (a2.isClosed) break;
        a2.isClosed = true;
        a2.controller.close();
        __privateMethod(this, _MessageHandler_instances, vn_fn).call(this, a2, e2);
        break;
      case ft:
        assert(a2, "error should have stream controller");
        a2.controller.error(wrapReason(t2.reason));
        __privateMethod(this, _MessageHandler_instances, vn_fn).call(this, a2, e2);
        break;
      case pt:
        t2.success ? a2.cancelCall.resolve() : a2.cancelCall.reject(wrapReason(t2.reason));
        __privateMethod(this, _MessageHandler_instances, vn_fn).call(this, a2, e2);
        break;
      case ut:
        if (!r2) break;
        const o2 = wrapReason(t2.reason);
        Promise.try(r2.onCancel || onFn, o2).then(function() {
          s2.postMessage({ sourceName: i2, targetName: n2, stream: pt, streamId: e2, success: true });
        }, function(t3) {
          s2.postMessage({ sourceName: i2, targetName: n2, stream: pt, streamId: e2, reason: wrapReason(t3) });
        });
        r2.sinkCapability.reject(o2);
        r2.isCancelled = true;
        delete this.streamSinks[e2];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  };
  vn_fn = async function(t2, e2) {
    await Promise.allSettled([t2.startCall?.promise, t2.pullCall?.promise, t2.cancelCall?.promise]);
    delete this.streamControllers[e2];
  };
  var _An;
  var BaseBinaryDataFactory = class {
    constructor({ cMapUrl: t2 = null, standardFontDataUrl: e2 = null, wasmUrl: i2 = null }) {
      __privateAdd(this, _An, Object.freeze({ cMapUrl: "CMap", standardFontDataUrl: "font", wasmUrl: "wasm" }));
      this.cMapUrl = t2;
      this.standardFontDataUrl = e2;
      this.wasmUrl = i2;
    }
    async fetch({ kind: t2, filename: e2 }) {
      switch (t2) {
        case "cMapUrl":
        case "standardFontDataUrl":
        case "wasmUrl":
          break;
        default:
          unreachable(`Not implemented: ${t2}`);
      }
      const i2 = this[t2];
      if (!i2) throw new Error(`Ensure that the \`${t2}\` API parameter is provided.`);
      const n2 = `${i2}${e2}`;
      return this._fetch(n2, t2).catch((e3) => {
        throw new Error(`Unable to load ${__privateGet(this, _An)[t2]} data at: ${n2}`);
      });
    }
    async _fetch(t2, e2) {
      unreachable("Abstract method `_fetch` called.");
    }
  };
  _An = new WeakMap();
  var DOMBinaryDataFactory = class extends BaseBinaryDataFactory {
    async _fetch(t2, e2) {
      const i2 = "cMapUrl" !== e2 || t2.endsWith(".bcmap") ? "bytes" : "text", n2 = await fetchData(t2, i2);
      return n2 instanceof Uint8Array ? n2 : stringToBytes(n2);
    }
  };
  var _wn;
  var BaseCanvasFactory = class {
    constructor({ enableHWA: t2 = false }) {
      __privateAdd(this, _wn, false);
      __privateSet(this, _wn, t2);
    }
    create(t2, e2) {
      if (t2 <= 0 || e2 <= 0) throw new Error("Invalid canvas size");
      const i2 = this._createCanvas(t2, e2);
      return { canvas: i2, context: i2.getContext("2d", { willReadFrequently: !__privateGet(this, _wn) }) };
    }
    reset({ canvas: t2 }, e2, i2) {
      if (!t2) throw new Error("Canvas is not specified");
      if (e2 <= 0 || i2 <= 0) throw new Error("Invalid canvas size");
      t2.width = e2;
      t2.height = i2;
    }
    destroy(t2) {
      const { canvas: e2 } = t2;
      if (!e2) throw new Error("Canvas is not specified");
      e2.width = e2.height = 0;
      t2.canvas = null;
      t2.context = null;
    }
    _createCanvas(t2, e2) {
      unreachable("Abstract method `_createCanvas` called.");
    }
  };
  _wn = new WeakMap();
  var DOMCanvasFactory = class extends BaseCanvasFactory {
    constructor({ ownerDocument: t2 = globalThis.document, enableHWA: e2 = false }) {
      super({ enableHWA: e2 });
      this._document = t2;
    }
    _createCanvas(t2, e2) {
      const i2 = this._document.createElement("canvas");
      i2.width = t2;
      i2.height = e2;
      return i2;
    }
  };
  var BaseFilterFactory = class {
    addFilter(t2) {
      return "none";
    }
    addHCMFilter(t2, e2) {
      return "none";
    }
    addAlphaFilter(t2) {
      return "none";
    }
    addLuminosityFilter(t2) {
      return "none";
    }
    addKnockoutFilter(t2 = 0) {
      return "none";
    }
    addHighlightHCMFilter(t2, e2, i2, n2, s2) {
      return "none";
    }
    addSelectionHCMFilter(t2, e2) {
      return "none";
    }
    addSelectionFilter() {
      return "none";
    }
    createSelectionStyle(t2 = null) {
      return null;
    }
    destroy(t2 = false) {
    }
  };
  var _xn, _Cn, _En, _Sn, _Tn, _kn, _T3, _DOMFilterFactory_instances, __get, _n_get, Mn_get, Dn_fn, Pn_fn, Rn_fn, Ln_fn, In_fn, Un_fn, Fn_fn, On_fn, Bn_fn, Hn_fn, Nn_fn;
  var DOMFilterFactory = class extends BaseFilterFactory {
    constructor({ docId: t2, ownerDocument: e2 = globalThis.document }) {
      super();
      __privateAdd(this, _DOMFilterFactory_instances);
      __privateAdd(this, _xn);
      __privateAdd(this, _Cn);
      __privateAdd(this, _En);
      __privateAdd(this, _Sn);
      __privateAdd(this, _Tn);
      __privateAdd(this, _kn);
      __privateAdd(this, _T3, 0);
      __privateSet(this, _Sn, t2);
      __privateSet(this, _Tn, e2);
    }
    addFilter(t2) {
      if (!t2) return "none";
      let e2 = __privateGet(this, _DOMFilterFactory_instances, __get).get(t2);
      if (e2) return e2;
      const [i2, n2, s2] = __privateMethod(this, _DOMFilterFactory_instances, Dn_fn).call(this, t2), a2 = 1 === t2.length ? i2 : `${i2}${n2}${s2}`;
      e2 = __privateGet(this, _DOMFilterFactory_instances, __get).get(a2);
      if (e2) {
        __privateGet(this, _DOMFilterFactory_instances, __get).set(t2, e2);
        return e2;
      }
      const r2 = `g_${__privateGet(this, _Sn)}_transfer_map_${__privateWrapper(this, _T3)._++}`, o2 = __privateMethod(this, _DOMFilterFactory_instances, Pn_fn).call(this, r2);
      __privateGet(this, _DOMFilterFactory_instances, __get).set(t2, o2);
      __privateGet(this, _DOMFilterFactory_instances, __get).set(a2, o2);
      const l2 = __privateMethod(this, _DOMFilterFactory_instances, In_fn).call(this, r2);
      __privateMethod(this, _DOMFilterFactory_instances, Fn_fn).call(this, i2, n2, s2, l2);
      return o2;
    }
    addHCMFilter(t2, e2) {
      const i2 = `${t2}-${e2}`, n2 = "base";
      let s2 = __privateGet(this, _DOMFilterFactory_instances, _n_get).get(n2);
      if (s2?.key === i2) return s2.url;
      if (s2) {
        s2.filter?.remove();
        s2.key = i2;
        s2.url = "none";
        s2.filter = null;
      } else {
        s2 = { key: i2, url: "none", filter: null };
        __privateGet(this, _DOMFilterFactory_instances, _n_get).set(n2, s2);
      }
      if (!t2 || !e2) return s2.url;
      const a2 = __privateMethod(this, _DOMFilterFactory_instances, Bn_fn).call(this, t2);
      t2 = Util.makeHexColor(...a2);
      const r2 = __privateMethod(this, _DOMFilterFactory_instances, Bn_fn).call(this, e2);
      e2 = Util.makeHexColor(...r2);
      __privateGet(this, _DOMFilterFactory_instances, Mn_get).style.color = "";
      if ("#000000" === t2 && "#ffffff" === e2 || t2 === e2) return s2.url;
      const o2 = new Array(256);
      for (let t3 = 0; t3 <= 255; t3++) {
        const e3 = t3 / 255;
        o2[t3] = e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4;
      }
      const l2 = o2.join(","), h2 = `g_${__privateGet(this, _Sn)}_hcm_filter`, c2 = s2.filter = __privateMethod(this, _DOMFilterFactory_instances, In_fn).call(this, h2);
      __privateMethod(this, _DOMFilterFactory_instances, Fn_fn).call(this, l2, l2, l2, c2);
      __privateMethod(this, _DOMFilterFactory_instances, Ln_fn).call(this, c2);
      const getSteps = (t3, e3) => {
        const i3 = a2[t3] / 255, n3 = r2[t3] / 255, s3 = new Array(e3 + 1);
        for (let t4 = 0; t4 <= e3; t4++) s3[t4] = i3 + t4 / e3 * (n3 - i3);
        return s3.join(",");
      };
      __privateMethod(this, _DOMFilterFactory_instances, Fn_fn).call(this, getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), c2);
      s2.url = __privateMethod(this, _DOMFilterFactory_instances, Pn_fn).call(this, h2);
      return s2.url;
    }
    addSelectionHCMFilter(t2, e2) {
      return this.addHighlightHCMFilter("selection", t2, e2, "HighlightText", "Highlight");
    }
    addSelectionFilter() {
      return this.addHighlightHCMFilter("selection_default", "black", "white", "HighlightText", "Highlight");
    }
    createSelectionStyle(t2 = null) {
      const e2 = t2 ? this.addSelectionHCMFilter(t2.foreground, t2.background) : this.addSelectionFilter();
      return "none" !== e2 && FeatureTest.platform.isFirefox ? { "backdrop-filter": e2, "background-color": "transparent" } : null;
    }
    addAlphaFilter(t2) {
      let e2 = __privateGet(this, _DOMFilterFactory_instances, __get).get(t2);
      if (e2) return e2;
      const [i2] = __privateMethod(this, _DOMFilterFactory_instances, Dn_fn).call(this, [t2]), n2 = `alpha_${i2}`;
      e2 = __privateGet(this, _DOMFilterFactory_instances, __get).get(n2);
      if (e2) {
        __privateGet(this, _DOMFilterFactory_instances, __get).set(t2, e2);
        return e2;
      }
      const s2 = `g_${__privateGet(this, _Sn)}_alpha_map_${__privateWrapper(this, _T3)._++}`, a2 = __privateMethod(this, _DOMFilterFactory_instances, Pn_fn).call(this, s2);
      __privateGet(this, _DOMFilterFactory_instances, __get).set(t2, a2);
      __privateGet(this, _DOMFilterFactory_instances, __get).set(n2, a2);
      const r2 = __privateMethod(this, _DOMFilterFactory_instances, In_fn).call(this, s2);
      __privateMethod(this, _DOMFilterFactory_instances, On_fn).call(this, i2, r2);
      return a2;
    }
    addLuminosityFilter(t2) {
      let e2, i2, n2 = __privateGet(this, _DOMFilterFactory_instances, __get).get(t2 || "luminosity");
      if (n2) return n2;
      if (t2) {
        [e2] = __privateMethod(this, _DOMFilterFactory_instances, Dn_fn).call(this, [t2]);
        i2 = `luminosity_${e2}`;
      } else i2 = "luminosity";
      n2 = __privateGet(this, _DOMFilterFactory_instances, __get).get(i2);
      if (n2) {
        __privateGet(this, _DOMFilterFactory_instances, __get).set(t2, n2);
        return n2;
      }
      const s2 = `g_${__privateGet(this, _Sn)}_luminosity_map_${__privateWrapper(this, _T3)._++}`, a2 = __privateMethod(this, _DOMFilterFactory_instances, Pn_fn).call(this, s2);
      __privateGet(this, _DOMFilterFactory_instances, __get).set(t2, a2);
      __privateGet(this, _DOMFilterFactory_instances, __get).set(i2, a2);
      const r2 = __privateMethod(this, _DOMFilterFactory_instances, In_fn).call(this, s2);
      __privateMethod(this, _DOMFilterFactory_instances, Rn_fn).call(this, r2);
      t2 && __privateMethod(this, _DOMFilterFactory_instances, On_fn).call(this, e2, r2);
      return a2;
    }
    addKnockoutFilter(t2 = 0) {
      const e2 = t2 > 0 ? Math.min(1 / t2, 1e6) : 1e6, i2 = `knockout_${e2}`, n2 = __privateGet(this, _DOMFilterFactory_instances, __get).get(i2);
      if (n2) return n2;
      const s2 = `g_${__privateGet(this, _Sn)}_knockout_filter_${__privateWrapper(this, _T3)._++}`, r2 = __privateMethod(this, _DOMFilterFactory_instances, Pn_fn).call(this, s2);
      __privateGet(this, _DOMFilterFactory_instances, __get).set(i2, r2);
      const o2 = __privateMethod(this, _DOMFilterFactory_instances, In_fn).call(this, s2), l2 = __privateGet(this, _Tn).createElementNS(a, "feComponentTransfer");
      o2.append(l2);
      const h2 = __privateGet(this, _Tn).createElementNS(a, "feFuncA");
      h2.setAttribute("type", "linear");
      h2.setAttribute("slope", `${e2}`);
      h2.setAttribute("intercept", "0");
      l2.append(h2);
      return r2;
    }
    addHighlightHCMFilter(t2, e2, i2, n2, s2) {
      const a2 = `${e2}-${i2}-${n2}-${s2}`;
      let r2 = __privateGet(this, _DOMFilterFactory_instances, _n_get).get(t2);
      if (r2?.key === a2) return r2.url;
      if (r2) {
        r2.filter?.remove();
        r2.key = a2;
        r2.url = "none";
        r2.filter = null;
      } else {
        r2 = { key: a2, url: "none", filter: null };
        __privateGet(this, _DOMFilterFactory_instances, _n_get).set(t2, r2);
      }
      if (!e2 || !i2) return r2.url;
      const [o2, l2] = [e2, i2].map(__privateMethod(this, _DOMFilterFactory_instances, Bn_fn).bind(this));
      let h2 = Math.round(0.2126 * o2[0] + 0.7152 * o2[1] + 0.0722 * o2[2]), c2 = Math.round(0.2126 * l2[0] + 0.7152 * l2[1] + 0.0722 * l2[2]), [d2, u2] = [n2, s2].map(__privateMethod(this, _DOMFilterFactory_instances, Nn_fn).bind(this));
      c2 < h2 && ([h2, c2, d2, u2] = [c2, h2, u2, d2]);
      __privateGet(this, _DOMFilterFactory_instances, Mn_get).style.color = "";
      const getSteps = (t3, e3, i3) => {
        const n3 = new Array(256), s3 = (c2 - h2) / i3, a3 = t3 / 255, r3 = (e3 - t3) / (255 * i3);
        let o3 = 0;
        for (let t4 = 0; t4 <= i3; t4++) {
          const e4 = Math.round(h2 + t4 * s3), i4 = a3 + t4 * r3;
          for (let t5 = o3; t5 <= e4; t5++) n3[t5] = i4;
          o3 = e4 + 1;
        }
        for (let t4 = o3; t4 < 256; t4++) n3[t4] = n3[o3 - 1];
        return n3.join(",");
      }, p2 = `g_${__privateGet(this, _Sn)}_hcm_${t2}_filter`, g2 = r2.filter = __privateMethod(this, _DOMFilterFactory_instances, In_fn).call(this, p2);
      __privateMethod(this, _DOMFilterFactory_instances, Ln_fn).call(this, g2);
      __privateMethod(this, _DOMFilterFactory_instances, Fn_fn).call(this, getSteps(d2[0], u2[0], 5), getSteps(d2[1], u2[1], 5), getSteps(d2[2], u2[2], 5), g2);
      r2.url = __privateMethod(this, _DOMFilterFactory_instances, Pn_fn).call(this, p2);
      return r2.url;
    }
    destroy(t2 = false) {
      if (!t2 || !__privateGet(this, _kn)?.size) {
        __privateGet(this, _En)?.parentNode.parentNode.remove();
        __privateSet(this, _En, null);
        __privateGet(this, _Cn)?.clear();
        __privateSet(this, _Cn, null);
        __privateGet(this, _kn)?.clear();
        __privateSet(this, _kn, null);
        __privateSet(this, _T3, 0);
      }
    }
  };
  _xn = new WeakMap();
  _Cn = new WeakMap();
  _En = new WeakMap();
  _Sn = new WeakMap();
  _Tn = new WeakMap();
  _kn = new WeakMap();
  _T3 = new WeakMap();
  _DOMFilterFactory_instances = new WeakSet();
  __get = function() {
    return __privateGet(this, _Cn) || __privateSet(this, _Cn, /* @__PURE__ */ new Map());
  };
  _n_get = function() {
    return __privateGet(this, _kn) || __privateSet(this, _kn, /* @__PURE__ */ new Map());
  };
  Mn_get = function() {
    if (!__privateGet(this, _En)) {
      const t2 = __privateGet(this, _Tn).createElement("div"), { style: e2 } = t2;
      e2.colorScheme = "only light";
      e2.visibility = "hidden";
      e2.contain = "strict";
      e2.width = e2.height = 0;
      e2.position = "absolute";
      e2.top = e2.left = 0;
      e2.zIndex = -1;
      const i2 = __privateGet(this, _Tn).createElementNS(a, "svg");
      i2.setAttribute("width", 0);
      i2.setAttribute("height", 0);
      __privateSet(this, _En, __privateGet(this, _Tn).createElementNS(a, "defs"));
      t2.append(i2);
      i2.append(__privateGet(this, _En));
      __privateGet(this, _Tn).body.append(t2);
    }
    return __privateGet(this, _En);
  };
  Dn_fn = function(t2) {
    if (1 === t2.length) {
      const e3 = t2[0], i3 = new Array(256);
      for (let t3 = 0; t3 < 256; t3++) i3[t3] = e3[t3] / 255;
      const n3 = i3.join(",");
      return [n3, n3, n3];
    }
    const [e2, i2, n2] = t2, s2 = new Array(256), a2 = new Array(256), r2 = new Array(256);
    for (let t3 = 0; t3 < 256; t3++) {
      s2[t3] = e2[t3] / 255;
      a2[t3] = i2[t3] / 255;
      r2[t3] = n2[t3] / 255;
    }
    return [s2.join(","), a2.join(","), r2.join(",")];
  };
  Pn_fn = function(t2) {
    if (void 0 === __privateGet(this, _xn)) {
      __privateSet(this, _xn, "");
      const t3 = __privateGet(this, _Tn).URL;
      t3 !== __privateGet(this, _Tn).baseURI && (isDataScheme(t3) ? warn('#createUrl: ignore "data:"-URL for performance reasons.') : __privateSet(this, _xn, updateUrlHash(t3, "")));
    }
    return `url(${__privateGet(this, _xn)}#${t2})`;
  };
  Rn_fn = function(t2) {
    const e2 = __privateGet(this, _Tn).createElementNS(a, "feColorMatrix");
    e2.setAttribute("type", "matrix");
    e2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
    t2.append(e2);
  };
  Ln_fn = function(t2) {
    const e2 = __privateGet(this, _Tn).createElementNS(a, "feColorMatrix");
    e2.setAttribute("type", "matrix");
    e2.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
    t2.append(e2);
  };
  In_fn = function(t2) {
    const e2 = __privateGet(this, _Tn).createElementNS(a, "filter");
    e2.setAttribute("color-interpolation-filters", "sRGB");
    e2.setAttribute("id", t2);
    __privateGet(this, _DOMFilterFactory_instances, Mn_get).append(e2);
    return e2;
  };
  Un_fn = function(t2, e2, i2) {
    const n2 = __privateGet(this, _Tn).createElementNS(a, e2);
    n2.setAttribute("type", "discrete");
    n2.setAttribute("tableValues", i2);
    t2.append(n2);
  };
  Fn_fn = function(t2, e2, i2, n2) {
    const s2 = __privateGet(this, _Tn).createElementNS(a, "feComponentTransfer");
    n2.append(s2);
    __privateMethod(this, _DOMFilterFactory_instances, Un_fn).call(this, s2, "feFuncR", t2);
    __privateMethod(this, _DOMFilterFactory_instances, Un_fn).call(this, s2, "feFuncG", e2);
    __privateMethod(this, _DOMFilterFactory_instances, Un_fn).call(this, s2, "feFuncB", i2);
  };
  On_fn = function(t2, e2) {
    const i2 = __privateGet(this, _Tn).createElementNS(a, "feComponentTransfer");
    e2.append(i2);
    __privateMethod(this, _DOMFilterFactory_instances, Un_fn).call(this, i2, "feFuncA", t2);
  };
  Bn_fn = function(t2) {
    __privateGet(this, _DOMFilterFactory_instances, Mn_get).style.color = t2;
    return getRGB(getComputedStyle(__privateGet(this, _DOMFilterFactory_instances, Mn_get)).getPropertyValue("color"));
  };
  Hn_fn = function(t2) {
    __privateGet(this, _DOMFilterFactory_instances, Mn_get).style.color = t2;
    return getRGBA(getComputedStyle(__privateGet(this, _DOMFilterFactory_instances, Mn_get)).getPropertyValue("color"));
  };
  Nn_fn = function(t2) {
    const [e2, i2, n2, s2] = __privateMethod(this, _DOMFilterFactory_instances, Hn_fn).call(this, t2);
    if (1 === s2) return [e2, i2, n2];
    const [a2, r2, o2] = __privateMethod(this, _DOMFilterFactory_instances, Bn_fn).call(this, "Canvas");
    return [blend(e2, a2, s2), blend(i2, r2, s2), blend(n2, o2, s2)];
  };
  function blend(t2, e2, i2) {
    return Math.round(i2 * t2 + (1 - i2) * e2);
  }
  t && warn("Please use the `legacy` build in Node.js environments.");
  var NodeFilterFactory = class extends BaseFilterFactory {
  };
  var NodeCanvasFactory = class extends BaseCanvasFactory {
    _createCanvas(t2, e2) {
      return process.getBuiltinModule("module").createRequire(import_meta.url)("@napi-rs/canvas").createCanvas(t2, e2);
    }
  };
  var NodeBinaryDataFactory = class extends BaseBinaryDataFactory {
    async _fetch(t2, e2) {
      return (async function node_utils_fetchData(t3) {
        const e3 = process.getBuiltinModule("fs/promises"), i2 = await e3.readFile(t3);
        return new Uint8Array(i2);
      })(t2);
    }
  };
  function convertBlackAndWhiteToRGBA({ src: t2, srcPos: e2 = 0, dest: i2, width: n2, height: s2, nonBlackColor: a2 = 4294967295, inverseDecode: r2 = false }) {
    const o2 = FeatureTest.isLittleEndian ? 4278190080 : 255, [l2, h2] = r2 ? [a2, o2] : [o2, a2], c2 = n2 >> 3, d2 = 7 & n2, u2 = l2 ^ h2, p2 = t2.length;
    i2 = new Uint32Array(i2.buffer);
    let g2 = 0;
    for (let n3 = 0; n3 < s2; ++n3) {
      for (const n5 = e2 + c2; e2 < n5; ++e2, g2 += 8) {
        const n6 = t2[e2];
        i2[g2] = l2 ^ -(n6 >> 7 & 1) & u2;
        i2[g2 + 1] = l2 ^ -(n6 >> 6 & 1) & u2;
        i2[g2 + 2] = l2 ^ -(n6 >> 5 & 1) & u2;
        i2[g2 + 3] = l2 ^ -(n6 >> 4 & 1) & u2;
        i2[g2 + 4] = l2 ^ -(n6 >> 3 & 1) & u2;
        i2[g2 + 5] = l2 ^ -(n6 >> 2 & 1) & u2;
        i2[g2 + 6] = l2 ^ -(n6 >> 1 & 1) & u2;
        i2[g2 + 7] = l2 ^ -(1 & n6) & u2;
      }
      if (0 === d2) continue;
      const n4 = e2 < p2 ? t2[e2++] : 255;
      for (let t3 = 0; t3 < d2; ++t3, ++g2) i2[g2] = l2 ^ -(n4 >> 7 - t3 & 1) & u2;
    }
    return { srcPos: e2, destPos: g2 };
  }
  function convertRGBToRGBA({ src: t2, srcPos: e2 = 0, dest: i2, destPos: n2 = 0, width: s2, height: a2 }) {
    let r2 = 0;
    const o2 = s2 * a2 * 3, l2 = o2 >> 2, h2 = new Uint32Array(t2.buffer, e2, l2), c2 = FeatureTest.isLittleEndian ? 4278190080 : 255;
    if (FeatureTest.isLittleEndian) {
      for (; r2 < l2 - 2; r2 += 3, n2 += 4) {
        const t3 = h2[r2], e3 = h2[r2 + 1], s3 = h2[r2 + 2];
        i2[n2] = t3 | c2;
        i2[n2 + 1] = t3 >>> 24 | e3 << 8 | c2;
        i2[n2 + 2] = e3 >>> 16 | s3 << 16 | c2;
        i2[n2 + 3] = s3 >>> 8 | c2;
      }
      for (let s3 = 4 * r2, a3 = e2 + o2; s3 < a3; s3 += 3) i2[n2++] = t2[s3] | t2[s3 + 1] << 8 | t2[s3 + 2] << 16 | c2;
    } else {
      for (; r2 < l2 - 2; r2 += 3, n2 += 4) {
        const t3 = h2[r2], e3 = h2[r2 + 1], s3 = h2[r2 + 2];
        i2[n2] = t3 | c2;
        i2[n2 + 1] = t3 << 24 | e3 >>> 8 | c2;
        i2[n2 + 2] = e3 << 16 | s3 >>> 16 | c2;
        i2[n2 + 3] = s3 << 8 | c2;
      }
      for (let s3 = 4 * r2, a3 = e2 + o2; s3 < a3; s3 += 3) i2[n2++] = t2[s3] << 24 | t2[s3 + 1] << 16 | t2[s3 + 2] << 8 | c2;
    }
    return { srcPos: e2 + o2, destPos: n2 };
  }
  var _zn, _Gn, _Wn, _Vn, _WebGPU_instances, jn_fn, _a2;
  var At = new (_a2 = class {
    constructor() {
      __privateAdd(this, _WebGPU_instances);
      __privateAdd(this, _zn, null);
      __privateAdd(this, _Gn, null);
      __privateAdd(this, _Wn, null);
      __privateAdd(this, _Vn, null);
    }
    init() {
      return __privateGet(this, _zn) || __privateSet(this, _zn, __privateMethod(this, _WebGPU_instances, jn_fn).call(this));
    }
    get isReady() {
      return null !== __privateGet(this, _Gn);
    }
    loadMeshShader() {
      if (!__privateGet(this, _Gn) || __privateGet(this, _Wn)) return;
      const t2 = __privateGet(this, _Gn).createShaderModule({ code: "\nstruct Uniforms {\n  offsetX      : f32,\n  offsetY      : f32,\n  scaleX       : f32,\n  scaleY       : f32,\n  paddedWidth  : f32,\n  paddedHeight : f32,\n  borderSize   : f32,\n  _pad         : f32,\n};\n\n@group(0) @binding(0) var<uniform> u : Uniforms;\n\nstruct VertexInput {\n  @location(0) position : vec2<f32>,\n  @location(1) color    : vec4<f32>,\n};\n\nstruct VertexOutput {\n  @builtin(position) position : vec4<f32>,\n  @location(0)       color    : vec3<f32>,\n};\n\n@vertex\nfn vs_main(in : VertexInput) -> VertexOutput {\n  var out : VertexOutput;\n  let cx = (in.position.x + u.offsetX) * u.scaleX;\n  let cy = (in.position.y + u.offsetY) * u.scaleY;\n  out.position = vec4<f32>(\n    ((cx + u.borderSize) / u.paddedWidth) * 2.0 - 1.0,\n    1.0 - ((cy + u.borderSize) / u.paddedHeight) * 2.0,\n    0.0,\n    1.0\n  );\n  out.color = in.color.rgb;\n  return out;\n}\n\n@fragment\nfn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {\n  return vec4<f32>(in.color, 1.0);\n}\n" });
      __privateSet(this, _Wn, __privateGet(this, _Gn).createRenderPipeline({ layout: "auto", vertex: { module: t2, entryPoint: "vs_main", buffers: [{ arrayStride: 8, attributes: [{ shaderLocation: 0, offset: 0, format: "float32x2" }] }, { arrayStride: 4, attributes: [{ shaderLocation: 1, offset: 0, format: "unorm8x4" }] }] }, fragment: { module: t2, entryPoint: "fs_main", targets: [{ format: __privateGet(this, _Vn) }] }, primitive: { topology: "triangle-list" } }));
    }
    draw(t2, e2, i2, n2, s2, a2, r2, o2) {
      this.loadMeshShader();
      const l2 = __privateGet(this, _Gn), { offsetX: h2, offsetY: c2, scaleX: d2, scaleY: u2 } = n2, p2 = l2.createBuffer({ size: Math.max(t2.byteLength, 4), usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
      t2.byteLength > 0 && l2.queue.writeBuffer(p2, 0, t2);
      const g2 = l2.createBuffer({ size: Math.max(e2.byteLength, 4), usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST });
      e2.byteLength > 0 && l2.queue.writeBuffer(g2, 0, e2);
      const m2 = l2.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
      l2.queue.writeBuffer(m2, 0, new Float32Array([h2, c2, d2, u2, a2, r2, o2, 0]));
      const f2 = l2.createBindGroup({ layout: __privateGet(this, _Wn).getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: m2 } }] }), b2 = new OffscreenCanvas(a2, r2), y2 = b2.getContext("webgpu");
      y2.configure({ device: l2, format: __privateGet(this, _Vn), alphaMode: s2 ? "opaque" : "premultiplied" });
      const v2 = s2 ? { r: s2[0] / 255, g: s2[1] / 255, b: s2[2] / 255, a: 1 } : { r: 0, g: 0, b: 0, a: 0 }, A2 = l2.createCommandEncoder(), w2 = A2.beginRenderPass({ colorAttachments: [{ view: y2.getCurrentTexture().createView(), clearValue: v2, loadOp: "clear", storeOp: "store" }] });
      if (i2 > 0) {
        w2.setPipeline(__privateGet(this, _Wn));
        w2.setBindGroup(0, f2);
        w2.setVertexBuffer(0, p2);
        w2.setVertexBuffer(1, g2);
        w2.draw(i2);
      }
      w2.end();
      l2.queue.submit([A2.finish()]);
      p2.destroy();
      g2.destroy();
      m2.destroy();
      return b2.transferToImageBitmap();
    }
  }, _zn = new WeakMap(), _Gn = new WeakMap(), _Wn = new WeakMap(), _Vn = new WeakMap(), _WebGPU_instances = new WeakSet(), jn_fn = async function() {
    if (!globalThis.navigator?.gpu) return false;
    try {
      const t2 = await navigator.gpu.requestAdapter();
      if (!t2) return false;
      __privateSet(this, _Vn, navigator.gpu.getPreferredCanvasFormat());
      __privateSet(this, _Gn, await t2.requestDevice());
      return true;
    } catch {
      return false;
    }
  }, _a2)();
  var wt = "Fill";
  var xt = "Stroke";
  var Ct = "Shading";
  function applyBoundingBox(t2, e2) {
    if (!e2) return;
    const i2 = e2[2] - e2[0], n2 = e2[3] - e2[1], s2 = new Path2D();
    s2.rect(e2[0], e2[1], i2, n2);
    t2.clip(s2);
  }
  var BaseShadingPattern = class {
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern() {
      unreachable("Abstract method `getPattern` called.");
    }
  };
  var RadialAxialShadingPattern = class extends BaseShadingPattern {
    constructor(t2) {
      super();
      this._type = t2[1];
      this._bbox = t2[2];
      this._colorStops = t2[3];
      this._p0 = t2[4];
      this._p1 = t2[5];
      this._r0 = t2[6];
      this._r1 = t2[7];
      this.matrix = null;
    }
    isOriginBased() {
      return 0 === this._p0[0] && 0 === this._p0[1] && (!this.isRadial() || 0 === this._p1[0] && 0 === this._p1[1]);
    }
    isRadial() {
      return "radial" === this._type;
    }
    areConic() {
      if (!this.isRadial()) return false;
      const t2 = Math.hypot(this._p0[0] - this._p1[0], this._p0[1] - this._p1[1]);
      return t2 + this._r1 > this._r0 && t2 + this._r0 > this._r1;
    }
    _createGradient(t2, e2 = null) {
      let i2, n2 = this._p0, s2 = this._p1;
      if (e2) {
        n2 = n2.slice();
        s2 = s2.slice();
        Util.applyTransform(n2, e2);
        Util.applyTransform(s2, e2);
      }
      if ("axial" === this._type) i2 = t2.createLinearGradient(n2[0], n2[1], s2[0], s2[1]);
      else if ("radial" === this._type) {
        let a2 = this._r0, r2 = this._r1;
        if (e2) {
          const t3 = new Float32Array(2);
          Util.singularValueDecompose2dScale(e2, t3);
          a2 *= t3[0];
          r2 *= t3[0];
        }
        i2 = t2.createRadialGradient(n2[0], n2[1], a2, s2[0], s2[1], r2);
      }
      for (const t3 of this._colorStops) i2.addColorStop(t3[0], t3[1]);
      return i2;
    }
    _createReversedGradient(t2, e2 = null) {
      let i2 = this._p1, n2 = this._p0;
      if (e2) {
        i2 = i2.slice();
        n2 = n2.slice();
        Util.applyTransform(i2, e2);
        Util.applyTransform(n2, e2);
      }
      let s2 = this._r1, a2 = this._r0;
      if (e2) {
        const t3 = new Float32Array(2);
        Util.singularValueDecompose2dScale(e2, t3);
        s2 *= t3[0];
        a2 *= t3[0];
      }
      const r2 = t2.createRadialGradient(i2[0], i2[1], s2, n2[0], n2[1], a2), o2 = this._colorStops.map(([t3, e3]) => [1 - t3, e3]).reverse();
      for (const [t3, e3] of o2) r2.addColorStop(t3, e3);
      return r2;
    }
    getPattern(t2, e2, i2, n2) {
      let s2;
      if (n2 === xt || n2 === wt) {
        if (this.isOriginBased()) {
          let n3 = Util.transform(i2, e2.baseTransform);
          this.matrix && (n3 = Util.transform(n3, this.matrix));
          const s3 = 1e-3, a3 = Math.hypot(n3[0], n3[1]), r3 = Math.hypot(n3[2], n3[3]), o3 = (n3[0] * n3[2] + n3[1] * n3[3]) / (a3 * r3);
          if (Math.abs(o3) < s3) {
            if (!this.isRadial()) return this._createGradient(t2, n3);
            if (Math.abs(a3 - r3) < s3) return this._createGradient(t2, n3);
          }
        }
        const a2 = e2.current.getClippedPathBoundingBox(n2, getCurrentTransform(t2)) || [0, 0, 0, 0], r2 = Math.ceil(a2[2] - a2[0]) || 1, o2 = Math.ceil(a2[3] - a2[1]) || 1, l2 = e2.canvasFactory.create(r2, o2), h2 = l2.context;
        h2.clearRect(0, 0, h2.canvas.width, h2.canvas.height);
        h2.beginPath();
        h2.rect(0, 0, h2.canvas.width, h2.canvas.height);
        h2.translate(-a2[0], -a2[1]);
        i2 = Util.transform(i2, [1, 0, 0, 1, a2[0], a2[1]]);
        h2.transform(...e2.baseTransform);
        this.matrix && h2.transform(...this.matrix);
        applyBoundingBox(h2, this._bbox);
        if (this.areConic()) {
          h2.fillStyle = this._createReversedGradient(h2);
          h2.fill();
        }
        h2.fillStyle = this._createGradient(h2);
        h2.fill();
        s2 = t2.createPattern(l2.canvas, "no-repeat");
        e2.canvasFactory.destroy(l2);
        const c2 = new DOMMatrix(i2);
        s2.setTransform(c2);
      } else {
        if (this.areConic()) {
          t2.save();
          applyBoundingBox(t2, this._bbox);
          t2.fillStyle = this._createReversedGradient(t2);
          t2.fillRect(-1e10, -1e10, 2e10, 2e10);
          t2.restore();
        }
        applyBoundingBox(t2, this._bbox);
        s2 = this._createGradient(t2);
      }
      return s2;
    }
  };
  function drawTriangle(t2, e2, i2, n2, s2, a2, r2, o2) {
    const l2 = e2.coords, h2 = e2.colors, c2 = t2.data, d2 = 4 * t2.width;
    let u2;
    if (l2[2 * i2 + 1] > l2[2 * n2 + 1]) {
      u2 = i2;
      i2 = n2;
      n2 = u2;
      u2 = a2;
      a2 = r2;
      r2 = u2;
    }
    if (l2[2 * n2 + 1] > l2[2 * s2 + 1]) {
      u2 = n2;
      n2 = s2;
      s2 = u2;
      u2 = r2;
      r2 = o2;
      o2 = u2;
    }
    if (l2[2 * i2 + 1] > l2[2 * n2 + 1]) {
      u2 = i2;
      i2 = n2;
      n2 = u2;
      u2 = a2;
      a2 = r2;
      r2 = u2;
    }
    const p2 = (l2[2 * i2] + e2.offsetX) * e2.scaleX, g2 = (l2[2 * i2 + 1] + e2.offsetY) * e2.scaleY, m2 = (l2[2 * n2] + e2.offsetX) * e2.scaleX, f2 = (l2[2 * n2 + 1] + e2.offsetY) * e2.scaleY, b2 = (l2[2 * s2] + e2.offsetX) * e2.scaleX, y2 = (l2[2 * s2 + 1] + e2.offsetY) * e2.scaleY;
    if (g2 >= y2) return;
    const v2 = h2[4 * a2], A2 = h2[4 * a2 + 1], w2 = h2[4 * a2 + 2], x2 = h2[4 * r2], C2 = h2[4 * r2 + 1], E2 = h2[4 * r2 + 2], S2 = h2[4 * o2], T2 = h2[4 * o2 + 1], k2 = h2[4 * o2 + 2], _2 = Math.round(g2), M2 = Math.round(y2);
    let D2, P2, I2, F2, B2, L2, O2, R2;
    for (let t3 = _2; t3 <= M2; t3++) {
      if (t3 < f2) {
        const e4 = t3 < g2 ? 0 : (g2 - t3) / (g2 - f2);
        D2 = p2 - (p2 - m2) * e4;
        P2 = v2 - (v2 - x2) * e4;
        I2 = A2 - (A2 - C2) * e4;
        F2 = w2 - (w2 - E2) * e4;
      } else {
        let e4;
        e4 = t3 > y2 ? 1 : f2 === y2 ? 0 : (f2 - t3) / (f2 - y2);
        D2 = m2 - (m2 - b2) * e4;
        P2 = x2 - (x2 - S2) * e4;
        I2 = C2 - (C2 - T2) * e4;
        F2 = E2 - (E2 - k2) * e4;
      }
      let e3;
      e3 = t3 < g2 ? 0 : t3 > y2 ? 1 : (g2 - t3) / (g2 - y2);
      B2 = p2 - (p2 - b2) * e3;
      L2 = v2 - (v2 - S2) * e3;
      O2 = A2 - (A2 - T2) * e3;
      R2 = w2 - (w2 - k2) * e3;
      const i3 = Math.round(Math.min(D2, B2)), n3 = Math.round(Math.max(D2, B2));
      let s3 = d2 * t3 + 4 * i3;
      for (let t4 = i3; t4 <= n3; t4++) {
        e3 = (D2 - t4) / (D2 - B2);
        e3 < 0 ? e3 = 0 : e3 > 1 && (e3 = 1);
        c2[s3++] = P2 - (P2 - L2) * e3 | 0;
        c2[s3++] = I2 - (I2 - O2) * e3 | 0;
        c2[s3++] = F2 - (F2 - R2) * e3 | 0;
        c2[s3++] = 255;
      }
    }
  }
  var MeshShadingPattern = class extends BaseShadingPattern {
    constructor(t2) {
      super();
      this._posData = t2[2];
      this._colData = t2[3];
      this._vertexCount = t2[4];
      this._bounds = t2[5];
      this._bbox = t2[6];
      this._background = t2[7];
      this.matrix = null;
      !(function loadMeshShader() {
        At.loadMeshShader();
      })();
    }
    _createMeshCanvas(t2, e2, i2) {
      const n2 = Math.floor(this._bounds[0]), s2 = Math.floor(this._bounds[1]), a2 = Math.ceil(this._bounds[2]) - n2, r2 = Math.ceil(this._bounds[3]) - s2, o2 = Math.min(Math.ceil(Math.abs(a2 * t2[0] * 1.1)), 3e3) || 1, l2 = Math.min(Math.ceil(Math.abs(r2 * t2[1] * 1.1)), 3e3) || 1, h2 = a2 ? a2 / o2 : 1, c2 = r2 ? r2 / l2 : 1, d2 = { coords: this._posData, colors: this._colData, offsetX: -n2, offsetY: -s2, scaleX: 1 / h2, scaleY: 1 / c2 }, u2 = o2 + 4, p2 = l2 + 4, g2 = i2.create(u2, p2);
      if ((function isGPUReady() {
        return At.isReady;
      })() && this._vertexCount > 48) g2.context.drawImage((function drawMeshWithGPU(t3, e3, i3, n3, s3, a3, r3, o3) {
        return At.draw(t3, e3, i3, n3, s3, a3, r3, o3);
      })(this._posData, this._colData, this._vertexCount, d2, e2, u2, p2, 2), 0, 0);
      else {
        const t3 = g2.context.createImageData(o2, l2);
        if (e2) {
          const i3 = t3.data;
          for (let t4 = 0, n3 = i3.length; t4 < n3; t4 += 4) {
            i3[t4] = e2[0];
            i3[t4 + 1] = e2[1];
            i3[t4 + 2] = e2[2];
            i3[t4 + 3] = 255;
          }
        }
        for (let e3 = 0, i3 = this._vertexCount; e3 < i3; e3 += 3) drawTriangle(t3, d2, e3, e3 + 1, e3 + 2, e3, e3 + 1, e3 + 2);
        g2.context.putImageData(t3, 2, 2);
      }
      return { canvas: g2.canvas, offsetX: n2 - 2 * h2, offsetY: s2 - 2 * c2, scaleX: h2, scaleY: c2 };
    }
    isModifyingCurrentTransform() {
      return true;
    }
    getPattern(t2, e2, i2, n2) {
      applyBoundingBox(t2, this._bbox);
      const s2 = new Float32Array(2);
      if (n2 === Ct) Util.singularValueDecompose2dScale(getCurrentTransform(t2), s2);
      else if (this.matrix) {
        Util.singularValueDecompose2dScale(this.matrix, s2);
        const [t3, i3] = s2;
        Util.singularValueDecompose2dScale(e2.baseTransform, s2);
        s2[0] *= t3;
        s2[1] *= i3;
      } else Util.singularValueDecompose2dScale(e2.baseTransform, s2);
      const a2 = this._createMeshCanvas(s2, n2 === Ct ? null : this._background, e2.canvasFactory);
      if (n2 !== Ct) {
        t2.setTransform(...e2.baseTransform);
        this.matrix && t2.transform(...this.matrix);
      }
      t2.translate(a2.offsetX, a2.offsetY);
      t2.scale(a2.scaleX, a2.scaleY);
      const r2 = t2.createPattern(a2.canvas, "no-repeat");
      e2.canvasFactory.destroy(a2);
      return r2;
    }
  };
  var DummyShadingPattern = class extends BaseShadingPattern {
    getPattern() {
      return "hotpink";
    }
  };
  var Et = 1;
  var St = 2;
  var _TilingPattern = class _TilingPattern {
    constructor(t2, e2, i2, n2) {
      this.color = t2[1];
      this.operatorList = t2[2];
      this.matrix = t2[3];
      this.bbox = t2[4];
      this.xstep = t2[5];
      this.ystep = t2[6];
      this.paintType = t2[7];
      this.tilingType = t2[8];
      this.needsIsolation = t2[9] ?? true;
      this.ctx = e2;
      this.canvasGraphicsFactory = i2;
      this.baseTransform = n2;
      this.patternBaseMatrix = this.matrix ? Util.transform(n2, this.matrix) : n2;
    }
    canSkipPatternCanvas([t2, e2, i2, n2]) {
      const [s2, a2, r2, o2] = this.bbox, l2 = Math.abs(this.xstep), h2 = Math.abs(this.ystep);
      if (t2 > l2 + 1e-6 || e2 > h2 + 1e-6) return null;
      const c2 = Math.floor((i2 - r2) / l2) + 1, d2 = Math.ceil((i2 + t2 - s2) / l2) - 1, u2 = Math.floor((n2 - o2) / h2) + 1, p2 = Math.ceil((n2 + e2 - a2) / h2) - 1;
      return d2 <= c2 && p2 <= u2 ? [c2, u2] : null;
    }
    updatePatternDims(t2, e2) {
      const i2 = Util.inverseTransform(this.patternBaseMatrix), n2 = [t2[0], t2[1]], s2 = [t2[2], t2[3]];
      Util.applyTransform(n2, i2);
      Util.applyTransform(s2, i2);
      e2[0] = Math.abs(s2[0] - n2[0]);
      e2[1] = Math.abs(s2[1] - n2[1]);
      e2[2] = Math.min(n2[0], s2[0]);
      e2[3] = Math.min(n2[1], s2[1]);
    }
    _renderTileCanvas(t2, e2, i2, n2) {
      const [s2, a2, r2, o2] = this.bbox, l2 = t2.canvasFactory.create(i2.size, n2.size), h2 = l2.context, c2 = this.canvasGraphicsFactory.createCanvasGraphics(h2, e2);
      c2.groupLevel = t2.groupLevel;
      this.setFillAndStrokeStyleToContext(c2, this.paintType, this.color);
      h2.translate(-i2.scale * s2, -n2.scale * a2);
      c2.transform(0, i2.scale, 0, 0, n2.scale, 0, 0);
      h2.save();
      c2.dependencyTracker?.save();
      this.clipBbox(c2, s2, a2, r2, o2);
      c2.baseTransform = getCurrentTransform(c2.ctx);
      c2.executeOperatorList(this.operatorList);
      c2.endDrawing();
      c2.dependencyTracker?.restore();
      h2.restore();
      return l2;
    }
    _getCombinedScales() {
      const t2 = new Float32Array(2);
      Util.singularValueDecompose2dScale(this.matrix, t2);
      const [e2, i2] = t2;
      Util.singularValueDecompose2dScale(this.baseTransform, t2);
      return [e2 * t2[0], i2 * t2[1]];
    }
    drawPattern(t2, e2, i2 = false, [n2, s2], a2) {
      const [r2, o2, l2, h2] = this.bbox, c2 = t2.dependencyTracker;
      c2 && (t2.dependencyTracker = new CanvasNestedDependencyTracker(c2, a2));
      t2.save();
      i2 ? t2.ctx.clip(e2, "evenodd") : t2.ctx.clip(e2);
      t2.ctx.setTransform(...this.patternBaseMatrix);
      t2.ctx.translate(n2 * this.xstep, s2 * this.ystep);
      if (this.needsIsolation || 1 !== t2.ctx.globalAlpha || "source-over" !== t2.ctx.globalCompositeOperation || t2.inSMaskMode) {
        const e3 = l2 - r2, i3 = h2 - o2, [n3, s3] = this._getCombinedScales(), c3 = this.getSizeAndScale(e3, this.ctx.canvas.width, n3), d2 = this.getSizeAndScale(i3, this.ctx.canvas.height, s3), u2 = this._renderTileCanvas(t2, a2, c3, d2);
        t2.ctx.drawImage(u2.canvas, r2, o2, e3, i3);
        t2.canvasFactory.destroy(u2);
      } else {
        this.setFillAndStrokeStyleToContext(t2, this.paintType, this.color);
        this.clipBbox(t2, r2, o2, l2, h2);
        t2.baseTransformStack.push(t2.baseTransform);
        t2.baseTransform = getCurrentTransform(t2.ctx);
        t2.executeOperatorList(this.operatorList);
        t2.baseTransform = t2.baseTransformStack.pop();
      }
      t2.restore();
      c2 && (t2.dependencyTracker = c2);
    }
    createPatternCanvas(t2, e2) {
      const [i2, n2, s2, a2] = this.bbox, r2 = s2 - i2, o2 = a2 - n2;
      let { xstep: l2, ystep: h2 } = this;
      l2 = Math.abs(l2);
      h2 = Math.abs(h2);
      info("TilingType: " + this.tilingType);
      const [c2, d2] = this._getCombinedScales();
      let u2 = r2, p2 = o2, g2 = false, m2 = false;
      Math.ceil(l2 * c2) >= Math.ceil(r2 * c2) ? u2 = l2 : g2 = true;
      Math.ceil(h2 * d2) >= Math.ceil(o2 * d2) ? p2 = h2 : m2 = true;
      const f2 = this.getSizeAndScale(u2, this.ctx.canvas.width, c2), b2 = this.getSizeAndScale(p2, this.ctx.canvas.height, d2), y2 = this._renderTileCanvas(t2, e2, f2, b2);
      if (g2 || m2) {
        const e3 = y2.canvas;
        g2 && (u2 = l2);
        m2 && (p2 = h2);
        const s3 = this.getSizeAndScale(u2, this.ctx.canvas.width, c2), a3 = this.getSizeAndScale(p2, this.ctx.canvas.height, d2), f3 = s3.size, b3 = a3.size, v2 = t2.canvasFactory.create(f3, b3), A2 = v2.context, w2 = g2 ? Math.floor(r2 / l2) : 0, x2 = m2 ? Math.floor(o2 / h2) : 0;
        for (let t3 = 0; t3 <= w2; t3++) for (let i3 = 0; i3 <= x2; i3++) A2.drawImage(e3, f3 * t3, b3 * i3, f3, b3, 0, 0, f3, b3);
        t2.canvasFactory.destroy(y2);
        return { canvas: v2.canvas, canvasEntry: v2, scaleX: s3.scale, scaleY: a3.scale, offsetX: i2, offsetY: n2 };
      }
      return { canvas: y2.canvas, canvasEntry: y2, scaleX: f2.scale, scaleY: b2.scale, offsetX: i2, offsetY: n2 };
    }
    getSizeAndScale(t2, e2, i2) {
      const n2 = Math.max(_TilingPattern.MAX_PATTERN_SIZE, e2);
      let s2 = Math.ceil(t2 * i2);
      s2 >= n2 ? s2 = n2 : i2 = s2 / t2;
      return { scale: i2, size: s2 };
    }
    clipBbox(t2, e2, i2, n2, s2) {
      const a2 = n2 - e2, r2 = s2 - i2, o2 = new Path2D();
      o2.rect(e2, i2, a2, r2);
      Util.axialAlignedBoundingBox([e2, i2, n2, s2], getCurrentTransform(t2.ctx), t2.current.minMax);
      t2.ctx.clip(o2);
      t2.current.updateClipFromPath();
    }
    setFillAndStrokeStyleToContext(t2, e2, i2) {
      const n2 = t2.ctx, s2 = t2.current;
      s2.patternFill = s2.patternStroke = false;
      switch (e2) {
        case Et:
          const { fillStyle: t3, strokeStyle: a2 } = this.ctx;
          n2.fillStyle = s2.fillColor = t3;
          n2.strokeStyle = s2.strokeColor = a2;
          break;
        case St:
          n2.fillStyle = n2.strokeStyle = i2;
          s2.fillColor = s2.strokeColor = i2;
          break;
        default:
          throw new FormatError(`Unsupported paint type: ${e2}`);
      }
    }
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern(t2, e2, i2, n2, s2) {
      const a2 = n2 !== Ct ? Util.transform(i2, this.patternBaseMatrix) : i2, r2 = this.createPatternCanvas(e2, s2);
      let o2 = new DOMMatrix(a2);
      o2 = o2.translate(r2.offsetX, r2.offsetY);
      o2 = o2.scale(1 / r2.scaleX, 1 / r2.scaleY);
      const l2 = t2.createPattern(r2.canvas, "repeat");
      e2.canvasFactory.destroy(r2.canvasEntry);
      l2.setTransform(o2);
      return l2;
    }
  };
  __publicField(_TilingPattern, "MAX_PATTERN_SIZE", 3e3);
  var TilingPattern = _TilingPattern;
  var Tt = 16;
  var kt = new DOMMatrix();
  var _t = new Float32Array(2);
  function mirrorContextOperations(t2, e2) {
    if (t2._removeMirroring) throw new Error("Context is already forwarding operations.");
    const i2 = /* @__PURE__ */ new Map();
    for (const n2 of ["save", "restore", "rotate", "scale", "translate", "transform", "setTransform", "resetTransform", "clip", "moveTo", "lineTo", "bezierCurveTo", "quadraticCurveTo", "arc", "arcTo", "ellipse", "rect", "roundRect", "closePath", "beginPath"]) {
      const s2 = t2[n2];
      if ("function" == typeof s2 && "function" == typeof e2[n2]) {
        i2.set(n2, s2);
        t2[n2] = function(...t3) {
          e2[n2](...t3);
          return s2.apply(this, t3);
        };
      }
    }
    t2._removeMirroring = () => {
      for (const [e3, n2] of i2) t2[e3] = n2;
      delete t2._removeMirroring;
    };
  }
  function drawImageAtIntegerCoords(t2, e2, i2, n2, s2, a2, r2, o2, l2, h2) {
    const [c2, d2, u2, p2, g2, m2] = getCurrentTransform(t2);
    if (0 === d2 && 0 === u2) {
      const f2 = r2 * c2 + g2, b2 = Math.round(f2), y2 = o2 * p2 + m2, v2 = Math.round(y2), A2 = (r2 + l2) * c2 + g2, w2 = Math.abs(Math.round(A2) - b2) || 1, x2 = (o2 + h2) * p2 + m2, C2 = Math.abs(Math.round(x2) - v2) || 1;
      t2.setTransform(Math.sign(c2), 0, 0, Math.sign(p2), b2, v2);
      t2.drawImage(e2, i2, n2, s2, a2, 0, 0, w2, C2);
      t2.setTransform(c2, d2, u2, p2, g2, m2);
      return [w2, C2];
    }
    if (0 === c2 && 0 === p2) {
      const f2 = o2 * u2 + g2, b2 = Math.round(f2), y2 = r2 * d2 + m2, v2 = Math.round(y2), A2 = (o2 + h2) * u2 + g2, w2 = Math.abs(Math.round(A2) - b2) || 1, x2 = (r2 + l2) * d2 + m2, C2 = Math.abs(Math.round(x2) - v2) || 1;
      t2.setTransform(0, Math.sign(d2), Math.sign(u2), 0, b2, v2);
      t2.drawImage(e2, i2, n2, s2, a2, 0, 0, C2, w2);
      t2.setTransform(c2, d2, u2, p2, g2, m2);
      return [C2, w2];
    }
    t2.drawImage(e2, i2, n2, s2, a2, r2, o2, l2, h2);
    return [Math.hypot(c2, d2) * l2, Math.hypot(u2, p2) * h2];
  }
  var CanvasExtraState = class {
    constructor(t2, e2) {
      __publicField(this, "alphaIsShape", false);
      __publicField(this, "fontSize", 0);
      __publicField(this, "fontSizeScale", 1);
      __publicField(this, "textMatrix", null);
      __publicField(this, "textMatrixScale", 1);
      __publicField(this, "fontMatrix", n);
      __publicField(this, "leading", 0);
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "lineX", 0);
      __publicField(this, "lineY", 0);
      __publicField(this, "charSpacing", 0);
      __publicField(this, "wordSpacing", 0);
      __publicField(this, "textHScale", 1);
      __publicField(this, "textRenderingMode", A);
      __publicField(this, "textRise", 0);
      __publicField(this, "fillColor", "#000000");
      __publicField(this, "strokeColor", "#000000");
      __publicField(this, "tilingPatternDims", null);
      __publicField(this, "patternFill", false);
      __publicField(this, "patternStroke", false);
      __publicField(this, "fillAlpha", 1);
      __publicField(this, "strokeAlpha", 1);
      __publicField(this, "lineWidth", 1);
      __publicField(this, "activeSMask", null);
      __publicField(this, "transferMaps", "none");
      __publicField(this, "minMax", i.slice());
      this.clipBox = new Float32Array([0, 0, t2, e2]);
    }
    clone() {
      const t2 = Object.create(this);
      t2.clipBox = this.clipBox.slice();
      t2.minMax = this.minMax.slice();
      t2.tilingPatternDims = this.tilingPatternDims?.slice();
      return t2;
    }
    getPathBoundingBox(t2 = wt, e2 = null) {
      const i2 = this.minMax.slice();
      if (t2 === xt) {
        e2 || unreachable("Stroke bounding box must include transform.");
        Util.singularValueDecompose2dScale(e2, _t);
        const t3 = _t[0] * this.lineWidth / 2, n2 = _t[1] * this.lineWidth / 2;
        i2[0] -= t3;
        i2[1] -= n2;
        i2[2] += t3;
        i2[3] += n2;
      }
      return i2;
    }
    updateClipFromPath() {
      const t2 = Util.intersect(this.clipBox, this.getPathBoundingBox());
      this.startNewPathAndClipBox(t2 || [0, 0, 0, 0]);
    }
    isEmptyClip() {
      return this.minMax[0] === 1 / 0;
    }
    startNewPathAndClipBox(t2) {
      this.clipBox.set(t2, 0);
      this.minMax.set(i, 0);
    }
    getClippedPathBoundingBox(t2 = wt, e2 = null) {
      return Util.intersect(this.clipBox, this.getPathBoundingBox(t2, e2));
    }
  };
  function putBinaryImageData(t2, e2) {
    const { width: i2, height: n2, kind: s2 } = e2, a2 = n2 % Tt, r2 = (n2 - a2) / Tt, o2 = 0 === a2 ? r2 : r2 + 1, l2 = t2.createImageData(i2, Tt);
    let h2 = 0;
    const c2 = e2.data, d2 = l2.data;
    let u2;
    if (s2 === T.GRAYSCALE_1BPP) for (u2 = 0; u2 < o2; u2++) {
      ({ srcPos: h2 } = convertBlackAndWhiteToRGBA({ src: c2, srcPos: h2, dest: d2, width: i2, height: u2 < r2 ? Tt : a2 }));
      t2.putImageData(l2, 0, u2 * Tt);
    }
    else if (s2 === T.RGBA_32BPP) {
      let e3 = 0, n3 = i2 * Tt * 4;
      for (u2 = 0; u2 < r2; u2++) {
        d2.set(c2.subarray(h2, h2 + n3));
        h2 += n3;
        t2.putImageData(l2, 0, e3);
        e3 += Tt;
      }
      if (u2 < o2) {
        n3 = i2 * a2 * 4;
        d2.set(c2.subarray(h2, h2 + n3));
        t2.putImageData(l2, 0, e3);
      }
    } else {
      if (s2 !== T.RGB_24BPP) throw new Error(`bad image kind: ${s2}`);
      for (u2 = 0; u2 < o2; u2++) {
        ({ srcPos: h2 } = convertRGBToRGBA({ src: c2, srcPos: h2, dest: new Uint32Array(d2.buffer), width: i2, height: u2 < r2 ? Tt : a2 }));
        t2.putImageData(l2, 0, u2 * Tt);
      }
    }
  }
  function putBinaryImageMask(t2, e2) {
    if (e2.bitmap) {
      t2.drawImage(e2.bitmap, 0, 0);
      return;
    }
    const { width: i2, height: n2 } = e2, s2 = n2 % Tt, a2 = (n2 - s2) / Tt, r2 = 0 === s2 ? a2 : a2 + 1, o2 = t2.createImageData(i2, Tt);
    let l2 = 0;
    const h2 = e2.data, c2 = o2.data;
    for (let e3 = 0; e3 < r2; e3++) {
      ({ srcPos: l2 } = convertBlackAndWhiteToRGBA({ src: h2, srcPos: l2, dest: c2, width: i2, height: e3 < a2 ? Tt : s2, nonBlackColor: 0 }));
      t2.putImageData(o2, 0, e3 * Tt);
    }
  }
  function copyCtxState(t2, e2) {
    const i2 = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
    for (const n2 of i2) void 0 !== t2[n2] && (e2[n2] = t2[n2]);
    if (void 0 !== t2.setLineDash) {
      e2.setLineDash(t2.getLineDash());
      e2.lineDashOffset = t2.lineDashOffset;
    }
  }
  function resetCtxToDefault(t2) {
    t2.strokeStyle = t2.fillStyle = "#000000";
    t2.fillRule = "nonzero";
    t2.globalAlpha = 1;
    t2.lineWidth = 1;
    t2.lineCap = "butt";
    t2.lineJoin = "miter";
    t2.miterLimit = 10;
    t2.globalCompositeOperation = "source-over";
    t2.font = "10px sans-serif";
    if (void 0 !== t2.setLineDash) {
      t2.setLineDash([]);
      t2.lineDashOffset = 0;
    }
    const { filter: e2 } = t2;
    "none" !== e2 && "" !== e2 && (t2.filter = "none");
  }
  function getImageSmoothingEnabled(t2, e2) {
    if (e2) return true;
    Util.singularValueDecompose2dScale(t2, _t);
    const i2 = Math.fround(OutputScale.pixelRatio * PixelsPerInch.PDF_TO_CSS_UNITS);
    return _t[0] <= i2 && _t[1] <= i2;
  }
  var Mt = ["butt", "round", "square"];
  var Dt = ["miter", "round", "bevel"];
  var Pt = {};
  var It = {};
  var _$n, _Kn, _Xn, _qn, _Yn, _Qn, _Jn, _Zn, _ts, _es, _CanvasGraphics_instances, is_fn, ss_fn, as_fn, rs_fn, os_fn, ls_fn, hs_fn, cs_fn, ds_fn, ns_fn;
  var _CanvasGraphics = class _CanvasGraphics {
    constructor(t2, e2, i2, n2, s2, { optionalContentConfig: a2, markedContentStack: r2 = null }, o2, l2, h2, c2) {
      __privateAdd(this, _CanvasGraphics_instances);
      __privateAdd(this, _$n, 0);
      __privateAdd(this, _Kn, 0);
      __privateAdd(this, _Xn, null);
      __privateAdd(this, _qn, null);
      __privateAdd(this, _Yn, null);
      __privateAdd(this, _Qn, null);
      __privateAdd(this, _Jn, 1);
      __privateAdd(this, _Zn);
      __privateAdd(this, _ts, null);
      __privateAdd(this, _es, []);
      this.ctx = t2;
      this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
      this.stateStack = [];
      this.pendingClip = null;
      this.pendingEOFill = false;
      this.commonObjs = e2;
      this.objs = i2;
      this.canvasFactory = n2;
      this.filterFactory = s2;
      this.groupStack = [];
      this.baseTransform = null;
      this.baseTransformStack = [];
      this.groupLevel = 0;
      this.smaskStack = [];
      this.tempSMask = null;
      this.smaskGroupCanvases = [];
      this.smaskPreparedEntry = null;
      this.smaskPreparedFor = null;
      this.smaskPreparedOffsetX = 0;
      this.smaskPreparedOffsetY = 0;
      this.smaskPreparedOOBAlpha = null;
      this.suspendedCtx = null;
      this.contentVisible = true;
      this.markedContentStack = r2 || [];
      this.optionalContentConfig = a2;
      this.cachedPatterns = /* @__PURE__ */ new Map();
      this.annotationCanvasMap = o2;
      this.viewportScale = 1;
      this.outputScaleX = 1;
      this.outputScaleY = 1;
      this.pageColors = l2;
      this._cachedScaleForStroking = [-1, 0];
      this._cachedGetSinglePixelWidth = null;
      this._cachedBitmapsMap = /* @__PURE__ */ new Map();
      this.dependencyTracker = h2 ?? null;
      this.imagesTracker = c2 ?? null;
    }
    getObject(t2, e2, i2 = null) {
      if ("string" == typeof e2) {
        this.dependencyTracker?.recordNamedDependency(t2, e2);
        return e2.startsWith("g_") ? this.commonObjs.get(e2) : this.objs.get(e2);
      }
      return i2;
    }
    beginDrawing({ transform: t2, viewport: e2, transparency: i2 = false, background: n2 = null }) {
      const s2 = this.ctx.canvas.width, a2 = this.ctx.canvas.height, r2 = this.ctx.fillStyle;
      this.ctx.fillStyle = n2 || "#ffffff";
      this.ctx.fillRect(0, 0, s2, a2);
      this.ctx.fillStyle = r2;
      if (i2) {
        const t3 = this.transparentCanvasEntry = this.canvasFactory.create(s2, a2);
        this.compositeCtx = this.ctx;
        ({ canvas: this.transparentCanvas, context: this.ctx } = t3);
        this.ctx.save();
        this.ctx.transform(...getCurrentTransform(this.compositeCtx));
      }
      this.ctx.save();
      resetCtxToDefault(this.ctx);
      if (t2) {
        this.ctx.transform(...t2);
        this.outputScaleX = t2[0];
        this.outputScaleY = t2[3];
      }
      this.ctx.transform(...e2.transform);
      this.viewportScale = e2.scale;
      this.baseTransform = getCurrentTransform(this.ctx);
    }
    executeOperatorList(t2, e2, i2, n2, s2) {
      const a2 = t2.argsArray, r2 = t2.fnArray;
      let o2 = e2 || 0;
      const l2 = a2.length;
      if (l2 === o2) return o2;
      const h2 = l2 - o2 > 10 && "function" == typeof i2, c2 = h2 ? Date.now() + 15 : 0;
      let d2 = 0;
      const u2 = this.commonObjs, p2 = this.objs;
      let g2, m2;
      for (; ; ) {
        if (void 0 !== n2) {
          if (o2 === n2.nextBreakPoint) {
            n2.breakIt(o2, i2);
            return o2;
          }
          if (n2.shouldSkip(o2)) {
            if (++o2 === l2) return o2;
            continue;
          }
        }
        if (!s2 || s2(o2)) {
          g2 = r2[o2];
          m2 = a2[o2] ?? null;
          if (g2 !== B.dependency) null === m2 ? this[g2](o2) : this[g2](o2, ...m2);
          else for (const t3 of m2) {
            this.dependencyTracker?.recordNamedData(t3, o2);
            const e3 = t3.startsWith("g_") ? u2 : p2;
            if (!e3.has(t3)) {
              e3.get(t3, i2);
              return o2;
            }
          }
        }
        o2++;
        if (o2 === l2) return o2;
        if (h2 && ++d2 > 10) {
          if (Date.now() > c2) {
            i2();
            return o2;
          }
          d2 = 0;
        }
      }
    }
    endDrawing() {
      __privateMethod(this, _CanvasGraphics_instances, is_fn).call(this);
      for (const t2 of this.smaskGroupCanvases) this.canvasFactory.destroy(t2);
      this.smaskGroupCanvases.length = 0;
      this._clearPreparedSMask();
      this.tempSMask = null;
      this.smaskStack.length = 0;
      for (const t2 of __privateGet(this, _es)) __privateMethod(this, _CanvasGraphics_instances, ns_fn).call(this, t2);
      __privateGet(this, _es).length = 0;
      __privateSet(this, _Xn, null);
      __privateSet(this, _qn, null);
      __privateSet(this, _Yn, null);
      __privateSet(this, _Qn, null);
      __privateSet(this, _Jn, 1);
      __privateSet(this, _ts, null);
      __privateSet(this, _Kn, 0);
      __privateSet(this, _$n, 0);
      this.cachedPatterns.clear();
      for (const t2 of this._cachedBitmapsMap.values()) {
        for (const e2 of t2.values()) "undefined" != typeof HTMLCanvasElement && e2 instanceof HTMLCanvasElement && (e2.width = e2.height = 0);
        t2.clear();
      }
      this._cachedBitmapsMap.clear();
      __privateMethod(this, _CanvasGraphics_instances, ss_fn).call(this);
    }
    _scaleImage(t2, e2) {
      const i2 = t2.width ?? t2.displayWidth, n2 = t2.height ?? t2.displayHeight, s2 = [];
      let a2 = Math.max(Math.hypot(e2[0], e2[1]), 1), r2 = Math.max(Math.hypot(e2[2], e2[3]), 1), o2 = i2, l2 = n2;
      for (; a2 > 2 && o2 > 1 || r2 > 2 && l2 > 1; ) {
        let t3 = o2, e3 = l2;
        if (a2 > 2 && o2 > 1) {
          t3 = Math.ceil(o2 / 2);
          a2 /= o2 / t3;
        }
        if (r2 > 2 && l2 > 1) {
          e3 = Math.ceil(l2 / 2);
          r2 /= l2 / e3;
        }
        s2.push({ newWidth: t3, newHeight: e3 });
        o2 = t3;
        l2 = e3;
      }
      if (0 === s2.length) return { img: t2, paintWidth: i2, paintHeight: n2, tmpCanvas: null };
      if (1 === s2.length) {
        const { newWidth: e3, newHeight: a3 } = s2[0], r3 = this.canvasFactory.create(e3, a3);
        r3.context.drawImage(t2, 0, 0, i2, n2, 0, 0, e3, a3);
        return { img: r3.canvas, paintWidth: e3, paintHeight: a3, tmpCanvas: r3 };
      }
      let h2 = this.canvasFactory.create(1, 1), c2 = this.canvasFactory.create(1, 1), d2 = i2, u2 = n2, p2 = t2;
      for (const { newWidth: t3, newHeight: e3 } of s2) {
        this.canvasFactory.reset(c2, t3, e3);
        c2.context.drawImage(p2, 0, 0, d2, u2, 0, 0, t3, e3);
        [h2, c2] = [c2, h2];
        p2 = h2.canvas;
        d2 = t3;
        u2 = e3;
      }
      this.canvasFactory.destroy(c2);
      return { img: h2.canvas, paintWidth: d2, paintHeight: u2, tmpCanvas: h2 };
    }
    _createMaskCanvas(t2, e2) {
      const n2 = this.ctx, { width: s2, height: a2 } = e2, r2 = this.current.fillColor, o2 = this.current.patternFill, l2 = getCurrentTransform(n2);
      let h2, c2, d2, u2;
      if ((e2.bitmap || e2.data) && e2.count > 1) {
        const i2 = e2.bitmap || e2.data.buffer;
        c2 = JSON.stringify(o2 ? l2 : [l2.slice(0, 4), r2]);
        h2 = this._cachedBitmapsMap.getOrInsertComputed(i2, makeMap);
        const n3 = h2.get(c2);
        if (n3 && !o2) {
          const e3 = Math.round(Math.min(l2[0], l2[2]) + l2[4]), i3 = Math.round(Math.min(l2[1], l2[3]) + l2[5]);
          this.dependencyTracker?.recordDependencies(t2, lt);
          return { canvas: n3, offsetX: e3, offsetY: i3 };
        }
        d2 = n3;
      }
      if (!d2) {
        u2 = this.canvasFactory.create(s2, a2);
        putBinaryImageMask(u2.context, e2);
      }
      let p2 = Util.transform(l2, [1 / s2, 0, 0, -1 / a2, 0, 0]);
      p2 = Util.transform(p2, [1, 0, 0, 1, 0, -a2]);
      const g2 = i.slice();
      Util.axialAlignedBoundingBox([0, 0, s2, a2], p2, g2);
      const [m2, f2, b2, y2] = g2, v2 = Math.round(b2 - m2) || 1, A2 = Math.round(y2 - f2) || 1, w2 = this.canvasFactory.create(v2, A2), x2 = w2.context, C2 = m2, E2 = f2;
      x2.translate(-C2, -E2);
      x2.transform(...p2);
      let S2 = null;
      if (!d2) {
        const t3 = this._scaleImage(u2.canvas, getCurrentTransformInverse(x2));
        d2 = t3.img;
        S2 = t3.tmpCanvas;
        if (d2 !== u2.canvas) {
          this.canvasFactory.destroy(u2);
          u2 = null;
        }
        if (h2 && o2) {
          h2.set(c2, d2);
          S2 = null;
          u2 = null;
        }
      }
      x2.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(x2), e2.interpolate);
      drawImageAtIntegerCoords(x2, d2, 0, 0, d2.width, d2.height, 0, 0, s2, a2);
      S2 && this.canvasFactory.destroy(S2);
      u2 && this.canvasFactory.destroy(u2);
      x2.globalCompositeOperation = "source-in";
      const T2 = Util.transform(getCurrentTransformInverse(x2), [1, 0, 0, 1, -C2, -E2]);
      x2.fillStyle = o2 ? r2.getPattern(n2, this, T2, wt, t2) : r2;
      x2.fillRect(0, 0, s2, a2);
      h2 && !o2 && h2.set(c2, w2.canvas);
      this.dependencyTracker?.recordDependencies(t2, lt);
      return { canvas: w2.canvas, canvasEntry: h2 && !o2 ? null : w2, offsetX: Math.round(C2), offsetY: Math.round(E2) };
    }
    setLineWidth(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineWidth", t2);
      e2 !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1);
      this.current.lineWidth = e2;
      this.ctx.lineWidth = e2;
    }
    setLineCap(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineCap", t2);
      this.ctx.lineCap = Mt[e2];
    }
    setLineJoin(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineJoin", t2);
      this.ctx.lineJoin = Dt[e2];
    }
    setMiterLimit(t2, e2) {
      this.dependencyTracker?.recordSimpleData("miterLimit", t2);
      this.ctx.miterLimit = e2;
    }
    setDash(t2, e2, i2) {
      this.dependencyTracker?.recordSimpleData("dash", t2);
      const n2 = this.ctx;
      if (void 0 !== n2.setLineDash) {
        n2.setLineDash(e2);
        n2.lineDashOffset = i2;
      }
    }
    setRenderingIntent(t2, e2) {
    }
    setFlatness(t2, e2) {
    }
    setGState(t2, e2) {
      for (const [i2, n2] of e2) switch (i2) {
        case "LW":
          this.setLineWidth(t2, n2);
          break;
        case "LC":
          this.setLineCap(t2, n2);
          break;
        case "LJ":
          this.setLineJoin(t2, n2);
          break;
        case "ML":
          this.setMiterLimit(t2, n2);
          break;
        case "D":
          this.setDash(t2, n2[0], n2[1]);
          break;
        case "RI":
          this.setRenderingIntent(t2, n2);
          break;
        case "FL":
          this.setFlatness(t2, n2);
          break;
        case "Font":
          this.setFont(t2, n2[0], n2[1]);
          break;
        case "CA":
          this.dependencyTracker?.recordSimpleData("strokeAlpha", t2);
          this.current.strokeAlpha = n2;
          break;
        case "ca":
          this.dependencyTracker?.recordSimpleData("fillAlpha", t2);
          this.ctx.globalAlpha = this.current.fillAlpha = n2;
          break;
        case "BM":
          this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t2);
          this.ctx.globalCompositeOperation = n2;
          break;
        case "SMask":
          this.dependencyTracker?.recordSimpleData("SMask", t2);
          this.current.activeSMask = n2 ? this.tempSMask : null;
          this.current.activeSMask && (this.current.activeSMask.blendMode = this.ctx.globalCompositeOperation);
          this.tempSMask = null;
          this.checkSMaskState(t2);
          break;
        case "TR":
          this.dependencyTracker?.recordSimpleData("filter", t2);
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n2);
      }
    }
    get inSMaskMode() {
      return !!this.suspendedCtx;
    }
    _clearPreparedSMask() {
      if (this.smaskPreparedEntry) {
        this.canvasFactory.destroy(this.smaskPreparedEntry);
        this.smaskPreparedEntry = null;
      }
      this.smaskPreparedFor = null;
      this.smaskPreparedOffsetX = 0;
      this.smaskPreparedOffsetY = 0;
      this.smaskPreparedOOBAlpha = null;
    }
    _ensurePreparedSMask(t2) {
      if (t2 !== this.smaskPreparedFor) {
        this._clearPreparedSMask();
        this._prepareSMaskCanvas(t2);
      }
    }
    checkSMaskState(t2) {
      const e2 = this.inSMaskMode;
      this.current.activeSMask && !e2 ? this.beginSMaskMode(t2) : !this.current.activeSMask && e2 ? this.endSMaskMode() : this.current.activeSMask && e2 && this._ensurePreparedSMask(this.current.activeSMask);
    }
    _prepareSMaskCanvas(t2) {
      const { canvas: e2, subtype: i2, backdrop: n2, transferMap: s2 } = t2, a2 = "Luminosity" === i2 || "Alpha" === i2 && s2;
      if (!(a2 || "Luminosity" === i2 && n2)) {
        this.smaskPreparedFor = t2;
        return;
      }
      let r2;
      if ("Luminosity" === i2 && n2) {
        const [t3, e3, i3] = getRGBA(n2), a3 = Math.round(0.3 * t3 + 0.59 * e3 + 0.11 * i3);
        r2 = s2?.[a3] ?? a3;
      } else r2 = s2?.[0] ?? 0;
      const { width: o2, height: l2 } = this.ctx.canvas, h2 = o2 * l2 < 4 * (e2.width * e2.height), c2 = a2 ? { url: "Alpha" === i2 ? this.filterFactory.addAlphaFilter(s2) : this.filterFactory.addLuminosityFilter(s2), subtype: i2, transferMap: s2 } : null, d2 = "Luminosity" === i2 ? n2 : null;
      let u2, p2, g2;
      if (h2) {
        u2 = this._bakeSMaskCanvas(e2, t2.offsetX, t2.offsetY, o2, l2, d2, c2);
        p2 = 0;
        g2 = 0;
      } else {
        u2 = this._bakeSMaskCanvas(e2, 0, 0, e2.width, e2.height, d2, c2);
        p2 = t2.offsetX;
        g2 = t2.offsetY;
      }
      this.smaskPreparedEntry = u2;
      this.smaskPreparedFor = t2;
      this.smaskPreparedOffsetX = p2;
      this.smaskPreparedOffsetY = g2;
      this.smaskPreparedOOBAlpha = h2 || 0 === r2 ? null : r2;
    }
    _bakeSMaskCanvas(t2, e2, i2, n2, s2, a2, r2) {
      a2 || r2 || unreachable("_bakeSMaskCanvas with neither backdrop nor filter");
      const o2 = this.canvasFactory.create(n2, s2), l2 = o2.context;
      l2.drawImage(t2, e2, i2);
      if (a2) {
        l2.globalCompositeOperation = "destination-atop";
        l2.fillStyle = a2;
        l2.fillRect(0, 0, n2, s2);
      }
      if (!r2) return o2;
      const h2 = this.canvasFactory.create(n2, s2), c2 = h2.context;
      c2.filter = r2.url;
      const d2 = FeatureTest.isCanvasFilterSupported && "none" !== c2.filter && "" !== c2.filter;
      c2.drawImage(o2.canvas, 0, 0);
      FeatureTest.isCanvasFilterSupported && (c2.filter = "none");
      if (!d2) {
        const t3 = c2.getImageData(0, 0, n2, s2), { data: e3 } = t3, { transferMap: i3 } = r2;
        if ("Luminosity" === r2.subtype) for (let t4 = 0, n3 = e3.length; t4 < n3; t4 += 4) {
          const n4 = 0.3 * e3[t4] + 0.59 * e3[t4 + 1] + 0.11 * e3[t4 + 2] + 0.5 | 0;
          e3[t4] = e3[t4 + 1] = e3[t4 + 2] = 0;
          e3[t4 + 3] = i3?.[n4] ?? n4;
        }
        else for (let t4 = 3, n3 = e3.length; t4 < n3; t4 += 4) e3[t4] = i3[e3[t4]];
        c2.putImageData(t3, 0, 0);
      }
      this.canvasFactory.destroy(o2);
      return h2;
    }
    beginSMaskMode(t2) {
      if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
      const { width: e2, height: i2 } = this.ctx.canvas, n2 = this.canvasFactory.create(e2, i2);
      this.smaskScratchCanvas = n2;
      this.suspendedCtx = this.ctx;
      const s2 = this.ctx = n2.context;
      s2.setTransform(this.suspendedCtx.getTransform());
      copyCtxState(this.suspendedCtx, s2);
      mirrorContextOperations(s2, this.suspendedCtx);
      this._ensurePreparedSMask(this.current.activeSMask);
      this.setGState(t2, [["BM", "source-over"]]);
    }
    endSMaskMode() {
      if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
      this.ctx._removeMirroring();
      copyCtxState(this.ctx, this.suspendedCtx);
      this.ctx = this.suspendedCtx;
      this.suspendedCtx = null;
      this.canvasFactory.destroy(this.smaskScratchCanvas);
      this.smaskScratchCanvas = null;
      this._clearPreparedSMask();
    }
    compose(t2) {
      if (!this.current.activeSMask) return;
      t2 = t2 ? [Math.floor(t2[0]), Math.floor(t2[1]), Math.ceil(t2[2]), Math.ceil(t2[3])] : [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
      const e2 = this.current.activeSMask, i2 = this.suspendedCtx, n2 = __privateGet(this, _Kn) > 0 && i2 === this.ctx;
      this.composeSMask(n2 ? null : i2, e2, this.ctx, t2);
      if (!n2) {
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.restore();
      }
    }
    composeSMask(t2, e2, i2, n2) {
      const s2 = n2[0], a2 = n2[1], r2 = n2[2] - s2, o2 = n2[3] - a2;
      if (0 === r2 || 0 === o2) return;
      const l2 = this.smaskPreparedEntry;
      if (l2) {
        let t3 = s2, n3 = a2, h2 = r2, c2 = o2;
        const d2 = this.smaskPreparedOOBAlpha, u2 = null !== d2;
        if (u2) {
          t3 = Math.max(s2, e2.offsetX);
          n3 = Math.max(a2, e2.offsetY);
          h2 = Math.min(s2 + r2, e2.offsetX + e2.canvas.width) - t3;
          c2 = Math.min(a2 + o2, e2.offsetY + e2.canvas.height) - n3;
        }
        if (h2 > 0 && c2 > 0) {
          const e3 = t3 - this.smaskPreparedOffsetX, s3 = n3 - this.smaskPreparedOffsetY;
          i2.save();
          i2.globalAlpha = 1;
          i2.setTransform(1, 0, 0, 1, 0, 0);
          const a3 = new Path2D();
          a3.rect(t3, n3, h2, c2);
          i2.clip(a3);
          i2.globalCompositeOperation = "destination-in";
          i2.drawImage(l2.canvas, e3, s3, h2, c2, t3, n3, h2, c2);
          i2.restore();
        }
        u2 && d2 < 255 && this._applySMaskOOBAlpha(i2, s2, a2, r2, o2, t3, n3, t3 + h2, n3 + c2, d2);
      } else this.genericComposeSMask(e2, i2, r2, o2, s2, a2);
      if (t2) {
        t2.save();
        t2.globalAlpha = 1;
        t2.globalCompositeOperation = e2.blendMode || "source-over";
        t2.setTransform(1, 0, 0, 1, 0, 0);
        t2.drawImage(i2.canvas, s2, a2, r2, o2, s2, a2, r2, o2);
        t2.restore();
      }
    }
    _applySMaskOOBAlpha(t2, e2, i2, n2, s2, a2, r2, o2, l2, h2) {
      const c2 = a2 < o2 && r2 < l2;
      if (c2 && a2 === e2 && r2 === i2 && o2 === e2 + n2 && l2 === i2 + s2) return;
      const d2 = new Path2D();
      d2.rect(e2, i2, n2, s2);
      c2 && d2.rect(a2, r2, o2 - a2, l2 - r2);
      t2.save();
      t2.globalAlpha = h2 / 255;
      t2.setTransform(1, 0, 0, 1, 0, 0);
      t2.clip(d2, "evenodd");
      t2.globalCompositeOperation = "destination-in";
      t2.fillStyle = "#000000";
      t2.fillRect(e2, i2, n2, s2);
      t2.restore();
    }
    genericComposeSMask(t2, e2, i2, n2, s2, a2) {
      const { context: r2, offsetX: o2, offsetY: l2 } = t2;
      e2.save();
      e2.globalAlpha = 1;
      e2.setTransform(1, 0, 0, 1, 0, 0);
      const h2 = new Path2D();
      h2.rect(s2, a2, i2, n2);
      e2.clip(h2);
      e2.globalCompositeOperation = "destination-in";
      e2.drawImage(r2.canvas, s2 - o2, a2 - l2, i2, n2, s2, a2, i2, n2);
      e2.restore();
    }
    save(t2) {
      this.inSMaskMode && copyCtxState(this.ctx, this.suspendedCtx);
      this.ctx.save();
      const e2 = this.current;
      this.stateStack.push(e2);
      this.current = e2.clone();
      this.dependencyTracker?.save(t2);
    }
    restore(t2) {
      this.dependencyTracker?.restore(t2);
      if (0 !== this.stateStack.length) {
        this.current = this.stateStack.pop();
        this.ctx.restore();
        if (this.inSMaskMode) {
          copyCtxState(this.suspendedCtx, this.ctx);
          this.ctx.setTransform(this.suspendedCtx.getTransform());
        }
        this.checkSMaskState(t2);
        this.pendingClip = null;
        this._cachedScaleForStroking[0] = -1;
        this._cachedGetSinglePixelWidth = null;
      } else this.inSMaskMode && this.endSMaskMode();
    }
    transform(t2, e2, i2, n2, s2, a2, r2) {
      this.dependencyTracker?.recordIncrementalData("transform", t2);
      this.ctx.transform(e2, i2, n2, s2, a2, r2);
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
    }
    constructPath(t2, e2, i2, n2) {
      let [s2] = i2;
      if (!n2) {
        s2 || (s2 = i2[0] = new Path2D());
        e2 !== B.stroke && e2 !== B.closeStroke && (this.current.tilingPatternDims = null);
        this[e2](t2, s2);
        return;
      }
      if (null !== this.dependencyTracker) {
        const i3 = e2 === B.stroke ? this.current.lineWidth / 2 : 0;
        this.dependencyTracker.resetBBox(t2).recordBBox(t2, this.ctx, n2[0] - i3, n2[2] + i3, n2[1] - i3, n2[3] + i3).recordDependencies(t2, ["transform"]);
      }
      s2 instanceof Path2D || (s2 = i2[0] = makePathFromDrawOPS(s2));
      Util.axialAlignedBoundingBox(n2, getCurrentTransform(this.ctx), this.current.minMax);
      const a2 = this.current.tilingPatternDims;
      if (a2 && e2 !== B.stroke && e2 !== B.closeStroke && this.current.fillColor instanceof TilingPattern) {
        const t3 = Util.intersect(this.current.clipBox, this.current.minMax);
        t3 ? this.current.fillColor.updatePatternDims(t3, a2) : this.current.tilingPatternDims = null;
      }
      this[e2](t2, s2);
      this._pathStartIdx = t2;
    }
    closePath(t2) {
      this.ctx.closePath();
    }
    stroke(t2, e2, i2 = true) {
      const n2 = i2 && __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.strokeAlpha), s2 = this.ctx, a2 = this.current.strokeColor;
      s2.globalAlpha = this.current.strokeAlpha;
      if (this.contentVisible) if ("object" == typeof a2 && a2?.getPattern) {
        const i3 = a2.isModifyingCurrentTransform() ? s2.getTransform() : null;
        s2.save();
        s2.strokeStyle = a2.getPattern(s2, this, getCurrentTransformInverse(s2), xt, t2);
        if (i3) {
          const t3 = new Path2D();
          t3.addPath(e2, s2.getTransform().invertSelf().multiplySelf(i3));
          e2 = t3;
        }
        this.rescaleAndStroke(e2, false);
        s2.restore();
      } else this.rescaleAndStroke(e2, true);
      this.dependencyTracker?.recordDependencies(t2, it);
      i2 && this.consumePath(t2, e2, this.current.getClippedPathBoundingBox(xt, getCurrentTransform(this.ctx)));
      s2.globalAlpha = this.current.fillAlpha;
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, n2);
    }
    closeStroke(t2, e2) {
      this.stroke(t2, e2);
    }
    fill(t2, e2, i2 = true) {
      const n2 = i2 && __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha), s2 = this.ctx, a2 = this.current.fillColor, r2 = this.current.patternFill;
      let o2 = false;
      const l2 = this.current.getClippedPathBoundingBox();
      this.dependencyTracker?.recordDependencies(t2, nt);
      if (r2) {
        const r3 = this.current.tilingPatternDims, h2 = r3 && a2.canSkipPatternCanvas(r3);
        if (h2) {
          a2.drawPattern(this, e2, this.pendingEOFill, h2, t2);
          this.pendingEOFill = false;
          i2 && this.consumePath(t2, e2, l2);
          this.current.tilingPatternDims = null;
          __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, n2);
          return;
        }
        const c2 = a2.isModifyingCurrentTransform() ? s2.getTransform() : null;
        this.dependencyTracker?.save(t2);
        s2.save();
        s2.fillStyle = a2.getPattern(s2, this, getCurrentTransformInverse(s2), wt, t2);
        if (c2) {
          const t3 = new Path2D();
          t3.addPath(e2, s2.getTransform().invertSelf().multiplySelf(c2));
          e2 = t3;
        }
        o2 = true;
      }
      if (this.contentVisible && null !== l2) if (this.pendingEOFill) {
        s2.fill(e2, "evenodd");
        this.pendingEOFill = false;
      } else s2.fill(e2);
      if (o2) {
        s2.restore();
        this.dependencyTracker?.restore(t2);
      }
      i2 && this.consumePath(t2, e2, l2);
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, n2);
    }
    eoFill(t2, e2) {
      this.pendingEOFill = true;
      this.fill(t2, e2);
    }
    fillStroke(t2, e2) {
      const i2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, Math.min(this.current.fillAlpha, this.current.strokeAlpha));
      this.fill(t2, e2, false);
      this.stroke(t2, e2, false);
      this.consumePath(t2, e2);
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, i2);
    }
    eoFillStroke(t2, e2) {
      this.pendingEOFill = true;
      this.fillStroke(t2, e2);
    }
    closeFillStroke(t2, e2) {
      this.fillStroke(t2, e2);
    }
    closeEOFillStroke(t2, e2) {
      this.pendingEOFill = true;
      this.fillStroke(t2, e2);
    }
    endPath(t2, e2) {
      this.consumePath(t2, e2);
    }
    rawFillPath(t2, e2) {
      const i2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha);
      this.ctx.fill(e2);
      this.dependencyTracker?.recordDependencies(t2, at).recordOperation(t2);
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, i2);
    }
    clip(t2) {
      this.dependencyTracker?.recordFutureForcedDependency("clipMode", t2);
      this.pendingClip = Pt;
    }
    eoClip(t2) {
      this.dependencyTracker?.recordFutureForcedDependency("clipMode", t2);
      this.pendingClip = It;
    }
    beginText(t2) {
      this.current.textMatrix = null;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
      this.dependencyTracker?.recordOpenMarker(t2).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t2);
    }
    endText(t2) {
      const e2 = this.pendingTextPaths, i2 = this.ctx;
      if (this.dependencyTracker) {
        const { dependencyTracker: i3 } = this;
        void 0 !== e2 && i3.recordFutureForcedDependency("textClip", i3.getOpenMarker()).recordFutureForcedDependency("textClip", t2);
        i3.recordCloseMarker(t2);
      }
      if (void 0 !== e2) {
        const t3 = new Path2D(), n2 = i2.getTransform().invertSelf();
        for (const { transform: i3, x: s2, y: a2, fontSize: r2, path: o2 } of e2) o2 && t3.addPath(o2, new DOMMatrix(i3).preMultiplySelf(n2).translate(s2, a2).scale(r2, -r2));
        i2.clip(t3);
      }
      delete this.pendingTextPaths;
    }
    setCharSpacing(t2, e2) {
      this.dependencyTracker?.recordSimpleData("charSpacing", t2);
      this.current.charSpacing = e2;
    }
    setWordSpacing(t2, e2) {
      this.dependencyTracker?.recordSimpleData("wordSpacing", t2);
      this.current.wordSpacing = e2;
    }
    setHScale(t2, e2) {
      this.dependencyTracker?.recordSimpleData("hScale", t2);
      this.current.textHScale = e2 / 100;
    }
    setLeading(t2, e2) {
      this.dependencyTracker?.recordSimpleData("leading", t2);
      this.current.leading = -e2;
    }
    setFont(t2, e2, i2) {
      this.dependencyTracker?.recordSimpleData("font", t2).recordSimpleDataFromNamed("fontObj", e2, t2);
      const s2 = this.commonObjs.get(e2), a2 = this.current;
      if (!s2) throw new Error(`Can't find font for ${e2}`);
      a2.fontMatrix = s2.fontMatrix || n;
      0 !== a2.fontMatrix[0] && 0 !== a2.fontMatrix[3] || warn("Invalid font matrix for font " + e2);
      if (i2 < 0) {
        i2 = -i2;
        a2.fontDirection = -1;
      } else a2.fontDirection = 1;
      this.current.font = s2;
      this.current.fontSize = i2;
      if (s2.isType3Font) return;
      const r2 = s2.loadedName || "sans-serif", o2 = s2.systemFontInfo?.css || `"${r2}", ${s2.fallbackName}`;
      let l2 = "normal";
      s2.black ? l2 = "900" : s2.bold && (l2 = "bold");
      const h2 = s2.italic ? "italic" : "normal", c2 = MathClamp(i2, 16, 100);
      this.current.fontSizeScale = i2 / c2;
      this.ctx.font = `${h2} ${l2} ${c2}px ${o2}`;
    }
    setTextRenderingMode(t2, e2) {
      this.dependencyTracker?.recordSimpleData("textRenderingMode", t2);
      this.current.textRenderingMode = e2;
    }
    setTextRise(t2, e2) {
      this.dependencyTracker?.recordSimpleData("textRise", t2);
      this.current.textRise = e2;
    }
    moveText(t2, e2, i2) {
      this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t2);
      this.current.x = this.current.lineX += e2;
      this.current.y = this.current.lineY += i2;
    }
    setLeadingMoveText(t2, e2, i2) {
      this.setLeading(t2, -i2);
      this.moveText(t2, e2, i2);
    }
    setTextMatrix(t2, e2) {
      this.dependencyTracker?.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t2);
      const { current: i2 } = this;
      i2.textMatrix = e2;
      i2.textMatrixScale = Math.hypot(e2[0], e2[1]);
      i2.x = i2.lineX = 0;
      i2.y = i2.lineY = 0;
    }
    nextLine(t2) {
      this.moveText(t2, 0, this.current.leading);
      this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t2);
    }
    paintChar(t2, e2, i2, n2, s2, a2) {
      const r2 = this.ctx, o2 = this.current, l2 = o2.font, h2 = o2.textRenderingMode, c2 = o2.fontSize / o2.fontSizeScale, d2 = h2 & E, u2 = !!(h2 & S), p2 = o2.patternFill && !l2.missingFile, g2 = o2.patternStroke && !l2.missingFile;
      let m2;
      (l2.disableFontFace || u2 || p2 || g2) && !l2.missingFile && (m2 = l2.getPathGenerator(this.commonObjs, e2));
      if (m2 && (l2.disableFontFace || p2 || g2)) {
        r2.save();
        r2.translate(i2, n2);
        r2.scale(c2, -c2);
        this.dependencyTracker?.recordCharacterBBox(t2, r2, l2);
        let e3;
        if (d2 === A || d2 === x) if (s2) {
          e3 = r2.getTransform();
          r2.setTransform(...s2);
          const t3 = __privateMethod(this, _CanvasGraphics_instances, cs_fn).call(this, m2, e3, s2);
          r2.fill(t3);
        } else r2.fill(m2);
        if (d2 === w || d2 === x) if (a2) {
          e3 || (e3 = r2.getTransform());
          r2.setTransform(...a2);
          const { a: t3, b: i3, c: n3, d: s3 } = e3, o3 = Util.inverseTransform(a2), l3 = Util.transform([t3, i3, n3, s3, 0, 0], o3);
          Util.singularValueDecompose2dScale(l3, _t);
          r2.lineWidth *= Math.max(_t[0], _t[1]) / c2;
          r2.stroke(__privateMethod(this, _CanvasGraphics_instances, cs_fn).call(this, m2, e3, a2));
        } else {
          r2.lineWidth /= c2;
          r2.stroke(m2);
        }
        r2.restore();
      } else {
        if (d2 === A || d2 === x) {
          r2.fillText(e2, i2, n2);
          this.dependencyTracker?.recordCharacterBBox(t2, r2, l2, c2, i2, n2, () => r2.measureText(e2));
        }
        if (d2 === w || d2 === x) {
          this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t2, r2, l2, c2, i2, n2, () => r2.measureText(e2)).recordDependencies(t2, it);
          r2.strokeText(e2, i2, n2);
        }
      }
      if (u2) {
        (this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: getCurrentTransform(r2), x: i2, y: n2, fontSize: c2, path: m2 });
        this.dependencyTracker?.recordCharacterBBox(t2, r2, l2, c2, i2, n2);
      }
    }
    get isFontSubpixelAAEnabled() {
      const t2 = this.canvasFactory.create(10, 10), e2 = t2.context;
      e2.scale(1.5, 1);
      e2.fillText("I", 0, 10);
      const i2 = e2.getImageData(0, 0, 10, 10).data;
      this.canvasFactory.destroy(t2);
      let n2 = false;
      for (let t3 = 3; t3 < i2.length; t3 += 4) if (i2[t3] > 0 && i2[t3] < 255) {
        n2 = true;
        break;
      }
      return shadow(this, "isFontSubpixelAAEnabled", n2);
    }
    showText(t2, e2) {
      if (this.dependencyTracker) {
        this.dependencyTracker.recordDependencies(t2, rt).resetBBox(t2);
        this.current.textRenderingMode & S && this.dependencyTracker.recordFutureForcedDependency("textClip", t2).inheritPendingDependenciesAsFutureForcedDependencies();
      }
      const i2 = this.current, n2 = i2.font;
      if (n2.isType3Font) {
        const n3 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, i2.fillAlpha);
        this.showType3Text(t2, e2);
        this.dependencyTracker?.recordShowTextOperation(t2);
        __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, n3);
        return;
      }
      const s2 = i2.fontSize;
      if (0 === s2) {
        this.dependencyTracker?.recordOperation(t2);
        return;
      }
      const a2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, i2.fillAlpha), r2 = this.ctx, o2 = i2.fontSizeScale, l2 = i2.charSpacing, h2 = i2.wordSpacing, c2 = i2.fontDirection, d2 = i2.textHScale * c2, u2 = e2.length, p2 = n2.vertical, g2 = p2 ? 1 : -1, m2 = n2.defaultVMetrics, f2 = s2 * i2.fontMatrix[0], b2 = i2.textRenderingMode === A && !n2.disableFontFace && !i2.patternFill;
      r2.save();
      i2.textMatrix && r2.transform(...i2.textMatrix);
      r2.translate(i2.x, i2.y + i2.textRise);
      c2 > 0 ? r2.scale(d2, -1) : r2.scale(d2, 1);
      let y2, v2;
      const C2 = i2.textRenderingMode & E, T2 = C2 === A || C2 === x, k2 = C2 === w || C2 === x;
      let _2 = i2.lineWidth;
      const M2 = i2.textMatrixScale;
      0 === M2 || 0 === _2 ? k2 && (_2 = this.getSinglePixelWidth()) : _2 /= M2;
      if (1 !== o2) {
        r2.scale(o2, o2);
        _2 /= o2;
      }
      r2.lineWidth = _2;
      if (T2 && i2.patternFill) {
        r2.save();
        const e3 = i2.fillColor.getPattern(r2, this, getCurrentTransformInverse(r2), wt, t2);
        y2 = getCurrentTransform(r2);
        r2.restore();
        r2.fillStyle = e3;
      }
      if (k2 && i2.patternStroke) {
        r2.save();
        const e3 = i2.strokeColor.getPattern(r2, this, getCurrentTransformInverse(r2), xt, t2);
        v2 = getCurrentTransform(r2);
        r2.restore();
        r2.strokeStyle = e3;
      }
      if (n2.isInvalidPDFjsFont) {
        const n3 = [];
        let s3 = 0;
        for (const t3 of e2) {
          n3.push(t3.unicode);
          s3 += t3.width;
        }
        const o3 = n3.join("");
        r2.fillText(o3, 0, 0);
        if (null !== this.dependencyTracker) {
          const e3 = r2.measureText(o3);
          this.dependencyTracker.recordBBox(t2, this.ctx, -e3.actualBoundingBoxLeft, e3.actualBoundingBoxRight, -e3.actualBoundingBoxAscent, e3.actualBoundingBoxDescent).recordShowTextOperation(t2);
        }
        i2.x += s3 * f2 * d2;
        r2.restore();
        this.compose();
        __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, a2);
        return;
      }
      let D2, P2 = 0;
      for (D2 = 0; D2 < u2; ++D2) {
        const i3 = e2[D2];
        if ("number" == typeof i3) {
          P2 += g2 * i3 * s2 / 1e3;
          continue;
        }
        let a3 = false;
        const d3 = (i3.isSpace ? h2 : 0) + l2, u3 = i3.fontChar, A2 = i3.accent;
        let w2, x2, C3, E2 = i3.width;
        if (p2) {
          const t3 = i3.vmetric || m2, e3 = -(i3.vmetric ? t3[1] : 0.5 * E2) * f2, n3 = t3[2] * f2;
          E2 = t3 ? -t3[0] : E2;
          w2 = e3 / o2;
          x2 = (P2 + n3) / o2;
        } else {
          w2 = P2 / o2;
          x2 = 0;
        }
        if (n2.remeasure && E2 > 0) {
          C3 = r2.measureText(u3);
          const t3 = 1e3 * C3.width / s2 * o2;
          if (E2 < t3 && this.isFontSubpixelAAEnabled) {
            const e3 = E2 / t3;
            a3 = true;
            r2.save();
            r2.scale(e3, 1);
            w2 /= e3;
          } else E2 !== t3 && (w2 += (E2 - t3) / 2e3 * s2 / o2);
        }
        if (this.contentVisible && (i3.isInFont || n2.missingFile)) if (b2 && !A2) {
          r2.fillText(u3, w2, x2);
          this.dependencyTracker?.recordCharacterBBox(t2, r2, C3 ? { bbox: null } : n2, s2 / o2, w2, x2, () => C3 ?? r2.measureText(u3));
        } else {
          this.paintChar(t2, u3, w2, x2, y2, v2);
          if (A2) {
            const e3 = w2 + s2 * A2.offset.x / o2, i4 = x2 - s2 * A2.offset.y / o2;
            this.paintChar(t2, A2.fontChar, e3, i4, y2, v2);
          }
        }
        P2 += p2 ? E2 * f2 - d3 * c2 : E2 * f2 + d3 * c2;
        a3 && r2.restore();
      }
      p2 ? i2.y -= P2 : i2.x += P2 * d2;
      r2.restore();
      this.compose();
      this.dependencyTracker?.recordShowTextOperation(t2);
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, a2);
    }
    showType3Text(t2, e2) {
      const i2 = this.ctx, s2 = this.current, a2 = s2.font, r2 = s2.fontSize, o2 = s2.fontDirection, l2 = a2.vertical ? 1 : -1, h2 = s2.charSpacing, c2 = s2.wordSpacing, d2 = s2.textHScale * o2, u2 = s2.fontMatrix || n, p2 = e2.length;
      let g2, m2, f2, b2;
      if (s2.textRenderingMode === C || 0 === r2) return;
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
      i2.save();
      s2.textMatrix && i2.transform(...s2.textMatrix);
      i2.translate(s2.x, s2.y + s2.textRise);
      i2.scale(d2, o2);
      const y2 = this.dependencyTracker;
      this.dependencyTracker = y2 ? new CanvasNestedDependencyTracker(y2, t2) : null;
      for (g2 = 0; g2 < p2; ++g2) {
        m2 = e2[g2];
        if ("number" == typeof m2) {
          b2 = l2 * m2 * r2 / 1e3;
          this.ctx.translate(b2, 0);
          s2.x += b2 * d2;
          continue;
        }
        const t3 = (m2.isSpace ? c2 : 0) + h2, n2 = a2.charProcOperatorList[m2.operatorListId];
        if (n2) {
          if (this.contentVisible) {
            this.save();
            if (n2.fnArray[0] === B.setCharWidth) {
              s2.fillAlpha = s2.strokeAlpha = 1;
              i2.globalAlpha = 1;
            }
            i2.scale(r2, r2);
            i2.transform(...u2);
            this.executeOperatorList(n2);
            this.restore();
          }
        } else warn(`Type3 character "${m2.operatorListId}" is not available.`);
        const o3 = [m2.width, 0];
        Util.applyTransform(o3, u2);
        f2 = o3[0] * r2 + t3;
        i2.translate(f2, 0);
        s2.x += f2 * d2;
      }
      i2.restore();
      y2 && (this.dependencyTracker = y2);
    }
    setCharWidth(t2, e2, i2) {
    }
    setCharWidthAndBounds(t2, e2, i2, n2, s2, a2, r2) {
      const o2 = new Path2D();
      o2.rect(n2, s2, a2 - n2, r2 - s2);
      this.ctx.clip(o2);
      this.dependencyTracker?.recordBBox(t2, this.ctx, n2, a2, s2, r2).recordClipBox(t2, this.ctx, n2, a2, s2, r2);
      this.endPath(t2);
    }
    getColorN_Pattern(t2, e2) {
      let i2;
      if ("TilingPattern" === e2[0]) {
        const t3 = this.baseTransform || getCurrentTransform(this.ctx), n2 = { createCanvasGraphics: (t4, e3) => new _CanvasGraphics(t4, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }, void 0, void 0, this.dependencyTracker ? new CanvasNestedDependencyTracker(this.dependencyTracker, e3, true) : null) };
        i2 = new TilingPattern(e2, this.ctx, n2, t3);
      } else i2 = this._getPattern(t2, e2[1], e2[2]);
      return i2;
    }
    setStrokeColorN(t2, ...e2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2);
      this.current.strokeColor = this.getColorN_Pattern(t2, e2);
      this.current.patternStroke = true;
    }
    setFillColorN(t2, ...e2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2);
      const i2 = this.current.fillColor = this.getColorN_Pattern(t2, e2);
      this.current.patternFill = true;
      this.current.tilingPatternDims = i2 instanceof TilingPattern ? [0, 0, 0, 0] : null;
    }
    setStrokeRGBColor(t2, e2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2);
      this.ctx.strokeStyle = this.current.strokeColor = e2;
      this.current.patternStroke = false;
    }
    setStrokeTransparent(t2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2);
      this.ctx.strokeStyle = this.current.strokeColor = "transparent";
      this.current.patternStroke = false;
    }
    setFillRGBColor(t2, e2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2);
      this.ctx.fillStyle = this.current.fillColor = e2;
      this.current.patternFill = false;
      this.current.tilingPatternDims = null;
    }
    setFillTransparent(t2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2);
      this.ctx.fillStyle = this.current.fillColor = "transparent";
      this.current.patternFill = false;
      this.current.tilingPatternDims = null;
    }
    _getPattern(t2, e2, i2 = null) {
      let n2;
      if (this.cachedPatterns.has(e2)) n2 = this.cachedPatterns.get(e2);
      else {
        n2 = (function getShadingPattern(t3) {
          switch (t3[0]) {
            case "RadialAxial":
              return new RadialAxialShadingPattern(t3);
            case "Mesh":
              return new MeshShadingPattern(t3);
            case "Dummy":
              return new DummyShadingPattern();
          }
          throw new Error(`Unknown IR type: ${t3[0]}`);
        })(this.getObject(t2, e2));
        this.cachedPatterns.set(e2, n2);
      }
      i2 && (n2.matrix = i2);
      return n2;
    }
    shadingFill(t2, e2) {
      if (!this.contentVisible) return;
      const n2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha), s2 = this.ctx;
      this.save(t2);
      const a2 = this._getPattern(t2, e2);
      s2.fillStyle = a2.getPattern(s2, this, getCurrentTransformInverse(s2), Ct, t2);
      const r2 = getCurrentTransformInverse(s2);
      if (r2) {
        const { width: t3, height: e3 } = s2.canvas, n3 = i.slice();
        Util.axialAlignedBoundingBox([0, 0, t3, e3], r2, n3);
        const [a3, o2, l2, h2] = n3;
        this.ctx.fillRect(a3, o2, l2 - a3, h2 - o2);
      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      this.dependencyTracker?.resetBBox(t2).recordFullPageBBox(t2).recordDependencies(t2, ot).recordDependencies(t2, nt).recordOperation(t2);
      this.compose(this.current.getClippedPathBoundingBox());
      this.restore(t2);
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, n2);
    }
    beginInlineImage() {
      unreachable("Should not call beginInlineImage");
    }
    beginImageData() {
      unreachable("Should not call beginImageData");
    }
    paintFormXObjectBegin(t2, e2, i2) {
      if (this.contentVisible) {
        this.save(t2);
        this.baseTransformStack.push(this.baseTransform);
        e2 && this.transform(t2, ...e2);
        this.baseTransform = getCurrentTransform(this.ctx);
        if (i2) {
          Util.axialAlignedBoundingBox(i2, this.baseTransform, this.current.minMax);
          const [e3, n2, s2, a2] = i2, r2 = new Path2D();
          r2.rect(e3, n2, s2 - e3, a2 - n2);
          this.ctx.clip(r2);
          this.dependencyTracker?.recordClipBox(t2, this.ctx, e3, s2, n2, a2);
          this.endPath(t2);
        }
      }
    }
    paintFormXObjectEnd(t2) {
      if (this.contentVisible) {
        this.restore(t2);
        this.baseTransform = this.baseTransformStack.pop();
      }
    }
    beginGroup(t2, e2) {
      if (!this.contentVisible) return;
      this.save(t2);
      const { inSMaskMode: n2 } = this;
      if (n2) {
        this.endSMaskMode();
        this.current.activeSMask = null;
      }
      const s2 = this.ctx;
      if (!(e2.needsIsolation && (e2.isolated || e2.hasSoftMask) || e2.knockout || e2.isGray || 0 !== __privateGet(this, _$n) || 1 !== s2.globalAlpha || "source-over" !== s2.globalCompositeOperation || n2)) {
        if (e2.bbox) {
          let t3 = new Path2D();
          const [i2, n3, a3, r3] = e2.bbox;
          t3.rect(i2, n3, a3 - i2, r3 - n3);
          if (e2.matrix) {
            const i3 = new Path2D();
            i3.addPath(t3, new DOMMatrix(e2.matrix));
            t3 = i3;
          }
          s2.clip(t3);
        }
        this.groupStack.push(null);
        __privateGet(this, _es).push(null);
        this.groupLevel++;
        return;
      }
      e2.isolated || e2.knockout || 0 !== __privateGet(this, _$n) || info("TODO: Fully support non-isolated non-knockout groups.");
      const a2 = getCurrentTransform(s2);
      e2.matrix && s2.transform(...e2.matrix);
      const r2 = [0, 0, s2.canvas.width, s2.canvas.height];
      let o2;
      if (e2.bbox) {
        o2 = i.slice();
        Util.axialAlignedBoundingBox(e2.bbox, getCurrentTransform(s2), o2);
        o2 = Util.intersect(o2, r2) || [0, 0, 0, 0];
      } else o2 = r2;
      const l2 = Math.floor(o2[0]), h2 = Math.floor(o2[1]), c2 = Math.max(Math.ceil(o2[2]) - l2, 1), d2 = Math.max(Math.ceil(o2[3]) - h2, 1);
      this.current.startNewPathAndClipBox([0, 0, c2, d2]);
      const u2 = this.canvasFactory.create(c2, d2);
      e2.smask && this.smaskGroupCanvases.push(u2);
      const p2 = u2.context, g2 = e2.knockout && !e2.isolated ? s2 : null, m2 = !e2.isolated && !e2.knockout && !e2.smask && e2.needsIsolation && __privateGet(this, _$n) > 0, f2 = e2.knockout ? this.canvasFactory.create(c2, d2) : null, b2 = __privateGet(this, _$n);
      e2.knockout ? __privateWrapper(this, _$n)._++ : __privateSet(this, _$n, 0);
      p2.translate(-l2, -h2);
      p2.transform(...a2);
      if (!e2.isolated && !e2.smask && n2 && e2.needsIsolation) {
        p2.save();
        p2.setTransform(1, 0, 0, 1, 0, 0);
        p2.drawImage(s2.canvas, -l2, -h2);
        p2.restore();
      }
      if (e2.bbox) {
        let t3 = new Path2D();
        const [i2, n3, s3, a3] = e2.bbox;
        t3.rect(i2, n3, s3 - i2, a3 - n3);
        if (e2.matrix) {
          const i3 = new Path2D();
          i3.addPath(t3, new DOMMatrix(e2.matrix));
          t3 = i3;
        }
        p2.clip(t3);
      }
      e2.smask && this.smaskStack.push({ canvas: u2.canvas, context: p2, offsetX: l2, offsetY: h2, subtype: e2.smask.subtype, backdrop: e2.smask.backdrop, transferMap: e2.smask.transferMap || null });
      if (!e2.smask || this.dependencyTracker) {
        s2.setTransform(1, 0, 0, 1, 0, 0);
        s2.translate(l2, h2);
        s2.save();
      }
      copyCtxState(s2, p2);
      this.ctx = p2;
      this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(s2);
      this.setGState(t2, [["BM", "source-over"], ["ca", 1], ["CA", 1], ["TR", null]]);
      this.groupStack.push(s2);
      __privateGet(this, _es).push({ backdropCtx: g2, savedKnockoutLevel: b2, offsetX: l2, offsetY: h2, hasInnerBackdrop: m2, knockoutMaskEntry: f2, knockoutTempEntry: null, knockoutBackdropEntry: null });
      this.groupLevel++;
    }
    endGroup(t2, e2) {
      if (!this.contentVisible) return;
      this.groupLevel--;
      const n2 = this.ctx, s2 = this.groupStack.pop(), a2 = __privateGet(this, _es).pop();
      a2 && __privateSet(this, _$n, a2.savedKnockoutLevel);
      if (null !== s2) {
        e2.isGray && __privateMethod(this, _CanvasGraphics_instances, ds_fn).call(this, n2);
        this.ctx = s2;
        this.ctx.imageSmoothingEnabled = false;
        this.dependencyTracker?.popBaseTransform();
        if (e2.smask) {
          this.tempSMask = this.smaskStack.pop();
          this.restore(t2);
          if (this.dependencyTracker) {
            this.ctx.restore();
            this.inSMaskMode && this.ctx.setTransform(this.suspendedCtx.getTransform());
          }
          __privateMethod(this, _CanvasGraphics_instances, ns_fn).call(this, a2);
        } else {
          this.ctx.restore();
          const e3 = getCurrentTransform(this.ctx);
          this.restore(t2);
          this.ctx.save();
          this.ctx.setTransform(...e3);
          const r2 = i.slice();
          Util.axialAlignedBoundingBox([0, 0, n2.canvas.width, n2.canvas.height], e3, r2);
          const o2 = __privateGet(this, _es).at(-1);
          if (__privateGet(this, _$n) > 0) if (a2.hasInnerBackdrop) {
            const { width: t3, height: i2 } = n2.canvas, r3 = this.canvasFactory.create(t3, i2), o3 = r3.context;
            o3.drawImage(s2.canvas, a2.offsetX, a2.offsetY, t3, i2, 0, 0, t3, i2);
            o3.globalCompositeOperation = "source-over";
            o3.drawImage(n2.canvas, 0, 0);
            const l2 = __privateMethod(this, _CanvasGraphics_instances, as_fn).call(this, n2.canvas);
            o3.globalCompositeOperation = "destination-in";
            o3.drawImage(l2.canvas, 0, 0);
            const h2 = this.ctx.globalCompositeOperation, c2 = this.ctx.globalAlpha, d2 = this.ctx.filter;
            this.ctx.save();
            this.ctx.setTransform(...e3);
            this.ctx.globalAlpha = 1;
            FeatureTest.isCanvasFilterSupported && (this.ctx.filter = "none");
            this.ctx.globalCompositeOperation = "destination-out";
            this.ctx.drawImage(l2.canvas, 0, 0);
            this.ctx.globalCompositeOperation = h2;
            this.ctx.globalAlpha = c2;
            FeatureTest.isCanvasFilterSupported && (this.ctx.filter = d2 ?? "none");
            this.ctx.drawImage(r3.canvas, 0, 0);
            this.ctx.restore();
            this.canvasFactory.destroy(l2);
            this.canvasFactory.destroy(r3);
          } else {
            const t3 = o2?.backdropCtx ?? null;
            __privateMethod(this, _CanvasGraphics_instances, os_fn).call(this, this.ctx, n2.canvas, { backdropCanvas: t3?.canvas ?? null, destTransform: e3, backdropOffset: t3 ? [o2.offsetX + a2.offsetX, o2.offsetY + a2.offsetY] : [0, 0], sourceAlpha: this.ctx.globalAlpha, sourceFilter: this.ctx.filter });
          }
          else this.ctx.drawImage(n2.canvas, 0, 0);
          this.ctx.restore();
          this.canvasFactory.destroy({ canvas: n2.canvas, context: n2 });
          __privateMethod(this, _CanvasGraphics_instances, ns_fn).call(this, a2);
          this.compose(r2);
        }
      } else this.restore(t2);
    }
    beginAnnotation(t2, e2, i2, n2, s2, a2, r2) {
      __privateMethod(this, _CanvasGraphics_instances, is_fn).call(this);
      resetCtxToDefault(this.ctx);
      this.ctx.save();
      this.save(t2);
      this.baseTransform && this.ctx.setTransform(...this.baseTransform);
      if (i2) {
        const s3 = i2[2] - i2[0], o2 = i2[3] - i2[1];
        if (a2 && this.annotationCanvasMap) {
          (n2 = n2.slice())[4] -= i2[0];
          n2[5] -= i2[1];
          (i2 = i2.slice())[0] = i2[1] = 0;
          i2[2] = s3;
          i2[3] = o2;
          Util.singularValueDecompose2dScale(getCurrentTransform(this.ctx), _t);
          const { viewportScale: t3 } = this, a3 = Math.ceil(s3 * this.outputScaleX * t3), l2 = Math.ceil(o2 * this.outputScaleY * t3);
          this.annotationCanvas = this.canvasFactory.create(a3, l2);
          const { canvas: h2, context: c2 } = this.annotationCanvas;
          if (r2) {
            const t4 = this.annotationCanvasMap.getOrInsertComputed(e2, makeArr);
            h2.setAttribute("data-canvas-name", r2);
            const i3 = t4.findIndex((t5) => t5.getAttribute("data-canvas-name") === r2);
            -1 === i3 ? t4.push(h2) : t4[i3] = h2;
          } else this.annotationCanvasMap.set(e2, h2);
          this.annotationCanvas.savedCtx = this.ctx;
          this.ctx = c2;
          this.ctx.save();
          this.ctx.setTransform(_t[0], 0, 0, -_t[1], 0, o2 * _t[1]);
          resetCtxToDefault(this.ctx);
        } else {
          resetCtxToDefault(this.ctx);
          this.endPath(t2);
          const e3 = new Path2D();
          e3.rect(i2[0], i2[1], s3, o2);
          this.ctx.clip(e3);
        }
      }
      this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
      this.baseTransformStack.push(this.baseTransform);
      this.transform(t2, ...n2);
      this.transform(t2, ...s2);
      this.baseTransform = getCurrentTransform(this.ctx);
    }
    endAnnotation(t2) {
      if (this.annotationCanvas) {
        this.ctx.restore();
        __privateMethod(this, _CanvasGraphics_instances, ss_fn).call(this);
        this.ctx = this.annotationCanvas.savedCtx;
        delete this.annotationCanvas.savedCtx;
        delete this.annotationCanvas;
      }
      this.baseTransform = this.baseTransformStack.pop();
    }
    paintImageMaskXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = e2.count;
      (e2 = this.getObject(t2, e2.data, e2)).count = i2;
      const n2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha), s2 = this.ctx, a2 = this._createMaskCanvas(t2, e2), r2 = a2.canvas;
      s2.save();
      s2.setTransform(1, 0, 0, 1, 0, 0);
      s2.drawImage(r2, a2.offsetX, a2.offsetY);
      this.dependencyTracker?.resetBBox(t2).recordBBox(t2, this.ctx, a2.offsetX, a2.offsetX + r2.width, a2.offsetY, a2.offsetY + r2.height).recordOperation(t2);
      s2.restore();
      a2.canvasEntry && this.canvasFactory.destroy(a2.canvasEntry);
      this.compose();
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, n2);
    }
    paintImageMaskXObjectRepeat(t2, e2, i2, n2 = 0, s2 = 0, a2, r2) {
      if (!this.contentVisible) return;
      e2 = this.getObject(t2, e2.data, e2);
      const o2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha), l2 = this.ctx;
      l2.save();
      const h2 = getCurrentTransform(l2);
      l2.transform(i2, n2, s2, a2, 0, 0);
      const c2 = this._createMaskCanvas(t2, e2);
      l2.setTransform(1, 0, 0, 1, c2.offsetX - h2[4], c2.offsetY - h2[5]);
      this.dependencyTracker?.resetBBox(t2);
      for (let e3 = 0, o3 = r2.length; e3 < o3; e3 += 2) {
        const o4 = Util.transform(h2, [i2, n2, s2, a2, r2[e3], r2[e3 + 1]]);
        l2.drawImage(c2.canvas, o4[4], o4[5]);
        this.dependencyTracker?.recordBBox(t2, this.ctx, o4[4], o4[4] + c2.canvas.width, o4[5], o4[5] + c2.canvas.height);
      }
      l2.restore();
      c2.canvasEntry && this.canvasFactory.destroy(c2.canvasEntry);
      this.compose();
      this.dependencyTracker?.recordOperation(t2);
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, o2);
    }
    paintImageMaskXObjectGroup(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha), n2 = this.ctx, s2 = this.current.fillColor, a2 = this.current.patternFill;
      this.dependencyTracker?.resetBBox(t2).recordDependencies(t2, lt);
      for (const i3 of e2) {
        const { data: e3, width: r2, height: o2, transform: l2 } = i3, h2 = this.canvasFactory.create(r2, o2), c2 = h2.context;
        c2.save();
        putBinaryImageMask(c2, this.getObject(t2, e3, i3));
        c2.globalCompositeOperation = "source-in";
        c2.fillStyle = a2 ? s2.getPattern(c2, this, getCurrentTransformInverse(n2), wt, t2) : s2;
        c2.fillRect(0, 0, r2, o2);
        c2.restore();
        n2.save();
        n2.transform(...l2);
        n2.scale(1, -1);
        drawImageAtIntegerCoords(n2, h2.canvas, 0, 0, r2, o2, 0, -1, 1, 1);
        this.canvasFactory.destroy(h2);
        this.dependencyTracker?.recordBBox(t2, n2, 0, r2, 0, o2);
        n2.restore();
      }
      this.compose();
      this.dependencyTracker?.recordOperation(t2);
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, i2);
    }
    paintImageXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = this.getObject(t2, e2);
      i2 ? this.paintInlineImageXObject(t2, i2) : warn("Dependent image isn't ready yet");
    }
    paintImageXObjectRepeat(t2, e2, i2, n2, s2) {
      if (!this.contentVisible) return;
      const a2 = this.getObject(t2, e2);
      if (!a2) {
        warn("Dependent image isn't ready yet");
        return;
      }
      const r2 = a2.width, o2 = a2.height, l2 = [];
      for (let t3 = 0, e3 = s2.length; t3 < e3; t3 += 2) l2.push({ transform: [i2, 0, 0, n2, s2[t3], s2[t3 + 1]], x: 0, y: 0, w: r2, h: o2 });
      this.paintInlineImageXObjectGroup(t2, a2, l2);
    }
    applyTransferMapsToCanvas(t2) {
      if ("none" !== this.current.transferMaps) {
        t2.filter = this.current.transferMaps;
        t2.drawImage(t2.canvas, 0, 0);
        t2.filter = "none";
      }
      return t2.canvas;
    }
    applyTransferMapsToBitmap(t2) {
      if ("none" === this.current.transferMaps) return { img: t2.bitmap, canvasEntry: null };
      const { bitmap: e2, width: i2, height: n2 } = t2, s2 = this.canvasFactory.create(i2, n2), a2 = s2.context;
      a2.filter = this.current.transferMaps;
      a2.drawImage(e2, 0, 0);
      a2.filter = "none";
      return { img: s2.canvas, canvasEntry: s2 };
    }
    paintInlineImageXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = e2.width, n2 = e2.height, s2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha), a2 = this.ctx;
      this.save(t2);
      const { filter: r2 } = a2;
      "none" !== r2 && "" !== r2 && (a2.filter = "none");
      a2.scale(1 / i2, -1 / n2);
      let o2, l2 = null;
      if (e2.bitmap) {
        const t3 = this.applyTransferMapsToBitmap(e2);
        o2 = t3.img;
        l2 = t3.canvasEntry;
      } else {
        const t3 = this.canvasFactory.create(i2, n2);
        putBinaryImageData(t3.context, e2);
        o2 = this.applyTransferMapsToCanvas(t3.context);
        l2 = t3;
      }
      const h2 = this._scaleImage(o2, getCurrentTransformInverse(a2));
      a2.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(a2), e2.interpolate);
      if (this.dependencyTracker) {
        this.dependencyTracker.resetBBox(t2).recordBBox(t2, a2, 0, i2, -n2, 0).recordDependencies(t2, st).recordOperation(t2);
        this.imagesTracker?.record(a2, i2, n2, this.dependencyTracker.clipBox);
      }
      drawImageAtIntegerCoords(a2, h2.img, 0, 0, h2.paintWidth, h2.paintHeight, 0, -n2, i2, n2);
      h2.tmpCanvas && this.canvasFactory.destroy(h2.tmpCanvas);
      l2 && this.canvasFactory.destroy(l2);
      this.compose();
      this.restore(t2);
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, s2);
    }
    paintInlineImageXObjectGroup(t2, e2, i2) {
      if (!this.contentVisible) return;
      const n2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha), s2 = this.ctx;
      let a2, r2 = null;
      if (e2.bitmap) a2 = e2.bitmap;
      else {
        const t3 = e2.width, i3 = e2.height, n3 = this.canvasFactory.create(t3, i3);
        putBinaryImageData(n3.context, e2);
        a2 = this.applyTransferMapsToCanvas(n3.context);
        r2 = n3;
      }
      this.dependencyTracker?.resetBBox(t2);
      for (const e3 of i2) {
        s2.save();
        s2.transform(...e3.transform);
        s2.scale(1, -1);
        drawImageAtIntegerCoords(s2, a2, e3.x, e3.y, e3.w, e3.h, 0, -1, 1, 1);
        this.dependencyTracker?.recordBBox(t2, s2, 0, 1, -1, 0);
        s2.restore();
      }
      r2 && this.canvasFactory.destroy(r2);
      this.dependencyTracker?.recordOperation(t2);
      this.compose();
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, n2);
    }
    paintSolidColorImageMask(t2) {
      if (!this.contentVisible) return;
      const e2 = __privateMethod(this, _CanvasGraphics_instances, ls_fn).call(this, this.current.fillAlpha);
      this.dependencyTracker?.resetBBox(t2).recordBBox(t2, this.ctx, 0, 1, 0, 1).recordDependencies(t2, nt).recordOperation(t2);
      this.ctx.fillRect(0, 0, 1, 1);
      this.compose();
      __privateMethod(this, _CanvasGraphics_instances, hs_fn).call(this, e2);
    }
    markPoint(t2, e2) {
    }
    markPointProps(t2, e2, i2) {
    }
    beginMarkedContent(t2, e2) {
      this.dependencyTracker?.beginMarkedContent(t2);
      this.markedContentStack.push({ visible: true });
    }
    beginMarkedContentProps(t2, e2, i2) {
      this.dependencyTracker?.beginMarkedContent(t2);
      "OC" === e2 ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(i2) }) : this.markedContentStack.push({ visible: true });
      this.contentVisible = this.isContentVisible();
    }
    endMarkedContent(t2) {
      this.dependencyTracker?.endMarkedContent(t2);
      this.markedContentStack.pop();
      this.contentVisible = this.isContentVisible();
    }
    beginCompat(t2) {
    }
    endCompat(t2) {
    }
    consumePath(t2, e2, i2) {
      const n2 = this.current.isEmptyClip();
      this.pendingClip && this.current.updateClipFromPath();
      this.pendingClip || this.compose(i2);
      const s2 = this.ctx;
      if (this.pendingClip) {
        n2 || (this.pendingClip === It ? s2.clip(e2, "evenodd") : s2.clip(e2));
        this.pendingClip = null;
        this.dependencyTracker?.bboxToClipBoxDropOperation(t2).recordFutureForcedDependency("clipPath", t2);
      } else this.dependencyTracker?.recordOperation(t2);
      this.current.startNewPathAndClipBox(this.current.clipBox);
    }
    getSinglePixelWidth() {
      if (!this._cachedGetSinglePixelWidth) {
        const t2 = getCurrentTransform(this.ctx);
        if (0 === t2[1] && 0 === t2[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t2[0]), Math.abs(t2[3]));
        else {
          const e2 = Math.abs(t2[0] * t2[3] - t2[2] * t2[1]), i2 = Math.hypot(t2[0], t2[2]), n2 = Math.hypot(t2[1], t2[3]);
          this._cachedGetSinglePixelWidth = Math.max(i2, n2) / e2;
        }
      }
      return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
      if (-1 === this._cachedScaleForStroking[0]) {
        const { lineWidth: t2 } = this.current, { a: e2, b: i2, c: n2, d: s2 } = this.ctx.getTransform();
        let a2, r2;
        if (0 === i2 && 0 === n2) {
          const i3 = Math.abs(e2), n3 = Math.abs(s2);
          if (i3 === n3) if (0 === t2) a2 = r2 = 1 / i3;
          else {
            const e3 = i3 * t2;
            a2 = r2 = e3 < 1 ? 1 / e3 : 1;
          }
          else if (0 === t2) {
            a2 = 1 / i3;
            r2 = 1 / n3;
          } else {
            const e3 = i3 * t2, s3 = n3 * t2;
            a2 = e3 < 1 ? 1 / e3 : 1;
            r2 = s3 < 1 ? 1 / s3 : 1;
          }
        } else {
          const o2 = Math.abs(e2 * s2 - i2 * n2), l2 = Math.hypot(e2, i2), h2 = Math.hypot(n2, s2);
          if (0 === t2) {
            a2 = h2 / o2;
            r2 = l2 / o2;
          } else {
            const e3 = t2 * o2;
            a2 = h2 > e3 ? h2 / e3 : 1;
            r2 = l2 > e3 ? l2 / e3 : 1;
          }
        }
        this._cachedScaleForStroking[0] = a2;
        this._cachedScaleForStroking[1] = r2;
      }
      return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t2, e2) {
      const { ctx: i2, current: { lineWidth: n2 } } = this, [s2, a2] = this.getScaleForStroking();
      if (s2 === a2) {
        i2.lineWidth = (n2 || 1) * s2;
        i2.stroke(t2);
        return;
      }
      const r2 = i2.getLineDash();
      e2 && i2.save();
      i2.scale(s2, a2);
      kt.a = 1 / s2;
      kt.d = 1 / a2;
      const o2 = new Path2D();
      o2.addPath(t2, kt);
      if (r2.length > 0) {
        const t3 = Math.max(s2, a2);
        i2.setLineDash(r2.map((e3) => e3 / t3));
        i2.lineDashOffset /= t3;
      }
      i2.lineWidth = n2 || 1;
      i2.stroke(o2);
      e2 && i2.restore();
    }
    isContentVisible() {
      for (let t2 = this.markedContentStack.length - 1; t2 >= 0; t2--) if (!this.markedContentStack[t2].visible) return false;
      return true;
    }
  };
  _$n = new WeakMap();
  _Kn = new WeakMap();
  _Xn = new WeakMap();
  _qn = new WeakMap();
  _Yn = new WeakMap();
  _Qn = new WeakMap();
  _Jn = new WeakMap();
  _Zn = new WeakMap();
  _ts = new WeakMap();
  _es = new WeakMap();
  _CanvasGraphics_instances = new WeakSet();
  is_fn = function() {
    for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
    this.current.activeSMask = null;
    this.ctx.restore();
    if (this.transparentCanvas) {
      this.ctx = this.compositeCtx;
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.drawImage(this.transparentCanvas, 0, 0);
      this.ctx.restore();
      this.canvasFactory.destroy(this.transparentCanvasEntry);
      this.transparentCanvas = null;
      this.transparentCanvasEntry = null;
    }
  };
  ss_fn = function() {
    if (this.pageColors) {
      const t2 = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if ("none" !== t2) {
        const e2 = this.ctx.filter;
        this.ctx.filter = t2;
        this.ctx.drawImage(this.ctx.canvas, 0, 0);
        this.ctx.filter = e2;
      }
    }
  };
  as_fn = function(t2, e2 = null, i2 = 1) {
    const { width: n2, height: s2 } = t2, a2 = e2 ?? this.canvasFactory.create(n2, s2), r2 = a2.context, o2 = (i2 = Math.round(255 * i2) / 255) < 1;
    o2 && void 0 === __privateGet(this, _Zn) && __privateSet(this, _Zn, FeatureTest.isCanvasFilterSupported ? /* @__PURE__ */ new Map() : "none");
    let l2 = "none";
    o2 && __privateGet(this, _Zn) instanceof Map && (l2 = __privateGet(this, _Zn).getOrInsertComputed(i2, () => this.filterFactory.addKnockoutFilter(i2)));
    if (!o2 || "none" !== l2) {
      if (e2) {
        r2.save();
        r2.setTransform(1, 0, 0, 1, 0, 0);
        r2.clearRect(0, 0, n2, s2);
        r2.restore();
      }
      r2.filter = l2;
      r2.drawImage(t2, 0, 0);
      r2.filter = "none";
      return a2;
    }
    const h2 = t2.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, n2, s2), c2 = r2.createImageData(n2, s2), d2 = h2.data, u2 = c2.data, p2 = i2 > 0 ? 1 / i2 : 1e6;
    for (let t3 = 3, e3 = d2.length; t3 < e3; t3 += 4) u2[t3] = Math.min(Math.round(d2[t3] * p2), 255);
    r2.putImageData(c2, 0, 0);
    return a2;
  };
  rs_fn = function(t2, e2, i2, n2) {
    let s2 = t2?.[e2] ?? null;
    if (s2 && (s2.canvas.width !== i2 || s2.canvas.height !== n2)) {
      this.canvasFactory.destroy(s2);
      s2 = null;
    }
    if (!s2) {
      s2 = this.canvasFactory.create(i2, n2);
      t2 && (t2[e2] = s2);
      return s2;
    }
    const a2 = s2.context;
    a2.save();
    a2.setTransform(1, 0, 0, 1, 0, 0);
    a2.clearRect(0, 0, i2, n2);
    a2.restore();
    return s2;
  };
  os_fn = function(t2, e2, i2 = {}) {
    const { backdropCanvas: n2 = null, destTransform: s2 = [1, 0, 0, 1, 0, 0], backdropOffset: a2 = [0, 0], reuseMaskEntry: r2 = null, poolMeta: o2 = null, sourceAlpha: l2 = 1, sourceFilter: h2 = "none", knockoutAlpha: c2 = 1 } = i2, { width: d2, height: u2 } = e2, p2 = __privateMethod(this, _CanvasGraphics_instances, as_fn).call(this, e2, r2, c2), g2 = t2.globalCompositeOperation;
    t2.save();
    t2.setTransform(...s2);
    t2.globalAlpha = 1;
    FeatureTest.isCanvasFilterSupported && (t2.filter = "none");
    t2.globalCompositeOperation = "destination-out";
    t2.drawImage(p2.canvas, 0, 0);
    if (n2) {
      const [e3, i3] = a2, s3 = __privateMethod(this, _CanvasGraphics_instances, rs_fn).call(this, o2, "knockoutBackdropEntry", d2, u2), r3 = s3.context;
      r3.drawImage(n2, e3, i3, d2, u2, 0, 0, d2, u2);
      r3.globalCompositeOperation = "destination-in";
      r3.drawImage(p2.canvas, 0, 0);
      r3.globalCompositeOperation = "source-over";
      t2.globalCompositeOperation = "destination-over";
      t2.drawImage(s3.canvas, 0, 0);
      o2 || this.canvasFactory.destroy(s3);
    }
    t2.globalCompositeOperation = g2;
    t2.globalAlpha = l2;
    FeatureTest.isCanvasFilterSupported && (t2.filter = h2 ?? "none");
    t2.drawImage(e2, 0, 0);
    t2.restore();
    r2 || this.canvasFactory.destroy(p2);
  };
  ls_fn = function(t2 = 1) {
    if (0 === __privateGet(this, _$n) || __privateGet(this, _Kn) > 0 || !this.contentVisible) return false;
    __privateWrapper(this, _Kn)._++;
    __privateSet(this, _Jn, t2);
    const e2 = __privateGet(this, _es).at(-1), { canvas: i2 } = this.ctx, n2 = __privateMethod(this, _CanvasGraphics_instances, rs_fn).call(this, e2, "knockoutTempEntry", i2.width, i2.height);
    __privateSet(this, _Xn, n2);
    const s2 = n2.context;
    s2.save();
    s2.setTransform(this.ctx.getTransform());
    copyCtxState(this.ctx, s2);
    __privateSet(this, _Qn, s2.globalCompositeOperation);
    s2.globalCompositeOperation = "source-over";
    mirrorContextOperations(s2, this.ctx);
    __privateSet(this, _ts, e2);
    __privateSet(this, _qn, this.ctx);
    __privateSet(this, _Yn, this.suspendedCtx);
    this.ctx = s2;
    this.inSMaskMode && (this.suspendedCtx = s2);
    return true;
  };
  hs_fn = function(t2) {
    if (!t2) return;
    const e2 = __privateGet(this, _Xn), i2 = __privateGet(this, _qn), n2 = __privateGet(this, _Yn), s2 = e2.context;
    __privateSet(this, _Xn, null);
    __privateSet(this, _qn, null);
    __privateSet(this, _Yn, null);
    this.inSMaskMode && this.suspendedCtx === s2 && this.ctx !== s2 && this.endSMaskMode();
    this.inSMaskMode && (this.suspendedCtx = n2);
    this.ctx._removeMirroring();
    this.ctx.globalCompositeOperation = __privateGet(this, _Qn);
    __privateSet(this, _Qn, null);
    copyCtxState(this.ctx, i2);
    this.ctx = i2;
    const a2 = __privateGet(this, _ts);
    __privateSet(this, _ts, null);
    const r2 = __privateGet(this, _Jn);
    __privateSet(this, _Jn, 1);
    try {
      __privateMethod(this, _CanvasGraphics_instances, os_fn).call(this, n2 ?? i2, e2.canvas, { backdropCanvas: a2?.backdropCtx?.canvas ?? null, backdropOffset: a2?.backdropCtx ? [a2.offsetX, a2.offsetY] : [0, 0], reuseMaskEntry: a2?.knockoutMaskEntry ?? null, poolMeta: a2, knockoutAlpha: r2 });
    } finally {
      s2.restore();
      __privateWrapper(this, _Kn)._--;
      a2 || this.canvasFactory.destroy(e2);
    }
  };
  cs_fn = function(t2, e2, i2) {
    const n2 = new Path2D();
    n2.addPath(t2, new DOMMatrix(i2).invertSelf().multiplySelf(e2));
    return n2;
  };
  ds_fn = function(t2) {
    const { canvas: e2 } = t2, { width: i2, height: n2 } = e2;
    if (FeatureTest.isCanvasFilterSupported) {
      t2.save();
      t2.setTransform(1, 0, 0, 1, 0, 0);
      t2.filter = "grayscale(1)";
      t2.globalAlpha = 1;
      t2.globalCompositeOperation = "copy";
      t2.drawImage(e2, 0, 0);
      t2.restore();
      return;
    }
    const s2 = t2.getImageData(0, 0, i2, n2), { data: a2 } = s2;
    for (let t3 = 0, e3 = a2.length; t3 < e3; t3 += 4) {
      const e4 = 0.2126 * a2[t3] + 0.7152 * a2[t3 + 1] + 0.0722 * a2[t3 + 2] + 0.5 | 0;
      a2[t3] = a2[t3 + 1] = a2[t3 + 2] = e4;
    }
    t2.putImageData(s2, 0, 0);
  };
  ns_fn = function(t2) {
    if (t2) {
      if (t2.knockoutMaskEntry) {
        this.canvasFactory.destroy(t2.knockoutMaskEntry);
        t2.knockoutMaskEntry = null;
      }
      if (t2.knockoutTempEntry) {
        this.canvasFactory.destroy(t2.knockoutTempEntry);
        t2.knockoutTempEntry = null;
      }
      if (t2.knockoutBackdropEntry) {
        this.canvasFactory.destroy(t2.knockoutBackdropEntry);
        t2.knockoutBackdropEntry = null;
      }
    }
  };
  var CanvasGraphics = _CanvasGraphics;
  for (const t2 in B) void 0 !== CanvasGraphics.prototype[t2] && (CanvasGraphics.prototype[B[t2]] = CanvasGraphics.prototype[t2]);
  var _us, _ps;
  var BasePDFStream = class {
    constructor(t2, e2, i2) {
      __privateAdd(this, _us, null);
      __privateAdd(this, _ps, null);
      __publicField(this, "_fullReader", null);
      __publicField(this, "_rangeReaders", /* @__PURE__ */ new Set());
      __publicField(this, "_source", null);
      this._source = t2;
      __privateSet(this, _us, e2);
      __privateSet(this, _ps, i2);
    }
    get _progressiveDataLength() {
      return this._fullReader?._loaded ?? 0;
    }
    getFullReader() {
      assert(!this._fullReader, "BasePDFStream.getFullReader can only be called once.");
      return this._fullReader = new (__privateGet(this, _us))(this);
    }
    getRangeReader(t2, e2) {
      if (e2 <= this._progressiveDataLength) return null;
      const i2 = new (__privateGet(this, _ps))(this, t2, e2);
      this._rangeReaders.add(i2);
      return i2;
    }
    cancelAllRequests(t2) {
      this._fullReader?.cancel(t2);
      for (const e2 of new Set(this._rangeReaders)) e2.cancel(t2);
    }
  };
  _us = new WeakMap();
  _ps = new WeakMap();
  var BasePDFStreamReader = class {
    constructor(t2) {
      __publicField(this, "onProgress", null);
      __publicField(this, "_contentLength", 0);
      __publicField(this, "_filename", null);
      __publicField(this, "_headersCapability", Promise.withResolvers());
      __publicField(this, "_isRangeSupported", false);
      __publicField(this, "_isStreamingSupported", false);
      __publicField(this, "_loaded", 0);
      __publicField(this, "_stream", null);
      this._stream = t2;
    }
    _callOnProgress() {
      this.onProgress?.({ loaded: this._loaded, total: this._contentLength });
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      unreachable("Abstract method `read` called");
    }
    cancel(t2) {
      unreachable("Abstract method `cancel` called");
    }
  };
  var BasePDFStreamRangeReader = class {
    constructor(t2, e2, i2) {
      __publicField(this, "_stream", null);
      this._stream = t2;
    }
    async read() {
      unreachable("Abstract method `read` called");
    }
    cancel(t2) {
      unreachable("Abstract method `cancel` called");
    }
  };
  function createHeaders(t2, e2) {
    const i2 = new Headers();
    if (!t2 || !e2 || "object" != typeof e2) return i2;
    for (const t3 in e2) {
      const n2 = e2[t3];
      void 0 !== n2 && i2.append(t3, n2);
    }
    return i2;
  }
  function getResponseOrigin(t2) {
    return URL.parse(t2)?.origin ?? null;
  }
  function validateRangeRequestCapabilities({ responseHeaders: t2, isHttp: e2, rangeChunkSize: i2, disableRange: n2 }) {
    const s2 = { contentLength: 0, isRangeSupported: false }, a2 = parseInt(t2.get("Content-Length"), 10);
    if (!Number.isInteger(a2)) return s2;
    s2.contentLength = a2;
    if (a2 <= 2 * i2) return s2;
    if (n2 || !e2) return s2;
    if ("bytes" !== t2.get("Accept-Ranges")) return s2;
    "identity" === (t2.get("Content-Encoding") || "identity") && (s2.isRangeSupported = true);
    return s2;
  }
  function extractFilenameFromHeader(t2) {
    const e2 = t2.get("Content-Disposition");
    if (e2) {
      let t3 = (function getFilenameFromContentDispositionHeader(t4) {
        let e3 = true, i2 = toParamRegExp("filename\\*", "i").exec(t4);
        if (i2) {
          i2 = i2[1];
          let t5 = rfc2616unquote(i2);
          t5 = unescape(t5);
          t5 = rfc5987decode(t5);
          t5 = rfc2047decode(t5);
          return fixupEncoding(t5);
        }
        i2 = (function rfc2231getparam(t5) {
          const e4 = [];
          let i3;
          const n2 = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; null !== (i3 = n2.exec(t5)); ) {
            let [, t6, n3, s3] = i3;
            t6 = parseInt(t6, 10);
            if (t6 in e4) {
              if (0 === t6) break;
            } else e4[t6] = [n3, s3];
          }
          const s2 = [];
          for (let t6 = 0; t6 < e4.length && t6 in e4; ++t6) {
            let [i4, n3] = e4[t6];
            n3 = rfc2616unquote(n3);
            if (i4) {
              n3 = unescape(n3);
              0 === t6 && (n3 = rfc5987decode(n3));
            }
            s2.push(n3);
          }
          return s2.join("");
        })(t4);
        if (i2) return fixupEncoding(rfc2047decode(i2));
        i2 = toParamRegExp("filename", "i").exec(t4);
        if (i2) {
          i2 = i2[1];
          let t5 = rfc2616unquote(i2);
          t5 = rfc2047decode(t5);
          return fixupEncoding(t5);
        }
        function toParamRegExp(t5, e4) {
          return new RegExp("(?:^|;)\\s*" + t5 + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e4);
        }
        function textdecode(t5, i3) {
          if (t5) {
            if (!/^[\x00-\xFF]+$/.test(i3)) return i3;
            try {
              const n2 = new TextDecoder(t5, { fatal: true }), s2 = stringToBytes(i3);
              i3 = n2.decode(s2);
              e3 = false;
            } catch {
            }
          }
          return i3;
        }
        function fixupEncoding(t5) {
          if (e3 && /[\x80-\xff]/.test(t5)) {
            t5 = textdecode("utf-8", t5);
            e3 && (t5 = textdecode("iso-8859-1", t5));
          }
          return t5;
        }
        function rfc2616unquote(t5) {
          if (t5.startsWith('"')) {
            const e4 = t5.slice(1).split('\\"');
            for (let t6 = 0; t6 < e4.length; ++t6) {
              const i3 = e4[t6].indexOf('"');
              if (-1 !== i3) {
                e4[t6] = e4[t6].slice(0, i3);
                e4.length = t6 + 1;
              }
              e4[t6] = e4[t6].replaceAll(/\\(.)/g, "$1");
            }
            t5 = e4.join('"');
          }
          return t5;
        }
        function rfc5987decode(t5) {
          const e4 = t5.indexOf("'");
          return -1 === e4 ? t5 : textdecode(t5.slice(0, e4), t5.slice(e4 + 1).replace(/^[^']*'/, ""));
        }
        function rfc2047decode(t5) {
          return !t5.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t5) ? t5 : t5.replaceAll(/=\?([\w-]*)\?([QB])\?((?:[^?]|\?(?!=))*)\?=/gi, function(t6, e4, i3, n2) {
            if ("q" === i3 || "Q" === i3) return textdecode(e4, n2 = (n2 = n2.replaceAll("_", " ")).replaceAll(/=([0-9a-f]{2})/gi, function(t7, e5) {
              return String.fromCharCode(parseInt(e5, 16));
            }));
            try {
              n2 = atob(n2);
            } catch {
            }
            return textdecode(e4, n2);
          });
        }
        return "";
      })(e2);
      if (t3.includes("%")) try {
        t3 = decodeURIComponent(t3);
      } catch {
      }
      if (isPdfFile(t3)) return t3;
    }
    return null;
  }
  function createResponseError(t2, e2) {
    return new ResponseException(`Unexpected server response (${t2}) while retrieving PDF "${e2.href}".`, t2, 404 === t2 || 0 === t2 && "file:" === e2.protocol);
  }
  function ensureResponseOrigin(t2, e2) {
    if (t2 !== e2) throw new Error(`Expected range response-origin "${t2}" to match "${e2}".`);
  }
  function fetchUrl(t2, e2, i2, n2) {
    return fetch(t2, { method: "GET", headers: e2, signal: n2.signal, mode: "cors", credentials: i2 ? "include" : "same-origin", redirect: "follow" });
  }
  function ensureResponseStatus(t2, e2) {
    if (200 !== t2 && 206 !== t2) throw createResponseError(t2, e2);
  }
  function getArrayBuffer(t2) {
    if (t2 instanceof Uint8Array) return t2.buffer;
    if (t2 instanceof ArrayBuffer) return t2;
    throw new Error(`getArrayBuffer - unexpected data: ${t2}`);
  }
  var PDFFetchStream = class extends BasePDFStream {
    constructor(t2) {
      super(t2, PDFFetchStreamReader, PDFFetchStreamRangeReader);
      __publicField(this, "_responseOrigin", null);
      const { httpHeaders: e2, url: i2 } = t2;
      assert(/https?:/.test(i2.protocol), "PDFFetchStream only supports http(s):// URLs.");
      this.headers = createHeaders(true, e2);
    }
  };
  var PDFFetchStreamReader = class extends BasePDFStreamReader {
    constructor(t2) {
      super(t2);
      __publicField(this, "_abortController", new AbortController());
      __publicField(this, "_reader", null);
      const { disableRange: e2, disableStream: i2, rangeChunkSize: n2, url: s2, withCredentials: a2 } = t2._source;
      this._isStreamingSupported = !i2;
      const r2 = new Headers(t2.headers);
      fetchUrl(s2, r2, a2, this._abortController).then((i3) => {
        t2._responseOrigin = getResponseOrigin(i3.url);
        ensureResponseStatus(i3.status, s2);
        this._reader = i3.body.getReader();
        const a3 = i3.headers, { contentLength: r3, isRangeSupported: o2 } = validateRangeRequestCapabilities({ responseHeaders: a3, isHttp: true, rangeChunkSize: n2, disableRange: e2 });
        this._contentLength = r3;
        this._isRangeSupported = o2;
        this._filename = extractFilenameFromHeader(a3);
        !this._isStreamingSupported && this._isRangeSupported && this.cancel(new AbortException("Streaming is disabled."));
        this._headersCapability.resolve();
      }).catch(this._headersCapability.reject);
    }
    async read() {
      await this._headersCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      if (e2) return { value: t2, done: e2 };
      this._loaded += t2.byteLength;
      this._callOnProgress();
      return { value: getArrayBuffer(t2), done: false };
    }
    cancel(t2) {
      this._reader?.cancel(t2);
      this._abortController.abort();
    }
  };
  var PDFFetchStreamRangeReader = class extends BasePDFStreamRangeReader {
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
      __publicField(this, "_abortController", new AbortController());
      __publicField(this, "_readCapability", Promise.withResolvers());
      __publicField(this, "_reader", null);
      const { url: n2, withCredentials: s2 } = t2._source, a2 = new Headers(t2.headers);
      a2.append("Range", `bytes=${e2}-${i2 - 1}`);
      fetchUrl(n2, a2, s2, this._abortController).then((e3) => {
        ensureResponseOrigin(getResponseOrigin(e3.url), t2._responseOrigin);
        ensureResponseStatus(e3.status, n2);
        this._reader = e3.body.getReader();
        this._readCapability.resolve();
      }).catch(this._readCapability.reject);
    }
    async read() {
      await this._readCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      return e2 ? { value: t2, done: e2 } : { value: getArrayBuffer(t2), done: false };
    }
    cancel(t2) {
      this._reader?.cancel(t2);
      this._abortController.abort();
    }
  };
  function transport_stream_getArrayBuffer(t2) {
    return t2 instanceof Uint8Array && t2.byteLength === t2.buffer.byteLength ? t2.buffer : new Uint8Array(t2).buffer;
  }
  function endRequests() {
    for (const t2 of this._requests) t2.resolve({ value: void 0, done: true });
    this._requests.length = 0;
  }
  var _PDFDataTransportStream_instances, gs_fn;
  var PDFDataTransportStream = class extends BasePDFStream {
    constructor(t2) {
      super(t2, PDFDataTransportStreamReader, PDFDataTransportStreamRangeReader);
      __privateAdd(this, _PDFDataTransportStream_instances);
      __publicField(this, "_progressiveDone", false);
      __publicField(this, "_queuedChunks", []);
      const { pdfDataRangeTransport: e2 } = t2, { initialData: i2, progressiveDone: n2 } = e2;
      if (i2?.length > 0) {
        const t3 = transport_stream_getArrayBuffer(i2);
        this._queuedChunks.push(t3);
      }
      this._progressiveDone = n2;
      e2.transportReady((t3) => {
        switch (t3.type) {
          case "range":
          case "progressiveRead":
            __privateMethod(this, _PDFDataTransportStream_instances, gs_fn).call(this, t3.begin, t3.chunk);
            break;
          case "progressiveDone":
            this._fullReader?.progressiveDone();
            this._progressiveDone = true;
        }
      });
    }
    getFullReader() {
      const t2 = super.getFullReader();
      this._queuedChunks = null;
      return t2;
    }
    getRangeReader(t2, e2) {
      const i2 = super.getRangeReader(t2, e2);
      if (i2) {
        i2.onDone = () => this._rangeReaders.delete(i2);
        this._source.pdfDataRangeTransport.requestDataRange(t2, e2);
      }
      return i2;
    }
    cancelAllRequests(t2) {
      super.cancelAllRequests(t2);
      this._source.pdfDataRangeTransport.abort();
    }
  };
  _PDFDataTransportStream_instances = new WeakSet();
  gs_fn = function(t2, e2) {
    const i2 = transport_stream_getArrayBuffer(e2);
    if (void 0 === t2) this._fullReader ? this._fullReader._enqueue(i2) : this._queuedChunks.push(i2);
    else {
      const e3 = this._rangeReaders.keys().find((e4) => e4._begin === t2);
      assert(e3, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
      e3._enqueue(i2);
    }
  };
  var _ms;
  var PDFDataTransportStreamReader = class extends BasePDFStreamReader {
    constructor(t2) {
      super(t2);
      __privateAdd(this, _ms, endRequests.bind(this));
      __publicField(this, "_done", false);
      __publicField(this, "_queuedChunks", null);
      __publicField(this, "_requests", []);
      const { pdfDataRangeTransport: e2, disableRange: i2, disableStream: n2 } = t2._source, { length: s2, contentDispositionFilename: a2 } = e2;
      this._queuedChunks = t2._queuedChunks || [];
      for (const t3 of this._queuedChunks) this._loaded += t3.byteLength;
      this._done = t2._progressiveDone;
      this._contentLength = s2;
      this._isStreamingSupported = !n2;
      this._isRangeSupported = !i2;
      isPdfFile(a2) && (this._filename = a2);
      this._headersCapability.resolve();
      const r2 = this._loaded;
      Promise.resolve().then(() => {
        r2 > 0 && this._loaded === r2 && this._callOnProgress();
      });
    }
    _enqueue(t2) {
      if (!this._done) {
        if (this._requests.length > 0) {
          this._requests.shift().resolve({ value: t2, done: false });
        } else this._queuedChunks.push(t2);
        this._loaded += t2.byteLength;
        this._callOnProgress();
      }
    }
    async read() {
      if (this._queuedChunks.length > 0) {
        return { value: this._queuedChunks.shift(), done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      this._requests.push(t2);
      return t2.promise;
    }
    cancel(t2) {
      this._done = true;
      __privateGet(this, _ms).call(this);
    }
    progressiveDone() {
      this._done || (this._done = true);
      0 === this._queuedChunks.length && __privateGet(this, _ms).call(this);
    }
  };
  _ms = new WeakMap();
  var _ms2;
  var PDFDataTransportStreamRangeReader = class extends BasePDFStreamRangeReader {
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
      __privateAdd(this, _ms2, endRequests.bind(this));
      __publicField(this, "onDone", null);
      __publicField(this, "_begin", -1);
      __publicField(this, "_done", false);
      __publicField(this, "_queuedChunk", null);
      __publicField(this, "_requests", []);
      this._begin = e2;
    }
    _enqueue(t2) {
      if (!this._done) {
        if (0 === this._requests.length) this._queuedChunk = t2;
        else {
          this._requests.shift().resolve({ value: t2, done: false });
          __privateGet(this, _ms2).call(this);
        }
        this._done = true;
        this.onDone?.();
      }
    }
    async read() {
      if (this._queuedChunk) {
        const t3 = this._queuedChunk;
        this._queuedChunk = null;
        return { value: t3, done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      this._requests.push(t2);
      return t2.promise;
    }
    cancel(t2) {
      this._done = true;
      __privateGet(this, _ms2).call(this);
      this.onDone?.();
    }
  };
  _ms2 = new WeakMap();
  var _fs, _PDFNetworkStream_instances, ys_fn, bs_fn;
  var PDFNetworkStream = class extends BasePDFStream {
    constructor(t2) {
      super(t2, PDFNetworkStreamReader, PDFNetworkStreamRangeReader);
      __privateAdd(this, _PDFNetworkStream_instances);
      __privateAdd(this, _fs, /* @__PURE__ */ new WeakMap());
      __publicField(this, "_responseOrigin", null);
      const { httpHeaders: e2, url: i2 } = t2;
      this.url = i2;
      this.isHttp = /https?:/.test(i2.protocol);
      this.headers = createHeaders(this.isHttp, e2);
    }
    _request(t2) {
      const e2 = new XMLHttpRequest(), i2 = { validateStatus: null, onHeadersReceived: t2.onHeadersReceived, onDone: t2.onDone, onError: t2.onError, onProgress: t2.onProgress };
      __privateGet(this, _fs).set(e2, i2);
      e2.open("GET", this.url);
      e2.withCredentials = this._source.withCredentials;
      for (const [t3, i3] of this.headers) e2.setRequestHeader(t3, i3);
      if (this.isHttp && "begin" in t2 && "end" in t2) {
        e2.setRequestHeader("Range", `bytes=${t2.begin}-${t2.end - 1}`);
        i2.validateStatus = (t3) => 206 === t3 || 200 === t3;
      } else i2.validateStatus = (t3) => 200 === t3;
      e2.responseType = "arraybuffer";
      assert(t2.onError, "Expected `onError` callback to be provided.");
      e2.onerror = () => t2.onError(e2.status);
      e2.onreadystatechange = __privateMethod(this, _PDFNetworkStream_instances, bs_fn).bind(this, e2);
      e2.onprogress = __privateMethod(this, _PDFNetworkStream_instances, ys_fn).bind(this, e2);
      e2.send(null);
      return e2;
    }
    _abortRequest(t2) {
      if (__privateGet(this, _fs).has(t2)) {
        __privateGet(this, _fs).delete(t2);
        t2.abort();
      }
    }
    getRangeReader(t2, e2) {
      const i2 = super.getRangeReader(t2, e2);
      i2 && (i2.onClosed = () => this._rangeReaders.delete(i2));
      return i2;
    }
  };
  _fs = new WeakMap();
  _PDFNetworkStream_instances = new WeakSet();
  ys_fn = function(t2, e2) {
    const i2 = __privateGet(this, _fs).get(t2);
    i2?.onProgress?.(e2);
  };
  bs_fn = function(t2, e2) {
    const i2 = __privateGet(this, _fs).get(t2);
    if (!i2) return;
    if (t2.readyState >= 2 && i2.onHeadersReceived) {
      i2.onHeadersReceived();
      delete i2.onHeadersReceived;
    }
    if (4 !== t2.readyState) return;
    if (!__privateGet(this, _fs).has(t2)) return;
    __privateGet(this, _fs).delete(t2);
    if (0 === t2.status && this.isHttp) {
      i2.onError(t2.status);
      return;
    }
    const n2 = t2.status || 200;
    if (!i2.validateStatus(n2)) {
      i2.onError(t2.status);
      return;
    }
    const s2 = (function network_getArrayBuffer(t3) {
      return "string" != typeof t3 ? t3 : stringToBytes(t3).buffer;
    })(t2.response);
    if (206 === n2) {
      const e3 = t2.getResponseHeader("Content-Range");
      if (/bytes \d+-\d+\/\d+/.test(e3)) i2.onDone(s2);
      else {
        warn('Missing or invalid "Content-Range" header.');
        i2.onError(0);
      }
    } else s2 ? i2.onDone(s2) : i2.onError(t2.status);
  };
  var _ms3, _PDFNetworkStreamReader_instances, vs_fn, As_fn, ws_fn, ys_fn2;
  var PDFNetworkStreamReader = class extends BasePDFStreamReader {
    constructor(t2) {
      super(t2);
      __privateAdd(this, _PDFNetworkStreamReader_instances);
      __privateAdd(this, _ms3, endRequests.bind(this));
      __publicField(this, "_cachedChunks", []);
      __publicField(this, "_done", false);
      __publicField(this, "_requests", []);
      __publicField(this, "_storedError", null);
      this._fullRequestXhr = t2._request({ onHeadersReceived: __privateMethod(this, _PDFNetworkStreamReader_instances, vs_fn).bind(this), onDone: __privateMethod(this, _PDFNetworkStreamReader_instances, As_fn).bind(this), onError: __privateMethod(this, _PDFNetworkStreamReader_instances, ws_fn).bind(this), onProgress: __privateMethod(this, _PDFNetworkStreamReader_instances, ys_fn2).bind(this) });
    }
    async read() {
      await this._headersCapability.promise;
      if (this._storedError) throw this._storedError;
      if (this._cachedChunks.length > 0) {
        return { value: this._cachedChunks.shift(), done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      this._requests.push(t2);
      return t2.promise;
    }
    cancel(t2) {
      this._done = true;
      this._headersCapability.reject(t2);
      __privateGet(this, _ms3).call(this);
      this._stream._abortRequest(this._fullRequestXhr);
      this._fullRequestXhr = null;
    }
  };
  _ms3 = new WeakMap();
  _PDFNetworkStreamReader_instances = new WeakSet();
  vs_fn = function() {
    const t2 = this._stream, { disableRange: e2, rangeChunkSize: i2 } = t2._source, n2 = this._fullRequestXhr;
    t2._responseOrigin = getResponseOrigin(n2.responseURL);
    const s2 = n2.getAllResponseHeaders(), a2 = new Headers(s2 ? s2.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((t3) => {
      const [e3, ...i3] = t3.split(": ");
      return [e3, i3.join(": ")];
    }) : []), { contentLength: r2, isRangeSupported: o2 } = validateRangeRequestCapabilities({ responseHeaders: a2, isHttp: t2.isHttp, rangeChunkSize: i2, disableRange: e2 });
    this._contentLength = r2;
    this._isRangeSupported = o2;
    this._filename = extractFilenameFromHeader(a2);
    this._isRangeSupported && t2._abortRequest(n2);
    this._headersCapability.resolve();
  };
  As_fn = function(t2) {
    if (this._requests.length > 0) {
      this._requests.shift().resolve({ value: t2, done: false });
    } else this._cachedChunks.push(t2);
    this._done = true;
    0 === this._cachedChunks.length && __privateGet(this, _ms3).call(this);
  };
  ws_fn = function(t2) {
    this._storedError = createResponseError(t2, this._stream.url);
    this._headersCapability.reject(this._storedError);
    for (const t3 of this._requests) t3.reject(this._storedError);
    this._requests.length = 0;
    this._cachedChunks.length = 0;
  };
  ys_fn2 = function(t2) {
    this.onProgress?.({ loaded: t2.loaded, total: t2.lengthComputable ? t2.total : this._contentLength });
  };
  var _ms4, _PDFNetworkStreamRangeReader_instances, vs_fn2, As_fn2, ws_fn2;
  var PDFNetworkStreamRangeReader = class extends BasePDFStreamRangeReader {
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
      __privateAdd(this, _PDFNetworkStreamRangeReader_instances);
      __privateAdd(this, _ms4, endRequests.bind(this));
      __publicField(this, "onClosed", null);
      __publicField(this, "_done", false);
      __publicField(this, "_queuedChunk", null);
      __publicField(this, "_requests", []);
      __publicField(this, "_storedError", null);
      this._requestXhr = t2._request({ begin: e2, end: i2, onHeadersReceived: __privateMethod(this, _PDFNetworkStreamRangeReader_instances, vs_fn2).bind(this), onDone: __privateMethod(this, _PDFNetworkStreamRangeReader_instances, As_fn2).bind(this), onError: __privateMethod(this, _PDFNetworkStreamRangeReader_instances, ws_fn2).bind(this), onProgress: null });
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (null !== this._queuedChunk) {
        const t3 = this._queuedChunk;
        this._queuedChunk = null;
        return { value: t3, done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      this._requests.push(t2);
      return t2.promise;
    }
    cancel(t2) {
      this._done = true;
      __privateGet(this, _ms4).call(this);
      this._stream._abortRequest(this._requestXhr);
      this.onClosed?.();
    }
  };
  _ms4 = new WeakMap();
  _PDFNetworkStreamRangeReader_instances = new WeakSet();
  vs_fn2 = function() {
    const t2 = getResponseOrigin(this._requestXhr?.responseURL);
    try {
      ensureResponseOrigin(t2, this._stream._responseOrigin);
    } catch (t3) {
      this._storedError = t3;
      __privateMethod(this, _PDFNetworkStreamRangeReader_instances, ws_fn2).call(this, 0);
    }
  };
  As_fn2 = function(t2) {
    if (this._requests.length > 0) {
      this._requests.shift().resolve({ value: t2, done: false });
    } else this._queuedChunk = t2;
    this._done = true;
    __privateGet(this, _ms4).call(this);
    this.onClosed?.();
  };
  ws_fn2 = function(t2) {
    this._storedError ?? (this._storedError = createResponseError(t2, this._stream.url));
    for (const t3 of this._requests) t3.reject(this._storedError);
    this._requests.length = 0;
    this._queuedChunk = null;
  };
  function getReadableStream(t2, e2 = null) {
    const i2 = process.getBuiltinModule("fs"), { Readable: n2 } = process.getBuiltinModule("stream"), s2 = i2.createReadStream(t2, e2);
    return n2.toWeb(s2);
  }
  var PDFNodeStream = class extends BasePDFStream {
    constructor(t2) {
      super(t2, PDFNodeStreamReader, PDFNodeStreamRangeReader);
      const { url: e2 } = t2;
      assert("file:" === e2.protocol, "PDFNodeStream only supports file:// URLs.");
    }
  };
  var PDFNodeStreamReader = class extends BasePDFStreamReader {
    constructor(t2) {
      super(t2);
      __publicField(this, "_reader", null);
      const { disableRange: e2, disableStream: i2, rangeChunkSize: n2, url: s2 } = t2._source;
      this._isStreamingSupported = !i2;
      process.getBuiltinModule("fs/promises").lstat(s2).then((t3) => {
        const i3 = getReadableStream(s2);
        this._reader = i3.getReader();
        const { size: a2 } = t3;
        this._contentLength = a2;
        this._isRangeSupported = !e2 && a2 > 2 * n2;
        !this._isStreamingSupported && this._isRangeSupported && this.cancel(new AbortException("Streaming is disabled."));
        this._headersCapability.resolve();
      }).catch((t3) => {
        "ENOENT" === t3.code && (t3 = createResponseError(0, s2));
        this._headersCapability.reject(t3);
      });
    }
    async read() {
      await this._headersCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      if (e2) return { value: t2, done: e2 };
      this._loaded += t2.byteLength;
      this._callOnProgress();
      return { value: getArrayBuffer(t2), done: false };
    }
    cancel(t2) {
      this._reader?.cancel(t2);
    }
  };
  var PDFNodeStreamRangeReader = class extends BasePDFStreamRangeReader {
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
      __publicField(this, "_readCapability", Promise.withResolvers());
      __publicField(this, "_reader", null);
      const { url: n2 } = t2._source;
      try {
        const t3 = getReadableStream(n2, { start: e2, end: i2 - 1 });
        this._reader = t3.getReader();
        this._readCapability.resolve();
      } catch (t3) {
        this._readCapability.reject(t3);
      }
    }
    async read() {
      await this._readCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      return e2 ? { value: t2, done: e2 } : { value: getArrayBuffer(t2), done: false };
    }
    cancel(t2) {
      this._reader?.cancel(t2);
    }
  };
  var _xs, _Cs;
  var GlobalWorkerOptions = class {
    static get workerPort() {
      return __privateGet(this, _xs);
    }
    static set workerPort(t2) {
      if (!("undefined" != typeof Worker && t2 instanceof Worker) && null !== t2) throw new Error("Invalid `workerPort` type.");
      __privateSet(this, _xs, t2);
    }
    static get workerSrc() {
      return __privateGet(this, _Cs);
    }
    static set workerSrc(t2) {
      if ("string" != typeof t2) throw new Error("Invalid `workerSrc` type.");
      __privateSet(this, _Cs, t2);
    }
  };
  _xs = new WeakMap();
  _Cs = new WeakMap();
  __privateAdd(GlobalWorkerOptions, _xs, null);
  __privateAdd(GlobalWorkerOptions, _Cs, "");
  var _Es, _Ss;
  var Metadata = class {
    constructor({ parsedData: t2, rawData: e2 }) {
      __privateAdd(this, _Es);
      __privateAdd(this, _Ss);
      __privateSet(this, _Es, t2);
      __privateSet(this, _Ss, e2);
    }
    getRaw() {
      return __privateGet(this, _Ss);
    }
    get(t2) {
      return __privateGet(this, _Es).get(t2) ?? null;
    }
    [Symbol.iterator]() {
      return __privateGet(this, _Es).entries();
    }
  };
  _Es = new WeakMap();
  _Ss = new WeakMap();
  var Ft = /* @__PURE__ */ Symbol("INTERNAL");
  var _Ts, _ks, __s, _Ms;
  var OptionalContentGroup = class {
    constructor(t2, { name: e2, intent: i2, usage: n2, rbGroups: s2 }) {
      __privateAdd(this, _Ts, false);
      __privateAdd(this, _ks, false);
      __privateAdd(this, __s, false);
      __privateAdd(this, _Ms, true);
      __privateSet(this, _Ts, !!(t2 & o));
      __privateSet(this, _ks, !!(t2 & l));
      this.name = e2;
      this.intent = i2;
      this.usage = n2;
      this.rbGroups = s2;
    }
    get visible() {
      if (__privateGet(this, __s)) return __privateGet(this, _Ms);
      if (!__privateGet(this, _Ms)) return false;
      const { print: t2, view: e2 } = this.usage;
      return __privateGet(this, _Ts) ? "OFF" !== e2?.viewState : !__privateGet(this, _ks) || "OFF" !== t2?.printState;
    }
    _setVisible(t2, e2, i2 = false) {
      t2 !== Ft && unreachable("Internal method `_setVisible` called.");
      __privateSet(this, __s, i2);
      __privateSet(this, _Ms, e2);
    }
    get serializable() {
      return { userSet: __privateGet(this, __s), visible: __privateGet(this, _Ms) };
    }
  };
  _Ts = new WeakMap();
  _ks = new WeakMap();
  __s = new WeakMap();
  _Ms = new WeakMap();
  var _Ds, _Ps, _Is, _Fs, _Bs, _OptionalContentConfig_instances, Ls_fn;
  var _OptionalContentConfig = class _OptionalContentConfig {
    constructor(t2, e2 = o, i2 = null) {
      __privateAdd(this, _OptionalContentConfig_instances);
      __privateAdd(this, _Ds, null);
      __privateAdd(this, _Ps, /* @__PURE__ */ new Map());
      __privateAdd(this, _Is, null);
      __privateAdd(this, _Fs, null);
      __privateAdd(this, _Bs);
      __publicField(this, "creator", null);
      __publicField(this, "name", null);
      __privateSet(this, _Bs, t2);
      this.renderingIntent = e2;
      if (null !== t2) {
        this.name = t2.name;
        this.creator = t2.creator;
        __privateSet(this, _Fs, t2.order);
        for (const i3 of t2.groups) __privateGet(this, _Ps).set(i3.id, new OptionalContentGroup(e2, i3));
        if (i2) {
          i2.size !== __privateGet(this, _Ps).size && unreachable("Incorrect serialized groupState.");
          for (const [t3, e3] of i2) __privateGet(this, _Ps).get(t3)._setVisible(Ft, e3.visible, e3.userSet);
        } else {
          if ("OFF" === t2.baseState) for (const t3 of __privateGet(this, _Ps).values()) t3._setVisible(Ft, false);
          for (const e3 of t2.on) __privateGet(this, _Ps).get(e3)._setVisible(Ft, true);
          for (const e3 of t2.off) __privateGet(this, _Ps).get(e3)._setVisible(Ft, false);
        }
        __privateSet(this, _Is, this.getHash());
      }
    }
    isVisible(t2) {
      if (0 === __privateGet(this, _Ps).size) return true;
      if (!t2) {
        info("Optional content group not defined.");
        return true;
      }
      if ("OCG" === t2.type) {
        if (!__privateGet(this, _Ps).has(t2.id)) {
          warn(`Optional content group not found: ${t2.id}`);
          return true;
        }
        return __privateGet(this, _Ps).get(t2.id).visible;
      }
      if ("OCMD" === t2.type) {
        if (t2.expression) return __privateMethod(this, _OptionalContentConfig_instances, Ls_fn).call(this, t2.expression);
        if (!t2.policy || "AnyOn" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!__privateGet(this, _Ps).has(e2)) {
              warn(`Optional content group not found: ${e2}`);
              return true;
            }
            if (__privateGet(this, _Ps).get(e2).visible) return true;
          }
          return false;
        }
        if ("AllOn" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!__privateGet(this, _Ps).has(e2)) {
              warn(`Optional content group not found: ${e2}`);
              return true;
            }
            if (!__privateGet(this, _Ps).get(e2).visible) return false;
          }
          return true;
        }
        if ("AnyOff" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!__privateGet(this, _Ps).has(e2)) {
              warn(`Optional content group not found: ${e2}`);
              return true;
            }
            if (!__privateGet(this, _Ps).get(e2).visible) return true;
          }
          return false;
        }
        if ("AllOff" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!__privateGet(this, _Ps).has(e2)) {
              warn(`Optional content group not found: ${e2}`);
              return true;
            }
            if (__privateGet(this, _Ps).get(e2).visible) return false;
          }
          return true;
        }
        warn(`Unknown optional content policy ${t2.policy}.`);
        return true;
      }
      warn(`Unknown group type ${t2.type}.`);
      return true;
    }
    setVisibility(t2, e2 = true, i2 = true) {
      const n2 = __privateGet(this, _Ps).get(t2);
      if (n2) {
        if (i2 && e2 && n2.rbGroups.length) for (const e3 of n2.rbGroups) for (const i3 of e3) i3 !== t2 && __privateGet(this, _Ps).get(i3)?._setVisible(Ft, false, true);
        n2._setVisible(Ft, !!e2, true);
        __privateSet(this, _Ds, null);
      } else warn(`Optional content group not found: ${t2}`);
    }
    setOCGState({ state: t2, preserveRB: e2 }) {
      let i2;
      for (const n2 of t2) {
        switch (n2) {
          case "ON":
          case "OFF":
          case "Toggle":
            i2 = n2;
            continue;
        }
        const t3 = __privateGet(this, _Ps).get(n2);
        if (t3) switch (i2) {
          case "ON":
            this.setVisibility(n2, true, e2);
            break;
          case "OFF":
            this.setVisibility(n2, false, e2);
            break;
          case "Toggle":
            this.setVisibility(n2, !t3.visible, e2);
        }
      }
      __privateSet(this, _Ds, null);
    }
    get hasInitialVisibility() {
      return null === __privateGet(this, _Is) || this.getHash() === __privateGet(this, _Is);
    }
    getOrder() {
      return __privateGet(this, _Ps).size ? __privateGet(this, _Fs) ? __privateGet(this, _Fs).slice() : [...__privateGet(this, _Ps).keys()] : null;
    }
    getGroup(t2) {
      return __privateGet(this, _Ps).get(t2) || null;
    }
    getHash() {
      if (null !== __privateGet(this, _Ds)) return __privateGet(this, _Ds);
      const t2 = new MurmurHash3_64();
      for (const [e2, i2] of __privateGet(this, _Ps)) t2.update(`${e2}:${i2.visible}`);
      return __privateSet(this, _Ds, t2.hexdigest());
    }
    [Symbol.iterator]() {
      return __privateGet(this, _Ps).entries();
    }
    get serializable() {
      const t2 = /* @__PURE__ */ new Map();
      for (const [e2, i2] of __privateGet(this, _Ps)) t2.set(e2, i2.serializable);
      return { data: __privateGet(this, _Bs), renderingIntent: this.renderingIntent, groupState: t2 };
    }
    static fromSerializable({ data: t2, renderingIntent: e2, groupState: i2 }) {
      return new _OptionalContentConfig(t2, e2, i2);
    }
  };
  _Ds = new WeakMap();
  _Ps = new WeakMap();
  _Is = new WeakMap();
  _Fs = new WeakMap();
  _Bs = new WeakMap();
  _OptionalContentConfig_instances = new WeakSet();
  Ls_fn = function(t2) {
    const e2 = t2.length;
    if (e2 < 2) return true;
    const i2 = t2[0];
    for (let n2 = 1; n2 < e2; n2++) {
      const e3 = t2[n2];
      let s2;
      if (Array.isArray(e3)) s2 = __privateMethod(this, _OptionalContentConfig_instances, Ls_fn).call(this, e3);
      else {
        if (!__privateGet(this, _Ps).has(e3)) {
          warn(`Optional content group not found: ${e3}`);
          return true;
        }
        s2 = __privateGet(this, _Ps).get(e3).visible;
      }
      switch (i2) {
        case "And":
          if (!s2) return false;
          break;
        case "Or":
          if (s2) return true;
          break;
        case "Not":
          return !s2;
        default:
          return true;
      }
    }
    return "And" === i2;
  };
  var OptionalContentConfig = _OptionalContentConfig;
  var _Os, _Rs, _Ns, _Us, _Hs, _PagesMapper_instances, zs_fn, Gs_fn, Ws_fn;
  var PagesMapper = class {
    constructor() {
      __privateAdd(this, _PagesMapper_instances);
      __privateAdd(this, _Os, null);
      __privateAdd(this, _Rs, null);
      __privateAdd(this, _Ns, 0);
      __privateAdd(this, _Us, null);
      __privateAdd(this, _Hs, null);
    }
    get pagesNumber() {
      return __privateGet(this, _Ns);
    }
    set pagesNumber(t2) {
      if (__privateGet(this, _Ns) !== t2) {
        __privateSet(this, _Ns, t2);
        __privateSet(this, _Os, null);
        __privateSet(this, _Rs, null);
      }
    }
    movePages(t2, e2, i2) {
      __privateMethod(this, _PagesMapper_instances, zs_fn).call(this);
      const n2 = __privateGet(this, _Os), s2 = __privateMethod(this, _PagesMapper_instances, Gs_fn).call(this), a2 = e2.length, r2 = new Uint32Array(a2);
      let o2 = 0;
      for (let t3 = 0; t3 < a2; t3++) {
        const s3 = e2[t3] - 1;
        r2[t3] = n2[s3];
        s3 < i2 && o2++;
      }
      const l2 = __privateGet(this, _Ns), h2 = l2 - a2, c2 = MathClamp(i2 - o2, 0, h2);
      for (let e3 = 0, i3 = 0; e3 < l2; e3++) t2.has(e3 + 1) || (n2[i3++] = n2[e3]);
      n2.copyWithin(c2 + a2, c2, h2);
      n2.set(r2, c2);
      __privateMethod(this, _PagesMapper_instances, Ws_fn).call(this, s2);
      n2.every((t3, e3) => t3 === e3 + 1) && __privateSet(this, _Os, null);
    }
    deletePages(t2) {
      __privateMethod(this, _PagesMapper_instances, zs_fn).call(this);
      const e2 = __privateGet(this, _Os), i2 = __privateMethod(this, _PagesMapper_instances, Gs_fn).call(this);
      __privateSet(this, _Hs, { pageNumberToId: e2.slice(), pagesNumber: __privateGet(this, _Ns), prevPageNumbers: __privateGet(this, _Rs).slice() });
      const n2 = __privateGet(this, _Ns) - t2.length;
      __privateSet(this, _Ns, n2);
      const s2 = __privateSet(this, _Os, new Uint32Array(n2));
      __privateSet(this, _Rs, new Int32Array(n2));
      let a2 = 0, r2 = 0;
      for (const i3 of t2) {
        const t3 = i3 - 1;
        if (t3 !== a2) {
          s2.set(e2.subarray(a2, t3), r2);
          r2 += t3 - a2;
        }
        a2 = t3 + 1;
      }
      a2 < e2.length && s2.set(e2.subarray(a2), r2);
      __privateMethod(this, _PagesMapper_instances, Ws_fn).call(this, i2, new Set(t2));
    }
    cancelDelete() {
      if (__privateGet(this, _Hs)) {
        __privateSet(this, _Os, __privateGet(this, _Hs).pageNumberToId);
        __privateSet(this, _Ns, __privateGet(this, _Hs).pagesNumber);
        __privateSet(this, _Rs, __privateGet(this, _Hs).prevPageNumbers);
        __privateSet(this, _Hs, null);
      }
    }
    cleanSavedData() {
      __privateSet(this, _Hs, null);
    }
    copyPages(t2) {
      __privateMethod(this, _PagesMapper_instances, zs_fn).call(this);
      __privateSet(this, _Us, { pageNumbers: t2, pageIds: t2.map((t3) => __privateGet(this, _Os)[t3 - 1]) });
    }
    cancelCopy() {
      __privateSet(this, _Us, null);
    }
    pastePages(t2) {
      __privateMethod(this, _PagesMapper_instances, zs_fn).call(this);
      const e2 = __privateGet(this, _Os), i2 = __privateMethod(this, _PagesMapper_instances, Gs_fn).call(this), { pageNumbers: n2, pageIds: s2 } = __privateGet(this, _Us), a2 = __privateGet(this, _Ns) + n2.length;
      __privateSet(this, _Ns, a2);
      const r2 = __privateSet(this, _Os, new Uint32Array(a2));
      __privateSet(this, _Rs, new Int32Array(a2));
      r2.set(e2.subarray(0, t2), 0);
      r2.set(s2, t2);
      r2.set(e2.subarray(t2), t2 + n2.length);
      __privateMethod(this, _PagesMapper_instances, Ws_fn).call(this, i2, null, t2, n2);
      __privateSet(this, _Us, null);
    }
    hasBeenAltered() {
      return null !== __privateGet(this, _Os);
    }
    getPageMappingForSaving(t2 = null) {
      t2 ?? (t2 = __privateMethod(this, _PagesMapper_instances, Gs_fn).call(this));
      let e2 = 0;
      for (const i3 of t2.values()) e2 = Math.max(e2, i3.length);
      const i2 = new Array(e2);
      for (let t3 = 0; t3 < e2; t3++) i2[t3] = { document: null, pageIndices: [], includePages: [] };
      for (const [e3, n2] of t2) for (let t3 = 0, s2 = n2.length; t3 < s2; t3++) i2[t3].includePages.push([e3 - 1, n2[t3] - 1]);
      for (const { includePages: t3, pageIndices: e3 } of i2) {
        t3.sort((t4, e4) => t4[0] - e4[0]);
        for (let i3 = 0, n2 = t3.length; i3 < n2; i3++) {
          e3.push(t3[i3][1]);
          t3[i3] = t3[i3][0];
        }
      }
      return i2;
    }
    extractPages(t2) {
      t2 = Array.from(t2).sort((t3, e3) => t3 - e3);
      const e2 = /* @__PURE__ */ new Map();
      for (let i2 = 0, n2 = t2.length; i2 < n2; i2++) {
        const n3 = this.getPageId(t2[i2]);
        e2.getOrInsertComputed(n3, makeArr).push(i2 + 1);
      }
      return this.getPageMappingForSaving(e2);
    }
    getPrevPageNumber(t2) {
      return __privateGet(this, _Rs)?.[t2 - 1] ?? 0;
    }
    getPageNumber(t2) {
      if (!__privateGet(this, _Os)) return t2;
      const e2 = __privateGet(this, _Os);
      for (let i2 = 0, n2 = __privateGet(this, _Ns); i2 < n2; i2++) if (e2[i2] === t2) return i2 + 1;
      return 0;
    }
    getPageId(t2) {
      return __privateGet(this, _Os)?.[t2 - 1] ?? t2;
    }
    getMapping() {
      return __privateGet(this, _Os)?.subarray(0, this.pagesNumber);
    }
  };
  _Os = new WeakMap();
  _Rs = new WeakMap();
  _Ns = new WeakMap();
  _Us = new WeakMap();
  _Hs = new WeakMap();
  _PagesMapper_instances = new WeakSet();
  zs_fn = function() {
    if (__privateGet(this, _Os)) return;
    const t2 = __privateGet(this, _Ns), e2 = __privateSet(this, _Os, new Uint32Array(t2));
    for (let i2 = 0; i2 < t2; i2++) e2[i2] = i2 + 1;
    __privateSet(this, _Rs, new Int32Array(e2));
  };
  Gs_fn = function() {
    const t2 = /* @__PURE__ */ new Map(), e2 = __privateGet(this, _Os);
    for (let i2 = 0, n2 = __privateGet(this, _Ns); i2 < n2; i2++) {
      const n3 = e2[i2], s2 = t2.get(n3);
      s2 ? s2.push(i2 + 1) : t2.set(n3, [i2 + 1]);
    }
    return t2;
  };
  Ws_fn = function(t2, e2 = null, i2 = -1, n2 = null) {
    const s2 = __privateGet(this, _Rs), a2 = __privateGet(this, _Os), r2 = i2 + (n2?.length ?? 0), o2 = /* @__PURE__ */ new Map();
    for (let l2 = 0, h2 = __privateGet(this, _Ns); l2 < h2; l2++) {
      if (l2 >= i2 && l2 < r2) {
        s2[l2] = -n2[l2 - i2];
        continue;
      }
      const h3 = a2[l2], c2 = t2.get(h3);
      let d2 = o2.get(h3) || 0;
      if (e2 && c2) for (; d2 < c2.length && e2.has(c2[d2]); ) d2++;
      s2[l2] = c2?.[d2];
      o2.set(h3, d2 + 1);
    }
  };
  var Bt = /* @__PURE__ */ Symbol("INITIAL_DATA");
  var dataObj = () => ({ ...Promise.withResolvers(), data: Bt });
  var _Vs;
  var PDFObjects = class {
    constructor() {
      __privateAdd(this, _Vs, /* @__PURE__ */ new Map());
    }
    get(t2, e2 = null) {
      if (e2) {
        const i3 = __privateGet(this, _Vs).getOrInsertComputed(t2, dataObj);
        i3.promise.then(() => e2(i3.data));
        return null;
      }
      const i2 = __privateGet(this, _Vs).get(t2);
      if (!i2 || i2.data === Bt) throw new Error(`Requesting object that isn't resolved yet ${t2}.`);
      return i2.data;
    }
    has(t2) {
      const e2 = __privateGet(this, _Vs).get(t2);
      return !!e2 && e2.data !== Bt;
    }
    delete(t2) {
      const e2 = __privateGet(this, _Vs).get(t2);
      if (!e2 || e2.data === Bt) return false;
      __privateGet(this, _Vs).delete(t2);
      return true;
    }
    resolve(t2, e2 = null) {
      const i2 = __privateGet(this, _Vs).getOrInsertComputed(t2, dataObj);
      if (i2.data !== Bt) throw new Error(`Object already resolved ${t2}.`);
      i2.data = e2;
      i2.resolve();
    }
    clear() {
      for (const { data: t2 } of __privateGet(this, _Vs).values()) t2?.bitmap?.close();
      __privateGet(this, _Vs).clear();
    }
    *[Symbol.iterator]() {
      for (const [t2, { data: e2 }] of __privateGet(this, _Vs)) e2 !== Bt && (yield [t2, e2]);
    }
  };
  _Vs = new WeakMap();
  var _js, __t3, _$s, _Ks, _Xs, _qs, _Ys, _Qs, _Js, _Zs, _ta, _ea, _ia, _na, _sa, _aa, _ra, _oa, _la, _ha, _ca, _da, _ua, _pa, _TextLayer_instances, ma_fn, ya_fn, ba_fn, _TextLayer_static, fa_fn, Aa_fn, ga_fn, va_fn;
  var _TextLayer = class _TextLayer {
    constructor({ textContentSource: t2, images: e2, container: i2, viewport: n2 }) {
      __privateAdd(this, _TextLayer_instances);
      __privateAdd(this, _js, Promise.withResolvers());
      __privateAdd(this, __t3, null);
      __privateAdd(this, _$s, false);
      __privateAdd(this, _Ks, !!globalThis.FontInspector?.enabled);
      __privateAdd(this, _Xs, null);
      __privateAdd(this, _qs, null);
      __privateAdd(this, _Ys, null);
      __privateAdd(this, _Qs, 0);
      __privateAdd(this, _Js, 0);
      __privateAdd(this, _Zs, null);
      __privateAdd(this, _ta, null);
      __privateAdd(this, _ea, 0);
      __privateAdd(this, _ia, 0);
      __privateAdd(this, _na, /* @__PURE__ */ Object.create(null));
      __privateAdd(this, _sa, []);
      __privateAdd(this, _aa, null);
      __privateAdd(this, _ra, []);
      __privateAdd(this, _oa, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _la, null);
      var _a4;
      if (t2 instanceof ReadableStream) __privateSet(this, _aa, t2);
      else {
        if ("object" != typeof t2) throw new Error('No "textContentSource" parameter specified.');
        __privateSet(this, _aa, new ReadableStream({ start(e3) {
          e3.enqueue(t2);
          e3.close();
        } }));
      }
      __privateSet(this, __t3, __privateSet(this, _ta, i2));
      __privateSet(this, _Xs, e2);
      __privateSet(this, _ia, n2.scale * OutputScale.pixelRatio);
      __privateSet(this, _ea, n2.rotation);
      __privateSet(this, _Ys, { div: null, properties: null, ctx: null });
      const { pageWidth: s2, pageHeight: a2, pageX: r2, pageY: o2 } = n2.rawDims;
      __privateSet(this, _la, [1, 0, 0, -1, -r2, o2 + a2]);
      __privateSet(this, _Js, s2);
      __privateSet(this, _Qs, a2);
      __privateMethod(_a4 = _TextLayer, _TextLayer_static, ga_fn).call(_a4);
      i2.style.setProperty("--min-font-size", __privateGet(_TextLayer, _ua));
      setLayerDimensions(i2, n2);
      __privateGet(this, _js).promise.finally(() => {
        __privateGet(_TextLayer, _pa).delete(this);
        __privateSet(this, _Ys, null);
        __privateSet(this, _na, null);
      }).catch(() => {
      });
    }
    static get fontFamilyMap() {
      const { isWindows: t2, isFirefox: e2 } = FeatureTest.platform;
      return shadow(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", (t2 && e2 ? "Calibri, " : "") + "sans-serif"], ["monospace", (t2 && e2 ? "Lucida Console, " : "") + "monospace"]]));
    }
    render() {
      __privateGet(this, _Xs) && __privateGet(this, __t3).append(__privateGet(this, _Xs).render());
      const pump = () => {
        __privateGet(this, _Zs).read().then(({ value: t2, done: e2 }) => {
          if (e2) __privateGet(this, _js).resolve();
          else {
            __privateGet(this, _qs) ?? __privateSet(this, _qs, t2.lang);
            Object.assign(__privateGet(this, _na), t2.styles);
            __privateMethod(this, _TextLayer_instances, ma_fn).call(this, t2.items);
            pump();
          }
        }, __privateGet(this, _js).reject);
      };
      __privateSet(this, _Zs, __privateGet(this, _aa).getReader());
      __privateGet(_TextLayer, _pa).add(this);
      pump();
      return __privateGet(this, _js).promise;
    }
    update({ viewport: t2, onBefore: e2 = null }) {
      var _a4;
      const i2 = t2.scale * OutputScale.pixelRatio, n2 = t2.rotation;
      if (n2 !== __privateGet(this, _ea)) {
        e2?.();
        __privateSet(this, _ea, n2);
        setLayerDimensions(__privateGet(this, _ta), { rotation: n2 });
      }
      if (i2 !== __privateGet(this, _ia)) {
        e2?.();
        __privateSet(this, _ia, i2);
        const t3 = { div: null, properties: null, ctx: __privateMethod(_a4 = _TextLayer, _TextLayer_static, fa_fn).call(_a4, __privateGet(this, _qs)) };
        for (const e3 of __privateGet(this, _ra)) {
          t3.properties = __privateGet(this, _oa).get(e3);
          t3.div = e3;
          __privateMethod(this, _TextLayer_instances, ba_fn).call(this, t3);
        }
      }
    }
    cancel() {
      const t2 = new AbortException("TextLayer task cancelled.");
      __privateGet(this, _Zs)?.cancel(t2).catch(() => {
      });
      __privateSet(this, _Zs, null);
      __privateGet(this, _js).reject(t2);
    }
    get textDivs() {
      return __privateGet(this, _ra);
    }
    get textContentItemsStr() {
      return __privateGet(this, _sa);
    }
    static cleanup() {
      if (!(__privateGet(this, _pa).size > 0)) {
        __privateGet(this, _ha).clear();
        for (const { canvas: t2 } of __privateGet(this, _ca).values()) t2.remove();
        __privateGet(this, _ca).clear();
      }
    }
  };
  _js = new WeakMap();
  __t3 = new WeakMap();
  _$s = new WeakMap();
  _Ks = new WeakMap();
  _Xs = new WeakMap();
  _qs = new WeakMap();
  _Ys = new WeakMap();
  _Qs = new WeakMap();
  _Js = new WeakMap();
  _Zs = new WeakMap();
  _ta = new WeakMap();
  _ea = new WeakMap();
  _ia = new WeakMap();
  _na = new WeakMap();
  _sa = new WeakMap();
  _aa = new WeakMap();
  _ra = new WeakMap();
  _oa = new WeakMap();
  _la = new WeakMap();
  _ha = new WeakMap();
  _ca = new WeakMap();
  _da = new WeakMap();
  _ua = new WeakMap();
  _pa = new WeakMap();
  _TextLayer_instances = new WeakSet();
  ma_fn = function(t2) {
    var _a4, _b;
    if (__privateGet(this, _$s)) return;
    (_b = __privateGet(this, _Ys)).ctx ?? (_b.ctx = __privateMethod(_a4 = _TextLayer, _TextLayer_static, fa_fn).call(_a4, __privateGet(this, _qs)));
    const e2 = __privateGet(this, _ra), i2 = __privateGet(this, _sa);
    for (const n2 of t2) {
      if (e2.length > 1e5) {
        warn("Ignoring additional textDivs for performance reasons.");
        __privateSet(this, _$s, true);
        return;
      }
      if (void 0 !== n2.str) {
        i2.push(n2.str);
        __privateMethod(this, _TextLayer_instances, ya_fn).call(this, n2);
      } else if ("beginMarkedContentProps" === n2.type || "beginMarkedContent" === n2.type) {
        const t3 = __privateGet(this, __t3);
        __privateSet(this, __t3, document.createElement("span"));
        __privateGet(this, __t3).classList.add("markedContent");
        n2.id && __privateGet(this, __t3).setAttribute("id", `${n2.id}`);
        "Artifact" === n2.tag && (__privateGet(this, __t3).ariaHidden = true);
        t3.append(__privateGet(this, __t3));
      } else "endMarkedContent" === n2.type && __privateSet(this, __t3, __privateGet(this, __t3).parentNode);
    }
  };
  ya_fn = function(t2) {
    var _a4;
    const e2 = document.createElement("span"), i2 = { angle: 0, canvasWidth: 0, hasText: "" !== t2.str, hasEOL: t2.hasEOL, fontSize: 0 };
    __privateGet(this, _ra).push(e2);
    const n2 = Util.transform(__privateGet(this, _la), t2.transform);
    let s2 = Math.atan2(n2[1], n2[0]);
    const a2 = __privateGet(this, _na)[t2.fontName];
    a2.vertical && (s2 += Math.PI / 2);
    let r2 = __privateGet(this, _Ks) && a2.fontSubstitution || a2.fontFamily;
    r2 = _TextLayer.fontFamilyMap.get(r2) || r2;
    const o2 = Math.hypot(n2[2], n2[3]), l2 = o2 * __privateMethod(_a4 = _TextLayer, _TextLayer_static, va_fn).call(_a4, r2, a2, __privateGet(this, _qs));
    let h2, c2;
    if (0 === s2) {
      h2 = n2[4];
      c2 = n2[5] - l2;
    } else {
      h2 = n2[4] + l2 * Math.sin(s2);
      c2 = n2[5] - l2 * Math.cos(s2);
    }
    const d2 = e2.style;
    d2.left = `${(100 * h2 / __privateGet(this, _Js)).toFixed(2)}%`;
    d2.top = `${(100 * c2 / __privateGet(this, _Qs)).toFixed(2)}%`;
    d2.setProperty("--font-height", `${o2.toFixed(2)}px`);
    d2.fontFamily = r2;
    i2.fontSize = o2;
    e2.setAttribute("role", "presentation");
    e2.textContent = t2.str;
    e2.dir = t2.dir;
    __privateGet(this, _Ks) && (e2.dataset.fontName = a2.fontSubstitutionLoadedName || t2.fontName);
    0 !== s2 && (i2.angle = s2 * (180 / Math.PI));
    let u2 = false;
    if (t2.str.length > 1) u2 = true;
    else if (" " !== t2.str && t2.transform[0] !== t2.transform[3]) {
      const e3 = Math.abs(t2.transform[0]), i3 = Math.abs(t2.transform[3]);
      e3 !== i3 && Math.max(e3, i3) / Math.min(e3, i3) > 1.5 && (u2 = true);
    }
    u2 && (i2.canvasWidth = a2.vertical ? t2.height : t2.width);
    __privateGet(this, _oa).set(e2, i2);
    __privateGet(this, _Ys).div = e2;
    __privateGet(this, _Ys).properties = i2;
    __privateMethod(this, _TextLayer_instances, ba_fn).call(this, __privateGet(this, _Ys));
    i2.hasText && __privateGet(this, __t3).append(e2);
    if (i2.hasEOL) {
      const t3 = document.createElement("br");
      t3.setAttribute("role", "presentation");
      __privateGet(this, __t3).append(t3);
    }
  };
  ba_fn = function(t2) {
    var _a4;
    const { div: e2, properties: i2, ctx: n2 } = t2, { style: s2 } = e2;
    if (0 !== i2.canvasWidth && i2.hasText) {
      const { fontFamily: t3 } = s2, { canvasWidth: a2, fontSize: r2 } = i2;
      __privateMethod(_a4 = _TextLayer, _TextLayer_static, Aa_fn).call(_a4, n2, r2 * __privateGet(this, _ia), t3);
      const { width: o2 } = n2.measureText(e2.textContent);
      o2 > 0 && s2.setProperty("--scale-x", a2 * __privateGet(this, _ia) / o2);
    }
    0 !== i2.angle && s2.setProperty("--rotate", `${i2.angle}deg`);
  };
  _TextLayer_static = new WeakSet();
  fa_fn = function(t2 = null) {
    let e2 = __privateGet(this, _ca).get(t2 || (t2 = ""));
    if (!e2) {
      const i2 = document.createElement("canvas");
      i2.style.cssText = "position:absolute;top:0;left:0;width:0;height:0;display:none;letter-spacing:normal;word-spacing:normal";
      i2.lang = t2;
      document.body.append(i2);
      e2 = i2.getContext("2d", { alpha: false, willReadFrequently: true });
      __privateGet(this, _ca).set(t2, e2);
      __privateGet(this, _da).set(e2, { size: 0, family: "" });
    }
    return e2;
  };
  Aa_fn = function(t2, e2, i2) {
    const n2 = __privateGet(this, _da).get(t2);
    if (e2 !== n2.size || i2 !== n2.family) {
      t2.font = `${e2}px ${i2}`;
      n2.size = e2;
      n2.family = i2;
    }
  };
  ga_fn = function() {
    if (null !== __privateGet(this, _ua)) return;
    const t2 = document.createElement("div");
    t2.style.opacity = 0;
    t2.style.lineHeight = 1;
    t2.style.fontSize = "1px";
    t2.style.position = "absolute";
    t2.textContent = "X";
    document.body.append(t2);
    __privateSet(this, _ua, t2.getBoundingClientRect().height);
    t2.remove();
  };
  va_fn = function(t2, e2, i2) {
    const n2 = __privateGet(this, _ha).get(t2);
    if (n2) return n2;
    const s2 = __privateMethod(this, _TextLayer_static, fa_fn).call(this, i2);
    s2.canvas.width = s2.canvas.height = 30;
    __privateMethod(this, _TextLayer_static, Aa_fn).call(this, s2, 30, t2);
    const a2 = s2.measureText(""), r2 = a2.fontBoundingBoxAscent, o2 = Math.abs(a2.fontBoundingBoxDescent);
    s2.canvas.width = s2.canvas.height = 0;
    let l2 = 0.8;
    if (r2) l2 = r2 / (r2 + o2);
    else {
      FeatureTest.platform.isFirefox && warn("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.");
      e2.ascent ? l2 = e2.ascent : e2.descent && (l2 = 1 + e2.descent);
    }
    __privateGet(this, _ha).set(t2, l2);
    return l2;
  };
  __privateAdd(_TextLayer, _TextLayer_static);
  __privateAdd(_TextLayer, _ha, /* @__PURE__ */ new Map());
  __privateAdd(_TextLayer, _ca, /* @__PURE__ */ new Map());
  __privateAdd(_TextLayer, _da, /* @__PURE__ */ new WeakMap());
  __privateAdd(_TextLayer, _ua, null);
  __privateAdd(_TextLayer, _pa, /* @__PURE__ */ new Set());
  var TextLayer = _TextLayer;
  function getDocument(e2 = {}) {
    const i2 = new PDFDocumentLoadingTask(), { docId: n2 } = i2, s2 = e2.url ? (function getUrlProp(e3) {
      if (e3 instanceof URL) return e3;
      if ("string" == typeof e3) {
        if (t) {
          if (/^[a-z][a-z0-9\-+.]+:/i.test(e3)) return new URL(e3);
          const t2 = process.getBuiltinModule("url");
          return new URL(t2.pathToFileURL(e3));
        }
        const i3 = URL.parse(e3, window.location);
        if (i3) return i3;
      }
      throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
    })(e2.url) : null, a2 = e2.data ? (function getDataProp(e3) {
      if (t && "undefined" != typeof Buffer && e3 instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
      if (e3 instanceof Uint8Array && e3.byteLength === e3.buffer.byteLength) return e3;
      if ("string" == typeof e3) return stringToBytes(e3);
      if (e3 instanceof ArrayBuffer || ArrayBuffer.isView(e3) || "object" == typeof e3 && !isNaN(e3?.length)) return new Uint8Array(e3);
      throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
    })(e2.data) : null, r2 = e2.httpHeaders || null, o2 = true === e2.withCredentials, l2 = e2.password ?? null, h2 = e2.range instanceof PDFDataRangeTransport ? e2.range : null, c2 = Number.isInteger(e2.rangeChunkSize) && e2.rangeChunkSize > 0 ? e2.rangeChunkSize : 65536;
    let d2 = e2.worker instanceof PDFWorker ? e2.worker : null;
    const u2 = e2.verbosity, p2 = "string" != typeof e2.docBaseUrl || isDataScheme(e2.docBaseUrl) ? null : e2.docBaseUrl, g2 = getFactoryUrlProp(e2.cMapUrl), m2 = false !== e2.cMapPacked, f2 = getFactoryUrlProp(e2.iccUrl), b2 = getFactoryUrlProp(e2.standardFontDataUrl), y2 = getFactoryUrlProp(e2.wasmUrl), v2 = true !== e2.stopAtErrors, A2 = Number.isInteger(e2.maxImageSize) && e2.maxImageSize > -1 ? e2.maxImageSize : -1, w2 = "boolean" == typeof e2.isOffscreenCanvasSupported ? e2.isOffscreenCanvasSupported : !t, x2 = "boolean" == typeof e2.isImageDecoderSupported ? e2.isImageDecoderSupported : !t, C2 = Number.isInteger(e2.canvasMaxAreaInBytes) ? e2.canvasMaxAreaInBytes : -1, E2 = "boolean" == typeof e2.disableFontFace ? e2.disableFontFace : t, S2 = true === e2.fontExtraProperties, T2 = true === e2.enableXfa, k2 = e2.ownerDocument || globalThis.document, _2 = true === e2.disableRange, M2 = true === e2.disableStream, D2 = true === e2.disableAutoFetch, P2 = true === e2.pdfBug, I2 = e2.CanvasFactory || (t ? NodeCanvasFactory : DOMCanvasFactory), F2 = e2.FilterFactory || (t ? NodeFilterFactory : DOMFilterFactory), B2 = e2.BinaryDataFactory || (t ? NodeBinaryDataFactory : DOMBinaryDataFactory), L2 = true === e2.enableHWA, O2 = true === e2.enableWebGPU ? (function initGPU() {
      return At.init();
    })() : Promise.resolve(false), R2 = false !== e2.useWasm, N2 = e2.pagesMapper || new PagesMapper(), U2 = "boolean" == typeof e2.useSystemFonts ? e2.useSystemFonts : !t && !E2, H2 = "boolean" == typeof e2.useWorkerFetch ? e2.useWorkerFetch : !!(B2 === DOMBinaryDataFactory && g2 && m2 && b2 && y2 && isValidFetchUrl(g2, document.baseURI) && isValidFetchUrl(b2, document.baseURI) && isValidFetchUrl(y2, document.baseURI));
    setVerbosityLevel(u2);
    const z2 = { canvasFactory: new I2({ ownerDocument: k2, enableHWA: L2 }), filterFactory: new F2({ docId: n2, ownerDocument: k2 }), binaryDataFactory: H2 ? null : new B2({ cMapUrl: g2, standardFontDataUrl: b2, wasmUrl: y2 }) };
    if (!d2) {
      d2 = PDFWorker.create({ verbosity: u2, port: GlobalWorkerOptions.workerPort });
      i2._worker = d2;
    }
    const G2 = { docId: n2, apiVersion: "6.1.200", data: a2, password: l2, disableAutoFetch: D2, rangeChunkSize: c2, docBaseUrl: p2, enableXfa: T2, evaluatorOptions: { maxImageSize: A2, disableFontFace: E2, ignoreErrors: v2, isOffscreenCanvasSupported: w2, isImageDecoderSupported: x2, canvasMaxAreaInBytes: C2, fontExtraProperties: S2, useSystemFonts: U2, useWasm: R2, useWorkerFetch: H2, cMapUrl: g2, cMapPacked: m2, iccUrl: f2, standardFontDataUrl: b2, wasmUrl: y2, hasGPU: false } }, W2 = { ownerDocument: k2, pdfBug: P2, styleElement: null, enableHWA: L2, loadingParams: { disableAutoFetch: D2, enableXfa: T2 } };
    Promise.all([d2.promise, O2]).then(function([, e3]) {
      if (d2.destroyed) throw new Error("Worker was destroyed");
      G2.evaluatorOptions.hasGPU = e3;
      const l3 = d2.messageHandler.sendWithPromise("GetDocRequest", G2, a2 ? [a2.buffer] : null);
      let u3;
      if (a2) ;
      else if (h2) u3 = new PDFDataTransportStream({ pdfDataRangeTransport: h2, disableRange: _2, disableStream: M2 });
      else {
        if (!s2) throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
        {
          const e4 = (function getNetworkStream(e5) {
            return isValidFetchUrl(e5) ? PDFFetchStream : t ? PDFNodeStream : PDFNetworkStream;
          })(s2);
          u3 = new e4({ url: s2, httpHeaders: r2, withCredentials: o2, rangeChunkSize: c2, disableRange: _2, disableStream: M2 });
        }
      }
      return l3.then((t2) => {
        if (d2.destroyed) throw new Error("Worker was destroyed");
        const e4 = new MessageHandler(n2, t2, d2.port), s3 = new WorkerTransport(e4, i2, u3, W2, z2, N2);
        i2._transport = s3;
        if (i2.destroyed) throw new Error("Loading aborted");
        e4.send("Ready", null);
      });
    }).catch(i2._capability.reject).finally(i2._setupCapability.resolve);
    return i2;
  }
  var _Sn2;
  var _PDFDocumentLoadingTask = class _PDFDocumentLoadingTask {
    constructor() {
      __publicField(this, "_capability", Promise.withResolvers());
      __publicField(this, "_setupCapability", Promise.withResolvers());
      __publicField(this, "_transport", null);
      __publicField(this, "_worker", null);
      __publicField(this, "docId", "d" + __privateWrapper(_PDFDocumentLoadingTask, _Sn2)._++);
      __publicField(this, "destroyed", false);
      __publicField(this, "onPassword", null);
      __publicField(this, "onProgress", null);
    }
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      this.destroyed = true;
      this._capability.promise.catch(() => {
      });
      try {
        this._worker?.port && (this._worker._pendingDestroy = true);
        await this._setupCapability.promise;
        await this._transport?.destroy();
      } catch (t2) {
        this._worker?.port && delete this._worker._pendingDestroy;
        throw t2;
      }
      this._transport = null;
      this._worker?.destroy();
      this._worker = null;
    }
    async getData() {
      return this._transport.getData();
    }
  };
  _Sn2 = new WeakMap();
  __privateAdd(_PDFDocumentLoadingTask, _Sn2, 0);
  var PDFDocumentLoadingTask = _PDFDocumentLoadingTask;
  var _js2, _wa;
  var PDFDataRangeTransport = class {
    constructor(t2, e2, i2 = false, n2 = null) {
      __privateAdd(this, _js2, Promise.withResolvers());
      __privateAdd(this, _wa, null);
      this.length = t2;
      this.initialData = e2;
      this.progressiveDone = i2;
      this.contentDispositionFilename = n2;
    }
    onDataRange(t2, e2) {
      __privateGet(this, _wa).call(this, { type: "range", begin: t2, chunk: e2 });
    }
    onDataProgressiveRead(t2) {
      __privateGet(this, _js2).promise.then(() => {
        __privateGet(this, _wa).call(this, { type: "progressiveRead", chunk: t2 });
      });
    }
    onDataProgressiveDone() {
      __privateGet(this, _js2).promise.then(() => {
        __privateGet(this, _wa).call(this, { type: "progressiveDone" });
      });
    }
    transportReady(t2) {
      __privateSet(this, _wa, t2);
      __privateGet(this, _js2).resolve();
    }
    requestDataRange(t2, e2) {
      unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {
    }
  };
  _js2 = new WeakMap();
  _wa = new WeakMap();
  var PDFDocumentProxy = class {
    constructor(t2, e2) {
      this._pdfInfo = t2;
      this._transport = e2;
    }
    get pagesMapper() {
      return this._transport.pagesMapper;
    }
    get annotationStorage() {
      return this._transport.annotationStorage;
    }
    get canvasFactory() {
      return this._transport.canvasFactory;
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get numPages() {
      return this._pdfInfo.numPages;
    }
    get fingerprints() {
      return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
      return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
      return this._transport._htmlForXfa;
    }
    getPage(t2) {
      return this._transport.getPage(t2);
    }
    getPageIndex(t2) {
      return this._transport.getPageIndex(t2);
    }
    getDestinations() {
      return this._transport.getDestinations();
    }
    getDestination(t2) {
      return this._transport.getDestination(t2);
    }
    getPageLabels() {
      return this._transport.getPageLabels();
    }
    getPageLayout() {
      return this._transport.getPageLayout();
    }
    getPageMode() {
      return this._transport.getPageMode();
    }
    getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
    getOpenAction() {
      return this._transport.getOpenAction();
    }
    getAttachments() {
      return this._transport.getAttachments();
    }
    getAttachmentContent(t2) {
      return this._transport.getAttachmentContent(t2);
    }
    getAnnotationsByType(t2, e2) {
      return this._transport.getAnnotationsByType(t2, e2);
    }
    getJSActions() {
      return this._transport.getDocJSActions();
    }
    getOutline() {
      return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: t2 = "display" } = {}) {
      const { renderingIntent: e2 } = this._transport.getRenderingIntent(t2);
      return this._transport.getOptionalContentConfig(e2);
    }
    getPermissions() {
      return this._transport.getPermissions();
    }
    getMetadata() {
      return this._transport.getMetadata();
    }
    getMarkInfo() {
      return this._transport.getMarkInfo();
    }
    getData() {
      return this._transport.getData();
    }
    saveDocument() {
      return this._transport.saveDocument();
    }
    extractPages(t2) {
      return this._transport.extractPages(t2);
    }
    getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
    getRawData(t2) {
      return this._transport.getRawData(t2);
    }
    cleanup(t2 = false) {
      return this._transport.startCleanup(t2 || this.isPureXfa);
    }
    cachedPageNumber(t2) {
      return this._transport.cachedPageNumber(t2);
    }
    get loadingParams() {
      return this._transport.loadingParams;
    }
    get loadingTask() {
      return this._transport.loadingTask;
    }
    getFieldObjects() {
      return this._transport.getFieldObjects();
    }
    hasJSActions() {
      return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  };
  var _xa, _Ca, _PDFPageProxy_instances, Ea_fn;
  var _PDFPageProxy = class _PDFPageProxy {
    constructor(t2, e2, i2, n2, s2 = false) {
      __privateAdd(this, _PDFPageProxy_instances);
      __privateAdd(this, _xa, false);
      __privateAdd(this, _Ca, null);
      this._pageIndex = t2;
      this._pageInfo = e2;
      this._transport = i2;
      this._stats = s2 ? new StatTimer() : null;
      this._pdfBug = s2;
      this.commonObjs = i2.commonObjs;
      this.objs = new PDFObjects();
      this._intentStates = /* @__PURE__ */ new Map();
      this.destroyed = false;
      this.recordedBBoxes = null;
      __privateSet(this, _Ca, n2);
      this.imageCoordinates = null;
    }
    clone(t2) {
      const e2 = new _PDFPageProxy(t2, this._pageInfo, this._transport, __privateGet(this, _Ca), this._pdfBug);
      e2.clonedFromIndex = this.clonedFromIndex ?? this._pageIndex;
      this._transport.updatePage(e2);
      return e2;
    }
    get pageNumber() {
      return this._pageIndex + 1;
    }
    set pageNumber(t2) {
      this._pageIndex = t2 - 1;
      this._transport.updatePage(this);
    }
    get rotate() {
      return this._pageInfo.rotate;
    }
    get ref() {
      return this._pageInfo.ref;
    }
    get userUnit() {
      return this._pageInfo.userUnit;
    }
    get view() {
      return this._pageInfo.view;
    }
    getViewport({ scale: t2, rotation: e2 = this.rotate, offsetX: i2 = 0, offsetY: n2 = 0, dontFlip: s2 = false } = {}) {
      return new PageViewport({ viewBox: this.view, userUnit: this.userUnit, scale: t2, rotation: e2, offsetX: i2, offsetY: n2, dontFlip: s2 });
    }
    getAnnotations({ intent: t2 = "display" } = {}) {
      const { renderingIntent: e2 } = this._transport.getRenderingIntent(t2);
      return this._transport.getAnnotations(this._pageIndex, e2);
    }
    getJSActions() {
      return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get isPureXfa() {
      return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
      return this._transport._htmlForXfa?.children[this._pageIndex] || null;
    }
    render({ canvasContext: t2, canvas: e2 = t2.canvas, viewport: i2, intent: n2 = "display", annotationMode: s2 = g.ENABLE, transform: a2 = null, background: r2 = null, optionalContentConfigPromise: o2 = null, annotationCanvasMap: h2 = null, pageColors: c2 = null, printAnnotationStorage: d2 = null, isEditing: u2 = false, recordImages: p2 = false, recordOperations: m2 = false, operationsFilter: f2 = null }) {
      this._stats?.time("Overall");
      const b2 = this._transport.getRenderingIntent(n2, s2, d2, u2), { renderingIntent: y2, cacheKey: v2 } = b2;
      __privateSet(this, _xa, false);
      o2 || (o2 = this._transport.getOptionalContentConfig(y2));
      const A2 = this._intentStates.getOrInsertComputed(v2, makeObj);
      if (A2.streamReaderCancelTimeout) {
        clearTimeout(A2.streamReaderCancelTimeout);
        A2.streamReaderCancelTimeout = null;
      }
      const w2 = !!(y2 & l);
      if (!A2.displayReadyCapability) {
        A2.displayReadyCapability = Promise.withResolvers();
        A2.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null };
        this._stats?.time("Page Request");
        this._pumpOperatorList(b2);
      }
      const x2 = !(!this._pdfBug || !globalThis.StepperManager?.enabled), C2 = !!e2 && !this.recordedBBoxes && (m2 || x2), E2 = !!e2 && !this.imageCoordinates && p2, complete = (t3) => {
        A2.renderTasks.delete(k2);
        if (C2) {
          const t4 = k2.gfx?.dependencyTracker.take();
          if (t4) {
            k2.stepper?.setOperatorBBoxes(t4, k2.gfx.dependencyTracker.takeDebugMetadata());
            m2 && (this.recordedBBoxes = t4);
          }
        }
        E2 && !t3 && (this.imageCoordinates = k2.gfx?.imagesTracker.take());
        w2 && __privateSet(this, _xa, true);
        __privateMethod(this, _PDFPageProxy_instances, Ea_fn).call(this);
        if (t3) {
          k2.capability.reject(t3);
          this._abortOperatorList({ intentState: A2, reason: t3 instanceof Error ? t3 : new Error(t3) });
        } else k2.capability.resolve();
        if (this._stats) {
          this._stats.timeEnd("Rendering");
          this._stats.timeEnd("Overall");
          globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats);
        }
      };
      let S2 = null, T2 = null;
      (C2 || E2) && (T2 = new CanvasBBoxTracker(e2, A2.operatorList.length));
      C2 && (S2 = new CanvasDependencyTracker(T2, x2));
      const k2 = new InternalRenderTask({ callback: complete, params: { canvas: e2, canvasContext: t2, dependencyTracker: S2 ?? T2, imagesTracker: E2 ? new CanvasImagesTracker(e2) : null, viewport: i2, transform: a2, background: r2 }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: h2, operatorList: A2.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !w2, pdfBug: this._pdfBug, pageColors: c2, enableHWA: this._transport.enableHWA, operationsFilter: f2 });
      (A2.renderTasks || (A2.renderTasks = /* @__PURE__ */ new Set())).add(k2);
      const _2 = k2.task;
      Promise.all([A2.displayReadyCapability.promise, o2]).then(([t3, e3]) => {
        if (this.destroyed) complete();
        else {
          this._stats?.time("Rendering");
          if (!(e3.renderingIntent & y2)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
          k2.initializeGraphics({ transparency: t3, optionalContentConfig: e3 });
          k2.operatorListChanged();
        }
      }).catch(complete);
      return _2;
    }
    getOperatorList({ intent: t2 = "display", annotationMode: e2 = g.ENABLE, printAnnotationStorage: i2 = null, isEditing: n2 = false } = {}) {
      const s2 = this._transport.getRenderingIntent(t2, e2, i2, n2, true), a2 = this._intentStates.getOrInsertComputed(s2.cacheKey, makeObj);
      let r2;
      if (!a2.opListReadCapability) {
        r2 = /* @__PURE__ */ Object.create(null);
        r2.operatorListChanged = function operatorListChanged() {
          if (a2.operatorList.lastChunk) {
            a2.opListReadCapability.resolve(a2.operatorList);
            a2.renderTasks.delete(r2);
          }
        };
        a2.opListReadCapability = Promise.withResolvers();
        (a2.renderTasks || (a2.renderTasks = /* @__PURE__ */ new Set())).add(r2);
        a2.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null };
        this._stats?.time("Page Request");
        this._pumpOperatorList(s2);
      }
      return a2.opListReadCapability.promise;
    }
    streamTextContent({ includeMarkedContent: t2 = false, disableNormalization: e2 = false } = {}) {
      return this._transport.messageHandler.sendWithStream("GetTextContent", { pageId: __privateGet(this, _Ca).getPageId(this._pageIndex + 1) - 1, pageIndex: this._pageIndex, includeMarkedContent: true === t2, disableNormalization: true === e2 }, { highWaterMark: 100, size: (t3) => t3.items.length });
    }
    async getTextContent(t2 = {}) {
      if (this._transport._htmlForXfa) return this.getXfa().then((t3) => XfaText.textContent(t3));
      const e2 = this.streamTextContent(t2), i2 = { items: [], styles: /* @__PURE__ */ Object.create(null), lang: null };
      for await (const t3 of e2) {
        i2.lang ?? (i2.lang = t3.lang);
        Object.assign(i2.styles, t3.styles);
        i2.items.push(...t3.items);
      }
      return i2;
    }
    getStructTree() {
      return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
      this.destroyed = true;
      const t2 = [];
      for (const e2 of this._intentStates.values()) {
        this._abortOperatorList({ intentState: e2, reason: new Error("Page was destroyed."), force: true });
        if (!e2.opListReadCapability) for (const i2 of e2.renderTasks) {
          t2.push(i2.completed);
          i2.cancel();
        }
      }
      this.objs.clear();
      __privateSet(this, _xa, false);
      return Promise.all(t2);
    }
    cleanup(t2 = false) {
      __privateSet(this, _xa, true);
      const e2 = __privateMethod(this, _PDFPageProxy_instances, Ea_fn).call(this);
      t2 && e2 && (this._stats && (this._stats = new StatTimer()));
      return e2;
    }
    _startRenderPage(t2, e2) {
      const i2 = this._intentStates.get(e2);
      if (i2) {
        this._stats?.timeEnd("Page Request");
        i2.displayReadyCapability?.resolve(t2);
      }
    }
    _renderPageChunk(t2, e2) {
      for (let i2 = 0, n2 = t2.length; i2 < n2; i2++) {
        e2.operatorList.fnArray.push(t2.fnArray[i2]);
        e2.operatorList.argsArray.push(t2.argsArray[i2]);
      }
      e2.operatorList.lastChunk = t2.lastChunk;
      e2.operatorList.separateAnnots = t2.separateAnnots;
      for (const t3 of e2.renderTasks) t3.operatorListChanged();
      t2.lastChunk && __privateMethod(this, _PDFPageProxy_instances, Ea_fn).call(this);
    }
    _pumpOperatorList({ renderingIntent: t2, cacheKey: e2, annotationStorageSerializable: i2, modifiedIds: n2 }) {
      const { map: s2, transfer: a2 } = i2, r2 = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageId: __privateGet(this, _Ca).getPageId(this._pageIndex + 1) - 1, pageIndex: this._pageIndex, intent: t2, cacheKey: e2, annotationStorage: s2, modifiedIds: n2 }, void 0, a2).getReader(), o2 = this._intentStates.get(e2);
      o2.streamReader = r2;
      const pump = () => {
        r2.read().then(({ value: t3, done: e3 }) => {
          if (e3) o2.streamReader = null;
          else if (!this._transport.destroyed) {
            this._renderPageChunk(t3, o2);
            pump();
          }
        }, (t3) => {
          o2.streamReader = null;
          if (!this._transport.destroyed) {
            if (o2.operatorList) {
              o2.operatorList.lastChunk = true;
              for (const t4 of o2.renderTasks) t4.operatorListChanged();
              __privateMethod(this, _PDFPageProxy_instances, Ea_fn).call(this);
            }
            if (o2.displayReadyCapability) o2.displayReadyCapability.reject(t3);
            else {
              if (!o2.opListReadCapability) throw t3;
              o2.opListReadCapability.reject(t3);
            }
          }
        });
      };
      pump();
    }
    _abortOperatorList({ intentState: t2, reason: e2, force: i2 = false }) {
      if (t2.streamReader) {
        if (t2.streamReaderCancelTimeout) {
          clearTimeout(t2.streamReaderCancelTimeout);
          t2.streamReaderCancelTimeout = null;
        }
        if (!i2) {
          if (t2.renderTasks.size > 0) return;
          if (e2 instanceof RenderingCancelledException) {
            let i3 = 100;
            e2.extraDelay > 0 && e2.extraDelay < 1e3 && (i3 += e2.extraDelay);
            t2.streamReaderCancelTimeout = setTimeout(() => {
              t2.streamReaderCancelTimeout = null;
              this._abortOperatorList({ intentState: t2, reason: e2, force: true });
            }, i3);
            return;
          }
        }
        t2.streamReader.cancel(new AbortException(e2.message)).catch(() => {
        });
        t2.streamReader = null;
        if (!this._transport.destroyed) {
          for (const [e3, i3] of this._intentStates) if (i3 === t2) {
            this._intentStates.delete(e3);
            break;
          }
          this.cleanup();
        }
      }
    }
    get stats() {
      return this._stats;
    }
  };
  _xa = new WeakMap();
  _Ca = new WeakMap();
  _PDFPageProxy_instances = new WeakSet();
  Ea_fn = function() {
    if (!__privateGet(this, _xa) || this.destroyed) return false;
    for (const { renderTasks: t2, operatorList: e2 } of this._intentStates.values()) if (t2.size > 0 || !e2.lastChunk) return false;
    this._intentStates.clear();
    this.objs.clear();
    __privateSet(this, _xa, false);
    return true;
  };
  var PDFPageProxy = _PDFPageProxy;
  var _js3, _Sa, _xs2, _Ta, _ka, __a, _Ma, _PDFWorker_instances, Ia_fn, Da_fn, Pa_fn, Ba_fn, _PDFWorker_static, Fa_get;
  var _PDFWorker = class _PDFWorker {
    constructor({ name: t2 = null, port: e2 = null, verbosity: i2 = getVerbosityLevel() } = {}) {
      __privateAdd(this, _PDFWorker_instances);
      __privateAdd(this, _js3, Promise.withResolvers());
      __privateAdd(this, _Sa, null);
      __privateAdd(this, _xs2, null);
      __privateAdd(this, _Ta, null);
      this.name = t2;
      this.destroyed = false;
      this.verbosity = i2;
      if (e2) {
        if (__privateGet(_PDFWorker, _Ma).has(e2)) throw new Error("Cannot use more than one PDFWorker per port.");
        __privateGet(_PDFWorker, _Ma).set(e2, this);
        __privateMethod(this, _PDFWorker_instances, Da_fn).call(this, e2);
      } else __privateMethod(this, _PDFWorker_instances, Pa_fn).call(this);
    }
    get promise() {
      return __privateGet(this, _js3).promise;
    }
    get port() {
      return __privateGet(this, _xs2);
    }
    get messageHandler() {
      return __privateGet(this, _Sa);
    }
    destroy() {
      this.destroyed = true;
      __privateGet(this, _Ta)?.terminate();
      __privateSet(this, _Ta, null);
      __privateGet(_PDFWorker, _Ma).delete(__privateGet(this, _xs2));
      __privateSet(this, _xs2, null);
      __privateGet(this, _Sa)?.destroy();
      __privateSet(this, _Sa, null);
    }
    static create(t2) {
      const e2 = __privateGet(this, _Ma).get(t2?.port);
      if (e2) {
        if (e2._pendingDestroy) throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
        return e2;
      }
      return new _PDFWorker(t2);
    }
    static get workerSrc() {
      if (GlobalWorkerOptions.workerSrc) return GlobalWorkerOptions.workerSrc;
      throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }
    static get _setupFakeWorkerGlobal() {
      return shadow(this, "_setupFakeWorkerGlobal", (async () => {
        if (__privateGet(this, _PDFWorker_static, Fa_get)) return __privateGet(this, _PDFWorker_static, Fa_get);
        return (await import(
          /*webpackIgnore: true*/
          /*@vite-ignore*/
          this.workerSrc
        )).WorkerMessageHandler;
      })());
    }
  };
  _js3 = new WeakMap();
  _Sa = new WeakMap();
  _xs2 = new WeakMap();
  _Ta = new WeakMap();
  _ka = new WeakMap();
  __a = new WeakMap();
  _Ma = new WeakMap();
  _PDFWorker_instances = new WeakSet();
  Ia_fn = function() {
    __privateGet(this, _js3).resolve();
    __privateGet(this, _Sa).send("configure", { verbosity: this.verbosity });
  };
  Da_fn = function(t2) {
    __privateSet(this, _xs2, t2);
    __privateSet(this, _Sa, new MessageHandler("main", "worker", t2));
    __privateGet(this, _Sa).on("ready", () => {
    });
    __privateMethod(this, _PDFWorker_instances, Ia_fn).call(this);
  };
  Pa_fn = function() {
    if (__privateGet(_PDFWorker, __a) || __privateGet(_PDFWorker, _PDFWorker_static, Fa_get)) {
      __privateMethod(this, _PDFWorker_instances, Ba_fn).call(this);
      return;
    }
    let { workerSrc: t2 } = _PDFWorker;
    try {
      _PDFWorker._isSameOrigin(window.location, t2) || (t2 = _PDFWorker._createCDNWrapper(new URL(t2, window.location).href));
      const e2 = new Worker(t2, { type: "module" }), i2 = new MessageHandler("main", "worker", e2), terminateEarly = () => {
        n2.abort();
        i2.destroy();
        e2.terminate();
        this.destroyed ? __privateGet(this, _js3).reject(new Error("Worker was destroyed")) : __privateMethod(this, _PDFWorker_instances, Ba_fn).call(this);
      }, n2 = new AbortController();
      e2.addEventListener("error", () => {
        __privateGet(this, _Ta) || terminateEarly();
      }, { signal: n2.signal });
      i2.on("test", (t3) => {
        n2.abort();
        if (!this.destroyed && t3) {
          __privateSet(this, _Sa, i2);
          __privateSet(this, _xs2, e2);
          __privateSet(this, _Ta, e2);
          __privateMethod(this, _PDFWorker_instances, Ia_fn).call(this);
        } else terminateEarly();
      });
      i2.on("ready", (t3) => {
        n2.abort();
        if (this.destroyed) terminateEarly();
        else try {
          sendTest();
        } catch {
          __privateMethod(this, _PDFWorker_instances, Ba_fn).call(this);
        }
      });
      const sendTest = () => {
        const t3 = new Uint8Array();
        i2.send("test", t3, [t3.buffer]);
      };
      sendTest();
      return;
    } catch {
      info("The worker has been disabled.");
    }
    __privateMethod(this, _PDFWorker_instances, Ba_fn).call(this);
  };
  Ba_fn = function() {
    if (!__privateGet(_PDFWorker, __a)) {
      warn("Setting up fake worker.");
      __privateSet(_PDFWorker, __a, true);
    }
    _PDFWorker._setupFakeWorkerGlobal.then((t2) => {
      if (this.destroyed) {
        __privateGet(this, _js3).reject(new Error("Worker was destroyed"));
        return;
      }
      const e2 = new LoopbackPort();
      __privateSet(this, _xs2, e2);
      const i2 = "fake" + __privateWrapper(_PDFWorker, _ka)._++, n2 = new MessageHandler(i2 + "_worker", i2, e2);
      t2.setup(n2, e2);
      __privateSet(this, _Sa, new MessageHandler(i2, i2 + "_worker", e2));
      __privateMethod(this, _PDFWorker_instances, Ia_fn).call(this);
    }).catch((t2) => {
      __privateGet(this, _js3).reject(new Error(`Setting up fake worker failed: "${t2.message}".`));
    });
  };
  _PDFWorker_static = new WeakSet();
  Fa_get = function() {
    try {
      return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch {
      return null;
    }
  };
  __privateAdd(_PDFWorker, _PDFWorker_static);
  __privateAdd(_PDFWorker, _ka, 0);
  __privateAdd(_PDFWorker, __a, false);
  __privateAdd(_PDFWorker, _Ma, /* @__PURE__ */ new WeakMap());
  (() => {
    if (t) {
      __privateSet(_PDFWorker, __a, true);
      GlobalWorkerOptions.workerSrc || (GlobalWorkerOptions.workerSrc = "./pdf.worker.mjs");
    }
    _PDFWorker._isSameOrigin = (t2, e2) => {
      const i2 = URL.parse(t2);
      if (!i2?.origin || "null" === i2.origin) return false;
      const n2 = new URL(e2, i2);
      return i2.origin === n2.origin;
    };
    _PDFWorker._createCDNWrapper = (t2) => {
      const e2 = `await import("${t2}");`;
      return URL.createObjectURL(new Blob([e2], { type: "text/javascript" }));
    };
  })();
  var PDFWorker = _PDFWorker;
  var _La, _Oa, _Ra, _Na, _Ua, _Ha, _za, _WorkerTransport_instances, Ga_fn, ys_fn3;
  var WorkerTransport = class {
    constructor(t2, e2, i2, n2, s2, a2) {
      __privateAdd(this, _WorkerTransport_instances);
      __publicField(this, "downloadInfoCapability", Promise.withResolvers());
      __privateAdd(this, _La, null);
      __privateAdd(this, _Oa, /* @__PURE__ */ new Map());
      __privateAdd(this, _Ra, null);
      __privateAdd(this, _Na, /* @__PURE__ */ new Map());
      __privateAdd(this, _Ua, /* @__PURE__ */ new Map());
      __privateAdd(this, _Ha, /* @__PURE__ */ new Map());
      __privateAdd(this, _za, null);
      this.messageHandler = t2;
      this.loadingTask = e2;
      __privateSet(this, _Ra, i2);
      this.commonObjs = new PDFObjects();
      this.fontLoader = new FontLoader({ ownerDocument: n2.ownerDocument, styleElement: n2.styleElement });
      this.enableHWA = n2.enableHWA;
      this.loadingParams = n2.loadingParams;
      this._params = n2;
      this.canvasFactory = s2.canvasFactory;
      this.filterFactory = s2.filterFactory;
      this.binaryDataFactory = s2.binaryDataFactory;
      this.pagesMapper = a2;
      this.destroyed = false;
      this.destroyCapability = null;
      this.setupMessageHandler();
    }
    updatePage(t2) {
      const { _pageIndex: e2 } = t2;
      __privateGet(this, _Na).set(e2, t2);
      __privateGet(this, _Ua).set(e2, Promise.resolve(t2));
    }
    get annotationStorage() {
      return shadow(this, "annotationStorage", new AnnotationStorage());
    }
    getRenderingIntent(t2, e2 = g.ENABLE, i2 = null, n2 = false, s2 = false) {
      let a2 = o, m2 = Q;
      switch (t2) {
        case "any":
          a2 = r;
          break;
        case "display":
          break;
        case "print":
          a2 = l;
          break;
        default:
          warn(`getRenderingIntent - invalid intent: ${t2}`);
      }
      const f2 = a2 & l && i2 instanceof PrintAnnotationStorage ? i2 : this.annotationStorage;
      switch (e2) {
        case g.DISABLE:
          a2 += d;
          break;
        case g.ENABLE:
          break;
        case g.ENABLE_FORMS:
          a2 += h;
          break;
        case g.ENABLE_STORAGE:
          a2 += c;
          m2 = f2.serializable;
          break;
        default:
          warn(`getRenderingIntent - invalid annotationMode: ${e2}`);
      }
      n2 && (a2 += u);
      s2 && (a2 += p);
      const { ids: b2, hash: y2 } = f2.modifiedIds;
      return { renderingIntent: a2, cacheKey: [a2, m2.hash, y2].join("_"), annotationStorageSerializable: m2, modifiedIds: b2 };
    }
    destroy() {
      if (this.destroyCapability) return this.destroyCapability.promise;
      this.destroyed = true;
      this.destroyCapability = Promise.withResolvers();
      __privateGet(this, _za)?.reject(new Error("Worker was destroyed during onPassword callback"));
      const t2 = [];
      for (const e3 of __privateGet(this, _Na).values()) t2.push(e3._destroy());
      __privateGet(this, _Na).clear();
      __privateGet(this, _Ua).clear();
      __privateGet(this, _Ha).clear();
      Object.hasOwn(this, "annotationStorage") && this.annotationStorage.resetModified();
      const e2 = this.messageHandler.sendWithPromise("Terminate", null);
      t2.push(e2);
      Promise.all(t2).then(() => {
        this.commonObjs.clear();
        this.fontLoader.clear();
        __privateGet(this, _Oa).clear();
        this.filterFactory.destroy();
        TextLayer.cleanup();
        __privateGet(this, _Ra)?.cancelAllRequests(new AbortException("Worker was terminated."));
        this.messageHandler?.destroy();
        this.messageHandler = null;
        this.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
    }
    setupMessageHandler() {
      const { messageHandler: t2, loadingTask: e2 } = this;
      t2.on("GetReader", (t3, e3) => {
        assert(__privateGet(this, _Ra), "GetReader - no `BasePDFStream` instance available.");
        __privateSet(this, _La, __privateGet(this, _Ra).getFullReader());
        __privateGet(this, _La).onProgress = (t4) => __privateMethod(this, _WorkerTransport_instances, ys_fn3).call(this, t4);
        e3.onPull = () => {
          __privateGet(this, _La).read().then(function({ value: t4, done: i2 }) {
            if (i2) e3.close();
            else {
              assert(t4 instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
              e3.enqueue(new Uint8Array(t4), 1, [t4]);
            }
          }).catch((t4) => {
            e3.error(t4);
          });
        };
        e3.onCancel = (t4) => {
          __privateGet(this, _La).cancel(t4);
          e3.ready.catch((t5) => {
            if (!this.destroyed) throw t5;
          });
        };
      });
      t2.on("ReaderHeadersReady", async (t3) => {
        await __privateGet(this, _La).headersReady;
        const { isStreamingSupported: e3, isRangeSupported: i2, contentLength: n2 } = __privateGet(this, _La);
        e3 && i2 && (__privateGet(this, _La).onProgress = null);
        return { isStreamingSupported: e3, isRangeSupported: i2, contentLength: n2 };
      });
      t2.on("GetRangeReader", (t3, e3) => {
        assert(__privateGet(this, _Ra), "GetRangeReader - no `BasePDFStream` instance available.");
        const i2 = __privateGet(this, _Ra).getRangeReader(t3.begin, t3.end);
        if (i2) {
          e3.onPull = () => {
            i2.read().then(function({ value: t4, done: i3 }) {
              if (i3) e3.close();
              else {
                assert(t4 instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
                e3.enqueue(new Uint8Array(t4), 1, [t4]);
              }
            }).catch((t4) => {
              e3.error(t4);
            });
          };
          e3.onCancel = (t4) => {
            i2.cancel(t4);
            e3.ready.catch((t5) => {
              if (!this.destroyed) throw t5;
            });
          };
        } else e3.close();
      });
      t2.on("GetDoc", ({ pdfInfo: t3 }) => {
        this.pagesMapper.pagesNumber = t3.numPages;
        this._numPages = t3.numPages;
        this._htmlForXfa = t3.htmlForXfa;
        delete t3.htmlForXfa;
        e2._capability.resolve(new PDFDocumentProxy(t3, this));
      });
      t2.on("DocException", (t3) => {
        e2._capability.reject(wrapReason(t3));
      });
      t2.on("PasswordRequest", (t3) => {
        __privateSet(this, _za, Promise.withResolvers());
        try {
          if (!e2.onPassword) throw wrapReason(t3);
          const updatePassword = (t4) => {
            t4 instanceof Error ? __privateGet(this, _za).reject(t4) : __privateGet(this, _za).resolve({ password: t4 });
          };
          e2.onPassword(updatePassword, t3.code);
        } catch (t4) {
          __privateGet(this, _za).reject(t4);
        }
        return __privateGet(this, _za).promise;
      });
      t2.on("DataLoaded", (t3) => {
        __privateMethod(this, _WorkerTransport_instances, ys_fn3).call(this, { loaded: t3.length, total: t3.length });
        this.downloadInfoCapability.resolve(t3);
      });
      t2.on("StartRenderPage", (t3) => {
        if (this.destroyed) return;
        __privateGet(this, _Na).get(t3.pageIndex)._startRenderPage(t3.transparency, t3.cacheKey);
      });
      t2.on("commonobj", ([e3, i2, n2]) => {
        if (this.destroyed) return null;
        if (this.commonObjs.has(e3)) return null;
        switch (i2) {
          case "Font":
            if ("error" in n2) {
              const t3 = n2.error;
              warn(`Error during font loading: ${t3}`);
              this.commonObjs.resolve(e3, t3);
              break;
            }
            const s2 = new FontInfo(n2), a2 = this._params.pdfBug && globalThis.FontInspector?.enabled ? (t3, e4) => globalThis.FontInspector.fontAdded(t3, e4) : null, r2 = new FontFaceObject(s2, a2, n2.charProcOperatorList, n2.extra);
            this.fontLoader.bind(r2).catch(() => t2.sendWithPromise("FontFallback", { id: e3 })).finally(() => {
              r2.fontExtraProperties || r2.clearData();
              this.commonObjs.resolve(e3, r2);
            });
            break;
          case "CopyLocalImage":
            const { imageRef: o2 } = n2;
            assert(o2, "The imageRef must be defined.");
            for (const t3 of __privateGet(this, _Na).values()) for (const [, i3] of t3.objs) {
              if (i3?.ref !== o2) continue;
              if (!i3.dataLen) return null;
              const t4 = structuredClone(i3);
              this.commonObjs.resolve(e3, t4);
              return i3.dataLen;
            }
            break;
          case "FontPath":
            this.commonObjs.resolve(e3, new FontPathInfo(n2));
            break;
          case "Image":
            this.commonObjs.resolve(e3, n2);
            break;
          case "Pattern":
            const l2 = new PatternInfo(n2);
            this.commonObjs.resolve(e3, l2.getIR());
            break;
          default:
            throw new Error(`Got unknown common object type ${i2}`);
        }
        return null;
      });
      t2.on("obj", ([t3, e3, i2, n2]) => {
        if (this.destroyed) return;
        const s2 = __privateGet(this, _Na).get(e3);
        if (!s2.objs.has(t3)) if (0 !== s2._intentStates.size) switch (i2) {
          case "Image":
          case "Pattern":
            s2.objs.resolve(t3, n2);
            break;
          default:
            throw new Error(`Got unknown object type ${i2}`);
        }
        else n2?.bitmap?.close();
      });
      t2.on("DocProgress", (t3) => {
        this.destroyed || __privateMethod(this, _WorkerTransport_instances, ys_fn3).call(this, t3);
      });
      t2.on("FetchBinaryData", async (t3) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.binaryDataFactory) throw new Error("`BinaryDataFactory` not initialized, see the `useWorkerFetch` parameter.");
        return this.binaryDataFactory.fetch(t3);
      });
    }
    getData() {
      return this.messageHandler.sendWithPromise("GetData", null);
    }
    saveDocument() {
      this.annotationStorage.size <= 0 && warn("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
      const { map: t2, transfer: e2 } = this.annotationStorage.serializable;
      return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t2, filename: __privateGet(this, _La)?.filename ?? null }, e2).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    extractPages(t2) {
      const e2 = { pageInfos: t2 };
      let i2;
      const n2 = globalThis.ImageBitmap;
      if ("function" == typeof n2) {
        const e3 = Array.isArray(t2) ? t2 : [t2];
        for (const t3 of e3) t3?.image instanceof n2 && (i2 || (i2 = [])).push(t3.image);
      }
      if (this.annotationStorage.size > 0) {
        const t3 = this.annotationStorage.serializable;
        let { map: n3 } = t3;
        t3.transfer?.length && (i2 ? i2.push(...t3.transfer) : i2 = t3.transfer);
        const s2 = this.pagesMapper.getMapping();
        if (s2) {
          const t4 = /* @__PURE__ */ new Map();
          for (const [e3, i3] of n3) {
            if (void 0 !== i3?.pageIndex && i3.pageIndex >= 0 && i3.pageIndex < s2.length) {
              const n4 = s2[i3.pageIndex] - 1;
              if (n4 !== i3.pageIndex) {
                t4.set(e3, { ...i3, pageIndex: n4 });
                continue;
              }
            }
            t4.set(e3, i3);
          }
          n3 = t4;
        }
        e2.annotationStorage = n3;
      }
      return this.messageHandler.sendWithPromise("ExtractPages", e2, i2).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    getPage(t2) {
      if (!Number.isInteger(t2) || t2 <= 0 || t2 > this.pagesMapper.pagesNumber) return Promise.reject(new Error("Invalid page request."));
      const e2 = t2 - 1, i2 = this.pagesMapper.getPageId(t2) - 1, n2 = __privateGet(this, _Ua).get(e2);
      if (n2) return n2;
      const s2 = this.messageHandler.sendWithPromise("GetPage", { pageIndex: i2 }).then((t3) => {
        if (this.destroyed) throw new Error("Transport destroyed");
        t3.refStr && __privateGet(this, _Ha).set(t3.refStr, i2);
        const n3 = new PDFPageProxy(e2, t3, this, this.pagesMapper, this._params.pdfBug);
        __privateGet(this, _Na).set(e2, n3);
        return n3;
      });
      __privateGet(this, _Ua).set(e2, s2);
      return s2;
    }
    async getPageIndex(t2) {
      if (!isRefProxy(t2)) throw new Error("Invalid pageIndex request.");
      const e2 = await this.messageHandler.sendWithPromise("GetPageIndex", { num: t2.num, gen: t2.gen }), i2 = this.pagesMapper.getPageNumber(e2 + 1);
      if (0 === i2) throw new Error("GetPageIndex: page has been removed.");
      return i2 - 1;
    }
    getAnnotations(t2, e2) {
      return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: this.pagesMapper.getPageId(t2 + 1) - 1, intent: e2 });
    }
    getFieldObjects() {
      return __privateMethod(this, _WorkerTransport_instances, Ga_fn).call(this, "GetFieldObjects");
    }
    hasJSActions() {
      return __privateMethod(this, _WorkerTransport_instances, Ga_fn).call(this, "HasJSActions");
    }
    getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
    getDestinations() {
      return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
    getDestination(t2) {
      return "string" != typeof t2 ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: t2 });
    }
    getPageLabels() {
      return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
    getPageLayout() {
      return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
    getPageMode() {
      return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
    getViewerPreferences() {
      return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
    getOpenAction() {
      return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
    getAttachments() {
      return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
    getAttachmentContent(t2) {
      return this.messageHandler.sendWithPromise("GetAttachmentContent", t2);
    }
    getAnnotationsByType(t2, e2) {
      return this.messageHandler.sendWithPromise("GetAnnotationsByType", { types: t2, pageIndexesToSkip: e2 });
    }
    getDocJSActions() {
      return __privateMethod(this, _WorkerTransport_instances, Ga_fn).call(this, "GetDocJSActions");
    }
    getPageJSActions(t2) {
      return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: this.pagesMapper.getPageId(t2 + 1) - 1 });
    }
    getStructTree(t2) {
      return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: this.pagesMapper.getPageId(t2 + 1) - 1 });
    }
    getOutline() {
      return this.messageHandler.sendWithPromise("GetOutline", null);
    }
    getOptionalContentConfig(t2) {
      return __privateMethod(this, _WorkerTransport_instances, Ga_fn).call(this, "GetOptionalContentConfig").then((e2) => new OptionalContentConfig(e2, t2));
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
      const t2 = "GetMetadata";
      return __privateGet(this, _Oa).getOrInsertComputed(t2, () => this.messageHandler.sendWithPromise(t2, null).then((t3) => ({ info: t3[0], metadata: t3[1] ? new Metadata(t3[1]) : null, contentDispositionFilename: __privateGet(this, _La)?.filename ?? null, contentLength: __privateGet(this, _La)?.contentLength ?? null, hasStructTree: t3[2] })));
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    getRawData(t2) {
      return this.messageHandler.sendWithPromise("GetRawData", t2);
    }
    async startCleanup(t2 = false) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise("Cleanup", null);
        for (const t3 of __privateGet(this, _Na).values()) {
          if (!t3.cleanup()) throw new Error(`startCleanup: Page ${t3.pageNumber} is currently rendering.`);
        }
        this.commonObjs.clear();
        t2 || this.fontLoader.clear();
        __privateGet(this, _Oa).clear();
        this.filterFactory.destroy(true);
        TextLayer.cleanup();
      }
    }
    cachedPageNumber(t2) {
      if (!isRefProxy(t2)) return null;
      const e2 = 0 === t2.gen ? `${t2.num}R` : `${t2.num}R${t2.gen}`, i2 = __privateGet(this, _Ha).get(e2);
      if (i2 >= 0) {
        const t3 = this.pagesMapper.getPageNumber(i2 + 1);
        if (0 !== t3) return t3;
      }
      return null;
    }
  };
  _La = new WeakMap();
  _Oa = new WeakMap();
  _Ra = new WeakMap();
  _Na = new WeakMap();
  _Ua = new WeakMap();
  _Ha = new WeakMap();
  _za = new WeakMap();
  _WorkerTransport_instances = new WeakSet();
  Ga_fn = function(t2, e2 = null) {
    return __privateGet(this, _Oa).getOrInsertComputed(t2, () => this.messageHandler.sendWithPromise(t2, e2));
  };
  ys_fn3 = function({ loaded: t2, total: e2 }) {
    this.loadingTask.onProgress?.({ loaded: t2, total: e2, percent: e2 ? MathClamp(Math.round(t2 / e2 * 100), 0, 100) : NaN });
  };
  var RenderTask = class {
    constructor(t2) {
      __publicField(this, "_internalRenderTask", null);
      __publicField(this, "onContinue", null);
      __publicField(this, "onError", null);
      this._internalRenderTask = t2;
    }
    get promise() {
      return this._internalRenderTask.capability.promise;
    }
    cancel(t2 = 0) {
      this._internalRenderTask.cancel(null, t2);
    }
    get separateAnnots() {
      const { separateAnnots: t2 } = this._internalRenderTask.operatorList;
      if (!t2) return false;
      const { annotationCanvasMap: e2 } = this._internalRenderTask;
      return t2.form || t2.canvas && e2?.size > 0;
    }
    get imageCoordinates() {
      return this._internalRenderTask.imageCoordinates || null;
    }
  };
  var _Wa, _Va;
  var _InternalRenderTask = class _InternalRenderTask {
    constructor({ callback: t2, params: e2, objs: i2, commonObjs: n2, annotationCanvasMap: s2, operatorList: a2, pageIndex: r2, canvasFactory: o2, filterFactory: l2, useRequestAnimationFrame: h2 = false, pdfBug: c2 = false, pageColors: d2 = null, enableHWA: u2 = false, operationsFilter: p2 = null }) {
      __privateAdd(this, _Wa, null);
      this.callback = t2;
      this.params = e2;
      this.objs = i2;
      this.commonObjs = n2;
      this.annotationCanvasMap = s2;
      this.operatorListIdx = null;
      this.operatorList = a2;
      this._pageIndex = r2;
      this.canvasFactory = o2;
      this.filterFactory = l2;
      this._pdfBug = c2;
      this.pageColors = d2;
      this.running = false;
      this.graphicsReadyCallback = null;
      this.graphicsReady = false;
      this._useRequestAnimationFrame = true === h2 && "undefined" != typeof window;
      this.cancelled = false;
      this.capability = Promise.withResolvers();
      this.task = new RenderTask(this);
      this._cancelBound = this.cancel.bind(this);
      this._continueBound = this._continue.bind(this);
      this._scheduleNextBound = this._scheduleNext.bind(this);
      this._nextBound = this._next.bind(this);
      this._canvas = e2.canvas;
      this._canvasContext = e2.canvas ? null : e2.canvasContext;
      this._enableHWA = u2;
      this._dependencyTracker = e2.dependencyTracker;
      this._imagesTracker = e2.imagesTracker;
      this._operationsFilter = p2;
    }
    get completed() {
      return this.capability.promise.catch(function() {
      });
    }
    initializeGraphics({ transparency: t2 = false, optionalContentConfig: e2 }) {
      if (this.cancelled) return;
      if (this._canvas) {
        if (__privateGet(_InternalRenderTask, _Va).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
        __privateGet(_InternalRenderTask, _Va).add(this._canvas);
      }
      if (this._pdfBug && globalThis.StepperManager?.enabled) {
        this.stepper = globalThis.StepperManager.create(this._pageIndex);
        this.stepper.init(this.operatorList);
        this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
      }
      const { viewport: i2, transform: n2, background: s2, dependencyTracker: a2, imagesTracker: r2 } = this.params, o2 = this._canvasContext || this._canvas.getContext("2d", { alpha: false, willReadFrequently: !this._enableHWA });
      this.gfx = new CanvasGraphics(o2, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e2 }, this.annotationCanvasMap, this.pageColors, a2, r2);
      this.gfx.beginDrawing({ transform: n2, viewport: i2, transparency: t2, background: s2 });
      this.operatorListIdx = 0;
      this.graphicsReady = true;
      this.graphicsReadyCallback?.();
    }
    cancel(t2 = null, e2 = 0) {
      this.running = false;
      this.cancelled = true;
      this.gfx?.endDrawing();
      if (__privateGet(this, _Wa)) {
        window.cancelAnimationFrame(__privateGet(this, _Wa));
        __privateSet(this, _Wa, null);
      }
      __privateGet(_InternalRenderTask, _Va).delete(this._canvas);
      t2 || (t2 = new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, e2));
      this.callback(t2);
      this.task.onError?.(t2);
    }
    operatorListChanged() {
      if (this.graphicsReady) {
        this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length);
        this.stepper?.updateOperatorList(this.operatorList);
        this.running || this._continue();
      } else this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
    }
    _continue() {
      this.running = true;
      this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
      this._useRequestAnimationFrame ? __privateSet(this, _Wa, window.requestAnimationFrame(() => {
        __privateSet(this, _Wa, null);
        this._nextBound().catch(this._cancelBound);
      })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      if (!this.cancelled) {
        this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter);
        if (this.operatorListIdx === this.operatorList.argsArray.length) {
          this.running = false;
          if (this.operatorList.lastChunk) {
            this.gfx.endDrawing();
            __privateGet(_InternalRenderTask, _Va).delete(this._canvas);
            this.callback();
          }
        }
      }
    }
  };
  _Wa = new WeakMap();
  _Va = new WeakMap();
  __privateAdd(_InternalRenderTask, _Va, /* @__PURE__ */ new WeakSet());
  var InternalRenderTask = _InternalRenderTask;
  var Lt = "6.1.200";
  var Ot = "6353acefe";
  var _ja, _$a, _Ka, _Xa, _qa, _Ya, _r4, _Qa, _Ja, _y2, _Za, _ColorPicker_instances, ir_fn, nr_fn, er_fn, tr_fn, p_fn2, sr_get;
  var _ColorPicker = class _ColorPicker {
    constructor({ editor: t2 = null, uiManager: e2 = null }) {
      __privateAdd(this, _ColorPicker_instances);
      __privateAdd(this, _ja, null);
      __privateAdd(this, _$a, null);
      __privateAdd(this, _Ka);
      __privateAdd(this, _Xa, null);
      __privateAdd(this, _qa, false);
      __privateAdd(this, _Ya, false);
      __privateAdd(this, _r4, null);
      __privateAdd(this, _Qa);
      __privateAdd(this, _Ja, null);
      __privateAdd(this, _y2, null);
      if (t2) {
        __privateSet(this, _Ya, false);
        __privateSet(this, _r4, t2);
      } else __privateSet(this, _Ya, true);
      __privateSet(this, _y2, t2?._uiManager || e2);
      __privateSet(this, _Qa, __privateGet(this, _y2)._eventBus);
      __privateSet(this, _Ka, t2?.color?.toUpperCase() || __privateGet(this, _y2)?.highlightColors.values().next().value || "#FFFF98");
      __privateGet(_ColorPicker, _Za) || __privateSet(_ColorPicker, _Za, Object.freeze({ blue: "pdfjs-editor-colorpicker-blue", green: "pdfjs-editor-colorpicker-green", pink: "pdfjs-editor-colorpicker-pink", red: "pdfjs-editor-colorpicker-red", yellow: "pdfjs-editor-colorpicker-yellow" }));
    }
    static get _keyboardManager() {
      return shadow(this, "_keyboardManager", new KeyboardManager([[["Escape"], _ColorPicker.prototype._hideDropdownFromKeyboard], [["Space"], _ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight"], _ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft"], _ColorPicker.prototype._moveToPrevious], [["Home"], _ColorPicker.prototype._moveToBeginning], [["End"], _ColorPicker.prototype._moveToEnd]]));
    }
    renderButton() {
      const t2 = __privateSet(this, _ja, document.createElement("button"));
      t2.className = "colorPicker";
      t2.tabIndex = "0";
      t2.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
      t2.ariaHasPopup = "true";
      __privateGet(this, _r4) && (t2.ariaControls = `${__privateGet(this, _r4).id}_colorpicker_dropdown`);
      const e2 = __privateGet(this, _y2)._signal;
      t2.addEventListener("click", __privateMethod(this, _ColorPicker_instances, tr_fn).bind(this), { signal: e2 });
      t2.addEventListener("keydown", __privateMethod(this, _ColorPicker_instances, er_fn).bind(this), { signal: e2 });
      const i2 = __privateSet(this, _$a, document.createElement("span"));
      i2.className = "swatch";
      i2.ariaHidden = "true";
      i2.style.backgroundColor = __privateGet(this, _Ka);
      t2.append(i2);
      return t2;
    }
    renderMainDropdown() {
      const t2 = __privateSet(this, _Xa, __privateMethod(this, _ColorPicker_instances, ir_fn).call(this));
      t2.ariaOrientation = "horizontal";
      t2.ariaLabelledBy = "highlightColorPickerLabel";
      return t2;
    }
    _colorSelectFromKeyboard(t2) {
      if (t2.target === __privateGet(this, _ja)) {
        __privateMethod(this, _ColorPicker_instances, tr_fn).call(this, t2);
        return;
      }
      const e2 = t2.target.getAttribute("data-color");
      e2 && __privateMethod(this, _ColorPicker_instances, nr_fn).call(this, e2, t2);
    }
    _moveToNext(t2) {
      __privateGet(this, _ColorPicker_instances, sr_get) ? t2.target !== __privateGet(this, _ja) ? t2.target.nextSibling?.focus() : __privateGet(this, _Xa).firstElementChild?.focus() : __privateMethod(this, _ColorPicker_instances, tr_fn).call(this, t2);
    }
    _moveToPrevious(t2) {
      if (t2.target !== __privateGet(this, _Xa)?.firstElementChild && t2.target !== __privateGet(this, _ja)) {
        __privateGet(this, _ColorPicker_instances, sr_get) || __privateMethod(this, _ColorPicker_instances, tr_fn).call(this, t2);
        t2.target.previousSibling?.focus();
      } else __privateGet(this, _ColorPicker_instances, sr_get) && this._hideDropdownFromKeyboard();
    }
    _moveToBeginning(t2) {
      __privateGet(this, _ColorPicker_instances, sr_get) ? __privateGet(this, _Xa).firstElementChild?.focus() : __privateMethod(this, _ColorPicker_instances, tr_fn).call(this, t2);
    }
    _moveToEnd(t2) {
      __privateGet(this, _ColorPicker_instances, sr_get) ? __privateGet(this, _Xa).lastElementChild?.focus() : __privateMethod(this, _ColorPicker_instances, tr_fn).call(this, t2);
    }
    hideDropdown() {
      __privateGet(this, _Xa)?.classList.add("hidden");
      __privateGet(this, _ja).ariaExpanded = "false";
      __privateGet(this, _Ja)?.abort();
      __privateSet(this, _Ja, null);
    }
    _hideDropdownFromKeyboard() {
      if (!__privateGet(this, _Ya)) if (__privateGet(this, _ColorPicker_instances, sr_get)) {
        this.hideDropdown();
        __privateGet(this, _ja).focus({ preventScroll: true, focusVisible: __privateGet(this, _qa) });
      } else __privateGet(this, _r4)?.unselect();
    }
    updateColor(t2) {
      __privateGet(this, _$a) && (__privateGet(this, _$a).style.backgroundColor = t2);
      if (!__privateGet(this, _Xa)) return;
      const e2 = __privateGet(this, _y2).highlightColors.values();
      for (const i2 of __privateGet(this, _Xa).children) i2.ariaSelected = e2.next().value === t2.toUpperCase();
    }
    destroy() {
      __privateGet(this, _ja)?.remove();
      __privateSet(this, _ja, null);
      __privateSet(this, _$a, null);
      __privateGet(this, _Xa)?.remove();
      __privateSet(this, _Xa, null);
    }
  };
  _ja = new WeakMap();
  _$a = new WeakMap();
  _Ka = new WeakMap();
  _Xa = new WeakMap();
  _qa = new WeakMap();
  _Ya = new WeakMap();
  _r4 = new WeakMap();
  _Qa = new WeakMap();
  _Ja = new WeakMap();
  _y2 = new WeakMap();
  _Za = new WeakMap();
  _ColorPicker_instances = new WeakSet();
  ir_fn = function() {
    const t2 = document.createElement("div"), e2 = __privateGet(this, _y2)._signal;
    t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
    t2.className = "dropdown";
    t2.role = "listbox";
    t2.ariaMultiSelectable = "false";
    t2.ariaOrientation = "vertical";
    t2.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
    __privateGet(this, _r4) && (t2.id = `${__privateGet(this, _r4).id}_colorpicker_dropdown`);
    for (const [i2, n2] of __privateGet(this, _y2).highlightColors) {
      const s2 = document.createElement("button");
      s2.tabIndex = "0";
      s2.role = "option";
      s2.setAttribute("data-color", n2);
      s2.title = i2;
      s2.setAttribute("data-l10n-id", __privateGet(_ColorPicker, _Za)[i2]);
      const a2 = document.createElement("span");
      s2.append(a2);
      a2.className = "swatch";
      a2.style.backgroundColor = n2;
      s2.ariaSelected = n2 === __privateGet(this, _Ka);
      s2.addEventListener("click", __privateMethod(this, _ColorPicker_instances, nr_fn).bind(this, n2), { signal: e2 });
      t2.append(s2);
    }
    t2.addEventListener("keydown", __privateMethod(this, _ColorPicker_instances, er_fn).bind(this), { signal: e2 });
    return t2;
  };
  nr_fn = function(t2, e2) {
    e2.stopPropagation();
    __privateGet(this, _Qa).dispatch("switchannotationeditorparams", { source: this, type: y.HIGHLIGHT_COLOR, value: t2 });
    this.updateColor(t2);
  };
  er_fn = function(t2) {
    _ColorPicker._keyboardManager.exec(this, t2);
  };
  tr_fn = function(t2) {
    if (__privateGet(this, _ColorPicker_instances, sr_get)) {
      this.hideDropdown();
      return;
    }
    __privateSet(this, _qa, 0 === t2.detail);
    if (!__privateGet(this, _Ja)) {
      __privateSet(this, _Ja, new AbortController());
      window.addEventListener("pointerdown", __privateMethod(this, _ColorPicker_instances, p_fn2).bind(this), { signal: __privateGet(this, _y2).combinedSignal(__privateGet(this, _Ja)) });
    }
    __privateGet(this, _ja).ariaExpanded = "true";
    if (__privateGet(this, _Xa)) {
      __privateGet(this, _Xa).classList.remove("hidden");
      return;
    }
    const e2 = __privateSet(this, _Xa, __privateMethod(this, _ColorPicker_instances, ir_fn).call(this));
    __privateGet(this, _ja).append(e2);
  };
  p_fn2 = function(t2) {
    __privateGet(this, _Xa)?.contains(t2.target) || this.hideDropdown();
  };
  sr_get = function() {
    return __privateGet(this, _Xa) && !__privateGet(this, _Xa).classList.contains("hidden");
  };
  __privateAdd(_ColorPicker, _Za, null);
  var ColorPicker = _ColorPicker;
  var _ar, _rr, _r5, _y3, _Za2;
  var _BasicColorPicker = class _BasicColorPicker {
    constructor(t2) {
      __privateAdd(this, _ar, null);
      __privateAdd(this, _rr, false);
      __privateAdd(this, _r5, null);
      __privateAdd(this, _y3, null);
      __privateSet(this, _r5, t2);
      __privateSet(this, _y3, t2._uiManager);
      __privateGet(_BasicColorPicker, _Za2) || __privateSet(_BasicColorPicker, _Za2, Object.freeze({ freetext: "pdfjs-editor-color-picker-free-text-input", ink: "pdfjs-editor-color-picker-ink-input" }));
    }
    renderButton() {
      if (__privateGet(this, _ar)) return __privateGet(this, _ar);
      const { editorType: t2, colorType: e2, colorAndOpacityType: i2, opacityType: n2, color: s2, opacity: a2 } = __privateGet(this, _r5), r2 = __privateSet(this, _rr, FeatureTest.isAlphaColorInputSupported && void 0 !== n2), o2 = __privateSet(this, _ar, document.createElement("input"));
      o2.type = "color";
      if (r2) {
        o2.setAttribute("alpha", "");
        const t3 = Util.hexNums[Math.round(255 * (a2 ?? 1))];
        o2.value = (s2 || "#000000") + t3;
      } else o2.value = s2 || "#000000";
      o2.className = "basicColorPicker";
      o2.tabIndex = 0;
      o2.setAttribute("data-l10n-id", __privateGet(_BasicColorPicker, _Za2)[t2]);
      o2.addEventListener("input", () => {
        if (r2) {
          const t3 = getRGBA(o2.value);
          if (!t3) return;
          const [s3, a3, r3, l2] = t3, h2 = Util.makeHexColor(s3, a3, r3);
          if (void 0 !== i2) __privateGet(this, _y3).updateParams(i2, { color: h2, opacity: l2 });
          else {
            __privateGet(this, _y3).updateParams(e2, h2);
            __privateGet(this, _y3).updateParams(n2, l2);
          }
        } else __privateGet(this, _y3).updateParams(e2, o2.value);
      }, { signal: __privateGet(this, _y3)._signal });
      return o2;
    }
    update(t2) {
      if (__privateGet(this, _ar)) if (__privateGet(this, _rr)) {
        const e2 = Util.hexNums[Math.round(255 * __privateGet(this, _r5).opacity)];
        __privateGet(this, _ar).value = t2 + e2;
      } else __privateGet(this, _ar).value = t2;
    }
    updateOpacity(t2) {
      if (!__privateGet(this, _ar) || !__privateGet(this, _rr)) return;
      const e2 = Util.hexNums[Math.round(255 * t2)];
      __privateGet(this, _ar).value = __privateGet(this, _r5).color + e2;
    }
    destroy() {
      __privateGet(this, _ar)?.remove();
      __privateSet(this, _ar, null);
    }
    hideDropdown() {
    }
  };
  _ar = new WeakMap();
  _rr = new WeakMap();
  _r5 = new WeakMap();
  _y3 = new WeakMap();
  _Za2 = new WeakMap();
  __privateAdd(_BasicColorPicker, _Za2, null);
  var BasicColorPicker = _BasicColorPicker;
  function makeColorComp(t2) {
    return Math.floor(255 * MathClamp(t2, 0, 1)).toString(16).padStart(2, "0");
  }
  function scaleAndClamp(t2) {
    return 255 * MathClamp(t2, 0, 1);
  }
  var ColorConverters = class {
    static CMYK_G([t2, e2, i2, n2]) {
      return ["G", 1 - Math.min(1, 0.3 * t2 + 0.59 * i2 + 0.11 * e2 + n2)];
    }
    static G_CMYK([t2]) {
      return ["CMYK", 0, 0, 0, 1 - t2];
    }
    static G_RGB([t2]) {
      return ["RGB", t2, t2, t2];
    }
    static G_rgb([t2]) {
      return [t2 = scaleAndClamp(t2), t2, t2];
    }
    static G_HTML([t2]) {
      const e2 = makeColorComp(t2);
      return `#${e2}${e2}${e2}`;
    }
    static RGB_G([t2, e2, i2]) {
      return ["G", 0.3 * t2 + 0.59 * e2 + 0.11 * i2];
    }
    static RGB_rgb(t2) {
      return t2.map(scaleAndClamp);
    }
    static RGB_HTML(t2) {
      return `#${t2.map(makeColorComp).join("")}`;
    }
    static T_HTML() {
      return "#00000000";
    }
    static T_rgb() {
      return [null];
    }
    static CMYK_RGB([t2, e2, i2, n2]) {
      return ["RGB", 1 - Math.min(1, t2 + n2), 1 - Math.min(1, i2 + n2), 1 - Math.min(1, e2 + n2)];
    }
    static CMYK_rgb([t2, e2, i2, n2]) {
      return [scaleAndClamp(1 - Math.min(1, t2 + n2)), scaleAndClamp(1 - Math.min(1, i2 + n2)), scaleAndClamp(1 - Math.min(1, e2 + n2))];
    }
    static CMYK_HTML(t2) {
      const e2 = this.CMYK_RGB(t2).slice(1);
      return this.RGB_HTML(e2);
    }
    static RGB_CMYK([t2, e2, i2]) {
      const n2 = 1 - t2, s2 = 1 - e2, a2 = 1 - i2;
      return ["CMYK", n2, s2, a2, Math.min(n2, s2, a2)];
    }
  };
  var BaseSVGFactory = class {
    create(t2, e2, i2 = false) {
      if (t2 <= 0 || e2 <= 0) throw new Error("Invalid SVG dimensions");
      const n2 = this._createSVG("svg:svg");
      n2.setAttribute("version", "1.1");
      if (!i2) {
        n2.setAttribute("width", `${t2}px`);
        n2.setAttribute("height", `${e2}px`);
      }
      n2.setAttribute("preserveAspectRatio", "none");
      n2.setAttribute("viewBox", `0 0 ${t2} ${e2}`);
      return n2;
    }
    createElement(t2) {
      if ("string" != typeof t2) throw new Error("Invalid SVG element type");
      return this._createSVG(t2);
    }
    _createSVG(t2) {
      unreachable("Abstract method `_createSVG` called.");
    }
  };
  var DOMSVGFactory = class extends BaseSVGFactory {
    _createSVG(t2) {
      return document.createElementNS(a, t2);
    }
  };
  var Rt = /* @__PURE__ */ new WeakSet();
  var Nt = 60 * (/* @__PURE__ */ new Date()).getTimezoneOffset() * 1e3;
  var AnnotationElementFactory = class {
    static create(t2) {
      switch (t2.data.annotationType) {
        case k.LINK:
          return new LinkAnnotationElement(t2);
        case k.TEXT:
          return new TextAnnotationElement(t2);
        case k.WIDGET:
          switch (t2.data.fieldType) {
            case "Tx":
              return new TextWidgetAnnotationElement(t2);
            case "Btn":
              return t2.data.radioButton ? new RadioButtonWidgetAnnotationElement(t2) : t2.data.checkBox ? new CheckboxWidgetAnnotationElement(t2) : new PushButtonWidgetAnnotationElement(t2);
            case "Ch":
              return new ChoiceWidgetAnnotationElement(t2);
            case "Sig":
              return new SignatureWidgetAnnotationElement(t2);
          }
          return new WidgetAnnotationElement(t2);
        case k.POPUP:
          return new PopupAnnotationElement(t2);
        case k.FREETEXT:
          return new FreeTextAnnotationElement(t2);
        case k.LINE:
          return new LineAnnotationElement(t2);
        case k.SQUARE:
          return new SquareAnnotationElement(t2);
        case k.CIRCLE:
          return new CircleAnnotationElement(t2);
        case k.POLYLINE:
          return new PolylineAnnotationElement(t2);
        case k.CARET:
          return new CaretAnnotationElement(t2);
        case k.INK:
          return new InkAnnotationElement(t2);
        case k.POLYGON:
          return new PolygonAnnotationElement(t2);
        case k.HIGHLIGHT:
          return new HighlightAnnotationElement(t2);
        case k.UNDERLINE:
          return new UnderlineAnnotationElement(t2);
        case k.SQUIGGLY:
          return new SquigglyAnnotationElement(t2);
        case k.STRIKEOUT:
          return new StrikeOutAnnotationElement(t2);
        case k.STAMP:
          return new StampAnnotationElement(t2);
        case k.FILEATTACHMENT:
          return new FileAttachmentAnnotationElement(t2);
        case k.RICHMEDIA:
        case k.SCREEN:
          return new MediaAnnotationElement(t2);
        default:
          return new AnnotationElement(t2);
      }
    }
  };
  var _or, _lr, _hr, _AnnotationElement_instances, cr_fn;
  var _AnnotationElement = class _AnnotationElement {
    constructor(t2, { isRenderable: e2 = false, ignoreBorder: i2 = false, createQuadrilaterals: n2 = false } = {}) {
      __privateAdd(this, _AnnotationElement_instances);
      __privateAdd(this, _or, null);
      __privateAdd(this, _lr, false);
      __privateAdd(this, _hr, null);
      this.isRenderable = e2;
      this.data = t2.data;
      this.layer = t2.layer;
      this.linkService = t2.linkService;
      this.downloadManager = t2.downloadManager;
      this.imageResourcesPath = t2.imageResourcesPath;
      this.renderForms = t2.renderForms;
      this.svgFactory = t2.svgFactory;
      this.annotationStorage = t2.annotationStorage;
      this.enableComment = t2.enableComment;
      this.enableScripting = t2.enableScripting;
      this.hasJSActions = t2.hasJSActions;
      this._fieldObjects = t2.fieldObjects;
      this.parent = t2.parent;
      this.hasOwnCommentButton = false;
      e2 && (this.contentElement = this.container = this._createContainer(i2));
      n2 && this._createQuadrilaterals();
    }
    static _hasPopupData({ contentsObj: t2, richText: e2 }) {
      return !(!t2?.str && !e2?.str);
    }
    get _isEditable() {
      return this.data.isEditable;
    }
    get hasPopupData() {
      return _AnnotationElement._hasPopupData(this.data) || this.enableComment && !!this.commentText;
    }
    get commentData() {
      const { data: t2 } = this, e2 = this.annotationStorage?.getEditor(t2.id);
      return e2 ? e2.getData() : t2;
    }
    get hasCommentButton() {
      return this.enableComment && this.hasPopupElement;
    }
    get commentButtonPosition() {
      const t2 = this.annotationStorage?.getEditor(this.data.id);
      if (t2) return t2.commentButtonPositionInPage;
      const { quadPoints: e2, inkLists: i2, rect: n2 } = this.data;
      let s2 = -1 / 0, a2 = -1 / 0;
      if (e2?.length >= 8) {
        for (let t3 = 0; t3 < e2.length; t3 += 8) if (e2[t3 + 1] > a2) {
          a2 = e2[t3 + 1];
          s2 = e2[t3 + 2];
        } else e2[t3 + 1] === a2 && (s2 = Math.max(s2, e2[t3 + 2]));
        return [s2, a2];
      }
      if (i2?.length >= 1) {
        for (const t3 of i2) for (let e3 = 0, i3 = t3.length; e3 < i3; e3 += 2) if (t3[e3 + 1] > a2) {
          a2 = t3[e3 + 1];
          s2 = t3[e3];
        } else t3[e3 + 1] === a2 && (s2 = Math.max(s2, t3[e3]));
        if (s2 !== 1 / 0) return [s2, a2];
      }
      return n2 ? [n2[2], n2[3]] : null;
    }
    _normalizePoint(t2) {
      const { page: { view: e2 }, viewport: { rawDims: { pageWidth: i2, pageHeight: n2, pageX: s2, pageY: a2 } } } = this.parent;
      t2[1] = e2[3] - t2[1] + e2[1];
      t2[0] = 100 * (t2[0] - s2) / i2;
      t2[1] = 100 * (t2[1] - a2) / n2;
      return t2;
    }
    get commentText() {
      const { data: t2 } = this;
      return this.annotationStorage.getRawValue(`${f}${t2.id}`)?.popup?.contents || t2.contentsObj?.str || "";
    }
    set commentText(t2) {
      const { data: e2 } = this, i2 = { deleted: !t2, contents: t2 || "" };
      this.annotationStorage.updateEditor(e2.id, { popup: i2 }) || this.annotationStorage.setValue(`${f}${e2.id}`, { id: e2.id, annotationType: e2.annotationType, page: this.parent.page, popup: i2, popupRef: e2.popupRef, modificationDate: /* @__PURE__ */ new Date() });
      t2 || this.removePopup();
    }
    removePopup() {
      (__privateGet(this, _hr)?.popup || this.popup)?.remove();
      __privateSet(this, _hr, this.popup = null);
    }
    updateEdited(t2) {
      if (!this.container) return;
      t2.rect && (__privateGet(this, _or) || __privateSet(this, _or, { rect: this.data.rect.slice(0) }));
      const { rect: e2, popup: i2 } = t2;
      e2 && __privateMethod(this, _AnnotationElement_instances, cr_fn).call(this, e2);
      let n2 = __privateGet(this, _hr)?.popup || this.popup;
      if (!n2 && i2?.text) {
        this._createPopup(i2);
        n2 = __privateGet(this, _hr).popup;
      }
      if (n2) {
        n2.updateEdited(t2);
        if (i2?.deleted) {
          n2.remove();
          __privateSet(this, _hr, null);
          this.popup = null;
        }
      }
    }
    resetEdited() {
      if (__privateGet(this, _or)) {
        __privateMethod(this, _AnnotationElement_instances, cr_fn).call(this, __privateGet(this, _or).rect);
        __privateGet(this, _hr)?.popup.resetEdited();
        __privateSet(this, _or, null);
      }
    }
    _createContainer(t2) {
      const { data: e2, parent: { page: i2, viewport: n2 } } = this, s2 = document.createElement("section");
      s2.setAttribute("data-annotation-id", e2.id);
      this instanceof WidgetAnnotationElement || this instanceof LinkAnnotationElement || this instanceof MediaAnnotationElement || (s2.tabIndex = 0);
      const { style: a2 } = s2;
      a2.zIndex = this.parent.zIndex;
      this.parent.zIndex += 2;
      e2.alternativeText && (s2.title = e2.alternativeText);
      e2.noRotate && s2.classList.add("norotate");
      if (!e2.rect || this instanceof PopupAnnotationElement) {
        const { rotation: t3 } = e2;
        e2.hasOwnCanvas || 0 === t3 || this.setRotation(t3, s2);
        return s2;
      }
      const { width: r2, height: o2 } = this;
      if (!t2 && e2.borderStyle.width > 0) {
        a2.borderWidth = `${e2.borderStyle.width}px`;
        const t3 = e2.borderStyle.horizontalCornerRadius, i3 = e2.borderStyle.verticalCornerRadius;
        if (t3 > 0 || i3 > 0) {
          const e3 = `calc(${t3}px * var(--total-scale-factor)) / calc(${i3}px * var(--total-scale-factor))`;
          a2.borderRadius = e3;
        }
        switch (e2.borderStyle.style) {
          case _:
            a2.borderStyle = "solid";
            break;
          case M:
            a2.borderStyle = "dashed";
            break;
          case D:
            warn("Unimplemented border style: beveled");
            break;
          case P:
            warn("Unimplemented border style: inset");
            break;
          case I:
            a2.borderBottomStyle = "solid";
        }
        const n3 = e2.borderColor || null;
        if (n3) {
          __privateSet(this, _lr, true);
          a2.borderColor = Util.makeHexColor(...n3);
        } else a2.borderWidth = 0;
      }
      const l2 = Util.normalizeRect([e2.rect[0], i2.view[3] - e2.rect[1] + i2.view[1], e2.rect[2], i2.view[3] - e2.rect[3] + i2.view[1]]), { pageWidth: h2, pageHeight: c2, pageX: d2, pageY: u2 } = n2.rawDims;
      a2.left = 100 * (l2[0] - d2) / h2 + "%";
      a2.top = 100 * (l2[1] - u2) / c2 + "%";
      const { rotation: p2 } = e2;
      if (e2.hasOwnCanvas || 0 === p2) {
        a2.width = 100 * r2 / h2 + "%";
        a2.height = 100 * o2 / c2 + "%";
      } else this.setRotation(p2, s2);
      return s2;
    }
    setRotation(t2, e2 = this.container) {
      if (!this.data.rect) return;
      const { pageWidth: i2, pageHeight: n2 } = this.parent.viewport.rawDims;
      let { width: s2, height: a2 } = this;
      t2 % 180 != 0 && ([s2, a2] = [a2, s2]);
      e2.style.width = 100 * s2 / i2 + "%";
      e2.style.height = 100 * a2 / n2 + "%";
      e2.setAttribute("data-main-rotation", (360 - t2) % 360);
    }
    get _commonActions() {
      const setColor = (t2, e2, i2) => {
        const n2 = i2.detail[t2], s2 = n2[0], a2 = n2.slice(1);
        i2.target.style[e2] = ColorConverters[`${s2}_HTML`](a2);
        this.annotationStorage.setValue(this.data.id, { [e2]: ColorConverters[`${s2}_rgb`](a2) });
      };
      return shadow(this, "_commonActions", { display: (t2) => {
        const { display: e2 } = t2.detail, i2 = e2 % 2 == 1;
        this.container.style.visibility = i2 ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, { noView: i2, noPrint: 1 === e2 || 2 === e2 });
      }, print: (t2) => {
        this.annotationStorage.setValue(this.data.id, { noPrint: !t2.detail.print });
      }, hidden: (t2) => {
        const { hidden: e2 } = t2.detail;
        this.container.style.visibility = e2 ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, { noPrint: e2, noView: e2 });
      }, focus: (t2) => {
        setTimeout(() => t2.target.focus({ preventScroll: false }), 0);
      }, userName: (t2) => {
        t2.target.title = t2.detail.userName;
      }, readonly: (t2) => {
        t2.target.disabled = t2.detail.readonly;
      }, required: (t2) => {
        this._setRequired(t2.target, t2.detail.required);
      }, bgColor: (t2) => {
        setColor("bgColor", "backgroundColor", t2);
      }, fillColor: (t2) => {
        setColor("fillColor", "backgroundColor", t2);
      }, fgColor: (t2) => {
        setColor("fgColor", "color", t2);
      }, textColor: (t2) => {
        setColor("textColor", "color", t2);
      }, borderColor: (t2) => {
        setColor("borderColor", "borderColor", t2);
      }, strokeColor: (t2) => {
        setColor("strokeColor", "borderColor", t2);
      }, rotation: (t2) => {
        const e2 = t2.detail.rotation;
        this.setRotation(e2);
        this.annotationStorage.setValue(this.data.id, { rotation: e2 });
      } });
    }
    _dispatchEventFromSandbox(t2, e2) {
      const i2 = this._commonActions;
      for (const n2 of Object.keys(e2.detail)) {
        const s2 = t2[n2] || i2[n2];
        s2?.(e2);
      }
    }
    _setDefaultPropertiesFromJS(t2) {
      if (!this.enableScripting) return;
      const e2 = this.annotationStorage.getRawValue(this.data.id);
      if (!e2) return;
      const i2 = this._commonActions;
      for (const [n2, s2] of Object.entries(e2)) {
        const a2 = i2[n2];
        if (a2) {
          a2({ detail: { [n2]: s2 }, target: t2 });
          delete e2[n2];
        }
      }
    }
    _createQuadrilaterals() {
      if (!this.container) return;
      const { quadPoints: t2 } = this.data;
      if (!t2) return;
      const [e2, i2, n2, s2] = this.data.rect.map((t3) => Math.fround(t3));
      if (8 === t2.length) {
        const [a2, r3, o3, l3] = t2.subarray(2, 6);
        if (n2 === a2 && s2 === r3 && e2 === o3 && i2 === l3) return;
      }
      const { style: r2 } = this.container;
      let o2;
      if (__privateGet(this, _lr)) {
        const { borderColor: t3, borderWidth: e3 } = r2;
        r2.borderWidth = 0;
        o2 = ["url('data:image/svg+xml;utf8,", `<svg xmlns="${a}" preserveAspectRatio="none" viewBox="0 0 1 1">`, `<g fill="transparent" stroke="${t3}" stroke-width="${e3}">`];
        this.container.classList.add("hasBorder");
      }
      const l2 = n2 - e2, h2 = s2 - i2, { svgFactory: c2 } = this, d2 = c2.createElement("svg");
      d2.classList.add("quadrilateralsContainer");
      d2.setAttribute("width", 0);
      d2.setAttribute("height", 0);
      d2.role = "none";
      const u2 = c2.createElement("defs");
      d2.append(u2);
      const p2 = c2.createElement("clipPath"), g2 = `clippath_${this.data.id}`;
      p2.setAttribute("id", g2);
      p2.setAttribute("clipPathUnits", "objectBoundingBox");
      u2.append(p2);
      for (let i3 = 2, n3 = t2.length; i3 < n3; i3 += 8) {
        const n4 = t2[i3], a2 = t2[i3 + 1], r3 = t2[i3 + 2], d3 = t2[i3 + 3], u3 = c2.createElement("rect"), g3 = (r3 - e2) / l2, m2 = (s2 - a2) / h2, f2 = (n4 - r3) / l2, b2 = (a2 - d3) / h2;
        u3.setAttribute("x", g3);
        u3.setAttribute("y", m2);
        u3.setAttribute("width", f2);
        u3.setAttribute("height", b2);
        p2.append(u3);
        o2?.push(`<rect vector-effect="non-scaling-stroke" x="${g3}" y="${m2}" width="${f2}" height="${b2}"/>`);
      }
      if (__privateGet(this, _lr)) {
        o2.push("</g></svg>')");
        r2.backgroundImage = o2.join("");
      }
      this.container.append(d2);
      this.container.style.clipPath = `url(#${g2})`;
    }
    _createPopup(t2 = null) {
      const { data: e2 } = this;
      let i2, n2;
      if (t2) {
        i2 = { str: t2.text };
        n2 = t2.date;
      } else {
        i2 = e2.contentsObj;
        n2 = e2.modificationDate;
      }
      __privateSet(this, _hr, new PopupAnnotationElement({ data: { color: e2.color, titleObj: e2.titleObj, modificationDate: n2, contentsObj: i2, richText: e2.richText, parentRect: e2.rect, borderStyle: 0, id: `popup_${e2.id}`, rotation: e2.rotation, noRotate: true }, linkService: this.linkService, parent: this.parent, elements: [this] }));
    }
    get hasPopupElement() {
      return !!(__privateGet(this, _hr) || this.popup || this.data.popupRef);
    }
    get extraPopupElement() {
      return __privateGet(this, _hr);
    }
    render() {
      unreachable("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t2, e2 = null) {
      const i2 = [];
      if (this._fieldObjects) {
        const n2 = this._fieldObjects[t2];
        if (n2) for (const { page: t3, id: s2, exportValues: a2 } of n2) {
          if (-1 === t3) continue;
          if (s2 === e2) continue;
          const n3 = "string" == typeof a2 ? a2 : null, r2 = document.querySelector(`[data-element-id="${s2}"]`);
          !r2 || Rt.has(r2) ? i2.push({ id: s2, exportValue: n3, domElement: r2 }) : warn(`_getElementsByName - element not allowed: ${s2}`);
        }
        return i2;
      }
      for (const n2 of document.getElementsByName(t2)) {
        const { exportValue: t3 } = n2, s2 = n2.getAttribute("data-element-id");
        s2 !== e2 && (Rt.has(n2) && i2.push({ id: s2, exportValue: t3, domElement: n2 }));
      }
      return i2;
    }
    show() {
      this.container && (this.container.hidden = false);
      this.popup?.maybeShow();
    }
    hide() {
      this.container && (this.container.hidden = true);
      this.popup?.forceHide();
    }
    getElementsToTriggerPopup() {
      return this.container;
    }
    addHighlightArea() {
      const t2 = this.getElementsToTriggerPopup();
      if (Array.isArray(t2)) for (const e2 of t2) e2.classList.add("highlightArea");
      else t2.classList.add("highlightArea");
    }
    _editOnDoubleClick() {
      if (!this._isEditable) return;
      const { annotationEditorType: t2, data: { id: e2 } } = this;
      this.container.addEventListener("dblclick", () => {
        this.linkService.eventBus?.dispatch("switchannotationeditormode", { source: this, mode: t2, editId: e2, mustEnterInEditMode: true });
      });
    }
    updateOC(t2) {
      if (!this.data.oc || !t2) return;
      t2.isVisible(this.data.oc) ? this.show() : this.hide();
    }
    get width() {
      return this.data.rect[2] - this.data.rect[0];
    }
    get height() {
      return this.data.rect[3] - this.data.rect[1];
    }
    _setBackgroundColor(t2) {
      const e2 = this.data.backgroundColor || null;
      t2.style.backgroundColor = null === e2 ? "transparent" : Util.makeHexColor(...e2);
    }
  };
  _or = new WeakMap();
  _lr = new WeakMap();
  _hr = new WeakMap();
  _AnnotationElement_instances = new WeakSet();
  cr_fn = function(t2) {
    const { container: { style: e2 }, data: { rect: i2, rotation: n2 }, parent: { viewport: { rawDims: { pageWidth: s2, pageHeight: a2, pageX: r2, pageY: o2 } } } } = this;
    i2?.splice(0, 4, ...t2);
    e2.left = 100 * (t2[0] - r2) / s2 + "%";
    e2.top = 100 * (a2 - t2[3] + o2) / a2 + "%";
    if (0 === n2) {
      e2.width = 100 * (t2[2] - t2[0]) / s2 + "%";
      e2.height = 100 * (t2[3] - t2[1]) / a2 + "%";
    } else this.setRotation(n2);
  };
  var AnnotationElement = _AnnotationElement;
  var EditorAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      this.editor = t2.editor;
    }
    render() {
      this.container.className = "editorAnnotation";
      return this.container;
    }
    createOrUpdatePopup() {
      const { editor: t2 } = this;
      t2.hasComment && this._createPopup(t2.comment);
    }
    get hasCommentButton() {
      return this.enableComment && this.editor.hasComment;
    }
    get commentButtonPosition() {
      return this.editor.commentButtonPositionInPage;
    }
    get commentText() {
      return this.editor.comment.text;
    }
    set commentText(t2) {
      this.editor.comment = t2;
      t2 || this.removePopup();
    }
    get commentData() {
      return this.editor.getData();
    }
    remove() {
      this.parent.removeAnnotation(this.data.id);
      this.container.remove();
      this.container = null;
      this.removePopup();
    }
  };
  var _LinkAnnotationElement_instances, pr_fn, dr_fn, ur_fn;
  var LinkAnnotationElement = class extends AnnotationElement {
    constructor(t2, e2 = null) {
      super(t2, { isRenderable: true, ignoreBorder: !!e2?.ignoreBorder, createQuadrilaterals: true });
      __privateAdd(this, _LinkAnnotationElement_instances);
      this.isTooltipOnly = t2.data.isTooltipOnly;
    }
    render() {
      const { data: t2, linkService: e2 } = this, i2 = document.createElement("a");
      i2.setAttribute("data-element-id", t2.id);
      let n2 = false;
      if (t2.url) {
        e2.addLinkAttributes(i2, t2.url, t2.newWindow);
        n2 = true;
      } else if (t2.action) {
        this._bindNamedAction(i2, t2.action, t2.overlaidText);
        n2 = true;
      } else if (t2.attachment) {
        __privateMethod(this, _LinkAnnotationElement_instances, dr_fn).call(this, i2, t2.attachmentId, t2.attachment, t2.overlaidText, t2.attachmentDest);
        n2 = true;
      } else if (t2.setOCGState) {
        __privateMethod(this, _LinkAnnotationElement_instances, ur_fn).call(this, i2, t2.setOCGState, t2.overlaidText);
        n2 = true;
      } else if (t2.dest) {
        this._bindLink(i2, t2.dest, t2.overlaidText);
        n2 = true;
      } else {
        if (t2.actions && (t2.actions.Action || t2.actions["Mouse Up"] || t2.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
          this._bindJSAction(i2, t2);
          n2 = true;
        }
        if (t2.resetForm) {
          this._bindResetFormAction(i2, t2.resetForm);
          n2 = true;
        } else if (this.isTooltipOnly && !n2) {
          this._bindLink(i2, "");
          n2 = true;
        }
      }
      this.container.classList.add("linkAnnotation");
      if (n2) {
        this.contentElement = i2;
        this.container.append(i2);
      }
      return this.container;
    }
    _bindLink(t2, e2, i2 = "") {
      t2.href = this.linkService.getDestinationHash(e2);
      t2.onclick = () => {
        e2 && this.linkService.goToDestination(e2);
        return false;
      };
      (e2 || "" === e2) && __privateMethod(this, _LinkAnnotationElement_instances, pr_fn).call(this);
      i2 && (t2.title = i2);
    }
    _bindNamedAction(t2, e2, i2 = "") {
      t2.href = this.linkService.getAnchorUrl("");
      t2.onclick = () => {
        this.linkService.executeNamedAction(e2);
        return false;
      };
      i2 && (t2.title = i2);
      __privateMethod(this, _LinkAnnotationElement_instances, pr_fn).call(this);
    }
    _bindJSAction(t2, e2) {
      t2.href = this.linkService.getAnchorUrl("");
      const i2 = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
      for (const n2 of Object.keys(e2.actions)) {
        const s2 = i2.get(n2);
        s2 && (t2[s2] = () => {
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2.id, name: n2 } });
          return false;
        });
      }
      e2.overlaidText && (t2.title = e2.overlaidText);
      t2.onclick || (t2.onclick = () => false);
      __privateMethod(this, _LinkAnnotationElement_instances, pr_fn).call(this);
    }
    _bindResetFormAction(t2, e2) {
      const i2 = t2.onclick;
      i2 || (t2.href = this.linkService.getAnchorUrl(""));
      __privateMethod(this, _LinkAnnotationElement_instances, pr_fn).call(this);
      if (this._fieldObjects) t2.onclick = () => {
        i2?.();
        const { fields: t3, refs: n2, include: s2 } = e2, a2 = [];
        if (0 !== t3.length || 0 !== n2.length) {
          const e3 = new Set(n2);
          for (const i3 of t3) {
            const t4 = this._fieldObjects[i3] || [];
            for (const { id: i4 } of t4) e3.add(i4);
          }
          for (const t4 of Object.values(this._fieldObjects)) for (const i3 of t4) e3.has(i3.id) === s2 && a2.push(i3);
        } else for (const t4 of Object.values(this._fieldObjects)) a2.push(...t4);
        const r2 = this.annotationStorage, o2 = [];
        for (const t4 of a2) {
          const { id: e3 } = t4;
          o2.push(e3);
          switch (t4.type) {
            case "text": {
              const i4 = t4.defaultValue || "";
              r2.setValue(e3, { value: i4 });
              break;
            }
            case "checkbox":
            case "radiobutton": {
              const i4 = t4.defaultValue === t4.exportValues;
              r2.setValue(e3, { value: i4 });
              break;
            }
            case "combobox":
            case "listbox": {
              const i4 = t4.defaultValue || "";
              r2.setValue(e3, { value: i4 });
              break;
            }
            default:
              continue;
          }
          const i3 = document.querySelector(`[data-element-id="${e3}"]`);
          i3 && (Rt.has(i3) ? i3.dispatchEvent(new Event("resetform")) : warn(`_bindResetFormAction - element not allowed: ${e3}`));
        }
        this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: o2, name: "ResetForm" } });
        return false;
      };
      else {
        warn('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
        i2 || (t2.onclick = () => false);
      }
    }
  };
  _LinkAnnotationElement_instances = new WeakSet();
  pr_fn = function() {
    this.container.setAttribute("data-internal-link", "");
  };
  dr_fn = function(t2, e2, i2, n2 = "", s2 = null) {
    t2.href = this.linkService.getAnchorUrl("");
    i2.description ? t2.title = i2.description : n2 && (t2.title = n2);
    const openAttachment = async () => {
      const t3 = await this.linkService.getAttachmentContent(e2);
      t3 && this.downloadManager?.openOrDownloadData(t3, i2.filename, s2);
    };
    t2.onclick = () => {
      openAttachment();
      return false;
    };
    __privateMethod(this, _LinkAnnotationElement_instances, pr_fn).call(this);
  };
  ur_fn = function(t2, e2, i2 = "") {
    t2.href = this.linkService.getAnchorUrl("");
    t2.onclick = () => {
      this.linkService.executeSetOCGState(e2);
      return false;
    };
    i2 && (t2.title = i2);
    __privateMethod(this, _LinkAnnotationElement_instances, pr_fn).call(this);
  };
  var TextAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true });
    }
    render() {
      this.container.classList.add("textAnnotation");
      const t2 = document.createElement("img");
      t2.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
      t2.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
      t2.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name }));
      if (!this.data.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.append(t2);
      return this.container;
    }
  };
  var WidgetAnnotationElement = class extends AnnotationElement {
    render() {
      return this.container;
    }
    _getKeyModifier(t2) {
      return FeatureTest.platform.isMac ? t2.metaKey : t2.ctrlKey;
    }
    _setEventListener(t2, e2, i2, n2, s2) {
      i2.includes("mouse") ? t2.addEventListener(i2, (t3) => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: n2, value: s2(t3), shift: t3.shiftKey, modifier: this._getKeyModifier(t3) } });
      }) : t2.addEventListener(i2, (t3) => {
        if ("blur" === i2) {
          if (!e2.focused || !t3.relatedTarget) return;
          e2.focused = false;
        } else if ("focus" === i2) {
          if (e2.focused) return;
          e2.focused = true;
        }
        s2 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: n2, value: s2(t3) } });
      });
    }
    _setEventListeners(t2, e2, i2, n2) {
      for (const [s2, a2] of i2) if ("Action" === a2 || this.data.actions?.[a2]) {
        "Focus" !== a2 && "Blur" !== a2 || (e2 || (e2 = { focused: false }));
        this._setEventListener(t2, e2, s2, a2, n2);
        "Focus" !== a2 || this.data.actions?.Blur ? "Blur" !== a2 || this.data.actions?.Focus || this._setEventListener(t2, e2, "focus", "Focus", null) : this._setEventListener(t2, e2, "blur", "Blur", null);
      }
    }
    _setTextStyle(t2) {
      const e2 = ["left", "center", "right"], { fontColor: i2 } = this.data.defaultAppearanceData, n2 = this.data.defaultAppearanceData.fontSize || 9, a2 = t2.style;
      let r2;
      const roundToOneDecimal = (t3) => Math.round(10 * t3) / 10;
      if (this.data.multiLine) {
        const t3 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), e3 = t3 / (Math.round(t3 / (s * n2)) || 1);
        r2 = Math.min(n2, roundToOneDecimal(e3 / s));
      } else {
        const t3 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
        r2 = Math.min(n2, roundToOneDecimal(t3 / s));
      }
      a2.fontSize = `calc(${r2}px * var(--total-scale-factor))`;
      a2.color = Util.makeHexColor(...i2);
      null === this.data.textAlignment || this.data.comb || (a2.textAlign = e2[this.data.textAlignment]);
    }
    _setRequired(t2, e2) {
      e2 ? t2.setAttribute("required", true) : t2.removeAttribute("required");
      t2.setAttribute("aria-required", e2);
    }
  };
  var TextWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms || t2.data.hasOwnCanvas || !t2.data.hasAppearance && !!t2.data.fieldValue });
    }
    setPropertyOnSiblings(t2, e2, i2, n2) {
      const s2 = this.annotationStorage;
      for (const a2 of this._getElementsByName(t2.name, t2.id)) {
        a2.domElement && (a2.domElement[e2] = i2);
        s2.setValue(a2.id, { [n2]: i2 });
      }
    }
    render() {
      const t2 = this.annotationStorage, e2 = this.data.id;
      this.container.classList.add("textWidgetAnnotation");
      let i2 = null;
      if (this.renderForms) {
        const n2 = t2.getValue(e2, { value: this.data.fieldValue });
        let s2 = n2.value || "";
        const a2 = t2.getValue(e2, { charLimit: this.data.maxLen }).charLimit;
        a2 && s2.length > a2 && (s2 = s2.slice(0, a2));
        let r2 = n2.formattedValue || this.data.textContent?.join("\n") || null;
        r2 && this.data.comb && (r2 = r2.replaceAll(/\s+/g, ""));
        const o2 = { userValue: s2, formattedValue: r2, lastCommittedValue: null, commitKey: 1, focused: false };
        if (this.data.multiLine) {
          i2 = document.createElement("textarea");
          i2.textContent = r2 ?? s2;
          this.data.doNotScroll && (i2.style.overflowY = "hidden");
        } else {
          i2 = document.createElement("input");
          i2.type = this.data.password ? "password" : "text";
          i2.setAttribute("value", r2 ?? s2);
          this.data.doNotScroll && (i2.style.overflowX = "hidden");
        }
        if (this.data.hasOwnCanvas) {
          this.container.classList.add("hasOwnCanvas");
          t2.has(e2) && this.container.classList.add("sandboxModified");
        }
        Rt.add(i2);
        this.contentElement = i2;
        i2.setAttribute("data-element-id", e2);
        i2.disabled = this.data.readOnly;
        i2.name = this.data.fieldName;
        i2.tabIndex = 0;
        const { datetimeFormat: l2, datetimeType: h2, timeStep: c2 } = this.data, d2 = !!h2 && this.enableScripting;
        l2 && (i2.title = l2);
        this._setRequired(i2, this.data.required);
        a2 && (i2.maxLength = a2);
        i2.addEventListener("input", (n3) => {
          t2.setValue(e2, { value: n3.target.value });
          this.setPropertyOnSiblings(i2, "value", n3.target.value, "value");
          o2.formattedValue = null;
        });
        i2.addEventListener("resetform", (t3) => {
          const e3 = this.data.defaultFieldValue ?? "";
          i2.value = o2.userValue = e3;
          o2.formattedValue = null;
        });
        let blurListener = (t3) => {
          const { formattedValue: e3 } = o2;
          null != e3 && (t3.target.value = e3);
          t3.target.scrollLeft = 0;
        };
        if (this.enableScripting && this.hasJSActions) {
          i2.addEventListener("focus", (t3) => {
            if (o2.focused) return;
            const { target: e3 } = t3;
            if (d2) {
              e3.type = h2;
              c2 && (e3.step = c2);
            }
            if (o2.userValue) {
              const t4 = o2.userValue;
              if (d2) if ("time" === h2) {
                const i3 = new Date(t4), n4 = [i3.getHours(), i3.getMinutes(), i3.getSeconds()];
                e3.value = n4.map((t5) => t5.toString().padStart(2, "0")).join(":");
              } else e3.value = new Date(t4 - Nt).toISOString().split("date" === h2 ? "T" : ".", 1)[0];
              else e3.value = t4;
            }
            o2.lastCommittedValue = e3.value;
            o2.commitKey = 1;
            this.data.actions?.Focus || (o2.focused = true);
          });
          i2.addEventListener("updatefromsandbox", (i3) => {
            this.container.classList.add("sandboxModified");
            const n4 = { value(i4) {
              o2.userValue = i4.detail.value ?? "";
              d2 || t2.setValue(e2, { value: o2.userValue.toString() });
              i4.target.value = o2.userValue;
            }, formattedValue(i4) {
              const { formattedValue: n5 } = i4.detail;
              o2.formattedValue = n5;
              null != n5 && i4.target !== document.activeElement && (i4.target.value = n5);
              const s3 = { formattedValue: n5 };
              d2 && (s3.value = n5);
              t2.setValue(e2, s3);
            }, selRange(t3) {
              t3.target.setSelectionRange(...t3.detail.selRange);
            }, charLimit: (i4) => {
              const { charLimit: n5 } = i4.detail, { target: s3 } = i4;
              if (0 === n5) {
                s3.removeAttribute("maxLength");
                return;
              }
              s3.setAttribute("maxLength", n5);
              let a3 = o2.userValue;
              if (a3 && !(a3.length <= n5)) {
                a3 = a3.slice(0, n5);
                s3.value = o2.userValue = a3;
                t2.setValue(e2, { value: a3 });
                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: a3, willCommit: true, commitKey: 1, selStart: s3.selectionStart, selEnd: s3.selectionEnd } });
              }
            } };
            this._dispatchEventFromSandbox(n4, i3);
          });
          i2.addEventListener("keydown", (t3) => {
            o2.commitKey = 1;
            let i3 = -1;
            "Escape" === t3.key ? i3 = 0 : "Enter" !== t3.key || this.data.multiLine ? "Tab" === t3.key && (o2.commitKey = 3) : i3 = 2;
            if (-1 === i3) return;
            const { value: n4 } = t3.target;
            if (o2.lastCommittedValue !== n4) {
              o2.lastCommittedValue = n4;
              o2.userValue = n4;
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: n4, willCommit: true, commitKey: i3, selStart: t3.target.selectionStart, selEnd: t3.target.selectionEnd } });
            }
          });
          const n3 = blurListener;
          blurListener = null;
          i2.addEventListener("blur", (t3) => {
            if (!o2.focused || !t3.relatedTarget) return;
            this.data.actions?.Blur || (o2.focused = false);
            const { target: i3 } = t3;
            let { value: s3 } = i3;
            if (d2) {
              if (s3 && "time" === h2) {
                const t4 = s3.split(":").map((t5) => parseInt(t5, 10));
                s3 = new Date(2e3, 0, 1, t4[0], t4[1], t4[2] || 0).valueOf();
                i3.step = "";
              } else {
                s3.includes("T") || (s3 = `${s3}T00:00`);
                s3 = new Date(s3).valueOf();
              }
              i3.type = "text";
            }
            o2.userValue = s3;
            o2.lastCommittedValue !== s3 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: s3, willCommit: true, commitKey: o2.commitKey, selStart: t3.target.selectionStart, selEnd: t3.target.selectionEnd } });
            n3(t3);
          });
          this.data.actions?.Keystroke && i2.addEventListener("beforeinput", (t3) => {
            o2.lastCommittedValue = null;
            const { data: i3, target: n4 } = t3, { value: s3, selectionStart: a3, selectionEnd: r3 } = n4;
            let l3 = a3, h3 = r3;
            switch (t3.inputType) {
              case "deleteWordBackward": {
                const t4 = s3.substring(0, a3).match(/\w*\W*$/);
                t4 && (l3 -= t4[0].length);
                break;
              }
              case "deleteWordForward": {
                const t4 = s3.substring(a3).match(/^\W*\w*/);
                t4 && (h3 += t4[0].length);
                break;
              }
              case "deleteContentBackward":
                a3 === r3 && (l3 -= 1);
                break;
              case "deleteContentForward":
                a3 === r3 && (h3 += 1);
            }
            t3.preventDefault();
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: s3, change: i3 || "", willCommit: false, selStart: l3, selEnd: h3 } });
          });
          this._setEventListeners(i2, o2, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.value);
        }
        blurListener && i2.addEventListener("blur", blurListener);
        if (this.data.comb) {
          const t3 = (this.data.rect[2] - this.data.rect[0]) / a2;
          i2.classList.add("comb");
          i2.style.setProperty("--comb-width", `calc(${t3}px * var(--total-scale-factor))`);
          const e3 = this.data.textAlignment;
          if (1 === e3 || 2 === e3) {
            const setCombOffset = () => {
              const t4 = a2 - i2.value.length;
              i2.style.setProperty("--comb-offset", `${1 === e3 ? t4 >> 1 : t4}`);
            };
            setCombOffset();
            for (const t4 of ["input", "blur", "resetform", "updatefromsandbox"]) i2.addEventListener(t4, setCombOffset);
          }
        }
      } else {
        i2 = document.createElement("div");
        i2.textContent = this.data.fieldValue;
        i2.style.verticalAlign = "middle";
        i2.style.display = "table-cell";
        this.data.hasOwnCanvas && (i2.hidden = true);
      }
      this._setTextStyle(i2);
      this._setBackgroundColor(i2);
      this._setDefaultPropertiesFromJS(i2);
      this.container.append(i2);
      return this.container;
    }
  };
  var SignatureWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: !!t2.data.hasOwnCanvas });
    }
  };
  var CheckboxWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      const t2 = this.annotationStorage, e2 = this.data, i2 = e2.id;
      let n2 = t2.getValue(i2, { value: e2.exportValue === e2.fieldValue }).value;
      if ("string" == typeof n2) {
        n2 = "Off" !== n2;
        t2.setValue(i2, { value: n2 });
      }
      this.container.classList.add("buttonWidgetAnnotation", "checkBox");
      const s2 = document.createElement("input");
      Rt.add(s2);
      s2.setAttribute("data-element-id", i2);
      s2.disabled = e2.readOnly;
      this._setRequired(s2, this.data.required);
      s2.type = "checkbox";
      s2.name = e2.fieldName;
      n2 && s2.setAttribute("checked", true);
      s2.setAttribute("exportValue", e2.exportValue);
      s2.tabIndex = 0;
      s2.addEventListener("change", (n3) => {
        const { name: s3, checked: a2 } = n3.target;
        for (const n4 of this._getElementsByName(s3, i2)) {
          const i3 = a2 && n4.exportValue === e2.exportValue;
          n4.domElement && (n4.domElement.checked = i3);
          t2.setValue(n4.id, { value: i3 });
        }
        t2.setValue(i2, { value: a2 });
      });
      s2.addEventListener("resetform", (t3) => {
        const i3 = e2.defaultFieldValue || "Off";
        t3.target.checked = i3 === e2.exportValue;
      });
      if (this.enableScripting && this.hasJSActions) {
        s2.addEventListener("updatefromsandbox", (e3) => {
          const n3 = { value(e4) {
            e4.target.checked = "Off" !== e4.detail.value;
            t2.setValue(i2, { value: e4.target.checked });
          } };
          this._dispatchEventFromSandbox(n3, e3);
        });
        this._setEventListeners(s2, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.checked);
      }
      this._setDefaultPropertiesFromJS(s2);
      this.container.append(s2);
      return this.container;
    }
  };
  var RadioButtonWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      this.container.classList.add("buttonWidgetAnnotation", "radioButton");
      const t2 = this.annotationStorage, e2 = this.data, i2 = e2.id;
      let n2 = t2.getValue(i2, { value: null !== e2.buttonValue && e2.fieldValue === e2.buttonValue }).value;
      if ("string" == typeof n2) {
        n2 = n2 !== e2.buttonValue;
        t2.setValue(i2, { value: n2 });
      }
      if (n2) for (const n3 of this._getElementsByName(e2.fieldName, i2)) t2.setValue(n3.id, { value: false });
      const s2 = document.createElement("input");
      Rt.add(s2);
      s2.setAttribute("data-element-id", i2);
      s2.disabled = e2.readOnly;
      this._setRequired(s2, this.data.required);
      s2.type = "radio";
      s2.name = e2.fieldName;
      n2 && s2.setAttribute("checked", true);
      s2.tabIndex = 0;
      s2.addEventListener("change", (e3) => {
        const { name: n3, checked: s3 } = e3.target;
        for (const e4 of this._getElementsByName(n3, i2)) t2.setValue(e4.id, { value: false });
        t2.setValue(i2, { value: s3 });
      });
      s2.addEventListener("resetform", (t3) => {
        const i3 = e2.defaultFieldValue;
        t3.target.checked = null != i3 && i3 === e2.buttonValue;
      });
      if (this.enableScripting && this.hasJSActions) {
        const n3 = e2.buttonValue;
        s2.addEventListener("updatefromsandbox", (e3) => {
          const s3 = { value: (e4) => {
            const s4 = n3 === e4.detail.value;
            for (const n4 of this._getElementsByName(e4.target.name)) {
              const e5 = s4 && n4.id === i2;
              n4.domElement && (n4.domElement.checked = e5);
              t2.setValue(n4.id, { value: e5 });
            }
          } };
          this._dispatchEventFromSandbox(s3, e3);
        });
        this._setEventListeners(s2, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.checked);
      }
      this._setDefaultPropertiesFromJS(s2);
      this.container.append(s2);
      return this.container;
    }
  };
  var PushButtonWidgetAnnotationElement = class extends LinkAnnotationElement {
    constructor(t2) {
      super(t2, { ignoreBorder: t2.data.hasAppearance });
    }
    render() {
      const t2 = super.render();
      t2.classList.add("buttonWidgetAnnotation", "pushButton");
      const e2 = t2.lastChild;
      if (this.enableScripting && this.hasJSActions && e2) {
        this._setDefaultPropertiesFromJS(e2);
        e2.addEventListener("updatefromsandbox", (t3) => {
          this._dispatchEventFromSandbox({}, t3);
        });
      }
      return t2;
    }
  };
  var ChoiceWidgetAnnotationElement = class extends WidgetAnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      this.container.classList.add("choiceWidgetAnnotation");
      const t2 = this.annotationStorage, e2 = this.data.id, i2 = t2.getValue(e2, { value: this.data.fieldValue }), n2 = document.createElement("select");
      Rt.add(n2);
      n2.setAttribute("data-element-id", e2);
      n2.disabled = this.data.readOnly;
      this._setRequired(n2, this.data.required);
      n2.name = this.data.fieldName;
      n2.tabIndex = 0;
      let s2 = this.data.combo && this.data.options.length > 0;
      if (!this.data.combo) {
        n2.size = this.data.options.length;
        this.data.multiSelect && (n2.multiple = true);
      }
      n2.addEventListener("resetform", (t3) => {
        const e3 = this.data.defaultFieldValue;
        for (const t4 of n2.options) t4.selected = t4.value === e3;
      });
      const fixDisplayValue = (t3, e3) => {
        const i3 = e3.replaceAll(" ", "\xA0");
        t3.textContent = i3;
        i3 !== e3 && t3.setAttribute("display-value", e3);
      };
      for (const t3 of this.data.options) {
        const e3 = document.createElement("option");
        fixDisplayValue(e3, t3.displayValue);
        e3.value = t3.exportValue;
        if (i2.value.includes(t3.exportValue)) {
          e3.setAttribute("selected", true);
          s2 = false;
        }
        n2.append(e3);
      }
      let a2 = null;
      if (s2) {
        const t3 = document.createElement("option");
        t3.value = " ";
        t3.setAttribute("hidden", true);
        t3.setAttribute("selected", true);
        n2.prepend(t3);
        a2 = () => {
          t3.remove();
          n2.removeEventListener("input", a2);
          a2 = null;
        };
        n2.addEventListener("input", a2);
      }
      const getValue = (t3) => {
        const e3 = t3 ? "value" : "textContent", { options: i3, multiple: s3 } = n2;
        return s3 ? Array.prototype.filter.call(i3, (t4) => t4.selected).map((t4) => t4[e3]) : -1 === i3.selectedIndex ? null : i3[i3.selectedIndex][e3];
      };
      let r2 = getValue(false);
      const getItems = (t3) => {
        const e3 = t3.target.options;
        return Array.prototype.map.call(e3, (t4) => ({ displayValue: t4.getAttribute("display-value") || t4.textContent, exportValue: t4.value }));
      };
      if (this.enableScripting && this.hasJSActions) {
        n2.addEventListener("updatefromsandbox", (i3) => {
          const s3 = { value(i4) {
            a2?.();
            const s4 = i4.detail.value, o2 = new Set(Array.isArray(s4) ? s4 : [s4]);
            for (const t3 of n2.options) t3.selected = o2.has(t3.value);
            t2.setValue(e2, { value: getValue(true) });
            r2 = getValue(false);
          }, multipleSelection(t3) {
            n2.multiple = true;
          }, remove(i4) {
            const s4 = n2.options, a3 = i4.detail.remove;
            s4[a3].selected = false;
            n2.remove(a3);
            if (s4.length > 0) {
              -1 === Array.prototype.findIndex.call(s4, (t3) => t3.selected) && (s4[0].selected = true);
            }
            t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
            r2 = getValue(false);
          }, clear(i4) {
            for (; 0 !== n2.length; ) n2.remove(0);
            t2.setValue(e2, { value: null, items: [] });
            r2 = getValue(false);
          }, insert(i4) {
            const { index: s4, displayValue: a3, exportValue: o2 } = i4.detail.insert, l2 = n2.children[s4], h2 = document.createElement("option");
            fixDisplayValue(h2, a3);
            h2.value = o2;
            l2 ? l2.before(h2) : n2.append(h2);
            t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
            r2 = getValue(false);
          }, items(i4) {
            const { items: s4 } = i4.detail;
            for (; 0 !== n2.length; ) n2.remove(0);
            for (const t3 of s4) {
              const { displayValue: e3, exportValue: i5 } = t3, s5 = document.createElement("option");
              fixDisplayValue(s5, e3);
              s5.value = i5;
              n2.append(s5);
            }
            n2.options.length > 0 && (n2.options[0].selected = true);
            t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
            r2 = getValue(false);
          }, indices(i4) {
            const n3 = new Set(i4.detail.indices);
            for (const t3 of i4.target.options) t3.selected = n3.has(t3.index);
            t2.setValue(e2, { value: getValue(true) });
            r2 = getValue(false);
          }, editable(t3) {
            t3.target.disabled = !t3.detail.editable;
          } };
          this._dispatchEventFromSandbox(s3, i3);
        });
        n2.addEventListener("input", (i3) => {
          const n3 = getValue(true), s3 = getValue(false);
          t2.setValue(e2, { value: n3 });
          i3.preventDefault();
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: r2, change: s3, changeEx: n3, willCommit: false, commitKey: 1, keyDown: false } });
        });
        this._setEventListeners(n2, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (t3) => t3.target.value);
      } else n2.addEventListener("input", function(i3) {
        t2.setValue(e2, { value: getValue(true) });
      });
      this.data.combo && this._setTextStyle(n2);
      this._setBackgroundColor(n2);
      this._setDefaultPropertiesFromJS(n2);
      this.container.append(n2);
      return this.container;
    }
  };
  var _PopupAnnotationElement_instances, gr_fn;
  var PopupAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      const { data: e2, elements: i2, parent: n2 } = t2, s2 = !!n2._commentManager;
      super(t2, { isRenderable: !s2 && AnnotationElement._hasPopupData(e2) });
      __privateAdd(this, _PopupAnnotationElement_instances);
      this.elements = i2;
      if (s2 && AnnotationElement._hasPopupData(e2)) {
        const t3 = this.popup = __privateMethod(this, _PopupAnnotationElement_instances, gr_fn).call(this);
        for (const e3 of i2) e3.popup = t3;
      } else this.popup = null;
    }
    render() {
      const { container: t2 } = this;
      t2.classList.add("popupAnnotation");
      t2.role = "comment";
      const e2 = this.popup = __privateMethod(this, _PopupAnnotationElement_instances, gr_fn).call(this), i2 = [];
      for (const t3 of this.elements) {
        t3.popup = e2;
        t3.container.ariaHasPopup = "dialog";
        i2.push(t3.data.id);
        t3.addHighlightArea();
      }
      this.container.setAttribute("aria-controls", i2.map((t3) => `${m}${t3}`).join(","));
      return this.container;
    }
  };
  _PopupAnnotationElement_instances = new WeakSet();
  gr_fn = function() {
    return new PopupElement({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate || this.data.creationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open, commentManager: this.parent._commentManager });
  };
  var _$2, _mr, _fr, _yr, _Ar, _xr, __t4, _Cr, _Er, _Sr, _Tr, _kr, __r, _Mr, _Dr, _F2, _Pr, _Ir, _we2, _Fr, _be2, _Br, _or2, _Lr, _Or, _Rr, _PopupElement_instances, Nr_fn, Ur_fn, zr_fn, Hr_fn, Gr_get, Wr_get, Vr_get, jr_fn, er_fn2, $r_fn, wr_fn, vr_fn, br_fn;
  var PopupElement = class {
    constructor({ container: t2, color: e2, elements: i2, titleObj: n2, modificationDate: s2, contentsObj: a2, richText: r2, parent: o2, rect: l2, parentRect: h2, open: c2, commentManager: d2 = null }) {
      __privateAdd(this, _PopupElement_instances);
      __privateAdd(this, _$2, null);
      __privateAdd(this, _mr, __privateMethod(this, _PopupElement_instances, er_fn2).bind(this));
      __privateAdd(this, _fr, __privateMethod(this, _PopupElement_instances, br_fn).bind(this));
      __privateAdd(this, _yr, __privateMethod(this, _PopupElement_instances, vr_fn).bind(this));
      __privateAdd(this, _Ar, __privateMethod(this, _PopupElement_instances, wr_fn).bind(this));
      __privateAdd(this, _xr, null);
      __privateAdd(this, __t4, null);
      __privateAdd(this, _Cr, null);
      __privateAdd(this, _Er, null);
      __privateAdd(this, _Sr, null);
      __privateAdd(this, _Tr, null);
      __privateAdd(this, _kr, null);
      __privateAdd(this, __r, false);
      __privateAdd(this, _Mr, null);
      __privateAdd(this, _Dr, null);
      __privateAdd(this, _F2, null);
      __privateAdd(this, _Pr, null);
      __privateAdd(this, _Ir, null);
      __privateAdd(this, _we2, null);
      __privateAdd(this, _Fr, null);
      __privateAdd(this, _be2, null);
      __privateAdd(this, _Br, null);
      __privateAdd(this, _or2, null);
      __privateAdd(this, _Lr, false);
      __privateAdd(this, _Or, null);
      __privateAdd(this, _Rr, null);
      __privateSet(this, __t4, t2);
      __privateSet(this, _Br, n2);
      __privateSet(this, _Cr, a2);
      __privateSet(this, _be2, r2);
      __privateSet(this, _Tr, o2);
      __privateSet(this, _xr, e2);
      __privateSet(this, _Fr, l2);
      __privateSet(this, _kr, h2);
      __privateSet(this, _Sr, i2);
      __privateSet(this, _$2, d2);
      __privateSet(this, _Or, i2[0]);
      __privateSet(this, _Er, PDFDateString.toDateObject(s2));
      this.trigger = i2.flatMap((t3) => t3.getElementsToTriggerPopup());
      if (!d2) {
        __privateMethod(this, _PopupElement_instances, Nr_fn).call(this);
        __privateGet(this, __t4).hidden = true;
        c2 && __privateMethod(this, _PopupElement_instances, wr_fn).call(this);
      }
    }
    renderCommentButton() {
      if (__privateGet(this, _Pr)) {
        __privateGet(this, _Pr).parentNode || __privateGet(this, _Or).container.after(__privateGet(this, _Pr));
        return;
      }
      __privateGet(this, _Ir) || __privateMethod(this, _PopupElement_instances, Ur_fn).call(this);
      if (!__privateGet(this, _Ir)) return;
      const { signal: t2 } = __privateSet(this, _Dr, new AbortController()), e2 = __privateGet(this, _Or).hasOwnCommentButton, togglePopup = () => {
        __privateGet(this, _$2).toggleCommentPopup(this, true, void 0, !e2);
      }, showPopup = () => {
        __privateGet(this, _$2).toggleCommentPopup(this, false, true, !e2);
      }, hidePopup = () => {
        __privateGet(this, _$2).toggleCommentPopup(this, false, false);
      };
      if (e2) {
        __privateSet(this, _Pr, __privateGet(this, _Or).container);
        for (const e3 of this.trigger) {
          e3.ariaHasPopup = "dialog";
          e3.ariaControls = "commentPopup";
          e3.addEventListener("keydown", __privateGet(this, _mr), { signal: t2 });
          e3.addEventListener("click", togglePopup, { signal: t2 });
          e3.addEventListener("pointerenter", showPopup, { signal: t2 });
          e3.addEventListener("pointerleave", hidePopup, { signal: t2 });
          e3.classList.add("popupTriggerArea");
        }
      } else {
        const e3 = __privateSet(this, _Pr, document.createElement("button"));
        e3.className = "annotationCommentButton";
        const i2 = __privateGet(this, _Or).container;
        e3.style.zIndex = parseInt(i2.style.zIndex, 10) + 1;
        e3.tabIndex = 0;
        e3.ariaHasPopup = "dialog";
        e3.ariaControls = "commentPopup";
        e3.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
        __privateMethod(this, _PopupElement_instances, Hr_fn).call(this);
        __privateMethod(this, _PopupElement_instances, zr_fn).call(this);
        e3.addEventListener("keydown", __privateGet(this, _mr), { signal: t2 });
        e3.addEventListener("click", togglePopup, { signal: t2 });
        e3.addEventListener("pointerenter", showPopup, { signal: t2 });
        e3.addEventListener("pointerleave", hidePopup, { signal: t2 });
        i2.after(e3);
      }
    }
    get commentButtonColor() {
      const { color: t2, opacity: e2 } = __privateGet(this, _Or).commentData;
      return t2 ? __privateGet(this, _Tr)._commentManager.makeCommentColor(t2, e2) : null;
    }
    focusCommentButton() {
      setTimeout(() => {
        __privateGet(this, _Pr)?.focus();
      }, 0);
    }
    getData() {
      const { richText: t2, color: e2, opacity: i2, creationDate: n2, modificationDate: s2 } = __privateGet(this, _Or).commentData;
      return { contentsObj: { str: this.comment }, richText: t2, color: e2, opacity: i2, creationDate: n2, modificationDate: s2 };
    }
    get elementBeforePopup() {
      return __privateGet(this, _Pr);
    }
    get comment() {
      __privateGet(this, _Rr) || __privateSet(this, _Rr, __privateGet(this, _Or).commentText);
      return __privateGet(this, _Rr);
    }
    set comment(t2) {
      t2 !== this.comment && (__privateGet(this, _Or).commentText = __privateSet(this, _Rr, t2));
    }
    focus() {
      __privateGet(this, _Or).container?.focus();
    }
    get parentBoundingClientRect() {
      return __privateGet(this, _Or).layer.getBoundingClientRect();
    }
    setCommentButtonStates({ selected: t2, hasPopup: e2 }) {
      if (__privateGet(this, _Pr)) {
        __privateGet(this, _Pr).classList.toggle("selected", t2);
        __privateGet(this, _Pr).ariaExpanded = e2;
      }
    }
    setSelectedCommentButton(t2) {
      __privateGet(this, _Pr).classList.toggle("selected", t2);
    }
    get commentPopupPosition() {
      if (__privateGet(this, _we2)) return __privateGet(this, _we2);
      const { x: t2, y: e2, height: i2 } = __privateGet(this, _Pr).getBoundingClientRect(), { x: n2, y: s2, width: a2, height: r2 } = __privateGet(this, _Or).layer.getBoundingClientRect();
      return [(t2 - n2) / a2, (e2 + i2 - s2) / r2];
    }
    set commentPopupPosition(t2) {
      __privateSet(this, _we2, t2);
    }
    hasDefaultPopupPosition() {
      return null === __privateGet(this, _we2);
    }
    get commentButtonPosition() {
      return __privateGet(this, _Ir);
    }
    get commentButtonWidth() {
      return __privateGet(this, _Pr).getBoundingClientRect().width / this.parentBoundingClientRect.width;
    }
    editComment(t2) {
      const [e2, i2] = __privateGet(this, _we2) || this.commentButtonPosition.map((t3) => t3 / 100), n2 = this.parentBoundingClientRect, { x: s2, y: a2, width: r2, height: o2 } = n2;
      __privateGet(this, _$2).showDialog(null, this, s2 + e2 * r2, a2 + i2 * o2, { ...t2, parentDimensions: n2 });
    }
    render() {
      if (__privateGet(this, _Mr)) return;
      const t2 = __privateSet(this, _Mr, document.createElement("div"));
      t2.className = "popup";
      if (__privateGet(this, _xr)) {
        const e3 = t2.style.outlineColor = Util.makeHexColor(...__privateGet(this, _xr));
        t2.style.backgroundColor = `color-mix(in srgb, ${e3} 30%, white)`;
      }
      const e2 = document.createElement("span");
      e2.className = "header";
      if (__privateGet(this, _Br)?.str) {
        const t3 = document.createElement("span");
        t3.className = "title";
        e2.append(t3);
        ({ dir: t3.dir, str: t3.textContent } = __privateGet(this, _Br));
      }
      t2.append(e2);
      if (__privateGet(this, _Er)) {
        const t3 = document.createElement("time");
        t3.className = "popupDate";
        t3.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
        t3.setAttribute("data-l10n-args", JSON.stringify({ dateObj: __privateGet(this, _Er).valueOf() }));
        t3.dateTime = __privateGet(this, _Er).toISOString();
        e2.append(t3);
      }
      renderRichText({ html: __privateGet(this, _PopupElement_instances, Gr_get) || __privateGet(this, _Cr).str, dir: __privateGet(this, _Cr)?.dir, className: "popupContent" }, t2);
      __privateGet(this, __t4).append(t2);
    }
    updateEdited({ rect: t2, popup: e2, deleted: i2 }) {
      if (__privateGet(this, _$2)) {
        if (i2) {
          this.remove();
          __privateSet(this, _Rr, null);
        } else if (e2) if (e2.deleted) this.remove();
        else {
          __privateMethod(this, _PopupElement_instances, Hr_fn).call(this);
          __privateSet(this, _Rr, e2.text);
        }
        if (t2) {
          __privateSet(this, _Ir, null);
          __privateMethod(this, _PopupElement_instances, Ur_fn).call(this);
          __privateMethod(this, _PopupElement_instances, zr_fn).call(this);
        }
      } else if (i2 || e2?.deleted) this.remove();
      else {
        __privateMethod(this, _PopupElement_instances, Nr_fn).call(this);
        __privateGet(this, _or2) || __privateSet(this, _or2, { contentsObj: __privateGet(this, _Cr), richText: __privateGet(this, _be2) });
        t2 && __privateSet(this, _F2, null);
        if (e2 && e2.text) {
          __privateSet(this, _be2, __privateMethod(this, _PopupElement_instances, jr_fn).call(this, e2.text));
          __privateSet(this, _Er, PDFDateString.toDateObject(e2.date));
          __privateSet(this, _Cr, null);
        }
        __privateGet(this, _Mr)?.remove();
        __privateSet(this, _Mr, null);
      }
    }
    resetEdited() {
      if (__privateGet(this, _or2)) {
        ({ contentsObj: __privateWrapper(this, _Cr)._, richText: __privateWrapper(this, _be2)._ } = __privateGet(this, _or2));
        __privateSet(this, _or2, null);
        __privateGet(this, _Mr)?.remove();
        __privateSet(this, _Mr, null);
        __privateSet(this, _F2, null);
      }
    }
    remove() {
      __privateGet(this, _Dr)?.abort();
      __privateSet(this, _Dr, null);
      __privateGet(this, _Mr)?.remove();
      __privateSet(this, _Mr, null);
      __privateSet(this, _Lr, false);
      __privateSet(this, __r, false);
      __privateGet(this, _Pr)?.remove();
      __privateSet(this, _Pr, null);
      if (this.trigger) for (const t2 of this.trigger) t2.classList.remove("popupTriggerArea");
    }
    forceHide() {
      __privateSet(this, _Lr, this.isVisible);
      __privateGet(this, _Lr) && (__privateGet(this, __t4).hidden = true);
    }
    maybeShow() {
      if (!__privateGet(this, _$2)) {
        __privateMethod(this, _PopupElement_instances, Nr_fn).call(this);
        if (__privateGet(this, _Lr)) {
          __privateGet(this, _Mr) || __privateMethod(this, _PopupElement_instances, vr_fn).call(this);
          __privateSet(this, _Lr, false);
          __privateGet(this, __t4).hidden = false;
        }
      }
    }
    get isVisible() {
      return !__privateGet(this, _$2) && false === __privateGet(this, __t4).hidden;
    }
  };
  _$2 = new WeakMap();
  _mr = new WeakMap();
  _fr = new WeakMap();
  _yr = new WeakMap();
  _Ar = new WeakMap();
  _xr = new WeakMap();
  __t4 = new WeakMap();
  _Cr = new WeakMap();
  _Er = new WeakMap();
  _Sr = new WeakMap();
  _Tr = new WeakMap();
  _kr = new WeakMap();
  __r = new WeakMap();
  _Mr = new WeakMap();
  _Dr = new WeakMap();
  _F2 = new WeakMap();
  _Pr = new WeakMap();
  _Ir = new WeakMap();
  _we2 = new WeakMap();
  _Fr = new WeakMap();
  _be2 = new WeakMap();
  _Br = new WeakMap();
  _or2 = new WeakMap();
  _Lr = new WeakMap();
  _Or = new WeakMap();
  _Rr = new WeakMap();
  _PopupElement_instances = new WeakSet();
  Nr_fn = function() {
    if (__privateGet(this, _Dr)) return;
    __privateSet(this, _Dr, new AbortController());
    const { signal: t2 } = __privateGet(this, _Dr);
    for (const e2 of this.trigger) {
      e2.addEventListener("click", __privateGet(this, _Ar), { signal: t2 });
      e2.addEventListener("pointerenter", __privateGet(this, _yr), { signal: t2 });
      e2.addEventListener("pointerleave", __privateGet(this, _fr), { signal: t2 });
      e2.classList.add("popupTriggerArea");
    }
    for (const e2 of __privateGet(this, _Sr)) e2.container?.addEventListener("keydown", __privateGet(this, _mr), { signal: t2 });
  };
  Ur_fn = function() {
    const t2 = __privateGet(this, _Sr).find((t3) => t3.hasCommentButton);
    t2 && __privateSet(this, _Ir, t2._normalizePoint(t2.commentButtonPosition));
  };
  zr_fn = function() {
    if (__privateGet(this, _Or).extraPopupElement && !__privateGet(this, _Or).editor) return;
    __privateGet(this, _Pr) || this.renderCommentButton();
    const [t2, e2] = __privateGet(this, _Ir), { style: i2 } = __privateGet(this, _Pr);
    i2.left = `calc(${t2}%)`;
    i2.top = `calc(${e2}% - var(--comment-button-dim))`;
  };
  Hr_fn = function() {
    if (!__privateGet(this, _Or).extraPopupElement) {
      __privateGet(this, _Pr) || this.renderCommentButton();
      __privateGet(this, _Pr).style.backgroundColor = this.commentButtonColor || "";
    }
  };
  Gr_get = function() {
    const t2 = __privateGet(this, _be2), e2 = __privateGet(this, _Cr);
    return !t2?.str || e2?.str && e2.str !== t2.str ? null : __privateGet(this, _be2).html || null;
  };
  Wr_get = function() {
    return __privateGet(this, _PopupElement_instances, Gr_get)?.attributes?.style?.fontSize || 0;
  };
  Vr_get = function() {
    return __privateGet(this, _PopupElement_instances, Gr_get)?.attributes?.style?.color || null;
  };
  jr_fn = function(t2) {
    const e2 = [], i2 = { str: t2, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: e2 }] } }, n2 = { style: { color: __privateGet(this, _PopupElement_instances, Vr_get), fontSize: __privateGet(this, _PopupElement_instances, Wr_get) ? `calc(${__privateGet(this, _PopupElement_instances, Wr_get)}px * var(--total-scale-factor))` : "" } };
    for (const i3 of t2.split("\n")) e2.push({ name: "span", value: i3, attributes: n2 });
    return i2;
  };
  er_fn2 = function(t2) {
    t2.altKey || t2.shiftKey || t2.ctrlKey || t2.metaKey || ("Enter" === t2.key || "Escape" === t2.key && __privateGet(this, __r)) && __privateMethod(this, _PopupElement_instances, wr_fn).call(this);
  };
  $r_fn = function() {
    if (null !== __privateGet(this, _F2)) return;
    const { page: { view: t2 }, viewport: { rawDims: { pageWidth: e2, pageHeight: i2, pageX: n2, pageY: s2 } } } = __privateGet(this, _Tr);
    let a2 = !!__privateGet(this, _kr), r2 = a2 ? __privateGet(this, _kr) : __privateGet(this, _Fr);
    for (const t3 of __privateGet(this, _Sr)) if (!r2 || null !== Util.intersect(t3.data.rect, r2)) {
      r2 = t3.data.rect;
      a2 = true;
      break;
    }
    const o2 = Util.normalizeRect([r2[0], t2[3] - r2[1] + t2[1], r2[2], t2[3] - r2[3] + t2[1]]), l2 = a2 ? r2[2] - r2[0] + 5 : 0, h2 = o2[0] + l2, c2 = o2[1];
    __privateSet(this, _F2, [100 * (h2 - n2) / e2, 100 * (c2 - s2) / i2]);
    const { style: d2 } = __privateGet(this, __t4);
    d2.left = `${__privateGet(this, _F2)[0]}%`;
    d2.top = `${__privateGet(this, _F2)[1]}%`;
  };
  wr_fn = function() {
    if (__privateGet(this, _$2)) __privateGet(this, _$2).toggleCommentPopup(this, false);
    else {
      __privateSet(this, __r, !__privateGet(this, __r));
      if (__privateGet(this, __r)) {
        __privateMethod(this, _PopupElement_instances, vr_fn).call(this);
        __privateGet(this, __t4).addEventListener("click", __privateGet(this, _Ar));
        __privateGet(this, __t4).addEventListener("keydown", __privateGet(this, _mr));
      } else {
        __privateMethod(this, _PopupElement_instances, br_fn).call(this);
        __privateGet(this, __t4).removeEventListener("click", __privateGet(this, _Ar));
        __privateGet(this, __t4).removeEventListener("keydown", __privateGet(this, _mr));
      }
    }
  };
  vr_fn = function() {
    __privateGet(this, _Mr) || this.render();
    if (this.isVisible) __privateGet(this, __r) && __privateGet(this, __t4).classList.add("focused");
    else {
      __privateMethod(this, _PopupElement_instances, $r_fn).call(this);
      __privateGet(this, __t4).hidden = false;
      __privateGet(this, __t4).style.zIndex = parseInt(__privateGet(this, __t4).style.zIndex, 10) + 1e3;
    }
  };
  br_fn = function() {
    __privateGet(this, __t4).classList.remove("focused");
    if (!__privateGet(this, __r) && this.isVisible) {
      __privateGet(this, __t4).hidden = true;
      __privateGet(this, __t4).style.zIndex = parseInt(__privateGet(this, __t4).style.zIndex, 10) - 1e3;
    }
  };
  var FreeTextAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      this.textContent = t2.data.textContent;
      this.textPosition = t2.data.textPosition;
      this.annotationEditorType = b.FREETEXT;
    }
    render() {
      this.container.classList.add("freeTextAnnotation");
      if (this.textContent) {
        const t2 = this.contentElement = document.createElement("div");
        t2.classList.add("annotationTextContent");
        t2.setAttribute("role", "comment");
        for (const e2 of this.textContent) {
          const i2 = document.createElement("span");
          i2.textContent = e2;
          t2.append(i2);
        }
        this.container.append(t2);
      }
      if (!this.data.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this._editOnDoubleClick();
      return this.container;
    }
  };
  var _Kr;
  var LineAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      __privateAdd(this, _Kr, null);
    }
    render() {
      this.container.classList.add("lineAnnotation");
      const { data: t2, width: e2, height: i2 } = this, n2 = this.svgFactory.create(e2, i2, true), s2 = __privateSet(this, _Kr, this.svgFactory.createElement("svg:line"));
      s2.setAttribute("x1", t2.rect[2] - t2.lineCoordinates[0]);
      s2.setAttribute("y1", t2.rect[3] - t2.lineCoordinates[1]);
      s2.setAttribute("x2", t2.rect[2] - t2.lineCoordinates[2]);
      s2.setAttribute("y2", t2.rect[3] - t2.lineCoordinates[3]);
      s2.setAttribute("stroke-width", t2.borderStyle.width || 1);
      s2.setAttribute("stroke", "transparent");
      s2.setAttribute("fill", "transparent");
      n2.append(s2);
      this.container.append(n2);
      if (!t2.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _Kr);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  _Kr = new WeakMap();
  var _Xr;
  var SquareAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      __privateAdd(this, _Xr, null);
    }
    render() {
      this.container.classList.add("squareAnnotation");
      const { data: t2, width: e2, height: i2 } = this, n2 = this.svgFactory.create(e2, i2, true), s2 = t2.borderStyle.width, a2 = __privateSet(this, _Xr, this.svgFactory.createElement("svg:rect"));
      a2.setAttribute("x", s2 / 2);
      a2.setAttribute("y", s2 / 2);
      a2.setAttribute("width", e2 - s2);
      a2.setAttribute("height", i2 - s2);
      a2.setAttribute("stroke-width", s2 || 1);
      a2.setAttribute("stroke", "transparent");
      a2.setAttribute("fill", "transparent");
      n2.append(a2);
      this.container.append(n2);
      if (!t2.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _Xr);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  _Xr = new WeakMap();
  var _qr;
  var CircleAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      __privateAdd(this, _qr, null);
    }
    render() {
      this.container.classList.add("circleAnnotation");
      const { data: t2, width: e2, height: i2 } = this, n2 = this.svgFactory.create(e2, i2, true), s2 = t2.borderStyle.width, a2 = __privateSet(this, _qr, this.svgFactory.createElement("svg:ellipse"));
      a2.setAttribute("cx", e2 / 2);
      a2.setAttribute("cy", i2 / 2);
      a2.setAttribute("rx", e2 / 2 - s2 / 2);
      a2.setAttribute("ry", i2 / 2 - s2 / 2);
      a2.setAttribute("stroke-width", s2 || 1);
      a2.setAttribute("stroke", "transparent");
      a2.setAttribute("fill", "transparent");
      n2.append(a2);
      this.container.append(n2);
      if (!t2.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _qr);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  _qr = new WeakMap();
  var _Yr;
  var PolylineAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      __privateAdd(this, _Yr, null);
      this.containerClassName = "polylineAnnotation";
      this.svgElementName = "svg:polyline";
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t2, vertices: e2, borderStyle: i2, popupRef: n2 }, width: s2, height: a2 } = this;
      if (!e2) return this.container;
      const r2 = this.svgFactory.create(s2, a2, true);
      let o2 = [];
      for (let i3 = 0, n3 = e2.length; i3 < n3; i3 += 2) {
        const n4 = e2[i3] - t2[0], s3 = t2[3] - e2[i3 + 1];
        o2.push(`${n4},${s3}`);
      }
      o2 = o2.join(" ");
      const l2 = __privateSet(this, _Yr, this.svgFactory.createElement(this.svgElementName));
      l2.setAttribute("points", o2);
      l2.setAttribute("stroke-width", i2.width || 1);
      l2.setAttribute("stroke", "transparent");
      l2.setAttribute("fill", "transparent");
      r2.append(l2);
      this.container.append(r2);
      if (!n2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _Yr);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  _Yr = new WeakMap();
  var PolygonAnnotationElement = class extends PolylineAnnotationElement {
    constructor(t2) {
      super(t2);
      this.containerClassName = "polygonAnnotation";
      this.svgElementName = "svg:polygon";
    }
  };
  var CaretAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      this.container.classList.add("caretAnnotation");
      if (!this.data.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      return this.container;
    }
  };
  var _Qr, _Jr, _InkAnnotationElement_instances, Zr_fn;
  var InkAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      __privateAdd(this, _InkAnnotationElement_instances);
      __privateAdd(this, _Qr, null);
      __privateAdd(this, _Jr, []);
      this.containerClassName = "inkAnnotation";
      this.svgElementName = "svg:polyline";
      this.annotationEditorType = "InkHighlight" === this.data.it ? b.HIGHLIGHT : b.INK;
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t2, rotation: e2, inkLists: i2, borderStyle: n2, popupRef: s2 } } = this, { transform: a2, width: r2, height: o2 } = __privateMethod(this, _InkAnnotationElement_instances, Zr_fn).call(this, e2, t2), l2 = this.svgFactory.create(r2, o2, true), h2 = __privateSet(this, _Qr, this.svgFactory.createElement("svg:g"));
      l2.append(h2);
      h2.setAttribute("stroke-width", n2.width || 1);
      h2.setAttribute("stroke-linecap", "round");
      h2.setAttribute("stroke-linejoin", "round");
      h2.setAttribute("stroke-miterlimit", 10);
      h2.setAttribute("stroke", "transparent");
      h2.setAttribute("fill", "transparent");
      h2.setAttribute("transform", a2);
      for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
        const e4 = this.svgFactory.createElement(this.svgElementName);
        __privateGet(this, _Jr).push(e4);
        e4.setAttribute("points", i2[t3].join(","));
        h2.append(e4);
      }
      if (!s2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.append(l2);
      this._editOnDoubleClick();
      return this.container;
    }
    updateEdited(t2) {
      super.updateEdited(t2);
      const { thickness: e2, points: i2, rect: n2 } = t2, s2 = __privateGet(this, _Qr);
      e2 >= 0 && s2.setAttribute("stroke-width", e2 || 1);
      if (i2) for (let t3 = 0, e3 = __privateGet(this, _Jr).length; t3 < e3; t3++) __privateGet(this, _Jr)[t3].setAttribute("points", i2[t3].join(","));
      if (n2) {
        const { transform: t3, width: e3, height: i3 } = __privateMethod(this, _InkAnnotationElement_instances, Zr_fn).call(this, this.data.rotation, n2);
        s2.parentElement.setAttribute("viewBox", `0 0 ${e3} ${i3}`);
        s2.setAttribute("transform", t3);
      }
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _Jr);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  _Qr = new WeakMap();
  _Jr = new WeakMap();
  _InkAnnotationElement_instances = new WeakSet();
  Zr_fn = function(t2, e2) {
    switch (t2) {
      case 90:
        return { transform: `rotate(90) translate(${-e2[0]},${e2[1]}) scale(1,-1)`, width: e2[3] - e2[1], height: e2[2] - e2[0] };
      case 180:
        return { transform: `rotate(180) translate(${-e2[2]},${e2[1]}) scale(1,-1)`, width: e2[2] - e2[0], height: e2[3] - e2[1] };
      case 270:
        return { transform: `rotate(270) translate(${-e2[2]},${e2[3]}) scale(1,-1)`, width: e2[3] - e2[1], height: e2[2] - e2[0] };
      default:
        return { transform: `translate(${-e2[0]},${e2[3]}) scale(1,-1)`, width: e2[2] - e2[0], height: e2[3] - e2[1] };
    }
  };
  var HighlightAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
      this.annotationEditorType = b.HIGHLIGHT;
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.classList.add("highlightAnnotation");
      this._editOnDoubleClick();
      if (t2) {
        const e3 = document.createElement("mark");
        e3.classList.add("overlaidText");
        e3.textContent = t2;
        this.container.append(e3);
      }
      return this.container;
    }
  };
  var UnderlineAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.classList.add("underlineAnnotation");
      if (t2) {
        const e3 = document.createElement("u");
        e3.classList.add("overlaidText");
        e3.textContent = t2;
        this.container.append(e3);
      }
      return this.container;
    }
  };
  var SquigglyAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.classList.add("squigglyAnnotation");
      if (t2) {
        const e3 = document.createElement("u");
        e3.classList.add("overlaidText");
        e3.textContent = t2;
        this.container.append(e3);
      }
      return this.container;
    }
  };
  var StrikeOutAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this.container.classList.add("strikeoutAnnotation");
      if (t2) {
        const e3 = document.createElement("s");
        e3.classList.add("overlaidText");
        e3.textContent = t2;
        this.container.append(e3);
      }
      return this.container;
    }
  };
  var StampAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
      this.annotationEditorType = b.STAMP;
    }
    render() {
      this.container.classList.add("stampAnnotation");
      this.container.setAttribute("role", "img");
      if (!this.data.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      }
      this._editOnDoubleClick();
      return this.container;
    }
  };
  var _to, _FileAttachmentAnnotationElement_instances, eo_fn;
  var FileAttachmentAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: true });
      __privateAdd(this, _FileAttachmentAnnotationElement_instances);
      __privateAdd(this, _to, null);
      const { fileId: e2, file: i2 } = this.data;
      this.filename = i2.filename;
      this.content = i2.content;
      this.fileId = e2;
      this.linkService.eventBus?.dispatch("fileattachmentannotation", { source: this, attachmentId: this.fileId, ...i2 });
    }
    render() {
      this.container.classList.add("fileAttachmentAnnotation");
      const { container: t2, data: e2 } = this;
      let i2;
      if (e2.hasAppearance || 0 === e2.fillAlpha) i2 = document.createElement("div");
      else {
        i2 = document.createElement("img");
        i2.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e2.name) ? "paperclip" : "pushpin"}.svg`;
        e2.fillAlpha && e2.fillAlpha < 1 && (i2.style = `filter: opacity(${Math.round(100 * e2.fillAlpha)}%);`);
      }
      i2.addEventListener("dblclick", __privateMethod(this, _FileAttachmentAnnotationElement_instances, eo_fn).bind(this));
      __privateSet(this, _to, i2);
      const { isMac: n2 } = FeatureTest.platform;
      t2.addEventListener("keydown", (t3) => {
        "Enter" === t3.key && (n2 ? t3.metaKey : t3.ctrlKey) && __privateMethod(this, _FileAttachmentAnnotationElement_instances, eo_fn).call(this);
      });
      if (!e2.popupRef && this.hasPopupData) {
        this.hasOwnCommentButton = true;
        this._createPopup();
      } else i2.classList.add("popupTriggerArea");
      t2.append(i2);
      return t2;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _to);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  };
  _to = new WeakMap();
  _FileAttachmentAnnotationElement_instances = new WeakSet();
  eo_fn = async function() {
    const { fileId: t2, filename: e2, content: i2 } = this, n2 = await this.linkService.getAttachmentContent(t2) || i2;
    n2 && this.downloadManager?.openOrDownloadData(n2, e2);
  };
  var _O2, _io, _no, _MediaAnnotationElement_instances, so_fn, ao_fn;
  var MediaAnnotationElement = class extends AnnotationElement {
    constructor(t2) {
      super(t2, { isRenderable: !!t2.data.richMedia });
      __privateAdd(this, _MediaAnnotationElement_instances);
      __privateAdd(this, _O2, new AbortController());
      __privateAdd(this, _io, null);
      __privateAdd(this, _no, null);
    }
    render() {
      this.container.classList.add("mediaAnnotation");
      const { filename: t2 } = this.data.richMedia, e2 = document.createElement("button");
      e2.className = "mediaPlayButton";
      e2.type = "button";
      e2.title = e2.ariaLabel = t2;
      e2.addEventListener("click", () => __privateMethod(this, _MediaAnnotationElement_instances, so_fn).call(this, e2), { signal: __privateGet(this, _O2).signal });
      this.container.append(e2);
      return this.container;
    }
    destroy() {
      __privateGet(this, _O2).abort();
      if (__privateGet(this, _no)) {
        __privateGet(this, _no).pause();
        __privateGet(this, _no).removeAttribute("src");
        __privateGet(this, _no).load();
        __privateSet(this, _no, null);
      }
      __privateMethod(this, _MediaAnnotationElement_instances, ao_fn).call(this);
    }
  };
  _O2 = new WeakMap();
  _io = new WeakMap();
  _no = new WeakMap();
  _MediaAnnotationElement_instances = new WeakSet();
  so_fn = async function(t2) {
    const { fileId: e2, filename: i2, contentType: n2 } = this.data.richMedia;
    t2.disabled = true;
    let s2;
    try {
      s2 = await this.linkService.getAttachmentContent(e2);
    } catch {
      return;
    } finally {
      t2.disabled = false;
    }
    if (!s2 || !t2.isConnected) return;
    const { signal: a2 } = __privateGet(this, _O2), r2 = URL.createObjectURL(new Blob([s2], { type: n2 }));
    __privateSet(this, _io, r2);
    const o2 = n2.startsWith("audio/"), l2 = document.createElement(o2 ? "audio" : "video");
    __privateSet(this, _no, l2);
    l2.className = "mediaContent";
    this._setBackgroundColor(l2);
    l2.src = r2;
    l2.title = i2;
    l2.controls = true;
    l2.autoplay = true;
    l2.tabIndex = 0;
    if (o2) {
      let t3 = false, e3 = false;
      const updateControls = () => {
        l2.controls = t3 || e3;
      };
      this.container.addEventListener("pointerenter", () => {
        t3 = true;
        updateControls();
      }, { signal: a2 });
      this.container.addEventListener("pointerleave", () => {
        t3 = false;
        updateControls();
      }, { signal: a2 });
      this.container.addEventListener("focusin", () => {
        e3 = true;
        updateControls();
      }, { signal: a2 });
      this.container.addEventListener("focusout", () => {
        e3 = false;
        updateControls();
      }, { signal: a2 });
    }
    l2.addEventListener("emptied", () => __privateMethod(this, _MediaAnnotationElement_instances, ao_fn).call(this, r2), { once: true, signal: a2 });
    t2.replaceWith(l2);
    l2.play().catch(() => {
    });
  };
  ao_fn = function(t2 = __privateGet(this, _io)) {
    if (t2 && t2 === __privateGet(this, _io)) {
      URL.revokeObjectURL(t2);
      __privateSet(this, _io, null);
    }
  };
  var _ro, _oo, _W2, _lo, _ho, _co, _Sr2, _do, _AnnotationLayer_instances, uo_fn, po_fn;
  var _AnnotationLayer = class _AnnotationLayer {
    constructor({ div: t2, accessibilityManager: e2, annotationCanvasMap: i2, annotationEditorUIManager: n2, page: s2, viewport: a2, structTreeLayer: r2, commentManager: o2, linkService: l2, annotationStorage: h2 }) {
      __privateAdd(this, _AnnotationLayer_instances);
      __privateAdd(this, _ro, null);
      __privateAdd(this, _oo, null);
      __privateAdd(this, _W2, null);
      __privateAdd(this, _lo, /* @__PURE__ */ new Map());
      __privateAdd(this, _ho, null);
      __privateAdd(this, _co, null);
      __privateAdd(this, _Sr2, []);
      __privateAdd(this, _do, false);
      __publicField(this, "zIndex", 0);
      this.div = t2;
      __privateSet(this, _ro, e2);
      __privateSet(this, _oo, i2);
      __privateSet(this, _ho, r2 || null);
      __privateSet(this, _co, l2 || null);
      __privateSet(this, _W2, h2 || new AnnotationStorage());
      this.page = s2;
      this.viewport = a2;
      this._annotationEditorUIManager = n2;
      this._commentManager = o2 || null;
    }
    hasEditableAnnotations() {
      return __privateGet(this, _lo).size > 0;
    }
    async render(t2) {
      const { annotations: e2, optionalContentConfig: i2 } = t2, n2 = this.div;
      setLayerDimensions(n2, this.viewport);
      const s2 = /* @__PURE__ */ new Map(), a2 = [], r2 = { data: null, layer: n2, linkService: __privateGet(this, _co), downloadManager: t2.downloadManager, imageResourcesPath: t2.imageResourcesPath || "", renderForms: false !== t2.renderForms, svgFactory: new DOMSVGFactory(), annotationStorage: __privateGet(this, _W2), enableComment: true === t2.enableComment, enableScripting: true === t2.enableScripting, hasJSActions: t2.hasJSActions, fieldObjects: t2.fieldObjects, parent: this, elements: null };
      for (const t3 of e2) {
        if (t3.noHTML) continue;
        const e3 = t3.annotationType === k.POPUP;
        if (e3) {
          const e4 = s2.get(t3.id);
          if (!e4) continue;
          if (!this._commentManager) {
            a2.push(t3);
            continue;
          }
          r2.elements = e4;
        } else if (t3.rect[2] === t3.rect[0] || t3.rect[3] === t3.rect[1]) continue;
        r2.data = t3;
        const n3 = AnnotationElementFactory.create(r2);
        if (!n3.isRenderable) continue;
        if (!e3) {
          __privateGet(this, _Sr2).push(n3);
          t3.popupRef && s2.getOrInsertComputed(t3.popupRef, makeArr).push(n3);
        }
        const o2 = n3.render();
        t3.hidden && (o2.style.visibility = "hidden");
        n3.updateOC(i2);
        if (n3._isEditable) {
          __privateGet(this, _lo).set(n3.data.id, n3);
          this._annotationEditorUIManager?.renderAnnotationElement(n3);
        }
      }
      await __privateMethod(this, _AnnotationLayer_instances, uo_fn).call(this);
      for (const t3 of a2) {
        const e3 = r2.elements = s2.get(t3.id);
        r2.data = t3;
        const i3 = AnnotationElementFactory.create(r2);
        if (!i3.isRenderable) continue;
        const n3 = i3.render();
        i3.contentElement.id = `${m}${t3.id}`;
        t3.hidden && (n3.style.visibility = "hidden");
        e3.at(-1).container.after(n3);
      }
      __privateMethod(this, _AnnotationLayer_instances, po_fn).call(this);
    }
    async addLinkAnnotations(t2) {
      const e2 = { data: null, layer: this.div, linkService: __privateGet(this, _co), svgFactory: new DOMSVGFactory(), parent: this };
      for (const i2 of t2) {
        i2.borderStyle || (i2.borderStyle = _AnnotationLayer._defaultBorderStyle);
        e2.data = i2;
        const t3 = AnnotationElementFactory.create(e2);
        if (t3.isRenderable) {
          t3.render();
          t3.contentElement.id = `${m}${i2.id}`;
          __privateGet(this, _Sr2).push(t3);
        }
      }
      await __privateMethod(this, _AnnotationLayer_instances, uo_fn).call(this);
    }
    update({ viewport: t2, optionalContentConfig: e2 }) {
      const i2 = this.div;
      this.viewport = t2;
      setLayerDimensions(i2, { rotation: t2.rotation });
      for (const t3 of __privateGet(this, _Sr2)) t3.updateOC(e2);
      __privateMethod(this, _AnnotationLayer_instances, po_fn).call(this);
      i2.hidden = false;
    }
    destroy() {
      for (const t2 of __privateGet(this, _Sr2)) {
        t2.destroy?.();
        __privateGet(this, _ro)?.removePointerInTextLayer(t2.contentElement);
      }
      __privateGet(this, _Sr2).length = 0;
      __privateGet(this, _lo).clear();
      this.div.replaceChildren();
    }
    refreshCanvases() {
      __privateMethod(this, _AnnotationLayer_instances, po_fn).call(this);
    }
    getEditableAnnotations() {
      return __privateGet(this, _lo).values();
    }
    getEditableAnnotation(t2) {
      return __privateGet(this, _lo).get(t2);
    }
    addFakeAnnotation(t2) {
      const { div: e2 } = this, { id: i2, rotation: n2 } = t2, s2 = new EditorAnnotationElement({ data: { id: i2, rect: t2.getPDFRect(), rotation: n2 }, editor: t2, layer: e2, parent: this, enableComment: !!this._commentManager, linkService: __privateGet(this, _co), annotationStorage: __privateGet(this, _W2) });
      s2.render();
      s2.contentElement.id = `${m}${i2}`;
      s2.createOrUpdatePopup();
      __privateGet(this, _Sr2).push(s2);
      return s2;
    }
    removeAnnotation(t2) {
      const e2 = __privateGet(this, _Sr2).findIndex((e3) => e3.data.id === t2);
      if (e2 < 0) return;
      const [i2] = __privateGet(this, _Sr2).splice(e2, 1);
      __privateGet(this, _ro)?.removePointerInTextLayer(i2.contentElement);
    }
    updateFakeAnnotations(t2) {
      if (0 !== t2.length) {
        for (const e2 of t2) e2.updateFakeAnnotationElement(this);
        __privateMethod(this, _AnnotationLayer_instances, uo_fn).call(this);
      }
    }
    togglePointerEvents(t2 = false) {
      this.div.classList.toggle("disabled", !t2);
    }
    static get _defaultBorderStyle() {
      return shadow(this, "_defaultBorderStyle", Object.freeze({ width: 1, rawWidth: 1, style: _, dashArray: [3], horizontalCornerRadius: 0, verticalCornerRadius: 0 }));
    }
  };
  _ro = new WeakMap();
  _oo = new WeakMap();
  _W2 = new WeakMap();
  _lo = new WeakMap();
  _ho = new WeakMap();
  _co = new WeakMap();
  _Sr2 = new WeakMap();
  _do = new WeakMap();
  _AnnotationLayer_instances = new WeakSet();
  uo_fn = async function() {
    if (0 === __privateGet(this, _Sr2).length) return;
    this.div.replaceChildren();
    const t2 = [];
    if (!__privateGet(this, _do)) {
      __privateSet(this, _do, true);
      for (const { contentElement: e3, data: { id: i2 } } of __privateGet(this, _Sr2)) {
        const n2 = e3.id = `${m}${i2}`;
        t2.push(__privateGet(this, _ho)?.getAriaAttributes(n2).then((t3) => {
          if (t3) for (const [i3, n3] of t3) e3.setAttribute(i3, n3);
        }));
      }
    }
    __privateGet(this, _Sr2).sort(({ data: { rect: [t3, e3, i2, n2] } }, { data: { rect: [s2, a2, r2, o2] } }) => {
      if (t3 === i2 && e3 === n2) return 1;
      if (s2 === r2 && a2 === o2) return -1;
      const l2 = (e3 + n2) / 2, h2 = (a2 + o2) / 2;
      if (l2 >= o2 && h2 <= e3) return -1;
      if (h2 >= n2 && l2 <= a2) return 1;
      return (t3 + i2) / 2 - (s2 + r2) / 2;
    });
    const e2 = document.createDocumentFragment();
    for (const t3 of __privateGet(this, _Sr2)) {
      e2.append(t3.container);
      this._commentManager ? (t3.extraPopupElement?.popup || t3.popup)?.renderCommentButton() : t3.extraPopupElement && e2.append(t3.extraPopupElement.render());
    }
    this.div.append(e2);
    await Promise.all(t2);
    if (__privateGet(this, _ro)) for (const t3 of __privateGet(this, _Sr2)) __privateGet(this, _ro).addPointerInTextLayer(t3.contentElement, false);
  };
  po_fn = function() {
    if (!__privateGet(this, _oo)) return;
    const t2 = this.div;
    for (const [e2, i2] of __privateGet(this, _oo)) {
      const n2 = t2.querySelector(`[data-annotation-id="${e2}"]`);
      if (!n2) continue;
      if (Array.isArray(i2)) for (const t3 of i2) {
        t3.className = "annotationContent";
        t3.ariaHidden = true;
      }
      else {
        i2.className = "annotationContent";
        i2.ariaHidden = true;
      }
      const s2 = [];
      for (const t3 of n2.children) "CANVAS" === t3.nodeName && s2.push(t3);
      for (const t3 of s2) t3.remove();
      const a2 = Array.isArray(i2) ? i2[0] : i2, { firstChild: r2 } = n2;
      r2 ? r2.classList.contains("annotationContent") ? r2.after(a2) : r2.before(a2) : n2.append(a2);
      if (Array.isArray(i2)) {
        let t3 = a2;
        for (let e3 = 1, n3 = i2.length; e3 < n3; e3++) {
          t3.after(i2[e3]);
          t3 = i2[e3];
        }
      }
      __privateGet(this, _oo).delete(e2);
      const o2 = __privateGet(this, _lo).get(e2);
      if (o2) if (o2._hasNoCanvas) {
        this._annotationEditorUIManager?.setMissingCanvas(e2, n2.id, i2);
        o2._hasNoCanvas = false;
      } else o2.canvas = i2;
    }
  };
  var AnnotationLayer = _AnnotationLayer;
  var Ut = /\r\n?|\n/g;
  var _go, _mo, _fo, _Wr, _FreeTextEditor_instances, bo_fn, Hr_fn2, vo_fn, yo_fn, _FreeTextEditor_static, Ao_fn, wo_fn, Co_fn, xo_fn, Eo_fn;
  var _FreeTextEditor = class _FreeTextEditor extends AnnotationEditor {
    constructor(t2) {
      super({ ...t2, name: "freeTextEditor" });
      __privateAdd(this, _FreeTextEditor_instances);
      __privateAdd(this, _go, "");
      __privateAdd(this, _mo, `${this.id}-editor`);
      __privateAdd(this, _fo, null);
      __privateAdd(this, _Wr);
      __publicField(this, "_colorPicker", null);
      this.color = t2.color || _FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor;
      __privateSet(this, _Wr, t2.fontSize || _FreeTextEditor._defaultFontSize);
      this.annotationElementId || this._uiManager.a11yAlert(AnnotationEditor._l10nAlert.freetext);
      this.canAddComment = false;
    }
    static get _keyboardManager() {
      const t2 = _FreeTextEditor.prototype, arrowChecker = (t3) => t3.isEmpty(), e2 = AnnotationEditorUIManager.TRANSLATE_SMALL, i2 = AnnotationEditorUIManager.TRANSLATE_BIG;
      return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t2.commitOrRemove, { bubbles: true }], [["ctrl+Enter", "mac+meta+Enter"], t2.commitOrRemove], [["Escape"], t2.commitOrRemove], [["ArrowLeft"], t2._translateEmpty, { args: [-e2, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2._translateEmpty, { args: [-i2, 0], checker: arrowChecker }], [["ArrowRight"], t2._translateEmpty, { args: [e2, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2._translateEmpty, { args: [i2, 0], checker: arrowChecker }], [["ArrowUp"], t2._translateEmpty, { args: [0, -e2], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2._translateEmpty, { args: [0, -i2], checker: arrowChecker }], [["ArrowDown"], t2._translateEmpty, { args: [0, e2], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2._translateEmpty, { args: [0, i2], checker: arrowChecker }]]));
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
      const i2 = getComputedStyle(document.documentElement);
      this._internalPadding = parseFloat(i2.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(t2, e2) {
      switch (t2) {
        case y.FREETEXT_SIZE:
          _FreeTextEditor._defaultFontSize = e2;
          break;
        case y.FREETEXT_COLOR:
          _FreeTextEditor._defaultColor = e2;
      }
    }
    updateParams(t2, e2) {
      switch (t2) {
        case y.FREETEXT_SIZE:
          __privateMethod(this, _FreeTextEditor_instances, bo_fn).call(this, e2);
          break;
        case y.FREETEXT_COLOR:
          __privateMethod(this, _FreeTextEditor_instances, Hr_fn2).call(this, e2);
      }
    }
    static get defaultPropertiesToUpdate() {
      return [[y.FREETEXT_SIZE, _FreeTextEditor._defaultFontSize], [y.FREETEXT_COLOR, _FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor]];
    }
    get propertiesToUpdate() {
      return [[y.FREETEXT_SIZE, __privateGet(this, _Wr)], [y.FREETEXT_COLOR, this.color]];
    }
    get toolbarButtons() {
      this._colorPicker || (this._colorPicker = new BasicColorPicker(this));
      return [["colorPicker", this._colorPicker]];
    }
    get colorType() {
      return y.FREETEXT_COLOR;
    }
    onUpdatedColor() {
      this.editorDiv.style.color = this.color;
      this._colorPicker?.update(this.color);
      super.onUpdatedColor();
    }
    _translateEmpty(t2, e2) {
      this._uiManager.translateSelectedEditors(t2, e2, true);
    }
    getInitialTranslation() {
      const t2 = this.parentScale;
      return [-_FreeTextEditor._internalPadding * t2, -(_FreeTextEditor._internalPadding + __privateGet(this, _Wr)) * t2];
    }
    rebuild() {
      if (this.parent) {
        super.rebuild();
        null !== this.div && (this.isAttachedToDOM || this.parent.add(this));
      }
    }
    enableEditMode() {
      if (!super.enableEditMode()) return false;
      this.overlayDiv.classList.remove("enabled");
      this.editorDiv.contentEditable = true;
      this._isDraggable = false;
      this.div.removeAttribute("aria-activedescendant");
      __privateSet(this, _fo, new AbortController());
      const t2 = this._uiManager.combinedSignal(__privateGet(this, _fo));
      this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: t2 });
      this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: t2 });
      this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: t2 });
      this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: t2 });
      this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: t2 });
      return true;
    }
    disableEditMode() {
      if (!super.disableEditMode()) return false;
      this.overlayDiv.classList.add("enabled");
      this.editorDiv.contentEditable = false;
      this.div.setAttribute("aria-activedescendant", __privateGet(this, _mo));
      this._isDraggable = true;
      __privateGet(this, _fo)?.abort();
      __privateSet(this, _fo, null);
      this.div.focus({ preventScroll: true });
      this.isEditing = false;
      this.parent.div.classList.add("freetextEditing");
      return true;
    }
    focusin(t2) {
      if (this._focusEventsAllowed) {
        super.focusin(t2);
        t2.target !== this.editorDiv && this.editorDiv.focus();
      }
    }
    onceAdded(t2) {
      if (!this.width) {
        this.enableEditMode();
        t2 && this.editorDiv.focus();
        this._initialOptions?.isCentered && this.center();
        this._initialOptions = null;
      }
    }
    isEmpty() {
      return !this.editorDiv || "" === this.editorDiv.innerText.trim();
    }
    remove() {
      this.isEditing = false;
      if (this.parent) {
        this.parent.setEditingState(true);
        this.parent.div.classList.add("freetextEditing");
      }
      super.remove();
    }
    commit() {
      if (!this.isInEditMode()) return;
      super.commit();
      this.disableEditMode();
      const t2 = __privateGet(this, _go), e2 = __privateSet(this, _go, __privateMethod(this, _FreeTextEditor_instances, vo_fn).call(this).trimEnd());
      if (t2 === e2) return;
      const setText = (t3) => {
        __privateSet(this, _go, t3);
        if (t3) {
          __privateMethod(this, _FreeTextEditor_instances, wo_fn).call(this);
          this._uiManager.rebuild(this);
          __privateMethod(this, _FreeTextEditor_instances, yo_fn).call(this);
        } else this.remove();
      };
      this.addCommands({ cmd: () => {
        setText(e2);
      }, undo: () => {
        setText(t2);
      }, mustExec: false });
      __privateMethod(this, _FreeTextEditor_instances, yo_fn).call(this);
    }
    shouldGetKeyboardEvents() {
      return this.isInEditMode();
    }
    enterInEditMode() {
      this.enableEditMode();
      this.editorDiv.focus();
    }
    keydown(t2) {
      if (t2.target === this.div && "Enter" === t2.key) {
        this.enterInEditMode();
        t2.preventDefault();
      }
    }
    editorDivKeydown(t2) {
      _FreeTextEditor._keyboardManager.exec(this, t2);
    }
    editorDivFocus(t2) {
      this.isEditing = true;
    }
    editorDivBlur(t2) {
      this.isEditing = false;
    }
    editorDivInput(t2) {
      this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
    }
    disableEditing() {
      this.editorDiv.setAttribute("role", "comment");
      this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
      this.editorDiv.setAttribute("role", "textbox");
      this.editorDiv.setAttribute("aria-multiline", true);
    }
    get canChangeContent() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      if (this._isCopy || this.annotationElementId) {
        t2 = this.x;
        e2 = this.y;
      }
      super.render();
      this.editorDiv = document.createElement("div");
      this.editorDiv.className = "internal";
      this.editorDiv.setAttribute("id", __privateGet(this, _mo));
      this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
      this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
      this.enableEditing();
      this.editorDiv.contentEditable = true;
      const { style: i2 } = this.editorDiv;
      i2.fontSize = `calc(${__privateGet(this, _Wr)}px * var(--total-scale-factor))`;
      i2.color = this.color;
      this.div.append(this.editorDiv);
      this.overlayDiv = document.createElement("div");
      this.overlayDiv.classList.add("overlay", "enabled");
      this.div.append(this.overlayDiv);
      if (this._isCopy || this.annotationElementId) {
        const [i3, n2] = this.parentDimensions;
        if (this.annotationElementId) {
          const { position: s2 } = this._initialData;
          let [a2, r2] = this.getInitialTranslation();
          [a2, r2] = this.pageTranslationToScreen(a2, r2);
          const [o2, l2] = this.pageDimensions, [h2, c2] = this.pageTranslation;
          let d2, u2;
          switch (this.rotation) {
            case 0:
              d2 = t2 + (s2[0] - h2) / o2;
              u2 = e2 + this.height - (s2[1] - c2) / l2;
              break;
            case 90:
              d2 = t2 + (s2[0] - h2) / o2;
              u2 = e2 - (s2[1] - c2) / l2;
              [a2, r2] = [r2, -a2];
              break;
            case 180:
              d2 = t2 - this.width + (s2[0] - h2) / o2;
              u2 = e2 - (s2[1] - c2) / l2;
              [a2, r2] = [-a2, -r2];
              break;
            case 270:
              d2 = t2 + (s2[0] - h2 - this.height * l2) / o2;
              u2 = e2 + (s2[1] - c2 - this.width * o2) / l2;
              [a2, r2] = [-r2, a2];
          }
          this.setAt(d2 * i3, u2 * n2, a2, r2);
        } else this._moveAfterPaste(t2, e2);
        __privateMethod(this, _FreeTextEditor_instances, wo_fn).call(this);
        this._isDraggable = true;
        this.editorDiv.contentEditable = false;
      } else {
        this._isDraggable = false;
        this.editorDiv.contentEditable = true;
      }
      return this.div;
    }
    editorDivPaste(t2) {
      var _a4, _b, _c2;
      const e2 = t2.clipboardData || window.clipboardData, { types: i2 } = e2;
      if (1 === i2.length && "text/plain" === i2[0]) return;
      t2.preventDefault();
      const n2 = __privateMethod(_a4 = _FreeTextEditor, _FreeTextEditor_static, xo_fn).call(_a4, e2.getData("text") || "").replaceAll(Ut, "\n");
      if (!n2) return;
      const s2 = window.getSelection();
      if (!s2.rangeCount) return;
      this.editorDiv.normalize();
      s2.deleteFromDocument();
      const a2 = s2.getRangeAt(0);
      if (!n2.includes("\n")) {
        a2.insertNode(document.createTextNode(n2));
        this.editorDiv.normalize();
        s2.collapseToStart();
        return;
      }
      const { startContainer: r2, startOffset: o2 } = a2, l2 = [], h2 = [];
      if (r2.nodeType === Node.TEXT_NODE) {
        const t3 = r2.parentElement;
        h2.push(r2.nodeValue.slice(o2).replaceAll(Ut, ""));
        if (t3 !== this.editorDiv) {
          let e3 = l2;
          for (const i3 of this.editorDiv.childNodes) i3 !== t3 ? e3.push(__privateMethod(_b = _FreeTextEditor, _FreeTextEditor_static, Ao_fn).call(_b, i3)) : e3 = h2;
        }
        l2.push(r2.nodeValue.slice(0, o2).replaceAll(Ut, ""));
      } else if (r2 === this.editorDiv) {
        let t3 = l2, e3 = 0;
        for (const i3 of this.editorDiv.childNodes) {
          e3++ === o2 && (t3 = h2);
          t3.push(__privateMethod(_c2 = _FreeTextEditor, _FreeTextEditor_static, Ao_fn).call(_c2, i3));
        }
      }
      __privateSet(this, _go, `${l2.join("\n")}${n2}${h2.join("\n")}`);
      __privateMethod(this, _FreeTextEditor_instances, wo_fn).call(this);
      const c2 = new Range();
      let d2 = Math.sumPrecise(l2.map((t3) => t3.length));
      for (const { firstChild: t3 } of this.editorDiv.childNodes) if (t3.nodeType === Node.TEXT_NODE) {
        const e3 = t3.nodeValue.length;
        if (d2 <= e3) {
          c2.setStart(t3, d2);
          c2.setEnd(t3, d2);
          break;
        }
        d2 -= e3;
      }
      s2.removeAllRanges();
      s2.addRange(c2);
    }
    get contentDiv() {
      return this.editorDiv;
    }
    getPDFRect() {
      const t2 = _FreeTextEditor._internalPadding * this.parentScale;
      return this.getRect(t2, t2);
    }
    static async deserialize(t2, e2, i2) {
      var _a4;
      let n2 = null;
      if (t2 instanceof FreeTextAnnotationElement) {
        const { data: { defaultAppearanceData: { fontSize: e3, fontColor: i3 }, rect: s3, rotation: a2, id: r2, popupRef: o2, richText: l2, contentsObj: h2, creationDate: c2, modificationDate: d2 }, textContent: u2, textPosition: p2, parent: { page: { pageNumber: g2 } } } = t2;
        if (!u2?.length) return null;
        n2 = t2 = { annotationType: b.FREETEXT, color: Array.from(i3), fontSize: e3, value: u2.join("\n"), position: p2, pageIndex: g2 - 1, rect: s3.slice(0), rotation: a2, annotationElementId: r2, id: r2, deleted: false, popupRef: o2, comment: h2?.str || null, richText: l2, creationDate: c2, modificationDate: d2 };
      }
      const s2 = await super.deserialize(t2, e2, i2);
      __privateSet(s2, _Wr, t2.fontSize);
      s2.color = Util.makeHexColor(...t2.color);
      __privateSet(s2, _go, __privateMethod(_a4 = _FreeTextEditor, _FreeTextEditor_static, xo_fn).call(_a4, t2.value));
      s2._initialData = n2;
      t2.comment && s2.setCommentData(t2);
      return s2;
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const e2 = AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i2 = Object.assign(super.serialize(t2), { color: e2, fontSize: __privateGet(this, _Wr), value: __privateMethod(this, _FreeTextEditor_instances, Co_fn).call(this) });
      this.addComment(i2);
      if (t2) {
        i2.isCopy = true;
        return i2;
      }
      if (this.annotationElementId && !__privateMethod(this, _FreeTextEditor_instances, Eo_fn).call(this, i2)) return null;
      i2.id = this.annotationElementId;
      return i2;
    }
    renderAnnotationElement(t2) {
      const e2 = super.renderAnnotationElement(t2);
      if (!e2) return null;
      const { style: i2 } = e2;
      i2.fontSize = `calc(${__privateGet(this, _Wr)}px * var(--total-scale-factor))`;
      i2.color = this.color;
      e2.replaceChildren();
      for (const t3 of __privateGet(this, _go).split("\n")) {
        const i3 = document.createElement("div");
        i3.append(t3 ? document.createTextNode(t3) : document.createElement("br"));
        e2.append(i3);
      }
      t2.updateEdited({ rect: this.getPDFRect(), popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : { text: __privateGet(this, _go) } });
      return e2;
    }
    resetAnnotationElement(t2) {
      super.resetAnnotationElement(t2);
      t2.resetEdited();
    }
  };
  _go = new WeakMap();
  _mo = new WeakMap();
  _fo = new WeakMap();
  _Wr = new WeakMap();
  _FreeTextEditor_instances = new WeakSet();
  bo_fn = function(t2) {
    const setFontsize = (t3) => {
      this.editorDiv.style.fontSize = `calc(${t3}px * var(--total-scale-factor))`;
      this.translate(0, -(t3 - __privateGet(this, _Wr)) * this.parentScale);
      __privateSet(this, _Wr, t3);
      __privateMethod(this, _FreeTextEditor_instances, yo_fn).call(this);
    }, e2 = __privateGet(this, _Wr);
    this.addCommands({ cmd: setFontsize.bind(this, t2), undo: setFontsize.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: y.FREETEXT_SIZE, overwriteIfSameType: true, keepUndo: true });
  };
  Hr_fn2 = function(t2) {
    const setColor = (t3) => {
      this.color = t3;
      this.onUpdatedColor();
    }, e2 = this.color;
    this.addCommands({ cmd: setColor.bind(this, t2), undo: setColor.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: y.FREETEXT_COLOR, overwriteIfSameType: true, keepUndo: true });
  };
  vo_fn = function() {
    var _a4;
    const t2 = [];
    this.editorDiv.normalize();
    let e2 = null;
    for (const i2 of this.editorDiv.childNodes) if (e2?.nodeType !== Node.TEXT_NODE || "BR" !== i2.nodeName) {
      t2.push(__privateMethod(_a4 = _FreeTextEditor, _FreeTextEditor_static, Ao_fn).call(_a4, i2));
      e2 = i2;
    }
    return t2.join("\n");
  };
  yo_fn = function() {
    const [t2, e2] = this.parentDimensions;
    let i2;
    if (this.isAttachedToDOM) i2 = this.div.getBoundingClientRect();
    else {
      const { currentLayer: t3, div: e3 } = this, n2 = e3.style.display, s2 = e3.classList.contains("hidden");
      e3.classList.remove("hidden");
      e3.style.display = "hidden";
      t3.div.append(this.div);
      i2 = e3.getBoundingClientRect();
      e3.remove();
      e3.style.display = n2;
      e3.classList.toggle("hidden", s2);
    }
    if (this.rotation % 180 == this.parentRotation % 180) {
      this.width = i2.width / t2;
      this.height = i2.height / e2;
    } else {
      this.width = i2.height / t2;
      this.height = i2.width / e2;
    }
    this.fixAndSetPosition();
  };
  _FreeTextEditor_static = new WeakSet();
  Ao_fn = function(t2) {
    return (t2.nodeType === Node.TEXT_NODE ? t2.nodeValue : t2.innerText).replaceAll(Ut, "");
  };
  wo_fn = function() {
    this.editorDiv.replaceChildren();
    if (__privateGet(this, _go)) for (const t2 of __privateGet(this, _go).split("\n")) {
      const e2 = document.createElement("div");
      e2.append(t2 ? document.createTextNode(t2) : document.createElement("br"));
      this.editorDiv.append(e2);
    }
  };
  Co_fn = function() {
    return __privateGet(this, _go).replaceAll("\xA0", " ");
  };
  xo_fn = function(t2) {
    return t2.replaceAll(" ", "\xA0");
  };
  Eo_fn = function(t2) {
    const { value: e2, fontSize: i2, color: n2, pageIndex: s2 } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || t2.value !== e2 || t2.fontSize !== i2 || t2.color.some((t3, e3) => t3 !== n2[e3]) || t2.pageIndex !== s2;
  };
  __privateAdd(_FreeTextEditor, _FreeTextEditor_static);
  __publicField(_FreeTextEditor, "_freeTextDefaultContent", "");
  __publicField(_FreeTextEditor, "_internalPadding", 0);
  __publicField(_FreeTextEditor, "_defaultColor", null);
  __publicField(_FreeTextEditor, "_defaultFontSize", 10);
  __publicField(_FreeTextEditor, "_type", "freetext");
  __publicField(_FreeTextEditor, "_editorType", b.FREETEXT);
  var FreeTextEditor = _FreeTextEditor;
  var Outline = class {
    toSVGPath() {
      unreachable("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
      unreachable("Abstract getter `box` must be implemented.");
    }
    serialize(t2, e2) {
      unreachable("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t2, e2, i2, n2, s2, a2) {
      a2 || (a2 = new Float32Array(t2.length));
      for (let r2 = 0, o2 = t2.length; r2 < o2; r2 += 2) {
        a2[r2] = e2 + t2[r2] * n2;
        a2[r2 + 1] = i2 + t2[r2 + 1] * s2;
      }
      return a2;
    }
    static _rescaleAndSwap(t2, e2, i2, n2, s2, a2) {
      a2 || (a2 = new Float32Array(t2.length));
      for (let r2 = 0, o2 = t2.length; r2 < o2; r2 += 2) {
        a2[r2] = e2 + t2[r2 + 1] * n2;
        a2[r2 + 1] = i2 + t2[r2] * s2;
      }
      return a2;
    }
    static _translate(t2, e2, i2, n2) {
      n2 || (n2 = new Float32Array(t2.length));
      for (let s2 = 0, a2 = t2.length; s2 < a2; s2 += 2) {
        n2[s2] = e2 + t2[s2];
        n2[s2 + 1] = i2 + t2[s2 + 1];
      }
      return n2;
    }
    static svgRound(t2) {
      return Math.round(1e4 * t2);
    }
    static _normalizePoint(t2, e2, i2, n2, s2) {
      switch (s2) {
        case 90:
          return [1 - e2 / i2, t2 / n2];
        case 180:
          return [1 - t2 / i2, 1 - e2 / n2];
        case 270:
          return [e2 / i2, 1 - t2 / n2];
        default:
          return [t2 / i2, e2 / n2];
      }
    }
    static createBezierPoints(t2, e2, i2, n2, s2, a2) {
      return [(t2 + 5 * i2) / 6, (e2 + 5 * n2) / 6, (5 * i2 + s2) / 6, (5 * n2 + a2) / 6, (i2 + s2) / 2, (n2 + a2) / 2];
    }
  };
  __publicField(Outline, "PRECISION", 1e-4);
  var _So, _To, _ko, __o, _Mo, _Do, _Po, _Io, _Fo, _Bo, _Lo, _Oo, _Ro, _No, _Uo, _Ho, _FreeDrawOutliner_instances, zo_fn, Go_fn, Vo_fn, Wo_fn, jo_fn, Ko_fn, $o_fn;
  var _FreeDrawOutliner = class _FreeDrawOutliner {
    constructor({ x: t2, y: e2 }, i2, n2, s2, a2, r2 = 0) {
      __privateAdd(this, _FreeDrawOutliner_instances);
      __privateAdd(this, _So);
      __privateAdd(this, _To, []);
      __privateAdd(this, _ko);
      __privateAdd(this, __o);
      __privateAdd(this, _Mo, []);
      __privateAdd(this, _Do, new Float32Array(18));
      __privateAdd(this, _Po);
      __privateAdd(this, _Io);
      __privateAdd(this, _Fo);
      __privateAdd(this, _Bo);
      __privateAdd(this, _Lo);
      __privateAdd(this, _Oo);
      __privateAdd(this, _Ro, []);
      __privateSet(this, _So, i2);
      __privateSet(this, _Oo, s2 * n2);
      __privateSet(this, __o, a2);
      __privateGet(this, _Do).set([NaN, NaN, NaN, NaN, t2, e2], 6);
      __privateSet(this, _ko, r2);
      __privateSet(this, _Bo, __privateGet(_FreeDrawOutliner, _No) * n2);
      __privateSet(this, _Fo, __privateGet(_FreeDrawOutliner, _Ho) * n2);
      __privateSet(this, _Lo, n2);
      __privateGet(this, _Ro).push(t2, e2);
    }
    isEmpty() {
      return isNaN(__privateGet(this, _Do)[8]);
    }
    add({ x: t2, y: e2 }) {
      __privateSet(this, _Po, t2);
      __privateSet(this, _Io, e2);
      const [i2, n2, s2, a2] = __privateGet(this, _So);
      let [r2, o2, l2, h2] = __privateGet(this, _Do).subarray(8, 12);
      const c2 = t2 - l2, d2 = e2 - h2, u2 = Math.hypot(c2, d2);
      if (u2 < __privateGet(this, _Fo)) return false;
      const p2 = u2 - __privateGet(this, _Bo), g2 = p2 / u2, m2 = g2 * c2, f2 = g2 * d2;
      let b2 = r2, y2 = o2;
      r2 = l2;
      o2 = h2;
      l2 += m2;
      h2 += f2;
      __privateGet(this, _Ro)?.push(t2, e2);
      const v2 = m2 / p2, A2 = -f2 / p2 * __privateGet(this, _Oo), w2 = v2 * __privateGet(this, _Oo);
      __privateGet(this, _Do).set(__privateGet(this, _Do).subarray(2, 8), 0);
      __privateGet(this, _Do).set([l2 + A2, h2 + w2], 4);
      __privateGet(this, _Do).set(__privateGet(this, _Do).subarray(14, 18), 12);
      __privateGet(this, _Do).set([l2 - A2, h2 - w2], 16);
      if (isNaN(__privateGet(this, _Do)[6])) {
        if (0 === __privateGet(this, _Mo).length) {
          __privateGet(this, _Do).set([r2 + A2, o2 + w2], 2);
          __privateGet(this, _Mo).push(NaN, NaN, NaN, NaN, (r2 + A2 - i2) / s2, (o2 + w2 - n2) / a2);
          __privateGet(this, _Do).set([r2 - A2, o2 - w2], 14);
          __privateGet(this, _To).push(NaN, NaN, NaN, NaN, (r2 - A2 - i2) / s2, (o2 - w2 - n2) / a2);
        }
        __privateGet(this, _Do).set([b2, y2, r2, o2, l2, h2], 6);
        return !this.isEmpty();
      }
      __privateGet(this, _Do).set([b2, y2, r2, o2, l2, h2], 6);
      if (Math.abs(Math.atan2(y2 - o2, b2 - r2) - Math.atan2(f2, m2)) < Math.PI / 2) {
        [r2, o2, l2, h2] = __privateGet(this, _Do).subarray(2, 6);
        __privateGet(this, _Mo).push(NaN, NaN, NaN, NaN, ((r2 + l2) / 2 - i2) / s2, ((o2 + h2) / 2 - n2) / a2);
        [r2, o2, b2, y2] = __privateGet(this, _Do).subarray(14, 18);
        __privateGet(this, _To).push(NaN, NaN, NaN, NaN, ((b2 + r2) / 2 - i2) / s2, ((y2 + o2) / 2 - n2) / a2);
        return true;
      }
      [b2, y2, r2, o2, l2, h2] = __privateGet(this, _Do).subarray(0, 6);
      __privateGet(this, _Mo).push(((b2 + 5 * r2) / 6 - i2) / s2, ((y2 + 5 * o2) / 6 - n2) / a2, ((5 * r2 + l2) / 6 - i2) / s2, ((5 * o2 + h2) / 6 - n2) / a2, ((r2 + l2) / 2 - i2) / s2, ((o2 + h2) / 2 - n2) / a2);
      [l2, h2, r2, o2, b2, y2] = __privateGet(this, _Do).subarray(12, 18);
      __privateGet(this, _To).push(((b2 + 5 * r2) / 6 - i2) / s2, ((y2 + 5 * o2) / 6 - n2) / a2, ((5 * r2 + l2) / 6 - i2) / s2, ((5 * o2 + h2) / 6 - n2) / a2, ((r2 + l2) / 2 - i2) / s2, ((o2 + h2) / 2 - n2) / a2);
      return true;
    }
    toSVGPath() {
      if (this.isEmpty()) return "";
      const t2 = __privateGet(this, _Mo), e2 = __privateGet(this, _To);
      if (isNaN(__privateGet(this, _Do)[6]) && !this.isEmpty()) return __privateMethod(this, _FreeDrawOutliner_instances, Go_fn).call(this);
      const i2 = [];
      i2.push(`M${t2[4]} ${t2[5]}`);
      for (let e3 = 6; e3 < t2.length; e3 += 6) isNaN(t2[e3]) ? i2.push(`L${t2[e3 + 4]} ${t2[e3 + 5]}`) : i2.push(`C${t2[e3]} ${t2[e3 + 1]} ${t2[e3 + 2]} ${t2[e3 + 3]} ${t2[e3 + 4]} ${t2[e3 + 5]}`);
      __privateMethod(this, _FreeDrawOutliner_instances, Wo_fn).call(this, i2);
      for (let t3 = e2.length - 6; t3 >= 6; t3 -= 6) isNaN(e2[t3]) ? i2.push(`L${e2[t3 + 4]} ${e2[t3 + 5]}`) : i2.push(`C${e2[t3]} ${e2[t3 + 1]} ${e2[t3 + 2]} ${e2[t3 + 3]} ${e2[t3 + 4]} ${e2[t3 + 5]}`);
      __privateMethod(this, _FreeDrawOutliner_instances, Vo_fn).call(this, i2);
      return i2.join(" ");
    }
    newFreeDrawOutline(t2, e2, i2, n2, s2, a2) {
      return new FreeDrawOutline(t2, e2, i2, n2, s2, a2);
    }
    getOutlines() {
      const t2 = __privateGet(this, _Mo), e2 = __privateGet(this, _To), i2 = __privateGet(this, _Do), [n2, s2, a2, r2] = __privateGet(this, _So), o2 = new Float32Array((__privateGet(this, _Ro)?.length ?? 0) + 2);
      for (let t3 = 0, e3 = o2.length - 2; t3 < e3; t3 += 2) {
        o2[t3] = (__privateGet(this, _Ro)[t3] - n2) / a2;
        o2[t3 + 1] = (__privateGet(this, _Ro)[t3 + 1] - s2) / r2;
      }
      o2[o2.length - 2] = (__privateGet(this, _Po) - n2) / a2;
      o2[o2.length - 1] = (__privateGet(this, _Io) - s2) / r2;
      if (isNaN(i2[6]) && !this.isEmpty()) return __privateMethod(this, _FreeDrawOutliner_instances, jo_fn).call(this, o2);
      const l2 = new Float32Array(__privateGet(this, _Mo).length + 24 + __privateGet(this, _To).length);
      let h2 = t2.length;
      for (let e3 = 0; e3 < h2; e3 += 2) if (isNaN(t2[e3])) l2[e3] = l2[e3 + 1] = NaN;
      else {
        l2[e3] = t2[e3];
        l2[e3 + 1] = t2[e3 + 1];
      }
      h2 = __privateMethod(this, _FreeDrawOutliner_instances, $o_fn).call(this, l2, h2);
      for (let t3 = e2.length - 6; t3 >= 6; t3 -= 6) for (let i3 = 0; i3 < 6; i3 += 2) if (isNaN(e2[t3 + i3])) {
        l2[h2] = l2[h2 + 1] = NaN;
        h2 += 2;
      } else {
        l2[h2] = e2[t3 + i3];
        l2[h2 + 1] = e2[t3 + i3 + 1];
        h2 += 2;
      }
      __privateMethod(this, _FreeDrawOutliner_instances, Ko_fn).call(this, l2, h2);
      return this.newFreeDrawOutline(l2, o2, __privateGet(this, _So), __privateGet(this, _Lo), __privateGet(this, _ko), __privateGet(this, __o));
    }
  };
  _So = new WeakMap();
  _To = new WeakMap();
  _ko = new WeakMap();
  __o = new WeakMap();
  _Mo = new WeakMap();
  _Do = new WeakMap();
  _Po = new WeakMap();
  _Io = new WeakMap();
  _Fo = new WeakMap();
  _Bo = new WeakMap();
  _Lo = new WeakMap();
  _Oo = new WeakMap();
  _Ro = new WeakMap();
  _No = new WeakMap();
  _Uo = new WeakMap();
  _Ho = new WeakMap();
  _FreeDrawOutliner_instances = new WeakSet();
  zo_fn = function() {
    const t2 = __privateGet(this, _Do).subarray(4, 6), e2 = __privateGet(this, _Do).subarray(16, 18), [i2, n2, s2, a2] = __privateGet(this, _So);
    return [(__privateGet(this, _Po) + (t2[0] - e2[0]) / 2 - i2) / s2, (__privateGet(this, _Io) + (t2[1] - e2[1]) / 2 - n2) / a2, (__privateGet(this, _Po) + (e2[0] - t2[0]) / 2 - i2) / s2, (__privateGet(this, _Io) + (e2[1] - t2[1]) / 2 - n2) / a2];
  };
  Go_fn = function() {
    const [t2, e2, i2, n2] = __privateGet(this, _So), [s2, a2, r2, o2] = __privateMethod(this, _FreeDrawOutliner_instances, zo_fn).call(this);
    return `M${(__privateGet(this, _Do)[2] - t2) / i2} ${(__privateGet(this, _Do)[3] - e2) / n2} L${(__privateGet(this, _Do)[4] - t2) / i2} ${(__privateGet(this, _Do)[5] - e2) / n2} L${s2} ${a2} L${r2} ${o2} L${(__privateGet(this, _Do)[16] - t2) / i2} ${(__privateGet(this, _Do)[17] - e2) / n2} L${(__privateGet(this, _Do)[14] - t2) / i2} ${(__privateGet(this, _Do)[15] - e2) / n2} Z`;
  };
  Vo_fn = function(t2) {
    const e2 = __privateGet(this, _To);
    t2.push(`L${e2[4]} ${e2[5]} Z`);
  };
  Wo_fn = function(t2) {
    const [e2, i2, n2, s2] = __privateGet(this, _So), a2 = __privateGet(this, _Do).subarray(4, 6), r2 = __privateGet(this, _Do).subarray(16, 18), [o2, l2, h2, c2] = __privateMethod(this, _FreeDrawOutliner_instances, zo_fn).call(this);
    t2.push(`L${(a2[0] - e2) / n2} ${(a2[1] - i2) / s2} L${o2} ${l2} L${h2} ${c2} L${(r2[0] - e2) / n2} ${(r2[1] - i2) / s2}`);
  };
  jo_fn = function(t2) {
    const e2 = __privateGet(this, _Do), [i2, n2, s2, a2] = __privateGet(this, _So), [r2, o2, l2, h2] = __privateMethod(this, _FreeDrawOutliner_instances, zo_fn).call(this), c2 = new Float32Array(36);
    c2.set([NaN, NaN, NaN, NaN, (e2[2] - i2) / s2, (e2[3] - n2) / a2, NaN, NaN, NaN, NaN, (e2[4] - i2) / s2, (e2[5] - n2) / a2, NaN, NaN, NaN, NaN, r2, o2, NaN, NaN, NaN, NaN, l2, h2, NaN, NaN, NaN, NaN, (e2[16] - i2) / s2, (e2[17] - n2) / a2, NaN, NaN, NaN, NaN, (e2[14] - i2) / s2, (e2[15] - n2) / a2], 0);
    return this.newFreeDrawOutline(c2, t2, __privateGet(this, _So), __privateGet(this, _Lo), __privateGet(this, _ko), __privateGet(this, __o));
  };
  Ko_fn = function(t2, e2) {
    const i2 = __privateGet(this, _To);
    t2.set([NaN, NaN, NaN, NaN, i2[4], i2[5]], e2);
    return e2 + 6;
  };
  $o_fn = function(t2, e2) {
    const i2 = __privateGet(this, _Do).subarray(4, 6), n2 = __privateGet(this, _Do).subarray(16, 18), [s2, a2, r2, o2] = __privateGet(this, _So), [l2, h2, c2, d2] = __privateMethod(this, _FreeDrawOutliner_instances, zo_fn).call(this);
    t2.set([NaN, NaN, NaN, NaN, (i2[0] - s2) / r2, (i2[1] - a2) / o2, NaN, NaN, NaN, NaN, l2, h2, NaN, NaN, NaN, NaN, c2, d2, NaN, NaN, NaN, NaN, (n2[0] - s2) / r2, (n2[1] - a2) / o2], e2);
    return e2 + 24;
  };
  __privateAdd(_FreeDrawOutliner, _No, 8);
  __privateAdd(_FreeDrawOutliner, _Uo, 2);
  __privateAdd(_FreeDrawOutliner, _Ho, __privateGet(_FreeDrawOutliner, _No) + __privateGet(_FreeDrawOutliner, _Uo));
  var FreeDrawOutliner = _FreeDrawOutliner;
  var _So2, _Xo, _ko2, __o2, _Ro2, _Lo2, _qo, _FreeDrawOutline_instances, Yo_fn;
  var FreeDrawOutline = class extends Outline {
    constructor(t2, e2, i2, n2, s2, a2) {
      super();
      __privateAdd(this, _FreeDrawOutline_instances);
      __privateAdd(this, _So2);
      __privateAdd(this, _Xo, new Float32Array(4));
      __privateAdd(this, _ko2);
      __privateAdd(this, __o2);
      __privateAdd(this, _Ro2);
      __privateAdd(this, _Lo2);
      __privateAdd(this, _qo);
      __privateSet(this, _qo, t2);
      __privateSet(this, _Ro2, e2);
      __privateSet(this, _So2, i2);
      __privateSet(this, _Lo2, n2);
      __privateSet(this, _ko2, s2);
      __privateSet(this, __o2, a2);
      this.firstPoint = [NaN, NaN];
      this.lastPoint = [NaN, NaN];
      __privateMethod(this, _FreeDrawOutline_instances, Yo_fn).call(this, a2);
      const [r2, o2, l2, h2] = __privateGet(this, _Xo);
      for (let e3 = 0, i3 = t2.length; e3 < i3; e3 += 2) {
        t2[e3] = (t2[e3] - r2) / l2;
        t2[e3 + 1] = (t2[e3 + 1] - o2) / h2;
      }
      for (let t3 = 0, i3 = e2.length; t3 < i3; t3 += 2) {
        e2[t3] = (e2[t3] - r2) / l2;
        e2[t3 + 1] = (e2[t3 + 1] - o2) / h2;
      }
    }
    toSVGPath() {
      const t2 = [`M${__privateGet(this, _qo)[4]} ${__privateGet(this, _qo)[5]}`];
      for (let e2 = 6, i2 = __privateGet(this, _qo).length; e2 < i2; e2 += 6) isNaN(__privateGet(this, _qo)[e2]) ? t2.push(`L${__privateGet(this, _qo)[e2 + 4]} ${__privateGet(this, _qo)[e2 + 5]}`) : t2.push(`C${__privateGet(this, _qo)[e2]} ${__privateGet(this, _qo)[e2 + 1]} ${__privateGet(this, _qo)[e2 + 2]} ${__privateGet(this, _qo)[e2 + 3]} ${__privateGet(this, _qo)[e2 + 4]} ${__privateGet(this, _qo)[e2 + 5]}`);
      t2.push("Z");
      return t2.join(" ");
    }
    serialize([t2, e2, i2, n2], s2) {
      const a2 = i2 - t2, r2 = n2 - e2;
      let o2, l2;
      switch (s2) {
        case 0:
          o2 = Outline._rescale(__privateGet(this, _qo), t2, n2, a2, -r2);
          l2 = Outline._rescale(__privateGet(this, _Ro2), t2, n2, a2, -r2);
          break;
        case 90:
          o2 = Outline._rescaleAndSwap(__privateGet(this, _qo), t2, e2, a2, r2);
          l2 = Outline._rescaleAndSwap(__privateGet(this, _Ro2), t2, e2, a2, r2);
          break;
        case 180:
          o2 = Outline._rescale(__privateGet(this, _qo), i2, e2, -a2, r2);
          l2 = Outline._rescale(__privateGet(this, _Ro2), i2, e2, -a2, r2);
          break;
        case 270:
          o2 = Outline._rescaleAndSwap(__privateGet(this, _qo), i2, n2, -a2, -r2);
          l2 = Outline._rescaleAndSwap(__privateGet(this, _Ro2), i2, n2, -a2, -r2);
      }
      return { outline: Array.from(o2), points: [Array.from(l2)] };
    }
    get box() {
      return __privateGet(this, _Xo);
    }
    newOutliner(t2, e2, i2, n2, s2, a2 = 0) {
      return new FreeDrawOutliner(t2, e2, i2, n2, s2, a2);
    }
    getNewOutline(t2, e2) {
      const [i2, n2, s2, a2] = __privateGet(this, _Xo), [r2, o2, l2, h2] = __privateGet(this, _So2), c2 = s2 * l2, d2 = a2 * h2, u2 = i2 * l2 + r2, p2 = n2 * h2 + o2, g2 = this.newOutliner({ x: __privateGet(this, _Ro2)[0] * c2 + u2, y: __privateGet(this, _Ro2)[1] * d2 + p2 }, __privateGet(this, _So2), __privateGet(this, _Lo2), t2, __privateGet(this, __o2), e2 ?? __privateGet(this, _ko2));
      for (let t3 = 2; t3 < __privateGet(this, _Ro2).length; t3 += 2) g2.add({ x: __privateGet(this, _Ro2)[t3] * c2 + u2, y: __privateGet(this, _Ro2)[t3 + 1] * d2 + p2 });
      return g2.getOutlines();
    }
  };
  _So2 = new WeakMap();
  _Xo = new WeakMap();
  _ko2 = new WeakMap();
  __o2 = new WeakMap();
  _Ro2 = new WeakMap();
  _Lo2 = new WeakMap();
  _qo = new WeakMap();
  _FreeDrawOutline_instances = new WeakSet();
  Yo_fn = function(t2) {
    const i2 = __privateGet(this, _qo);
    let n2 = i2[4], s2 = i2[5];
    const a2 = [n2, s2, n2, s2];
    let r2 = n2, o2 = s2, l2 = n2, h2 = s2;
    const c2 = t2 ? Math.max : Math.min, d2 = new Float32Array(4);
    for (let t3 = 6, u3 = i2.length; t3 < u3; t3 += 6) {
      const u4 = i2[t3 + 4], p2 = i2[t3 + 5];
      if (isNaN(i2[t3])) {
        Util.pointBoundingBox(u4, p2, a2);
        if (o2 > p2) {
          r2 = u4;
          o2 = p2;
        } else o2 === p2 && (r2 = c2(r2, u4));
        if (h2 < p2) {
          l2 = u4;
          h2 = p2;
        } else h2 === p2 && (l2 = c2(l2, u4));
      } else {
        d2.set(e, 0);
        Util.bezierBoundingBox(n2, s2, ...i2.slice(t3, t3 + 6), d2);
        Util.rectBoundingBox(...d2, a2);
        if (o2 > d2[1]) {
          r2 = d2[0];
          o2 = d2[1];
        } else o2 === d2[1] && (r2 = c2(r2, d2[0]));
        if (h2 < d2[3]) {
          l2 = d2[2];
          h2 = d2[3];
        } else h2 === d2[3] && (l2 = c2(l2, d2[2]));
      }
      n2 = u4;
      s2 = p2;
    }
    const u2 = __privateGet(this, _Xo);
    u2[0] = a2[0] - __privateGet(this, _ko2);
    u2[1] = a2[1] - __privateGet(this, _ko2);
    u2[2] = a2[2] - a2[0] + 2 * __privateGet(this, _ko2);
    u2[3] = a2[3] - a2[1] + 2 * __privateGet(this, _ko2);
    this.firstPoint = [r2, o2];
    this.lastPoint = [l2, h2];
  };
  var _So3, _Qo, _Jo, _Zo, _tl, _HighlightOutliner_instances, sl_fn, al_fn, il_fn, nl_fn, el_fn;
  var HighlightOutliner = class {
    constructor(t2, i2 = 0, n2 = 0, s2 = true) {
      __privateAdd(this, _HighlightOutliner_instances);
      __privateAdd(this, _So3);
      __privateAdd(this, _Qo);
      __privateAdd(this, _Jo);
      __privateAdd(this, _Zo, []);
      __privateAdd(this, _tl, []);
      const a2 = e.slice(), r2 = 1e-4;
      for (const { x: e2, y: n3, width: s3, height: o3 } of t2) {
        const t3 = Math.floor((e2 - i2) / r2) * r2, l3 = Math.ceil((e2 + s3 + i2) / r2) * r2, h3 = Math.floor((n3 - i2) / r2) * r2, c3 = Math.ceil((n3 + o3 + i2) / r2) * r2, d3 = [t3, h3, c3, true], u3 = [l3, h3, c3, false];
        __privateGet(this, _Zo).push(d3, u3);
        Util.rectBoundingBox(t3, h3, l3, c3, a2);
      }
      const o2 = a2[2] - a2[0] + 2 * n2, l2 = a2[3] - a2[1] + 2 * n2, h2 = a2[0] - n2, c2 = a2[1] - n2;
      let d2 = s2 ? -1 / 0 : 1 / 0, u2 = 1 / 0;
      const p2 = __privateGet(this, _Zo).at(s2 ? -1 : -2), g2 = [p2[0], p2[2]];
      for (const t3 of __privateGet(this, _Zo)) {
        const [e2, i3, n3, a3] = t3;
        if (!a3 && s2) if (i3 < u2) {
          u2 = i3;
          d2 = e2;
        } else i3 === u2 && (d2 = Math.max(d2, e2));
        else if (a3 && !s2) if (i3 < u2) {
          u2 = i3;
          d2 = e2;
        } else i3 === u2 && (d2 = Math.min(d2, e2));
        t3[0] = (e2 - h2) / o2;
        t3[1] = (i3 - c2) / l2;
        t3[2] = (n3 - c2) / l2;
      }
      __privateSet(this, _So3, new Float32Array([h2, c2, o2, l2]));
      __privateSet(this, _Qo, [d2, u2]);
      __privateSet(this, _Jo, g2);
    }
    getOutlines() {
      __privateGet(this, _Zo).sort((t3, e2) => t3[0] - e2[0] || t3[1] - e2[1] || t3[2] - e2[2]);
      const t2 = [];
      for (const e2 of __privateGet(this, _Zo)) if (e2[3]) {
        t2.push(...__privateMethod(this, _HighlightOutliner_instances, el_fn).call(this, e2));
        __privateMethod(this, _HighlightOutliner_instances, il_fn).call(this, e2);
      } else {
        __privateMethod(this, _HighlightOutliner_instances, nl_fn).call(this, e2);
        t2.push(...__privateMethod(this, _HighlightOutliner_instances, el_fn).call(this, e2));
      }
      return __privateMethod(this, _HighlightOutliner_instances, sl_fn).call(this, t2);
    }
  };
  _So3 = new WeakMap();
  _Qo = new WeakMap();
  _Jo = new WeakMap();
  _Zo = new WeakMap();
  _tl = new WeakMap();
  _HighlightOutliner_instances = new WeakSet();
  sl_fn = function(t2) {
    const e2 = [], i2 = /* @__PURE__ */ new Set();
    for (const i3 of t2) {
      const [t3, n3, s3] = i3;
      e2.push([t3, n3, i3], [t3, s3, i3]);
    }
    e2.sort((t3, e3) => t3[1] - e3[1] || t3[0] - e3[0]);
    for (let t3 = 0, n3 = e2.length; t3 < n3; t3 += 2) {
      const n4 = e2[t3][2], s3 = e2[t3 + 1][2];
      n4.push(s3);
      s3.push(n4);
      i2.add(n4);
      i2.add(s3);
    }
    const n2 = [];
    let s2;
    for (; i2.size > 0; ) {
      const t3 = i2.values().next().value;
      let [e3, a2, r2, o2, l2] = t3;
      i2.delete(t3);
      let h2 = e3, c2 = a2;
      s2 = [e3, r2];
      n2.push(s2);
      for (; ; ) {
        let t4;
        if (i2.has(o2)) t4 = o2;
        else {
          if (!i2.has(l2)) break;
          t4 = l2;
        }
        i2.delete(t4);
        [e3, a2, r2, o2, l2] = t4;
        if (h2 !== e3) {
          s2.push(h2, c2, e3, c2 === a2 ? a2 : r2);
          h2 = e3;
        }
        c2 = c2 === a2 ? r2 : a2;
      }
      s2.push(h2, c2);
    }
    return new HighlightOutline(n2, __privateGet(this, _So3), __privateGet(this, _Qo), __privateGet(this, _Jo));
  };
  al_fn = function(t2) {
    const e2 = __privateGet(this, _tl);
    let i2 = 0, n2 = e2.length - 1;
    for (; i2 <= n2; ) {
      const s2 = i2 + n2 >> 1, a2 = e2[s2][0];
      if (a2 === t2) return s2;
      a2 < t2 ? i2 = s2 + 1 : n2 = s2 - 1;
    }
    return n2 + 1;
  };
  il_fn = function([, t2, e2]) {
    const i2 = __privateMethod(this, _HighlightOutliner_instances, al_fn).call(this, t2);
    __privateGet(this, _tl).splice(i2, 0, [t2, e2]);
  };
  nl_fn = function([, t2, e2]) {
    const i2 = __privateMethod(this, _HighlightOutliner_instances, al_fn).call(this, t2);
    for (let n2 = i2; n2 < __privateGet(this, _tl).length; n2++) {
      const [i3, s2] = __privateGet(this, _tl)[n2];
      if (i3 !== t2) break;
      if (i3 === t2 && s2 === e2) {
        __privateGet(this, _tl).splice(n2, 1);
        return;
      }
    }
    for (let n2 = i2 - 1; n2 >= 0; n2--) {
      const [i3, s2] = __privateGet(this, _tl)[n2];
      if (i3 !== t2) break;
      if (i3 === t2 && s2 === e2) {
        __privateGet(this, _tl).splice(n2, 1);
        return;
      }
    }
  };
  el_fn = function(t2) {
    const [e2, i2, n2] = t2, s2 = [[e2, i2, n2]], a2 = __privateMethod(this, _HighlightOutliner_instances, al_fn).call(this, n2);
    for (let t3 = 0; t3 < a2; t3++) {
      const [i3, n3] = __privateGet(this, _tl)[t3];
      for (let t4 = 0, a3 = s2.length; t4 < a3; t4++) {
        const [, r2, o2] = s2[t4];
        if (!(n3 <= r2 || o2 <= i3)) if (r2 >= i3) if (o2 > n3) s2[t4][1] = n3;
        else {
          if (1 === a3) return [];
          s2.splice(t4, 1);
          t4--;
          a3--;
        }
        else {
          s2[t4][2] = i3;
          o2 > n3 && s2.push([e2, n3, o2]);
        }
      }
    }
    return s2;
  };
  var _So4, _rl;
  var HighlightOutline = class extends Outline {
    constructor(t2, e2, i2, n2) {
      super();
      __privateAdd(this, _So4);
      __privateAdd(this, _rl);
      __privateSet(this, _rl, t2);
      __privateSet(this, _So4, e2);
      this.firstPoint = i2;
      this.lastPoint = n2;
    }
    toSVGPath() {
      const t2 = [];
      for (const e2 of __privateGet(this, _rl)) {
        let [i2, n2] = e2;
        t2.push(`M${i2} ${n2}`);
        for (let s2 = 2; s2 < e2.length; s2 += 2) {
          const a2 = e2[s2], r2 = e2[s2 + 1];
          if (a2 === i2) {
            t2.push(`V${r2}`);
            n2 = r2;
          } else if (r2 === n2) {
            t2.push(`H${a2}`);
            i2 = a2;
          }
        }
        t2.push("Z");
      }
      return t2.join(" ");
    }
    serialize([t2, e2, i2, n2], s2) {
      const a2 = [], r2 = i2 - t2, o2 = n2 - e2;
      for (const e3 of __privateGet(this, _rl)) {
        const i3 = new Array(e3.length);
        for (let s3 = 0; s3 < e3.length; s3 += 2) {
          i3[s3] = t2 + e3[s3] * r2;
          i3[s3 + 1] = n2 - e3[s3 + 1] * o2;
        }
        a2.push(i3);
      }
      return a2;
    }
    get box() {
      return __privateGet(this, _So4);
    }
  };
  _So4 = new WeakMap();
  _rl = new WeakMap();
  var FreeHighlightOutliner = class extends FreeDrawOutliner {
    newFreeDrawOutline(t2, e2, i2, n2, s2, a2) {
      return new FreeHighlightOutline(t2, e2, i2, n2, s2, a2);
    }
  };
  var FreeHighlightOutline = class extends FreeDrawOutline {
    newOutliner(t2, e2, i2, n2, s2, a2 = 0) {
      return new FreeHighlightOutliner(t2, e2, i2, n2, s2, a2);
    }
  };
  var _ol, _ll, _hl, _cl, _a3, _dl, _ul, _pl, _gl, _ml, _T4, _fl, _Qo2, _Jo2, _bl, _ye2, _Oo2, _yl, _HighlightEditor_instances, wl_fn, vl_fn, Hr_fn3, Cl_fn, El_fn, Tl_fn, Al_fn, _HighlightEditor_static, xl_fn, kl_fn, _l_fn, Sl_fn, Ml_fn, Dl_fn, Il_fn, Pl_fn, Eo_fn2;
  var _HighlightEditor = class _HighlightEditor extends AnnotationEditor {
    constructor(t2) {
      super({ ...t2, name: "highlightEditor" });
      __privateAdd(this, _HighlightEditor_instances);
      __privateAdd(this, _ol, null);
      __privateAdd(this, _ll, 0);
      __privateAdd(this, _hl);
      __privateAdd(this, _cl, null);
      __privateAdd(this, _a3, null);
      __privateAdd(this, _dl, null);
      __privateAdd(this, _ul, null);
      __privateAdd(this, _pl, 0);
      __privateAdd(this, _gl, null);
      __privateAdd(this, _ml, null);
      __privateAdd(this, _T4, null);
      __privateAdd(this, _fl, false);
      __privateAdd(this, _Qo2, null);
      __privateAdd(this, _Jo2, null);
      __privateAdd(this, _bl, null);
      __privateAdd(this, _ye2, "");
      __privateAdd(this, _Oo2);
      __privateAdd(this, _yl, "");
      this.color = t2.color || _HighlightEditor._defaultColor;
      __privateSet(this, _Oo2, t2.thickness || _HighlightEditor._defaultThickness);
      this.opacity = t2.opacity || _HighlightEditor._defaultOpacity;
      __privateSet(this, _hl, t2.boxes || null);
      __privateSet(this, _yl, t2.methodOfCreation || "");
      __privateSet(this, _ye2, t2.text || "");
      this._isDraggable = false;
      this.defaultL10nId = "pdfjs-editor-highlight-editor";
      if (t2.highlightId > -1) {
        __privateSet(this, _fl, true);
        __privateMethod(this, _HighlightEditor_instances, vl_fn).call(this, t2);
        __privateMethod(this, _HighlightEditor_instances, Al_fn).call(this);
      } else if (__privateGet(this, _hl)) {
        __privateSet(this, _ol, t2.anchorNode);
        __privateSet(this, _ll, t2.anchorOffset);
        __privateSet(this, _ul, t2.focusNode);
        __privateSet(this, _pl, t2.focusOffset);
        __privateMethod(this, _HighlightEditor_instances, wl_fn).call(this);
        __privateMethod(this, _HighlightEditor_instances, Al_fn).call(this);
        this.rotate(this.rotation);
      }
      this.annotationElementId || this._uiManager.a11yAlert(AnnotationEditor._l10nAlert.highlight);
    }
    static get _keyboardManager() {
      const t2 = _HighlightEditor.prototype;
      return shadow(this, "_keyboardManager", new KeyboardManager([[["ArrowLeft"], t2._moveCaret, { args: [0] }], [["ArrowRight"], t2._moveCaret, { args: [1] }], [["ArrowUp"], t2._moveCaret, { args: [2] }], [["ArrowDown"], t2._moveCaret, { args: [3] }]]));
    }
    get telemetryInitialData() {
      return { action: "added", type: __privateGet(this, _fl) ? "free_highlight" : "highlight", color: this._uiManager.getNonHCMColorName(this.color), thickness: __privateGet(this, _Oo2), methodOfCreation: __privateGet(this, _yl) };
    }
    get telemetryFinalData() {
      return { type: "highlight", color: this._uiManager.getNonHCMColorName(this.color) };
    }
    static computeTelemetryFinalData(t2) {
      return { numberOfColors: t2.get("color").size };
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
      _HighlightEditor._defaultColor || (_HighlightEditor._defaultColor = e2.highlightColors?.values().next().value || "#fff066");
    }
    static updateDefaultParams(t2, e2) {
      switch (t2) {
        case y.HIGHLIGHT_COLOR:
          _HighlightEditor._defaultColor = e2;
          break;
        case y.HIGHLIGHT_THICKNESS:
          _HighlightEditor._defaultThickness = e2;
      }
    }
    translateInPage(t2, e2) {
    }
    get toolbarPosition() {
      return __privateGet(this, _Jo2);
    }
    get commentButtonPosition() {
      return __privateGet(this, _Qo2);
    }
    updateParams(t2, e2) {
      switch (t2) {
        case y.HIGHLIGHT_COLOR:
          __privateMethod(this, _HighlightEditor_instances, Hr_fn3).call(this, e2);
          break;
        case y.HIGHLIGHT_THICKNESS:
          __privateMethod(this, _HighlightEditor_instances, Cl_fn).call(this, e2);
      }
    }
    static get defaultPropertiesToUpdate() {
      return [[y.HIGHLIGHT_COLOR, _HighlightEditor._defaultColor], [y.HIGHLIGHT_THICKNESS, _HighlightEditor._defaultThickness]];
    }
    get propertiesToUpdate() {
      return [[y.HIGHLIGHT_COLOR, this.color || _HighlightEditor._defaultColor], [y.HIGHLIGHT_THICKNESS, __privateGet(this, _Oo2) || _HighlightEditor._defaultThickness], [y.HIGHLIGHT_FREE, __privateGet(this, _fl)]];
    }
    onUpdatedColor() {
      this.parent?.drawLayer.updateProperties(__privateGet(this, _T4), { root: { fill: this.color, "fill-opacity": this.opacity } });
      __privateGet(this, _a3)?.updateColor(this.color);
      super.onUpdatedColor();
    }
    get toolbarButtons() {
      if (this._uiManager.highlightColors) {
        return [["colorPicker", __privateSet(this, _a3, new ColorPicker({ editor: this }))]];
      }
      return super.toolbarButtons;
    }
    disableEditing() {
      super.disableEditing();
      this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing();
      this.div.classList.toggle("disabled", false);
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(__privateMethod(this, _HighlightEditor_instances, Sl_fn).call(this));
    }
    getBaseTranslation() {
      return [0, 0];
    }
    getRect(t2, e2) {
      return super.getRect(t2, e2, __privateMethod(this, _HighlightEditor_instances, Sl_fn).call(this));
    }
    onceAdded(t2) {
      this.annotationElementId || this.parent.addUndoableEditor(this);
      t2 && this.div.focus();
    }
    remove() {
      __privateMethod(this, _HighlightEditor_instances, Tl_fn).call(this);
      this._reportTelemetry({ action: "deleted" });
      super.remove();
    }
    rebuild() {
      if (this.parent) {
        super.rebuild();
        if (null !== this.div) {
          __privateMethod(this, _HighlightEditor_instances, Al_fn).call(this);
          this.isAttachedToDOM || this.parent.add(this);
        }
      }
    }
    setParent(t2) {
      let e2 = false;
      if (this.parent && !t2) __privateMethod(this, _HighlightEditor_instances, Tl_fn).call(this);
      else if (t2) {
        __privateMethod(this, _HighlightEditor_instances, Al_fn).call(this, t2);
        e2 = !this.parent && this.div?.classList.contains("selectedEditor");
      }
      super.setParent(t2);
      this.show(this._isVisible);
      e2 && this.select();
    }
    rotate(t2) {
      var _a4, _b, _c2;
      const { drawLayer: e2 } = this.parent;
      let i2;
      if (__privateGet(this, _fl)) {
        t2 = (t2 - this.rotation + 360) % 360;
        i2 = __privateMethod(_a4 = _HighlightEditor, _HighlightEditor_static, xl_fn).call(_a4, __privateGet(this, _ml).box, t2);
      } else i2 = __privateMethod(_b = _HighlightEditor, _HighlightEditor_static, xl_fn).call(_b, [this.x, this.y, this.width, this.height], t2);
      e2.updateProperties(__privateGet(this, _T4), { bbox: i2, root: { "data-main-rotation": t2 } });
      e2.updateProperties(__privateGet(this, _bl), { bbox: __privateMethod(_c2 = _HighlightEditor, _HighlightEditor_static, xl_fn).call(_c2, __privateGet(this, _dl).box, t2), root: { "data-main-rotation": t2 } });
    }
    render() {
      if (this.div) return this.div;
      const t2 = super.render();
      if (__privateGet(this, _ye2)) {
        t2.setAttribute("aria-label", __privateGet(this, _ye2));
        t2.setAttribute("role", "mark");
      }
      __privateGet(this, _fl) ? t2.classList.add("free") : this.div.addEventListener("keydown", __privateMethod(this, _HighlightEditor_instances, kl_fn).bind(this), { signal: this._uiManager._signal });
      const e2 = __privateSet(this, _gl, document.createElement("div"));
      t2.append(e2);
      e2.setAttribute("aria-hidden", "true");
      e2.className = "internal";
      e2.style.clipPath = __privateGet(this, _cl);
      this.setDims();
      bindEvents(this, __privateGet(this, _gl), ["pointerover", "pointerleave"]);
      this.enableEditing();
      return t2;
    }
    pointerover() {
      this.isSelected || this.parent?.drawLayer.updateProperties(__privateGet(this, _bl), { rootClass: { hovered: true } });
    }
    pointerleave() {
      this.isSelected || this.parent?.drawLayer.updateProperties(__privateGet(this, _bl), { rootClass: { hovered: false } });
    }
    _moveCaret(t2) {
      this.parent.unselect(this);
      switch (t2) {
        case 0:
        case 2:
          __privateMethod(this, _HighlightEditor_instances, _l_fn).call(this, true);
          break;
        case 1:
        case 3:
          __privateMethod(this, _HighlightEditor_instances, _l_fn).call(this, false);
      }
    }
    select() {
      super.select();
      __privateGet(this, _bl) && this.parent?.drawLayer.updateProperties(__privateGet(this, _bl), { rootClass: { hovered: false, selected: true } });
    }
    unselect() {
      super.unselect();
      if (__privateGet(this, _bl)) {
        this.parent?.drawLayer.updateProperties(__privateGet(this, _bl), { rootClass: { selected: false } });
        __privateGet(this, _fl) || __privateMethod(this, _HighlightEditor_instances, _l_fn).call(this, false);
      }
    }
    get _mustFixPosition() {
      return !__privateGet(this, _fl);
    }
    show(t2 = this._isVisible) {
      super.show(t2);
      if (this.parent) {
        this.parent.drawLayer.updateProperties(__privateGet(this, _T4), { rootClass: { hidden: !t2 } });
        this.parent.drawLayer.updateProperties(__privateGet(this, _bl), { rootClass: { hidden: !t2 } });
      }
    }
    static startHighlighting(t2, e2, { target: i2, x: n2, y: s2 }) {
      const { x: a2, y: r2, width: o2, height: l2 } = i2.getBoundingClientRect(), h2 = new AbortController(), c2 = t2.combinedSignal(h2), pointerUpCallback = (e3) => {
        h2.abort();
        __privateMethod(this, _HighlightEditor_static, Pl_fn).call(this, t2, e3);
      };
      window.addEventListener("blur", pointerUpCallback, { signal: c2 });
      window.addEventListener("pointerup", pointerUpCallback, { signal: c2 });
      window.addEventListener("pointerdown", stopEvent, { capture: true, passive: false, signal: c2 });
      window.addEventListener("contextmenu", noContextMenu, { signal: c2 });
      i2.addEventListener("pointermove", __privateMethod(this, _HighlightEditor_static, Il_fn).bind(this, t2), { signal: c2 });
      this._freeHighlight = new FreeHighlightOutliner({ x: n2, y: s2 }, [a2, r2, o2, l2], t2.scale, this._defaultThickness / 2, e2, 1e-3);
      ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t2.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: this._defaultColor, "fill-opacity": this._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: this._freeHighlight.toSVGPath() } }, true, true));
    }
    static async deserialize(t2, e2, i2) {
      var _a4, _b, _c2, _d2;
      let n2 = null;
      if (t2 instanceof HighlightAnnotationElement) {
        const { data: { quadPoints: e3, rect: i3, rotation: s3, id: a3, color: r3, opacity: o3, popupRef: l3, richText: h3, contentsObj: c3, creationDate: d3, modificationDate: u3 }, parent: { page: { pageNumber: p3 } } } = t2;
        n2 = t2 = { annotationType: b.HIGHLIGHT, color: Array.from(r3), opacity: o3, quadPoints: e3, boxes: null, pageIndex: p3 - 1, rect: i3.slice(0), rotation: s3, annotationElementId: a3, id: a3, deleted: false, popupRef: l3, richText: h3, comment: c3?.str || null, creationDate: d3, modificationDate: u3 };
      } else if (t2 instanceof InkAnnotationElement) {
        const { data: { inkLists: e3, rect: i3, rotation: s3, id: a3, color: r3, borderStyle: { rawWidth: o3 }, popupRef: l3, richText: h3, contentsObj: c3, creationDate: d3, modificationDate: u3 }, parent: { page: { pageNumber: p3 } } } = t2;
        n2 = t2 = { annotationType: b.HIGHLIGHT, color: Array.from(r3), thickness: o3, inkLists: e3, boxes: null, pageIndex: p3 - 1, rect: i3.slice(0), rotation: s3, annotationElementId: a3, id: a3, deleted: false, popupRef: l3, richText: h3, comment: c3?.str || null, creationDate: d3, modificationDate: u3 };
      }
      const { color: s2, quadPoints: a2, inkLists: r2, outlines: o2, opacity: l2 } = t2, h2 = await super.deserialize(t2, e2, i2);
      h2.color = Util.makeHexColor(...s2);
      h2.opacity = l2 || 1;
      r2 && __privateSet(h2, _Oo2, t2.thickness);
      h2._initialData = n2;
      t2.comment && h2.setCommentData(t2);
      const [c2, d2] = h2.pageDimensions, [u2, p2] = h2.pageTranslation;
      if (a2) {
        const t3 = __privateSet(h2, _hl, []);
        for (let e3 = 0; e3 < a2.length; e3 += 8) t3.push({ x: (a2[e3] - u2) / c2, y: 1 - (a2[e3 + 1] - p2) / d2, width: (a2[e3 + 2] - a2[e3]) / c2, height: (a2[e3 + 1] - a2[e3 + 5]) / d2 });
        __privateMethod(_a4 = h2, _HighlightEditor_instances, wl_fn).call(_a4);
        __privateMethod(_b = h2, _HighlightEditor_instances, Al_fn).call(_b);
        h2.rotate(h2.rotation);
      } else if (r2 || o2) {
        __privateSet(h2, _fl, true);
        const t3 = (r2 || o2.points)[0], i3 = { x: t3[0] - u2, y: d2 - (t3[1] - p2) }, n3 = new FreeHighlightOutliner(i3, [0, 0, c2, d2], 1, __privateGet(h2, _Oo2) / 2, true, 1e-3);
        for (let e3 = 0, s4 = t3.length; e3 < s4; e3 += 2) {
          i3.x = t3[e3] - u2;
          i3.y = d2 - (t3[e3 + 1] - p2);
          n3.add(i3);
        }
        const { id: s3, clipPathId: a3 } = e2.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: h2.color, "fill-opacity": h2._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: n3.toSVGPath() } }, true, true);
        __privateMethod(_c2 = h2, _HighlightEditor_instances, vl_fn).call(_c2, { highlightOutlines: n3.getOutlines(), highlightId: s3, clipPathId: a3 });
        __privateMethod(_d2 = h2, _HighlightEditor_instances, Al_fn).call(_d2);
        h2.rotate(h2.parentRotation);
      }
      return h2;
    }
    serialize(t2 = false) {
      if (this.isEmpty() || t2) return null;
      if (this.deleted) return this.serializeDeleted();
      const e2 = AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i2 = super.serialize(t2);
      Object.assign(i2, { color: e2, opacity: this.opacity, thickness: __privateGet(this, _Oo2), quadPoints: __privateMethod(this, _HighlightEditor_instances, Ml_fn).call(this), outlines: __privateMethod(this, _HighlightEditor_instances, Dl_fn).call(this, i2.rect) });
      this.addComment(i2);
      if (this.annotationElementId && !__privateMethod(this, _HighlightEditor_instances, Eo_fn2).call(this, i2)) return null;
      i2.id = this.annotationElementId;
      return i2;
    }
    renderAnnotationElement(t2) {
      if (this.deleted) {
        t2.hide();
        return null;
      }
      t2.updateEdited({ rect: this.getPDFRect(), popup: this.comment });
      return null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  _ol = new WeakMap();
  _ll = new WeakMap();
  _hl = new WeakMap();
  _cl = new WeakMap();
  _a3 = new WeakMap();
  _dl = new WeakMap();
  _ul = new WeakMap();
  _pl = new WeakMap();
  _gl = new WeakMap();
  _ml = new WeakMap();
  _T4 = new WeakMap();
  _fl = new WeakMap();
  _Qo2 = new WeakMap();
  _Jo2 = new WeakMap();
  _bl = new WeakMap();
  _ye2 = new WeakMap();
  _Oo2 = new WeakMap();
  _yl = new WeakMap();
  _HighlightEditor_instances = new WeakSet();
  wl_fn = function() {
    const t2 = new HighlightOutliner(__privateGet(this, _hl), 1e-3);
    __privateSet(this, _ml, t2.getOutlines());
    [this.x, this.y, this.width, this.height] = __privateGet(this, _ml).box;
    const e2 = new HighlightOutliner(__privateGet(this, _hl), 25e-4, 1e-3, "ltr" === this._uiManager.direction);
    __privateSet(this, _dl, e2.getOutlines());
    const { firstPoint: i2 } = __privateGet(this, _ml);
    __privateSet(this, _Qo2, [(i2[0] - this.x) / this.width, (i2[1] - this.y) / this.height]);
    const { lastPoint: n2 } = __privateGet(this, _dl);
    __privateSet(this, _Jo2, [(n2[0] - this.x) / this.width, (n2[1] - this.y) / this.height]);
  };
  vl_fn = function({ highlightOutlines: t2, highlightId: e2, clipPathId: i2 }) {
    var _a4, _b;
    __privateSet(this, _ml, t2);
    __privateSet(this, _dl, t2.getNewOutline(__privateGet(this, _Oo2) / 2 + 1.5, 25e-4));
    if (e2 >= 0) {
      __privateSet(this, _T4, e2);
      __privateSet(this, _cl, i2);
      this.parent.drawLayer.finalizeDraw(e2, { bbox: t2.box, path: { d: t2.toSVGPath() } });
      __privateSet(this, _bl, this.parent.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: true }, bbox: __privateGet(this, _dl).box, path: { d: __privateGet(this, _dl).toSVGPath() } }, true));
    } else if (this.parent) {
      const e3 = this.parent.viewport.rotation;
      this.parent.drawLayer.updateProperties(__privateGet(this, _T4), { bbox: __privateMethod(_a4 = _HighlightEditor, _HighlightEditor_static, xl_fn).call(_a4, __privateGet(this, _ml).box, (e3 - this.rotation + 360) % 360), path: { d: t2.toSVGPath() } });
      this.parent.drawLayer.updateProperties(__privateGet(this, _bl), { bbox: __privateMethod(_b = _HighlightEditor, _HighlightEditor_static, xl_fn).call(_b, __privateGet(this, _dl).box, e3), path: { d: __privateGet(this, _dl).toSVGPath() } });
    }
    const [n2, s2, a2, r2] = t2.box;
    switch (this.rotation) {
      case 0:
        this.x = n2;
        this.y = s2;
        this.width = a2;
        this.height = r2;
        break;
      case 90: {
        const [t3, e3] = this.parentDimensions;
        this.x = s2;
        this.y = 1 - n2;
        this.width = a2 * e3 / t3;
        this.height = r2 * t3 / e3;
        break;
      }
      case 180:
        this.x = 1 - n2;
        this.y = 1 - s2;
        this.width = a2;
        this.height = r2;
        break;
      case 270: {
        const [t3, e3] = this.parentDimensions;
        this.x = 1 - s2;
        this.y = n2;
        this.width = a2 * e3 / t3;
        this.height = r2 * t3 / e3;
        break;
      }
    }
    const { firstPoint: o2 } = t2;
    __privateSet(this, _Qo2, [(o2[0] - n2) / a2, (o2[1] - s2) / r2]);
    const { lastPoint: l2 } = __privateGet(this, _dl);
    __privateSet(this, _Jo2, [(l2[0] - n2) / a2, (l2[1] - s2) / r2]);
  };
  Hr_fn3 = function(t2) {
    const setColorAndOpacity = (t3, e3) => {
      this.color = t3;
      this.opacity = e3;
      this.onUpdatedColor();
    }, e2 = this.color, i2 = this.opacity;
    this.addCommands({ cmd: setColorAndOpacity.bind(this, t2, _HighlightEditor._defaultOpacity), undo: setColorAndOpacity.bind(this, e2, i2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: y.HIGHLIGHT_COLOR, overwriteIfSameType: true, keepUndo: true });
    this._reportTelemetry({ action: "color_changed", color: this._uiManager.getNonHCMColorName(t2) }, true);
  };
  Cl_fn = function(t2) {
    const e2 = __privateGet(this, _Oo2), setThickness = (t3) => {
      __privateSet(this, _Oo2, t3);
      __privateMethod(this, _HighlightEditor_instances, El_fn).call(this, t3);
    };
    this.addCommands({ cmd: setThickness.bind(this, t2), undo: setThickness.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: y.INK_THICKNESS, overwriteIfSameType: true, keepUndo: true });
    this._reportTelemetry({ action: "thickness_changed", thickness: t2 }, true);
  };
  El_fn = function(t2) {
    if (__privateGet(this, _fl)) {
      __privateMethod(this, _HighlightEditor_instances, vl_fn).call(this, { highlightOutlines: __privateGet(this, _ml).getNewOutline(t2 / 2) });
      this.fixAndSetPosition();
      this.setDims();
    }
  };
  Tl_fn = function() {
    if (null !== __privateGet(this, _T4) && this.parent) {
      this.parent.drawLayer.remove(__privateGet(this, _T4));
      __privateSet(this, _T4, null);
      this.parent.drawLayer.remove(__privateGet(this, _bl));
      __privateSet(this, _bl, null);
    }
  };
  Al_fn = function(t2 = this.parent) {
    if (null === __privateGet(this, _T4)) {
      ({ id: __privateWrapper(this, _T4)._, clipPathId: __privateWrapper(this, _cl)._ } = t2.drawLayer.draw({ bbox: __privateGet(this, _ml).box, root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": this.opacity }, rootClass: { highlight: true, free: __privateGet(this, _fl) }, path: { d: __privateGet(this, _ml).toSVGPath() } }, false, true));
      __privateSet(this, _bl, t2.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: __privateGet(this, _fl) }, bbox: __privateGet(this, _dl).box, path: { d: __privateGet(this, _dl).toSVGPath() } }, __privateGet(this, _fl)));
      __privateGet(this, _gl) && (__privateGet(this, _gl).style.clipPath = __privateGet(this, _cl));
    }
  };
  _HighlightEditor_static = new WeakSet();
  xl_fn = function([t2, e2, i2, n2], s2) {
    switch (s2) {
      case 90:
        return [1 - e2 - n2, t2, n2, i2];
      case 180:
        return [1 - t2 - i2, 1 - e2 - n2, i2, n2];
      case 270:
        return [e2, 1 - t2 - i2, n2, i2];
    }
    return [t2, e2, i2, n2];
  };
  kl_fn = function(t2) {
    _HighlightEditor._keyboardManager.exec(this, t2);
  };
  _l_fn = function(t2) {
    if (!__privateGet(this, _ol)) return;
    const e2 = window.getSelection();
    t2 ? e2.setPosition(__privateGet(this, _ol), __privateGet(this, _ll)) : e2.setPosition(__privateGet(this, _ul), __privateGet(this, _pl));
  };
  Sl_fn = function() {
    return __privateGet(this, _fl) ? this.rotation : 0;
  };
  Ml_fn = function() {
    if (__privateGet(this, _fl)) return null;
    const [t2, e2] = this.pageDimensions, [i2, n2] = this.pageTranslation, s2 = __privateGet(this, _hl), a2 = new Float32Array(8 * s2.length);
    let r2 = 0;
    for (const { x: o2, y: l2, width: h2, height: c2 } of s2) {
      const s3 = o2 * t2 + i2, d2 = (1 - l2) * e2 + n2;
      a2[r2] = a2[r2 + 4] = s3;
      a2[r2 + 1] = a2[r2 + 3] = d2;
      a2[r2 + 2] = a2[r2 + 6] = s3 + h2 * t2;
      a2[r2 + 5] = a2[r2 + 7] = d2 - c2 * e2;
      r2 += 8;
    }
    return a2;
  };
  Dl_fn = function(t2) {
    return __privateGet(this, _ml).serialize(t2, __privateMethod(this, _HighlightEditor_instances, Sl_fn).call(this));
  };
  Il_fn = function(t2, e2) {
    this._freeHighlight.add(e2) && t2.drawLayer.updateProperties(this._freeHighlightId, { path: { d: this._freeHighlight.toSVGPath() } });
  };
  Pl_fn = function(t2, e2) {
    this._freeHighlight.isEmpty() ? t2.drawLayer.remove(this._freeHighlightId) : t2.createAndAddNewEditor(e2, false, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" });
    this._freeHighlightId = -1;
    this._freeHighlight = null;
    this._freeHighlightClipId = "";
  };
  Eo_fn2 = function(t2) {
    const { color: e2 } = this._initialData;
    return this.hasEditedComment || t2.color.some((t3, i2) => t3 !== e2[i2]);
  };
  __privateAdd(_HighlightEditor, _HighlightEditor_static);
  __publicField(_HighlightEditor, "_defaultColor", null);
  __publicField(_HighlightEditor, "_defaultOpacity", 1);
  __publicField(_HighlightEditor, "_defaultThickness", 12);
  __publicField(_HighlightEditor, "_type", "highlight");
  __publicField(_HighlightEditor, "_editorType", b.HIGHLIGHT);
  __publicField(_HighlightEditor, "_freeHighlightId", -1);
  __publicField(_HighlightEditor, "_freeHighlight", null);
  __publicField(_HighlightEditor, "_freeHighlightClipId", "");
  var HighlightEditor = _HighlightEditor;
  var _Fl;
  var DrawingOptions = class {
    constructor() {
      __privateAdd(this, _Fl, /* @__PURE__ */ Object.create(null));
    }
    updateProperty(t2, e2) {
      this[t2] = e2;
      this.updateSVGProperty(t2, e2);
    }
    updateProperties(t2) {
      if (t2) for (const [e2, i2] of Object.entries(t2)) e2.startsWith("_") || this.updateProperty(e2, i2);
    }
    updateSVGProperty(t2, e2) {
      __privateGet(this, _Fl)[t2] = e2;
    }
    toSVGProperties() {
      const t2 = __privateGet(this, _Fl);
      __privateSet(this, _Fl, /* @__PURE__ */ Object.create(null));
      return { root: t2 };
    }
    reset() {
      __privateSet(this, _Fl, /* @__PURE__ */ Object.create(null));
    }
    updateAll(t2 = this) {
      this.updateProperties(t2);
    }
    clone() {
      unreachable("Not implemented");
    }
  };
  _Fl = new WeakMap();
  var _Bl, _Ll, _Ol, _Rl, _Nl, _DrawingEditor_instances, Ul_fn, Hl_fn, Tl_fn2, Al_fn2, Vl_fn, Gl_fn, zl_fn, Wl_fn;
  var _DrawingEditor = class _DrawingEditor extends AnnotationEditor {
    constructor(t2) {
      super(t2);
      __privateAdd(this, _DrawingEditor_instances);
      __privateAdd(this, _Bl, null);
      __privateAdd(this, _Ll);
      __publicField(this, "_colorPicker", null);
      __publicField(this, "_drawId", null);
      __privateSet(this, _Ll, t2.mustBeCommitted || false);
      this._addOutlines(t2);
    }
    onUpdatedColor() {
      this._colorPicker?.update(this.color);
      super.onUpdatedColor();
    }
    onUpdatedOpacity() {
      this._colorPicker?.updateOpacity?.(this.opacity);
    }
    _addOutlines(t2) {
      if (t2.drawOutlines) {
        __privateMethod(this, _DrawingEditor_instances, Ul_fn).call(this, t2);
        __privateMethod(this, _DrawingEditor_instances, Al_fn2).call(this);
      }
    }
    static _mergeSVGProperties(t2, e2) {
      const i2 = new Set(Object.keys(t2));
      for (const [n2, s2] of Object.entries(e2)) i2.has(n2) ? Object.assign(t2[n2], s2) : t2[n2] = s2;
      return t2;
    }
    static getDefaultDrawingOptions(t2) {
      unreachable("Not implemented");
    }
    static get typesMap() {
      unreachable("Not implemented");
    }
    static get isDrawer() {
      return true;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static updateDefaultParams(t2, e2) {
      const i2 = this.typesMap.get(t2);
      i2 && this._defaultDrawingOptions.updateProperty(i2, e2);
      if (this._currentParent) {
        __privateGet(_DrawingEditor, _Ol).updateProperty(i2, e2);
        this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
      }
    }
    updateParams(t2, e2) {
      const i2 = this.constructor.typesMap.get(t2);
      i2 && this._updateProperty(t2, i2, e2);
    }
    static get defaultPropertiesToUpdate() {
      const t2 = [], e2 = this._defaultDrawingOptions;
      for (const [i2, n2] of this.typesMap) t2.push([i2, e2[n2]]);
      return t2;
    }
    get propertiesToUpdate() {
      const t2 = [], { _drawingOptions: e2 } = this;
      for (const [i2, n2] of this.constructor.typesMap) t2.push([i2, e2[n2]]);
      return t2;
    }
    _updateProperty(t2, e2, i2) {
      const n2 = this._drawingOptions, s2 = n2[e2], setter = (i3) => {
        n2.updateProperty(e2, i3);
        const s3 = __privateGet(this, _Bl).updateProperty(e2, i3);
        s3 && __privateMethod(this, _DrawingEditor_instances, zl_fn).call(this, s3);
        this.parent?.drawLayer.updateProperties(this._drawId, n2.toSVGProperties());
        t2 === this.colorType ? this.onUpdatedColor() : t2 === this.opacityType && this.onUpdatedOpacity();
      };
      this.addCommands({ cmd: setter.bind(this, i2), undo: setter.bind(this, s2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: t2, overwriteIfSameType: true, keepUndo: true });
    }
    _updateColorAndOpacity(t2, e2) {
      const i2 = this.constructor.typesMap.get(this.colorType), n2 = this.constructor.typesMap.get(this.opacityType), s2 = this._drawingOptions, a2 = s2[i2], r2 = s2[n2], setter = (t3, e3) => {
        s2.updateProperty(i2, t3);
        s2.updateProperty(n2, e3);
        __privateGet(this, _Bl).updateProperty(i2, t3);
        __privateGet(this, _Bl).updateProperty(n2, e3);
        this.parent?.drawLayer.updateProperties(this._drawId, s2.toSVGProperties());
        this.onUpdatedColor();
        this.onUpdatedOpacity();
      };
      this.addCommands({ cmd: setter.bind(this, t2, e2), undo: setter.bind(this, a2, r2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: y.INK_COLOR_AND_OPACITY, overwriteIfSameType: true, keepUndo: true });
    }
    _onResizing() {
      this.parent?.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(__privateGet(this, _Bl).getPathResizingSVGProperties(__privateMethod(this, _DrawingEditor_instances, Gl_fn).call(this)), { bbox: __privateMethod(this, _DrawingEditor_instances, Wl_fn).call(this) }));
    }
    _onResized() {
      this.parent?.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(__privateGet(this, _Bl).getPathResizedSVGProperties(__privateMethod(this, _DrawingEditor_instances, Gl_fn).call(this)), { bbox: __privateMethod(this, _DrawingEditor_instances, Wl_fn).call(this) }));
    }
    _onTranslating(t2, e2) {
      this.parent?.drawLayer.updateProperties(this._drawId, { bbox: __privateMethod(this, _DrawingEditor_instances, Wl_fn).call(this) });
    }
    _onTranslated() {
      this.parent?.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(__privateGet(this, _Bl).getPathTranslatedSVGProperties(__privateMethod(this, _DrawingEditor_instances, Gl_fn).call(this), this.parentDimensions), { bbox: __privateMethod(this, _DrawingEditor_instances, Wl_fn).call(this) }));
    }
    _onStartDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: true } });
    }
    _onStopDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: false } });
    }
    commit() {
      super.commit();
      this.disableEditMode();
      this.disableEditing();
    }
    disableEditing() {
      super.disableEditing();
      this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing();
      this.div.classList.toggle("disabled", false);
    }
    getBaseTranslation() {
      return [0, 0];
    }
    get isResizable() {
      return true;
    }
    onceAdded(t2) {
      this.annotationElementId || this.parent.addUndoableEditor(this);
      this._isDraggable = true;
      if (__privateGet(this, _Ll)) {
        __privateSet(this, _Ll, false);
        this.commit();
        this.parent.setSelected(this);
        t2 && this.isOnScreen && this.div.focus();
      }
    }
    remove() {
      __privateMethod(this, _DrawingEditor_instances, Tl_fn2).call(this);
      super.remove();
    }
    rebuild() {
      if (this.parent) {
        super.rebuild();
        if (null !== this.div) {
          __privateMethod(this, _DrawingEditor_instances, Al_fn2).call(this);
          __privateMethod(this, _DrawingEditor_instances, zl_fn).call(this, __privateGet(this, _Bl).box);
          this.isAttachedToDOM || this.parent.add(this);
        }
      }
    }
    setParent(t2) {
      let e2 = false;
      if (this.parent && !t2) {
        this._uiManager.removeShouldRescale(this);
        __privateMethod(this, _DrawingEditor_instances, Tl_fn2).call(this);
      } else if (t2) {
        this._uiManager.addShouldRescale(this);
        __privateMethod(this, _DrawingEditor_instances, Al_fn2).call(this, t2);
        e2 = !this.parent && this.div?.classList.contains("selectedEditor");
      }
      super.setParent(t2);
      e2 && this.select();
    }
    rotate() {
      this.parent && this.parent.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties({ bbox: __privateMethod(this, _DrawingEditor_instances, Wl_fn).call(this) }, __privateGet(this, _Bl).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
      this.parent && __privateMethod(this, _DrawingEditor_instances, zl_fn).call(this, __privateGet(this, _Bl).updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      if (this._isCopy) {
        t2 = this.x;
        e2 = this.y;
      }
      const i2 = super.render();
      i2.classList.add("draw");
      const n2 = document.createElement("div");
      i2.append(n2);
      n2.setAttribute("aria-hidden", "true");
      n2.className = "internal";
      this.setDims();
      this._uiManager.addShouldRescale(this);
      this.disableEditing();
      this._isCopy && this._moveAfterPaste(t2, e2);
      return i2;
    }
    static createDrawerInstance(t2, e2, i2, n2, s2) {
      unreachable("Not implemented");
    }
    static startDrawing(t2, e2, i2, n2) {
      const { target: s2, offsetX: a2, offsetY: r2, pointerId: o2, pointerType: l2 } = n2;
      if (CurrentPointers.isInitializedAndDifferentPointerType(l2)) return;
      const { viewport: { rotation: h2 } } = t2, { width: c2, height: d2 } = s2.getBoundingClientRect(), u2 = __privateSet(_DrawingEditor, _Rl, new AbortController()), p2 = t2.combinedSignal(u2);
      CurrentPointers.setPointer(l2, o2);
      window.addEventListener("pointerup", (t3) => {
        CurrentPointers.isSamePointerIdOrRemove(t3.pointerId) && this._endDraw(t3);
      }, { signal: p2 });
      window.addEventListener("pointercancel", (t3) => {
        CurrentPointers.isSamePointerIdOrRemove(t3.pointerId) && this._currentParent.endDrawingSession();
      }, { signal: p2 });
      window.addEventListener("pointerdown", (t3) => {
        if (CurrentPointers.isSamePointerType(t3.pointerType)) {
          CurrentPointers.initializeAndAddPointerId(t3.pointerId);
          if (__privateGet(_DrawingEditor, _Ol).isCancellable()) {
            __privateGet(_DrawingEditor, _Ol).removeLastElement();
            __privateGet(_DrawingEditor, _Ol).isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null);
          }
        }
      }, { capture: true, passive: false, signal: p2 });
      window.addEventListener("contextmenu", noContextMenu, { signal: p2 });
      s2.addEventListener("pointermove", this._drawMove.bind(this), { signal: p2 });
      s2.addEventListener("touchmove", (t3) => {
        CurrentPointers.isSameTimeStamp(t3.timeStamp) && stopEvent(t3);
      }, { signal: p2 });
      t2.toggleDrawing();
      e2._editorUndoBar?.hide();
      if (__privateGet(_DrawingEditor, _Ol)) t2.drawLayer.updateProperties(this._currentDrawId, __privateGet(_DrawingEditor, _Ol).startNew(a2, r2, c2, d2, h2));
      else {
        e2.updateUIForDefaultProperties(this);
        __privateSet(_DrawingEditor, _Ol, this.createDrawerInstance(a2, r2, c2, d2, h2));
        __privateSet(_DrawingEditor, _Nl, this.getDefaultDrawingOptions());
        this._currentParent = t2;
        ({ id: this._currentDrawId } = t2.drawLayer.draw(this._mergeSVGProperties(__privateGet(_DrawingEditor, _Nl).toSVGProperties(), __privateGet(_DrawingEditor, _Ol).defaultSVGProperties), true, false));
      }
    }
    static _drawMove(t2) {
      CurrentPointers.isSameTimeStamp(t2.timeStamp);
      if (!__privateGet(_DrawingEditor, _Ol)) return;
      const { offsetX: e2, offsetY: i2, pointerId: n2 } = t2;
      if (CurrentPointers.isSamePointerId(n2)) if (CurrentPointers.isUsingMultiplePointers()) this._endDraw(t2);
      else {
        this._currentParent.drawLayer.updateProperties(this._currentDrawId, __privateGet(_DrawingEditor, _Ol).add(e2, i2));
        CurrentPointers.setTimeStamp(t2.timeStamp);
        stopEvent(t2);
      }
    }
    static _cleanup(t2) {
      if (t2) {
        this._currentDrawId = -1;
        this._currentParent = null;
        __privateSet(_DrawingEditor, _Ol, null);
        __privateSet(_DrawingEditor, _Nl, null);
        CurrentPointers.clearTimeStamp();
      }
      if (__privateGet(_DrawingEditor, _Rl)) {
        __privateGet(_DrawingEditor, _Rl).abort();
        __privateSet(_DrawingEditor, _Rl, null);
        CurrentPointers.clearPointerIds();
      }
    }
    static _endDraw(t2) {
      const e2 = this._currentParent;
      if (e2) {
        e2.toggleDrawing(true);
        this._cleanup(false);
        t2?.target === e2.div && e2.drawLayer.updateProperties(this._currentDrawId, __privateGet(_DrawingEditor, _Ol).end(t2.offsetX, t2.offsetY));
        if (this.supportMultipleDrawings) {
          const t3 = __privateGet(_DrawingEditor, _Ol), i2 = this._currentDrawId, n2 = t3.getLastElement();
          e2.addCommands({ cmd: () => {
            e2.drawLayer.updateProperties(i2, t3.setLastElement(n2));
          }, undo: () => {
            e2.drawLayer.updateProperties(i2, t3.removeLastElement());
          }, mustExec: false, type: y.DRAW_STEP });
          return;
        }
        this.endDrawing(false);
      }
    }
    static endDrawing(t2) {
      const e2 = this._currentParent;
      if (!e2) return null;
      e2.toggleDrawing(true);
      e2.cleanUndoStack(y.DRAW_STEP);
      if (!__privateGet(_DrawingEditor, _Ol).isEmpty()) {
        const { pageDimensions: [i2, n2], scale: s2 } = e2, a2 = e2.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, false, { drawId: this._currentDrawId, drawOutlines: __privateGet(_DrawingEditor, _Ol).getOutlines(i2 * s2, n2 * s2, s2, this._INNER_MARGIN), drawingOptions: __privateGet(_DrawingEditor, _Nl), mustBeCommitted: !t2 });
        this._cleanup(true);
        return a2;
      }
      e2.drawLayer.remove(this._currentDrawId);
      this._cleanup(true);
      return null;
    }
    createDrawingOptions(t2) {
    }
    static deserializeDraw(t2, e2, i2, n2, s2, a2) {
      unreachable("Not implemented");
    }
    static async deserialize(t2, e2, i2) {
      var _a4, _b;
      const { rawDims: { pageWidth: n2, pageHeight: s2, pageX: a2, pageY: r2 } } = e2.viewport, o2 = this.deserializeDraw(a2, r2, n2, s2, this._INNER_MARGIN, t2), l2 = await super.deserialize(t2, e2, i2);
      l2.createDrawingOptions(t2);
      __privateMethod(_a4 = l2, _DrawingEditor_instances, Ul_fn).call(_a4, { drawOutlines: o2 });
      __privateMethod(_b = l2, _DrawingEditor_instances, Al_fn2).call(_b);
      l2.onScaleChanging();
      l2.rotate();
      return l2;
    }
    serializeDraw(t2) {
      const [e2, i2] = this.pageTranslation, [n2, s2] = this.pageDimensions;
      return __privateGet(this, _Bl).serialize([e2, i2, n2, s2], t2);
    }
    renderAnnotationElement(t2) {
      t2.updateEdited({ rect: this.getPDFRect() });
      return null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  _Bl = new WeakMap();
  _Ll = new WeakMap();
  _Ol = new WeakMap();
  _Rl = new WeakMap();
  _Nl = new WeakMap();
  _DrawingEditor_instances = new WeakSet();
  Ul_fn = function({ drawOutlines: t2, drawId: e2, drawingOptions: i2 }) {
    __privateSet(this, _Bl, t2);
    this._drawingOptions || (this._drawingOptions = i2);
    this.annotationElementId || this._uiManager.a11yAlert(AnnotationEditor._l10nAlert[this.editorType]);
    if (e2 >= 0) {
      this._drawId = e2;
      this.parent.drawLayer.finalizeDraw(e2, t2.defaultProperties);
    } else this._drawId = __privateMethod(this, _DrawingEditor_instances, Hl_fn).call(this, t2, this.parent);
    __privateMethod(this, _DrawingEditor_instances, zl_fn).call(this, t2.box);
  };
  Hl_fn = function(t2, e2) {
    const { id: i2 } = e2.drawLayer.draw(_DrawingEditor._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t2.defaultSVGProperties), false, false);
    return i2;
  };
  Tl_fn2 = function() {
    if (null !== this._drawId && this.parent) {
      this.parent.drawLayer.remove(this._drawId);
      this._drawId = null;
      this._drawingOptions.reset();
    }
  };
  Al_fn2 = function(t2 = this.parent) {
    if (null === this._drawId || this.parent !== t2) if (null === this._drawId) {
      this._drawingOptions.updateAll();
      this._drawId = __privateMethod(this, _DrawingEditor_instances, Hl_fn).call(this, __privateGet(this, _Bl), t2);
    } else this.parent.drawLayer.updateParent(this._drawId, t2.drawLayer);
  };
  Vl_fn = function([t2, e2, i2, n2]) {
    const { parentDimensions: [s2, a2], rotation: r2 } = this;
    switch (r2) {
      case 90:
        return [e2, 1 - t2, i2 * (a2 / s2), n2 * (s2 / a2)];
      case 180:
        return [1 - t2, 1 - e2, i2, n2];
      case 270:
        return [1 - e2, t2, i2 * (a2 / s2), n2 * (s2 / a2)];
      default:
        return [t2, e2, i2, n2];
    }
  };
  Gl_fn = function() {
    const { x: t2, y: e2, width: i2, height: n2, parentDimensions: [s2, a2], rotation: r2 } = this;
    switch (r2) {
      case 90:
        return [1 - e2, t2, i2 * (s2 / a2), n2 * (a2 / s2)];
      case 180:
        return [1 - t2, 1 - e2, i2, n2];
      case 270:
        return [e2, 1 - t2, i2 * (s2 / a2), n2 * (a2 / s2)];
      default:
        return [t2, e2, i2, n2];
    }
  };
  zl_fn = function(t2) {
    [this.x, this.y, this.width, this.height] = __privateMethod(this, _DrawingEditor_instances, Vl_fn).call(this, t2);
    if (this.div) {
      this.fixAndSetPosition();
      this.setDims();
    }
    this._onResized();
  };
  Wl_fn = function() {
    const { x: t2, y: e2, width: i2, height: n2, rotation: s2, parentRotation: a2, parentDimensions: [r2, o2] } = this;
    switch ((4 * s2 + a2) / 90) {
      case 1:
        return [1 - e2 - n2, t2, n2, i2];
      case 2:
        return [1 - t2 - i2, 1 - e2 - n2, i2, n2];
      case 3:
        return [e2, 1 - t2 - i2, n2, i2];
      case 4:
        return [t2, e2 - i2 * (r2 / o2), n2 * (o2 / r2), i2 * (r2 / o2)];
      case 5:
        return [1 - e2, t2, i2 * (r2 / o2), n2 * (o2 / r2)];
      case 6:
        return [1 - t2 - n2 * (o2 / r2), 1 - e2, n2 * (o2 / r2), i2 * (r2 / o2)];
      case 7:
        return [e2 - i2 * (r2 / o2), 1 - t2 - n2 * (o2 / r2), i2 * (r2 / o2), n2 * (o2 / r2)];
      case 8:
        return [t2 - i2, e2 - n2, i2, n2];
      case 9:
        return [1 - e2, t2 - i2, n2, i2];
      case 10:
        return [1 - t2, 1 - e2, i2, n2];
      case 11:
        return [e2 - n2, 1 - t2, n2, i2];
      case 12:
        return [t2 - n2 * (o2 / r2), e2, n2 * (o2 / r2), i2 * (r2 / o2)];
      case 13:
        return [1 - e2 - i2 * (r2 / o2), t2 - n2 * (o2 / r2), i2 * (r2 / o2), n2 * (o2 / r2)];
      case 14:
        return [1 - t2, 1 - e2 - i2 * (r2 / o2), n2 * (o2 / r2), i2 * (r2 / o2)];
      case 15:
        return [e2, 1 - t2, i2 * (r2 / o2), n2 * (o2 / r2)];
      default:
        return [t2, e2, i2, n2];
    }
  };
  __publicField(_DrawingEditor, "_currentDrawId", -1);
  __publicField(_DrawingEditor, "_currentParent", null);
  __privateAdd(_DrawingEditor, _Ol, null);
  __privateAdd(_DrawingEditor, _Rl, null);
  __privateAdd(_DrawingEditor, _Nl, null);
  __publicField(_DrawingEditor, "_INNER_MARGIN", 3);
  var DrawingEditor = _DrawingEditor;
  var _Do2, _Kr2, _jl, _ea2, _Oo3, _Ro3, _$l, _Kl, _rl2, _Xl, _ql, _InkDrawOutliner_instances, Yl_fn;
  var InkDrawOutliner = class {
    constructor(t2, e2, i2, n2, s2, a2) {
      __privateAdd(this, _InkDrawOutliner_instances);
      __privateAdd(this, _Do2, new Float64Array(6));
      __privateAdd(this, _Kr2);
      __privateAdd(this, _jl);
      __privateAdd(this, _ea2);
      __privateAdd(this, _Oo3);
      __privateAdd(this, _Ro3);
      __privateAdd(this, _$l, "");
      __privateAdd(this, _Kl, 0);
      __privateAdd(this, _rl2, new InkDrawOutline());
      __privateAdd(this, _Xl);
      __privateAdd(this, _ql);
      __privateSet(this, _Xl, i2);
      __privateSet(this, _ql, n2);
      __privateSet(this, _ea2, s2);
      __privateSet(this, _Oo3, a2);
      [t2, e2] = __privateMethod(this, _InkDrawOutliner_instances, Yl_fn).call(this, t2, e2);
      const r2 = __privateSet(this, _Kr2, [NaN, NaN, NaN, NaN, t2, e2]);
      __privateSet(this, _Ro3, [t2, e2]);
      __privateSet(this, _jl, [{ line: r2, points: __privateGet(this, _Ro3) }]);
      __privateGet(this, _Do2).set(r2, 0);
    }
    updateProperty(t2, e2) {
      "stroke-width" === t2 && __privateSet(this, _Oo3, e2);
    }
    isEmpty() {
      return !__privateGet(this, _jl)?.length;
    }
    isCancellable() {
      return __privateGet(this, _Ro3).length <= 10;
    }
    add(t2, e2) {
      [t2, e2] = __privateMethod(this, _InkDrawOutliner_instances, Yl_fn).call(this, t2, e2);
      const [i2, n2, s2, a2] = __privateGet(this, _Do2).subarray(2, 6), r2 = t2 - s2, o2 = e2 - a2;
      if (Math.hypot(__privateGet(this, _Xl) * r2, __privateGet(this, _ql) * o2) <= 2) return null;
      __privateGet(this, _Ro3).push(t2, e2);
      if (isNaN(i2)) {
        __privateGet(this, _Do2).set([s2, a2, t2, e2], 2);
        __privateGet(this, _Kr2).push(NaN, NaN, NaN, NaN, t2, e2);
        return { path: { d: this.toSVGPath() } };
      }
      isNaN(__privateGet(this, _Do2)[0]) && __privateGet(this, _Kr2).splice(6, 6);
      __privateGet(this, _Do2).set([i2, n2, s2, a2, t2, e2], 0);
      __privateGet(this, _Kr2).push(...Outline.createBezierPoints(i2, n2, s2, a2, t2, e2));
      return { path: { d: this.toSVGPath() } };
    }
    end(t2, e2) {
      const i2 = this.add(t2, e2);
      return i2 || (2 === __privateGet(this, _Ro3).length ? { path: { d: this.toSVGPath() } } : null);
    }
    startNew(t2, e2, i2, n2, s2) {
      __privateSet(this, _Xl, i2);
      __privateSet(this, _ql, n2);
      __privateSet(this, _ea2, s2);
      [t2, e2] = __privateMethod(this, _InkDrawOutliner_instances, Yl_fn).call(this, t2, e2);
      const a2 = __privateSet(this, _Kr2, [NaN, NaN, NaN, NaN, t2, e2]);
      __privateSet(this, _Ro3, [t2, e2]);
      const r2 = __privateGet(this, _jl).at(-1);
      if (r2) {
        r2.line = new Float32Array(r2.line);
        r2.points = new Float32Array(r2.points);
      }
      __privateGet(this, _jl).push({ line: a2, points: __privateGet(this, _Ro3) });
      __privateGet(this, _Do2).set(a2, 0);
      __privateSet(this, _Kl, 0);
      this.toSVGPath();
      return null;
    }
    getLastElement() {
      return __privateGet(this, _jl).at(-1);
    }
    setLastElement(t2) {
      if (!__privateGet(this, _jl)) return __privateGet(this, _rl2).setLastElement(t2);
      __privateGet(this, _jl).push(t2);
      __privateSet(this, _Kr2, t2.line);
      __privateSet(this, _Ro3, t2.points);
      __privateSet(this, _Kl, 0);
      return { path: { d: this.toSVGPath() } };
    }
    removeLastElement() {
      if (!__privateGet(this, _jl)) return __privateGet(this, _rl2).removeLastElement();
      __privateGet(this, _jl).pop();
      __privateSet(this, _$l, "");
      for (let t2 = 0, e2 = __privateGet(this, _jl).length; t2 < e2; t2++) {
        const { line: e3, points: i2 } = __privateGet(this, _jl)[t2];
        __privateSet(this, _Kr2, e3);
        __privateSet(this, _Ro3, i2);
        __privateSet(this, _Kl, 0);
        this.toSVGPath();
      }
      return { path: { d: __privateGet(this, _$l) } };
    }
    toSVGPath() {
      const t2 = Outline.svgRound(__privateGet(this, _Kr2)[4]), e2 = Outline.svgRound(__privateGet(this, _Kr2)[5]);
      if (2 === __privateGet(this, _Ro3).length) {
        __privateSet(this, _$l, `${__privateGet(this, _$l)} M ${t2} ${e2} Z`);
        return __privateGet(this, _$l);
      }
      if (__privateGet(this, _Ro3).length <= 6) {
        const i3 = __privateGet(this, _$l).lastIndexOf("M");
        __privateSet(this, _$l, `${__privateGet(this, _$l).slice(0, i3)} M ${t2} ${e2}`);
        __privateSet(this, _Kl, 6);
      }
      if (4 === __privateGet(this, _Ro3).length) {
        const t3 = Outline.svgRound(__privateGet(this, _Kr2)[10]), e3 = Outline.svgRound(__privateGet(this, _Kr2)[11]);
        __privateSet(this, _$l, `${__privateGet(this, _$l)} L ${t3} ${e3}`);
        __privateSet(this, _Kl, 12);
        return __privateGet(this, _$l);
      }
      const i2 = [];
      if (0 === __privateGet(this, _Kl)) {
        i2.push(`M ${t2} ${e2}`);
        __privateSet(this, _Kl, 6);
      }
      for (let t3 = __privateGet(this, _Kl), e3 = __privateGet(this, _Kr2).length; t3 < e3; t3 += 6) {
        const [e4, n2, s2, a2, r2, o2] = __privateGet(this, _Kr2).slice(t3, t3 + 6).map(Outline.svgRound);
        i2.push(`C${e4} ${n2} ${s2} ${a2} ${r2} ${o2}`);
      }
      __privateSet(this, _$l, __privateGet(this, _$l) + i2.join(" "));
      __privateSet(this, _Kl, __privateGet(this, _Kr2).length);
      return __privateGet(this, _$l);
    }
    getOutlines(t2, e2, i2, n2) {
      const s2 = __privateGet(this, _jl).at(-1);
      s2.line = new Float32Array(s2.line);
      s2.points = new Float32Array(s2.points);
      __privateGet(this, _rl2).build(__privateGet(this, _jl), t2, e2, i2, __privateGet(this, _ea2), __privateGet(this, _Oo3), n2);
      __privateSet(this, _Do2, null);
      __privateSet(this, _Kr2, null);
      __privateSet(this, _jl, null);
      __privateSet(this, _$l, null);
      return __privateGet(this, _rl2);
    }
    get defaultSVGProperties() {
      return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: true }, bbox: [0, 0, 1, 1] };
    }
  };
  _Do2 = new WeakMap();
  _Kr2 = new WeakMap();
  _jl = new WeakMap();
  _ea2 = new WeakMap();
  _Oo3 = new WeakMap();
  _Ro3 = new WeakMap();
  _$l = new WeakMap();
  _Kl = new WeakMap();
  _rl2 = new WeakMap();
  _Xl = new WeakMap();
  _ql = new WeakMap();
  _InkDrawOutliner_instances = new WeakSet();
  Yl_fn = function(t2, e2) {
    return Outline._normalizePoint(t2, e2, __privateGet(this, _Xl), __privateGet(this, _ql), __privateGet(this, _ea2));
  };
  var _Xo2, _Ql, _ko3, _jl2, _Xl2, _ql2, _Jl, _ea3, _Oo4, _InkDrawOutline_instances, eh_fn, th_fn, Zl_fn, Cl_fn2;
  var InkDrawOutline = class extends Outline {
    constructor() {
      super(...arguments);
      __privateAdd(this, _InkDrawOutline_instances);
      __privateAdd(this, _Xo2);
      __privateAdd(this, _Ql, 0);
      __privateAdd(this, _ko3);
      __privateAdd(this, _jl2);
      __privateAdd(this, _Xl2);
      __privateAdd(this, _ql2);
      __privateAdd(this, _Jl);
      __privateAdd(this, _ea3);
      __privateAdd(this, _Oo4);
    }
    build(t2, e2, i2, n2, s2, a2, r2) {
      __privateSet(this, _Xl2, e2);
      __privateSet(this, _ql2, i2);
      __privateSet(this, _Jl, n2);
      __privateSet(this, _ea3, s2);
      __privateSet(this, _Oo4, a2);
      __privateSet(this, _ko3, r2 ?? 0);
      __privateSet(this, _jl2, t2);
      __privateMethod(this, _InkDrawOutline_instances, Zl_fn).call(this);
    }
    get thickness() {
      return __privateGet(this, _Oo4);
    }
    setLastElement(t2) {
      __privateGet(this, _jl2).push(t2);
      return { path: { d: this.toSVGPath() } };
    }
    removeLastElement() {
      __privateGet(this, _jl2).pop();
      return { path: { d: this.toSVGPath() } };
    }
    toSVGPath() {
      const t2 = [];
      for (const { line: e2 } of __privateGet(this, _jl2)) {
        t2.push(`M${Outline.svgRound(e2[4])} ${Outline.svgRound(e2[5])}`);
        if (6 !== e2.length) if (12 === e2.length && isNaN(e2[6])) t2.push(`L${Outline.svgRound(e2[10])} ${Outline.svgRound(e2[11])}`);
        else for (let i2 = 6, n2 = e2.length; i2 < n2; i2 += 6) {
          const [n3, s2, a2, r2, o2, l2] = e2.subarray(i2, i2 + 6).map(Outline.svgRound);
          t2.push(`C${n3} ${s2} ${a2} ${r2} ${o2} ${l2}`);
        }
        else t2.push("Z");
      }
      return t2.join("");
    }
    serialize([t2, e2, i2, n2], s2) {
      const a2 = [], r2 = [], [o2, l2, h2, c2] = __privateMethod(this, _InkDrawOutline_instances, th_fn).call(this);
      let d2, u2, p2, g2, m2, f2, b2, y2, v2;
      switch (__privateGet(this, _ea3)) {
        case 0:
          v2 = Outline._rescale;
          d2 = t2;
          u2 = e2 + n2;
          p2 = i2;
          g2 = -n2;
          m2 = t2 + o2 * i2;
          f2 = e2 + (1 - l2 - c2) * n2;
          b2 = t2 + (o2 + h2) * i2;
          y2 = e2 + (1 - l2) * n2;
          break;
        case 90:
          v2 = Outline._rescaleAndSwap;
          d2 = t2;
          u2 = e2;
          p2 = i2;
          g2 = n2;
          m2 = t2 + l2 * i2;
          f2 = e2 + o2 * n2;
          b2 = t2 + (l2 + c2) * i2;
          y2 = e2 + (o2 + h2) * n2;
          break;
        case 180:
          v2 = Outline._rescale;
          d2 = t2 + i2;
          u2 = e2;
          p2 = -i2;
          g2 = n2;
          m2 = t2 + (1 - o2 - h2) * i2;
          f2 = e2 + l2 * n2;
          b2 = t2 + (1 - o2) * i2;
          y2 = e2 + (l2 + c2) * n2;
          break;
        case 270:
          v2 = Outline._rescaleAndSwap;
          d2 = t2 + i2;
          u2 = e2 + n2;
          p2 = -i2;
          g2 = -n2;
          m2 = t2 + (1 - l2 - c2) * i2;
          f2 = e2 + (1 - o2 - h2) * n2;
          b2 = t2 + (1 - l2) * i2;
          y2 = e2 + (1 - o2) * n2;
      }
      for (const { line: t3, points: e3 } of __privateGet(this, _jl2)) {
        a2.push(v2(t3, d2, u2, p2, g2, s2 ? new Array(t3.length) : null));
        r2.push(v2(e3, d2, u2, p2, g2, s2 ? new Array(e3.length) : null));
      }
      return { lines: a2, points: r2, rect: [m2, f2, b2, y2] };
    }
    static deserialize(t2, e2, i2, n2, s2, { paths: { lines: a2, points: r2 }, rotation: o2, thickness: l2 }) {
      const h2 = [];
      let c2, d2, u2, p2, g2;
      switch (o2) {
        case 0:
          g2 = Outline._rescale;
          c2 = -t2 / i2;
          d2 = e2 / n2 + 1;
          u2 = 1 / i2;
          p2 = -1 / n2;
          break;
        case 90:
          g2 = Outline._rescaleAndSwap;
          c2 = -e2 / n2;
          d2 = -t2 / i2;
          u2 = 1 / n2;
          p2 = 1 / i2;
          break;
        case 180:
          g2 = Outline._rescale;
          c2 = t2 / i2 + 1;
          d2 = -e2 / n2;
          u2 = -1 / i2;
          p2 = 1 / n2;
          break;
        case 270:
          g2 = Outline._rescaleAndSwap;
          c2 = e2 / n2 + 1;
          d2 = t2 / i2 + 1;
          u2 = -1 / n2;
          p2 = -1 / i2;
      }
      if (!a2) {
        a2 = [];
        for (const t3 of r2) {
          const e3 = t3.length;
          if (2 === e3) {
            a2.push(new Float32Array([NaN, NaN, NaN, NaN, t3[0], t3[1]]));
            continue;
          }
          if (4 === e3) {
            a2.push(new Float32Array([NaN, NaN, NaN, NaN, t3[0], t3[1], NaN, NaN, NaN, NaN, t3[2], t3[3]]));
            continue;
          }
          const i3 = new Float32Array(3 * (e3 - 2));
          a2.push(i3);
          let [n3, s3, r3, o3] = t3.subarray(0, 4);
          i3.set([NaN, NaN, NaN, NaN, n3, s3], 0);
          for (let a3 = 4; a3 < e3; a3 += 2) {
            const e4 = t3[a3], l3 = t3[a3 + 1];
            i3.set(Outline.createBezierPoints(n3, s3, r3, o3, e4, l3), 3 * (a3 - 2));
            [n3, s3, r3, o3] = [r3, o3, e4, l3];
          }
        }
      }
      for (let t3 = 0, e3 = a2.length; t3 < e3; t3++) h2.push({ line: g2(a2[t3].map((t4) => t4 ?? NaN), c2, d2, u2, p2), points: g2(r2[t3].map((t4) => t4 ?? NaN), c2, d2, u2, p2) });
      const m2 = new this.prototype.constructor();
      m2.build(h2, i2, n2, 1, o2, l2, s2);
      return m2;
    }
    get box() {
      return __privateGet(this, _Xo2);
    }
    updateProperty(t2, e2) {
      return "stroke-width" === t2 ? __privateMethod(this, _InkDrawOutline_instances, Cl_fn2).call(this, e2) : null;
    }
    updateParentDimensions([t2, e2], i2) {
      const [n2, s2] = __privateMethod(this, _InkDrawOutline_instances, eh_fn).call(this);
      __privateSet(this, _Xl2, t2);
      __privateSet(this, _ql2, e2);
      __privateSet(this, _Jl, i2);
      const [a2, r2] = __privateMethod(this, _InkDrawOutline_instances, eh_fn).call(this), o2 = a2 - n2, l2 = r2 - s2, h2 = __privateGet(this, _Xo2);
      h2[0] -= o2;
      h2[1] -= l2;
      h2[2] += 2 * o2;
      h2[3] += 2 * l2;
      return h2;
    }
    updateRotation(t2) {
      __privateSet(this, _Ql, t2);
      return { path: { transform: this.rotationTransform } };
    }
    get viewBox() {
      return __privateGet(this, _Xo2).map(Outline.svgRound).join(" ");
    }
    get defaultProperties() {
      const [t2, e2] = __privateGet(this, _Xo2);
      return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}` } };
    }
    get rotationTransform() {
      const [, , t2, e2] = __privateGet(this, _Xo2);
      let i2 = 0, n2 = 0, s2 = 0, a2 = 0, r2 = 0, o2 = 0;
      switch (__privateGet(this, _Ql)) {
        case 90:
          n2 = e2 / t2;
          s2 = -t2 / e2;
          r2 = t2;
          break;
        case 180:
          i2 = -1;
          a2 = -1;
          r2 = t2;
          o2 = e2;
          break;
        case 270:
          n2 = -e2 / t2;
          s2 = t2 / e2;
          o2 = e2;
          break;
        default:
          return "";
      }
      return `matrix(${i2} ${n2} ${s2} ${a2} ${Outline.svgRound(r2)} ${Outline.svgRound(o2)})`;
    }
    getPathResizingSVGProperties([t2, e2, i2, n2]) {
      const [s2, a2] = __privateMethod(this, _InkDrawOutline_instances, eh_fn).call(this), [r2, o2, l2, h2] = __privateGet(this, _Xo2);
      if (Math.abs(l2 - s2) <= Outline.PRECISION || Math.abs(h2 - a2) <= Outline.PRECISION) {
        const s3 = t2 + i2 / 2 - (r2 + l2 / 2), a3 = e2 + n2 / 2 - (o2 + h2 / 2);
        return { path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: `${this.rotationTransform} translate(${s3} ${a3})` } };
      }
      const c2 = (i2 - 2 * s2) / (l2 - 2 * s2), d2 = (n2 - 2 * a2) / (h2 - 2 * a2), u2 = l2 / i2, p2 = h2 / n2;
      return { path: { "transform-origin": `${Outline.svgRound(r2)} ${Outline.svgRound(o2)}`, transform: `${this.rotationTransform} scale(${u2} ${p2}) translate(${Outline.svgRound(s2)} ${Outline.svgRound(a2)}) scale(${c2} ${d2}) translate(${Outline.svgRound(-s2)} ${Outline.svgRound(-a2)})` } };
    }
    getPathResizedSVGProperties([t2, e2, i2, n2]) {
      const [s2, a2] = __privateMethod(this, _InkDrawOutline_instances, eh_fn).call(this), r2 = __privateGet(this, _Xo2), [o2, l2, h2, c2] = r2;
      r2[0] = t2;
      r2[1] = e2;
      r2[2] = i2;
      r2[3] = n2;
      if (Math.abs(h2 - s2) <= Outline.PRECISION || Math.abs(c2 - a2) <= Outline.PRECISION) {
        const s3 = t2 + i2 / 2 - (o2 + h2 / 2), a3 = e2 + n2 / 2 - (l2 + c2 / 2);
        for (const { line: t3, points: e3 } of __privateGet(this, _jl2)) {
          Outline._translate(t3, s3, a3, t3);
          Outline._translate(e3, s3, a3, e3);
        }
        return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
      }
      const d2 = (i2 - 2 * s2) / (h2 - 2 * s2), u2 = (n2 - 2 * a2) / (c2 - 2 * a2), p2 = -d2 * (o2 + s2) + t2 + s2, g2 = -u2 * (l2 + a2) + e2 + a2;
      if (1 !== d2 || 1 !== u2 || 0 !== p2 || 0 !== g2) for (const { line: t3, points: e3 } of __privateGet(this, _jl2)) {
        Outline._rescale(t3, p2, g2, d2, u2, t3);
        Outline._rescale(e3, p2, g2, d2, u2, e3);
      }
      return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
    }
    getPathTranslatedSVGProperties([t2, e2], i2) {
      const [n2, s2] = i2, a2 = __privateGet(this, _Xo2), r2 = t2 - a2[0], o2 = e2 - a2[1];
      if (__privateGet(this, _Xl2) === n2 && __privateGet(this, _ql2) === s2) for (const { line: t3, points: e3 } of __privateGet(this, _jl2)) {
        Outline._translate(t3, r2, o2, t3);
        Outline._translate(e3, r2, o2, e3);
      }
      else {
        const t3 = __privateGet(this, _Xl2) / n2, e3 = __privateGet(this, _ql2) / s2;
        __privateSet(this, _Xl2, n2);
        __privateSet(this, _ql2, s2);
        for (const { line: i3, points: n3 } of __privateGet(this, _jl2)) {
          Outline._rescale(i3, r2, o2, t3, e3, i3);
          Outline._rescale(n3, r2, o2, t3, e3, n3);
        }
        a2[2] *= t3;
        a2[3] *= e3;
      }
      a2[0] = t2;
      a2[1] = e2;
      return { root: { viewBox: this.viewBox }, path: { d: this.toSVGPath(), "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}` } };
    }
    get defaultSVGProperties() {
      const t2 = __privateGet(this, _Xo2);
      return { root: { viewBox: this.viewBox }, rootClass: { draw: true }, path: { d: this.toSVGPath(), "transform-origin": `${Outline.svgRound(t2[0])} ${Outline.svgRound(t2[1])}`, transform: this.rotationTransform || null }, bbox: t2 };
    }
  };
  _Xo2 = new WeakMap();
  _Ql = new WeakMap();
  _ko3 = new WeakMap();
  _jl2 = new WeakMap();
  _Xl2 = new WeakMap();
  _ql2 = new WeakMap();
  _Jl = new WeakMap();
  _ea3 = new WeakMap();
  _Oo4 = new WeakMap();
  _InkDrawOutline_instances = new WeakSet();
  eh_fn = function(t2 = __privateGet(this, _Oo4)) {
    const e2 = __privateGet(this, _ko3) + t2 / 2 * __privateGet(this, _Jl);
    return __privateGet(this, _ea3) % 180 == 0 ? [e2 / __privateGet(this, _Xl2), e2 / __privateGet(this, _ql2)] : [e2 / __privateGet(this, _ql2), e2 / __privateGet(this, _Xl2)];
  };
  th_fn = function() {
    const [t2, e2, i2, n2] = __privateGet(this, _Xo2), [s2, a2] = __privateMethod(this, _InkDrawOutline_instances, eh_fn).call(this, 0);
    return [t2 + s2, e2 + a2, i2 - 2 * s2, n2 - 2 * a2];
  };
  Zl_fn = function() {
    const t2 = __privateSet(this, _Xo2, i.slice());
    for (const { line: e3 } of __privateGet(this, _jl2)) {
      if (e3.length <= 12) {
        for (let i3 = 4, n4 = e3.length; i3 < n4; i3 += 6) Util.pointBoundingBox(e3[i3], e3[i3 + 1], t2);
        continue;
      }
      let i2 = e3[4], n3 = e3[5];
      for (let s2 = 6, a2 = e3.length; s2 < a2; s2 += 6) {
        const [a3, r2, o2, l2, h2, c2] = e3.subarray(s2, s2 + 6);
        Util.bezierBoundingBox(i2, n3, a3, r2, o2, l2, h2, c2, t2);
        i2 = h2;
        n3 = c2;
      }
    }
    const [e2, n2] = __privateMethod(this, _InkDrawOutline_instances, eh_fn).call(this);
    t2[0] = MathClamp(t2[0] - e2, 0, 1);
    t2[1] = MathClamp(t2[1] - n2, 0, 1);
    t2[2] = MathClamp(t2[2] + e2, 0, 1);
    t2[3] = MathClamp(t2[3] + n2, 0, 1);
    t2[2] -= t2[0];
    t2[3] -= t2[1];
  };
  Cl_fn2 = function(t2) {
    const [e2, i2] = __privateMethod(this, _InkDrawOutline_instances, eh_fn).call(this);
    __privateSet(this, _Oo4, t2);
    const [n2, s2] = __privateMethod(this, _InkDrawOutline_instances, eh_fn).call(this), [a2, r2] = [n2 - e2, s2 - i2], o2 = __privateGet(this, _Xo2);
    o2[0] -= a2;
    o2[1] -= r2;
    o2[2] += 2 * a2;
    o2[3] += 2 * r2;
    return o2;
  };
  var InkDrawingOptions = class _InkDrawingOptions extends DrawingOptions {
    constructor(t2) {
      super();
      this._viewParameters = t2;
      super.updateProperties({ fill: "none", stroke: AnnotationEditor._defaultLineColor, "stroke-opacity": 1, "stroke-width": 1, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": 10 });
    }
    updateSVGProperty(t2, e2) {
      if ("stroke-width" === t2) {
        e2 ?? (e2 = this["stroke-width"]);
        e2 *= this._viewParameters.realScale;
      }
      super.updateSVGProperty(t2, e2);
    }
    clone() {
      const t2 = new _InkDrawingOptions(this._viewParameters);
      t2.updateAll(this);
      return t2;
    }
  };
  var _InkEditor_instances, Eo_fn3;
  var _InkEditor = class _InkEditor extends DrawingEditor {
    constructor(t2) {
      super({ ...t2, name: "inkEditor" });
      __privateAdd(this, _InkEditor_instances);
      this._willKeepAspectRatio = true;
      this.defaultL10nId = "pdfjs-editor-ink-editor";
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
      this._defaultDrawingOptions = new InkDrawingOptions(e2.viewParameters);
    }
    static getDefaultDrawingOptions(t2) {
      const e2 = this._defaultDrawingOptions.clone();
      e2.updateProperties(t2);
      return e2;
    }
    static get supportMultipleDrawings() {
      return true;
    }
    static get typesMap() {
      return shadow(this, "typesMap", /* @__PURE__ */ new Map([[y.INK_THICKNESS, "stroke-width"], [y.INK_COLOR, "stroke"], [y.INK_OPACITY, "stroke-opacity"]]));
    }
    static createDrawerInstance(t2, e2, i2, n2, s2) {
      return new InkDrawOutliner(t2, e2, i2, n2, s2, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(t2, e2, i2, n2, s2, a2) {
      return InkDrawOutline.deserialize(t2, e2, i2, n2, s2, a2);
    }
    static async deserialize(t2, e2, i2) {
      let n2 = null;
      if (t2 instanceof InkAnnotationElement) {
        const { data: { inkLists: e3, rect: i3, rotation: s3, id: a2, color: r2, opacity: o2, borderStyle: { rawWidth: l2 }, popupRef: h2, richText: c2, contentsObj: d2, creationDate: u2, modificationDate: p2 }, parent: { page: { pageNumber: g2 } } } = t2;
        n2 = t2 = { annotationType: b.INK, color: Array.from(r2), thickness: l2, opacity: o2, paths: { points: e3 }, boxes: null, pageIndex: g2 - 1, rect: i3.slice(0), rotation: s3, annotationElementId: a2, id: a2, deleted: false, popupRef: h2, richText: c2, comment: d2?.str || null, creationDate: u2, modificationDate: p2 };
      }
      const s2 = await super.deserialize(t2, e2, i2);
      s2._initialData = n2;
      t2.comment && s2.setCommentData(t2);
      return s2;
    }
    get toolbarButtons() {
      this._colorPicker || (this._colorPicker = new BasicColorPicker(this));
      return [["colorPicker", this._colorPicker]];
    }
    get colorType() {
      return y.INK_COLOR;
    }
    get colorAndOpacityType() {
      return y.INK_COLOR_AND_OPACITY;
    }
    get opacityType() {
      return y.INK_OPACITY;
    }
    updateParams(t2, e2) {
      t2 !== y.INK_COLOR_AND_OPACITY ? super.updateParams(t2, e2) : this._updateColorAndOpacity(e2.color, e2.opacity);
    }
    static updateDefaultParams(t2, e2) {
      if (t2 !== y.INK_COLOR_AND_OPACITY) super.updateDefaultParams(t2, e2);
      else {
        super.updateDefaultParams(y.INK_COLOR, e2.color);
        super.updateDefaultParams(y.INK_OPACITY, e2.opacity);
      }
    }
    get color() {
      return this._drawingOptions.stroke;
    }
    get opacity() {
      return this._drawingOptions["stroke-opacity"];
    }
    onScaleChanging() {
      if (!this.parent) return;
      super.onScaleChanging();
      const { _drawId: t2, _drawingOptions: e2, parent: i2 } = this;
      e2.updateSVGProperty("stroke-width");
      i2.drawLayer.updateProperties(t2, e2.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
      const t2 = this._currentParent;
      if (t2) {
        super.onScaleChangingWhenDrawing();
        this._defaultDrawingOptions.updateSVGProperty("stroke-width");
        t2.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
      }
    }
    createDrawingOptions({ color: t2, thickness: e2, opacity: i2 }) {
      this._drawingOptions = _InkEditor.getDefaultDrawingOptions({ stroke: Util.makeHexColor(...t2), "stroke-width": e2, "stroke-opacity": i2 });
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const { lines: e2, points: i2 } = this.serializeDraw(t2), { _drawingOptions: { stroke: n2, "stroke-opacity": s2, "stroke-width": a2 } } = this, r2 = Object.assign(super.serialize(t2), { color: AnnotationEditor._colorManager.convert(n2), opacity: s2, thickness: a2, paths: { lines: e2, points: i2 } });
      this.addComment(r2);
      if (t2) {
        r2.isCopy = true;
        return r2;
      }
      if (this.annotationElementId && !__privateMethod(this, _InkEditor_instances, Eo_fn3).call(this, r2)) return null;
      r2.id = this.annotationElementId;
      return r2;
    }
    renderAnnotationElement(t2) {
      if (this.deleted) {
        t2.hide();
        return null;
      }
      const { points: e2, rect: i2 } = this.serializeDraw(false);
      t2.updateEdited({ rect: i2, thickness: this._drawingOptions["stroke-width"], points: e2, popup: this.comment });
      return null;
    }
  };
  _InkEditor_instances = new WeakSet();
  Eo_fn3 = function(t2) {
    const { color: e2, thickness: i2, opacity: n2, pageIndex: s2 } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t2.color.some((t3, i3) => t3 !== e2[i3]) || t2.thickness !== i2 || t2.opacity !== n2 || t2.pageIndex !== s2;
  };
  __publicField(_InkEditor, "_type", "ink");
  __publicField(_InkEditor, "_editorType", b.INK);
  __publicField(_InkEditor, "_defaultDrawingOptions", null);
  var InkEditor = _InkEditor;
  var ContourDrawOutline = class extends InkDrawOutline {
    toSVGPath() {
      let t2 = super.toSVGPath();
      t2.endsWith("Z") || (t2 += "Z");
      return t2;
    }
  };
  var _ih, _SignatureExtractor_static, nh_fn, _sh, ah_fn, rh_fn, oh_fn, lh_fn, hh_fn, ch_fn, dh_fn, uh_fn, ph_fn, gh_fn;
  var SignatureExtractor = class {
    static extractContoursFromText(t2, { fontFamily: e2, fontStyle: i2, fontWeight: n2 }, s2, a2, r2, o2) {
      let l2 = new OffscreenCanvas(1, 1), h2 = l2.getContext("2d", { alpha: false });
      const c2 = h2.font = `${i2} ${n2} 200px ${e2}`, { actualBoundingBoxLeft: d2, actualBoundingBoxRight: u2, actualBoundingBoxAscent: p2, actualBoundingBoxDescent: g2, fontBoundingBoxAscent: m2, fontBoundingBoxDescent: f2, width: b2 } = h2.measureText(t2), y2 = 1.5, v2 = Math.ceil(Math.max(Math.abs(d2) + Math.abs(u2) || 0, b2) * y2), A2 = Math.ceil(Math.max(Math.abs(p2) + Math.abs(g2) || 200, Math.abs(m2) + Math.abs(f2) || 200) * y2);
      l2 = new OffscreenCanvas(v2, A2);
      h2 = l2.getContext("2d", { alpha: true, willReadFrequently: true });
      h2.font = c2;
      h2.filter = "grayscale(1)";
      h2.fillStyle = "white";
      h2.fillRect(0, 0, v2, A2);
      h2.fillStyle = "black";
      h2.fillText(t2, 0.5 * v2 / 2, 1.5 * A2 / 2);
      const w2 = __privateMethod(this, _SignatureExtractor_static, uh_fn).call(this, h2.getImageData(0, 0, v2, A2).data), x2 = __privateMethod(this, _SignatureExtractor_static, dh_fn).call(this, w2), C2 = __privateMethod(this, _SignatureExtractor_static, ph_fn).call(this, x2), E2 = __privateMethod(this, _SignatureExtractor_static, oh_fn).call(this, w2, v2, A2, C2);
      return this.processDrawnLines({ lines: { curves: E2, width: v2, height: A2 }, pageWidth: s2, pageHeight: a2, rotation: r2, innerMargin: o2, mustSmooth: true, areContours: true });
    }
    static process(t2, e2, i2, n2, s2) {
      const [a2, r2, o2] = __privateMethod(this, _SignatureExtractor_static, gh_fn).call(this, t2), [l2, h2] = __privateMethod(this, _SignatureExtractor_static, ch_fn).call(this, a2, r2, o2, Math.hypot(r2, o2) * __privateGet(this, _ih).sigmaSFactor, __privateGet(this, _ih).sigmaR, __privateGet(this, _ih).kernelSize), c2 = __privateMethod(this, _SignatureExtractor_static, ph_fn).call(this, h2), d2 = __privateMethod(this, _SignatureExtractor_static, oh_fn).call(this, l2, r2, o2, c2);
      return this.processDrawnLines({ lines: { curves: d2, width: r2, height: o2 }, pageWidth: e2, pageHeight: i2, rotation: n2, innerMargin: s2, mustSmooth: true, areContours: true });
    }
    static processDrawnLines({ lines: t2, pageWidth: e2, pageHeight: i2, rotation: n2, innerMargin: s2, mustSmooth: a2, areContours: r2 }) {
      n2 % 180 != 0 && ([e2, i2] = [i2, e2]);
      const { curves: o2, width: l2, height: h2 } = t2, c2 = t2.thickness ?? 0, d2 = [], u2 = Math.min(e2 / l2, i2 / h2), p2 = u2 / e2, g2 = u2 / i2, m2 = [];
      for (const { points: t3 } of o2) {
        const e3 = a2 ? __privateMethod(this, _SignatureExtractor_static, hh_fn).call(this, t3) : t3;
        if (!e3) continue;
        m2.push(e3);
        const i3 = e3.length, n3 = new Float32Array(i3), s3 = new Float32Array(3 * (2 === i3 ? 2 : i3 - 2));
        d2.push({ line: s3, points: n3 });
        if (2 === i3) {
          n3[0] = e3[0] * p2;
          n3[1] = e3[1] * g2;
          s3.set([NaN, NaN, NaN, NaN, n3[0], n3[1]], 0);
          continue;
        }
        let [r3, o3, l3, h3] = e3;
        r3 *= p2;
        o3 *= g2;
        l3 *= p2;
        h3 *= g2;
        n3.set([r3, o3, l3, h3], 0);
        s3.set([NaN, NaN, NaN, NaN, r3, o3], 0);
        for (let t4 = 4; t4 < i3; t4 += 2) {
          const i4 = n3[t4] = e3[t4] * p2, a3 = n3[t4 + 1] = e3[t4 + 1] * g2;
          s3.set(Outline.createBezierPoints(r3, o3, l3, h3, i4, a3), 3 * (t4 - 2));
          [r3, o3, l3, h3] = [l3, h3, i4, a3];
        }
      }
      if (0 === d2.length) return null;
      const f2 = r2 ? new ContourDrawOutline() : new InkDrawOutline();
      f2.build(d2, e2, i2, 1, n2, r2 ? 0 : c2, s2);
      return { outline: f2, newCurves: m2, areContours: r2, thickness: c2, width: l2, height: h2 };
    }
    static async compressSignature({ outlines: t2, areContours: e2, thickness: i2, width: n2, height: s2 }) {
      let a2, r2 = 1 / 0, o2 = -1 / 0, l2 = 0;
      for (const e3 of t2) {
        l2 += e3.length;
        for (let t3 = 2, i3 = e3.length; t3 < i3; t3++) {
          const i4 = e3[t3] - e3[t3 - 2];
          r2 = Math.min(r2, i4);
          o2 = Math.max(o2, i4);
        }
      }
      a2 = r2 >= -128 && o2 <= 127 ? Int8Array : r2 >= -32768 && o2 <= 32767 ? Int16Array : Int32Array;
      const h2 = t2.length, c2 = 8 + 3 * h2, d2 = new Uint32Array(c2);
      let u2 = 0;
      d2[u2++] = c2 * Uint32Array.BYTES_PER_ELEMENT + (l2 - 2 * h2) * a2.BYTES_PER_ELEMENT;
      d2[u2++] = 0;
      d2[u2++] = n2;
      d2[u2++] = s2;
      d2[u2++] = e2 ? 0 : 1;
      d2[u2++] = Math.max(0, Math.floor(i2 ?? 0));
      d2[u2++] = h2;
      d2[u2++] = a2.BYTES_PER_ELEMENT;
      for (const e3 of t2) {
        d2[u2++] = e3.length - 2;
        d2[u2++] = e3[0];
        d2[u2++] = e3[1];
      }
      const p2 = new CompressionStream("deflate-raw"), g2 = p2.writable.getWriter();
      await g2.ready;
      g2.write(d2);
      const m2 = a2.prototype.constructor;
      for (const e3 of t2) {
        const t3 = new m2(e3.length - 2);
        for (let i3 = 2, n3 = e3.length; i3 < n3; i3++) t3[i3 - 2] = e3[i3] - e3[i3 - 2];
        g2.write(t3);
      }
      g2.close();
      return (await new Response(p2.readable).bytes()).toBase64();
    }
    static async decompressSignature(t2) {
      try {
        const e2 = Uint8Array.fromBase64(t2), { readable: i2, writable: n2 } = new DecompressionStream("deflate-raw"), s2 = n2.getWriter();
        await s2.ready;
        s2.write(e2).then(async () => {
          await s2.ready;
          await s2.close();
        }).catch(() => {
        });
        let a2 = null, r2 = 0;
        for await (const t3 of i2) {
          a2 || (a2 = new Uint8Array(new Uint32Array(t3.buffer, 0, 4)[0]));
          a2.set(t3, r2);
          r2 += t3.length;
        }
        const o2 = new Uint32Array(a2.buffer, 0, a2.length >> 2), l2 = o2[1];
        if (0 !== l2) throw new Error(`Invalid version: ${l2}`);
        const h2 = o2[2], c2 = o2[3], d2 = 0 === o2[4], u2 = o2[5], p2 = o2[6], g2 = o2[7], m2 = [], f2 = (8 + 3 * p2) * Uint32Array.BYTES_PER_ELEMENT;
        let b2;
        switch (g2) {
          case Int8Array.BYTES_PER_ELEMENT:
            b2 = new Int8Array(a2.buffer, f2);
            break;
          case Int16Array.BYTES_PER_ELEMENT:
            b2 = new Int16Array(a2.buffer, f2);
            break;
          case Int32Array.BYTES_PER_ELEMENT:
            b2 = new Int32Array(a2.buffer, f2);
        }
        r2 = 0;
        for (let t3 = 0; t3 < p2; t3++) {
          const e3 = o2[3 * t3 + 8], i3 = new Float32Array(e3 + 2);
          m2.push(i3);
          for (let e4 = 0; e4 < 2; e4++) i3[e4] = o2[3 * t3 + 8 + e4 + 1];
          for (let t4 = 0; t4 < e3; t4++) i3[t4 + 2] = i3[t4] + b2[r2++];
        }
        return { areContours: d2, thickness: u2, outlines: m2, width: h2, height: c2 };
      } catch (t3) {
        warn(`decompressSignature: ${t3}`);
        return null;
      }
    }
  };
  _ih = new WeakMap();
  _SignatureExtractor_static = new WeakSet();
  nh_fn = function(t2, e2, i2, n2) {
    n2 -= e2;
    return 0 === (i2 -= t2) ? n2 > 0 ? 0 : 4 : 1 === i2 ? n2 + 6 : 2 - n2;
  };
  _sh = new WeakMap();
  ah_fn = function(t2, e2, i2, n2, s2, a2, r2) {
    const o2 = __privateMethod(this, _SignatureExtractor_static, nh_fn).call(this, i2, n2, s2, a2);
    for (let s3 = 0; s3 < 8; s3++) {
      const a3 = (-s3 + o2 - r2 + 16) % 8;
      if (0 !== t2[(i2 + __privateGet(this, _sh)[2 * a3]) * e2 + (n2 + __privateGet(this, _sh)[2 * a3 + 1])]) return a3;
    }
    return -1;
  };
  rh_fn = function(t2, e2, i2, n2, s2, a2, r2) {
    const o2 = __privateMethod(this, _SignatureExtractor_static, nh_fn).call(this, i2, n2, s2, a2);
    for (let s3 = 0; s3 < 8; s3++) {
      const a3 = (s3 + o2 + r2 + 16) % 8;
      if (0 !== t2[(i2 + __privateGet(this, _sh)[2 * a3]) * e2 + (n2 + __privateGet(this, _sh)[2 * a3 + 1])]) return a3;
    }
    return -1;
  };
  oh_fn = function(t2, e2, i2, n2) {
    const s2 = t2.length, a2 = new Int32Array(s2);
    for (let e3 = 0; e3 < s2; e3++) a2[e3] = t2[e3] <= n2 ? 1 : 0;
    for (let t3 = 1; t3 < i2 - 1; t3++) a2[t3 * e2] = a2[t3 * e2 + e2 - 1] = 0;
    for (let t3 = 0; t3 < e2; t3++) a2[t3] = a2[e2 * i2 - 1 - t3] = 0;
    let r2, o2 = 1;
    const l2 = [];
    for (let t3 = 1; t3 < i2 - 1; t3++) {
      r2 = 1;
      for (let i3 = 1; i3 < e2 - 1; i3++) {
        const n3 = t3 * e2 + i3, s3 = a2[n3];
        if (0 === s3) continue;
        let h2 = t3, c2 = i3;
        if (1 === s3 && 0 === a2[n3 - 1]) {
          o2 += 1;
          c2 -= 1;
        } else {
          if (!(s3 >= 1 && 0 === a2[n3 + 1])) {
            1 !== s3 && (r2 = Math.abs(s3));
            continue;
          }
          o2 += 1;
          c2 += 1;
          s3 > 1 && (r2 = s3);
        }
        const d2 = [i3, t3], u2 = c2 === i3 + 1, p2 = { isHole: u2, points: d2, id: o2, parent: 0 };
        l2.push(p2);
        let g2;
        for (const t4 of l2) if (t4.id === r2) {
          g2 = t4;
          break;
        }
        g2 ? g2.isHole ? p2.parent = u2 ? g2.parent : r2 : p2.parent = u2 ? r2 : g2.parent : p2.parent = u2 ? r2 : 0;
        const m2 = __privateMethod(this, _SignatureExtractor_static, ah_fn).call(this, a2, e2, t3, i3, h2, c2, 0);
        if (-1 === m2) {
          a2[n3] = -o2;
          1 !== a2[n3] && (r2 = Math.abs(a2[n3]));
          continue;
        }
        let f2 = __privateGet(this, _sh)[2 * m2], b2 = __privateGet(this, _sh)[2 * m2 + 1];
        const y2 = t3 + f2, v2 = i3 + b2;
        h2 = y2;
        c2 = v2;
        let A2 = t3, w2 = i3;
        for (; ; ) {
          const s4 = __privateMethod(this, _SignatureExtractor_static, rh_fn).call(this, a2, e2, A2, w2, h2, c2, 1);
          f2 = __privateGet(this, _sh)[2 * s4];
          b2 = __privateGet(this, _sh)[2 * s4 + 1];
          const l3 = A2 + f2, u3 = w2 + b2;
          d2.push(u3, l3);
          const p3 = A2 * e2 + w2;
          0 === a2[p3 + 1] ? a2[p3] = -o2 : 1 === a2[p3] && (a2[p3] = o2);
          if (l3 === t3 && u3 === i3 && A2 === y2 && w2 === v2) {
            1 !== a2[n3] && (r2 = Math.abs(a2[n3]));
            break;
          }
          h2 = A2;
          c2 = w2;
          A2 = l3;
          w2 = u3;
        }
      }
    }
    return l2;
  };
  lh_fn = function(t2, e2, i2, n2) {
    if (i2 - e2 <= 4) {
      for (let s3 = e2; s3 < i2 - 2; s3 += 2) n2.push(t2[s3], t2[s3 + 1]);
      return;
    }
    const s2 = t2[e2], a2 = t2[e2 + 1], r2 = t2[i2 - 4] - s2, o2 = t2[i2 - 3] - a2, l2 = Math.hypot(r2, o2), h2 = r2 / l2, c2 = o2 / l2, d2 = h2 * a2 - c2 * s2, u2 = o2 / r2, p2 = 1 / l2, g2 = Math.atan(u2), m2 = Math.cos(g2), f2 = Math.sin(g2), b2 = p2 * (Math.abs(m2) + Math.abs(f2)), y2 = p2 * (1 - b2 + b2 ** 2), v2 = Math.max(Math.atan(Math.abs(f2 + m2) * y2), Math.atan(Math.abs(f2 - m2) * y2));
    let A2 = 0, w2 = e2;
    for (let n3 = e2 + 2; n3 < i2 - 2; n3 += 2) {
      const e3 = Math.abs(d2 - h2 * t2[n3 + 1] + c2 * t2[n3]);
      if (e3 > A2) {
        w2 = n3;
        A2 = e3;
      }
    }
    if (A2 > (l2 * v2) ** 2) {
      __privateMethod(this, _SignatureExtractor_static, lh_fn).call(this, t2, e2, w2 + 2, n2);
      __privateMethod(this, _SignatureExtractor_static, lh_fn).call(this, t2, w2, i2, n2);
    } else n2.push(s2, a2);
  };
  hh_fn = function(t2) {
    const e2 = [], i2 = t2.length;
    __privateMethod(this, _SignatureExtractor_static, lh_fn).call(this, t2, 0, i2, e2);
    e2.push(t2[i2 - 2], t2[i2 - 1]);
    return e2.length <= 4 ? null : e2;
  };
  ch_fn = function(t2, e2, i2, n2, s2, a2) {
    const r2 = new Float32Array(a2 ** 2), o2 = -2 * n2 ** 2, l2 = a2 >> 1;
    for (let t3 = 0; t3 < a2; t3++) {
      const e3 = (t3 - l2) ** 2;
      for (let i3 = 0; i3 < a2; i3++) r2[t3 * a2 + i3] = Math.exp((e3 + (i3 - l2) ** 2) / o2);
    }
    const h2 = new Float32Array(256), c2 = -2 * s2 ** 2;
    for (let t3 = 0; t3 < 256; t3++) h2[t3] = Math.exp(t3 ** 2 / c2);
    const d2 = t2.length, u2 = new Uint8Array(d2), p2 = new Uint32Array(256);
    for (let n3 = 0; n3 < i2; n3++) for (let s3 = 0; s3 < e2; s3++) {
      const o3 = n3 * e2 + s3, c3 = t2[o3];
      let d3 = 0, g2 = 0;
      for (let o4 = 0; o4 < a2; o4++) {
        const u3 = n3 + o4 - l2;
        if (!(u3 < 0 || u3 >= i2)) for (let i3 = 0; i3 < a2; i3++) {
          const n4 = s3 + i3 - l2;
          if (n4 < 0 || n4 >= e2) continue;
          const p3 = t2[u3 * e2 + n4], m2 = r2[o4 * a2 + i3] * h2[Math.abs(p3 - c3)];
          d3 += p3 * m2;
          g2 += m2;
        }
      }
      p2[u2[o3] = Math.round(d3 / g2)]++;
    }
    return [u2, p2];
  };
  dh_fn = function(t2) {
    const e2 = new Uint32Array(256);
    for (const i2 of t2) e2[i2]++;
    return e2;
  };
  uh_fn = function(t2) {
    const e2 = t2.length, i2 = new Uint8ClampedArray(e2 >> 2);
    let n2 = -1 / 0, s2 = 1 / 0;
    for (let e3 = 0, a3 = i2.length; e3 < a3; e3++) {
      const a4 = i2[e3] = t2[e3 << 2];
      n2 = Math.max(n2, a4);
      s2 = Math.min(s2, a4);
    }
    const a2 = 255 / (n2 - s2);
    for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) i2[t3] = (i2[t3] - s2) * a2;
    return i2;
  };
  ph_fn = function(t2) {
    let e2, i2 = -1 / 0, n2 = -1 / 0;
    const s2 = t2.findIndex((t3) => 0 !== t3);
    let a2 = s2, r2 = s2;
    for (e2 = s2; e2 < 256; e2++) {
      const s3 = t2[e2];
      if (s3 > i2) {
        if (e2 - a2 > n2) {
          n2 = e2 - a2;
          r2 = e2 - 1;
        }
        i2 = s3;
        a2 = e2;
      }
    }
    for (e2 = r2 - 1; e2 >= 0 && !(t2[e2] > t2[e2 + 1]); e2--) ;
    return e2;
  };
  gh_fn = function(t2) {
    const e2 = t2, { width: i2, height: n2 } = t2, { maxDim: s2 } = __privateGet(this, _ih);
    let a2 = i2, r2 = n2;
    if (i2 > s2 || n2 > s2) {
      let o3 = i2, l3 = n2, h2 = Math.log2(Math.max(i2, n2) / s2);
      const c2 = Math.floor(h2);
      h2 = h2 === c2 ? c2 - 1 : c2;
      for (let i3 = 0; i3 < h2; i3++) {
        a2 = Math.ceil(o3 / 2);
        r2 = Math.ceil(l3 / 2);
        const i4 = new OffscreenCanvas(a2, r2);
        i4.getContext("2d").drawImage(t2, 0, 0, o3, l3, 0, 0, a2, r2);
        o3 = a2;
        l3 = r2;
        t2 !== e2 && t2.close();
        t2 = i4.transferToImageBitmap();
      }
      const d2 = Math.min(s2 / a2, s2 / r2);
      a2 = Math.round(a2 * d2);
      r2 = Math.round(r2 * d2);
    }
    const o2 = new OffscreenCanvas(a2, r2).getContext("2d", { willReadFrequently: true });
    o2.fillStyle = "white";
    o2.fillRect(0, 0, a2, r2);
    o2.filter = "grayscale(1)";
    o2.drawImage(t2, 0, 0, t2.width, t2.height, 0, 0, a2, r2);
    const l2 = o2.getImageData(0, 0, a2, r2).data;
    return [__privateMethod(this, _SignatureExtractor_static, uh_fn).call(this, l2), a2, r2];
  };
  __privateAdd(SignatureExtractor, _SignatureExtractor_static);
  __privateAdd(SignatureExtractor, _ih, { maxDim: 512, sigmaSFactor: 0.02, sigmaR: 25, kernelSize: 16 });
  __privateAdd(SignatureExtractor, _sh, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
  var SignatureOptions = class _SignatureOptions extends DrawingOptions {
    constructor() {
      super();
      super.updateProperties({ fill: AnnotationEditor._defaultLineColor, "stroke-width": 0 });
    }
    clone() {
      const t2 = new _SignatureOptions();
      t2.updateAll(this);
      return t2;
    }
  };
  var DrawnSignatureOptions = class _DrawnSignatureOptions extends InkDrawingOptions {
    constructor(t2) {
      super(t2);
      super.updateProperties({ stroke: AnnotationEditor._defaultLineColor, "stroke-width": 1 });
    }
    clone() {
      const t2 = new _DrawnSignatureOptions(this._viewParameters);
      t2.updateAll(this);
      return t2;
    }
  };
  var _mh, _fh, _bh, _yh;
  var _SignatureEditor = class _SignatureEditor extends DrawingEditor {
    constructor(t2) {
      super({ ...t2, mustBeCommitted: true, name: "signatureEditor" });
      __privateAdd(this, _mh, false);
      __privateAdd(this, _fh, null);
      __privateAdd(this, _bh, null);
      __privateAdd(this, _yh, null);
      this._willKeepAspectRatio = true;
      __privateSet(this, _bh, t2.signatureData || null);
      __privateSet(this, _fh, null);
      this.defaultL10nId = "pdfjs-editor-signature-editor1";
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
      this._defaultDrawingOptions = new SignatureOptions();
      this._defaultDrawnSignatureOptions = new DrawnSignatureOptions(e2.viewParameters);
    }
    static getDefaultDrawingOptions(t2) {
      const e2 = this._defaultDrawingOptions.clone();
      e2.updateProperties(t2);
      return e2;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static get typesMap() {
      return shadow(this, "typesMap", /* @__PURE__ */ new Map());
    }
    static get isDrawer() {
      return false;
    }
    get telemetryFinalData() {
      return { type: "signature", hasDescription: !!__privateGet(this, _fh) };
    }
    static computeTelemetryFinalData(t2) {
      const e2 = t2.get("hasDescription");
      return { hasAltText: e2.get(true) ?? 0, hasNoAltText: e2.get(false) ?? 0 };
    }
    get isResizable() {
      return true;
    }
    onScaleChanging() {
      null !== this._drawId && super.onScaleChanging();
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      const { _isCopy: i2 } = this;
      if (i2) {
        this._isCopy = false;
        t2 = this.x;
        e2 = this.y;
      }
      super.render();
      if (null === this._drawId) if (__privateGet(this, _bh)) {
        const { lines: t3, mustSmooth: e3, areContours: i3, description: n2, uuid: s2, heightInPage: a2 } = __privateGet(this, _bh), { rawDims: { pageWidth: r2, pageHeight: o2 }, rotation: l2 } = this.parent.viewport, h2 = SignatureExtractor.processDrawnLines({ lines: t3, pageWidth: r2, pageHeight: o2, rotation: l2, innerMargin: _SignatureEditor._INNER_MARGIN, mustSmooth: e3, areContours: i3 });
        this.addSignature(h2, a2, n2, s2);
      } else {
        this.div.setAttribute("data-l10n-args", JSON.stringify({ description: "" }));
        this.div.hidden = true;
        this._uiManager.getSignature(this);
      }
      else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: __privateGet(this, _fh) || "" }));
      if (i2) {
        this._isCopy = true;
        this._moveAfterPaste(t2, e2);
      }
      return this.div;
    }
    setUuid(t2) {
      __privateSet(this, _yh, t2);
      this.addEditToolbar();
    }
    getUuid() {
      return __privateGet(this, _yh);
    }
    get description() {
      return __privateGet(this, _fh);
    }
    set description(t2) {
      __privateSet(this, _fh, t2);
      if (this.div) {
        this.div.setAttribute("data-l10n-args", JSON.stringify({ description: t2 }));
        super.addEditToolbar().then((e2) => {
          e2?.updateEditSignatureButton(t2);
        });
      }
    }
    getSignaturePreview() {
      const { newCurves: t2, areContours: e2, thickness: i2, width: n2, height: s2 } = __privateGet(this, _bh), a2 = Math.max(n2, s2);
      return { areContours: e2, outline: SignatureExtractor.processDrawnLines({ lines: { curves: t2.map((t3) => ({ points: t3 })), thickness: i2, width: n2, height: s2 }, pageWidth: a2, pageHeight: a2, rotation: 0, innerMargin: 0, mustSmooth: false, areContours: e2 }).outline };
    }
    get toolbarButtons() {
      return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
    }
    addSignature(t2, e2, i2, n2) {
      const { x: s2, y: a2 } = this, { outline: r2 } = __privateSet(this, _bh, t2);
      __privateSet(this, _mh, r2 instanceof ContourDrawOutline);
      this.description = i2;
      let o2;
      if (__privateGet(this, _mh)) o2 = _SignatureEditor.getDefaultDrawingOptions();
      else {
        o2 = _SignatureEditor._defaultDrawnSignatureOptions.clone();
        o2.updateProperties({ "stroke-width": r2.thickness });
      }
      this._addOutlines({ drawOutlines: r2, drawingOptions: o2 });
      const [, l2] = this.pageDimensions;
      let h2 = e2 / l2;
      h2 = h2 >= 1 ? 0.5 : h2;
      this.width *= h2 / this.height;
      if (this.width >= 1) {
        h2 *= 0.9 / this.width;
        this.width = 0.9;
      }
      this.height = h2;
      this.setDims();
      this.x = s2;
      this.y = a2;
      this.center();
      this._onResized();
      this.onScaleChanging();
      this.rotate();
      this._uiManager.addToAnnotationStorage(this);
      this.setUuid(n2);
      this._reportTelemetry({ action: "pdfjs.signature.inserted", data: { hasBeenSaved: !!n2, hasDescription: !!i2 } });
      this.div.hidden = false;
    }
    getFromImage(t2) {
      const { rawDims: { pageWidth: e2, pageHeight: i2 }, rotation: n2 } = this.parent.viewport;
      return SignatureExtractor.process(t2, e2, i2, n2, _SignatureEditor._INNER_MARGIN);
    }
    getFromText(t2, e2) {
      const { rawDims: { pageWidth: i2, pageHeight: n2 }, rotation: s2 } = this.parent.viewport;
      return SignatureExtractor.extractContoursFromText(t2, e2, i2, n2, s2, _SignatureEditor._INNER_MARGIN);
    }
    getDrawnSignature(t2) {
      const { rawDims: { pageWidth: e2, pageHeight: i2 }, rotation: n2 } = this.parent.viewport;
      return SignatureExtractor.processDrawnLines({ lines: t2, pageWidth: e2, pageHeight: i2, rotation: n2, innerMargin: _SignatureEditor._INNER_MARGIN, mustSmooth: false, areContours: false });
    }
    createDrawingOptions({ areContours: t2, thickness: e2 }) {
      if (t2) this._drawingOptions = _SignatureEditor.getDefaultDrawingOptions();
      else {
        this._drawingOptions = _SignatureEditor._defaultDrawnSignatureOptions.clone();
        this._drawingOptions.updateProperties({ "stroke-width": e2 });
      }
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      const { lines: e2, points: i2 } = this.serializeDraw(t2), { _drawingOptions: { "stroke-width": n2 } } = this, s2 = Object.assign(super.serialize(t2), { isSignature: true, areContours: __privateGet(this, _mh), color: [0, 0, 0], thickness: __privateGet(this, _mh) ? 0 : n2 });
      this.addComment(s2);
      if (t2) {
        s2.paths = { lines: e2, points: i2 };
        s2.uuid = __privateGet(this, _yh);
        s2.isCopy = true;
      } else s2.lines = e2;
      __privateGet(this, _fh) && (s2.accessibilityData = { type: "Figure", alt: __privateGet(this, _fh) });
      return s2;
    }
    static deserializeDraw(t2, e2, i2, n2, s2, a2) {
      return a2.areContours ? ContourDrawOutline.deserialize(t2, e2, i2, n2, s2, a2) : InkDrawOutline.deserialize(t2, e2, i2, n2, s2, a2);
    }
    static async deserialize(t2, e2, i2) {
      const n2 = await super.deserialize(t2, e2, i2);
      __privateSet(n2, _mh, t2.areContours);
      n2.description = t2.accessibilityData?.alt || "";
      __privateSet(n2, _yh, t2.uuid);
      return n2;
    }
  };
  _mh = new WeakMap();
  _fh = new WeakMap();
  _bh = new WeakMap();
  _yh = new WeakMap();
  __publicField(_SignatureEditor, "_type", "signature");
  __publicField(_SignatureEditor, "_editorType", b.SIGNATURE);
  __publicField(_SignatureEditor, "_defaultDrawingOptions", null);
  var SignatureEditor = _SignatureEditor;
  var _vh, _Ah, _wh, _xh, _Ch, _Eh, _Sh, _Th, _kh, __h, _Mh, _StampEditor_instances, Dh_fn, Ih_fn, Fh_fn, Ph_fn, Lh_fn, Bh_fn, Oh_fn, Eo_fn4;
  var StampEditor = class extends AnnotationEditor {
    constructor(t2) {
      super({ ...t2, name: "stampEditor" });
      __privateAdd(this, _StampEditor_instances);
      __privateAdd(this, _vh, null);
      __privateAdd(this, _Ah, null);
      __privateAdd(this, _wh, null);
      __privateAdd(this, _xh, null);
      __privateAdd(this, _Ch, null);
      __privateAdd(this, _Eh, "");
      __privateAdd(this, _Sh, null);
      __privateAdd(this, _Th, false);
      __privateAdd(this, _kh, null);
      __privateAdd(this, __h, false);
      __privateAdd(this, _Mh, false);
      __privateSet(this, _xh, t2.bitmapUrl);
      __privateSet(this, _Ch, t2.bitmapFile);
      this.defaultL10nId = "pdfjs-editor-stamp-editor";
    }
    static initialize(t2, e2) {
      AnnotationEditor.initialize(t2, e2);
    }
    static isHandlingMimeForPasting(t2) {
      return j.includes(t2);
    }
    static paste(t2, e2) {
      e2.pasteEditor({ mode: b.STAMP }, { bitmapFile: t2.getAsFile() });
    }
    altTextFinish() {
      this._uiManager.useNewAltTextFlow && (this.div.hidden = false);
      super.altTextFinish();
    }
    get telemetryFinalData() {
      return { type: "stamp", hasAltText: !!this.altTextData?.altText };
    }
    static computeTelemetryFinalData(t2) {
      const e2 = t2.get("hasAltText");
      return { hasAltText: e2.get(true) ?? 0, hasNoAltText: e2.get(false) ?? 0 };
    }
    async mlGuessAltText(t2 = null, e2 = true) {
      if (this.hasAltTextData()) return null;
      const { mlManager: i2 } = this._uiManager;
      if (!i2) throw new Error("No ML.");
      if (!await i2.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
      const { data: n2, width: s2, height: a2 } = t2 || this.copyCanvas(null, null, true).imageData, r2 = await i2.guess({ name: "altText", request: { data: n2, width: s2, height: a2, channels: n2.length / (s2 * a2) } });
      if (!r2) throw new Error("No response from the AI service.");
      if (r2.error) throw new Error("Error from the AI service.");
      if (r2.cancel) return null;
      if (!r2.output) throw new Error("No valid response from the AI service.");
      const o2 = r2.output;
      await this.setGuessedAltText(o2);
      e2 && !this.hasAltTextData() && (this.altTextData = { alt: o2, decorative: false });
      return o2;
    }
    remove() {
      if (__privateGet(this, _Ah)) {
        __privateSet(this, _vh, null);
        this._uiManager.imageManager.deleteId(__privateGet(this, _Ah));
        __privateGet(this, _Sh)?.remove();
        __privateSet(this, _Sh, null);
        if (__privateGet(this, _kh)) {
          clearTimeout(__privateGet(this, _kh));
          __privateSet(this, _kh, null);
        }
      }
      super.remove();
    }
    rebuild() {
      if (this.parent) {
        super.rebuild();
        if (null !== this.div) {
          __privateGet(this, _Ah) && null === __privateGet(this, _Sh) && __privateMethod(this, _StampEditor_instances, Fh_fn).call(this);
          this.isAttachedToDOM || this.parent.add(this);
        }
      } else __privateGet(this, _Ah) && __privateMethod(this, _StampEditor_instances, Fh_fn).call(this);
    }
    onceAdded(t2) {
      this._isDraggable = true;
      t2 && this.div.focus();
    }
    isEmpty() {
      return !(__privateGet(this, _wh) || __privateGet(this, _vh) || __privateGet(this, _xh) || __privateGet(this, _Ch) || __privateGet(this, _Ah) || __privateGet(this, _Th));
    }
    get toolbarButtons() {
      return [["altText", this.createAltText()]];
    }
    get isResizable() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      if (this._isCopy) {
        t2 = this.x;
        e2 = this.y;
      }
      super.render();
      this.div.hidden = true;
      this.createAltText();
      __privateGet(this, _Th) || (__privateGet(this, _vh) ? __privateMethod(this, _StampEditor_instances, Ph_fn).call(this) : __privateMethod(this, _StampEditor_instances, Fh_fn).call(this));
      this._isCopy && this._moveAfterPaste(t2, e2);
      this._uiManager.addShouldRescale(this);
      return this.div;
    }
    setCanvas(t2, e2) {
      const { id: i2, bitmap: n2 } = this._uiManager.imageManager.getFromCanvas(t2, e2);
      e2.remove();
      if (i2 && this._uiManager.imageManager.isValidId(i2)) {
        __privateSet(this, _Ah, i2);
        n2 && __privateSet(this, _vh, n2);
        __privateSet(this, _Th, false);
        __privateMethod(this, _StampEditor_instances, Ph_fn).call(this);
      }
    }
    _onResized() {
      this.onScaleChanging();
    }
    onScaleChanging() {
      if (!this.parent) return;
      null !== __privateGet(this, _kh) && clearTimeout(__privateGet(this, _kh));
      __privateSet(this, _kh, setTimeout(() => {
        __privateSet(this, _kh, null);
        __privateMethod(this, _StampEditor_instances, Bh_fn).call(this);
      }, 200));
    }
    copyCanvas(t2, e2, i2 = false) {
      t2 || (t2 = 224);
      const { width: n2, height: s2 } = __privateGet(this, _vh), a2 = new OutputScale();
      let r2 = __privateGet(this, _vh), o2 = n2, l2 = s2, h2 = null;
      if (e2) {
        if (n2 > e2 || s2 > e2) {
          const t4 = Math.min(e2 / n2, e2 / s2);
          o2 = Math.floor(n2 * t4);
          l2 = Math.floor(s2 * t4);
        }
        h2 = document.createElement("canvas");
        const t3 = h2.width = Math.ceil(o2 * a2.sx), i3 = h2.height = Math.ceil(l2 * a2.sy);
        __privateGet(this, __h) || (r2 = __privateMethod(this, _StampEditor_instances, Lh_fn).call(this, t3, i3));
        const c3 = h2.getContext("2d");
        c3.filter = this._uiManager.hcmFilter;
        let d2 = "white", u2 = "#cfcfd8";
        if ("none" !== this._uiManager.hcmFilter) u2 = "black";
        else if (ColorScheme.isDarkMode) {
          d2 = "#8f8f9d";
          u2 = "#42414d";
        }
        const p2 = 15, g2 = p2 * a2.sx, m2 = p2 * a2.sy, f2 = new OffscreenCanvas(2 * g2, 2 * m2), b2 = f2.getContext("2d");
        b2.fillStyle = d2;
        b2.fillRect(0, 0, 2 * g2, 2 * m2);
        b2.fillStyle = u2;
        b2.fillRect(0, 0, g2, m2);
        b2.fillRect(g2, m2, g2, m2);
        c3.fillStyle = c3.createPattern(f2, "repeat");
        c3.fillRect(0, 0, t3, i3);
        c3.drawImage(r2, 0, 0, r2.width, r2.height, 0, 0, t3, i3);
      }
      let c2 = null;
      if (i2) {
        let e3, i3;
        if (a2.symmetric && r2.width < t2 && r2.height < t2) {
          e3 = r2.width;
          i3 = r2.height;
        } else {
          r2 = __privateGet(this, _vh);
          if (n2 > t2 || s2 > t2) {
            const a3 = Math.min(t2 / n2, t2 / s2);
            e3 = Math.floor(n2 * a3);
            i3 = Math.floor(s2 * a3);
            __privateGet(this, __h) || (r2 = __privateMethod(this, _StampEditor_instances, Lh_fn).call(this, e3, i3));
          }
        }
        const o3 = new OffscreenCanvas(e3, i3).getContext("2d", { willReadFrequently: true });
        o3.drawImage(r2, 0, 0, r2.width, r2.height, 0, 0, e3, i3);
        c2 = { width: e3, height: i3, data: o3.getImageData(0, 0, e3, i3).data };
      }
      return { canvas: h2, width: o2, height: l2, imageData: c2 };
    }
    static async deserialize(t2, e2, i2) {
      let n2 = null, s2 = false;
      if (t2 instanceof StampAnnotationElement) {
        const { data: { rect: a3, rotation: r3, id: o3, structParent: l3, popupRef: h3, richText: c3, contentsObj: d3, creationDate: u3, modificationDate: p3 }, container: g2, parent: { page: { pageNumber: f2 } }, canvas: y2 } = t2;
        let v2, A2;
        if (y2) {
          delete t2.canvas;
          ({ id: v2, bitmap: A2 } = i2.imageManager.getFromCanvas(g2.id, y2));
          y2.remove();
        } else {
          s2 = true;
          t2._hasNoCanvas = true;
        }
        const w2 = (await e2._structTree.getAriaAttributes(`${m}${o3}`))?.get("aria-label") || "";
        n2 = t2 = { annotationType: b.STAMP, bitmapId: v2, bitmap: A2, pageIndex: f2 - 1, rect: a3.slice(0), rotation: r3, annotationElementId: o3, id: o3, deleted: false, accessibilityData: { decorative: false, altText: w2 }, isSvg: false, structParent: l3, popupRef: h3, richText: c3, comment: d3?.str || null, creationDate: u3, modificationDate: p3 };
      }
      const a2 = await super.deserialize(t2, e2, i2), { rect: r2, bitmap: o2, bitmapUrl: l2, bitmapId: h2, isSvg: c2, accessibilityData: d2 } = t2;
      if (s2) {
        i2.addMissingCanvas(t2.id, a2);
        __privateSet(a2, _Th, true);
      } else if (h2 && i2.imageManager.isValidId(h2)) {
        __privateSet(a2, _Ah, h2);
        o2 && __privateSet(a2, _vh, o2);
      } else __privateSet(a2, _xh, l2);
      __privateSet(a2, __h, c2);
      const [u2, p2] = a2.pageDimensions;
      a2.width = (r2[2] - r2[0]) / u2;
      a2.height = (r2[3] - r2[1]) / p2;
      d2 && (a2.altTextData = d2);
      a2._initialData = n2;
      t2.comment && a2.setCommentData(t2);
      __privateSet(a2, _Mh, !!n2);
      return a2;
    }
    serialize(t2 = false, e2 = null) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const i2 = Object.assign(super.serialize(t2), { bitmapId: __privateGet(this, _Ah), isSvg: __privateGet(this, __h) });
      this.addComment(i2);
      if (t2) {
        i2.bitmapUrl = __privateMethod(this, _StampEditor_instances, Oh_fn).call(this, true);
        i2.accessibilityData = this.serializeAltText(true);
        i2.isCopy = true;
        return i2;
      }
      const { decorative: n2, altText: s2 } = this.serializeAltText(false);
      !n2 && s2 && (i2.accessibilityData = { type: "Figure", alt: s2 });
      if (this.annotationElementId) {
        const t3 = __privateMethod(this, _StampEditor_instances, Eo_fn4).call(this, i2);
        if (t3.isSame) return null;
        t3.isSameAltText ? delete i2.accessibilityData : i2.accessibilityData.structParent = this._initialData.structParent ?? -1;
        i2.id = this.annotationElementId;
        delete i2.bitmapId;
        return i2;
      }
      if (null === e2) return i2;
      e2.stamps || (e2.stamps = /* @__PURE__ */ new Map());
      const a2 = __privateGet(this, __h) ? (i2.rect[2] - i2.rect[0]) * (i2.rect[3] - i2.rect[1]) : null;
      if (e2.stamps.has(__privateGet(this, _Ah))) {
        if (__privateGet(this, __h)) {
          const t3 = e2.stamps.get(__privateGet(this, _Ah));
          if (a2 > t3.area) {
            t3.area = a2;
            t3.serialized.bitmap.close();
            t3.serialized.bitmap = __privateMethod(this, _StampEditor_instances, Oh_fn).call(this, false);
          }
        }
      } else {
        e2.stamps.set(__privateGet(this, _Ah), { area: a2, serialized: i2 });
        i2.bitmap = __privateMethod(this, _StampEditor_instances, Oh_fn).call(this, false);
      }
      return i2;
    }
    renderAnnotationElement(t2) {
      if (this.deleted) {
        t2.hide();
        return null;
      }
      t2.updateEdited({ rect: this.getPDFRect(), popup: this.comment });
      return null;
    }
  };
  _vh = new WeakMap();
  _Ah = new WeakMap();
  _wh = new WeakMap();
  _xh = new WeakMap();
  _Ch = new WeakMap();
  _Eh = new WeakMap();
  _Sh = new WeakMap();
  _Th = new WeakMap();
  _kh = new WeakMap();
  __h = new WeakMap();
  _Mh = new WeakMap();
  _StampEditor_instances = new WeakSet();
  Dh_fn = function(t2, e2 = false) {
    if (t2) {
      __privateSet(this, _vh, t2.bitmap);
      if (!e2) {
        __privateSet(this, _Ah, t2.id);
        __privateSet(this, __h, t2.isSvg);
      }
      t2.file && __privateSet(this, _Eh, t2.file.name);
      __privateMethod(this, _StampEditor_instances, Ph_fn).call(this);
    } else this.remove();
  };
  Ih_fn = function() {
    __privateSet(this, _wh, null);
    this._uiManager.enableWaiting(false);
    if (__privateGet(this, _Sh)) if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __privateGet(this, _vh)) this.addEditToolbar().then(() => {
      this._editToolbar.hide();
      this._uiManager.editAltText(this, true);
    });
    else {
      if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __privateGet(this, _vh)) {
        this._reportTelemetry({ action: "pdfjs.image.image_added", data: { alt_text_modal: false, alt_text_type: "empty" } });
        try {
          this.mlGuessAltText();
        } catch {
        }
      }
      this.div.focus();
    }
  };
  Fh_fn = function() {
    if (__privateGet(this, _Ah)) {
      this._uiManager.enableWaiting(true);
      this._uiManager.imageManager.getFromId(__privateGet(this, _Ah)).then((t3) => __privateMethod(this, _StampEditor_instances, Dh_fn).call(this, t3, true)).finally(() => __privateMethod(this, _StampEditor_instances, Ih_fn).call(this));
      return;
    }
    if (__privateGet(this, _xh)) {
      const t3 = __privateGet(this, _xh);
      __privateSet(this, _xh, null);
      this._uiManager.enableWaiting(true);
      __privateSet(this, _wh, this._uiManager.imageManager.getFromUrl(t3).then((t4) => __privateMethod(this, _StampEditor_instances, Dh_fn).call(this, t4)).finally(() => __privateMethod(this, _StampEditor_instances, Ih_fn).call(this)));
      return;
    }
    if (__privateGet(this, _Ch)) {
      const t3 = __privateGet(this, _Ch);
      __privateSet(this, _Ch, null);
      this._uiManager.enableWaiting(true);
      __privateSet(this, _wh, this._uiManager.imageManager.getFromFile(t3).then((t4) => __privateMethod(this, _StampEditor_instances, Dh_fn).call(this, t4)).finally(() => __privateMethod(this, _StampEditor_instances, Ih_fn).call(this)));
      return;
    }
    const t2 = document.createElement("input");
    t2.type = "file";
    t2.accept = j.join(",");
    const e2 = this._uiManager._signal;
    __privateSet(this, _wh, new Promise((i2) => {
      t2.addEventListener("change", async () => {
        if (t2.files && 0 !== t2.files.length) {
          this._uiManager.enableWaiting(true);
          const e3 = await this._uiManager.imageManager.getFromFile(t2.files[0]);
          this._reportTelemetry({ action: "pdfjs.image.image_selected", data: { alt_text_modal: this._uiManager.useNewAltTextFlow } });
          __privateMethod(this, _StampEditor_instances, Dh_fn).call(this, e3);
        } else this.remove();
        i2();
      }, { signal: e2 });
      t2.addEventListener("cancel", () => {
        this.remove();
        i2();
      }, { signal: e2 });
    }).finally(() => __privateMethod(this, _StampEditor_instances, Ih_fn).call(this)));
    t2.click();
  };
  Ph_fn = function() {
    const { div: t2 } = this;
    let { width: e2, height: i2 } = __privateGet(this, _vh);
    const [n2, s2] = this.pageDimensions, a2 = 0.75;
    if (this.width) {
      e2 = this.width * n2;
      i2 = this.height * s2;
    } else if (e2 > a2 * n2 || i2 > a2 * s2) {
      const t3 = Math.min(a2 * n2 / e2, a2 * s2 / i2);
      e2 *= t3;
      i2 *= t3;
    }
    this._uiManager.enableWaiting(false);
    const r2 = __privateSet(this, _Sh, document.createElement("canvas"));
    r2.setAttribute("role", "img");
    this.addContainer(r2);
    this.width = e2 / n2;
    this.height = i2 / s2;
    this.setDims();
    this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition();
    this._initialOptions = null;
    this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && !this.annotationElementId || (t2.hidden = false);
    __privateMethod(this, _StampEditor_instances, Bh_fn).call(this);
    if (!__privateGet(this, _Mh)) {
      this.parent.addUndoableEditor(this);
      __privateSet(this, _Mh, true);
    }
    this._reportTelemetry({ action: "inserted_image" });
    __privateGet(this, _Eh) && this.div.setAttribute("aria-description", __privateGet(this, _Eh));
    this.annotationElementId || this._uiManager.a11yAlert(AnnotationEditor._l10nAlert.stamp);
  };
  Lh_fn = function(t2, e2) {
    const { width: i2, height: n2 } = __privateGet(this, _vh);
    let s2 = i2, a2 = n2, r2 = __privateGet(this, _vh);
    for (; s2 > 2 * t2 || a2 > 2 * e2; ) {
      const i3 = s2, n3 = a2;
      s2 > 2 * t2 && (s2 = Math.ceil(s2 / 2));
      a2 > 2 * e2 && (a2 = Math.ceil(a2 / 2));
      const o2 = new OffscreenCanvas(s2, a2);
      o2.getContext("2d").drawImage(r2, 0, 0, i3, n3, 0, 0, s2, a2);
      r2 = o2.transferToImageBitmap();
    }
    return r2;
  };
  Bh_fn = function() {
    const [t2, e2] = this.parentDimensions, { width: i2, height: n2 } = this, s2 = new OutputScale(), a2 = Math.ceil(i2 * t2 * s2.sx), r2 = Math.ceil(n2 * e2 * s2.sy), o2 = __privateGet(this, _Sh);
    if (!o2 || o2.width === a2 && o2.height === r2) return;
    o2.width = a2;
    o2.height = r2;
    const l2 = __privateGet(this, __h) ? __privateGet(this, _vh) : __privateMethod(this, _StampEditor_instances, Lh_fn).call(this, a2, r2), h2 = o2.getContext("2d");
    h2.filter = this._uiManager.hcmFilter;
    h2.drawImage(l2, 0, 0, l2.width, l2.height, 0, 0, a2, r2);
  };
  Oh_fn = function(t2) {
    if (t2) {
      if (__privateGet(this, __h)) {
        const t4 = this._uiManager.imageManager.getSvgUrl(__privateGet(this, _Ah));
        if (t4) return t4;
      }
      const t3 = document.createElement("canvas");
      ({ width: t3.width, height: t3.height } = __privateGet(this, _vh));
      t3.getContext("2d").drawImage(__privateGet(this, _vh), 0, 0);
      return t3.toDataURL();
    }
    if (__privateGet(this, __h)) {
      const [t3, e2] = this.pageDimensions, i2 = Math.round(this.width * t3 * PixelsPerInch.PDF_TO_CSS_UNITS), n2 = Math.round(this.height * e2 * PixelsPerInch.PDF_TO_CSS_UNITS), s2 = new OffscreenCanvas(i2, n2);
      s2.getContext("2d").drawImage(__privateGet(this, _vh), 0, 0, __privateGet(this, _vh).width, __privateGet(this, _vh).height, 0, 0, i2, n2);
      return s2.transferToImageBitmap();
    }
    return structuredClone(__privateGet(this, _vh));
  };
  Eo_fn4 = function(t2) {
    const { pageIndex: e2, accessibilityData: { altText: i2 } } = this._initialData, n2 = t2.pageIndex === e2, s2 = (t2.accessibilityData?.alt || "") === i2;
    return { isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && n2 && s2, isSameAltText: s2 };
  };
  __publicField(StampEditor, "_type", "stamp");
  __publicField(StampEditor, "_editorType", b.STAMP);
  var _ro2, _Rh, _Nh, _Uh, _Hh, _zh, _Gh, _Wh, _Vh, _jh, _$h, _Kh, _Xh, _qh, _Yh, _y4, _J2, _AnnotationEditorLayer_instances, Jh_get, Zh_fn, tc_get, ec_fn, ic_fn, Qh_fn;
  var _AnnotationEditorLayer = class _AnnotationEditorLayer {
    constructor({ uiManager: t2, pageIndex: e2, div: i2, structTreeLayer: n2, accessibilityManager: s2, annotationLayer: a2, drawLayer: r2, textLayer: o2, viewport: l2, l10n: h2 }) {
      __privateAdd(this, _AnnotationEditorLayer_instances);
      __privateAdd(this, _ro2);
      __privateAdd(this, _Rh, false);
      __privateAdd(this, _Nh, null);
      __privateAdd(this, _Uh, null);
      __privateAdd(this, _Hh, null);
      __privateAdd(this, _zh, /* @__PURE__ */ new Map());
      __privateAdd(this, _Gh, false);
      __privateAdd(this, _Wh, false);
      __privateAdd(this, _Vh, false);
      __privateAdd(this, _jh, null);
      __privateAdd(this, _$h, null);
      __privateAdd(this, _Kh, null);
      __privateAdd(this, _Xh, null);
      __privateAdd(this, _qh, null);
      __privateAdd(this, _Yh, -1);
      __privateAdd(this, _y4);
      const c2 = [...__privateGet(_AnnotationEditorLayer, _J2).values()];
      if (!_AnnotationEditorLayer._initialized) {
        _AnnotationEditorLayer._initialized = true;
        for (const e3 of c2) e3.initialize(h2, t2);
      }
      t2.registerEditorTypes(c2);
      __privateSet(this, _y4, t2);
      this.pageIndex = e2;
      this.div = i2;
      __privateSet(this, _ro2, s2);
      __privateSet(this, _Nh, a2);
      this.viewport = l2;
      __privateSet(this, _Kh, o2);
      this.drawLayer = r2;
      this._structTree = n2;
      __privateGet(this, _y4).addLayer(this);
    }
    get isEmpty() {
      return 0 === __privateGet(this, _zh).size;
    }
    get isInvisible() {
      return this.isEmpty && __privateGet(this, _y4).getMode() === b.NONE;
    }
    updateToolbar(t2) {
      __privateGet(this, _y4).updateToolbar(t2);
    }
    updateMode(t2 = __privateGet(this, _y4).getMode()) {
      __privateMethod(this, _AnnotationEditorLayer_instances, Qh_fn).call(this);
      switch (t2) {
        case b.NONE:
          this.div.classList.toggle("nonEditing", true);
          this.disableTextSelection();
          this.togglePointerEvents(false);
          this.toggleAnnotationLayerPointerEvents(true);
          this.disableClick();
          return;
        case b.INK:
          this.disableTextSelection();
          this.togglePointerEvents(true);
          this.enableClick();
          break;
        case b.HIGHLIGHT:
          this.enableTextSelection();
          this.togglePointerEvents(false);
          this.disableClick();
          break;
        default:
          this.disableTextSelection();
          this.togglePointerEvents(true);
          this.enableClick();
      }
      this.toggleAnnotationLayerPointerEvents(false);
      const { classList: e2 } = this.div;
      e2.toggle("nonEditing", false);
      if (t2 === b.POPUP) e2.toggle("commentEditing", true);
      else {
        e2.toggle("commentEditing", false);
        for (const i2 of __privateGet(_AnnotationEditorLayer, _J2).values()) e2.toggle(`${i2._type}Editing`, t2 === i2._editorType);
      }
      this.div.hidden = false;
    }
    hasTextLayer(t2) {
      return t2 === __privateGet(this, _Kh)?.div;
    }
    setEditingState(t2) {
      __privateGet(this, _y4).setEditingState(t2);
    }
    addCommands(t2) {
      __privateGet(this, _y4).addCommands(t2);
    }
    cleanUndoStack(t2) {
      __privateGet(this, _y4).cleanUndoStack(t2);
    }
    toggleDrawing(t2 = false) {
      this.div.classList.toggle("drawing", !t2);
    }
    togglePointerEvents(t2 = false) {
      this.div.classList.toggle("disabled", !t2);
    }
    toggleAnnotationLayerPointerEvents(t2 = false) {
      __privateGet(this, _Nh)?.togglePointerEvents(t2);
    }
    async enable() {
      __privateSet(this, _Vh, true);
      this.div.tabIndex = 0;
      this.togglePointerEvents(true);
      this.div.classList.toggle("nonEditing", false);
      __privateGet(this, _qh)?.abort();
      __privateSet(this, _qh, null);
      const t2 = /* @__PURE__ */ new Set();
      for (const e3 of __privateGet(this, _AnnotationEditorLayer_instances, Jh_get)) {
        e3.enableEditing();
        e3.show(true);
        if (e3.annotationElementId) {
          __privateGet(this, _y4).removeChangedExistingAnnotation(e3);
          t2.add(e3.annotationElementId);
        }
      }
      const e2 = __privateGet(this, _Nh);
      if (e2) for (const i2 of e2.getEditableAnnotations()) {
        i2.hide();
        if (__privateGet(this, _y4).isDeletedAnnotationElement(i2.data.id)) continue;
        if (t2.has(i2.data.id)) continue;
        const e3 = await this.deserialize(i2);
        if (e3) {
          this.addOrRebuild(e3);
          e3.enableEditing();
        }
      }
      __privateSet(this, _Vh, false);
      __privateGet(this, _y4)._eventBus.dispatch("editorsrendered", { source: this, pageNumber: this.pageIndex + 1 });
    }
    disable() {
      __privateSet(this, _Wh, true);
      this.div.tabIndex = -1;
      this.togglePointerEvents(false);
      this.div.classList.toggle("nonEditing", true);
      if (__privateGet(this, _Kh) && !__privateGet(this, _qh)) {
        __privateSet(this, _qh, new AbortController());
        const t3 = __privateGet(this, _y4).combinedSignal(__privateGet(this, _qh));
        __privateGet(this, _Kh).div.addEventListener("pointerdown", (t4) => {
          const { clientX: e3, clientY: i3, timeStamp: n2 } = t4;
          if (n2 - __privateGet(this, _Yh) > 500) {
            __privateSet(this, _Yh, n2);
            return;
          }
          __privateSet(this, _Yh, -1);
          const { classList: s2 } = this.div;
          s2.toggle("getElements", true);
          const a2 = document.elementsFromPoint(e3, i3);
          s2.toggle("getElements", false);
          if (!this.div.contains(a2[0])) return;
          let r2;
          const o2 = new RegExp(`^${f}[0-9]+$`);
          for (const t5 of a2) if (o2.test(t5.id)) {
            r2 = t5.id;
            break;
          }
          if (!r2) return;
          const l2 = __privateGet(this, _zh).get(r2);
          if (null === l2?.annotationElementId) {
            stopEvent(t4);
            l2.dblclick(t4);
          }
        }, { signal: t3, capture: true });
      }
      const t2 = __privateGet(this, _Nh), e2 = [];
      if (t2) {
        const i3 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
        for (const t3 of __privateGet(this, _AnnotationEditorLayer_instances, Jh_get)) {
          t3.disableEditing();
          if (t3.annotationElementId) if (null === t3.serialize()) {
            n2.set(t3.annotationElementId, t3);
            this.getEditableAnnotation(t3.annotationElementId)?.show();
            t3.remove();
          } else i3.set(t3.annotationElementId, t3);
          else e2.push(t3);
        }
        for (const e3 of t2.getEditableAnnotations()) {
          const { id: t3 } = e3.data;
          if (__privateGet(this, _y4).isDeletedAnnotationElement(t3)) {
            e3.updateEdited({ deleted: true });
            continue;
          }
          let s2 = n2.get(t3);
          if (s2) {
            s2.resetAnnotationElement(e3);
            s2.show(false);
            e3.show();
          } else {
            s2 = i3.get(t3);
            if (s2) {
              __privateGet(this, _y4).addChangedExistingAnnotation(s2);
              s2.renderAnnotationElement(e3) && s2.show(false);
            }
            e3.show();
          }
        }
      }
      __privateMethod(this, _AnnotationEditorLayer_instances, Qh_fn).call(this);
      this.isEmpty && (this.div.hidden = true);
      const { classList: i2 } = this.div;
      for (const t3 of __privateGet(_AnnotationEditorLayer, _J2).values()) i2.remove(`${t3._type}Editing`);
      this.disableTextSelection();
      this.toggleAnnotationLayerPointerEvents(true);
      t2?.updateFakeAnnotations(e2);
      __privateSet(this, _Wh, false);
    }
    getEditableAnnotation(t2) {
      return __privateGet(this, _Nh)?.getEditableAnnotation(t2) || null;
    }
    setActiveEditor(t2) {
      __privateGet(this, _y4).getActive() !== t2 && __privateGet(this, _y4).setActiveEditor(t2);
    }
    enableTextSelection() {
      this.div.tabIndex = -1;
      if (__privateGet(this, _Kh)?.div && !__privateGet(this, _Xh)) {
        __privateSet(this, _Xh, new AbortController());
        const t2 = __privateGet(this, _y4).combinedSignal(__privateGet(this, _Xh));
        __privateGet(this, _Kh).div.addEventListener("pointerdown", __privateMethod(this, _AnnotationEditorLayer_instances, Zh_fn).bind(this), { signal: t2 });
        __privateGet(this, _Kh).div.classList.add("highlighting");
      }
    }
    disableTextSelection() {
      this.div.tabIndex = 0;
      if (__privateGet(this, _Kh)?.div && __privateGet(this, _Xh)) {
        __privateGet(this, _Xh).abort();
        __privateSet(this, _Xh, null);
        __privateGet(this, _Kh).div.classList.remove("highlighting");
      }
    }
    enableClick() {
      if (__privateGet(this, _Uh)) return;
      __privateSet(this, _Uh, new AbortController());
      const t2 = __privateGet(this, _y4).combinedSignal(__privateGet(this, _Uh));
      this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t2 });
      const e2 = this.pointerup.bind(this);
      this.div.addEventListener("pointerup", e2, { signal: t2 });
      this.div.addEventListener("pointercancel", e2, { signal: t2 });
    }
    disableClick() {
      __privateGet(this, _Uh)?.abort();
      __privateSet(this, _Uh, null);
    }
    attach(t2) {
      __privateGet(this, _zh).set(t2.id, t2);
      const { annotationElementId: e2 } = t2;
      e2 && __privateGet(this, _y4).isDeletedAnnotationElement(e2) && __privateGet(this, _y4).removeDeletedAnnotationElement(t2);
    }
    detach(t2) {
      __privateGet(this, _zh).delete(t2.id);
      __privateGet(this, _ro2)?.removePointerInTextLayer(t2.contentDiv);
      !__privateGet(this, _Wh) && t2.annotationElementId && __privateGet(this, _y4).addDeletedAnnotationElement(t2);
    }
    remove(t2) {
      this.detach(t2);
      __privateGet(this, _y4).removeEditor(t2);
      t2.div.remove();
      t2.isAttachedToDOM = false;
    }
    changeParent(t2) {
      if (t2.parent !== this) {
        if (t2.parent && t2.annotationElementId) {
          __privateGet(this, _y4).addDeletedAnnotationElement(t2);
          AnnotationEditor.deleteAnnotationElement(t2);
          t2.annotationElementId = null;
        }
        this.attach(t2);
        t2.parent?.detach(t2);
        t2.setParent(this);
        if (t2.div && t2.isAttachedToDOM) {
          t2.div.remove();
          this.div.append(t2.div);
        }
      }
    }
    add(t2) {
      if (t2.parent !== this || !t2.isAttachedToDOM) {
        this.changeParent(t2);
        __privateGet(this, _y4).addEditor(t2);
        this.attach(t2);
        if (!t2.isAttachedToDOM) {
          const e2 = t2.render();
          this.div.append(e2);
          t2.isAttachedToDOM = true;
        }
        t2.fixAndSetPosition();
        t2.onceAdded(!__privateGet(this, _Vh));
        __privateGet(this, _y4).addToAnnotationStorage(t2);
        t2._reportTelemetry(t2.telemetryInitialData);
      }
    }
    moveEditorInDOM(t2) {
      if (!t2.isAttachedToDOM) return;
      const { activeElement: e2 } = document;
      if (t2.div.contains(e2) && !__privateGet(this, _Hh)) {
        t2._focusEventsAllowed = false;
        __privateSet(this, _Hh, setTimeout(() => {
          __privateSet(this, _Hh, null);
          if (t2.div.contains(document.activeElement)) t2._focusEventsAllowed = true;
          else {
            t2.div.addEventListener("focusin", () => {
              t2._focusEventsAllowed = true;
            }, { once: true, signal: __privateGet(this, _y4)._signal });
            e2.focus();
          }
        }, 0));
      }
      t2._structTreeParentId = __privateGet(this, _ro2)?.moveElementInDOM(this.div, t2.div, t2.contentDiv, true);
    }
    addOrRebuild(t2) {
      if (t2.needsToBeRebuilt()) {
        t2.parent || (t2.parent = this);
        t2.rebuild();
        t2.show();
      } else this.add(t2);
    }
    addUndoableEditor(t2) {
      this.addCommands({ cmd: () => t2._uiManager.rebuild(t2), undo: () => {
        t2.remove();
      }, mustExec: false });
    }
    getEditorByUID(t2) {
      for (const e2 of __privateGet(this, _zh).values()) if (e2.uid === t2) return e2;
      return null;
    }
    combinedSignal(t2) {
      return __privateGet(this, _y4).combinedSignal(t2);
    }
    canCreateNewEmptyEditor() {
      return __privateGet(this, _AnnotationEditorLayer_instances, tc_get)?.canCreateNewEmptyEditor();
    }
    async pasteEditor(t2, e2) {
      this.updateToolbar(t2);
      await __privateGet(this, _y4).updateMode(t2.mode);
      const { offsetX: i2, offsetY: n2 } = __privateMethod(this, _AnnotationEditorLayer_instances, ic_fn).call(this), s2 = __privateGet(this, _y4).getId(), a2 = __privateMethod(this, _AnnotationEditorLayer_instances, ec_fn).call(this, { parent: this, id: s2, x: i2, y: n2, uiManager: __privateGet(this, _y4), isCentered: true, ...e2 });
      a2 && this.add(a2);
    }
    async deserialize(t2) {
      return await __privateGet(_AnnotationEditorLayer, _J2).get(t2.annotationType ?? t2.annotationEditorType)?.deserialize(t2, this, __privateGet(this, _y4)) || null;
    }
    createAndAddNewEditor(t2, e2, i2 = {}) {
      const n2 = __privateGet(this, _y4).getId(), s2 = __privateMethod(this, _AnnotationEditorLayer_instances, ec_fn).call(this, { parent: this, id: n2, x: t2.offsetX, y: t2.offsetY, uiManager: __privateGet(this, _y4), isCentered: e2, ...i2 });
      s2 && this.add(s2);
      return s2;
    }
    get boundingClientRect() {
      return this.div.getBoundingClientRect();
    }
    addNewEditor(t2 = {}) {
      this.createAndAddNewEditor(__privateMethod(this, _AnnotationEditorLayer_instances, ic_fn).call(this), true, t2);
    }
    setSelected(t2) {
      __privateGet(this, _y4).setSelected(t2);
    }
    toggleSelected(t2) {
      __privateGet(this, _y4).toggleSelected(t2);
    }
    unselect(t2) {
      __privateGet(this, _y4).unselect(t2);
    }
    pointerup(t2) {
      const { isMac: e2 } = FeatureTest.platform;
      if (0 !== t2.button || t2.ctrlKey && e2) return;
      if (t2.target !== this.div) return;
      if (!__privateGet(this, _Gh)) return;
      __privateSet(this, _Gh, false);
      if (__privateGet(this, _AnnotationEditorLayer_instances, tc_get)?.isDrawer && __privateGet(this, _AnnotationEditorLayer_instances, tc_get).supportMultipleDrawings) return;
      if (!__privateGet(this, _Rh)) {
        __privateSet(this, _Rh, true);
        return;
      }
      const i2 = __privateGet(this, _y4).getMode();
      i2 !== b.STAMP && i2 !== b.POPUP && i2 !== b.SIGNATURE ? this.createAndAddNewEditor(t2, false) : __privateGet(this, _y4).unselectAll();
    }
    pointerdown(t2) {
      __privateGet(this, _y4).getMode() === b.HIGHLIGHT && this.enableTextSelection();
      if (__privateGet(this, _Gh)) {
        __privateSet(this, _Gh, false);
        return;
      }
      const { isMac: e2 } = FeatureTest.platform;
      if (0 !== t2.button || t2.ctrlKey && e2) return;
      if (t2.target !== this.div) return;
      __privateSet(this, _Gh, true);
      if (__privateGet(this, _AnnotationEditorLayer_instances, tc_get)?.isDrawer) {
        this.startDrawingSession(t2);
        return;
      }
      const i2 = __privateGet(this, _y4).getActive();
      __privateSet(this, _Rh, !i2 || i2.isEmpty());
    }
    startDrawingSession(t2) {
      this.div.focus({ preventScroll: true });
      if (__privateGet(this, _jh)) {
        __privateGet(this, _AnnotationEditorLayer_instances, tc_get).startDrawing(this, __privateGet(this, _y4), false, t2);
        return;
      }
      __privateGet(this, _y4).setCurrentDrawingSession(this);
      __privateSet(this, _jh, new AbortController());
      const e2 = __privateGet(this, _y4).combinedSignal(__privateGet(this, _jh));
      this.div.addEventListener("blur", ({ relatedTarget: t3 }) => {
        if (t3 && !this.div.contains(t3)) {
          __privateSet(this, _$h, null);
          this.commitOrRemove();
        }
      }, { signal: e2 });
      __privateGet(this, _AnnotationEditorLayer_instances, tc_get).startDrawing(this, __privateGet(this, _y4), false, t2);
    }
    pause(t2) {
      if (t2) {
        const { activeElement: t3 } = document;
        this.div.contains(t3) && __privateSet(this, _$h, t3);
        return;
      }
      __privateGet(this, _$h) && setTimeout(() => {
        __privateGet(this, _$h)?.focus();
        __privateSet(this, _$h, null);
      }, 0);
    }
    endDrawingSession(t2 = false) {
      if (!__privateGet(this, _jh)) return null;
      __privateGet(this, _y4).setCurrentDrawingSession(null);
      __privateGet(this, _jh).abort();
      __privateSet(this, _jh, null);
      __privateSet(this, _$h, null);
      return __privateGet(this, _AnnotationEditorLayer_instances, tc_get).endDrawing(t2);
    }
    findNewParent(t2, e2, i2) {
      const n2 = __privateGet(this, _y4).findParent(e2, i2);
      if (null === n2 || n2 === this) return false;
      n2.changeParent(t2);
      return true;
    }
    commitOrRemove() {
      if (__privateGet(this, _jh)) {
        this.endDrawingSession();
        return true;
      }
      return false;
    }
    onScaleChanging() {
      __privateGet(this, _jh) && __privateGet(this, _AnnotationEditorLayer_instances, tc_get).onScaleChangingWhenDrawing(this);
    }
    destroy() {
      this.commitOrRemove();
      if (__privateGet(this, _y4).getActive()?.parent === this) {
        __privateGet(this, _y4).commitOrRemove();
        __privateGet(this, _y4).setActiveEditor(null);
      }
      if (__privateGet(this, _Hh)) {
        clearTimeout(__privateGet(this, _Hh));
        __privateSet(this, _Hh, null);
      }
      for (const t2 of __privateGet(this, _zh).values()) {
        __privateGet(this, _ro2)?.removePointerInTextLayer(t2.contentDiv);
        t2.setParent(null);
        t2.isAttachedToDOM = false;
        t2.div.remove();
      }
      this.div = null;
      __privateGet(this, _zh).clear();
      __privateGet(this, _y4).removeLayer(this);
    }
    async render({ viewport: t2 }) {
      this.viewport = t2;
      setLayerDimensions(this.div, t2);
      for (const t3 of __privateGet(this, _y4).getEditors(this.pageIndex)) {
        this.add(t3);
        t3.rebuild();
      }
      await __privateGet(this, _y4).findClonesForPage(this);
      this.div.hidden = this.isEmpty;
      this.updateMode();
    }
    update({ viewport: t2 }) {
      __privateGet(this, _y4).commitOrRemove();
      __privateMethod(this, _AnnotationEditorLayer_instances, Qh_fn).call(this);
      const e2 = this.viewport.rotation, i2 = t2.rotation;
      this.viewport = t2;
      setLayerDimensions(this.div, { rotation: i2 });
      if (e2 !== i2) for (const t3 of __privateGet(this, _zh).values()) t3.rotate(i2);
    }
    get pageDimensions() {
      const { pageWidth: t2, pageHeight: e2 } = this.viewport.rawDims;
      return [t2, e2];
    }
    get scale() {
      return __privateGet(this, _y4).viewParameters.realScale;
    }
  };
  _ro2 = new WeakMap();
  _Rh = new WeakMap();
  _Nh = new WeakMap();
  _Uh = new WeakMap();
  _Hh = new WeakMap();
  _zh = new WeakMap();
  _Gh = new WeakMap();
  _Wh = new WeakMap();
  _Vh = new WeakMap();
  _jh = new WeakMap();
  _$h = new WeakMap();
  _Kh = new WeakMap();
  _Xh = new WeakMap();
  _qh = new WeakMap();
  _Yh = new WeakMap();
  _y4 = new WeakMap();
  _J2 = new WeakMap();
  _AnnotationEditorLayer_instances = new WeakSet();
  Jh_get = function() {
    return 0 !== __privateGet(this, _zh).size ? __privateGet(this, _zh).values() : __privateGet(this, _y4).getEditors(this.pageIndex);
  };
  Zh_fn = function(t2) {
    __privateGet(this, _y4).unselectAll();
    const { target: e2 } = t2;
    if (e2 === __privateGet(this, _Kh).div || ("img" === e2.getAttribute("role") || e2.classList.contains("endOfContent") || e2.classList.contains("textLayerImages") || e2.classList.contains("textLayerImagePlaceholder")) && __privateGet(this, _Kh).div.contains(e2)) {
      const { isMac: e3 } = FeatureTest.platform;
      if (0 !== t2.button || t2.ctrlKey && e3) return;
      __privateGet(this, _y4).showAllEditors("highlight", true, true);
      __privateGet(this, _Kh).div.classList.add("free");
      this.toggleDrawing();
      HighlightEditor.startHighlighting(this, "ltr" === __privateGet(this, _y4).direction, { target: __privateGet(this, _Kh).div, x: t2.x, y: t2.y });
      __privateGet(this, _Kh).div.addEventListener("pointerup", () => {
        __privateGet(this, _Kh).div.classList.remove("free");
        this.toggleDrawing(true);
      }, { once: true, signal: __privateGet(this, _y4)._signal });
      t2.preventDefault();
    }
  };
  tc_get = function() {
    return __privateGet(_AnnotationEditorLayer, _J2).get(__privateGet(this, _y4).getMode());
  };
  ec_fn = function(t2) {
    const e2 = __privateGet(this, _AnnotationEditorLayer_instances, tc_get);
    return e2 ? new e2.prototype.constructor(t2) : null;
  };
  ic_fn = function() {
    const { x: t2, y: e2, width: i2, height: n2 } = this.boundingClientRect, s2 = Math.max(0, t2), a2 = Math.max(0, e2), r2 = (s2 + Math.min(window.innerWidth, t2 + i2)) / 2 - t2, o2 = (a2 + Math.min(window.innerHeight, e2 + n2)) / 2 - e2, [l2, h2] = this.viewport.rotation % 180 == 0 ? [r2, o2] : [o2, r2];
    return { offsetX: l2, offsetY: h2 };
  };
  Qh_fn = function() {
    for (const t2 of __privateGet(this, _zh).values()) t2.isEmpty() && t2.remove();
  };
  __publicField(_AnnotationEditorLayer, "_initialized", false);
  __privateAdd(_AnnotationEditorLayer, _J2, new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor, SignatureEditor].map((t2) => [t2._editorType, t2])));
  var AnnotationEditorLayer = _AnnotationEditorLayer;
  function compareTextLayers(t2, e2) {
    return t2 === e2 ? 0 : t2.compareDocumentPosition(e2) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  }
  function getTextLayer(t2) {
    return t2 ? t2.nodeType === Node.ELEMENT_NODE ? t2.closest(".textLayer") : t2.parentElement?.closest(".textLayer") || null : null;
  }
  function isPointBefore(t2, e2, i2, n2) {
    if (t2 === i2) return e2 <= n2;
    const s2 = t2.compareDocumentPosition(i2);
    return !!(s2 & Node.DOCUMENT_POSITION_FOLLOWING) || !(s2 & Node.DOCUMENT_POSITION_PRECEDING) && null;
  }
  function normalizeEdgeBoundary(t2, e2, i2) {
    if (t2.nodeType !== Node.ELEMENT_NODE || !t2.classList.contains("textLayer") || e2 !== t2.childNodes.length) return { container: t2, offset: e2 };
    let n2 = t2.lastChild;
    n2?.nodeType === Node.ELEMENT_NODE && n2.classList.contains("endOfContent") && (n2 = n2.previousSibling);
    return n2 && i2.contains(n2) ? n2.nodeType === Node.TEXT_NODE ? { container: n2, offset: n2.textContent.length } : { container: n2, offset: n2.childNodes.length } : null;
  }
  var _Tr2, _nc, _Kh2, _nt2, _xt2, _sc, _ac, _T5, _rc, _oc, _lc, _hc, _cc, _dc, _DrawLayer_static, pc_fn, uc_fn, gc_fn, Ut_fn2, mc_fn, _DrawLayer_instances, fc_fn, bc_fn, yc_fn;
  var _DrawLayer = class _DrawLayer {
    constructor({ filterFactory: t2 = null, pageColors: e2 = null, pageIndex: i2, textLayer: n2 = null }) {
      __privateAdd(this, _DrawLayer_instances);
      __privateAdd(this, _Tr2, null);
      __privateAdd(this, _nc, /* @__PURE__ */ new Map());
      __privateAdd(this, _Kh2, null);
      __privateAdd(this, _nt2, null);
      __privateAdd(this, _xt2, null);
      __privateAdd(this, _sc, null);
      __privateAdd(this, _ac, /* @__PURE__ */ new Map());
      this.pageIndex = i2;
      __privateSet(this, _nt2, t2);
      __privateSet(this, _xt2, e2);
      if (n2) {
        const t3 = __privateGet(_DrawLayer, _dc).get(n2);
        if (t3?.selectionDiv) {
          t3.selectionDiv.remove();
          __privateGet(_DrawLayer, _lc).delete(t3.selectionDiv);
        }
        __privateGet(_DrawLayer, _dc).set(n2, { drawLayer: this });
        __privateGet(_DrawLayer, _cc).add(n2);
        __privateSet(this, _Kh2, n2);
        __privateSet(this, _sc, new MutationObserver((t4) => {
          var _a4, _b;
          if (__privateGet(this, _Tr2) && __privateGet(this, _Kh2)?.isConnected && __privateMethod(_a4 = _DrawLayer, _DrawLayer_static, uc_fn).call(_a4)) {
            for (const { addedNodes: e3 } of t4) for (const t5 of e3) if (t5.nodeType === Node.ELEMENT_NODE && t5.classList.contains("endOfContent")) {
              __privateMethod(_b = _DrawLayer, _DrawLayer_static, Ut_fn2).call(_b);
              return;
            }
          }
        }));
        __privateGet(this, _sc).observe(n2, { childList: true });
        if (null === __privateGet(_DrawLayer, _oc)) {
          __privateSet(_DrawLayer, _oc, new AbortController());
          const { signal: t4 } = __privateGet(_DrawLayer, _oc);
          document.addEventListener("selectionchange", __privateMethod(_DrawLayer, _DrawLayer_static, Ut_fn2).bind(_DrawLayer), { signal: t4 });
          document.addEventListener("pointerdown", () => {
            __privateSet(_DrawLayer, _hc, true);
          }, { signal: t4 });
          document.addEventListener("pointerup", () => {
            __privateSet(_DrawLayer, _hc, false);
          }, { signal: t4 });
          window.addEventListener("blur", () => {
            __privateSet(_DrawLayer, _hc, false);
          }, { signal: t4 });
        }
      }
    }
    setParent(t2) {
      var _a4, _b;
      if (__privateGet(this, _Tr2)) {
        if (__privateGet(this, _Tr2) !== t2) {
          if (__privateGet(this, _nc).size > 0) for (const e2 of __privateGet(this, _nc).values()) {
            e2.remove();
            t2.append(e2);
          }
          __privateSet(this, _Tr2, t2);
        }
      } else {
        __privateSet(this, _Tr2, t2);
        __privateGet(this, _Kh2)?.isConnected && __privateMethod(_a4 = _DrawLayer, _DrawLayer_static, uc_fn).call(_a4) && __privateMethod(_b = _DrawLayer, _DrawLayer_static, Ut_fn2).call(_b);
      }
    }
    static get _svgFactory() {
      return shadow(this, "_svgFactory", new DOMSVGFactory());
    }
    draw(t2, e2 = false, i2 = false) {
      const n2 = __privateWrapper(_DrawLayer, _T5)._++, s2 = __privateMethod(this, _DrawLayer_instances, fc_fn).call(this), a2 = _DrawLayer._svgFactory.createElement("defs");
      s2.append(a2);
      const r2 = _DrawLayer._svgFactory.createElement("path");
      a2.append(r2);
      const o2 = `path_${n2}`;
      r2.setAttribute("id", o2);
      r2.setAttribute("vector-effect", "non-scaling-stroke");
      e2 && __privateGet(this, _ac).set(n2, r2);
      const l2 = i2 ? __privateMethod(this, _DrawLayer_instances, bc_fn).call(this, a2, o2) : null, h2 = _DrawLayer._svgFactory.createElement("use");
      s2.append(h2);
      h2.setAttribute("href", `#${o2}`);
      this.updateProperties(s2, t2);
      __privateGet(this, _nc).set(n2, s2);
      return { id: n2, clipPathId: `url(#${l2})` };
    }
    drawOutline(t2, e2) {
      const i2 = __privateWrapper(_DrawLayer, _T5)._++, n2 = __privateMethod(this, _DrawLayer_instances, fc_fn).call(this), s2 = _DrawLayer._svgFactory.createElement("defs");
      n2.append(s2);
      const a2 = _DrawLayer._svgFactory.createElement("path");
      s2.append(a2);
      const r2 = `path_${i2}`;
      a2.setAttribute("id", r2);
      a2.setAttribute("vector-effect", "non-scaling-stroke");
      let o2;
      if (e2) {
        const t3 = _DrawLayer._svgFactory.createElement("mask");
        s2.append(t3);
        o2 = `mask_${i2}`;
        t3.setAttribute("id", o2);
        t3.setAttribute("maskUnits", "objectBoundingBox");
        const e3 = _DrawLayer._svgFactory.createElement("rect");
        t3.append(e3);
        e3.setAttribute("width", "1");
        e3.setAttribute("height", "1");
        e3.setAttribute("fill", "white");
        const n3 = _DrawLayer._svgFactory.createElement("use");
        t3.append(n3);
        n3.setAttribute("href", `#${r2}`);
        n3.setAttribute("stroke", "none");
        n3.setAttribute("fill", "black");
        n3.setAttribute("fill-rule", "nonzero");
        n3.classList.add("mask");
      }
      const l2 = _DrawLayer._svgFactory.createElement("use");
      n2.append(l2);
      l2.setAttribute("href", `#${r2}`);
      o2 && l2.setAttribute("mask", `url(#${o2})`);
      const h2 = l2.cloneNode();
      n2.append(h2);
      l2.classList.add("mainOutline");
      h2.classList.add("secondaryOutline");
      this.updateProperties(n2, t2);
      __privateGet(this, _nc).set(i2, n2);
      return i2;
    }
    finalizeDraw(t2, e2) {
      __privateGet(this, _ac).delete(t2);
      this.updateProperties(t2, e2);
    }
    updateProperties(t2, e2) {
      var _a4;
      if (!e2) return;
      const { root: i2, bbox: n2, rootClass: s2, path: a2 } = e2, r2 = "number" == typeof t2 ? __privateGet(this, _nc).get(t2) : t2;
      if (r2) {
        i2 && __privateMethod(this, _DrawLayer_instances, yc_fn).call(this, r2, i2);
        n2 && __privateMethod(_a4 = _DrawLayer, _DrawLayer_static, mc_fn).call(_a4, r2, n2);
        if (s2) {
          const { classList: t3 } = r2;
          for (const [e3, i3] of Object.entries(s2)) t3.toggle(e3, i3);
        }
        if (a2) {
          const t3 = r2.firstElementChild.firstElementChild;
          __privateMethod(this, _DrawLayer_instances, yc_fn).call(this, t3, a2);
        }
      }
    }
    updateParent(t2, e2) {
      if (e2 === this) return;
      const i2 = __privateGet(this, _nc).get(t2);
      if (i2) {
        __privateGet(e2, _Tr2).append(i2);
        __privateGet(this, _nc).delete(t2);
        __privateGet(e2, _nc).set(t2, i2);
      }
    }
    remove(t2) {
      __privateGet(this, _ac).delete(t2);
      if (null !== __privateGet(this, _Tr2)) {
        __privateGet(this, _nc).get(t2).remove();
        __privateGet(this, _nc).delete(t2);
      }
    }
    destroy() {
      var _a4;
      __privateSet(this, _Tr2, null);
      for (const t2 of __privateGet(this, _nc).values()) t2.remove();
      __privateGet(this, _nc).clear();
      __privateGet(this, _ac).clear();
      __privateGet(this, _sc)?.disconnect();
      __privateSet(this, _sc, null);
      if (__privateGet(this, _Kh2)) {
        const t2 = __privateGet(_DrawLayer, _dc).get(__privateGet(this, _Kh2));
        if (t2?.drawLayer === this) {
          __privateMethod(_a4 = _DrawLayer, _DrawLayer_static, pc_fn).call(_a4, __privateGet(this, _Kh2));
          __privateGet(_DrawLayer, _dc).delete(__privateGet(this, _Kh2));
          __privateGet(_DrawLayer, _cc).delete(__privateGet(this, _Kh2));
          if (0 === __privateGet(_DrawLayer, _cc).size) {
            __privateGet(_DrawLayer, _oc)?.abort();
            __privateSet(_DrawLayer, _oc, null);
            __privateSet(_DrawLayer, _hc, false);
          }
        }
        __privateSet(this, _Kh2, null);
      }
    }
  };
  _Tr2 = new WeakMap();
  _nc = new WeakMap();
  _Kh2 = new WeakMap();
  _nt2 = new WeakMap();
  _xt2 = new WeakMap();
  _sc = new WeakMap();
  _ac = new WeakMap();
  _T5 = new WeakMap();
  _rc = new WeakMap();
  _oc = new WeakMap();
  _lc = new WeakMap();
  _hc = new WeakMap();
  _cc = new WeakMap();
  _dc = new WeakMap();
  _DrawLayer_static = new WeakSet();
  pc_fn = function(t2) {
    const e2 = __privateGet(this, _dc).get(t2);
    if (e2?.selectionDiv) {
      e2.selectionDiv.remove();
      __privateGet(this, _lc).delete(e2.selectionDiv);
      e2.selectionDiv = null;
      e2.path = null;
    }
  };
  uc_fn = function() {
    const t2 = document.getSelection();
    return !!t2 && !t2.isCollapsed;
  };
  gc_fn = function() {
    return [...__privateGet(this, _cc)].filter((t2) => t2.isConnected).sort(compareTextLayers);
  };
  Ut_fn2 = function() {
    const t2 = document.getSelection();
    if (!t2 || t2.isCollapsed) {
      for (const t3 of __privateGet(this, _lc)) t3.remove();
      __privateGet(this, _lc).clear();
      return;
    }
    const e2 = /* @__PURE__ */ new WeakMap(), i2 = __privateMethod(this, _DrawLayer_static, gc_fn).call(this), n2 = [];
    for (let e3 = 0, s3 = t2.rangeCount; e3 < s3; e3++) {
      const s4 = t2.getRangeAt(e3);
      if (s4.collapsed) continue;
      let { startContainer: a2, startOffset: r2, endContainer: o2, endOffset: l2 } = s4, h2 = getTextLayer(a2), c2 = getTextLayer(o2);
      const d2 = null === h2, u2 = null === c2;
      if (__privateGet(this, _hc) && d2 !== u2) return;
      if (1 === t2.rangeCount) {
        const { anchorNode: e4, anchorOffset: i3, focusNode: n3, focusOffset: s5 } = t2, d3 = getTextLayer(e4), u3 = getTextLayer(n3), p3 = isPointBefore(e4, i3, n3, s5);
        if (d3 && u3 && null !== p3) if (p3) {
          a2 = e4;
          r2 = i3;
          h2 = d3;
          o2 = n3;
          l2 = s5;
          c2 = u3;
        } else {
          a2 = n3;
          r2 = s5;
          h2 = u3;
          o2 = e4;
          l2 = i3;
          c2 = d3;
        }
      }
      const p2 = i2.filter((t3) => s4.intersectsNode(t3));
      if (0 === p2.length) continue;
      let g2 = false;
      if (!h2) {
        h2 = p2[0];
        a2 = h2;
        r2 = 0;
        g2 = true;
      }
      if (!c2) {
        c2 = p2.at(-1);
        o2 = c2;
        l2 = c2.childNodes.length;
        g2 = true;
      }
      if (o2.nodeType === Node.ELEMENT_NODE) {
        if (o2.classList.contains("endOfContent")) {
          const t3 = o2.previousSibling;
          if (!t3) continue;
          o2 = t3;
          l2 = t3.nodeType === Node.TEXT_NODE ? t3.textContent.length : t3.childNodes.length;
        } else if (o2.classList.contains("textLayer") && o2.childNodes.length === l2) {
          const t3 = normalizeEdgeBoundary(o2, l2, c2);
          if (!t3) continue;
          o2 = t3.container;
          l2 = t3.offset;
        }
      }
      if (a2.nodeType === Node.ELEMENT_NODE) {
        const t3 = normalizeEdgeBoundary(a2, r2, h2);
        if (!t3) continue;
        a2 = t3.container;
        r2 = t3.offset;
      }
      if (h2 !== c2 || g2 || !p2.includes(h2)) for (const t3 of p2) {
        const e4 = t3.firstChild;
        if (!e4) continue;
        const i3 = document.createRange();
        t3 === h2 ? i3.setStart(a2, r2) : i3.setStartBefore(e4);
        if (t3 === c2) i3.setEnd(o2, l2);
        else {
          const e5 = t3.lastChild;
          if (!e5) continue;
          if (e5.nodeType === Node.ELEMENT_NODE && e5.classList.contains("endOfContent")) {
            const t4 = e5.previousSibling;
            if (!t4) continue;
            i3.setEndAfter(t4);
          } else i3.setEndAfter(e5);
        }
        i3.collapsed || n2.push([i3, t3]);
      }
      else n2.push([s4, h2]);
    }
    const s2 = new Set(n2.map((t3) => t3[1]));
    for (const t3 of __privateGet(this, _cc)) s2.has(t3) || __privateMethod(this, _DrawLayer_static, pc_fn).call(this, t3);
    for (const [t3, i3] of n2) {
      const n3 = __privateGet(_DrawLayer, _dc).get(i3);
      if (!n3) continue;
      let s3 = e2.get(i3);
      if (!s3) {
        const t4 = i3.getBoundingClientRect();
        s3 = (e3, i4, n4, s4) => ({ x: (e3 - t4.x) / t4.width, y: (i4 - t4.y) / t4.height, width: n4 / t4.width, height: s4 / t4.height });
        e2.set(i3, s3);
      }
      const a2 = [];
      for (let { x: e3, y: i4, width: n4, height: r3 } of t3.getClientRects()) if (0 !== n4 && 0 !== r3) {
        ({ x: e3, y: i4, width: n4, height: r3 } = s3(e3, i4, n4, r3));
        1 === n4 && 1 === r3 || a2.push(`M${e3} ${i4} h${n4} v${r3} h-${n4} Z`);
      }
      if (0 === a2.length) continue;
      const r2 = n3.drawLayer;
      let o2 = n3.selectionDiv, l2 = n3.path;
      if (!o2) {
        const t4 = "clip_selection_" + __privateWrapper(_DrawLayer, _rc)._++;
        o2 = document.createElement("div");
        o2.className = "selection";
        o2.style.clipPath = `url(#${t4})`;
        const e3 = __privateGet(r2, _nt2)?.createSelectionStyle(__privateGet(r2, _xt2));
        if (e3) for (const [t5, i5] of Object.entries(e3)) o2.style.setProperty(t5, i5);
        const i4 = _DrawLayer._svgFactory.create(1, 1, true);
        i4.setAttribute("aria-hidden", "true");
        i4.setAttribute("width", "100%");
        i4.setAttribute("height", "100%");
        const s4 = _DrawLayer._svgFactory.createElement("clipPath");
        s4.setAttribute("id", t4);
        s4.setAttribute("clipPathUnits", "objectBoundingBox");
        l2 = _DrawLayer._svgFactory.createElement("path");
        s4.append(l2);
        i4.append(s4);
        o2.append(i4);
        n3.path = l2;
        n3.selectionDiv = o2;
      }
      if (!o2.parentNode && __privateGet(r2, _Tr2)) {
        __privateGet(r2, _Tr2).append(o2);
        __privateGet(this, _lc).add(o2);
      }
      l2.setAttribute("d", a2.join(" "));
    }
  };
  mc_fn = function(t2, [e2, i2, n2, s2]) {
    const { style: a2 } = t2;
    a2.top = 100 * i2 + "%";
    a2.left = 100 * e2 + "%";
    a2.width = 100 * n2 + "%";
    a2.height = 100 * s2 + "%";
  };
  _DrawLayer_instances = new WeakSet();
  fc_fn = function() {
    const t2 = _DrawLayer._svgFactory.create(1, 1, true);
    __privateGet(this, _Tr2).append(t2);
    t2.setAttribute("aria-hidden", "true");
    return t2;
  };
  bc_fn = function(t2, e2) {
    const i2 = _DrawLayer._svgFactory.createElement("clipPath");
    t2.append(i2);
    const n2 = `clip_${e2}`;
    i2.setAttribute("id", n2);
    i2.setAttribute("clipPathUnits", "objectBoundingBox");
    const s2 = _DrawLayer._svgFactory.createElement("use");
    i2.append(s2);
    s2.setAttribute("href", `#${e2}`);
    s2.classList.add("clip");
    return n2;
  };
  yc_fn = function(t2, e2) {
    for (const [i2, n2] of Object.entries(e2)) null === n2 ? t2.removeAttribute(i2) : t2.setAttribute(i2, n2);
  };
  __privateAdd(_DrawLayer, _DrawLayer_static);
  __privateAdd(_DrawLayer, _T5, 0);
  __privateAdd(_DrawLayer, _rc, 0);
  __privateAdd(_DrawLayer, _oc, null);
  __privateAdd(_DrawLayer, _lc, /* @__PURE__ */ new Set());
  __privateAdd(_DrawLayer, _hc, false);
  __privateAdd(_DrawLayer, _cc, /* @__PURE__ */ new Set());
  __privateAdd(_DrawLayer, _dc, /* @__PURE__ */ new WeakMap());
  var DrawLayer = _DrawLayer;
  function percentage(t2) {
    return `${(100 * t2).toFixed(2)}%`;
  }
  var _vc, _Ac, _wc, _xc, _Js2, _Qs2, _Cc, _TextLayerImages_instances, Ec_fn;
  var _TextLayerImages = class _TextLayerImages {
    constructor(t2, e2, i2, n2) {
      __privateAdd(this, _TextLayerImages_instances);
      __privateAdd(this, _vc, []);
      __privateAdd(this, _Ac, /* @__PURE__ */ new Map());
      __privateAdd(this, _wc, null);
      __privateAdd(this, _xc, 0);
      __privateAdd(this, _Js2, 0);
      __privateAdd(this, _Qs2, 0);
      __privateSet(this, _xc, t2);
      __privateSet(this, _vc, e2);
      __privateSet(this, _Js2, i2.rawDims.pageWidth);
      __privateSet(this, _Qs2, i2.rawDims.pageHeight);
      __privateSet(this, _wc, n2);
    }
    render() {
      const t2 = document.createElement("div");
      t2.className = "textLayerImages";
      for (let e2 = 0; e2 < __privateGet(this, _vc).length; e2 += 6) {
        const i2 = __privateMethod(this, _TextLayerImages_instances, Ec_fn).call(this, __privateGet(this, _vc).subarray(e2, e2 + 6));
        i2 && t2.append(i2);
      }
      t2.addEventListener("contextmenu", (t3) => {
        if (!(t3.target instanceof HTMLCanvasElement)) return;
        const e2 = t3.target, i2 = __privateGet(this, _Ac).get(e2);
        if (!i2) return;
        const n2 = __privateGet(_TextLayerImages, _Cc)?.deref();
        if (n2 === e2) return;
        if (n2) {
          n2.width = 0;
          n2.height = 0;
        }
        __privateSet(_TextLayerImages, _Cc, new WeakRef(e2));
        const { inverseTransform: s2, x1: a2, y1: r2, width: o2, height: l2 } = i2, h2 = __privateGet(this, _wc).call(this), c2 = Math.ceil(a2 * h2.width), d2 = Math.ceil(r2 * h2.height), u2 = Math.floor((a2 + o2 / __privateGet(this, _Js2)) * h2.width), p2 = Math.floor((r2 + l2 / __privateGet(this, _Qs2)) * h2.height);
        e2.width = u2 - c2;
        e2.height = p2 - d2;
        const g2 = e2.getContext("2d");
        g2.setTransform(...s2);
        g2.translate(-c2, -d2);
        g2.drawImage(h2, 0, 0);
      });
      return t2;
    }
  };
  _vc = new WeakMap();
  _Ac = new WeakMap();
  _wc = new WeakMap();
  _xc = new WeakMap();
  _Js2 = new WeakMap();
  _Qs2 = new WeakMap();
  _Cc = new WeakMap();
  _TextLayerImages_instances = new WeakSet();
  Ec_fn = function([t2, e2, i2, n2, s2, a2]) {
    const r2 = Math.hypot((s2 - t2) * __privateGet(this, _Js2), (a2 - e2) * __privateGet(this, _Qs2)), o2 = Math.hypot((i2 - t2) * __privateGet(this, _Js2), (n2 - e2) * __privateGet(this, _Qs2));
    if (r2 < __privateGet(this, _xc) || o2 < __privateGet(this, _xc)) return null;
    const l2 = [(s2 - t2) * __privateGet(this, _Js2) / r2, (a2 - e2) * __privateGet(this, _Qs2) / r2, (i2 - t2) * __privateGet(this, _Js2) / o2, (n2 - e2) * __privateGet(this, _Qs2) / o2, 0, 0], h2 = Util.inverseTransform(l2), c2 = document.createElement("canvas");
    c2.className = "textLayerImagePlaceholder";
    c2.width = 0;
    c2.height = 0;
    Object.assign(c2.style, { opacity: 0, position: "absolute", left: percentage(t2), top: percentage(e2), width: percentage(r2 / __privateGet(this, _Js2)), height: percentage(o2 / __privateGet(this, _Qs2)), transformOrigin: "0% 0%", transform: `matrix(${l2.join(",")})` });
    __privateGet(this, _Ac).set(c2, { inverseTransform: h2, width: r2, height: o2, x1: t2, y1: e2 });
    return c2;
  };
  __privateAdd(_TextLayerImages, _Cc, null);
  var TextLayerImages = _TextLayerImages;
  globalThis._pdfjsTestingUtils = { HighlightOutliner };
  globalThis.pdfjsLib = { AbortException, AnnotationEditorLayer, AnnotationEditorParamsType: y, AnnotationEditorType: b, AnnotationEditorUIManager, AnnotationLayer, AnnotationMode: g, AnnotationType: k, applyOpacity, build: Ot, ColorPicker, createValidAbsoluteUrl, CSSConstants, DOMSVGFactory, DrawLayer, FeatureTest, fetchData, findContrastColor, getDocument, getFilenameFromUrl, getPdfFilenameFromUrl, getRGB, getRGBA, getUuid, GlobalWorkerOptions, ImageKind: T, InvalidPDFException, isDataScheme, isPdfFile, isValidExplicitDest: ht, makeArr, makeMap, makeObj, MathClamp, noContextMenu, normalizeUnicode, OPS: B, OutputScale, PasswordException, PasswordResponses: H, PDFDataRangeTransport, PDFDateString, PDFWorker, PermissionFlag: v, PixelsPerInch, RenderingCancelledException, renderRichText, ResponseException, setLayerDimensions, shadow, SignatureExtractor, stopEvent, SupportedImageMimeTypes: j, TextLayer, TextLayerImages, TouchManager, updateUrlHash, Util, VerbosityLevel: F, version: Lt, XfaLayer };

  // src/scripts/pdfViewer.js
  GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@" + Lt + "/build/pdf.worker.min.mjs";
  var ZOOM_STEPS = [0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4];
  function btn(label, cls, title) {
    var b2 = document.createElement("button");
    b2.type = "button";
    b2.className = "ml-pdf-btn" + (cls ? " " + cls : "");
    b2.textContent = label;
    if (title) b2.title = title;
    b2.setAttribute("aria-label", title || label);
    return b2;
  }
  function iconBtn(svg, title, cls) {
    var b2 = document.createElement("button");
    b2.type = "button";
    b2.className = "ml-pdf-btn ml-pdf-icon" + (cls ? " " + cls : "");
    b2.innerHTML = svg;
    b2.title = title;
    b2.setAttribute("aria-label", title);
    return b2;
  }
  async function resolveDestPage(pdf, dest) {
    if (typeof dest === "string") dest = await pdf.getDestination(dest);
    if (!dest || !dest[0]) return 1;
    var idx = await pdf.getPageIndex(dest[0]);
    return idx + 1;
  }
  function escAttr(s2) {
    return String(s2 || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }
  function pdfUrl(url) {
    try {
      return new URL(url, window.location.href).href;
    } catch (e2) {
      return url;
    }
  }
  function showError(root, msg) {
    root.classList.remove("ml-pdf-loading", "ml-pdf-ready", "ml-pdf-fallback");
    root.classList.add("ml-pdf-error");
    root.innerHTML = '<div class="ml-pdf-status">' + escAttr(msg) + "</div>";
  }
  async function openPdf(url, isAlive, state) {
    var abs = pdfUrl(url);
    var res = await fetch(abs, { credentials: "same-origin" });
    if (!res.ok) throw new Error("Archive fetch failed (HTTP " + res.status + ")");
    var data = new Uint8Array(await res.arrayBuffer());
    if (!isAlive() || state.dead) throw new Error("cancelled");
    if (data.byteLength < 5 || String.fromCharCode(data[0], data[1], data[2], data[3]) !== "%PDF") {
      throw new Error("Archive file is not a valid PDF");
    }
    var loadingTask = getDocument({
      data,
      disableWorker: true,
      disableAutoFetch: true,
      disableStream: true,
      isEvalSupported: false,
      useSystemFonts: true
    });
    state.loadingTask = loadingTask;
    try {
      return await loadingTask.promise;
    } finally {
      state.loadingTask = null;
    }
  }
  function destroyPdfViewer(root) {
    if (!root || !root.__pdfV) return;
    var st2 = root.__pdfV;
    st2.dead = true;
    if (st2.loadingTask) {
      try {
        st2.loadingTask.destroy();
      } catch (e2) {
      }
    }
    if (st2.renderTask) {
      try {
        st2.renderTask.cancel();
      } catch (e2) {
      }
    }
    if (st2.pdf) {
      try {
        st2.pdf.destroy();
      } catch (e2) {
      }
    }
    root.__pdfV = null;
    root.innerHTML = "";
    root.classList.remove("ml-pdf-loading", "ml-pdf-ready", "ml-pdf-error", "ml-pdf-fallback");
  }
  async function mountPdfViewer(root, url, title, isAlive) {
    destroyPdfViewer(root);
    if (typeof isAlive !== "function") isAlive = function() {
      return true;
    };
    var state = { dead: false, root };
    root.__pdfV = state;
    root.classList.add("ml-pdf-view", "ml-pdf-loading");
    root.innerHTML = '<div class="ml-pdf-status">DECODING ARCHIVE\u2026</div>';
    var pdf;
    try {
      pdf = await openPdf(url, isAlive, state);
      if (!isAlive() || state.dead) {
        pdf.destroy();
        return;
      }
    } catch (err) {
      if (!isAlive() || state.dead) return;
      console.warn("[pdfViewer]", err);
      showError(root, "ARCHIVE READ FAILED");
      return;
    }
    state.pdf = pdf;
    state.scaleIdx = 1;
    state.pageCount = pdf.numPages;
    state.currentPage = 1;
    state.baseFit = 1;
    state.dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    var toolbar = document.createElement("div");
    toolbar.className = "ml-pdf-toolbar";
    toolbar.setAttribute("role", "toolbar");
    var tocBtn = btn("TOC", "ml-pdf-toc", "Table of contents");
    var zoomOut = iconBtn('<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/></svg>', "Zoom out");
    var zoomLabel = document.createElement("span");
    zoomLabel.className = "ml-pdf-zoom";
    zoomLabel.textContent = "100%";
    var zoomIn = iconBtn('<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>', "Zoom in");
    var prevPg = iconBtn('<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>', "Previous page");
    var pageInput = document.createElement("input");
    pageInput.type = "number";
    pageInput.className = "ml-pdf-page-input";
    pageInput.min = "1";
    pageInput.max = String(pdf.numPages);
    pageInput.value = "1";
    pageInput.setAttribute("aria-label", "Page number");
    var pageTotal = document.createElement("span");
    pageTotal.className = "ml-pdf-page-total";
    pageTotal.textContent = "/ " + pdf.numPages;
    var nextPg = iconBtn('<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>', "Next page");
    toolbar.appendChild(tocBtn);
    toolbar.appendChild(zoomOut);
    toolbar.appendChild(zoomLabel);
    toolbar.appendChild(zoomIn);
    toolbar.appendChild(prevPg);
    toolbar.appendChild(pageInput);
    toolbar.appendChild(pageTotal);
    toolbar.appendChild(nextPg);
    var outlineEl = document.createElement("nav");
    outlineEl.className = "ml-pdf-outline";
    outlineEl.hidden = true;
    outlineEl.setAttribute("aria-label", "Document outline");
    var body = document.createElement("div");
    body.className = "ml-pdf-body";
    var stage = document.createElement("div");
    stage.className = "ml-pdf-stage";
    body.appendChild(stage);
    root.innerHTML = "";
    root.appendChild(toolbar);
    root.appendChild(outlineEl);
    root.appendChild(body);
    function updateZoomLabel() {
      zoomLabel.textContent = Math.round(ZOOM_STEPS[state.scaleIdx] * 100) + "%";
    }
    function pageScale(page) {
      var vp1 = page.getViewport({ scale: 1 });
      var cw = Math.max(stage.clientWidth - 20, 120);
      state.baseFit = Math.max(0.25, cw / vp1.width);
      return state.baseFit * ZOOM_STEPS[state.scaleIdx];
    }
    async function renderCurrentPage() {
      if (!isAlive() || state.dead || !state.pdf) return;
      var pageNum = state.currentPage;
      if (state.renderTask) {
        try {
          state.renderTask.cancel();
        } catch (e2) {
        }
        state.renderTask = null;
      }
      stage.innerHTML = '<div class="ml-pdf-status">RENDERING PAGE\u2026</div>';
      try {
        var page = await state.pdf.getPage(pageNum);
        if (!isAlive() || state.dead) return;
        var scale = pageScale(page);
        var viewport = page.getViewport({ scale });
        var dpr = state.dpr;
        var canvas = document.createElement("canvas");
        canvas.className = "ml-pdf-canvas";
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = viewport.width.toFixed(1) + "px";
        canvas.style.height = viewport.height.toFixed(1) + "px";
        var ctx = canvas.getContext("2d", { alpha: false });
        var transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null;
        stage.innerHTML = "";
        stage.appendChild(canvas);
        var task = page.render({ canvas, canvasContext: ctx, viewport, transform });
        state.renderTask = task;
        await task.promise;
        state.renderTask = null;
      } catch (e2) {
        if (!isAlive() || state.dead) return;
        if (e2 && e2.name !== "RenderingCancelledException") {
          stage.innerHTML = '<div class="ml-pdf-page-err">PAGE ' + pageNum + " UNAVAILABLE</div>";
        }
      }
    }
    function goToPage(num) {
      num = Math.max(1, Math.min(state.pageCount, num | 0));
      if (num === state.currentPage) return;
      state.currentPage = num;
      pageInput.value = String(num);
      stage.scrollTop = 0;
      stage.scrollLeft = 0;
      renderCurrentPage();
    }
    async function buildOutline() {
      outlineEl.innerHTML = "";
      var outline;
      try {
        outline = await pdf.getOutline();
      } catch (e2) {
        outline = null;
      }
      if (!outline || !outline.length) {
        outlineEl.innerHTML = '<div class="ml-pdf-outline-empty">NO TABLE OF CONTENTS</div>';
        return;
      }
      async function addItems(items, depth) {
        for (var i2 = 0; i2 < items.length; i2++) {
          var item = items[i2];
          var b2 = document.createElement("button");
          b2.type = "button";
          b2.className = "ml-pdf-outline-item";
          b2.style.paddingLeft = 8 + depth * 12 + "px";
          b2.textContent = item.title || "Section " + (i2 + 1);
          (function(dest) {
            b2.addEventListener("click", function() {
              resolveDestPage(pdf, dest).then(function(pg) {
                goToPage(pg);
                outlineEl.hidden = true;
              });
            });
          })(item.dest);
          outlineEl.appendChild(b2);
          if (item.items && item.items.length) await addItems(item.items, depth + 1);
        }
      }
      await addItems(outline, 0);
    }
    tocBtn.addEventListener("click", function() {
      if (outlineEl.hidden) buildOutline();
      outlineEl.hidden = !outlineEl.hidden;
    });
    zoomOut.addEventListener("click", function() {
      if (state.scaleIdx > 0) {
        state.scaleIdx--;
        updateZoomLabel();
        stage.scrollTop = 0;
        stage.scrollLeft = 0;
        renderCurrentPage();
      }
    });
    zoomIn.addEventListener("click", function() {
      if (state.scaleIdx < ZOOM_STEPS.length - 1) {
        state.scaleIdx++;
        updateZoomLabel();
        stage.scrollTop = 0;
        stage.scrollLeft = 0;
        renderCurrentPage();
      }
    });
    prevPg.addEventListener("click", function() {
      goToPage(state.currentPage - 1);
    });
    nextPg.addEventListener("click", function() {
      goToPage(state.currentPage + 1);
    });
    pageInput.addEventListener("change", function() {
      goToPage(+pageInput.value);
    });
    pageInput.addEventListener("keydown", function(e2) {
      if (e2.key === "Enter") {
        e2.preventDefault();
        goToPage(+pageInput.value);
      }
    });
    root.classList.remove("ml-pdf-loading");
    root.classList.add("ml-pdf-ready");
    if (title) root.setAttribute("aria-label", title);
    updateZoomLabel();
    await renderCurrentPage();
  }
  return __toCommonJS(pdfViewer_exports);
})();
