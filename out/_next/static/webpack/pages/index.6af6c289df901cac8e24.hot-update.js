webpackHotUpdate_N_E("pages/index",{

/***/ "./components/TableById/TableById.js":
/*!*******************************************!*\
  !*** ./components/TableById/TableById.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TableById_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableById.module.css */ "./components/TableById/TableById.module.css");
/* harmony import */ var _TableById_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TableById_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\reactapp\\next\\components\\TableById\\TableById.js",
    _s = $RefreshSig$();



function TableById(props) {
  _s();

  var id = props.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      items = _useState[0],
      setItems = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      ready = _useState2[0],
      setReady = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showError = _useState3[0],
      setShowError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, _items;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setReady(false);
            setShowError(false);
            _context.next = 4;
            return fetch("https://test-task.shtrafovnet.com/fines/".concat(id));

          case 4:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return res.json();

          case 8:
            _items = _context.sent;
            setItems(_items);
            _context.next = 13;
            break;

          case 12:
            setShowError(true);

          case 13:
            setReady(true);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [id]);

  function makeElements(items) {
    var _this = this;

    return [{
      code: "doc_number",
      value: "Свидетельство о регистрации"
    }, {
      code: "bill_at",
      value: "Дата постановления",
      modifier: function modifier(value) {
        return value.split("T")[0];
      }
    }, {
      code: "koap_code",
      value: "Нарушение"
    }, {
      code: "division_name",
      value: "Получатель платежа"
    }, {
      code: "payee_inn",
      value: "ИНН"
    }, {
      code: "payee_kpp",
      value: "КПП"
    }, {
      code: "payee_bank_account",
      value: "Расчетный счет"
    }, {
      code: "payee_bank_name",
      value: "Банк получателя"
    }, {
      сode: "payee_bank_bik",
      value: "БИК"
    }, {
      code: "payee_oktmo",
      value: "ОКТМО(ОКАТО)"
    }, {
      code: "kbk",
      value: "КБК"
    }, {
      code: "amount",
      value: "Сумма штрафа"
    }, {
      code: "discount_at",
      value: "Скидка",
      modifier: function modifier(value) {
        return "\u0410\u043A\u0442\u0438\u0432\u043D\u0430 \u0434\u043E ".concat(value.split("T")[0]);
      }
    }, {
      code: "payment_status",
      value: "Статус",
      modifier: function modifier(value) {
        return value === "paid" ? "Оплачен" : "Не оплачен";
      }
    }, {
      code: "amount_to_pay",
      value: "Осталось заплатить",
      modifier: function modifier(value) {
        return parseFloat(value) ? value : null;
      }
    }].map(function (el) {
      return items[el.code] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: [el.value, ":"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
          children: el.modifier ? el.modifier(items[el.code]) : items[el.code]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, _this)]
      }, el.code, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }, _this);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _TableById_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContainer,
    children: showError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _TableById_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.message,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "/not-found 1.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), "\u0428\u0442\u0440\u0430\u0444 ", id, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this) : ready ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _TableById_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.tableWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: _TableById_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
        children: ["\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 #", items.number]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
          children: makeElements(items)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _TableById_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.message,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: "/loadingAnim.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 12
  }, this);
}

_s(TableById, "DXDewRtSBSZYWKBd94j914OZD8E=");

_c = TableById;

var _c;

