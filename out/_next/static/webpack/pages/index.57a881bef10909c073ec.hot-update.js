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
      return items[el.code] && el.modifier && el.modifier(items.code) || !el.modifier && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
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
        columnNumber: 87
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZUJ5SWQvVGFibGVCeUlkLmpzIl0sIm5hbWVzIjpbIlRhYmxlQnlJZCIsInByb3BzIiwiaWQiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJyZWFkeSIsInNldFJlYWR5Iiwic2hvd0Vycm9yIiwic2V0U2hvd0Vycm9yIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibWFrZUVsZW1lbnRzIiwiY29kZSIsInZhbHVlIiwibW9kaWZpZXIiLCJzcGxpdCIsItGBb2RlIiwicGFyc2VGbG9hdCIsIm1hcCIsImVsIiwic3R5bGVzIiwibWFpbkNvbnRhaW5lciIsIm1lc3NhZ2UiLCJ0YWJsZVdyYXBwZXIiLCJ0aXRsZSIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN2QyxNQUFNQyxFQUFFLEdBQUdELEtBQUssQ0FBQ0MsRUFBakI7O0FBRHVDLGtCQUdiQyxzREFBUSxDQUFDLEVBQUQsQ0FISztBQUFBLE1BR2hDQyxLQUhnQztBQUFBLE1BR3pCQyxRQUh5Qjs7QUFBQSxtQkFJYkYsc0RBQVEsQ0FBQyxLQUFELENBSks7QUFBQSxNQUloQ0csS0FKZ0M7QUFBQSxNQUl6QkMsUUFKeUI7O0FBQUEsbUJBS0xKLHNEQUFRLENBQUMsS0FBRCxDQUxIO0FBQUEsTUFLaENLLFNBTGdDO0FBQUEsTUFLckJDLFlBTHFCOztBQU92Q0MseURBQVMsZ01BQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSSCxvQkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNBRSx3QkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUZRO0FBQUEsbUJBSVVFLEtBQUssbURBQTRDVCxFQUE1QyxFQUpmOztBQUFBO0FBSUZVLGVBSkU7O0FBQUEsa0JBS0pBLEdBQUcsQ0FB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ODFiZWYxMDkwOWMwNzNlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UYWJsZUJ5SWQubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVCeUlkKHByb3BzKSB7XHJcbiAgY29uc3QgaWQgPSBwcm9wcy5pZDtcclxuXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3JlYWR5LCBzZXRSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dFcnJvciwgc2V0U2hvd0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHNldFJlYWR5KGZhbHNlKTtcclxuICAgIHNldFNob3dFcnJvcihmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdGVzdC10YXNrLnNodHJhZm92bmV0LmNvbS9maW5lcy8ke2lkfWApO1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldEl0ZW1zKGl0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dFcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIHNldFJlYWR5KHRydWUpO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBmdW5jdGlvbiBtYWtlRWxlbWVudHMoaXRlbXMpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBjb2RlOiBcImRvY19udW1iZXJcIixcclxuICAgICAgdmFsdWU6IFwi0KHQstC40LTQtdGC0LXQu9GM0YHRgtCy0L4g0L4g0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFwiXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJiaWxsX2F0XCIsXHJcbiAgICAgIHZhbHVlOiBcItCU0LDRgtCwINC/0L7RgdGC0LDQvdC+0LLQu9C10L3QuNGPXCIsXHJcbiAgICAgIG1vZGlmaWVyOiAodmFsdWUpID0+IHZhbHVlLnNwbGl0KFwiVFwiKVswXVxyXG4gICAgfSx7XHJcbiAgICAgIGNvZGU6IFwia29hcF9jb2RlXCIsXHJcbiAgICAgIHZhbHVlOiBcItCd0LDRgNGD0YjQtdC90LjQtVwiXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJkaXZpc2lvbl9uYW1lXCIsXHJcbiAgICAgIHZhbHVlOiBcItCf0L7Qu9GD0YfQsNGC0LXQu9GMINC/0LvQsNGC0LXQttCwXCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcInBheWVlX2lublwiLFxyXG4gICAgICB2YWx1ZTogXCLQmNCd0J1cIlxyXG4gICAgfSx7XHJcbiAgICAgIGNvZGU6IFwicGF5ZWVfa3BwXCIsXHJcbiAgICAgIHZhbHVlOiBcItCa0J/Qn1wiXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJwYXllZV9iYW5rX2FjY291bnRcIixcclxuICAgICAgdmFsdWU6IFwi0KDQsNGB0YfQtdGC0L3Ri9C5INGB0YfQtdGCXCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcInBheWVlX2JhbmtfbmFtZVwiLFxyXG4gICAgICB2YWx1ZTogXCLQkdCw0L3QuiDQv9C+0LvRg9GH0LDRgtC10LvRj1wiXHJcbiAgICB9LHtcclxuICAgICAg0YFvZGU6IFwicGF5ZWVfYmFua19iaWtcIixcclxuICAgICAgdmFsdWU6XCLQkdCY0JpcIlxyXG4gICAgfSx7XHJcbiAgICAgIGNvZGU6IFwicGF5ZWVfb2t0bW9cIixcclxuICAgICAgdmFsdWU6IFwi0J7QmtCi0JzQnijQntCa0JDQotCeKVwiXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJrYmtcIixcclxuICAgICAgdmFsdWU6IFwi0JrQkdCaXCJcclxuICAgIH0se1xyXG4gICAgICBjb2RlOiBcImFtb3VudFwiLFxyXG4gICAgICB2YWx1ZTogXCLQodGD0LzQvNCwINGI0YLRgNCw0YTQsFwiXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJkaXNjb3VudF9hdFwiLFxyXG4gICAgICB2YWx1ZTogXCLQodC60LjQtNC60LBcIixcclxuICAgICAgbW9kaWZpZXI6ICh2YWx1ZSkgPT4gYNCQ0LrRgtC40LLQvdCwINC00L4gJHt2YWx1ZS5zcGxpdChcIlRcIilbMF19YFxyXG4gICAgfSx7XHJcbiAgICAgIGNvZGU6IFwicGF5bWVudF9zdGF0dXNcIixcclxuICAgICAgdmFsdWU6IFwi0KHRgtCw0YLRg9GBXCIsXHJcbiAgICAgIG1vZGlmaWVyOiAodmFsdWUpID0+IHZhbHVlID09PSBcInBhaWRcIiA/IFwi0J7Qv9C70LDRh9C10L1cIiA6IFwi0J3QtSDQvtC/0LvQsNGH0LXQvVwiXHJcbiAgICB9LHtcclxuICAgICAgY29kZTogXCJhbW91bnRfdG9fcGF5XCIsXHJcbiAgICAgIHZhbHVlOiBcItCe0YHRgtCw0LvQvtGB0Ywg0LfQsNC/0LvQsNGC0LjRgtGMXCIsXHJcbiAgICAgIG1vZGlmaWVyOiAodmFsdWUpID0+IHBhcnNlRmxvYXQodmFsdWUpID8gdmFsdWUgOiBudWxsXHJcbiAgICB9XS5tYXAoZWwgPT5cclxuICAgICAgaXRlbXNbZWwuY29kZV0gJiYgKGVsLm1vZGlmaWVyICYmIGVsLm1vZGlmaWVyKGl0ZW1zLmNvZGUpKSB8fCAoIWVsLm1vZGlmaWVyKSAmJiA8dHIga2V5PXtlbC5jb2RlfT5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7IGVsLnZhbHVlIH06XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICB7IGVsLm1vZGlmaWVyXHJcbiAgICAgICAgICA/IGVsLm1vZGlmaWVyKGl0ZW1zW2VsLmNvZGVdKVxyXG4gICAgICAgICAgOiBpdGVtc1tlbC5jb2RlXSB9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj4pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICggPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cclxuICAgIHsgc2hvd0Vycm9yXHJcbiAgICA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9ub3QtZm91bmQgMS5zdmdcIiAvPlxyXG4gICAgICDQqNGC0YDQsNGEIHtpZH0g0L3QtSDQvdCw0LnQtNC10L1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICA6IHJlYWR5XHJcbiAgICAgID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVdyYXBwZXJ9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgINCf0L7RgdGC0LDQvdC+0LLQu9C10L3QuNC1ICN7aXRlbXMubnVtYmVyfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHttYWtlRWxlbWVudHMoaXRlbXMpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2xvYWRpbmdBbmltLnN2Z1wiIC8+XHJcbiAgICAgICAg0JfQsNCz0YDRg9C30LrQsFxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==