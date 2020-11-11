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
    className: _IdInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
        lineNumber: 65,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: handleSend,
        children: "\u041D\u0430\u0439\u0442\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, this), hintMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _IdInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hint,
      children: hintMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 20
    }, this), errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _IdInput_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JZElucHV0L0lkSW5wdXQuanMiXSwibmFtZXMiOlsiSWRJbnB1dCIsInByb3BzIiwiY291bnRDaGVja051bWJlciIsIm51bWJlciIsInJlcyIsImRpZ2l0cyIsInNwbGl0IiwibnVtYmVycyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaGFuZGxlU2VuZCIsImlucHV0Iiwic2V0SWQiLCJzZXRIaW50TWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInZhbGlkYXRlIiwiZSIsInNldElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRGcm9tSGludCIsInVzZVN0YXRlIiwiZXJyb3JNZXNzYWdlIiwiaGludE1lc3NhZ2UiLCJmcm9tSGludCIsInVzZUVmZmVjdCIsInJlcGxhY2UiLCJ0b1N0cmluZyIsInN0eWxlcyIsIm1haW5Db250YWluZXIiLCJpbnB1dEdyb3VwIiwia2V5IiwiaGludCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUNyQyxXQUFTQyxnQkFBVCxDQUEwQkMsTUFBMUIsRUFBa0M7QUFDaEMsUUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhLEVBQWIsQ0FBZjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxJQUFJQyxLQUFKLENBQVVILE1BQU0sQ0FBQ0ksTUFBakIsRUFDS0MsSUFETCxHQUVLQyxHQUZMLENBRVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVUEsQ0FBQyxHQUFHLEVBQUosR0FBUyxDQUFuQjtBQUFBLEtBRlQsQ0FBZDs7QUFHQSxTQUFLLElBQUlBLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdSLE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNJLENB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ZSxHQUFGLEtBQVUsV0FBVixJQUF5QlIsV0FBN0IsRUFBMEM7QUFDeENOLG9CQUFRLENBQUNNLFdBQUQsQ0FBUjtBQUNBViwwQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNBTyx1QkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELFdBSkQsTUFJTyxJQUFJSixDQUFDLENBQUNlLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQzVCckIsc0JBQVU7QUFDWDtBQUNGLFNBWEg7QUFZRSxtQkFBVyxFQUFDO0FBWmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZ0JFO0FBQ0UsZUFBTyxFQUFFQSxVQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLEVBd0JOYSxXQUFXLGlCQUFJO0FBQUssZUFBUyxFQUFFSywwREFBTSxDQUFDSSxJQUF2QjtBQUFBLGdCQUNaVDtBQURZO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QlQsRUE2Qk5ELFlBQVksaUJBQUk7QUFBSyxlQUFTLEVBQUVNLDBEQUFNLENBQUNLLEtBQXZCO0FBQUEsZ0JBQ2JYO0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQW9DRDs7R0EvRnVCMUIsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNTA1YTcwYmVhNTgyYTY3NmFjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9JZElucHV0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElkSW5wdXQocHJvcHMpIHtcclxuICBmdW5jdGlvbiBjb3VudENoZWNrTnVtYmVyKG51bWJlcikge1xyXG4gICAgbGV0IHJlcyA9IDA7XHJcbiAgICBjb25zdCBkaWdpdHMgPSBudW1iZXIuc3BsaXQoXCJcIik7XHJcbiAgICBsZXQgbnVtYmVycyA9IG5ldyBBcnJheShkaWdpdHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSAlIDEwICsgMSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXMgKz0gZGlnaXRzW2ldICogbnVtYmVyc1tpXTtcclxuICAgIH1cclxuICAgIHJlcyAlPSAxMTtcclxuICAgIGlmIChyZXMgPT09IDEwKSB7XHJcbiAgICAgIHJlcyA9IDA7XHJcbiAgICAgIGxldCBudW1iZXJzID0gbmV3IEFycmF5KGRpZ2l0cy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKGkgKyAyKSAlIDEwICsgMSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlnaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmVzICs9IGRpZ2l0c1tpXSAqIG51bWJlcnNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmVzICU9IDExO1xyXG4gICAgICBpZiAocmVzID09PSAxMClcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTZW5kKCkge1xyXG4gICAgaWYgKChpbnB1dC5sZW5ndGggPj0gMjApXHJcbiAgICAgICYmIChpbnB1dC5sZW5ndGggPD0gMjUpKSB7XHJcbiAgICAgIHByb3BzLnNldElkKGlucHV0KTtcclxuICAgICAgc2V0SGludE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCLQo9CY0J0g0LTQvtC70LbQtdC9INGB0L7QtNC10YDQttCw0YLRjCDQvtGCIDIwINC00L4gMjUg0YbQuNGE0YBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZShlKSB7XHJcbiAgICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG4gICAgICBzZXRGcm9tSGludChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaGludE1lc3NhZ2UsIHNldEhpbnRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmcm9tSGludCwgc2V0RnJvbUhpbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW5wdXQoaW5wdXQucmVwbGFjZSgvXFxEL2csIFwiXCIpKTtcclxuICAgIGlmICgoaW5wdXQubGVuZ3RoID49IDE5KVxyXG4gICAgICAmJiAoaW5wdXQubGVuZ3RoIDwgMjUpXHJcbiAgICAgICYmICFmcm9tSGludCkge1xyXG4gICAgICBzZXRIaW50TWVzc2FnZShpbnB1dCArIGNvdW50Q2hlY2tOdW1iZXIoaW5wdXQpLnRvU3RyaW5nKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SGludE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfSwgW2lucHV0XSk7XHJcblxyXG5cclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRhaW5lcn0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3ZhbGlkYXRlfVxyXG4gICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIgJiYgaGludE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgc2V0SW5wdXQoaGludE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzZXRIaW50TWVzc2FnZShcIlwiKTtcclxuICAgICAgICAgICAgc2V0RnJvbUhpbnQodHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgaGFuZGxlU2VuZCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQo9CY0J1cIlxyXG4gICAgICA+XHJcbiAgICAgIDwvaW5wdXQ+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kfVxyXG4gICAgICA+XHJcbiAgICAgICAg0J3QsNC50YLQuFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIHtcclxuICAgIGhpbnRNZXNzYWdlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGludH0+XHJcbiAgICAgIHtoaW50TWVzc2FnZX1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuICB7XHJcbiAgICBlcnJvck1lc3NhZ2UgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+XHJcbiAgICAgIHtlcnJvck1lc3NhZ2V9XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbiAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9