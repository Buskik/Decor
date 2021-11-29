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
exports.id = "pages/api/products/[id]/reviews";
exports.ids = ["pages/api/products/[id]/reviews"];
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

/***/ "./models/Product.js?7fcf":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst reviewSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  user: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: 'User',\n    required: true\n  },\n  name: {\n    type: String,\n    required: true\n  },\n  rating: {\n    type: Number,\n    default: 0\n  },\n  comment: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    required: true\n  },\n  slug: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  category: {\n    type: String,\n    required: true\n  },\n  image: {\n    type: String,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  brand: {\n    type: String,\n    required: true\n  },\n  rating: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  numReviews: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  countInStock: {\n    type: Number,\n    required: true,\n    default: 0\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  reviews: [reviewSchema]\n}, {\n  timestamps: true\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Product', productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvUHJvZHVjdC5qcz83ZmNmLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsWUFBWSxHQUFHLElBQUlELHdEQUFKLENBQ25CO0FBQ0VHLEVBQUFBLElBQUksRUFBRTtBQUFFQyxJQUFBQSxJQUFJLEVBQUVKLHVFQUFSO0FBQXdDTyxJQUFBQSxHQUFHLEVBQUUsTUFBN0M7QUFBcURDLElBQUFBLFFBQVEsRUFBRTtBQUEvRCxHQURSO0FBRUVDLEVBQUFBLElBQUksRUFBRTtBQUFFTCxJQUFBQSxJQUFJLEVBQUVNLE1BQVI7QUFBZ0JGLElBQUFBLFFBQVEsRUFBRTtBQUExQixHQUZSO0FBR0VHLEVBQUFBLE1BQU0sRUFBRTtBQUFFUCxJQUFBQSxJQUFJLEVBQUVRLE1BQVI7QUFBZ0JDLElBQUFBLE9BQU8sRUFBRTtBQUF6QixHQUhWO0FBSUVDLEVBQUFBLE9BQU8sRUFBRTtBQUFFVixJQUFBQSxJQUFJLEVBQUVNLE1BQVI7QUFBZ0JGLElBQUFBLFFBQVEsRUFBRTtBQUExQjtBQUpYLENBRG1CLEVBT25CO0FBQ0VPLEVBQUFBLFVBQVUsRUFBRTtBQURkLENBUG1CLENBQXJCO0FBV0EsTUFBTUMsYUFBYSxHQUFHLElBQUloQix3REFBSixDQUNwQjtBQUNFUyxFQUFBQSxJQUFJLEVBQUU7QUFBRUwsSUFBQUEsSUFBSSxFQUFFTSxNQUFSO0FBQWdCRixJQUFBQSxRQUFRLEVBQUU7QUFBMUIsR0FEUjtBQUVFUyxFQUFBQSxJQUFJLEVBQUU7QUFBRWIsSUFBQUEsSUFBSSxFQUFFTSxNQUFSO0FBQWdCRixJQUFBQSxRQUFRLEVBQUUsSUFBMUI7QUFBZ0NVLElBQUFBLE1BQU0sRUFBRTtBQUF4QyxHQUZSO0FBR0VDLEVBQUFBLFFBQVEsRUFBRTtBQUFFZixJQUFBQSxJQUFJLEVBQUVNLE1BQVI7QUFBZ0JGLElBQUFBLFFBQVEsRUFBRTtBQUExQixHQUhaO0FBSUVZLEVBQUFBLEtBQUssRUFBRTtBQUFFaEIsSUFBQUEsSUFBSSxFQUFFTSxNQUFSO0FBQWdCRixJQUFBQSxRQUFRLEVBQUU7QUFBMUIsR0FKVDtBQUtFYSxFQUFBQSxLQUFLLEVBQUU7QUFBRWpCLElBQUFBLElBQUksRUFBRVEsTUFBUjtBQUFnQkosSUFBQUEsUUFBUSxFQUFFO0FBQTFCLEdBTFQ7QUFNRWMsRUFBQUEsS0FBSyxFQUFFO0FBQUVsQixJQUFBQSxJQUFJLEVBQUVNLE1BQVI7QUFBZ0JGLElBQUFBLFFBQVEsRUFBRTtBQUExQixHQU5UO0FBT0VHLEVBQUFBLE1BQU0sRUFBRTtBQUFFUCxJQUFBQSxJQUFJLEVBQUVRLE1BQVI7QUFBZ0JKLElBQUFBLFFBQVEsRUFBRSxJQUExQjtBQUFnQ0ssSUFBQUEsT0FBTyxFQUFFO0FBQXpDLEdBUFY7QUFRRVUsRUFBQUEsVUFBVSxFQUFFO0FBQUVuQixJQUFBQSxJQUFJLEVBQUVRLE1BQVI7QUFBZ0JKLElBQUFBLFFBQVEsRUFBRSxJQUExQjtBQUFnQ0ssSUFBQUEsT0FBTyxFQUFFO0FBQXpDLEdBUmQ7QUFTRVcsRUFBQUEsWUFBWSxFQUFFO0FBQUVwQixJQUFBQSxJQUFJLEVBQUVRLE1BQVI7QUFBZ0JKLElBQUFBLFFBQVEsRUFBRSxJQUExQjtBQUFnQ0ssSUFBQUEsT0FBTyxFQUFFO0FBQXpDLEdBVGhCO0FBVUVZLEVBQUFBLFdBQVcsRUFBRTtBQUFFckIsSUFBQUEsSUFBSSxFQUFFTSxNQUFSO0FBQWdCRixJQUFBQSxRQUFRLEVBQUU7QUFBMUIsR0FWZjtBQVdFa0IsRUFBQUEsT0FBTyxFQUFFLENBQUN6QixZQUFEO0FBWFgsQ0FEb0IsRUFjcEI7QUFDRWMsRUFBQUEsVUFBVSxFQUFFO0FBRGQsQ0Fkb0IsQ0FBdEI7QUFtQkEsTUFBTVksT0FBTyxHQUNYM0IsZ0VBQUEsSUFBMkJBLHFEQUFBLENBQWUsU0FBZixFQUEwQmdCLGFBQTFCLENBRDdCO0FBR0EsaUVBQWVXLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vbW9kZWxzL1Byb2R1Y3QuanM/MDljNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgcmV2aWV3U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICB1c2VyOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcicsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuICAgIGNvbW1lbnQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgc2x1ZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGJyYW5kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBudW1SZXZpZXdzOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcclxuICAgIGNvdW50SW5TdG9jazogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICByZXZpZXdzOiBbcmV2aWV3U2NoZW1hXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9XHJcbiAgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJldmlld1NjaGVtYSIsIlNjaGVtYSIsInVzZXIiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwibmFtZSIsIlN0cmluZyIsInJhdGluZyIsIk51bWJlciIsImRlZmF1bHQiLCJjb21tZW50IiwidGltZXN0YW1wcyIsInByb2R1Y3RTY2hlbWEiLCJzbHVnIiwidW5pcXVlIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInByaWNlIiwiYnJhbmQiLCJudW1SZXZpZXdzIiwiY291bnRJblN0b2NrIiwiZGVzY3JpcHRpb24iLCJyZXZpZXdzIiwiUHJvZHVjdCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/Product.js?7fcf\n");

/***/ }),

