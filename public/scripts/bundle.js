/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Resume.tsx":
/*!************************!*\
  !*** ./src/Resume.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const Entry_1 = __webpack_require__(/*! ./components/Entry */ "./src/components/Entry.tsx");
const ChildHolder_1 = __webpack_require__(/*! ./components/ChildHolder */ "./src/components/ChildHolder.tsx");
const Section_1 = __webpack_require__(/*! ./components/Section */ "./src/components/Section.tsx");
const Title_1 = __webpack_require__(/*! ./components/Title */ "./src/components/Title.tsx");
const Paragraph_1 = __webpack_require__(/*! ./components/Paragraph */ "./src/components/Paragraph.tsx");
class FlexibleRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%"
            } }, this.props.children);
    }
}
class Resume extends React.Component {
    constructor(props) {
        super(props);
        // Custom CSS
        const head = document.getElementsByTagName("head")[0];
        this.style = document.createElement("style");
        this.style.innerHTML = "";
        head.appendChild(this.style);
        this.state = {
            children: new ChildHolder_1.default([
                React.createElement(FlexibleRow, null,
                    React.createElement(Title_1.default, { value: "Vincent La" }),
                    React.createElement(Paragraph_1.default, { value: "Email: vincela9@hotmail.com\r\n                        Phone: 123-456-7890" })),
                React.createElement(Section_1.default, { title: "Objective" },
                    React.createElement(Paragraph_1.default, { value: "To conquer the world." })),
                React.createElement(Section_1.default, { title: "Education" },
                    React.createElement(Entry_1.default, null))
            ]),
            customCss: `body {
    width: 70vw;
    margin: 1em auto 1em auto;
    font-family: Tahoma, sans-serif;
    font-size: 10pt;
}

body * {
    margin: 0;
}

h1, h2, h3, h4 {
    font-family: Georgia, serif;
}

h2 { border-bottom: 1px solid; }

section {
    margin-bottom: 1.5em;
}`
        };
        this.renderStyle();
        this.addSection = this.addSection.bind(this);
        this.renderStyle = this.renderStyle.bind(this);
        this.onStyleChange = this.onStyleChange.bind(this);
    }
    addSection() {
        this.setState({
            children: this.state.children.addChild(React.createElement(Section_1.default, { title: "Add title here" }))
        });
    }
    // Update custom CSS
    onStyleChange(event) {
        this.setState({
            customCss: event.target.value,
        });
    }
    // Push style changes to browser
    renderStyle() {
        this.style.innerHTML = this.state.customCss;
    }
    render() {
        return React.createElement(React.Fragment, null,
            this.state.children.render(),
            React.createElement("button", { style: {}, onClick: this.addSection }, "Add Section"),
            React.createElement("div", null,
                React.createElement("h2", null, "Style Editor"),
                React.createElement("textarea", { onChange: this.onStyleChange, value: this.state.customCss }),
                React.createElement("button", { onClick: this.renderStyle }, "Update")));
    }
}
exports.default = Resume;


/***/ }),

/***/ "./src/components/ChildHolder.tsx":
/*!****************************************!*\
  !*** ./src/components/ChildHolder.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class ChildHolder {
    constructor(children) {
        this.children = new Array();
        if (Array.isArray(children)) {
            this.children = children;
        }
        else if (this.children) {
            this.children = [children];
        }
    }
    addChild(child) {
        this.children.push(child);
        return this;
    }
    render() {
        return React.createElement(React.Fragment, null, this.children.map((elem, idx) => React.createElement(React.Fragment, { key: idx }, elem)));
    }
}
exports.default = ChildHolder;


/***/ }),

/***/ "./src/components/EditButton.tsx":
/*!***************************************!*\
  !*** ./src/components/EditButton.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class EditButtonProps {
}
exports.EditButtonProps = EditButtonProps;
class EditButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const isEditing = this.props.parent.state.isEditing;
        if (isEditing) {
            return React.createElement("button", { onClick: this.props.parent.toggleEdit }, "Done");
        }
        return React.createElement("button", { onClick: this.props.parent.toggleEdit }, "Edit");
    }
}
exports.default = EditButton;


/***/ }),

/***/ "./src/components/Editable.tsx":
/*!*************************************!*\
  !*** ./src/components/Editable.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class EditableBase extends React.Component {
    constructor(props) {
        super(props);
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
}
exports.EditableBase = EditableBase;
// Represents an editable resume component
class Editable extends EditableBase {
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
    }
    updateValue(event) {
        this.setState({ value: event.target.value });
    }
}
exports.default = Editable;
class MultiEditable extends EditableBase {
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
    }
    updateValue(key, event) {
        this.state.values.set(key, event.target.value);
        this.setState({
            values: this.state.values
        });
    }
}
exports.MultiEditable = MultiEditable;


/***/ }),

/***/ "./src/components/Entry.tsx":
/*!**********************************!*\
  !*** ./src/components/Entry.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Editable_1 = __webpack_require__(/*! ./Editable */ "./src/components/Editable.tsx");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ChildHolder_1 = __webpack_require__(/*! ./ChildHolder */ "./src/components/ChildHolder.tsx");