$RefreshReg$(_c, "TableById");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZUJ5SWQvVGFibGVCeUlkLmpzIl0sIm5hbWVzIjpbIlRhYmxlQnlJZCIsInByb3BzIiwiaWQiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJyZWFkeSIsInNldFJlYWR5Iiwic2hvd0Vycm9yIiwic2V0U2hvd0Vycm9yIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibWFrZUVsZW1lbnRzIiwiY29kZSIsInZhbHVlIiwibW9kaWZpZXIiLCJzcGxpdCIsItGBb2RlIiwicGFyc2VGbG9hdCIsIm1hcCIsImVsIiwic3R5bGVzIiwibWFpbkNvbnRhaW5lciIsIm1lc3NhZ2UiLCJ0YWJsZVdyYXBwZXIiLCJ0aXRsZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN2QyxNQUFNQyxFQUFFLEdBQUdELEtBQUssQ0FBQ0MsRUFBakI7O0FBRHVDLGtCQUdiQyxzREFBUSxDQUFDLEVBQUQsQ0FISztBQUFBLE1BR2hDQyxLQUhnQztBQUFBLE1BR3pCQyxRQUh5Qjs7QUFBQSxtQkFJYkYsc0RBQVEsQ0FBQyxLQUFELENBSks7QUFBQSxNQUloQ0csS0FKZ0M7QUFBQSxNQUl6QkMsUUFKeUI7O0FBQUEsbUJBS0xKLHNEQUFRLENBQUMsS0FBRCxDQUxIO0FBQUEsTUFLaENLLFNBTGdDO0FBQUEsTUFLckJDLFlBTHFCOztBQU92Q0MseURBQVMsZ01BQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSSCxvQkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNBRSx3QkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUZRO0FBQUEsbUJBSVVFLEtBQUssbURBQTRDVCxFQUE1QyxFQUpmOztBQUFBO0FBSUZVLGVBSkU7O0FBQUEsa0JBS0pBLEdBQUcsQ0FB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QUFBLGlCQUpnQjtBQUFBLFNBQVNPLEVBQUUsQ0FBQ1AsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFg7QUFBQSxLQWpERixDQUFQO0FBNEREOztBQUVELHNCQUFTO0FBQUssYUFBUyxFQUFFUSw0REFBTSxDQUFDQyxhQUF2QjtBQUFBLGNBQ0xqQixTQUFTLGdCQUVUO0FBQUssZUFBUyxFQUFFZ0IsNERBQU0sQ0FBQ0UsT0FBdkI7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixxQ0FFT3hCLEVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlMsR0FPVEksS0FBSyxnQkFDSDtBQUFLLGVBQVMsRUFBRWtCLDREQUFNLENBQUNHLFlBQXZCO0FBQUEsOEJBQ0E7QUFBRyxpQkFBUyxFQUFFSCw0REFBTSxDQUFDSSxLQUFyQjtBQUFBLHVHQUNrQnhCLEtBQUssQ0FBQ3lCLE1BRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBSUE7QUFBQSwrQkFDRTtBQUFBLG9CQUNHZCxZQUFZLENBQUNYLEtBQUQ7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGdCQVdIO0FBQUssZUFBUyxFQUFFb0IsNERBQU0sQ0FBQ0UsT0FBdkI7QUFBQSw4QkFDQTtBQUFLLFdBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFUO0FBeUJEOztHQTdHdUIxQixTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhZjZjMjg5ZGY5MDFjYWM4ZTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RhYmxlQnlJZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZUJ5SWQocHJvcHMpIHtcclxuICBjb25zdCBpZCA9IHByb3BzLmlkO1xyXG5cclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0Vycm9yLCBzZXRTaG93RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0UmVhZHkoZmFsc2UpO1xyXG4gICAgc2V0U2hvd0Vycm9yKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly90ZXN0LXRhc2suc2h0cmFmb3ZuZXQuY29tL2ZpbmVzLyR7aWR9YCk7XHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd0Vycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgc2V0UmVhZHkodHJ1ZSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VFbGVtZW50cyhpdGVtcykge1xyXG4gICAgcmV0dXJuIFt7XHJcbiAgICAgIGNvZGU6IFwiZG9jX251bWJlclwiLFxyXG4gICAgICB2YWx1ZTogXCLQodCy0LjQtNC10YLQtdC70YzRgdGC0LLQviDQviDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcImJpbGxfYXRcIixcclxuICAgICAgdmFsdWU6IFwi0JTQsNGC0LAg0L/QvtGB0YLQsNC90L7QstC70LXQvdC40Y9cIixcclxuICAgICAgbW9kaWZpZXI6ICh2YWx1ZSkgPT4gdmFsdWUuc3BsaXQoXCJUXCIpWzBdXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJrb2FwX2NvZGVcIixcclxuICAgICAgdmFsdWU6IFwi0J3QsNGA0YPRiNC10L3QuNC1XCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcImRpdmlzaW9uX25hbWVcIixcclxuICAgICAgdmFsdWU6IFwi0J/QvtC70YPRh9Cw0YLQtdC70Ywg0L/Qu9Cw0YLQtdC20LBcIlxyXG4gICAgfSx7XHJcbiAgICAgIGNvZGU6IFwicGF5ZWVfaW5uXCIsXHJcbiAgICAgIHZhbHVlOiBcItCY0J3QnVwiXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJwYXllZV9rcHBcIixcclxuICAgICAgdmFsdWU6IFwi0JrQn9CfXCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcInBheWVlX2JhbmtfYWNjb3VudFwiLFxyXG4gICAgICB2YWx1ZTogXCLQoNCw0YHRh9C10YLQvdGL0Lkg0YHRh9C10YJcIlxyXG4gICAgfSx7XHJcbiAgICAgIGNvZGU6IFwicGF5ZWVfYmFua19uYW1lXCIsXHJcbiAgICAgIHZhbHVlOiBcItCR0LDQvdC6INC/0L7Qu9GD0YfQsNGC0LXQu9GPXCJcclxuICAgIH0se1xyXG4gICAgICDRgW9kZTogXCJwYXllZV9iYW5rX2Jpa1wiLFxyXG4gICAgICB2YWx1ZTpcItCR0JjQmlwiXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJwYXllZV9va3Rtb1wiLFxyXG4gICAgICB2YWx1ZTogXCLQntCa0KLQnNCeKNCe0JrQkNCi0J4pXCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcImtia1wiLFxyXG4gICAgICB2YWx1ZTogXCLQmtCR0JpcIlxyXG4gICAgfSx7XHJcbiAgICAgIGNvZGU6IFwiYW1vdW50XCIsXHJcbiAgICAgIHZhbHVlOiBcItCh0YPQvNC80LAg0YjRgtGA0LDRhNCwXCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcImRpc2NvdW50X2F0XCIsXHJcbiAgICAgIHZhbHVlOiBcItCh0LrQuNC00LrQsFwiLFxyXG4gICAgICBtb2RpZmllcjogKHZhbHVlKSA9PiBg0JDQutGC0LjQstC90LAg0LTQviAke3ZhbHVlLnNwbGl0KFwiVFwiKVswXX1gXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJwYXltZW50X3N0YXR1c1wiLFxyXG4gICAgICB2YWx1ZTogXCLQodGC0LDRgtGD0YFcIixcclxuICAgICAgbW9kaWZpZXI6ICh2YWx1ZSkgPT4gdmFsdWUgPT09IFwicGFpZFwiID8gXCLQntC/0LvQsNGH0LXQvVwiIDogXCLQndC1INC+0L/Qu9Cw0YfQtdC9XCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcImFtb3VudF90b19wYXlcIixcclxuICAgICAgdmFsdWU6IFwi0J7RgdGC0LDQu9C+0YHRjCDQt9Cw0L/Qu9Cw0YLQuNGC0YxcIixcclxuICAgICAgbW9kaWZpZXI6ICh2YWx1ZSkgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPyB2YWx1ZSA6IG51bGxcclxuICAgIH1dLm1hcChlbCA9PlxyXG4gICAgICBpdGVtc1tlbC5jb2RlXSAmJiA8dHIga2V5PXtlbC5jb2RlfT5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7IGVsLnZhbHVlIH06XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7IGVsLm1vZGlmaWVyXHJcbiAgICAgICAgICA/IGVsLm1vZGlmaWVyKGl0ZW1zW2VsLmNvZGVdKVxyXG4gICAgICAgICAgOiBpdGVtc1tlbC5jb2RlXSB9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj4pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICggPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cclxuICAgIHsgc2hvd0Vycm9yXHJcbiAgICA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9ub3QtZm91bmQgMS5zdmdcIiAvPlxyXG4gICAgICDQqNGC0YDQsNGEIHtpZH0g0L3QtSDQvdCw0LnQtNC10L1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICA6IHJlYWR5XHJcbiAgICAgID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVdyYXBwZXJ9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgINCf0L7RgdGC0LDQvdC+0LLQu9C10L3QuNC1ICN7aXRlbXMubnVtYmVyfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHttYWtlRWxlbWVudHMoaXRlbXMpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2xvYWRpbmdBbmltLnN2Z1wiIC8+XHJcbiAgICAgICAg0JfQsNCz0YDRg9C30LrQsFxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==