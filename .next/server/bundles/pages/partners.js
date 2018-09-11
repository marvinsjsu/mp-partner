module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/marvin/Projects/CompThree/act_today_partners/components/Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Admin")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/partners",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Partners")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MainLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/Users/marvin/Projects/CompThree/act_today_partners/components/MainLayout.js";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/SendNotification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
var _jsxFileName = "/Users/marvin/Projects/CompThree/act_today_partners/components/SendNotification.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation select_push(\n    $logged_in_user: String!, $zip: String!, $title: String!,\n    $rep: String!, $send: Boolean!, $platform: String!,\n    $state: String!, $radius: Float!, $user: String!,\n    $provider: String!, $message: String!, $api_key: String!\n  ) {\n    select_push(\n      logged_in_user: $logged_in_user, zip: $zip, title: $title,\n      rep: $rep, send: $send, platform: $platform, state: $state,\n      radius: $radius, user: $user, provider: $provider,\n      message: $message, api_key: $api_key\n    ) {\n      response_status,\n      users\n    }\n  }\n"]);




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function SendNotification(_ref) {
  var selectPush = _ref.selectPush;

  function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new window.FormData(form);
    selectPush(formData.get('title'), formData.get('message'));
    form.reset();
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-4286934451"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-4286934451"
  }, "Notification"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    placeholder: "title",
    name: "title",
    type: "text",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-4286934451"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    placeholder: "message",
    name: "message",
    type: "text",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-4286934451"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-4286934451"
  }, "Send"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4286934451",
    css: "form.jsx-4286934451{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-4286934451{font-size:20px;}input.jsx-4286934451{display:block;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VuZE5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmtCLEFBRzJDLEFBS2pCLEFBR0QsY0FDSyxDQUhyQixpQkFMc0IsQ0FTdEIsbUJBUnFCLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL1NlbmROb3RpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnZpbi9Qcm9qZWN0cy9Db21wVGhyZWUvYWN0X3RvZGF5X3BhcnRuZXJzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5cbmZ1bmN0aW9uIFNlbmROb3RpZmljYXRpb24oe3NlbGVjdFB1c2h9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyB3aW5kb3cuRm9ybURhdGEoZm9ybSlcbiAgICBzZWxlY3RQdXNoKGZvcm1EYXRhLmdldCgndGl0bGUnKSwgZm9ybURhdGEuZ2V0KCdtZXNzYWdlJykpXG5cbiAgICBmb3JtLnJlc2V0KClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aDE+Tm90aWZpY2F0aW9uPC9oMT5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0ndGl0bGUnIG5hbWU9J3RpdGxlJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCAvPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSdtZXNzYWdlJyBuYW1lPSdtZXNzYWdlJyB0eXBlPSd0ZXh0JyByZXF1aXJlZCAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IHNlbGVjdFB1c2ggPSBncWxgXG4gIG11dGF0aW9uIHNlbGVjdF9wdXNoKFxuICAgICRsb2dnZWRfaW5fdXNlcjogU3RyaW5nISwgJHppcDogU3RyaW5nISwgJHRpdGxlOiBTdHJpbmchLFxuICAgICRyZXA6IFN0cmluZyEsICRzZW5kOiBCb29sZWFuISwgJHBsYXRmb3JtOiBTdHJpbmchLFxuICAgICRzdGF0ZTogU3RyaW5nISwgJHJhZGl1czogRmxvYXQhLCAkdXNlcjogU3RyaW5nISxcbiAgICAkcHJvdmlkZXI6IFN0cmluZyEsICRtZXNzYWdlOiBTdHJpbmchLCAkYXBpX2tleTogU3RyaW5nIVxuICApIHtcbiAgICBzZWxlY3RfcHVzaChcbiAgICAgIGxvZ2dlZF9pbl91c2VyOiAkbG9nZ2VkX2luX3VzZXIsIHppcDogJHppcCwgdGl0bGU6ICR0aXRsZSxcbiAgICAgIHJlcDogJHJlcCwgc2VuZDogJHNlbmQsIHBsYXRmb3JtOiAkcGxhdGZvcm0sIHN0YXRlOiAkc3RhdGUsXG4gICAgICByYWRpdXM6ICRyYWRpdXMsIHVzZXI6ICR1c2VyLCBwcm92aWRlcjogJHByb3ZpZGVyLFxuICAgICAgbWVzc2FnZTogJG1lc3NhZ2UsIGFwaV9rZXk6ICRhcGlfa2V5XG4gICAgKSB7XG4gICAgICByZXNwb25zZV9zdGF0dXMsXG4gICAgICB1c2Vyc1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHNlbGVjdFB1c2gsIHtcbiAgcHJvcHM6ICh7IG11dGF0ZSB9KSA9PiAoe1xuICAgIHNlbGVjdFB1c2g6IChsb2dnZWRfaW5fdXNlciwgemlwLCB0aXRsZSwgcmVwLCBzZW5kLCBwbGF0Zm9ybSwgc3RhdGUsIHJhZGl1cywgdXNlciwgcHJvdmlkZXIsIG1lc3NhZ2UsIGFwaV9rZXkpID0+XG4gICAgICBtdXRhdGUoe1xuICAgICAgICB2YXJpYWJsZXM6IHsgbG9nZ2VkX2luX3VzZXIsIHppcCwgdGl0bGUsIHJlcCwgc2VuZCwgcGxhdGZvcm0sIHN0YXRlLCByYWRpdXMsIHVzZXIsIHByb3ZpZGVyLCBtZXNzYWdlLCBhcGlfa2V5IH0sXG5cbiAgICAgIH0pXG4gIH0pXG59KShTZW5kTm90aWZpY2F0aW9uKVxuIl19 */\n/*@ sourceURL=components/SendNotification.js */"
  }));
}

var selectPush = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(selectPush, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      selectPush: function selectPush(logged_in_user, zip, title, rep, send, platform, state, radius, user, provider, message, api_key) {
        return mutate({
          variables: {
            logged_in_user: logged_in_user,
            zip: zip,
            title: title,
            rep: rep,
            send: send,
            platform: platform,
            state: state,
            radius: radius,
            user: user,
            provider: provider,
            message: message,
            api_key: api_key
          }
        });
      }
    };
  }
})(SendNotification));

/***/ }),

/***/ "./pages/partners.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MainLayout_js__ = __webpack_require__("./components/MainLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_SendNotification_js__ = __webpack_require__("./components/SendNotification.js");
var _jsxFileName = "/Users/marvin/Projects/CompThree/act_today_partners/pages/partners.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MainLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_SendNotification_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "This is the Partner page"));
});

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/partners.js");


/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=partners.js.map