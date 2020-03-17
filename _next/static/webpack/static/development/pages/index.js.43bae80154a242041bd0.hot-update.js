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
      'PROJECT_MANAGEMENT': 2,
      'TIME_MANAGEMENT': 1,
      'SELF_MANAGEMENT': 1,
      'INITIATIVE': 2,
      'EFFECTIVE_COMMUNICATION': 3,
      'CONFLICT_RESOULTION': 4,
      'FLEXIBILITY': 0,
      'CREATIVE_THINKING': 1,
      'MOTIVATING_OTHERS': 0,
      'DEVELOPING_OTHERS': 0,
      'TEAMWORK': 0,
      'ACCOMPLISHMENT': 2,
      'ENGINEERING_PRACTICES': 4,
      'SOFTWARE_FUNDAMENTALS': 1,
      'QUALITY': 1,
      'SOFTWARE_SCALE': 2,
      'MOBILE': 1,
      'WEB_CLIENT': 2,
      'FOUNDATIONS': 3,
      'SERVERS': 2
    },
    focusedTrackId: 'MOBILE'
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
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tY2FyY2VsZXMvZGV2L3Byb2plY3RzL3Nub3dmbGFrZS9jb21wb25lbnRzL1Nub3dmbGFrZUFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSjJCLEFBR21DLEFBR1YsQUFJQSxBQVVpQixBQUlsQixXQUNVLENBbEJQLEFBSUEsVUFQaEIsSUFJQSxBQUkrQixHQVNuQixVQUNaLGdCQVRpQixNQWFqQixTQVptQixpQkFDQSxpQkFDTCxZQUNPLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvbWNhcmNlbGVzL2Rldi9wcm9qZWN0cy9zbm93Zmxha2UvY29tcG9uZW50cy9Tbm93Zmxha2VBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgVHJhY2tTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1RyYWNrU2VsZWN0b3InXG5pbXBvcnQgTmlnaHRpbmdhbGVDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL05pZ2h0aW5nYWxlQ2hhcnQnXG5pbXBvcnQgS2V5Ym9hcmRMaXN0ZW5lciBmcm9tICcuLi9jb21wb25lbnRzL0tleWJvYXJkTGlzdGVuZXInXG5pbXBvcnQgVHJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFjaydcbmltcG9ydCBXb3JkbWFyayBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRtYXJrJ1xuaW1wb3J0IExldmVsVGhlcm1vbWV0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFRoZXJtb21ldGVyJ1xuaW1wb3J0IHsgZWxpZ2libGVUaXRsZXMsIHRyYWNrSWRzLCBtaWxlc3RvbmVzLCBtaWxlc3RvbmVUb1BvaW50cyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBQb2ludFN1bW1hcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1BvaW50U3VtbWFyaWVzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCwgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZVNlbGVjdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVTZWxlY3RvcidcblxudHlwZSBTbm93Zmxha2VBcHBTdGF0ZSA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBuYW1lOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxufVxuXG5jb25zdCBoYXNoVG9TdGF0ZSA9IChoYXNoOiBTdHJpbmcpOiA/U25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICBpZiAoIWhhc2gpIHJldHVybiBudWxsXG4gIGNvbnN0IHJlc3VsdCA9IGRlZmF1bHRTdGF0ZSgpXG4gIGNvbnN0IGhhc2hWYWx1ZXMgPSBoYXNoLnNwbGl0KCcjJylbMV0uc3BsaXQoJywnKVxuICBpZiAoIWhhc2hWYWx1ZXMpIHJldHVybiBudWxsXG4gIHRyYWNrSWRzLmZvckVhY2goKHRyYWNrSWQsIGkpID0+IHtcbiAgICByZXN1bHQubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IGNvZXJjZU1pbGVzdG9uZShOdW1iZXIoaGFzaFZhbHVlc1tpXSkpXG4gIH0pXG4gIGlmIChoYXNoVmFsdWVzW3RyYWNrSWRzLmxlbmd0aF0pIHJlc3VsdC5uYW1lID0gZGVjb2RlVVJJKGhhc2hWYWx1ZXNbdHJhY2tJZHMubGVuZ3RoXSlcbiAgaWYgKGhhc2hWYWx1ZXNbdHJhY2tJZHMubGVuZ3RoICsgMV0pIHJlc3VsdC50aXRsZSA9IGRlY29kZVVSSShoYXNoVmFsdWVzW3RyYWNrSWRzLmxlbmd0aCArIDFdKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNvZXJjZU1pbGVzdG9uZSA9ICh2YWx1ZTogbnVtYmVyKTogTWlsZXN0b25lID0+IHtcbiAgLy8gSEFDSyBJIGtub3cgdGhpcyBpcyBnb29meSBidXQgaSdtIGRlYWxpbmcgd2l0aCBmbG93IHR5cGluZ1xuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gMFxuICAgIGNhc2UgMTogcmV0dXJuIDFcbiAgICBjYXNlIDI6IHJldHVybiAyXG4gICAgY2FzZSAzOiByZXR1cm4gM1xuICAgIGNhc2UgNDogcmV0dXJuIDRcbiAgICBjYXNlIDU6IHJldHVybiA1XG4gICAgZGVmYXVsdDogcmV0dXJuIDBcbiAgfVxufVxuXG5jb25zdCBlbXB0eVN0YXRlID0gKCk6IFNub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuXG4gICAgICBcIlRJTUVfTUFOQUdFTUVOVFwiOiAwLFxuICAgICAgXCJTRUxGX01BTkFHRU1FTlRcIjogMCxcbiAgICAgIFwiUFJPSkVDVF9NQU5BR0VNRU5UXCI6IDAsXG4gICAgICBcIklOSVRJQVRJVkVcIjogMCxcblxuICAgICAgXCJFRkZFQ1RJVkVfQ09NTVVOSUNBVElPTlwiOiAwLFxuICAgICAgXCJDT05GTElDVF9SRVNPTFVUSU9OXCI6IDAsXG4gICAgICBcIkZMRVhJQklMSVRZXy8gREVBTElORyBXSVRIIEFNQklHVUlUWVwiOiAwLFxuICAgICAgXCJDUkVBVElWSVRZX1RISU5LSU5HXCI6IDAsXG5cbiAgICAgIFwiTU9USVZBVElOR19PVEhFUlNcIjogMCxcbiAgICAgIFwiREVWRUxPUElOR19PVEhFUlNcIjogMCxcbiAgICAgIFwiVEVBTVdPUktcIjogMCxcbiAgICAgIFwiQUNDT01QTElTSE1FTlRcIjogMCxcblxuICAgICAgXCJFTkdJTkVFUklOR19XT1cgUFJBQ1RJQ0VTXCI6IDAsXG4gICAgICBcIlNPRlRXQVJFX0ZVTkRBTUVOVEFMU1wiOiAwLFxuICAgICAgXCJTT0ZUV0FSRV9BVCBTQ0FMRVwiOiAwLFxuICAgICAgXCJRVUFMSVRZXCI6IDAsXG5cbiAgICAgIFwiTU9CSUxFXCI6IDAsXG4gICAgICBcIldFQl9DTElFTlRcIjogMCxcbiAgICAgIFwiU0VSVkVSXCI6IDAsXG4gICAgICBcIkZPVU5EQVRJT05TXCI6IDAsXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ1RJTUVfTUFOQUdFTUVOVCdcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSAoKTogU25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDZXJzZWkgTGFubmlzdGVyJyxcbiAgICB0aXRsZTogJ1N0YWZmIEVuZ2luZWVyJyxcbiAgICBtaWxlc3RvbmVCeVRyYWNrOiB7XG5cbiAgICAgICdQUk9KRUNUX01BTkFHRU1FTlQnOiAyLFxuICAgICAgJ1RJTUVfTUFOQUdFTUVOVCc6IDEsXG4gICAgICAnU0VMRl9NQU5BR0VNRU5UJzogMSxcbiAgICAgICdJTklUSUFUSVZFJzogMixcblxuICAgICAgJ0VGRkVDVElWRV9DT01NVU5JQ0FUSU9OJzogMyxcbiAgICAgICdDT05GTElDVF9SRVNPVUxUSU9OJzogNCxcbiAgICAgICdGTEVYSUJJTElUWSc6IDAsXG4gICAgICAnQ1JFQVRJVkVfVEhJTktJTkcnOiAxLFxuXG4gICAgICAnTU9USVZBVElOR19PVEhFUlMnOiAwLFxuICAgICAgJ0RFVkVMT1BJTkdfT1RIRVJTJzogMCxcbiAgICAgICdURUFNV09SSyc6IDAsXG4gICAgICAnQUNDT01QTElTSE1FTlQnOiAyLFxuXG4gICAgICAnRU5HSU5FRVJJTkdfUFJBQ1RJQ0VTJzogNCxcbiAgICAgICdTT0ZUV0FSRV9GVU5EQU1FTlRBTFMnOiAxLFxuICAgICAgJ1FVQUxJVFknOiAxLFxuICAgICAgJ1NPRlRXQVJFX1NDQUxFJzogMixcblxuICAgICAgJ01PQklMRSc6IDEsXG4gICAgICAnV0VCX0NMSUVOVCc6IDIsXG4gICAgICAnRk9VTkRBVElPTlMnOiAzLFxuICAgICAgJ1NFUlZFUlMnOiAyLFxuXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ01PQklMRSdcbiAgfVxufVxuXG5jb25zdCBzdGF0ZVRvSGFzaCA9IChzdGF0ZTogU25vd2ZsYWtlQXBwU3RhdGUpID0+IHtcbiAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUubWlsZXN0b25lQnlUcmFjaykgcmV0dXJuIG51bGxcbiAgY29uc3QgdmFsdWVzID0gdHJhY2tJZHMubWFwKHRyYWNrSWQgPT4gc3RhdGUubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSkuY29uY2F0KGVuY29kZVVSSShzdGF0ZS5uYW1lKSwgZW5jb2RlVVJJKHN0YXRlLnRpdGxlKSlcbiAgcmV0dXJuIHZhbHVlcy5qb2luKCcsJylcbn1cblxudHlwZSBQcm9wcyA9IHt9XG5cbmNsYXNzIFNub3dmbGFrZUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU25vd2ZsYWtlQXBwU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IGVtcHR5U3RhdGUoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IGhhc2ggPSBzdGF0ZVRvSGFzaCh0aGlzLnN0YXRlKVxuICAgIGlmIChoYXNoKSB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgIyR7aGFzaH1gKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBoYXNoVG9TdGF0ZSh3aW5kb3cubG9jYXRpb24uaGFzaClcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZGVmYXVsdFN0YXRlKCkpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDk2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtaW5wdXQ6aG92ZXIsIC5uYW1lLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxOXB4IGF1dG8gMCcgfX0+XG4gICAgICAgICAgey8qIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8V29yZG1hcmsgLz5cbiAgICAgICAgICA8L2E+ICovfVxuICAgICAgICAgIDxoMT5Ob3Z1bSBFbmdpbmVlcmluZyBDYXJlZXIgRnJhbWV3b3JrPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZSB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGgyPlBsZWFzZSByYXRlIHlvdXIgbGV2ZWwgb2YgY29tcGV0ZW5jeSBvbiBlYWNoIG9mIHRoZSBhcmVhcyBiZWxvdy48L2gyPlxuICAgICAgICAgICAgPHA+SWYgeW91IHdhbnQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBlYWNoIG9mIHRoZSBjb21wZXRlbmNpZXMsIHZpc2l0IG91ciA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMTc3eU15SWw3T3hhaGItaVB1M25lbWpoVEo5c0xsLXQxc3ZGamdvQmFYYXcvZWRpdD91c3A9c2hhcmluZ1wiPkNvbXBldGVuY3kgTWF0cml4IGluIEdvb2dsZSBTaGVldHM8L2E+LjwvcD5cbiAgICAgICAgICAgIDxwPlNpbmNlIGl04oCZcyBpbXBvc3NpYmxlIHRvIGFjY3VyYXRlbHkgYXNzZXNzIGEgbGV2ZWwgb2YgY29tcGV0ZW5jeSBiYXNlZCBvbiBhIHNob3J0IHNlbnRlbmNlIHRoZSBmb2xsb3dpbmcgYWRkaXRpb25hbCByZXNvdXJjZXMgYXJlIHByb3ZpZGVkOjwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPkEgY29tcGFueSB3aWRlIGxldmVsIGltcGFjdCBleHBlY3RhdGlvbjogQWxsIGxldmVscyBhcmUgc29tZXdoYXQgZXF1aXZhbGVudCBhbW9uZyBjb21wZXRlbmNpZXMuIFRoZSBpbXBhY3Qgb2YgYW4gaW5kaXZpZHVhbCBwZXJmb3JtYW5jZSBvbiB0aGUgY29tcGFueSBjYW4gYmUgdXNlZCB0byBzdGVlciBpbiBkb3VidCBiZXR3ZWVuIHR3byBsZXZlbHMuPC9saT5cbiAgICAgICAgICAgICAgPGxpPkEgc2V0IG9mIGJlaGF2aW91cnMgZXhwZWN0ZWQgb2Ygc29tZW9uZSBoYXZpbmcgcmVhY2hlZCB0aGF0IGxldmVsLjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BIHNldCBvZiBwcmFjdGljZXMgdGhhdCBjb3VsZCAoYnV0IG5vdCBuZWNlc3NhcmlseSBkb2VzKSBkZW1vbnN0cmF0ZSB0aGlzIGxldmVsIG9mICBjb21wZXRlbmN5LjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkFmdGVyIGNvbXBsZXRpbmcgeW91ciBzZWxmLWV2YWx1YXRpb24gKGluY2x1ZGluZyB5b3VyIGZ1bGwgbmFtZSBhYm92ZSBhbmQgc2NvcmluZyBiZWxvdyksIHBsZWFzZSBzdWJtaXQgdGhlIGdlbmVyYXRlZCBVUkwgdG8gPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2UxOVk0M3JMU1gtNXBNT2dteFhTSjBURmtBZVByLXc1cjc5QVE0aGRDY0xnNHZtZy92aWV3Zm9ybT91c3A9c2ZfbGlua1wiPnRoaXMgZm9ybTwvYT4uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMCB9fT5cbiAgICAgICAgICAgIDxOaWdodGluZ2FsZUNoYXJ0XG4gICAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgICAgZm9jdXNlZFRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICAgIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm49eyh0cmFjaywgbWlsZXN0b25lKSA9PiB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrLCBtaWxlc3RvbmUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRyYWNrU2VsZWN0b3JcbiAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgZm9jdXNlZFRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgc2V0Rm9jdXNlZFRyYWNrSWRGbj17dGhpcy5zZXRGb2N1c2VkVHJhY2tJZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8S2V5Ym9hcmRMaXN0ZW5lclxuICAgICAgICAgIHNlbGVjdE5leHRUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgc2VsZWN0UHJldlRyYWNrRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2suYmluZCh0aGlzLCAtMSl9XG4gICAgICAgICAgaW5jcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgZGVjcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgLTEpfSAvPlxuICAgICAgICA8VHJhY2tcbiAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgdHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmdCb3R0b206ICcyMHB4JyB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICBNYWRlIHdpdGgg4p2k77iPIGJ5IE5vdnVtIEVuZywgYmFzZWQgb24gYW4gb3JpZ2luYWwgaWRlYSBmcm9tIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5lbmdpbmVlcmluZ1wiIHRhcmdldD1cIl9ibGFua1wiPk1lZGl1bSBFbmc8L2E+LlxuICAgICAgICAgICAgTGVhcm4gYWJvdXQgPGEgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9zL2VuZ2luZWVyaW5nLWdyb3d0aC1mcmFtZXdvcmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj50aGVpciB2ZXJzaW9uIG9mIHRoaXMgZ3Jvd3RoIGZyYW1ld29yazwvYT5cbiAgICAgICAgICAgIHsnICd9YW5kIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5lbmdpbmVlcmluZy9lbmdpbmVlcmluZy1ncm93dGgtYXQtbWVkaXVtLTQ5MzViMzIzNGQyNVwiIHRhcmdldD1cIl9ibGFua1wiPndoYXQgdGhleSBkbyBjdXJyZW50bHk8L2E+LlxuICAgICAgICAgICAgR2V0IHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01lZGl1bS9zbm93Zmxha2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5zb3VyY2UgY29kZTwvYT4uXG4gICAgICAgICAgICBSZWFkIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL3AvODVlMDc4YmMxNWI3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+dGVybXMgb2Ygc2VydmljZTwvYT4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluID5cbiAgICApXG4gIH1cblxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFja0lkOiBUcmFja0lkLCBtaWxlc3RvbmU6IE1pbGVzdG9uZSkge1xuICAgIGNvbnN0IG1pbGVzdG9uZUJ5VHJhY2sgPSB0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tcbiAgICBtaWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdID0gbWlsZXN0b25lXG5cbiAgICBjb25zdCB0aXRsZXMgPSBlbGlnaWJsZVRpdGxlcyhtaWxlc3RvbmVCeVRyYWNrKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVzLmluZGV4T2YodGhpcy5zdGF0ZS50aXRsZSkgPT09IC0xID8gdGl0bGVzWzBdIDogdGhpcy5zdGF0ZS50aXRsZVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbGVzdG9uZUJ5VHJhY2ssIGZvY3VzZWRUcmFja0lkOiB0cmFja0lkLCB0aXRsZSB9KVxuICB9XG5cbiAgc2hpZnRGb2N1c2VkVHJhY2soZGVsdGE6IG51bWJlcikge1xuICAgIGxldCBpbmRleCA9IHRyYWNrSWRzLmluZGV4T2YodGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZClcbiAgICBpbmRleCA9IChpbmRleCArIGRlbHRhICsgdHJhY2tJZHMubGVuZ3RoKSAlIHRyYWNrSWRzLmxlbmd0aFxuICAgIGNvbnN0IGZvY3VzZWRUcmFja0lkID0gdHJhY2tJZHNbaW5kZXhdXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUcmFja0lkIH0pXG4gIH1cblxuICBzZXRGb2N1c2VkVHJhY2tJZCh0cmFja0lkOiBUcmFja0lkKSB7XG4gICAgbGV0IGluZGV4ID0gdHJhY2tJZHMuaW5kZXhPZih0cmFja0lkKVxuICAgIGNvbnN0IGZvY3VzZWRUcmFja0lkID0gdHJhY2tJZHNbaW5kZXhdXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUcmFja0lkIH0pXG4gIH1cblxuICBzaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEoZGVsdGE6IG51bWJlcikge1xuICAgIGxldCBwcmV2TWlsZXN0b25lID0gdGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrW3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWRdXG4gICAgbGV0IG1pbGVzdG9uZSA9IHByZXZNaWxlc3RvbmUgKyBkZWx0YVxuICAgIGlmIChtaWxlc3RvbmUgPCAwKSBtaWxlc3RvbmUgPSAwXG4gICAgaWYgKG1pbGVzdG9uZSA+IDUpIG1pbGVzdG9uZSA9IDVcbiAgICB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWQsICgobWlsZXN0b25lOiBhbnkpOiBNaWxlc3RvbmUpKVxuICB9XG5cbiAgc2V0VGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIGxldCB0aXRsZXMgPSBlbGlnaWJsZVRpdGxlcyh0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2spXG4gICAgdGl0bGUgPSB0aXRsZXMuaW5kZXhPZih0aXRsZSkgPT0gLTEgPyB0aXRsZXNbMF0gOiB0aXRsZVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZSB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNub3dmbGFrZUFwcFxuIl19 */\n/*@ sourceURL=/Users/mcarceles/dev/projects/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
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
//# sourceMappingURL=index.js.43bae80154a242041bd0.hot-update.js.map