/***/ "./pages/api/products/[id]/reviews.js":
/*!********************************************!*\
  !*** ./pages/api/products/[id]/reviews.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/error */ \"./utils/error.js?3a35\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/db */ \"./utils/db.js?d819\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/Product */ \"./models/Product.js?7fcf\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/auth */ \"./utils/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  onError: _utils_error__WEBPACK_IMPORTED_MODULE_2__.onError\n});\nhandler.get(async (req, res) => {\n  _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(req.query.id);\n  _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n\n  if (product) {\n    res.send(product.reviews);\n  } else {\n    res.status(404).send({\n      message: 'Produto não encontrado'\n    });\n  }\n});\nhandler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.isAuth).post(async (req, res) => {\n  await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(req.query.id);\n\n  if (product) {\n    const existReview = product.reviews.find(x => x.user == req.user._id);\n\n    if (existReview) {\n      await _models_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"].updateOne({\n        _id: req.query.id,\n        'reviews._id': existReview._id\n      }, {\n        $set: {\n          'reviews.$.comment': req.body.comment,\n          'reviews.$.rating': Number(req.body.rating)\n        }\n      });\n      const updatedProduct = await _models_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(req.query.id);\n      updatedProduct.numReviews = updatedProduct.reviews.length;\n      updatedProduct.rating = updatedProduct.reviews.reduce((a, c) => c.rating + a, 0) / updatedProduct.reviews.length;\n      await updatedProduct.save();\n      await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n      return res.send({\n        message: 'Avaliação atualizada'\n      });\n    } else {\n      const review = {\n        user: mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId(req.user._id),\n        name: req.user.name,\n        rating: Number(req.body.rating),\n        comment: req.body.comment\n      };\n      product.reviews.push(review);\n      product.numReviews = product.reviews.length;\n      product.rating = product.reviews.reduce((a, c) => c.rating + a, 0) / product.reviews.length;\n      await product.save();\n      await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n      res.status(201).send({\n        message: 'Avaliação enviada'\n      });\n    }\n  } else {\n    await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnect();\n    res.status(404).send({\n      message: 'Product não encontrado'\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS9yZXZpZXdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTU0sT0FBTyxHQUFHTCx3REFBVyxDQUFDO0FBQzFCQyxFQUFBQSxPQUFPQSxtREFBQUE7QUFEbUIsQ0FBRCxDQUEzQjtBQUlBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDOUJOLEVBQUFBLHlEQUFBO0FBQ0EsUUFBTVEsT0FBTyxHQUFHLE1BQU1QLGdFQUFBLENBQWlCSSxHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBM0IsQ0FBdEI7QUFDQVgsRUFBQUEsNERBQUE7O0FBQ0EsTUFBSVEsT0FBSixFQUFhO0FBQ1hGLElBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTTCxPQUFPLENBQUNNLE9BQWpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xSLElBQUFBLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUVHLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0Q7QUFDRixDQVREO0FBV0FiLE9BQU8sQ0FBQ2MsR0FBUixDQUFZZiwrQ0FBWixFQUFvQmdCLElBQXBCLENBQXlCLE9BQU9iLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMzQyxRQUFNTix5REFBQSxFQUFOO0FBQ0EsUUFBTVEsT0FBTyxHQUFHLE1BQU1QLGdFQUFBLENBQWlCSSxHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBM0IsQ0FBdEI7O0FBQ0EsTUFBSUgsT0FBSixFQUFhO0FBQ1gsVUFBTVcsV0FBVyxHQUFHWCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JNLElBQWhCLENBQXNCQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsSUFBRixJQUFVakIsR0FBRyxDQUFDaUIsSUFBSixDQUFTQyxHQUEvQyxDQUFwQjs7QUFDQSxRQUFJSixXQUFKLEVBQWlCO0FBQ2YsWUFBTWxCLGlFQUFBLENBQ0o7QUFBRXNCLFFBQUFBLEdBQUcsRUFBRWxCLEdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxFQUFqQjtBQUFxQix1QkFBZVEsV0FBVyxDQUFDSTtBQUFoRCxPQURJLEVBRUo7QUFDRUUsUUFBQUEsSUFBSSxFQUFFO0FBQ0osK0JBQXFCcEIsR0FBRyxDQUFDcUIsSUFBSixDQUFTQyxPQUQxQjtBQUVKLDhCQUFvQkMsTUFBTSxDQUFDdkIsR0FBRyxDQUFDcUIsSUFBSixDQUFTRyxNQUFWO0FBRnRCO0FBRFIsT0FGSSxDQUFOO0FBVUEsWUFBTUMsY0FBYyxHQUFHLE1BQU03QixnRUFBQSxDQUFpQkksR0FBRyxDQUFDSyxLQUFKLENBQVVDLEVBQTNCLENBQTdCO0FBQ0FtQixNQUFBQSxjQUFjLENBQUNDLFVBQWYsR0FBNEJELGNBQWMsQ0FBQ2hCLE9BQWYsQ0FBdUJrQixNQUFuRDtBQUNBRixNQUFBQSxjQUFjLENBQUNELE1BQWYsR0FDRUMsY0FBYyxDQUFDaEIsT0FBZixDQUF1Qm1CLE1BQXZCLENBQThCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVQSxDQUFDLENBQUNOLE1BQUYsR0FBV0ssQ0FBbkQsRUFBc0QsQ0FBdEQsSUFDQUosY0FBYyxDQUFDaEIsT0FBZixDQUF1QmtCLE1BRnpCO0FBR0EsWUFBTUYsY0FBYyxDQUFDTSxJQUFmLEVBQU47QUFFQSxZQUFNcEMsNERBQUEsRUFBTjtBQUNBLGFBQU9NLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUVHLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQVQsQ0FBUDtBQUNELEtBcEJELE1Bb0JPO0FBQ0wsWUFBTXFCLE1BQU0sR0FBRztBQUNiZixRQUFBQSxJQUFJLEVBQUV6Qiw4REFBQSxDQUF3QlEsR0FBRyxDQUFDaUIsSUFBSixDQUFTQyxHQUFqQyxDQURPO0FBRWJpQixRQUFBQSxJQUFJLEVBQUVuQyxHQUFHLENBQUNpQixJQUFKLENBQVNrQixJQUZGO0FBR2JYLFFBQUFBLE1BQU0sRUFBRUQsTUFBTSxDQUFDdkIsR0FBRyxDQUFDcUIsSUFBSixDQUFTRyxNQUFWLENBSEQ7QUFJYkYsUUFBQUEsT0FBTyxFQUFFdEIsR0FBRyxDQUFDcUIsSUFBSixDQUFTQztBQUpMLE9BQWY7QUFNQW5CLE1BQUFBLE9BQU8sQ0FBQ00sT0FBUixDQUFnQjJCLElBQWhCLENBQXFCSixNQUFyQjtBQUNBN0IsTUFBQUEsT0FBTyxDQUFDdUIsVUFBUixHQUFxQnZCLE9BQU8sQ0FBQ00sT0FBUixDQUFnQmtCLE1BQXJDO0FBQ0F4QixNQUFBQSxPQUFPLENBQUNxQixNQUFSLEdBQ0VyQixPQUFPLENBQUNNLE9BQVIsQ0FBZ0JtQixNQUFoQixDQUF1QixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUEsQ0FBQyxDQUFDTixNQUFGLEdBQVdLLENBQTVDLEVBQStDLENBQS9DLElBQ0ExQixPQUFPLENBQUNNLE9BQVIsQ0FBZ0JrQixNQUZsQjtBQUdBLFlBQU14QixPQUFPLENBQUM0QixJQUFSLEVBQU47QUFDQSxZQUFNcEMsNERBQUEsRUFBTjtBQUNBTSxNQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUNuQkcsUUFBQUEsT0FBTyxFQUFFO0FBRFUsT0FBckI7QUFHRDtBQUNGLEdBeENELE1Bd0NPO0FBQ0wsVUFBTWhCLDREQUFBLEVBQU47QUFDQU0sSUFBQUEsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBRUcsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckI7QUFDRDtBQUNGLENBL0NEO0FBaURBLGlFQUFlYixPQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRlY29yLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL1tpZF0vcmV2aWV3cy5qcz82MWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZXJyb3InO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZGInO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvUHJvZHVjdCc7XHJcbmltcG9ydCB7IGlzQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KHtcclxuICBvbkVycm9yLFxyXG59KTtcclxuXHJcbmhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGRiLmNvbm5lY3QoKTtcclxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xyXG4gIGRiLmRpc2Nvbm5lY3QoKTtcclxuICBpZiAocHJvZHVjdCkge1xyXG4gICAgcmVzLnNlbmQocHJvZHVjdC5yZXZpZXdzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlOiAnUHJvZHV0byBuw6NvIGVuY29udHJhZG8nIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5oYW5kbGVyLnVzZShpc0F1dGgpLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xyXG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkKHJlcS5xdWVyeS5pZCk7XHJcbiAgaWYgKHByb2R1Y3QpIHtcclxuICAgIGNvbnN0IGV4aXN0UmV2aWV3ID0gcHJvZHVjdC5yZXZpZXdzLmZpbmQoKHgpID0+IHgudXNlciA9PSByZXEudXNlci5faWQpO1xyXG4gICAgaWYgKGV4aXN0UmV2aWV3KSB7XHJcbiAgICAgIGF3YWl0IFByb2R1Y3QudXBkYXRlT25lKFxyXG4gICAgICAgIHsgX2lkOiByZXEucXVlcnkuaWQsICdyZXZpZXdzLl9pZCc6IGV4aXN0UmV2aWV3Ll9pZCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgJ3Jldmlld3MuJC5jb21tZW50JzogcmVxLmJvZHkuY29tbWVudCxcclxuICAgICAgICAgICAgJ3Jldmlld3MuJC5yYXRpbmcnOiBOdW1iZXIocmVxLmJvZHkucmF0aW5nKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkKHJlcS5xdWVyeS5pZCk7XHJcbiAgICAgIHVwZGF0ZWRQcm9kdWN0Lm51bVJldmlld3MgPSB1cGRhdGVkUHJvZHVjdC5yZXZpZXdzLmxlbmd0aDtcclxuICAgICAgdXBkYXRlZFByb2R1Y3QucmF0aW5nID1cclxuICAgICAgICB1cGRhdGVkUHJvZHVjdC5yZXZpZXdzLnJlZHVjZSgoYSwgYykgPT4gYy5yYXRpbmcgKyBhLCAwKSAvXHJcbiAgICAgICAgdXBkYXRlZFByb2R1Y3QucmV2aWV3cy5sZW5ndGg7XHJcbiAgICAgIGF3YWl0IHVwZGF0ZWRQcm9kdWN0LnNhdmUoKTtcclxuXHJcbiAgICAgIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKHsgbWVzc2FnZTogJ0F2YWxpYcOnw6NvIGF0dWFsaXphZGEnIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmV2aWV3ID0ge1xyXG4gICAgICAgIHVzZXI6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkKHJlcS51c2VyLl9pZCksXHJcbiAgICAgICAgbmFtZTogcmVxLnVzZXIubmFtZSxcclxuICAgICAgICByYXRpbmc6IE51bWJlcihyZXEuYm9keS5yYXRpbmcpLFxyXG4gICAgICAgIGNvbW1lbnQ6IHJlcS5ib2R5LmNvbW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICAgIHByb2R1Y3QucmV2aWV3cy5wdXNoKHJldmlldyk7XHJcbiAgICAgIHByb2R1Y3QubnVtUmV2aWV3cyA9IHByb2R1Y3QucmV2aWV3cy5sZW5ndGg7XHJcbiAgICAgIHByb2R1Y3QucmF0aW5nID1cclxuICAgICAgICBwcm9kdWN0LnJldmlld3MucmVkdWNlKChhLCBjKSA9PiBjLnJhdGluZyArIGEsIDApIC9cclxuICAgICAgICBwcm9kdWN0LnJldmlld3MubGVuZ3RoO1xyXG4gICAgICBhd2FpdCBwcm9kdWN0LnNhdmUoKTtcclxuICAgICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuc2VuZCh7XHJcbiAgICAgICAgbWVzc2FnZTogJ0F2YWxpYcOnw6NvIGVudmlhZGEnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlOiAnUHJvZHVjdCBuw6NvIGVuY29udHJhZG8nIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJuZXh0Q29ubmVjdCIsIm9uRXJyb3IiLCJkYiIsIlByb2R1Y3QiLCJpc0F1dGgiLCJoYW5kbGVyIiwiZ2V0IiwicmVxIiwicmVzIiwiY29ubmVjdCIsInByb2R1Y3QiLCJmaW5kQnlJZCIsInF1ZXJ5IiwiaWQiLCJkaXNjb25uZWN0Iiwic2VuZCIsInJldmlld3MiLCJzdGF0dXMiLCJtZXNzYWdlIiwidXNlIiwicG9zdCIsImV4aXN0UmV2aWV3IiwiZmluZCIsIngiLCJ1c2VyIiwiX2lkIiwidXBkYXRlT25lIiwiJHNldCIsImJvZHkiLCJjb21tZW50IiwiTnVtYmVyIiwicmF0aW5nIiwidXBkYXRlZFByb2R1Y3QiLCJudW1SZXZpZXdzIiwibGVuZ3RoIiwicmVkdWNlIiwiYSIsImMiLCJzYXZlIiwicmV2aWV3IiwiVHlwZXMiLCJPYmplY3RJZCIsIm5hbWUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/products/[id]/reviews.js\n");

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

/***/ }),

/***/ "./utils/error.js?3a35":
/*!************************!*\
  !*** ./utils/error.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getError\": () => (/* binding */ getError),\n/* harmony export */   \"onError\": () => (/* binding */ onError)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./utils/db.js?d819\");\n\n\nconst getError = err => err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message;\n\nconst onError = async (err, req, res) => {\n  await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].disconnect();\n  res.status(500).send({\n    message: err.toString()\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9lcnJvci5qcz8zYTM1LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1DLFFBQVEsR0FBSUMsR0FBRCxJQUNmQSxHQUFHLENBQUNDLFFBQUosSUFBZ0JELEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxJQUE3QixJQUFxQ0YsR0FBRyxDQUFDQyxRQUFKLENBQWFDLElBQWIsQ0FBa0JDLE9BQXZELEdBQ0lILEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxJQUFiLENBQWtCQyxPQUR0QixHQUVJSCxHQUFHLENBQUNHLE9BSFY7O0FBS0EsTUFBTUMsT0FBTyxHQUFHLE9BQU9KLEdBQVAsRUFBWUssR0FBWixFQUFpQkMsR0FBakIsS0FBeUI7QUFDdkMsUUFBTVIsc0RBQUEsRUFBTjtBQUNBUSxFQUFBQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTixJQUFBQSxPQUFPLEVBQUVILEdBQUcsQ0FBQ1UsUUFBSjtBQUFYLEdBQXJCO0FBQ0QsQ0FIRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZGVjb3IvLi91dGlscy9lcnJvci5qcz85MjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IGdldEVycm9yID0gKGVycikgPT5cclxuICBlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEgJiYgZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgPyBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICA6IGVyci5tZXNzYWdlO1xyXG5cclxuY29uc3Qgb25FcnJvciA9IGFzeW5jIChlcnIsIHJlcSwgcmVzKSA9PiB7XHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLnRvU3RyaW5nKCkgfSk7XHJcbn07XHJcbmV4cG9ydCB7IGdldEVycm9yLCBvbkVycm9yIH07XHJcbiJdLCJuYW1lcyI6WyJkYiIsImdldEVycm9yIiwiZXJyIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsIm9uRXJyb3IiLCJyZXEiLCJyZXMiLCJkaXNjb25uZWN0Iiwic3RhdHVzIiwic2VuZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/error.js?3a35\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/[id]/reviews.js"));
module.exports = __webpack_exports__;

})();