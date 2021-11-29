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
exports.id = "pages/api/admin/upload";
exports.ids = ["pages/api/admin/upload"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "streamifier":
/*!******************************!*\
  !*** external "streamifier" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("streamifier");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "./pages/api/admin/upload.js":
/*!***********************************!*\
  !*** ./pages/api/admin/upload.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/auth */ \"./utils/auth.js\");\n/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/error */ \"./utils/error.js\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var streamifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! streamifier */ \"streamifier\");\n/* harmony import */ var streamifier__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(streamifier__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\ncloudinary__WEBPACK_IMPORTED_MODULE_4__.v2.config({\n  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n  api_key: process.env.CLOUDINARY_API_KEY,\n  api_secret: process.env.CLOUDINARY_API_SECRET\n});\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  onError: _utils_error__WEBPACK_IMPORTED_MODULE_2__.onError\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_3___default()();\nhandler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAuth, _utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAdmin, upload.single('file')).post(async (req, res) => {\n  const streamUpload = req => {\n    return new Promise((resolve, reject) => {\n      const stream = cloudinary__WEBPACK_IMPORTED_MODULE_4__.v2.uploader.upload_stream((error, result) => {\n        if (result) {\n          resolve(result);\n        } else {\n          reject(error);\n        }\n      });\n      streamifier__WEBPACK_IMPORTED_MODULE_5___default().createReadStream(req.file.buffer).pipe(stream);\n    });\n  };\n\n  const result = await streamUpload(req);\n  res.send(result);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYWRtaW4vdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFNLGlEQUFBLENBQWtCO0FBQ2hCRyxFQUFBQSxVQUFVLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFEUjtBQUVoQkMsRUFBQUEsT0FBTyxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsa0JBRkw7QUFHaEJDLEVBQUFBLFVBQVUsRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLO0FBSFIsQ0FBbEI7QUFNTyxNQUFNUixNQUFNLEdBQUc7QUFDcEJTLEVBQUFBLEdBQUcsRUFBRTtBQUNIQyxJQUFBQSxVQUFVLEVBQUU7QUFEVDtBQURlLENBQWY7QUFNUCxNQUFNQyxPQUFPLEdBQUduQix3REFBVyxDQUFDO0FBQUVHLEVBQUFBLE9BQU9BLG1EQUFBQTtBQUFULENBQUQsQ0FBM0I7QUFDQSxNQUFNaUIsTUFBTSxHQUFHaEIsNkNBQU0sRUFBckI7QUFFQWUsT0FBTyxDQUFDRSxHQUFSLENBQVlwQiwrQ0FBWixFQUFvQkMsZ0RBQXBCLEVBQTZCa0IsTUFBTSxDQUFDRSxNQUFQLENBQWMsTUFBZCxDQUE3QixFQUFvREMsSUFBcEQsQ0FBeUQsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzNFLFFBQU1DLFlBQVksR0FBSUYsR0FBRCxJQUFTO0FBQzVCLFdBQU8sSUFBSUcsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0QyxZQUFNQyxNQUFNLEdBQUd4QixpRUFBQSxDQUFrQyxDQUFDMkIsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2xFLFlBQUlBLE1BQUosRUFBWTtBQUNWTixVQUFBQSxPQUFPLENBQUNNLE1BQUQsQ0FBUDtBQUNELFNBRkQsTUFFTztBQUNMTCxVQUFBQSxNQUFNLENBQUNJLEtBQUQsQ0FBTjtBQUNEO0FBQ0YsT0FOYyxDQUFmO0FBT0ExQixNQUFBQSxtRUFBQSxDQUE2QmlCLEdBQUcsQ0FBQ1ksSUFBSixDQUFTQyxNQUF0QyxFQUE4Q0MsSUFBOUMsQ0FBbURSLE1BQW5EO0FBQ0QsS0FUTSxDQUFQO0FBVUQsR0FYRDs7QUFZQSxRQUFNSSxNQUFNLEdBQUcsTUFBTVIsWUFBWSxDQUFDRixHQUFELENBQWpDO0FBQ0FDLEVBQUFBLEdBQUcsQ0FBQ2MsSUFBSixDQUFTTCxNQUFUO0FBQ0QsQ0FmRDtBQWlCQSxpRUFBZWYsT0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kZWNvci8uL3BhZ2VzL2FwaS9hZG1pbi91cGxvYWQuanM/ZGJlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IHsgaXNBdXRoLCBpc0FkbWluIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXV0aCc7XHJcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9lcnJvcic7XHJcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJztcclxuaW1wb3J0IHsgdjIgYXMgY2xvdWRpbmFyeSB9IGZyb20gJ2Nsb3VkaW5hcnknO1xyXG5pbXBvcnQgc3RyZWFtaWZpZXIgZnJvbSAnc3RyZWFtaWZpZXInO1xyXG5cclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQ0xPVURfTkFNRSxcclxuICBhcGlfa2V5OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9LRVksXHJcbiAgYXBpX3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfU0VDUkVULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KHsgb25FcnJvciB9KTtcclxuY29uc3QgdXBsb2FkID0gbXVsdGVyKCk7XHJcblxyXG5oYW5kbGVyLnVzZShpc0F1dGgsIGlzQWRtaW4sIHVwbG9hZC5zaW5nbGUoJ2ZpbGUnKSkucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBzdHJlYW1VcGxvYWQgPSAocmVxKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBzdHJlYW0gPSBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZF9zdHJlYW0oKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc3RyZWFtaWZpZXIuY3JlYXRlUmVhZFN0cmVhbShyZXEuZmlsZS5idWZmZXIpLnBpcGUoc3RyZWFtKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RyZWFtVXBsb2FkKHJlcSk7XHJcbiAgcmVzLnNlbmQocmVzdWx0KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsibmV4dENvbm5lY3QiLCJpc0F1dGgiLCJpc0FkbWluIiwib25FcnJvciIsIm11bHRlciIsInYyIiwiY2xvdWRpbmFyeSIsInN0cmVhbWlmaWVyIiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX0NMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURJTkFSWV9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwidXBsb2FkIiwidXNlIiwic2luZ2xlIiwicG9zdCIsInJlcSIsInJlcyIsInN0cmVhbVVwbG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RyZWFtIiwidXBsb2FkZXIiLCJ1cGxvYWRfc3RyZWFtIiwiZXJyb3IiLCJyZXN1bHQiLCJjcmVhdGVSZWFkU3RyZWFtIiwiZmlsZSIsImJ1ZmZlciIsInBpcGUiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/admin/upload.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken),\n/* harmony export */   \"isAuth\": () => (/* binding */ isAuth),\n/* harmony export */   \"isAdmin\": () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst signToken = user => {\n  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n    _id: user._id,\n    name: user.name,\n    email: user.email,\n    isAdmin: user.isAdmin\n  }, process.env.JWT_SECRET, {\n    expiresIn: '30d'\n  });\n};\n\nconst isAuth = async (req, res, next) => {\n  const {\n    authorization\n  } = req.headers;\n\n  if (authorization) {\n    const token = authorization.slice(7, authorization.length);\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode) => {\n      if (err) {\n        res.status(401).send({\n          message: 'O token não é válido '\n        });\n      } else {\n        req.user = decode;\n        next();\n      }\n    });\n  } else {\n    res.status(401).send({\n      message: 'O token não foi fornecido'\n    });\n  }\n};\n\nconst isAdmin = async (req, res, next) => {\n  if (req.user.isAdmin) {\n    next();\n  } else {\n    res.status(401).send({\n      message: 'User is not admin'\n    });\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsU0FBUyxHQUFJQyxJQUFELElBQVU7QUFDMUIsU0FBT0Ysd0RBQUEsQ0FDTDtBQUNFSSxJQUFBQSxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FEWjtBQUVFQyxJQUFBQSxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFGYjtBQUdFQyxJQUFBQSxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FIZDtBQUlFQyxJQUFBQSxPQUFPLEVBQUVMLElBQUksQ0FBQ0s7QUFKaEIsR0FESyxFQVFMQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFSUCxFQVNMO0FBQ0VDLElBQUFBLFNBQVMsRUFBRTtBQURiLEdBVEssQ0FBUDtBQWFELENBZEQ7O0FBZUEsTUFBTUMsTUFBTSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDdkMsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQW9CSCxHQUFHLENBQUNJLE9BQTlCOztBQUNBLE1BQUlELGFBQUosRUFBbUI7QUFDakIsVUFBTUUsS0FBSyxHQUFHRixhQUFhLENBQUNHLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJILGFBQWEsQ0FBQ0ksTUFBckMsQ0FBZDtBQUNBcEIsSUFBQUEsMERBQUEsQ0FBV2tCLEtBQVgsRUFBa0JWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE5QixFQUEwQyxDQUFDWSxHQUFELEVBQU1DLE1BQU4sS0FBaUI7QUFDekQsVUFBSUQsR0FBSixFQUFTO0FBQ1BSLFFBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xiLFFBQUFBLEdBQUcsQ0FBQ1gsSUFBSixHQUFXcUIsTUFBWDtBQUNBUixRQUFBQSxJQUFJO0FBQ0w7QUFDRixLQVBEO0FBUUQsR0FWRCxNQVVPO0FBQ0xELElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0Q7QUFDRixDQWZEOztBQWdCQSxNQUFNbkIsT0FBTyxHQUFHLE9BQU9NLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDeEMsTUFBSUYsR0FBRyxDQUFDWCxJQUFKLENBQVNLLE9BQWIsRUFBc0I7QUFDcEJRLElBQUFBLElBQUk7QUFDTCxHQUZELE1BRU87QUFDTEQsSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckI7QUFDRDtBQUNGLENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vdXRpbHMvYXV0aC5qcz9lYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG5cclxuICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzMwZCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuY29uc3QgaXNBdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcclxuICBpZiAoYXV0aG9yaXphdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNsaWNlKDcsIGF1dGhvcml6YXRpb24ubGVuZ3RoKTtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIChlcnIsIGRlY29kZSkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnTyB0b2tlbiBuw6NvIMOpIHbDoWxpZG8gJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXEudXNlciA9IGRlY29kZTtcclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdPIHRva2VuIG7Do28gZm9pIGZvcm5lY2lkbycgfSk7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBpc0FkbWluID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgaWYgKHJlcS51c2VyLmlzQWRtaW4pIHtcclxuICAgIG5leHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVXNlciBpcyBub3QgYWRtaW4nIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHNpZ25Ub2tlbiwgaXNBdXRoLCBpc0FkbWluIH07XHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJzaWduVG9rZW4iLCJ1c2VyIiwic2lnbiIsIl9pZCIsIm5hbWUiLCJlbWFpbCIsImlzQWRtaW4iLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsImlzQXV0aCIsInJlcSIsInJlcyIsIm5leHQiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInRva2VuIiwic2xpY2UiLCJsZW5ndGgiLCJ2ZXJpZnkiLCJlcnIiLCJkZWNvZGUiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function connect() {\n  if (connection.isConnected) {\n    console.log('already connected');\n    return;\n  }\n\n  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n    connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n\n    if (connection.isConnected === 1) {\n      console.log('use previous connection');\n      return;\n    }\n\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n  console.log('new connection');\n  connection.isConnected = db.connections[0].readyState;\n}\n\nasync function disconnect() {\n  if (connection.isConnected) {\n    if (false) {} else {\n      console.log('not disconnected');\n    }\n  }\n}\n\nfunction convertDocToObj(doc) {\n  doc._id = doc._id.toString();\n  doc.createdAt = doc.createdAt.toString();\n  doc.updatedAt = doc.updatedAt.toString();\n  return doc;\n}\n\nconst db = {\n  connect,\n  disconnect,\n  convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlQyxPQUFmLEdBQXlCO0FBQ3ZCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUMxQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQTtBQUNEOztBQUNELE1BQUlMLG9FQUFBLEdBQThCLENBQWxDLEVBQXFDO0FBQ25DQyxJQUFBQSxVQUFVLENBQUNFLFdBQVgsR0FBeUJILDJFQUF6Qjs7QUFDQSxRQUFJQyxVQUFVLENBQUNFLFdBQVgsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDaENDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0E7QUFDRDs7QUFDRCxVQUFNTCwwREFBQSxFQUFOO0FBQ0Q7O0FBQ0QsUUFBTVUsRUFBRSxHQUFHLE1BQU1WLHVEQUFBLENBQWlCVyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBN0IsQ0FBakI7QUFDQVQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQUosRUFBQUEsVUFBVSxDQUFDRSxXQUFYLEdBQXlCTyxFQUFFLENBQUNKLFdBQUgsQ0FBZSxDQUFmLEVBQWtCRSxVQUEzQztBQUNEOztBQUNELGVBQWVDLFVBQWYsR0FBNEI7QUFDMUIsTUFBSVIsVUFBVSxDQUFDRSxXQUFmLEVBQTRCO0FBQzFCLGVBQTJDLEVBQTNDLE1BR087QUFDTEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBU1MsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUJBLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixHQUFVRCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsUUFBUixFQUFWO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0csU0FBSixHQUFnQkgsR0FBRyxDQUFDRyxTQUFKLENBQWNELFFBQWQsRUFBaEI7QUFDQUYsRUFBQUEsR0FBRyxDQUFDSSxTQUFKLEdBQWdCSixHQUFHLENBQUNJLFNBQUosQ0FBY0YsUUFBZCxFQUFoQjtBQUNBLFNBQU9GLEdBQVA7QUFDRDs7QUFFRCxNQUFNTCxFQUFFLEdBQUc7QUFBRVIsRUFBQUEsT0FBRjtBQUFXTyxFQUFBQSxVQUFYO0FBQXVCSyxFQUFBQTtBQUF2QixDQUFYO0FBQ0EsaUVBQWVKLEVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FscmVhZHkgY29ubmVjdGVkJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkID09PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2UgcHJldmlvdXMgY29ubmVjdGlvbicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XHJcbiAgY29uc29sZS5sb2coJ25ldyBjb25uZWN0aW9uJyk7XHJcbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGRpc2Nvbm5lY3RlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydERvY1RvT2JqKGRvYykge1xyXG4gIGRvYy5faWQgPSBkb2MuX2lkLnRvU3RyaW5nKCk7XHJcbiAgZG9jLmNyZWF0ZWRBdCA9IGRvYy5jcmVhdGVkQXQudG9TdHJpbmcoKTtcclxuICBkb2MudXBkYXRlZEF0ID0gZG9jLnVwZGF0ZWRBdC50b1N0cmluZygpO1xyXG4gIHJldHVybiBkb2M7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0geyBjb25uZWN0LCBkaXNjb25uZWN0LCBjb252ZXJ0RG9jVG9PYmogfTtcclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbnMiLCJsZW5ndGgiLCJyZWFkeVN0YXRlIiwiZGlzY29ubmVjdCIsImRiIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29udmVydERvY1RvT2JqIiwiZG9jIiwiX2lkIiwidG9TdHJpbmciLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/db.js\n");

