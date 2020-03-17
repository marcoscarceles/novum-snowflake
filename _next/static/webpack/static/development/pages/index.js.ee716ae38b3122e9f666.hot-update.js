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
        this.setState(defaultState());
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
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tY2FyY2VsZXMvZGV2L3Byb2plY3RzL3Nub3dmbGFrZS9jb21wb25lbnRzL1Nub3dmbGFrZUFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSjJCLEFBR21DLEFBR1YsQUFJQSxBQVVpQixBQUlsQixXQUNVLENBbEJQLEFBSUEsVUFQaEIsSUFJQSxBQUkrQixHQVNuQixVQUNaLGdCQVRpQixNQWFqQixTQVptQixpQkFDQSxpQkFDTCxZQUNPLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvbWNhcmNlbGVzL2Rldi9wcm9qZWN0cy9zbm93Zmxha2UvY29tcG9uZW50cy9Tbm93Zmxha2VBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgVHJhY2tTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1RyYWNrU2VsZWN0b3InXG5pbXBvcnQgTmlnaHRpbmdhbGVDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL05pZ2h0aW5nYWxlQ2hhcnQnXG5pbXBvcnQgS2V5Ym9hcmRMaXN0ZW5lciBmcm9tICcuLi9jb21wb25lbnRzL0tleWJvYXJkTGlzdGVuZXInXG5pbXBvcnQgVHJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFjaydcbmltcG9ydCBXb3JkbWFyayBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRtYXJrJ1xuaW1wb3J0IExldmVsVGhlcm1vbWV0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFRoZXJtb21ldGVyJ1xuaW1wb3J0IHsgZWxpZ2libGVUaXRsZXMsIHRyYWNrSWRzLCBtaWxlc3RvbmVzLCBtaWxlc3RvbmVUb1BvaW50cyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBQb2ludFN1bW1hcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1BvaW50U3VtbWFyaWVzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCwgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZVNlbGVjdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVTZWxlY3RvcidcblxudHlwZSBTbm93Zmxha2VBcHBTdGF0ZSA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBuYW1lOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxufVxuXG5jb25zdCBoYXNoVG9TdGF0ZSA9IChoYXNoOiBTdHJpbmcpOiA/U25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICBpZiAoIWhhc2gpIHJldHVybiBudWxsXG4gIGNvbnN0IHJlc3VsdCA9IGRlZmF1bHRTdGF0ZSgpXG4gIGNvbnN0IGhhc2hWYWx1ZXMgPSBoYXNoLnNwbGl0KCcjJylbMV0uc3BsaXQoJywnKVxuICBpZiAoIWhhc2hWYWx1ZXMpIHJldHVybiBudWxsXG4gIHRyYWNrSWRzLmZvckVhY2goKHRyYWNrSWQsIGkpID0+IHtcbiAgICByZXN1bHQubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IGNvZXJjZU1pbGVzdG9uZShOdW1iZXIoaGFzaFZhbHVlc1tpXSkpXG4gIH0pXG4gIGlmIChoYXNoVmFsdWVzW3RyYWNrSWRzLmxlbmd0aF0pIHJlc3VsdC5uYW1lID0gZGVjb2RlVVJJKGhhc2hWYWx1ZXNbdHJhY2tJZHMubGVuZ3RoXSlcbiAgaWYgKGhhc2hWYWx1ZXNbdHJhY2tJZHMubGVuZ3RoICsgMV0pIHJlc3VsdC50aXRsZSA9IGRlY29kZVVSSShoYXNoVmFsdWVzW3RyYWNrSWRzLmxlbmd0aCArIDFdKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNvZXJjZU1pbGVzdG9uZSA9ICh2YWx1ZTogbnVtYmVyKTogTWlsZXN0b25lID0+IHtcbiAgLy8gSEFDSyBJIGtub3cgdGhpcyBpcyBnb29meSBidXQgaSdtIGRlYWxpbmcgd2l0aCBmbG93IHR5cGluZ1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gMFxuICAgIGNhc2UgMTogcmV0dXJuIDFcbiAgICBjYXNlIDI6IHJldHVybiAyXG4gICAgY2FzZSAzOiByZXR1cm4gM1xuICAgIGNhc2UgNDogcmV0dXJuIDRcbiAgICBjYXNlIDU6IHJldHVybiA1XG4gICAgZGVmYXVsdDogcmV0dXJuIDBcbiAgfVxufVxuXG5jb25zdCBlbXB0eVN0YXRlID0gKCk6IFNub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuXG4gICAgICBcIlRJTUVfTUFOQUdFTUVOVFwiOiAwLFxuICAgICAgXCJTRUxGX01BTkFHRU1FTlRcIjogMCxcbiAgICAgIFwiUFJPSkVDVF9NQU5BR0VNRU5UXCI6IDAsXG4gICAgICBcIklOSVRJQVRJVkVcIjogMCxcblxuICAgICAgXCJFRkZFQ1RJVkVfQ09NTVVOSUNBVElPTlwiOiAwLFxuICAgICAgXCJDT05GTElDVF9SRVNPTFVUSU9OXCI6IDAsXG4gICAgICBcIkZMRVhJQklMSVRZXy8gREVBTElORyBXSVRIIEFNQklHVUlUWVwiOiAwLFxuICAgICAgXCJDUkVBVElWSVRZX1RISU5LSU5HXCI6IDAsXG5cbiAgICAgIFwiTU9USVZBVElOR19PVEhFUlNcIjogMCxcbiAgICAgIFwiREVWRUxPUElOR19PVEhFUlNcIjogMCxcbiAgICAgIFwiVEVBTVdPUktcIjogMCxcbiAgICAgIFwiQUNDT01QTElTSE1FTlRcIjogMCxcblxuICAgICAgXCJFTkdJTkVFUklOR19XT1cgUFJBQ1RJQ0VTXCI6IDAsXG4gICAgICBcIlNPRlRXQVJFX0ZVTkRBTUVOVEFMU1wiOiAwLFxuICAgICAgXCJTT0ZUV0FSRV9BVCBTQ0FMRVwiOiAwLFxuICAgICAgXCJRVUFMSVRZXCI6IDAsXG5cbiAgICAgIFwiTU9CSUxFXCI6IDAsXG4gICAgICBcIldFQl9DTElFTlRcIjogMCxcbiAgICAgIFwiU0VSVkVSXCI6IDAsXG4gICAgICBcIkZPVU5EQVRJT05TXCI6IDAsXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ1RJTUVfTUFOQUdFTUVOVCdcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSAoKTogU25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDZXJzZWkgTGFubmlzdGVyJyxcbiAgICB0aXRsZTogJ1N0YWZmIEVuZ2luZWVyJyxcbiAgICBtaWxlc3RvbmVCeVRyYWNrOiB7XG5cbiAgICAgIFwiVElNRV9NQU5BR0VNRU5UXCI6IDMsXG4gICAgICBcIlNFTEZfTUFOQUdFTUVOVFwiOiAwLFxuICAgICAgXCJQUk9KRUNUX01BTkFHRU1FTlRcIjogMyxcbiAgICAgIFwiSU5JVElBVElWRVwiOiA0LFxuXG4gICAgICBcIkVGRkVDVElWRV9DT01NVU5JQ0FUSU9OXCI6IDUsXG4gICAgICBcIkNPTkZMSUNUX1JFU09MVVRJT05cIjogMSxcbiAgICAgIFwiRkxFWElCSUxJVFlfLyBERUFMSU5HIFdJVEggQU1CSUdVSVRZXCI6IDAsXG4gICAgICBcIkNSRUFUSVZJVFlfVEhJTktJTkdcIjogMixcblxuICAgICAgXCJNT1RJVkFUSU5HX09USEVSU1wiOiAxLFxuICAgICAgXCJERVZFTE9QSU5HX09USEVSU1wiOiAwLFxuICAgICAgXCJURUFNV09SS1wiOiAxLFxuICAgICAgXCJBQ0NPTVBMSVNITUVOVFwiOiAzLFxuXG4gICAgICBcIkVOR0lORUVSSU5HX1dPVyBQUkFDVElDRVNcIjogMyxcbiAgICAgIFwiU09GVFdBUkVfRlVOREFNRU5UQUxTXCI6IDIsXG4gICAgICBcIlNPRlRXQVJFX0FUIFNDQUxFXCI6IDUsXG4gICAgICBcIlFVQUxJVFlcIjogMSxcblxuICAgICAgXCJNT0JJTEVcIjogMSxcbiAgICAgIFwiV0VCX0NMSUVOVFwiOiAyLFxuICAgICAgXCJTRVJWRVJcIjogMyxcbiAgICAgIFwiRk9VTkRBVElPTlNcIjogNCxcblxuICAgIH0sXG4gICAgZm9jdXNlZFRyYWNrSWQ6ICdUSU1FX01BTkFHRU1FTlQnXG4gIH1cbn1cblxuY29uc3Qgc3RhdGVUb0hhc2ggPSAoc3RhdGU6IFNub3dmbGFrZUFwcFN0YXRlKSA9PiB7XG4gIGlmICghc3RhdGUgfHwgIXN0YXRlLm1pbGVzdG9uZUJ5VHJhY2spIHJldHVybiBudWxsXG4gIGNvbnN0IHZhbHVlcyA9IHRyYWNrSWRzLm1hcCh0cmFja0lkID0+IHN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0pLmNvbmNhdChlbmNvZGVVUkkoc3RhdGUubmFtZSksIGVuY29kZVVSSShzdGF0ZS50aXRsZSkpXG4gIHJldHVybiB2YWx1ZXMuam9pbignLCcpXG59XG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5jbGFzcyBTbm93Zmxha2VBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFNub3dmbGFrZUFwcFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSBlbXB0eVN0YXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBoYXNoID0gc3RhdGVUb0hhc2godGhpcy5zdGF0ZSlcbiAgICBpZiAoaGFzaCkgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYCMke2hhc2h9YClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN0YXRlID0gaGFzaFRvU3RhdGUod2luZG93LmxvY2F0aW9uLmhhc2gpXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGRlZmF1bHRTdGF0ZSgpKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0OmhvdmVyLCAubmFtZS1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMTlweCBhdXRvIDAnIH19PlxuICAgICAgICAgIHsvKiA8YSBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPFdvcmRtYXJrIC8+XG4gICAgICAgICAgPC9hPiAqL31cbiAgICAgICAgICA8aDE+Tm92dW0gRW5naW5lZXJpbmcgQ2FyZWVyIEZyYW1ld29yazwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdGUgeW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxoMj5QbGVhc2UgcmF0ZSB5b3VyIGxldmVsIG9mIGNvbXBldGVuY3kgb24gZWFjaCBvZiB0aGUgYXJlYXMgYmVsb3cuPC9oMj5cbiAgICAgICAgICAgIDxwPklmIHlvdSB3YW50IG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgZWFjaCBvZiB0aGUgY29tcGV0ZW5jaWVzLCB2aXNpdCBvdXIgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzE3N3lNeUlsN094YWhiLWlQdTNuZW1qaFRKOXNMbC10MXN2Rmpnb0JhWGF3L2VkaXQ/dXNwPXNoYXJpbmdcIj5Db21wZXRlbmN5IE1hdHJpeCBpbiBHb29nbGUgU2hlZXRzPC9hPi48L3A+XG4gICAgICAgICAgICA8cD5TaW5jZSBpdOKAmXMgaW1wb3NzaWJsZSB0byBhY2N1cmF0ZWx5IGFzc2VzcyBhIGxldmVsIG9mIGNvbXBldGVuY3kgYmFzZWQgb24gYSBzaG9ydCBzZW50ZW5jZSB0aGUgZm9sbG93aW5nIGFkZGl0aW9uYWwgcmVzb3VyY2VzIGFyZSBwcm92aWRlZDo8L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5BIGNvbXBhbnkgd2lkZSBsZXZlbCBpbXBhY3QgZXhwZWN0YXRpb246IEFsbCBsZXZlbHMgYXJlIHNvbWV3aGF0IGVxdWl2YWxlbnQgYW1vbmcgY29tcGV0ZW5jaWVzLiBUaGUgaW1wYWN0IG9mIGFuIGluZGl2aWR1YWwgcGVyZm9ybWFuY2Ugb24gdGhlIGNvbXBhbnkgY2FuIGJlIHVzZWQgdG8gc3RlZXIgaW4gZG91YnQgYmV0d2VlbiB0d28gbGV2ZWxzLjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BIHNldCBvZiBiZWhhdmlvdXJzIGV4cGVjdGVkIG9mIHNvbWVvbmUgaGF2aW5nIHJlYWNoZWQgdGhhdCBsZXZlbC48L2xpPlxuICAgICAgICAgICAgICA8bGk+QSBzZXQgb2YgcHJhY3RpY2VzIHRoYXQgY291bGQgKGJ1dCBub3QgbmVjZXNzYXJpbHkgZG9lcykgZGVtb25zdHJhdGUgdGhpcyBsZXZlbCBvZiAgY29tcGV0ZW5jeS48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5BZnRlciBjb21wbGV0aW5nIHlvdXIgc2VsZi1ldmFsdWF0aW9uIChpbmNsdWRpbmcgeW91ciBmdWxsIG5hbWUgYWJvdmUgYW5kIHNjb3JpbmcgYmVsb3cpLCBwbGVhc2Ugc3VibWl0IHRoZSBnZW5lcmF0ZWQgVVJMIHRvIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNlMTlZNDNyTFNYLTVwTU9nbXhYU0owVEZrQWVQci13NXI3OUFRNGhkQ2NMZzR2bWcvdmlld2Zvcm0/dXNwPXNmX2xpbmtcIj50aGlzIGZvcm08L2E+LjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDAgfX0+XG4gICAgICAgICAgICA8TmlnaHRpbmdhbGVDaGFydFxuICAgICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICAgIGZvY3VzZWRUcmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUcmFja1NlbGVjdG9yXG4gICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgIGZvY3VzZWRUcmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgIHNldEZvY3VzZWRUcmFja0lkRm49e3RoaXMuc2V0Rm9jdXNlZFRyYWNrSWQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPEtleWJvYXJkTGlzdGVuZXJcbiAgICAgICAgICBzZWxlY3ROZXh0VHJhY2tGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFjay5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgIHNlbGVjdFByZXZUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgLTEpfVxuICAgICAgICAgIGluY3JlYXNlRm9jdXNlZE1pbGVzdG9uZUZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YS5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgIGRlY3JlYXNlRm9jdXNlZE1pbGVzdG9uZUZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YS5iaW5kKHRoaXMsIC0xKX0gLz5cbiAgICAgICAgPFRyYWNrXG4gICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgIHRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbj17KHRyYWNrLCBtaWxlc3RvbmUpID0+IHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2ssIG1pbGVzdG9uZSl9IC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nQm90dG9tOiAnMjBweCcgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgTWFkZSB3aXRoIOKdpO+4jyBieSBOb3Z1bSBFbmcsIGJhc2VkIG9uIGFuIG9yaWdpbmFsIGlkZWEgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uZW5naW5lZXJpbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5NZWRpdW0gRW5nPC9hPi5cbiAgICAgICAgICAgIExlYXJuIGFib3V0IDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vcy9lbmdpbmVlcmluZy1ncm93dGgtZnJhbWV3b3JrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+dGhlaXIgdmVyc2lvbiBvZiB0aGlzIGdyb3d0aCBmcmFtZXdvcms8L2E+XG4gICAgICAgICAgICB7JyAnfWFuZCA8YSBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uZW5naW5lZXJpbmcvZW5naW5lZXJpbmctZ3Jvd3RoLWF0LW1lZGl1bS00OTM1YjMyMzRkMjVcIiB0YXJnZXQ9XCJfYmxhbmtcIj53aGF0IHRoZXkgZG8gY3VycmVudGx5PC9hPi5cbiAgICAgICAgICAgIEdldCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9NZWRpdW0vc25vd2ZsYWtlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+c291cmNlIGNvZGU8L2E+LlxuICAgICAgICAgICAgUmVhZCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9wLzg1ZTA3OGJjMTViN1wiIHRhcmdldD1cIl9ibGFua1wiPnRlcm1zIG9mIHNlcnZpY2U8L2E+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbiA+XG4gICAgKVxuICB9XG5cbiAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2tJZDogVHJhY2tJZCwgbWlsZXN0b25lOiBNaWxlc3RvbmUpIHtcbiAgICBjb25zdCBtaWxlc3RvbmVCeVRyYWNrID0gdGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrXG4gICAgbWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IG1pbGVzdG9uZVxuXG4gICAgY29uc3QgdGl0bGVzID0gZWxpZ2libGVUaXRsZXMobWlsZXN0b25lQnlUcmFjaylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlcy5pbmRleE9mKHRoaXMuc3RhdGUudGl0bGUpID09PSAtMSA/IHRpdGxlc1swXSA6IHRoaXMuc3RhdGUudGl0bGVcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBtaWxlc3RvbmVCeVRyYWNrLCBmb2N1c2VkVHJhY2tJZDogdHJhY2tJZCwgdGl0bGUgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWQpXG4gICAgaW5kZXggPSAoaW5kZXggKyBkZWx0YSArIHRyYWNrSWRzLmxlbmd0aCkgJSB0cmFja0lkcy5sZW5ndGhcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2V0Rm9jdXNlZFRyYWNrSWQodHJhY2tJZDogVHJhY2tJZCkge1xuICAgIGxldCBpbmRleCA9IHRyYWNrSWRzLmluZGV4T2YodHJhY2tJZClcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgcHJldk1pbGVzdG9uZSA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1t0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkXVxuICAgIGxldCBtaWxlc3RvbmUgPSBwcmV2TWlsZXN0b25lICsgZGVsdGFcbiAgICBpZiAobWlsZXN0b25lIDwgMCkgbWlsZXN0b25lID0gMFxuICAgIGlmIChtaWxlc3RvbmUgPiA1KSBtaWxlc3RvbmUgPSA1XG4gICAgdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkLCAoKG1pbGVzdG9uZTogYW55KTogTWlsZXN0b25lKSlcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBsZXQgdGl0bGVzID0gZWxpZ2libGVUaXRsZXModGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrKVxuICAgIHRpdGxlID0gdGl0bGVzLmluZGV4T2YodGl0bGUpID09IC0xID8gdGl0bGVzWzBdIDogdGl0bGVcbiAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGUgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbm93Zmxha2VBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/mcarceles/dev/projects/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
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
//# sourceMappingURL=index.js.ee716ae38b3122e9f666.hot-update.js.map