webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SnowflakeApp.js":
/*!************************************!*\
  !*** ./components/SnowflakeApp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TrackSelector */ "./components/TrackSelector.js");
/* harmony import */ var _components_NightingaleChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NightingaleChart */ "./components/NightingaleChart.js");
/* harmony import */ var _components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/KeyboardListener */ "./components/KeyboardListener.js");
/* harmony import */ var _components_Track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Track */ "./components/Track.js");
/* harmony import */ var _components_Wordmark__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Wordmark */ "./components/Wordmark.js");
/* harmony import */ var _components_LevelThermometer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/LevelThermometer */ "./components/LevelThermometer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _components_PointSummaries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PointSummaries */ "./components/PointSummaries.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_TitleSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/TitleSelector */ "./components/TitleSelector.js");





var _jsxFileName = "/Users/mcarceles/dev/projects/snowflake/components/SnowflakeApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;











var hashToState = function hashToState(hash) {
  if (!hash) return null;
  var result = defaultState();
  var hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].forEach(function (trackId, i) {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]));
  });
  if (hashValues[_constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].length]) result.name = decodeURI(hashValues[_constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].length]);
  if (hashValues[_constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].length + 1]) result.title = decodeURI(hashValues[_constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].length + 1]);
  return result;
};

var coerceMilestone = function coerceMilestone(value) {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch (value) {
    case 0:
      return 0;

    case 1:
      return 1;

    case 2:
      return 2;

    case 3:
      return 3;

    case 4:
      return 4;

    case 5:
      return 5;

    default:
      return 0;
  }
};

var emptyState = function emptyState() {
  return {
    name: '',
    title: '',
    milestoneByTrack: {
      "TIME_MANAGEMENT": 0,
      "SELF_MANAGEMENT": 0,
      "PROJECT_MANAGEMENT": 0,
      "INITIATIVE": 0,
      "EFFECTIVE_COMMUNICATION": 0,
      "CONFLICT_RESOLUTION": 0,
      "FLEXIBILITY_/ DEALING WITH AMBIGUITY": 0,
      "CREATIVITY_THINKING": 0,
      "MOTIVATING_OTHERS": 0,
      "DEVELOPING_OTHERS": 0,
      "TEAMWORK": 0,
      "ACCOMPLISHMENT": 0,
      "ENGINEERING_WOW PRACTICES": 0,
      "SOFTWARE_FUNDAMENTALS": 0,
      "SOFTWARE_AT SCALE": 0,
      "QUALITY": 0,
      "MOBILE": 0,
      "WEB_CLIENT": 0,
      "SERVER": 0,
      "FOUNDATIONS": 0
    },
    focusedTrackId: 'TIME_MANAGEMENT'
  };
};

var defaultState = function defaultState() {
  return {
    name: 'Cersei Lannister',
    title: 'Staff Engineer',
    milestoneByTrack: {
      "TIME_MANAGEMENT": 3,
      "SELF_MANAGEMENT": 0,
      "PROJECT_MANAGEMENT": 3,
      "INITIATIVE": 4,
      "EFFECTIVE_COMMUNICATION": 5,
      "CONFLICT_RESOLUTION": 1,
      "FLEXIBILITY_/ DEALING WITH AMBIGUITY": 0,
      "CREATIVITY_THINKING": 2,
      "MOTIVATING_OTHERS": 1,
      "DEVELOPING_OTHERS": 0,
      "TEAMWORK": 1,
      "ACCOMPLISHMENT": 3,
      "ENGINEERING_WOW PRACTICES": 3,
      "SOFTWARE_FUNDAMENTALS": 2,
      "SOFTWARE_AT SCALE": 5,
      "QUALITY": 1,
      "MOBILE": 1,
      "WEB_CLIENT": 2,
      "SERVER": 3,
      "FOUNDATIONS": 4
    },
    focusedTrackId: 'TIME_MANAGEMENT'
  };
};

