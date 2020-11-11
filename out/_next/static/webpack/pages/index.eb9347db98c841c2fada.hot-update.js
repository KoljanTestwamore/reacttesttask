webpackHotUpdate_N_E("pages/index",{

/***/ "./components/IdInput/IdInput.js":
/*!***************************************!*\
  !*** ./components/IdInput/IdInput.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IdInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IdInput_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdInput.module.css */ "./components/IdInput/IdInput.module.css");
/* harmony import */ var _IdInput_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_IdInput_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\reactapp\\next\\components\\IdInput\\IdInput.js",
    _s = $RefreshSig$();



function IdInput(props) {
  _s();

  function countCheckNumber(number) {
    var res = 0;
    var digits = number.split("");
    var numbers = new Array(digits.length).fill().map(function (_, i) {
      return i % 10 + 1;
    });

    for (var i = 0; i < digits.length; i++) {
      res += digits[i] * numbers[i];
    }

    res %= 11;

    if (res === 10) {
      res = 0;

      var _numbers = new Array(digits.length).fill().map(function (_, i) {
        return (i + 2) % 10 + 1;
      });

      for (var _i = 0; _i < digits.length; _i++) {
        res += digits[_i] * _numbers[_i];
      }

      res %= 11;
      if (res === 10) return 0;
    }

    return res;
  }

  function handleSend() {
    if (input.length >= 20 && input.length <= 25) {
      props.setId(input);
      setHintMessage("");
    } else {
      setErrorMessage("УИН должен содержать от 20 до 25 цифр");
    }
  }

  function validate(e) {
    setInput(e.target.value);
    setErrorMessage("");
    setFromHint(false);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      hintMessage = _useState3[0],
      setHintMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      fromHint = _useState4[0],
      setFromHint = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setInput(input.replace(/\D/g, ""));

    if (input.length >= 19 && input.length < 25 && !fromHint) {
      setHintMessage(input + countCheckNumber(input).toString());
    } else {
      setHintMessage("");
    }
  }, [input]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _IdInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputGroup,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      value: input,
      onChange: validate,
      onKeyDown: function onKeyDown(e) {
        if (e.key === "ArrowDown" && hintMessage) {
          setInput(hintMessage);
          setHintMessage("");
          setFromHint(true);
        } else if (e.key === "Enter") {
          handleSend();
        }
      },
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0423\u0418\u041D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSend,
      children: "\u041D\u0430\u0439\u0442\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }, this), hintMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _IdInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hint,
      children: hintMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 20
    }, this), errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _IdInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 11
  }, this);
}

_s(IdInput, "+M3pTCgwz8evYegpcUpZNsKQsfc=");

_c = IdInput;

var _c;

