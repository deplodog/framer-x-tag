(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.ts": "./code/App.ts",
	"./Examples.ts": "./code/Examples.ts",
	"./Tags.tsx": "./code/Tags.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/App.ts":
/*!*********************!*\
  !*** ./code/App.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ scale: framer_1.Animatable(1) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.UpdateOnScroll = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onScroll(scrollTop) {\n            window[\"__checkBudget__\"]();\n            console.log(scrollTop);\n        }\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"UpdateOnScroll\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsMkNBQTJDIiwiZmlsZSI6Ii4vY29kZS9BcHAudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgc2NhbGU6IGZyYW1lcl8xLkFuaW1hdGFibGUoMSkgfSk7XG5leHBvcnRzLlNjYWxlID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjYWxlOiBkYXRhLnNjYWxlLFxuICAgICAgICBvblRhcCgpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgZGF0YS5zY2FsZS5zZXQoMC42KTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKGRhdGEuc2NhbGUsIDEpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0cy5VcGRhdGVPblNjcm9sbCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvblNjcm9sbChzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsVG9wKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiU2NhbGVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJVcGRhdGVPblNjcm9sbFwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/App.ts\n");

/***/ }),

/***/ "./code/Examples.ts":
/*!**************************!*\
  !*** ./code/Examples.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.SwitchOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.opacity,\n        rotation: data.rotation,\n    };\n};\nexports.SwitchInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ opacity: data.opacity, rotation: data.rotation }, {\n                opacity: toggle ? 0.5 : 1,\n                rotation: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"Rotate\", type: \"override\" }, { name: \"Fade\", type: \"override\" }, { name: \"SwitchOutput\", type: \"override\" }, { name: \"SwitchInput\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw0QkFBNEIsaUhBQWlIO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQWlEO0FBQ3RGO0FBQ0E7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcseUNBQXlDLEdBQUcsd0NBQXdDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZnJhbWVyXzEgPSByZXF1aXJlKFwiZnJhbWVyXCIpO1xuY29uc3QgZGF0YSA9IGZyYW1lcl8xLkRhdGEoeyB0b2dnbGU6IHRydWUsIHNjYWxlOiBmcmFtZXJfMS5BbmltYXRhYmxlKDEpLCBvcGFjaXR5OiBmcmFtZXJfMS5BbmltYXRhYmxlKDEpLCByb3RhdGlvbjogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlN3aXRjaE91dHB1dCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIHJvdGF0aW9uOiBkYXRhLnJvdGF0aW9uLFxuICAgIH07XG59O1xuZXhwb3J0cy5Td2l0Y2hJbnB1dCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvblRhcCgpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gZGF0YS50b2dnbGU7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyh7IG9wYWNpdHk6IGRhdGEub3BhY2l0eSwgcm90YXRpb246IGRhdGEucm90YXRpb24gfSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRvZ2dsZSA/IDAuNSA6IDEsXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHRvZ2dsZSA/IDM2MCA6IDAsXG4gICAgICAgICAgICB9LCB7IHRlbnNpb246IDIwMCwgZnJpY3Rpb246IDIwIH0pO1xuICAgICAgICAgICAgZGF0YS50b2dnbGUgPSAhdG9nZ2xlO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiU2NhbGVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJSb3RhdGVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGYWRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiU3dpdGNoT3V0cHV0XCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiU3dpdGNoSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.ts\n");

/***/ }),

