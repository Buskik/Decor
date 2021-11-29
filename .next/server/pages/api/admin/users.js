"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/admin/users";
exports.ids = ["pages/api/admin/users"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  isAdmin: {\n    type: Boolean,\n    required: true,\n    default: false\n  }\n}, {\n  timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJRCx3REFBSixDQUNqQjtBQUNFRyxFQUFBQSxJQUFJLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCQyxJQUFBQSxRQUFRLEVBQUU7QUFBMUIsR0FEUjtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFBRUgsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCQyxJQUFBQSxRQUFRLEVBQUUsSUFBMUI7QUFBZ0NFLElBQUFBLE1BQU0sRUFBRTtBQUF4QyxHQUZUO0FBR0VDLEVBQUFBLFFBQVEsRUFBRTtBQUFFTCxJQUFBQSxJQUFJLEVBQUVDLE1BQVI7QUFBZ0JDLElBQUFBLFFBQVEsRUFBRTtBQUExQixHQUhaO0FBSUVJLEVBQUFBLE9BQU8sRUFBRTtBQUFFTixJQUFBQSxJQUFJLEVBQUVPLE9BQVI7QUFBaUJMLElBQUFBLFFBQVEsRUFBRSxJQUEzQjtBQUFpQ00sSUFBQUEsT0FBTyxFQUFFO0FBQTFDO0FBSlgsQ0FEaUIsRUFPakI7QUFDRUMsRUFBQUEsVUFBVSxFQUFFO0FBRGQsQ0FQaUIsQ0FBbkI7QUFZQSxNQUFNQyxJQUFJLEdBQUdkLDZEQUFBLElBQXdCQSxxREFBQSxDQUFlLE1BQWYsRUFBdUJDLFVBQXZCLENBQXJDO0FBQ0EsaUVBQWVhLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICAgIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGlzQWRtaW46IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpc0FkbWluIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/User.js\n");

/***/ }),