$RefreshReg$(_c, "IdInput");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JZElucHV0L0lkSW5wdXQuanMiXSwibmFtZXMiOlsiSWRJbnB1dCIsInByb3BzIiwiY291bnRDaGVja051bWJlciIsIm51bWJlciIsInJlcyIsImRpZ2l0cyIsInNwbGl0IiwibnVtYmVycyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaGFuZGxlU2VuZCIsImlucHV0Iiwic2V0SWQiLCJzZXRIaW50TWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInZhbGlkYXRlIiwiZSIsInNldElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRGcm9tSGludCIsInVzZVN0YXRlIiwiZXJyb3JNZXNzYWdlIiwiaGludE1lc3NhZ2UiLCJmcm9tSGludCIsInVzZUVmZmVjdCIsInJlcGxhY2UiLCJ0b1N0cmluZyIsInN0eWxlcyIsImlucHV0R3JvdXAiLCJrZXkiLCJoaW50IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQUE7O0FBQ3JDLFdBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUFrQztBQUNoQyxRQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWEsRUFBYixDQUFmO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLElBQUlDLEtBQUosQ0FBVUgsTUFBTSxDQUFDSSxNQUFqQixFQUNLQyxJQURMLEdBRUtDLEdBRkwsQ0FFUyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVQSxDQUFDLEdBQUcsRUFBSixHQUFTLENBQW5CO0FBQUEsS0FGVCxDQUFkOztBQUdBLFNBQUssSUFBSUEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1IsTUFBTSxDQUFDSSxNQUEzQixFQUFtQ0ksQ0FBQyxFQUFwQyxFQUF3QztB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UjtBQUNBVix3QkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNBTyxxQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELFNBSkQsTUFJTyxJQUFJSixDQUFDLENBQUNjLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQzVCcEIsb0JBQVU7QUFDWDtBQUNGLE9BWEg7QUFZRSxpQkFBVyxFQUFDO0FBWmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGVBZ0JOO0FBQ0UsYUFBTyxFQUFFQSxVQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJNLEVBc0JOYSxXQUFXLGlCQUFJO0FBQUssZUFBUyxFQUFFSywwREFBTSxDQUFDRyxJQUF2QjtBQUFBLGdCQUNaUjtBQURZO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QlQsRUEyQk5ELFlBQVksaUJBQUk7QUFBSyxlQUFTLEVBQUVNLDBEQUFNLENBQUNJLEtBQXZCO0FBQUEsZ0JBQ2JWO0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQWtDRDs7R0E3RnVCMUIsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYjkzNDdkYjk4Yzg0MWMyZmFkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JZElucHV0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElkSW5wdXQocHJvcHMpIHtcclxuICBmdW5jdGlvbiBjb3VudENoZWNrTnVtYmVyKG51bWJlcikge1xyXG4gICAgbGV0IHJlcyA9IDA7XHJcbiAgICBjb25zdCBkaWdpdHMgPSBudW1iZXIuc3BsaXQoXCJcIik7XHJcbiAgICBsZXQgbnVtYmVycyA9IG5ldyBBcnJheShkaWdpdHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSAlIDEwICsgMSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXMgKz0gZGlnaXRzW2ldICogbnVtYmVyc1tpXTtcclxuICAgIH1cclxuICAgIHJlcyAlPSAxMTtcclxuICAgIGlmIChyZXMgPT09IDEwKSB7XHJcbiAgICAgIHJlcyA9IDA7XHJcbiAgICAgIGxldCBudW1iZXJzID0gbmV3IEFycmF5KGRpZ2l0cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKGkgKyAyKSAlIDEwICsgMSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlnaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmVzICs9IGRpZ2l0c1tpXSAqIG51bWJlcnNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmVzICU9IDExO1xyXG4gICAgICBpZiAocmVzID09PSAxMClcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTZW5kKCkge1xyXG4gICAgaWYgKChpbnB1dC5sZW5ndGggPj0gMjApXHJcbiAgICAgICYmIChpbnB1dC5sZW5ndGggPD0gMjUpKSB7XHJcbiAgICAgIHByb3BzLnNldElkKGlucHV0KTtcclxuICAgICAgc2V0SGludE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQo9CY0J0g0LTQvtC70LbQtdC9INGB0L7QtNC10YDQttCw0YLRjCDQvtGCIDIwINC00L4gMjUg0YbQuNGE0YBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZShlKSB7XHJcbiAgICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgICBzZXRGcm9tSGludChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaGludE1lc3NhZ2UsIHNldEhpbnRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmcm9tSGludCwgc2V0RnJvbUhpbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW5wdXQoaW5wdXQucmVwbGFjZSgvXFxEL2csIFwiXCIpKTtcclxuICAgIGlmICgoaW5wdXQubGVuZ3RoID49IDE5KVxyXG4gICAgICAmJiAoaW5wdXQubGVuZ3RoIDwgMjUpXHJcbiAgICAgICYmICFmcm9tSGludCkge1xyXG4gICAgICBzZXRIaW50TWVzc2FnZShpbnB1dCArIGNvdW50Q2hlY2tOdW1iZXIoaW5wdXQpLnRvU3RyaW5nKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SGludE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfSwgW2lucHV0XSk7XHJcblxyXG5cclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRHcm91cH0+XHJcbiAgICA8aW5wdXRcclxuICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICBvbkNoYW5nZT17dmFsaWRhdGV9XHJcbiAgICAgIG9uS2V5RG93bj17ZSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiICYmIGhpbnRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzZXRJbnB1dChoaW50TWVzc2FnZSk7XHJcbiAgICAgICAgICBzZXRIaW50TWVzc2FnZShcIlwiKTtcclxuICAgICAgICAgIHNldEZyb21IaW50KHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgaGFuZGxlU2VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQo9CY0J1cIlxyXG4gICAgPlxyXG4gICAgPC9pbnB1dD5cclxuICAgIDxidXR0b25cclxuICAgICAgb25DbGljaz17aGFuZGxlU2VuZH1cclxuICAgID5cclxuICAgICAg0J3QsNC50YLQuFxyXG4gICAgPC9idXR0b24+XHJcbiAge1xyXG4gICAgaGludE1lc3NhZ2UgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaW50fT5cclxuICAgICAge2hpbnRNZXNzYWdlfVxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG4gIHtcclxuICAgIGVycm9yTWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cclxuICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuICA8L2Rpdj5cclxuICApO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=