const List_1 = __webpack_require__(/*! ./List */ "./src/components/List.tsx");
class Entry extends Editable_1.MultiEditable {
    constructor(props) {
        super(props);
        this.state = {
            children: new ChildHolder_1.default(props.children),
            value: "",
            isEditing: false,
            values: new Map()
        };
        this.addChild = this.addChild.bind(this);
    }
    addChild() {
        this.setState({
            children: this.state.children.addChild(React.createElement(List_1.default, null))
        });
    }
    render() {
        if (this.state.isEditing) {
            return React.createElement("div", null,
                React.createElement("input", { onChange: this.updateValue.bind(this, "title"), value: this.state.values.get("title") || "" }),
                React.createElement("input", { onChange: this.updateValue.bind(this, "subtitle"), value: this.state.values.get("subtitle") || "" }),
                React.createElement("button", { onClick: this.toggleEdit }, "Done"));
        }
        return React.createElement("div", null,
            React.createElement("h3", null, this.state.values.get("title") || "Enter a title"),
            React.createElement("p", null, this.state.values.get("subtitle") || "Enter a subtitle"),
            this.state.children.render(),
            React.createElement("button", { onClick: this.addChild }, "Add"),
            React.createElement("button", { onClick: this.toggleEdit }, "Edit"));
    }
}
exports.default = Entry;


/***/ }),

/***/ "./src/components/List.tsx":
/*!*********************************!*\
  !*** ./src/components/List.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ChildHolder_1 = __webpack_require__(/*! ./ChildHolder */ "./src/components/ChildHolder.tsx");
const Editable_1 = __webpack_require__(/*! ./Editable */ "./src/components/Editable.tsx");
class ListItem extends Editable_1.default {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            value: ""
        };
    }
    render() {
        if (this.state.isEditing) {
            return React.createElement(React.Fragment, null,
                React.createElement("input", { onChange: this.updateValue, value: this.state.value, type: "text" }),
                React.createElement("div", { style: { float: "right" } },
                    React.createElement("button", { onClick: this.toggleEdit }, "Done")));
        }
        return React.createElement("li", null,
            this.state.value,
            React.createElement("div", { style: { float: "right" } },
                React.createElement("button", { onClick: this.toggleEdit }, "Edit")));
    }
}
exports.ListItem = ListItem;
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: new ChildHolder_1.default(props.children)
        };
        this.addChild = this.addChild.bind(this);
    }
    addChild() {
        this.setState({
            children: this.state.children.addChild(React.createElement(ListItem, null))
        });
    }
    render() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { style: { float: "right" } },
                React.createElement("button", { onClick: this.addChild }, "Add")),
            React.createElement("ul", null, this.state.children.render()));
    }
}
exports.default = List;


/***/ }),

/***/ "./src/components/Paragraph.tsx":
/*!**************************************!*\
  !*** ./src/components/Paragraph.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Editable_1 = __webpack_require__(/*! ./Editable */ "./src/components/Editable.tsx");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const EditButton_1 = __webpack_require__(/*! ./EditButton */ "./src/components/EditButton.tsx");
class Paragraph extends Editable_1.default {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            value: props.value ? props.value : ""
        };
    }
    // Convert newlines ('\n') into HTML line breaks
    processTextArea() {
        let textArea = this.state.value.split("\n");
        return React.createElement(React.Fragment, null, textArea.map((x, idx) => React.createElement(React.Fragment, { key: idx },
            x,
            React.createElement("br", null))));
    }
    render() {
        if (this.state.isEditing) {
            return React.createElement(React.Fragment, null,
                React.createElement("textarea", { onChange: this.updateValue, value: this.state.value }),
                React.createElement(EditButton_1.default, { parent: this }));
        }
        return React.createElement("p", null,
            this.processTextArea(),
            React.createElement("span", { style: { display: "inline-block" } },
                React.createElement(EditButton_1.default, { parent: this })));
    }
}
exports.default = Paragraph;


/***/ }),

/***/ "./src/components/Section.tsx":
/*!************************************!*\
  !*** ./src/components/Section.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ChildHolder_1 = __webpack_require__(/*! ./ChildHolder */ "./src/components/ChildHolder.tsx");
const Editable_1 = __webpack_require__(/*! ./Editable */ "./src/components/Editable.tsx");
const Entry_1 = __webpack_require__(/*! ./Entry */ "./src/components/Entry.tsx");
const EditButton_1 = __webpack_require__(/*! ./EditButton */ "./src/components/EditButton.tsx");
class Section extends Editable_1.default {
    constructor(props) {
        super(props);
        this.state = {
            children: new ChildHolder_1.default(props.children),
            value: props.title,
            isEditing: false
        };
        this.addChild = this.addChild.bind(this);
    }
    addChild() {
        this.setState({
            children: this.state.children.addChild(React.createElement(Entry_1.default, null))
        });
    }
    render() {
        let addButton = React.createElement("div", { style: { float: "right" } },
            React.createElement("button", { onClick: this.addChild }, "Add"));
        let title = this.state.value;
        if (this.state.isEditing) {
            title = React.createElement("input", { onChange: this.updateValue, type: "text", value: this.state.value });
        }
        return React.createElement("section", null,
            React.createElement("h2", null,
                title,
                addButton,
                React.createElement(EditButton_1.default, { parent: this })),
            this.state.children.render());
    }
}
exports.default = Section;


/***/ }),

/***/ "./src/components/Title.tsx":
/*!**********************************!*\
  !*** ./src/components/Title.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Editable_1 = __webpack_require__(/*! ./Editable */ "./src/components/Editable.tsx");
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const EditButton_1 = __webpack_require__(/*! ./EditButton */ "./src/components/EditButton.tsx");
class Title extends Editable_1.default {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            value: props.value
        };
    }
    render() {
        if (this.state.isEditing) {
            return React.createElement(React.Fragment, null,
                React.createElement("input", { onChange: this.updateValue, value: this.state.value, type: "text" }),
                React.createElement(EditButton_1.default, { parent: this }));
        }
        return React.createElement("h1", null,
            this.state.value,
            React.createElement("div", { style: { display: "inline-block" } },
                React.createElement(EditButton_1.default, { parent: this })));
    }
}
exports.default = Title;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const Resume_1 = __webpack_require__(/*! ./Resume */ "./src/Resume.tsx");
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(React.createElement(Resume_1.default, null), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map