/***/ }),

/***/ "./utils/error.js":
/*!************************!*\
  !*** ./utils/error.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getError\": () => (/* binding */ getError),\n/* harmony export */   \"onError\": () => (/* binding */ onError)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./utils/db.js\");\n\n\nconst getError = err => err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message;\n\nconst onError = async (err, req, res) => {\n  await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].disconnect();\n  res.status(500).send({\n    message: err.toString()\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxRQUFRLEdBQUlDLEdBQUQsSUFDZkEsR0FBRyxDQUFDQyxRQUFKLElBQWdCRCxHQUFHLENBQUNDLFFBQUosQ0FBYUMsSUFBN0IsSUFBcUNGLEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxJQUFiLENBQWtCQyxPQUF2RCxHQUNJSCxHQUFHLENBQUNDLFFBQUosQ0FBYUMsSUFBYixDQUFrQkMsT0FEdEIsR0FFSUgsR0FBRyxDQUFDRyxPQUhWOztBQUtBLE1BQU1DLE9BQU8sR0FBRyxPQUFPSixHQUFQLEVBQVlLLEdBQVosRUFBaUJDLEdBQWpCLEtBQXlCO0FBQ3ZDLFFBQU1SLHNEQUFBLEVBQU47QUFDQVEsRUFBQUEsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRU4sSUFBQUEsT0FBTyxFQUFFSCxHQUFHLENBQUNVLFFBQUo7QUFBWCxHQUFyQjtBQUNELENBSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vdXRpbHMvZXJyb3IuanM/OTIzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XHJcblxyXG5jb25zdCBnZXRFcnJvciA9IChlcnIpID0+XHJcbiAgZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5kYXRhICYmIGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgID8gZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgOiBlcnIubWVzc2FnZTtcclxuXHJcbmNvbnN0IG9uRXJyb3IgPSBhc3luYyAoZXJyLCByZXEsIHJlcykgPT4ge1xyXG4gIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci50b1N0cmluZygpIH0pO1xyXG59O1xyXG5leHBvcnQgeyBnZXRFcnJvciwgb25FcnJvciB9O1xyXG4iXSwibmFtZXMiOlsiZGIiLCJnZXRFcnJvciIsImVyciIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJvbkVycm9yIiwicmVxIiwicmVzIiwiZGlzY29ubmVjdCIsInN0YXR1cyIsInNlbmQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/error.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/upload.js"));
module.exports = __webpack_exports__;

})();