/***/ "./pages/api/admin/users/index.js":
/*!****************************************!*\
  !*** ./pages/api/admin/users/index.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/auth */ \"./utils/auth.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/User */ \"./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/db */ \"./utils/db.js?d819\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAuth, _utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAdmin);\nhandler.get(async (req, res) => {\n  await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n  const users = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({});\n  await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n  res.send(users);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYWRtaW4vdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1LLE9BQU8sR0FBR0wsd0RBQUUsRUFBbEI7QUFDQUssT0FBTyxDQUFDQyxHQUFSLENBQVlKLCtDQUFaLEVBQW9CRCxnREFBcEI7QUFFQUksT0FBTyxDQUFDRSxHQUFSLENBQVksT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzlCLFFBQU1MLHlEQUFBLEVBQU47QUFDQSxRQUFNTyxLQUFLLEdBQUcsTUFBTVIseURBQUEsQ0FBVSxFQUFWLENBQXBCO0FBQ0EsUUFBTUMsNERBQUEsRUFBTjtBQUNBSyxFQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU0gsS0FBVDtBQUNELENBTEQ7QUFPQSxpRUFBZU4sT0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kZWNvci8uL3BhZ2VzL2FwaS9hZG1pbi91c2Vycy9pbmRleC5qcz8yNTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgeyBpc0FkbWluLCBpc0F1dGggfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hdXRoJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL1VzZXInO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZGInO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5jKCk7XHJcbmhhbmRsZXIudXNlKGlzQXV0aCwgaXNBZG1pbik7XHJcblxyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmQoe30pO1xyXG4gIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICByZXMuc2VuZCh1c2Vycyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIm5jIiwiaXNBZG1pbiIsImlzQXV0aCIsIlVzZXIiLCJkYiIsImhhbmRsZXIiLCJ1c2UiLCJnZXQiLCJyZXEiLCJyZXMiLCJjb25uZWN0IiwidXNlcnMiLCJmaW5kIiwiZGlzY29ubmVjdCIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/admin/users/index.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken),\n/* harmony export */   \"isAuth\": () => (/* binding */ isAuth),\n/* harmony export */   \"isAdmin\": () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst signToken = user => {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n    _id: user._id,\n    name: user.name,\n    email: user.email,\n    isAdmin: user.isAdmin\n  }, process.env.JWT_SECRET, {\n    expiresIn: '30d'\n  });\n};\n\nconst isAuth = async (req, res, next) => {\n  const {\n    authorization\n  } = req.headers;\n\n  if (authorization) {\n    const token = authorization.slice(7, authorization.length);\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode) => {\n      if (err) {\n        res.status(401).send({\n          message: 'O token não é válido '\n        });\n      } else {\n        req.user = decode;\n        next();\n      }\n    });\n  } else {\n    res.status(401).send({\n      message: 'O token não foi fornecido'\n    });\n  }\n};\n\nconst isAdmin = async (req, res, next) => {\n  if (req.user.isAdmin) {\n    next();\n  } else {\n    res.status(401).send({\n      message: 'User is not admin'\n    });\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsU0FBUyxHQUFJQyxJQUFELElBQVU7QUFDMUIsU0FBT0Ysd0RBQUEsQ0FDTDtBQUNFSSxJQUFBQSxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FEWjtBQUVFQyxJQUFBQSxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFGYjtBQUdFQyxJQUFBQSxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FIZDtBQUlFQyxJQUFBQSxPQUFPLEVBQUVMLElBQUksQ0FBQ0s7QUFKaEIsR0FESyxFQVFMQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFSUCxFQVNMO0FBQ0VDLElBQUFBLFNBQVMsRUFBRTtBQURiLEdBVEssQ0FBUDtBQWFELENBZEQ7O0FBZUEsTUFBTUMsTUFBTSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDdkMsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQW9CSCxHQUFHLENBQUNJLE9BQTlCOztBQUNBLE1BQUlELGFBQUosRUFBbUI7QUFDakIsVUFBTUUsS0FBSyxHQUFHRixhQUFhLENBQUNHLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJILGFBQWEsQ0FBQ0ksTUFBckMsQ0FBZDtBQUNBcEIsSUFBQUEsMERBQUEsQ0FBV2tCLEtBQVgsRUFBa0JWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE5QixFQUEwQyxDQUFDWSxHQUFELEVBQU1DLE1BQU4sS0FBaUI7QUFDekQsVUFBSUQsR0FBSixFQUFTO0FBQ1BSLFFBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xiLFFBQUFBLEdBQUcsQ0FBQ1gsSUFBSixHQUFXcUIsTUFBWDtBQUNBUixRQUFBQSxJQUFJO0FBQ0w7QUFDRixLQVBEO0FBUUQsR0FWRCxNQVVPO0FBQ0xELElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0Q7QUFDRixDQWZEOztBQWdCQSxNQUFNbkIsT0FBTyxHQUFHLE9BQU9NLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDeEMsTUFBSUYsR0FBRyxDQUFDWCxJQUFKLENBQVNLLE9BQWIsRUFBc0I7QUFDcEJRLElBQUFBLElBQUk7QUFDTCxHQUZELE1BRU87QUFDTEQsSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckI7QUFDRDtBQUNGLENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vdXRpbHMvYXV0aC5qcz9lYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG5cclxuICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzMwZCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuY29uc3QgaXNBdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcclxuICBpZiAoYXV0aG9yaXphdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNsaWNlKDcsIGF1dGhvcml6YXRpb24ubGVuZ3RoKTtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIChlcnIsIGRlY29kZSkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnTyB0b2tlbiBuw6NvIMOpIHbDoWxpZG8gJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXEudXNlciA9IGRlY29kZTtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdPIHRva2VuIG7Do28gZm9pIGZvcm5lY2lkbycgfSk7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBpc0FkbWluID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgaWYgKHJlcS51c2VyLmlzQWRtaW4pIHtcclxuICAgIG5leHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVXNlciBpcyBub3QgYWRtaW4nIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHNpZ25Ub2tlbiwgaXNBdXRoLCBpc0FkbWluIH07XHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJzaWduVG9rZW4iLCJ1c2VyIiwic2lnbiIsIl9pZCIsIm5hbWUiLCJlbWFpbCIsImlzQWRtaW4iLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsImlzQXV0aCIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInRva2VuIiwic2xpY2UiLCJsZW5ndGgiLCJ2ZXJpZnkiLCJlcnIiLCJkZWNvZGUiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "./utils/db.js?d819":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function connect() {\n  if (connection.isConnected) {\n    console.log('already connected');\n    return;\n  }\n\n  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n    connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n\n    if (connection.isConnected === 1) {\n      console.log('use previous connection');\n      return;\n    }\n\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n  console.log('new connection');\n  connection.isConnected = db.connections[0].readyState;\n}\n\nasync function disconnect() {\n  if (connection.isConnected) {\n    if (false) {} else {\n      console.log('not disconnected');\n    }\n  }\n}\n\nfunction convertDocToObj(doc) {\n  doc._id = doc._id.toString();\n  doc.createdAt = doc.createdAt.toString();\n  doc.updatedAt = doc.updatedAt.toString();\n  return doc;\n}\n\nconst db = {\n  connect,\n  disconnect,\n  convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYi5qcz9kODE5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsVUFBVSxHQUFHLEVBQW5COztBQUVBLGVBQWVDLE9BQWYsR0FBeUI7QUFDdkIsTUFBSUQsVUFBVSxDQUFDRSxXQUFmLEVBQTRCO0FBQzFCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBO0FBQ0Q7O0FBQ0QsTUFBSUwsb0VBQUEsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDbkNDLElBQUFBLFVBQVUsQ0FBQ0UsV0FBWCxHQUF5QkgsMkVBQXpCOztBQUNBLFFBQUlDLFVBQVUsQ0FBQ0UsV0FBWCxLQUEyQixDQUEvQixFQUFrQztBQUNoQ0MsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQTtBQUNEOztBQUNELFVBQU1MLDBEQUFBLEVBQU47QUFDRDs7QUFDRCxRQUFNVSxFQUFFLEdBQUcsTUFBTVYsdURBQUEsQ0FBaUJXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUE3QixDQUFqQjtBQUNBVCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBSixFQUFBQSxVQUFVLENBQUNFLFdBQVgsR0FBeUJPLEVBQUUsQ0FBQ0osV0FBSCxDQUFlLENBQWYsRUFBa0JFLFVBQTNDO0FBQ0Q7O0FBQ0QsZUFBZUMsVUFBZixHQUE0QjtBQUMxQixNQUFJUixVQUFVLENBQUNFLFdBQWYsRUFBNEI7QUFDMUIsZUFBMkMsRUFBM0MsTUFHTztBQUNMQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTUyxlQUFULENBQXlCQyxHQUF6QixFQUE4QjtBQUM1QkEsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLEdBQVVELEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxRQUFSLEVBQVY7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRyxTQUFKLEdBQWdCSCxHQUFHLENBQUNHLFNBQUosQ0FBY0QsUUFBZCxFQUFoQjtBQUNBRixFQUFBQSxHQUFHLENBQUNJLFNBQUosR0FBZ0JKLEdBQUcsQ0FBQ0ksU0FBSixDQUFjRixRQUFkLEVBQWhCO0FBQ0EsU0FBT0YsR0FBUDtBQUNEOztBQUVELE1BQU1MLEVBQUUsR0FBRztBQUFFUixFQUFBQSxPQUFGO0FBQVdPLEVBQUFBLFVBQVg7QUFBdUJLLEVBQUFBO0FBQXZCLENBQVg7QUFDQSxpRUFBZUosRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZGVjb3IvLi91dGlscy9kYi5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzZSBwcmV2aW91cyBjb25uZWN0aW9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuICBjb25zb2xlLmxvZygnbmV3IGNvbm5lY3Rpb24nKTtcclxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgZGlzY29ubmVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsImxlbmd0aCIsInJlYWR5U3RhdGUiLCJkaXNjb25uZWN0IiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb252ZXJ0RG9jVG9PYmoiLCJkb2MiLCJfaWQiLCJ0b1N0cmluZyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/db.js?d819\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/users/index.js"));
module.exports = __webpack_exports__;

})();