webpackHotUpdate(4,{

/***/ "./components/SendNotification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
var _jsxFileName = "/Users/marvin/Projects/CompThree/act_today_partners/components/SendNotification.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  mutation select_push(\n    $logged_in_user: String!, $zip: String!, $title: String!,\n    $rep: String!, $send: Boolean!, $platform: String!,\n    $state: String!, $radius: Float!, $user: String!,\n    $provider: String!, $message: String!, $api_key: String!\n  ) {\n    select_push(title: $title, url: $url) {\n\n    }\n  }\n"]);




function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function SendNotification(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new window.FormData(form);
    createPost(formData.get('title'), formData.get('url'));
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
  }, "Submit"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
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
  }, "Submit"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4286934451",
    css: "form.jsx-4286934451{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-4286934451{font-size:20px;}input.jsx-4286934451{display:block;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VuZE5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmtCLEFBRzJDLEFBS2pCLEFBR0QsY0FDSyxDQUhyQixpQkFMc0IsQ0FTdEIsbUJBUnFCLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL1NlbmROb3RpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnZpbi9Qcm9qZWN0cy9Db21wVGhyZWUvYWN0X3RvZGF5X3BhcnRuZXJzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5cbmZ1bmN0aW9uIFNlbmROb3RpZmljYXRpb24gKHsgY3JlYXRlUG9zdCB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyB3aW5kb3cuRm9ybURhdGEoZm9ybSlcbiAgICBjcmVhdGVQb3N0KGZvcm1EYXRhLmdldCgndGl0bGUnKSwgZm9ybURhdGEuZ2V0KCd1cmwnKSlcblxuICAgIGZvcm0ucmVzZXQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMT5TdWJtaXQ8L2gxPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd0aXRsZScgbmFtZT0ndGl0bGUnIHR5cGU9J3RleHQnIHJlcXVpcmVkIC8+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J21lc3NhZ2UnIG5hbWU9J21lc3NhZ2UnIHR5cGU9J3RleHQnIHJlcXVpcmVkIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBzZWxlY3RQdXNoID0gZ3FsYFxuICBtdXRhdGlvbiBzZWxlY3RfcHVzaChcbiAgICAkbG9nZ2VkX2luX3VzZXI6IFN0cmluZyEsICR6aXA6IFN0cmluZyEsICR0aXRsZTogU3RyaW5nISxcbiAgICAkcmVwOiBTdHJpbmchLCAkc2VuZDogQm9vbGVhbiEsICRwbGF0Zm9ybTogU3RyaW5nISxcbiAgICAkc3RhdGU6IFN0cmluZyEsICRyYWRpdXM6IEZsb2F0ISwgJHVzZXI6IFN0cmluZyEsXG4gICAgJHByb3ZpZGVyOiBTdHJpbmchLCAkbWVzc2FnZTogU3RyaW5nISwgJGFwaV9rZXk6IFN0cmluZyFcbiAgKSB7XG4gICAgc2VsZWN0X3B1c2godGl0bGU6ICR0aXRsZSwgdXJsOiAkdXJsKSB7XG5cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChzZWxlY3RQdXNoLCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBzZWxlY3RQdXNoOiAodGl0bGUsIHVybCkgPT5cbiAgICAgIG11dGF0ZSh7XG4gICAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgICAgIHVwZGF0ZTogKHByb3h5LCB7IGRhdGE6IHsgY3JlYXRlUG9zdCB9IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gcHJveHkucmVhZFF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBhbGxQb3N0cyxcbiAgICAgICAgICAgIHZhcmlhYmxlczogYWxsUG9zdHNRdWVyeVZhcnNcbiAgICAgICAgICB9KVxuICAgICAgICAgIHByb3h5LndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGFsbFBvc3RzLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICBhbGxQb3N0czogW2NyZWF0ZVBvc3QsIC4uLmRhdGEuYWxsUG9zdHNdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyaWFibGVzOiBhbGxQb3N0c1F1ZXJ5VmFyc1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG59KShTZW5kTm90aWZpY2F0aW9uKVxuIl19 */\n/*@ sourceURL=components/SendNotification.js */"
  }));
}

var selectPush = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(selectPush, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      selectPush: function selectPush(title, url) {
        return mutate({
          variables: {
            title: title,
            url: url
          },
          update: function update(proxy, _ref3) {
            var createPost = _ref3.data.createPost;
            var data = proxy.readQuery({
              query: allPosts,
              variables: allPostsQueryVars
            });
            proxy.writeQuery({
              query: allPosts,
              data: _objectSpread({}, data, {
                allPosts: [createPost].concat(_toConsumableArray(data.allPosts))
              }),
              variables: allPostsQueryVars
            });
          }
        });
      }
    };
  }
})(SendNotification));

/***/ })

})
//# sourceMappingURL=4.d8fc3cb502b6bd72efce.hot-update.js.map