var stateToHash = function stateToHash(state) {
  if (!state || !state.milestoneByTrack) return null;
  var values = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].map(function (trackId) {
    return state.milestoneByTrack[trackId];
  }).concat(encodeURI(state.name), encodeURI(state.title));
  return values.join(',');
};

var SnowflakeApp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SnowflakeApp, _React$Component);

  function SnowflakeApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SnowflakeApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SnowflakeApp).call(this, props));
    _this.state = emptyState();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SnowflakeApp, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var hash = stateToHash(this.state);
      if (hash) window.location.replace("#".concat(hash));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var state = hashToState(window.location.hash);

      if (state) {
        this.setState(state);
      } else {
        this.setState(emptyState());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("main", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2126963245",
        __self: this
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tY2FyY2VsZXMvZGV2L3Byb2plY3RzL3Nub3dmbGFrZS9jb21wb25lbnRzL1Nub3dmbGFrZUFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSjJCLEFBR21DLEFBR1YsQUFJQSxBQVVpQixBQUlsQixXQUNVLENBbEJQLEFBSUEsVUFQaEIsSUFJQSxBQUkrQixHQVNuQixVQUNaLGdCQVRpQixNQWFqQixTQVptQixpQkFDQSxpQkFDTCxZQUNPLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvbWNhcmNlbGVzL2Rldi9wcm9qZWN0cy9zbm93Zmxha2UvY29tcG9uZW50cy9Tbm93Zmxha2VBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgVHJhY2tTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1RyYWNrU2VsZWN0b3InXG5pbXBvcnQgTmlnaHRpbmdhbGVDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL05pZ2h0aW5nYWxlQ2hhcnQnXG5pbXBvcnQgS2V5Ym9hcmRMaXN0ZW5lciBmcm9tICcuLi9jb21wb25lbnRzL0tleWJvYXJkTGlzdGVuZXInXG5pbXBvcnQgVHJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFjaydcbmltcG9ydCBXb3JkbWFyayBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRtYXJrJ1xuaW1wb3J0IExldmVsVGhlcm1vbWV0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFRoZXJtb21ldGVyJ1xuaW1wb3J0IHsgZWxpZ2libGVUaXRsZXMsIHRyYWNrSWRzLCBtaWxlc3RvbmVzLCBtaWxlc3RvbmVUb1BvaW50cyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBQb2ludFN1bW1hcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1BvaW50U3VtbWFyaWVzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCwgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZVNlbGVjdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVTZWxlY3RvcidcblxudHlwZSBTbm93Zmxha2VBcHBTdGF0ZSA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBuYW1lOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxufVxuXG5jb25zdCBoYXNoVG9TdGF0ZSA9IChoYXNoOiBTdHJpbmcpOiA/U25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICBpZiAoIWhhc2gpIHJldHVybiBudWxsXG4gIGNvbnN0IHJlc3VsdCA9IGRlZmF1bHRTdGF0ZSgpXG4gIGNvbnN0IGhhc2hWYWx1ZXMgPSBoYXNoLnNwbGl0KCcjJylbMV0uc3BsaXQoJywnKVxuICBpZiAoIWhhc2hWYWx1ZXMpIHJldHVybiBudWxsXG4gIHRyYWNrSWRzLmZvckVhY2goKHRyYWNrSWQsIGkpID0+IHtcbiAgICByZXN1bHQubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IGNvZXJjZU1pbGVzdG9uZShOdW1iZXIoaGFzaFZhbHVlc1tpXSkpXG4gIH0pXG4gIGlmIChoYXNoVmFsdWVzW3RyYWNrSWRzLmxlbmd0aF0pIHJlc3VsdC5uYW1lID0gZGVjb2RlVVJJKGhhc2hWYWx1ZXNbdHJhY2tJZHMubGVuZ3RoXSlcbiAgaWYgKGhhc2hWYWx1ZXNbdHJhY2tJZHMubGVuZ3RoICsgMV0pIHJlc3VsdC50aXRsZSA9IGRlY29kZVVSSShoYXNoVmFsdWVzW3RyYWNrSWRzLmxlbmd0aCArIDFdKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNvZXJjZU1pbGVzdG9uZSA9ICh2YWx1ZTogbnVtYmVyKTogTWlsZXN0b25lID0+IHtcbiAgLy8gSEFDSyBJIGtub3cgdGhpcyBpcyBnb29meSBidXQgaSdtIGRlYWxpbmcgd2l0aCBmbG93IHR5cGluZ1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gMFxuICAgIGNhc2UgMTogcmV0dXJuIDFcbiAgICBjYXNlIDI6IHJldHVybiAyXG4gICAgY2FzZSAzOiByZXR1cm4gM1xuICAgIGNhc2UgNDogcmV0dXJuIDRcbiAgICBjYXNlIDU6IHJldHVybiA1XG4gICAgZGVmYXVsdDogcmV0dXJuIDBcbiAgfVxufVxuXG5jb25zdCBlbXB0eVN0YXRlID0gKCk6IFNub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuXG4gICAgICBcIlRJTUVfTUFOQUdFTUVOVFwiOiAwLFxuICAgICAgXCJTRUxGX01BTkFHRU1FTlRcIjogMCxcbiAgICAgIFwiUFJPSkVDVF9NQU5BR0VNRU5UXCI6IDAsXG4gICAgICBcIklOSVRJQVRJVkVcIjogMCxcblxuICAgICAgXCJFRkZFQ1RJVkVfQ09NTVVOSUNBVElPTlwiOiAwLFxuICAgICAgXCJDT05GTElDVF9SRVNPTFVUSU9OXCI6IDAsXG4gICAgICBcIkZMRVhJQklMSVRZXy8gREVBTElORyBXSVRIIEFNQklHVUlUWVwiOiAwLFxuICAgICAgXCJDUkVBVElWSVRZX1RISU5LSU5HXCI6IDAsXG5cbiAgICAgIFwiTU9USVZBVElOR19PVEhFUlNcIjogMCxcbiAgICAgIFwiREVWRUxPUElOR19PVEhFUlNcIjogMCxcbiAgICAgIFwiVEVBTVdPUktcIjogMCxcbiAgICAgIFwiQUNDT01QTElTSE1FTlRcIjogMCxcblxuICAgICAgXCJFTkdJTkVFUklOR19XT1cgUFJBQ1RJQ0VTXCI6IDAsXG4gICAgICBcIlNPRlRXQVJFX0ZVTkRBTUVOVEFMU1wiOiAwLFxuICAgICAgXCJTT0ZUV0FSRV9BVCBTQ0FMRVwiOiAwLFxuICAgICAgXCJRVUFMSVRZXCI6IDAsXG5cbiAgICAgIFwiTU9CSUxFXCI6IDAsXG4gICAgICBcIldFQl9DTElFTlRcIjogMCxcbiAgICAgIFwiU0VSVkVSXCI6IDAsXG4gICAgICBcIkZPVU5EQVRJT05TXCI6IDAsXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ1RJTUVfTUFOQUdFTUVOVCdcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSAoKTogU25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDZXJzZWkgTGFubmlzdGVyJyxcbiAgICB0aXRsZTogJ1N0YWZmIEVuZ2luZWVyJyxcbiAgICBtaWxlc3RvbmVCeVRyYWNrOiB7XG5cbiAgICAgIFwiVElNRV9NQU5BR0VNRU5UXCI6IDMsXG4gICAgICBcIlNFTEZfTUFOQUdFTUVOVFwiOiAwLFxuICAgICAgXCJQUk9KRUNUX01BTkFHRU1FTlRcIjogMyxcbiAgICAgIFwiSU5JVElBVElWRVwiOiA0LFxuXG4gICAgICBcIkVGRkVDVElWRV9DT01NVU5JQ0FUSU9OXCI6IDUsXG4gICAgICBcIkNPTkZMSUNUX1JFU09MVVRJT05cIjogMSxcbiAgICAgIFwiRkxFWElCSUxJVFlfLyBERUFMSU5HIFdJVEggQU1CSUdVSVRZXCI6IDAsXG4gICAgICBcIkNSRUFUSVZJVFlfVEhJTktJTkdcIjogMixcblxuICAgICAgXCJNT1RJVkFUSU5HX09USEVSU1wiOiAxLFxuICAgICAgXCJERVZFTE9QSU5HX09USEVSU1wiOiAwLFxuICAgICAgXCJURUFNV09SS1wiOiAxLFxuICAgICAgXCJBQ0NPTVBMSVNITUVOVFwiOiAzLFxuXG4gICAgICBcIkVOR0lORUVSSU5HX1dPVyBQUkFDVElDRVNcIjogMyxcbiAgICAgIFwiU09GVFdBUkVfRlVOREFNRU5UQUxTXCI6IDIsXG4gICAgICBcIlNPRlRXQVJFX0FUIFNDQUxFXCI6IDUsXG4gICAgICBcIlFVQUxJVFlcIjogMSxcblxuICAgICAgXCJNT0JJTEVcIjogMSxcbiAgICAgIFwiV0VCX0NMSUVOVFwiOiAyLFxuICAgICAgXCJTRVJWRVJcIjogMyxcbiAgICAgIFwiRk9VTkRBVElPTlNcIjogNCxcblxuICAgIH0sXG4gICAgZm9jdXNlZFRyYWNrSWQ6ICdUSU1FX01BTkFHRU1FTlQnXG4gIH1cbn1cblxuY29uc3Qgc3RhdGVUb0hhc2ggPSAoc3RhdGU6IFNub3dmbGFrZUFwcFN0YXRlKSA9PiB7XG4gIGlmICghc3RhdGUgfHwgIXN0YXRlLm1pbGVzdG9uZUJ5VHJhY2spIHJldHVybiBudWxsXG4gIGNvbnN0IHZhbHVlcyA9IHRyYWNrSWRzLm1hcCh0cmFja0lkID0+IHN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0pLmNvbmNhdChlbmNvZGVVUkkoc3RhdGUubmFtZSksIGVuY29kZVVSSShzdGF0ZS50aXRsZSkpXG4gIHJldHVybiB2YWx1ZXMuam9pbignLCcpXG59XG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5jbGFzcyBTbm93Zmxha2VBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFNub3dmbGFrZUFwcFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSBlbXB0eVN0YXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBoYXNoID0gc3RhdGVUb0hhc2godGhpcy5zdGF0ZSlcbiAgICBpZiAoaGFzaCkgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYCMke2hhc2h9YClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN0YXRlID0gaGFzaFRvU3RhdGUod2luZG93LmxvY2F0aW9uLmhhc2gpXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGVtcHR5U3RhdGUoKSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogOTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dDpob3ZlciwgLm5hbWUtaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzE5cHggYXV0byAwJyB9fT5cbiAgICAgICAgICB7LyogPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxXb3JkbWFyayAvPlxuICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgPGgxPk5vdnVtIEVuZ2luZWVyaW5nIENhcmVlciBGcmFtZXdvcms8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlIHlvdXIgbmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8aDI+UGxlYXNlIHJhdGUgeW91ciBsZXZlbCBvZiBjb21wZXRlbmN5IG9uIGVhY2ggb2YgdGhlIGFyZWFzIGJlbG93LjwvaDI+XG4gICAgICAgICAgICA8cD5JZiB5b3Ugd2FudCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGVhY2ggb2YgdGhlIGNvbXBldGVuY2llcywgdmlzaXQgb3VyIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xNzd5TXlJbDdPeGFoYi1pUHUzbmVtamhUSjlzTGwtdDFzdkZqZ29CYVhhdy9lZGl0P3VzcD1zaGFyaW5nXCI+Q29tcGV0ZW5jeSBNYXRyaXggaW4gR29vZ2xlIFNoZWV0czwvYT4uPC9wPlxuICAgICAgICAgICAgPHA+U2luY2UgaXTigJlzIGltcG9zc2libGUgdG8gYWNjdXJhdGVseSBhc3Nlc3MgYSBsZXZlbCBvZiBjb21wZXRlbmN5IGJhc2VkIG9uIGEgc2hvcnQgc2VudGVuY2UgdGhlIGZvbGxvd2luZyBhZGRpdGlvbmFsIHJlc291cmNlcyBhcmUgcHJvdmlkZWQ6PC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+QSBjb21wYW55IHdpZGUgbGV2ZWwgaW1wYWN0IGV4cGVjdGF0aW9uOiBBbGwgbGV2ZWxzIGFyZSBzb21ld2hhdCBlcXVpdmFsZW50IGFtb25nIGNvbXBldGVuY2llcy4gVGhlIGltcGFjdCBvZiBhbiBpbmRpdmlkdWFsIHBlcmZvcm1hbmNlIG9uIHRoZSBjb21wYW55IGNhbiBiZSB1c2VkIHRvIHN0ZWVyIGluIGRvdWJ0IGJldHdlZW4gdHdvIGxldmVscy48L2xpPlxuICAgICAgICAgICAgICA8bGk+QSBzZXQgb2YgYmVoYXZpb3VycyBleHBlY3RlZCBvZiBzb21lb25lIGhhdmluZyByZWFjaGVkIHRoYXQgbGV2ZWwuPC9saT5cbiAgICAgICAgICAgICAgPGxpPkEgc2V0IG9mIHByYWN0aWNlcyB0aGF0IGNvdWxkIChidXQgbm90IG5lY2Vzc2FyaWx5IGRvZXMpIGRlbW9uc3RyYXRlIHRoaXMgbGV2ZWwgb2YgIGNvbXBldGVuY3kuPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+QWZ0ZXIgY29tcGxldGluZyB5b3VyIHNlbGYtZXZhbHVhdGlvbiAoaW5jbHVkaW5nIHlvdXIgZnVsbCBuYW1lIGFib3ZlIGFuZCBzY29yaW5nIGJlbG93KSwgcGxlYXNlIHN1Ym1pdCB0aGUgZ2VuZXJhdGVkIFVSTCB0byA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZTE5WTQzckxTWC01cE1PZ214WFNKMFRGa0FlUHItdzVyNzlBUTRoZENjTGc0dm1nL3ZpZXdmb3JtP3VzcD1zZl9saW5rXCI+dGhpcyBmb3JtPC9hPi48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAwIH19PlxuICAgICAgICAgICAgPE5pZ2h0aW5nYWxlQ2hhcnRcbiAgICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgICAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbj17KHRyYWNrLCBtaWxlc3RvbmUpID0+IHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2ssIG1pbGVzdG9uZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VHJhY2tTZWxlY3RvclxuICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICBzZXRGb2N1c2VkVHJhY2tJZEZuPXt0aGlzLnNldEZvY3VzZWRUcmFja0lkLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxLZXlib2FyZExpc3RlbmVyXG4gICAgICAgICAgc2VsZWN0TmV4dFRyYWNrRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2suYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICBzZWxlY3RQcmV2VHJhY2tGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFjay5iaW5kKHRoaXMsIC0xKX1cbiAgICAgICAgICBpbmNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEuYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICBkZWNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEuYmluZCh0aGlzLCAtMSl9IC8+XG4gICAgICAgIDxUcmFja1xuICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICB0cmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm49eyh0cmFjaywgbWlsZXN0b25lKSA9PiB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrLCBtaWxlc3RvbmUpfSAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZ0JvdHRvbTogJzIwcHgnIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgIE1hZGUgd2l0aCDinaTvuI8gYnkgTm92dW0gRW5nLCBiYXNlZCBvbiBhbiBvcmlnaW5hbCBpZGVhIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmVuZ2luZWVyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWVkaXVtIEVuZzwvYT4uXG4gICAgICAgICAgICBMZWFybiBhYm91dCA8YSBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL3MvZW5naW5lZXJpbmctZ3Jvd3RoLWZyYW1ld29ya1wiIHRhcmdldD1cIl9ibGFua1wiPnRoZWlyIHZlcnNpb24gb2YgdGhpcyBncm93dGggZnJhbWV3b3JrPC9hPlxuICAgICAgICAgICAgeycgJ31hbmQgPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmVuZ2luZWVyaW5nL2VuZ2luZWVyaW5nLWdyb3d0aC1hdC1tZWRpdW0tNDkzNWIzMjM0ZDI1XCIgdGFyZ2V0PVwiX2JsYW5rXCI+d2hhdCB0aGV5IGRvIGN1cnJlbnRseTwvYT4uXG4gICAgICAgICAgICBHZXQgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTWVkaXVtL3Nub3dmbGFrZVwiIHRhcmdldD1cIl9ibGFua1wiPnNvdXJjZSBjb2RlPC9hPi5cbiAgICAgICAgICAgIFJlYWQgdGhlIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vcC84NWUwNzhiYzE1YjdcIiB0YXJnZXQ9XCJfYmxhbmtcIj50ZXJtcyBvZiBzZXJ2aWNlPC9hPi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4gPlxuICAgIClcbiAgfVxuXG4gIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrSWQ6IFRyYWNrSWQsIG1pbGVzdG9uZTogTWlsZXN0b25lKSB7XG4gICAgY29uc3QgbWlsZXN0b25lQnlUcmFjayA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1xuICAgIG1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPSBtaWxlc3RvbmVcblxuICAgIGNvbnN0IHRpdGxlcyA9IGVsaWdpYmxlVGl0bGVzKG1pbGVzdG9uZUJ5VHJhY2spXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZXMuaW5kZXhPZih0aGlzLnN0YXRlLnRpdGxlKSA9PT0gLTEgPyB0aXRsZXNbMF0gOiB0aGlzLnN0YXRlLnRpdGxlXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbWlsZXN0b25lQnlUcmFjaywgZm9jdXNlZFRyYWNrSWQ6IHRyYWNrSWQsIHRpdGxlIH0pXG4gIH1cblxuICBzaGlmdEZvY3VzZWRUcmFjayhkZWx0YTogbnVtYmVyKSB7XG4gICAgbGV0IGluZGV4ID0gdHJhY2tJZHMuaW5kZXhPZih0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkKVxuICAgIGluZGV4ID0gKGluZGV4ICsgZGVsdGEgKyB0cmFja0lkcy5sZW5ndGgpICUgdHJhY2tJZHMubGVuZ3RoXG4gICAgY29uc3QgZm9jdXNlZFRyYWNrSWQgPSB0cmFja0lkc1tpbmRleF1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRyYWNrSWQgfSlcbiAgfVxuXG4gIHNldEZvY3VzZWRUcmFja0lkKHRyYWNrSWQ6IFRyYWNrSWQpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRyYWNrSWQpXG4gICAgY29uc3QgZm9jdXNlZFRyYWNrSWQgPSB0cmFja0lkc1tpbmRleF1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRyYWNrSWQgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YShkZWx0YTogbnVtYmVyKSB7XG4gICAgbGV0IHByZXZNaWxlc3RvbmUgPSB0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZF1cbiAgICBsZXQgbWlsZXN0b25lID0gcHJldk1pbGVzdG9uZSArIGRlbHRhXG4gICAgaWYgKG1pbGVzdG9uZSA8IDApIG1pbGVzdG9uZSA9IDBcbiAgICBpZiAobWlsZXN0b25lID4gNSkgbWlsZXN0b25lID0gNVxuICAgIHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZCwgKChtaWxlc3RvbmU6IGFueSk6IE1pbGVzdG9uZSkpXG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgbGV0IHRpdGxlcyA9IGVsaWdpYmxlVGl0bGVzKHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFjaylcbiAgICB0aXRsZSA9IHRpdGxlcy5pbmRleE9mKHRpdGxlKSA9PSAtMSA/IHRpdGxlc1swXSA6IHRpdGxlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU25vd2ZsYWtlQXBwXG4iXX0= */\n/*@ sourceURL=/Users/mcarceles/dev/projects/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
        style: {
          margin: '19px auto 0'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Novum Engineering Career Framework")), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx("form", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        placeholder: "State your name",
        className: "jsx-2126963245" + " " + "name-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })), __jsx("h2", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Please rate your level of competency on each of the areas below."), __jsx("p", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "If you want more information about each of the competencies, visit our ", __jsx("a", {
        href: "https://docs.google.com/spreadsheets/d/177yMyIl7Oxahb-iPu3nemjhTJ9sLl-t1svFjgoBaXaw/edit?usp=sharing",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Competency Matrix in Google Sheets"), "."), __jsx("p", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Since it\u2019s impossible to accurately assess a level of competency based on a short sentence the following additional resources are provided:"), __jsx("ul", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "A company wide level impact expectation: All levels are somewhat equivalent among competencies. The impact of an individual performance on the company can be used to steer in doubt between two levels."), __jsx("li", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "A set of behaviours expected of someone having reached that level."), __jsx("li", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "A set of practices that could (but not necessarily does) demonstrate this level of  competency.")), __jsx("p", {
        style: {
          fontWeight: 'bold'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "After completing your self-evaluation (including your full name above and scoring below), please submit the generated URL to ", __jsx("a", {
        href: "https://docs.google.com/forms/d/e/1FAIpQLSe19Y43rLSX-5pMOgmxXSJ0TFkAePr-w5r79AQ4hdCcLg4vmg/viewform?usp=sf_link",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "this form"), ".")), __jsx("div", {
        style: {
          flex: 0
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx(_components_NightingaleChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }))), __jsx(_components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), __jsx(_components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), __jsx(_components_Track__WEBPACK_IMPORTED_MODULE_9__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        trackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }), __jsx("div", {
        style: {
          display: 'flex',
          paddingBottom: '20px'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Made with \u2764\uFE0F by Novum Eng, based on an original idea from ", __jsx("a", {
        href: "https://medium.engineering",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Medium Eng"), ". Learn about ", __jsx("a", {
        href: "https://medium.com/s/engineering-growth-framework",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "their version of this growth framework"), ' ', "and ", __jsx("a", {
        href: "https://medium.engineering/engineering-growth-at-medium-4935b3234d25",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "what they do currently"), ". Get the ", __jsx("a", {
        href: "https://github.com/Medium/snowflake",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "source code"), ". Read the ", __jsx("a", {
        href: "https://medium.com/p/85e078bc15b7",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "terms of service"), ".")));
    }
  }, {
    key: "handleTrackMilestoneChange",
    value: function handleTrackMilestoneChange(trackId, milestone) {
      var milestoneByTrack = this.state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;
      var titles = Object(_constants__WEBPACK_IMPORTED_MODULE_12__["eligibleTitles"])(milestoneByTrack);
      var title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title;
      this.setState({
        milestoneByTrack: milestoneByTrack,
        focusedTrackId: trackId,
        title: title
      });
    }
  }, {
    key: "shiftFocusedTrack",
    value: function shiftFocusedTrack(delta) {
      var index = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].indexOf(this.state.focusedTrackId);
      index = (index + delta + _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].length) % _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].length;
      var focusedTrackId = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "setFocusedTrackId",
    value: function setFocusedTrackId(trackId) {
      var index = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].indexOf(trackId);
      var focusedTrackId = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "shiftFocusedTrackMilestoneByDelta",
    value: function shiftFocusedTrackMilestoneByDelta(delta) {
      var prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId];
      var milestone = prevMilestone + delta;
      if (milestone < 0) milestone = 0;
      if (milestone > 5) milestone = 5;
      this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      var titles = Object(_constants__WEBPACK_IMPORTED_MODULE_12__["eligibleTitles"])(this.state.milestoneByTrack);
      title = titles.indexOf(title) == -1 ? titles[0] : title;
      this.setState({
        title: title
      });
    }
  }]);

  return SnowflakeApp;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SnowflakeApp);

/***/ })

})
//# sourceMappingURL=index.js.8ad154312e869cfac004.hot-update.js.map