/***/ "./code/Tags.tsx":
/*!***********************!*\
  !*** ./code/Tags.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst style = {\n    height: \"100%\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    textAlign: \"center\",\n    color: \"#8855FF\",\n    background: \"rgba(136, 85, 255, 0.1)\",\n    overflow: \"hidden\",\n};\nclass Tags extends React.Component {\n    mouseEnter(event) {\n        window[\"__checkBudget__\"]();\n        if (this.props.tagState != \"state4\") {\n            event.currentTarget.style.transition = \"background-color 0.25s, color 0.25s, border-color 0.25s\";\n            event.currentTarget.style.backgroundColor = this.props.hoverbgColor;\n            event.currentTarget.style.color = this.props.hoverfontColor;\n            event.currentTarget.style.borderColor = this.props.hoverborderColor;\n        }\n    }\n    mouseLeave(event) {\n        window[\"__checkBudget__\"]();\n        if (this.props.tagState != \"state4\") {\n            event.currentTarget.style.backgroundColor = this.props.bgColor;\n            event.currentTarget.style.color = this.props.fontColor;\n            event.currentTarget.style.borderColor = this.props.borderColor;\n        }\n    }\n    mouseDown(event) {\n        window[\"__checkBudget__\"]();\n        if (this.props.tagState != \"state4\") {\n            event.currentTarget.style.backgroundColor = this.props.downbgColor;\n            event.currentTarget.style.color = this.props.downfontColor;\n            event.currentTarget.style.borderColor = this.props.downborderColor;\n        }\n    }\n    mouseUp(event) {\n        window[\"__checkBudget__\"]();\n        if (this.props.tagState != \"state4\") {\n            event.currentTarget.style.backgroundColor = this.props.hoverbgColor;\n            event.currentTarget.style.color = this.props.hoverfontColor;\n            event.currentTarget.style.borderColor = this.props.hoverborderColor;\n        }\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        var titleArray = this.props.tags.split(this.props.separator);\n        var tagArray = [];\n        var cursor_state = \"pointer\";\n        var tagFontColor = this.props.fontColor;\n        var tagBgColor = this.props.bgColor;\n        var tagBorderColor = this.props.borderColor;\n        for (var i = 0; i < titleArray.length; i++) {\n            window[\"__checkBudget__\"]();\n            if (titleArray[i] == \"\") {\n                titleArray[i] = \"Tag\";\n            }\n            if (this.props.tagState == \"state4\") {\n                cursor_state = \"default\";\n                tagBgColor = this.props.disablebgColor;\n                tagFontColor = this.props.disablefontColor;\n                tagBorderColor = this.props.disableborderColor;\n            }\n            if (this.props.paddingPerSide) {\n                tagArray.push(React.createElement(\"button\", { type: \"button\", className: \"square\", key: i, onMouseEnter: (e) => this.mouseEnter(e), onMouseLeave: (e) => this.mouseLeave(e), onMouseDown: (e) => this.mouseDown(e), onMouseUp: (e) => this.mouseUp(e), style: {\n                        borderStyle: \"solid\",\n                        cursor: cursor_state,\n                        borderWidth: this.props.borderSize,\n                        borderColor: tagBorderColor,\n                        borderRadius: this.props.borderRadius,\n                        color: tagFontColor,\n                        background: tagBgColor,\n                        fontSize: this.props.fontSize,\n                        margin: this.props.margin,\n                        paddingLeft: this.props.paddingLeft,\n                        paddingRight: this.props.paddingRight,\n                        paddingTop: this.props.paddingTop,\n                        paddingBottom: this.props.paddingBottom\n                    } }, titleArray[i]));\n            }\n            else {\n                tagArray.push(React.createElement(\"button\", { type: \"button\", className: \"square\", key: i, onMouseEnter: (e) => this.mouseEnter(e), onMouseLeave: (e) => this.mouseLeave(e), onMouseDown: (e) => this.mouseDown(e), onMouseUp: (e) => this.mouseUp(e), style: {\n                        borderStyle: \"solid\",\n                        cursor: cursor_state,\n                        borderWidth: this.props.borderSize,\n                        borderColor: tagBorderColor,\n                        borderRadius: this.props.borderRadius,\n                        color: tagFontColor,\n                        background: tagBgColor,\n                        fontSize: this.props.fontSize,\n                        margin: this.props.margin,\n                        padding: this.props.padding\n                    } }, titleArray[i]));\n            }\n        }\n        return React.createElement(\"div\", { style: { textAlign: this.props.align } }, tagArray);\n    }\n}\n// Set default properties\nTags.defaultProps = {\n    //Default width\n    width: 320,\n    //Default height\n    height: 80,\n    //Font size of the tags\n    fontSize: 12,\n    //Margin between the tags\n    margin: 4,\n    //Background color of the tags\n    bgColor: \"#000000\",\n    hoverbgColor: \"#FAE900\",\n    downbgColor: \"#FAC000\",\n    disablebgColor: \"#EDEDED\",\n    //Font color of the tags\n    fontColor: \"#ffffff\",\n    hoverfontColor: \"#000000\",\n    downfontColor: \"#000000\",\n    disablefontColor: \"#8F8F8F\",\n    //Component alignment\n    align: \"Center\",\n    //Border radius of the tags\n    borderSize: 1,\n    //Border color of the tags\n    borderColor: \"rgba(0,0,0,0)\",\n    hoverborderColor: \"#DACC07\",\n    downborderColor: \"rgba(0,0,0,0)\",\n    disableborderColor: \"rgba(0,0,0,0)\",\n    //Radius of the tags\n    borderRadius: 100,\n    //Paddings\n    padding: 0,\n    paddingPerSide: true,\n    paddingTop: 8,\n    paddingRight: 16,\n    paddingBottom: 8,\n    paddingLeft: 16,\n    //Tags list\n    tags: \"Design, UI, UX, FramerX, Prototyping, Motion, Illustration\",\n    //Separator\n    separator: \",\",\n    tagState: \"state1\"\n};\n// Items shown in property panel\nTags.propertyControls = {\n    tags: { type: framer_1.ControlType.String, title: \"Tags\" },\n    separator: { type: framer_1.ControlType.String, title: \"Separator\" },\n    align: {\n        type: framer_1.ControlType.SegmentedEnum,\n        title: \"Align\",\n        options: [\"Left\", \"Center\", \"Right\"],\n    },\n    margin: { type: framer_1.ControlType.Number, title: \"Margin\", min: 0 },\n    padding: {\n        type: framer_1.ControlType.FusedNumber,\n        toggleKey: \"paddingPerSide\",\n        toggleTitles: [\"Padding\", \"Padding per Side\"],\n        valueKeys: [\"paddingTop\", \"paddingRight\", \"paddingBottom\", \"paddingLeft\"],\n        valueLabels: [\"T\", \"R\", \"B\", \"L\"],\n        min: 0,\n        title: \"Padding\"\n    },\n    fontSize: { type: framer_1.ControlType.Number, title: \"Font Size\", min: 4, max: 96 },\n    borderSize: { type: framer_1.ControlType.Number, title: \"Border Size\", max: 2, min: 0, step: 0.5 },\n    borderRadius: { type: framer_1.ControlType.Number, title: \"Radius\", min: 0 },\n    tagState: {\n        type: framer_1.ControlType.Enum,\n        options: [\"state1\", \"state2\", \"state3\", \"state4\"],\n        optionTitles: [\"Default\", \"Hover\", \"Down\", \"Disabled\"],\n        title: \"Tag State\"\n    },\n    //Default\n    fontColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Font Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state1\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    bgColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Tags Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state1\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    borderColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Border Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state1\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    /// Hover\n    hoverfontColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Font Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state2\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    hoverbgColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Tags Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state2\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    hoverborderColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Border Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state2\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    /// Down\n    downfontColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Font Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state3\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    downbgColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Tags Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state3\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    downborderColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Border Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state3\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    /// Disabled\n    disablefontColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Font Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state4\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    disablebgColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Tags Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state4\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    disableborderColor: {\n        type: framer_1.ControlType.Color,\n        title: \"Border Color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (props.tagState == \"state4\") {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    }\n};\nexports.Tags = Tags;\nexports.__info__ = [{ name: \"Tags\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1RhZ3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkI7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUFFO0FBQ3ZCO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUyw4QkFBOEIsRUFBRTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1EQUFtRDtBQUM5RCxnQkFBZ0Isd0RBQXdEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsNkRBQTZEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSx5RUFBeUU7QUFDeEYsaUJBQWlCLHFGQUFxRjtBQUN0RyxtQkFBbUIsNkRBQTZEO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQiLCJmaWxlIjoiLi9jb2RlL1RhZ3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiIzg4NTVGRlwiLFxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgxMzYsIDg1LCAyNTUsIDAuMSlcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbn07XG5jbGFzcyBUYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBtb3VzZUVudGVyKGV2ZW50KSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50YWdTdGF0ZSAhPSBcInN0YXRlNFwiKSB7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnN0eWxlLnRyYW5zaXRpb24gPSBcImJhY2tncm91bmQtY29sb3IgMC4yNXMsIGNvbG9yIDAuMjVzLCBib3JkZXItY29sb3IgMC4yNXNcIjtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5wcm9wcy5ob3ZlcmJnQ29sb3I7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gdGhpcy5wcm9wcy5ob3ZlcmZvbnRDb2xvcjtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSB0aGlzLnByb3BzLmhvdmVyYm9yZGVyQ29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW91c2VMZWF2ZShldmVudCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudGFnU3RhdGUgIT0gXCJzdGF0ZTRcIikge1xuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnByb3BzLmJnQ29sb3I7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gdGhpcy5wcm9wcy5mb250Q29sb3I7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gdGhpcy5wcm9wcy5ib3JkZXJDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRhZ1N0YXRlICE9IFwic3RhdGU0XCIpIHtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5wcm9wcy5kb3duYmdDb2xvcjtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSB0aGlzLnByb3BzLmRvd25mb250Q29sb3I7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gdGhpcy5wcm9wcy5kb3duYm9yZGVyQ29sb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW91c2VVcChldmVudCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudGFnU3RhdGUgIT0gXCJzdGF0ZTRcIikge1xuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnByb3BzLmhvdmVyYmdDb2xvcjtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSB0aGlzLnByb3BzLmhvdmVyZm9udENvbG9yO1xuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IHRoaXMucHJvcHMuaG92ZXJib3JkZXJDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICB2YXIgdGl0bGVBcnJheSA9IHRoaXMucHJvcHMudGFncy5zcGxpdCh0aGlzLnByb3BzLnNlcGFyYXRvcik7XG4gICAgICAgIHZhciB0YWdBcnJheSA9IFtdO1xuICAgICAgICB2YXIgY3Vyc29yX3N0YXRlID0gXCJwb2ludGVyXCI7XG4gICAgICAgIHZhciB0YWdGb250Q29sb3IgPSB0aGlzLnByb3BzLmZvbnRDb2xvcjtcbiAgICAgICAgdmFyIHRhZ0JnQ29sb3IgPSB0aGlzLnByb3BzLmJnQ29sb3I7XG4gICAgICAgIHZhciB0YWdCb3JkZXJDb2xvciA9IHRoaXMucHJvcHMuYm9yZGVyQ29sb3I7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGl0bGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAodGl0bGVBcnJheVtpXSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGl0bGVBcnJheVtpXSA9IFwiVGFnXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50YWdTdGF0ZSA9PSBcInN0YXRlNFwiKSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yX3N0YXRlID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgdGFnQmdDb2xvciA9IHRoaXMucHJvcHMuZGlzYWJsZWJnQ29sb3I7XG4gICAgICAgICAgICAgICAgdGFnRm9udENvbG9yID0gdGhpcy5wcm9wcy5kaXNhYmxlZm9udENvbG9yO1xuICAgICAgICAgICAgICAgIHRhZ0JvcmRlckNvbG9yID0gdGhpcy5wcm9wcy5kaXNhYmxlYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wYWRkaW5nUGVyU2lkZSkge1xuICAgICAgICAgICAgICAgIHRhZ0FycmF5LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJzcXVhcmVcIiwga2V5OiBpLCBvbk1vdXNlRW50ZXI6IChlKSA9PiB0aGlzLm1vdXNlRW50ZXIoZSksIG9uTW91c2VMZWF2ZTogKGUpID0+IHRoaXMubW91c2VMZWF2ZShlKSwgb25Nb3VzZURvd246IChlKSA9PiB0aGlzLm1vdXNlRG93bihlKSwgb25Nb3VzZVVwOiAoZSkgPT4gdGhpcy5tb3VzZVVwKGUpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogY3Vyc29yX3N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IHRoaXMucHJvcHMuYm9yZGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0YWdCb3JkZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5wcm9wcy5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGFnRm9udENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGFnQmdDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnByb3BzLmZvbnRTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLnByb3BzLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGlzLnByb3BzLnBhZGRpbmdMZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGlzLnByb3BzLnBhZGRpbmdSaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHRoaXMucHJvcHMucGFkZGluZ1RvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHRoaXMucHJvcHMucGFkZGluZ0JvdHRvbVxuICAgICAgICAgICAgICAgICAgICB9IH0sIHRpdGxlQXJyYXlbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhZ0FycmF5LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJzcXVhcmVcIiwga2V5OiBpLCBvbk1vdXNlRW50ZXI6IChlKSA9PiB0aGlzLm1vdXNlRW50ZXIoZSksIG9uTW91c2VMZWF2ZTogKGUpID0+IHRoaXMubW91c2VMZWF2ZShlKSwgb25Nb3VzZURvd246IChlKSA9PiB0aGlzLm1vdXNlRG93bihlKSwgb25Nb3VzZVVwOiAoZSkgPT4gdGhpcy5tb3VzZVVwKGUpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogY3Vyc29yX3N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IHRoaXMucHJvcHMuYm9yZGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0YWdCb3JkZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5wcm9wcy5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGFnRm9udENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGFnQmdDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnByb3BzLmZvbnRTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLnByb3BzLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHRoaXMucHJvcHMucGFkZGluZ1xuICAgICAgICAgICAgICAgICAgICB9IH0sIHRpdGxlQXJyYXlbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHRleHRBbGlnbjogdGhpcy5wcm9wcy5hbGlnbiB9IH0sIHRhZ0FycmF5KTtcbiAgICB9XG59XG4vLyBTZXQgZGVmYXVsdCBwcm9wZXJ0aWVzXG5UYWdzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAvL0RlZmF1bHQgd2lkdGhcbiAgICB3aWR0aDogMzIwLFxuICAgIC8vRGVmYXVsdCBoZWlnaHRcbiAgICBoZWlnaHQ6IDgwLFxuICAgIC8vRm9udCBzaXplIG9mIHRoZSB0YWdzXG4gICAgZm9udFNpemU6IDEyLFxuICAgIC8vTWFyZ2luIGJldHdlZW4gdGhlIHRhZ3NcbiAgICBtYXJnaW46IDQsXG4gICAgLy9CYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWdzXG4gICAgYmdDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgaG92ZXJiZ0NvbG9yOiBcIiNGQUU5MDBcIixcbiAgICBkb3duYmdDb2xvcjogXCIjRkFDMDAwXCIsXG4gICAgZGlzYWJsZWJnQ29sb3I6IFwiI0VERURFRFwiLFxuICAgIC8vRm9udCBjb2xvciBvZiB0aGUgdGFnc1xuICAgIGZvbnRDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgaG92ZXJmb250Q29sb3I6IFwiIzAwMDAwMFwiLFxuICAgIGRvd25mb250Q29sb3I6IFwiIzAwMDAwMFwiLFxuICAgIGRpc2FibGVmb250Q29sb3I6IFwiIzhGOEY4RlwiLFxuICAgIC8vQ29tcG9uZW50IGFsaWdubWVudFxuICAgIGFsaWduOiBcIkNlbnRlclwiLFxuICAgIC8vQm9yZGVyIHJhZGl1cyBvZiB0aGUgdGFnc1xuICAgIGJvcmRlclNpemU6IDEsXG4gICAgLy9Cb3JkZXIgY29sb3Igb2YgdGhlIHRhZ3NcbiAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgaG92ZXJib3JkZXJDb2xvcjogXCIjREFDQzA3XCIsXG4gICAgZG93bmJvcmRlckNvbG9yOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBkaXNhYmxlYm9yZGVyQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIC8vUmFkaXVzIG9mIHRoZSB0YWdzXG4gICAgYm9yZGVyUmFkaXVzOiAxMDAsXG4gICAgLy9QYWRkaW5nc1xuICAgIHBhZGRpbmc6IDAsXG4gICAgcGFkZGluZ1BlclNpZGU6IHRydWUsXG4gICAgcGFkZGluZ1RvcDogOCxcbiAgICBwYWRkaW5nUmlnaHQ6IDE2LFxuICAgIHBhZGRpbmdCb3R0b206IDgsXG4gICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgIC8vVGFncyBsaXN0XG4gICAgdGFnczogXCJEZXNpZ24sIFVJLCBVWCwgRnJhbWVyWCwgUHJvdG90eXBpbmcsIE1vdGlvbiwgSWxsdXN0cmF0aW9uXCIsXG4gICAgLy9TZXBhcmF0b3JcbiAgICBzZXBhcmF0b3I6IFwiLFwiLFxuICAgIHRhZ1N0YXRlOiBcInN0YXRlMVwiXG59O1xuLy8gSXRlbXMgc2hvd24gaW4gcHJvcGVydHkgcGFuZWxcblRhZ3MucHJvcGVydHlDb250cm9scyA9IHtcbiAgICB0YWdzOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZywgdGl0bGU6IFwiVGFnc1wiIH0sXG4gICAgc2VwYXJhdG9yOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZywgdGl0bGU6IFwiU2VwYXJhdG9yXCIgfSxcbiAgICBhbGlnbjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5TZWdtZW50ZWRFbnVtLFxuICAgICAgICB0aXRsZTogXCJBbGlnblwiLFxuICAgICAgICBvcHRpb25zOiBbXCJMZWZ0XCIsIFwiQ2VudGVyXCIsIFwiUmlnaHRcIl0sXG4gICAgfSxcbiAgICBtYXJnaW46IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuTnVtYmVyLCB0aXRsZTogXCJNYXJnaW5cIiwgbWluOiAwIH0sXG4gICAgcGFkZGluZzoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5GdXNlZE51bWJlcixcbiAgICAgICAgdG9nZ2xlS2V5OiBcInBhZGRpbmdQZXJTaWRlXCIsXG4gICAgICAgIHRvZ2dsZVRpdGxlczogW1wiUGFkZGluZ1wiLCBcIlBhZGRpbmcgcGVyIFNpZGVcIl0sXG4gICAgICAgIHZhbHVlS2V5czogW1wicGFkZGluZ1RvcFwiLCBcInBhZGRpbmdSaWdodFwiLCBcInBhZGRpbmdCb3R0b21cIiwgXCJwYWRkaW5nTGVmdFwiXSxcbiAgICAgICAgdmFsdWVMYWJlbHM6IFtcIlRcIiwgXCJSXCIsIFwiQlwiLCBcIkxcIl0sXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGl0bGU6IFwiUGFkZGluZ1wiXG4gICAgfSxcbiAgICBmb250U2l6ZTogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsIHRpdGxlOiBcIkZvbnQgU2l6ZVwiLCBtaW46IDQsIG1heDogOTYgfSxcbiAgICBib3JkZXJTaXplOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlciwgdGl0bGU6IFwiQm9yZGVyIFNpemVcIiwgbWF4OiAyLCBtaW46IDAsIHN0ZXA6IDAuNSB9LFxuICAgIGJvcmRlclJhZGl1czogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsIHRpdGxlOiBcIlJhZGl1c1wiLCBtaW46IDAgfSxcbiAgICB0YWdTdGF0ZToge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5FbnVtLFxuICAgICAgICBvcHRpb25zOiBbXCJzdGF0ZTFcIiwgXCJzdGF0ZTJcIiwgXCJzdGF0ZTNcIiwgXCJzdGF0ZTRcIl0sXG4gICAgICAgIG9wdGlvblRpdGxlczogW1wiRGVmYXVsdFwiLCBcIkhvdmVyXCIsIFwiRG93blwiLCBcIkRpc2FibGVkXCJdLFxuICAgICAgICB0aXRsZTogXCJUYWcgU3RhdGVcIlxuICAgIH0sXG4gICAgLy9EZWZhdWx0XG4gICAgZm9udENvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJGb250IENvbG9yXCIsXG4gICAgICAgIGhpZGRlbihwcm9wcykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAocHJvcHMudGFnU3RhdGUgPT0gXCJzdGF0ZTFcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBiZ0NvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJUYWdzIENvbG9yXCIsXG4gICAgICAgIGhpZGRlbihwcm9wcykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAocHJvcHMudGFnU3RhdGUgPT0gXCJzdGF0ZTFcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBib3JkZXJDb2xvcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6IFwiQm9yZGVyIENvbG9yXCIsXG4gICAgICAgIGhpZGRlbihwcm9wcykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAocHJvcHMudGFnU3RhdGUgPT0gXCJzdGF0ZTFcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLy8gSG92ZXJcbiAgICBob3ZlcmZvbnRDb2xvcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6IFwiRm9udCBDb2xvclwiLFxuICAgICAgICBoaWRkZW4ocHJvcHMpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgaWYgKHByb3BzLnRhZ1N0YXRlID09IFwic3RhdGUyXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaG92ZXJiZ0NvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJUYWdzIENvbG9yXCIsXG4gICAgICAgIGhpZGRlbihwcm9wcykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAocHJvcHMudGFnU3RhdGUgPT0gXCJzdGF0ZTJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBob3ZlcmJvcmRlckNvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJCb3JkZXIgQ29sb3JcIixcbiAgICAgICAgaGlkZGVuKHByb3BzKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGlmIChwcm9wcy50YWdTdGF0ZSA9PSBcInN0YXRlMlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vLyBEb3duXG4gICAgZG93bmZvbnRDb2xvcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6IFwiRm9udCBDb2xvclwiLFxuICAgICAgICBoaWRkZW4ocHJvcHMpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgaWYgKHByb3BzLnRhZ1N0YXRlID09IFwic3RhdGUzXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZG93bmJnQ29sb3I6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQ29sb3IsXG4gICAgICAgIHRpdGxlOiBcIlRhZ3MgQ29sb3JcIixcbiAgICAgICAgaGlkZGVuKHByb3BzKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGlmIChwcm9wcy50YWdTdGF0ZSA9PSBcInN0YXRlM1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRvd25ib3JkZXJDb2xvcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6IFwiQm9yZGVyIENvbG9yXCIsXG4gICAgICAgIGhpZGRlbihwcm9wcykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAocHJvcHMudGFnU3RhdGUgPT0gXCJzdGF0ZTNcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLy8gRGlzYWJsZWRcbiAgICBkaXNhYmxlZm9udENvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJGb250IENvbG9yXCIsXG4gICAgICAgIGhpZGRlbihwcm9wcykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAocHJvcHMudGFnU3RhdGUgPT0gXCJzdGF0ZTRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlYmdDb2xvcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6IFwiVGFncyBDb2xvclwiLFxuICAgICAgICBoaWRkZW4ocHJvcHMpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgaWYgKHByb3BzLnRhZ1N0YXRlID09IFwic3RhdGU0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGlzYWJsZWJvcmRlckNvbG9yOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJCb3JkZXIgQ29sb3JcIixcbiAgICAgICAgaGlkZGVuKHByb3BzKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGlmIChwcm9wcy50YWdTdGF0ZSA9PSBcInN0YXRlNFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0cy5UYWdzID0gVGFncztcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlRhZ3NcIiwgY2hpbGRyZW46IGZhbHNlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Tags.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.8.0","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"16.3.12","@types/react-dom":"^16.0.5","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.3.2","react-dev-utils":"^5.0.1","react-dom":"^16.3.2","ts-jest":"^22.4.5","ts-loader":"^4.1.0","tslint":"^5.10.0","tslint-microsoft-contrib":"^5.0.3","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3.2","react-dom":"^16.3.2"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page","children":true},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]},"scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, keywords, framer, author, name, version, dependencies, default */
/***/ (function(module) {

module.exports = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.8.0"},"peerDependencies":{"framer":"^0.8.0","react":"^16.3.0","react-dom":"^16.3.0"},"keywords":["tags","chips","tag cloud","component"],"framer":{"id":"d76b3c6c-2ab4-4fc3-b154-bdd4d79ffd4e","displayName":"Tag"},"author":"Alexander Nasennik","name":"@framer/deplodog.tag","version":"1.4.0","dependencies":{}};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});