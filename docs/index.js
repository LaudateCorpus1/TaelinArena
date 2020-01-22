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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/inferno/dist/index.esm.js
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(o) {
    return o === void 0 || o === null;
}
function isInvalid(o) {
    return o === null || o === false || o === true || o === void 0;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isString(o) {
    return typeof o === 'string';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isNull(o) {
    return o === null;
}
function isUndefined(o) {
    return o === void 0;
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}
// object.event should always be function, otherwise its badly created object.
function isLinkEventObject(o) {
    return !isNull(o) && typeof o === 'object';
}

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var Fragment = '$F';
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function appendChild(parentDOM, dom) {
    parentDOM.appendChild(dom);
}
function insertOrAppend(parentDOM, newNode, nextNode) {
    if (isNull(nextNode)) {
        appendChild(parentDOM, newNode);
    }
    else {
        parentDOM.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDOM, newDom, lastDom) {
    parentDOM.replaceChild(newDom, lastDom);
}
function removeChild(parentDOM, childNode) {
    parentDOM.removeChild(childNode);
}
function callAll(arrayFn) {
    var listener;
    while ((listener = arrayFn.shift()) !== undefined) {
        listener();
    }
}
function findChildVNode(vNode, startEdge, flags) {
    var children = vNode.children;
    if (flags & 4 /* ComponentClass */) {
        return children.$LI;
    }
    if (flags & 8192 /* Fragment */) {
        return vNode.childFlags === 2 /* HasVNodeChildren */ ? children : children[startEdge ? 0 : children.length - 1];
    }
    return children;
}
function findDOMfromVNode(vNode, startEdge) {
    var flags;
    while (vNode) {
        flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            return vNode.dom;
        }
        vNode = findChildVNode(vNode, startEdge, flags);
    }
    return null;
}
function removeVNodeDOM(vNode, parentDOM) {
    do {
        var flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            removeChild(parentDOM, vNode.dom);
            return;
        }
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        if (flags & 8 /* ComponentFunction */) {
            vNode = children;
        }
        if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                vNode = children;
            }
            else {
                for (var i = 0, len = children.length; i < len; ++i) {
                    removeVNodeDOM(children[i], parentDOM);
                }
                return;
            }
        }
    } while (vNode);
}
function moveVNodeDOM(vNode, parentDOM, nextNode) {
    do {
        var flags = vNode.flags;
        if (flags & 2033 /* DOMRef */) {
            insertOrAppend(parentDOM, vNode.dom, nextNode);
            return;
        }
        var children = vNode.children;
        if (flags & 4 /* ComponentClass */) {
            vNode = children.$LI;
        }
        if (flags & 8 /* ComponentFunction */) {
            vNode = children;
        }
        if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags === 2 /* HasVNodeChildren */) {
                vNode = children;
            }
            else {
                for (var i = 0, len = children.length; i < len; ++i) {
                    moveVNodeDOM(children[i], parentDOM, nextNode);
                }
                return;
            }
        }
    } while (vNode);
}
function createDerivedState(instance, nextProps, state) {
    if (instance.constructor.getDerivedStateFromProps) {
        return combineFrom(state, instance.constructor.getDerivedStateFromProps(nextProps, state));
    }
    return state;
}
var renderCheck = {
    v: false
};
var options = {
    componentComparator: null,
    createVNode: null,
    renderComplete: null
};
function setTextContent(dom, children) {
    dom.textContent = children;
}
// Calling this function assumes, nextValue is linkEvent
function isLastValueSameLinkEvent(lastValue, nextValue) {
    return (isLinkEventObject(lastValue) &&
        lastValue.event === nextValue.event &&
        lastValue.data === nextValue.data);
}
function mergeUnsetProperties(to, from) {
    for (var propName in from) {
        if (isUndefined(to[propName])) {
            to[propName] = from[propName];
        }
    }
    return to;
}
function safeCall1(method, arg1) {
    return !!isFunction(method) && (method(arg1), true);
}

var keyPrefix = '$';
function V(childFlags, children, className, flags, key, props, ref, type) {
    this.childFlags = childFlags;
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key === void 0 ? null : key;
    this.props = props === void 0 ? null : props;
    this.ref = ref === void 0 ? null : ref;
    this.type = type;
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = new V(childFlag, children, className, flags, key, props, ref, type);
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    return vNode;
}
function mergeDefaultHooks(flags, type, ref) {
    if (flags & 4 /* ComponentClass */) {
        return ref;
    }
    var defaultHooks = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultHooks;
    if (isNullOrUndef(defaultHooks)) {
        return ref;
    }
    if (isNullOrUndef(ref)) {
        return defaultHooks;
    }
    return mergeUnsetProperties(ref, defaultHooks);
}
function mergeDefaultProps(flags, type, props) {
    // set default props
    var defaultProps = (flags & 32768 /* ForwardRef */ ? type.render : type).defaultProps;
    if (isNullOrUndef(defaultProps)) {
        return props;
    }
    if (isNullOrUndef(props)) {
        return combineFrom(defaultProps, null);
    }
    return mergeUnsetProperties(props, defaultProps);
}
function resolveComponentFlags(flags, type) {
    if (flags & 12 /* ComponentKnown */) {
        return flags;
    }
    if (type.prototype && type.prototype.render) {
        return 4 /* ComponentClass */;
    }
    if (type.render) {
        return 32776 /* ForwardRefComponent */;
    }
    return 8 /* ComponentFunction */;
}
function createComponentVNode(flags, type, props, key, ref) {
    flags = resolveComponentFlags(flags, type);
    var vNode = new V(1 /* HasInvalidChildren */, null, null, flags, key, mergeDefaultProps(flags, type, props), mergeDefaultHooks(flags, type, ref), type);
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return new V(1 /* HasInvalidChildren */, isNullOrUndef(text) || text === true || text === false ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function createFragment(children, childFlags, key) {
    var fragment = createVNode(8192 /* Fragment */, 8192 /* Fragment */, null, children, childFlags, null, key, null);
    switch (fragment.childFlags) {
        case 1 /* HasInvalidChildren */:
            fragment.children = createVoidVNode();
            fragment.childFlags = 2 /* HasVNodeChildren */;
            break;
        case 16 /* HasTextChildren */:
            fragment.children = [createTextVNode(children)];
            fragment.childFlags = 4 /* HasNonKeyedChildren */;
            break;
    }
    return fragment;
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        var flags = vNode.flags;
        if (flags & 481 /* Element */) {
            if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (props.className !== void 0) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (props.key !== void 0) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (props.ref !== void 0) {
            if (flags & 8 /* ComponentFunction */) {
                vNode.ref = combineFrom(vNode.ref, props.ref);
            }
            else {
                vNode.ref = props.ref;
            }
            props.ref = undefined;
        }
    }
    return vNode;
}
/*
 * Fragment is different than normal vNode,
 * because when it needs to be cloned we need to clone its children too
 * But not normalize, because otherwise those possibly get KEY and re-mount
 */
function cloneFragment(vNodeToClone) {
    var clonedChildren;
    var oldChildren = vNodeToClone.children;
    var childFlags = vNodeToClone.childFlags;
    if (childFlags === 2 /* HasVNodeChildren */) {
        clonedChildren = directClone(oldChildren);
    }
    else if (childFlags & 12 /* MultipleChildren */) {
        clonedChildren = [];
        for (var i = 0, len = oldChildren.length; i < len; ++i) {
            clonedChildren.push(directClone(oldChildren[i]));
        }
    }
    return createFragment(clonedChildren, childFlags, vNodeToClone.key);
}
function directClone(vNodeToClone) {
    var flags = vNodeToClone.flags & -16385 /* ClearInUse */;
    var props = vNodeToClone.props;
    if (flags & 14 /* Component */) {
        if (!isNull(props)) {
            var propsToClone = props;
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
    }
    if ((flags & 8192 /* Fragment */) === 0) {
        return new V(vNodeToClone.childFlags, vNodeToClone.children, vNodeToClone.className, flags, vNodeToClone.key, props, vNodeToClone.ref, vNodeToClone.type);
    }
    return cloneFragment(vNodeToClone);
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function createPortal(children, container) {
    var normalizedRoot = normalizeRoot(children);
    return createVNode(1024 /* Portal */, 1024 /* Portal */, null, normalizedRoot, 0 /* UnknownChildren */, null, normalizedRoot.key, container);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (n.flags & 81920 /* InUseOrNormalized */ || isPrefixedKey) {
                        n = directClone(n);
                    }
                    n.flags |= 65536 /* Normalized */;
                    if (!isPrefixedKey) {
                        if (isNull(oldKey)) {
                            n.key = newKey;
                        }
                        else {
                            n.key = currentKey + oldKey;
                        }
                    }
                    else if (oldKey.substring(0, currentKey.length) !== currentKey) {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    switch (type) {
        case 'svg':
            return 32 /* SvgElement */;
        case 'input':
            return 64 /* InputElement */;
        case 'select':
            return 256 /* SelectElement */;
        case 'textarea':
            return 128 /* TextareaElement */;
        case Fragment:
            return 8192 /* Fragment */;
        default:
            return 1 /* HtmlElement */;
    }
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags = 1 /* HasInvalidChildren */;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildren = children;
    }
    else if (isStringOrNumber(children)) {
        newChildFlags = 16 /* HasTextChildren */;
        newChildren = children;
    }
    else if (isArray(children)) {
        var len = children.length;
        for (var i = 0; i < len; ++i) {
            var n = children[i];
            if (isInvalid(n) || isArray(n)) {
                newChildren = newChildren || children.slice(0, i);
                _normalizeVNodes(children, newChildren, i, '');
                break;
            }
            else if (isStringOrNumber(n)) {
                newChildren = newChildren || children.slice(0, i);
                newChildren.push(createTextVNode(n, keyPrefix + i));
            }
            else {
                var key = n.key;
                var needsCloning = (n.flags & 81920 /* InUseOrNormalized */) > 0;
                var isNullKey = isNull(key);
                var isPrefixed = isString(key) && key[0] === keyPrefix;
                if (needsCloning || isNullKey || isPrefixed) {
                    newChildren = newChildren || children.slice(0, i);
                    if (needsCloning || isPrefixed) {
                        n = directClone(n);
                    }
                    if (isNullKey || isPrefixed) {
                        n.key = keyPrefix + i;
                    }
                    newChildren.push(n);
                }
                else if (newChildren) {
                    newChildren.push(n);
                }
                n.flags |= 65536 /* Normalized */;
            }
        }
        newChildren = newChildren || children;
        if (newChildren.length === 0) {
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            newChildFlags = 8 /* HasKeyedChildren */;
        }
    }
    else {
        newChildren = children;
        newChildren.flags |= 65536 /* Normalized */;
        if (children.flags & 81920 /* InUseOrNormalized */) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
function normalizeRoot(input) {
    if (isInvalid(input) || isStringOrNumber(input)) {
        return createTextVNode(input, null);
    }
    if (isArray(input)) {
        return createFragment(input, 0 /* UnknownChildren */, null);
    }
    return input.flags & 16384 /* InUse */ ? directClone(input) : input;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var namespaces = {
    'xlink:actuate': xlinkNS,
    'xlink:arcrole': xlinkNS,
    'xlink:href': xlinkNS,
    'xlink:role': xlinkNS,
    'xlink:show': xlinkNS,
    'xlink:title': xlinkNS,
    'xlink:type': xlinkNS,
    'xml:base': xmlNS,
    'xml:lang': xmlNS,
    'xml:space': xmlNS
};

function getDelegatedEventObject(v) {
    return {
        onClick: v,
        onDblClick: v,
        onFocusIn: v,
        onFocusOut: v,
        onKeyDown: v,
        onKeyPress: v,
        onKeyUp: v,
        onMouseDown: v,
        onMouseMove: v,
        onMouseUp: v,
        onTouchEnd: v,
        onTouchMove: v,
        onTouchStart: v
    };
}
var attachedEventCounts = getDelegatedEventObject(0);
var attachedEvents = getDelegatedEventObject(null);
var syntheticEvents = getDelegatedEventObject(true);
function updateOrAddSyntheticEvent(name, dom) {
    var eventsObject = dom.$EV;
    if (!eventsObject) {
        eventsObject = dom.$EV = getDelegatedEventObject(null);
    }
    if (!eventsObject[name]) {
        if (++attachedEventCounts[name] === 1) {
            attachedEvents[name] = attachEventToDocument(name);
        }
    }
    return eventsObject;
}
function unmountSyntheticEvent(name, dom) {
    var eventsObject = dom.$EV;
    if (eventsObject && eventsObject[name]) {
        if (--attachedEventCounts[name] === 0) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = null;
    }
}
function handleSyntheticEvent(name, lastEvent, nextEvent, dom) {
    if (isFunction(nextEvent)) {
        updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
    }
    else if (isLinkEventObject(nextEvent)) {
        if (isLastValueSameLinkEvent(lastEvent, nextEvent)) {
            return;
        }
        updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
    }
    else {
        unmountSyntheticEvent(name, dom);
    }
}
// When browsers fully support event.composedPath we could loop it through instead of using parentNode property
function getTargetNode(event) {
    return isFunction(event.composedPath) ? event.composedPath()[0] : event.target;
}
function dispatchEvents(event, isClick, name, eventData) {
    var dom = getTargetNode(event);
    do {
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (isClick && dom.disabled) {
            return;
        }
        var eventsObject = dom.$EV;
        if (eventsObject) {
            var currentEvent = eventsObject[name];
            if (currentEvent) {
                // linkEvent object
                eventData.dom = dom;
                currentEvent.event ? currentEvent.event(currentEvent.data, event) : currentEvent(event);
                if (event.cancelBubble) {
                    return;
                }
            }
        }
        dom = dom.parentNode;
    } while (!isNull(dom));
}
function stopPropagation() {
    this.cancelBubble = true;
    if (!this.immediatePropagationStopped) {
        this.stopImmediatePropagation();
    }
}
function isDefaultPrevented() {
    return this.defaultPrevented;
}
function isPropagationStopped() {
    return this.cancelBubble;
}
function extendEventProperties(event) {
    // Event data needs to be object to save reference to currentTarget getter
    var eventData = {
        dom: document
    };
    event.isDefaultPrevented = isDefaultPrevented;
    event.isPropagationStopped = isPropagationStopped;
    event.stopPropagation = stopPropagation;
    Object.defineProperty(event, 'currentTarget', {
        configurable: true,
        get: function get() {
            return eventData.dom;
        }
    });
    return eventData;
}
function rootClickEvent(name) {
    return function (event) {
        if (event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 17 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.stopPropagation();
            return;
        }
        dispatchEvents(event, true, name, extendEventProperties(event));
    };
}
function rootEvent(name) {
    return function (event) {
        dispatchEvents(event, false, name, extendEventProperties(event));
    };
}
function attachEventToDocument(name) {
    var attachedEvent = name === 'onClick' || name === 'onDblClick' ? rootClickEvent(name) : rootEvent(name);
    document.addEventListener(normalizeEventName(name), attachedEvent);
    return attachedEvent;
}

function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement('i');
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; ++i) {
                triggerEventListener(props, methodName[i], e);
            }
        }
        if (isFunction(applyValue)) {
            var newVNode = this.$V;
            var newProps = newVNode.props || EMPTY_OBJ;
            applyValue(newProps, dom, false, newVNode);
        }
    };
    Object.defineProperty(fnMethod, 'wrapped', {
        configurable: false,
        enumerable: false,
        value: true,
        writable: false
    });
    return fnMethod;
}

function attachEvent(dom, eventName, handler) {
    var previousKey = "$" + eventName;
    var previousArgs = dom[previousKey];
    if (previousArgs) {
        if (previousArgs[1].wrapped) {
            return;
        }
        dom.removeEventListener(previousArgs[0], previousArgs[1]);
        dom[previousKey] = null;
    }
    if (isFunction(handler)) {
        dom.addEventListener(eventName, handler);
        dom[previousKey] = [eventName, handler];
    }
}

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
var wrappedOnChange = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
/* tslint:disable-next-line:no-empty */
function emptywrapper(event) {
    event.stopPropagation();
}
emptywrapper.wrapped = true;
function inputEvents(dom, nextPropsOrEmpty) {
    if (isCheckedType(nextPropsOrEmpty.type)) {
        attachEvent(dom, 'change', wrappedOnChange);
        attachEvent(dom, 'click', emptywrapper);
    }
    else {
        attachEvent(dom, 'input', onTextInputChange);
    }
}
function applyValueInput(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptions(vNode, value) {
    if (vNode.type === 'option') {
        updateChildOption(vNode, value);
    }
    else {
        var children = vNode.children;
        var flags = vNode.flags;
        if (flags & 4 /* ComponentClass */) {
            updateChildOptions(children.$LI, value);
        }
        else if (flags & 8 /* ComponentFunction */) {
            updateChildOptions(children, value);
        }
        else if (vNode.childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptions(children, value);
        }
        else if (vNode.childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; ++i) {
                updateChildOptions(children[i], value);
            }
        }
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if (props.value === value || (isArray(value) && value.indexOf(props.value) !== -1)) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
var onSelectChange = createWrappedFunction('onChange', applyValueSelect);
function selectEvents(dom) {
    attachEvent(dom, 'change', onSelectChange);
}
function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
    var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);
    if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
        dom.multiple = multiplePropInBoolean;
    }
    var index = nextPropsOrEmpty.selectedIndex;
    if (index === -1) {
        dom.selectedIndex = -1;
    }
    var childFlags = vNode.childFlags;
    if (childFlags !== 1 /* HasInvalidChildren */) {
        var value = nextPropsOrEmpty.value;
        if (isNumber(index) && index > -1 && dom.options[index]) {
            value = dom.options[index].value;
        }
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        updateChildOptions(vNode, value);
    }
}

var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
var wrappedOnChange$1 = createWrappedFunction('onChange');
function textAreaEvents(dom, nextPropsOrEmpty) {
    attachEvent(dom, 'input', onTextareaInputChange);
    if (nextPropsOrEmpty.onChange) {
        attachEvent(dom, 'change', wrappedOnChange$1);
    }
}
function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
                dom.defaultValue = defaultValue;
                dom.value = defaultValue;
            }
        }
    }
    else if (domValue !== value) {
        /* There is value so keep it controlled */
        dom.defaultValue = value;
        dom.value = value;
    }
}

/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function createRef() {
    return {
        current: null
    };
}
function forwardRef(render) {
    return {
        render: render
    };
}
function unmountRef(ref) {
    if (ref) {
        if (!safeCall1(ref, null) && ref.current) {
            ref.current = null;
        }
    }
}
function mountRef(ref, value, lifecycle) {
    if (ref && (isFunction(ref) || ref.current !== void 0)) {
        lifecycle.push(function () {
            if (!safeCall1(ref, value) && ref.current !== void 0) {
                ref.current = value;
            }
        });
    }
}

function remove(vNode, parentDOM) {
    unmount(vNode);
    removeVNodeDOM(vNode, parentDOM);
}
function unmount(vNode) {
    var flags = vNode.flags;
    var children = vNode.children;
    var ref;
    if (flags & 481 /* Element */) {
        ref = vNode.ref;
        var props = vNode.props;
        unmountRef(ref);
        var childFlags = vNode.childFlags;
        if (!isNull(props)) {
            var keys = Object.keys(props);
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i];
                if (syntheticEvents[key]) {
                    unmountSyntheticEvent(key, vNode.dom);
                }
            }
        }
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
    }
    else if (children) {
        if (flags & 4 /* ComponentClass */) {
            if (isFunction(children.componentWillUnmount)) {
                children.componentWillUnmount();
            }
            unmountRef(vNode.ref);
            children.$UN = true;
            unmount(children.$LI);
        }
        else if (flags & 8 /* ComponentFunction */) {
            ref = vNode.ref;
            if (!isNullOrUndef(ref) && isFunction(ref.onComponentWillUnmount)) {
                ref.onComponentWillUnmount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
            }
            unmount(children);
        }
        else if (flags & 1024 /* Portal */) {
            remove(children, vNode.ref);
        }
        else if (flags & 8192 /* Fragment */) {
            if (vNode.childFlags & 12 /* MultipleChildren */) {
                unmountAllChildren(children);
            }
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; ++i) {
        unmount(children[i]);
    }
}
function clearDOM(dom) {
    // Optimization for clearing dom
    dom.textContent = '';
}
function removeAllChildren(dom, vNode, children) {
    unmountAllChildren(children);
    if (vNode.flags & 8192 /* Fragment */) {
        removeVNodeDOM(vNode, dom);
    }
    else {
        clearDOM(dom);
    }
}

function wrapLinkEvent(nextValue) {
    // This variable makes sure there is no "this" context in callback
    var ev = nextValue.event;
    return function (e) {
        ev(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (isLinkEventObject(nextValue)) {
        if (isLastValueSameLinkEvent(lastValue, nextValue)) {
            return;
        }
        nextValue = wrapLinkEvent(nextValue);
    }
    attachEvent(dom, normalizeEventName(name), nextValue);
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    if (isNullOrUndef(nextAttrValue)) {
        dom.removeAttribute('style');
        return;
    }
    var domStyle = dom.style;
    var style;
    var value;
    if (isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle.setProperty(style, value);
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle.removeProperty(style);
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle.setProperty(style, value);
        }
    }
}
function patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom) {
    var lastHtml = (lastValue && lastValue.__html) || '';
    var nextHtml = (nextValue && nextValue.__html) || '';
    if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
            if (!isNull(lastVNode)) {
                if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                    unmountAllChildren(lastVNode.children);
                }
                else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                    unmount(lastVNode.children);
                }
                lastVNode.children = null;
                lastVNode.childFlags = 1 /* HasInvalidChildren */;
            }
            dom.innerHTML = nextHtml;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
        case 'selectedIndex':
            break;
        case 'autoFocus':
            dom.autofocus = !!nextValue;
            break;
        case 'allowfullscreen':
        case 'autoplay':
        case 'capture':
        case 'checked':
        case 'controls':
        case 'default':
        case 'disabled':
        case 'hidden':
        case 'indeterminate':
        case 'loop':
        case 'muted':
        case 'novalidate':
        case 'open':
        case 'readOnly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'selected':
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                break;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'style':
            patchStyle(lastValue, nextValue, dom);
            break;
        case 'dangerouslySetInnerHTML':
            patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom);
            break;
        default:
            if (syntheticEvents[prop]) {
                handleSyntheticEvent(prop, lastValue, nextValue, dom);
            }
            else if (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110) {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for isSVG being false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
    if (isFormElement) {
        hasControlledValue = isControlledFormElement(props);
        if (hasControlledValue) {
            addFormElementEventHandlers(flags, dom, props);
        }
    }
    for (var prop in props) {
        // do not add a hasOwnProperty check here, it affects performance
        patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null);
    }
    if (isFormElement) {
        processElement(flags, vNode, dom, props, true, hasControlledValue);
    }
}

function renderNewInput(instance, props, context) {
    var nextInput = normalizeRoot(instance.render(props, instance.state, context));
    var childContext = context;
    if (isFunction(instance.getChildContext)) {
        childContext = combineFrom(context, instance.getChildContext());
    }
    instance.$CX = childContext;
    return nextInput;
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    var instance = new Component(props, context);
    var usesNewAPI = (instance.$N = Boolean(Component.getDerivedStateFromProps || instance.getSnapshotBeforeUpdate));
    instance.$SVG = isSVG;
    instance.$L = lifecycle;
    vNode.children = instance;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    if (!usesNewAPI) {
        if (isFunction(instance.componentWillMount)) {
            instance.$BR = true;
            instance.componentWillMount();
            var pending = instance.$PS;
            if (!isNull(pending)) {
                var state = instance.state;
                if (isNull(state)) {
                    instance.state = pending;
                }
                else {
                    for (var key in pending) {
                        state[key] = pending[key];
                    }
                }
                instance.$PS = null;
            }
            instance.$BR = false;
        }
    }
    else {
        instance.state = createDerivedState(instance, props, instance.state);
    }
    instance.$LI = renderNewInput(instance, props, context);
    return instance;
}

function mount(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var flags = (vNode.flags |= 16384 /* InUse */);
    if (flags & 481 /* Element */) {
        mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (flags & 4 /* ComponentClass */) {
        mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (flags & 8 /* ComponentFunction */) {
        mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
        mountFunctionalComponentCallbacks(vNode, lifecycle);
    }
    else if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        mountText(vNode, parentDOM, nextNode);
    }
    else if (flags & 8192 /* Fragment */) {
        mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle);
    }
    else if (flags & 1024 /* Portal */) {
        mountPortal(vNode, context, parentDOM, nextNode, lifecycle);
    }
}
function mountPortal(vNode, context, parentDOM, nextNode, lifecycle) {
    mount(vNode.children, vNode.ref, context, false, null, lifecycle);
    var placeHolderVNode = createVoidVNode();
    mountText(placeHolderVNode, parentDOM, nextNode);
    vNode.dom = placeHolderVNode.dom;
}
function mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle) {
    var children = vNode.children;
    var childFlags = vNode.childFlags;
    // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
    // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
    if (childFlags & 12 /* MultipleChildren */ && children.length === 0) {
        childFlags = vNode.childFlags = 2 /* HasVNodeChildren */;
        children = vNode.children = createVoidVNode();
    }
    if (childFlags === 2 /* HasVNodeChildren */) {
        mount(children, parentDOM, nextNode, isSVG, nextNode, lifecycle);
    }
    else {
        mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle);
    }
}
function mountText(vNode, parentDOM, nextNode) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDOM)) {
        insertOrAppend(parentDOM, dom, nextNode);
    }
}
function mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var flags = vNode.flags;
    var props = vNode.props;
    var className = vNode.className;
    var children = vNode.children;
    var childFlags = vNode.childFlags;
    var dom = (vNode.dom = documentCreateElement(vNode.type, (isSVG = isSVG || (flags & 32 /* SvgElement */) > 0)));
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (childFlags === 16 /* HasTextChildren */) {
        setTextContent(dom, children);
    }
    else if (childFlags !== 1 /* HasInvalidChildren */) {
        var childrenIsSVG = isSVG && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            if (children.flags & 16384 /* InUse */) {
                vNode.children = children = directClone(children);
            }
            mount(children, dom, context, childrenIsSVG, null, lifecycle);
        }
        else if (childFlags === 8 /* HasKeyedChildren */ || childFlags === 4 /* HasNonKeyedChildren */) {
            mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle);
        }
    }
    if (!isNull(parentDOM)) {
        insertOrAppend(parentDOM, dom, nextNode);
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    mountRef(vNode.ref, dom, lifecycle);
}
function mountArrayChildren(children, dom, context, isSVG, nextNode, lifecycle) {
    for (var i = 0; i < children.length; ++i) {
        var child = children[i];
        if (child.flags & 16384 /* InUse */) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, context, isSVG, nextNode, lifecycle);
    }
}
function mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);
    mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
    mountClassComponentCallbacks(vNode.ref, instance, lifecycle);
}
function renderFunctionalComponent(vNode, context) {
    return vNode.flags & 32768 /* ForwardRef */ ? vNode.type.render(vNode.props || EMPTY_OBJ, vNode.ref, context) : vNode.type(vNode.props || EMPTY_OBJ, context);
}
function mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    mount((vNode.children = normalizeRoot(renderFunctionalComponent(vNode, context))), parentDOM, context, isSVG, nextNode, lifecycle);
}
function createClassMountCallback(instance) {
    return function () {
        instance.componentDidMount();
    };
}
function mountClassComponentCallbacks(ref, instance, lifecycle) {
    mountRef(ref, instance, lifecycle);
    if (isFunction(instance.componentDidMount)) {
        lifecycle.push(createClassMountCallback(instance));
    }
}
function createOnMountCallback(ref, vNode) {
    return function () {
        ref.onComponentDidMount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
    };
}
function mountFunctionalComponentCallbacks(vNode, lifecycle) {
    var ref = vNode.ref;
    if (!isNullOrUndef(ref)) {
        safeCall1(ref.onComponentWillMount, vNode.props || EMPTY_OBJ);
        if (isFunction(ref.onComponentDidMount)) {
            lifecycle.push(createOnMountCallback(ref, vNode));
        }
    }
}

function replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
    unmount(lastVNode);
    if ((nextVNode.flags & lastVNode.flags & 2033 /* DOMRef */) !== 0) {
        mount(nextVNode, null, context, isSVG, null, lifecycle);
        // Single DOM operation, when we have dom references available
        replaceChild(parentDOM, nextVNode.dom, lastVNode.dom);
    }
    else {
        mount(nextVNode, parentDOM, context, isSVG, findDOMfromVNode(lastVNode, true), lifecycle);
        removeVNodeDOM(lastVNode, parentDOM);
    }
}
function patch(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var nextFlags = (nextVNode.flags |= 16384 /* InUse */);
    if (lastVNode.flags !== nextFlags || lastVNode.type !== nextVNode.type || lastVNode.key !== nextVNode.key || nextFlags & 2048 /* ReCreate */) {
        if (lastVNode.flags & 16384 /* InUse */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
        }
        else {
            // Last vNode is not in use, it has crashed at application level. Just mount nextVNode and ignore last one
            mount(nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
        }
    }
    else if (nextFlags & 481 /* Element */) {
        patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle);
    }
    else if (nextFlags & 4 /* ComponentClass */) {
        patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (nextFlags & 8 /* ComponentFunction */) {
        patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
    else if (nextFlags & 16 /* Text */) {
        patchText(lastVNode, nextVNode);
    }
    else if (nextFlags & 512 /* Void */) {
        nextVNode.dom = lastVNode.dom;
    }
    else if (nextFlags & 8192 /* Fragment */) {
        patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
    }
    else {
        patchPortal(lastVNode, nextVNode, context, lifecycle);
    }
}
function patchSingleTextChild(lastChildren, nextChildren, parentDOM) {
    if (lastChildren !== nextChildren) {
        if (lastChildren !== '') {
            parentDOM.firstChild.nodeValue = nextChildren;
        }
        else {
            setTextContent(parentDOM, nextChildren);
        }
    }
}
function patchContentEditableChildren(dom, nextChildren) {
    if (dom.textContent !== nextChildren) {
        dom.textContent = nextChildren;
    }
}
function patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
    var lastChildren = lastVNode.children;
    var nextChildren = nextVNode.children;
    var lastChildFlags = lastVNode.childFlags;
    var nextChildFlags = nextVNode.childFlags;
    var nextNode = null;
    // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
    // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
    if (nextChildFlags & 12 /* MultipleChildren */ && nextChildren.length === 0) {
        nextChildFlags = nextVNode.childFlags = 2 /* HasVNodeChildren */;
        nextChildren = nextVNode.children = createVoidVNode();
    }
    var nextIsSingle = (nextChildFlags & 2 /* HasVNodeChildren */) !== 0;
    if (lastChildFlags & 12 /* MultipleChildren */) {
        var lastLen = lastChildren.length;
        // We need to know Fragment's edge node when
        if (
        // It uses keyed algorithm
        (lastChildFlags & 8 /* HasKeyedChildren */ && nextChildFlags & 8 /* HasKeyedChildren */) ||
            // It transforms from many to single
            nextIsSingle ||
            // It will append more nodes
            (!nextIsSingle && nextChildren.length > lastLen)) {
            // When fragment has multiple children there is always at least one vNode
            nextNode = findDOMfromVNode(lastChildren[lastLen - 1], false).nextSibling;
        }
    }
    patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lastVNode, lifecycle);
}
function patchPortal(lastVNode, nextVNode, context, lifecycle) {
    var lastContainer = lastVNode.ref;
    var nextContainer = nextVNode.ref;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false, null, lastVNode, lifecycle);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        removeChild(lastContainer, node);
        appendChild(nextContainer, node);
    }
}
function patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle) {
    var dom = (nextVNode.dom = lastVNode.dom);
    var lastProps = lastVNode.props;
    var nextProps = nextVNode.props;
    var isFormElement = false;
    var hasControlledValue = false;
    var nextPropsOrEmpty;
    isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
    // inlined patchProps  -- starts --
    if (lastProps !== nextProps) {
        var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
        nextPropsOrEmpty = nextProps || EMPTY_OBJ;
        if (nextPropsOrEmpty !== EMPTY_OBJ) {
            isFormElement = (nextFlags & 448 /* FormElement */) > 0;
            if (isFormElement) {
                hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
            }
            for (var prop in nextPropsOrEmpty) {
                var lastValue = lastPropsOrEmpty[prop];
                var nextValue = nextPropsOrEmpty[prop];
                if (lastValue !== nextValue) {
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode);
                }
            }
        }
        if (lastPropsOrEmpty !== EMPTY_OBJ) {
            for (var prop$1 in lastPropsOrEmpty) {
                if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                    patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                }
            }
        }
    }
    var nextChildren = nextVNode.children;
    var nextClassName = nextVNode.className;
    // inlined patchProps  -- ends --
    if (lastVNode.className !== nextClassName) {
        if (isNullOrUndef(nextClassName)) {
            dom.removeAttribute('class');
        }
        else if (isSVG) {
            dom.setAttribute('class', nextClassName);
        }
        else {
            dom.className = nextClassName;
        }
    }
    if (nextFlags & 4096 /* ContentEditable */) {
        patchContentEditableChildren(dom, nextChildren);
    }
    else {
        patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, dom, context, isSVG && nextVNode.type !== 'foreignObject', null, lastVNode, lifecycle);
    }
    if (isFormElement) {
        processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
    }
    var nextRef = nextVNode.ref;
    var lastRef = lastVNode.ref;
    if (lastRef !== nextRef) {
        unmountRef(lastRef);
        mountRef(nextRef, dom, lifecycle);
    }
}
function replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle) {
    unmount(lastChildren);
    mountArrayChildren(nextChildren, parentDOM, context, isSVG, findDOMfromVNode(lastChildren, true), lifecycle);
    removeVNodeDOM(lastChildren, parentDOM);
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, parentVNode, lifecycle) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                case 16 /* HasTextChildren */:
                    unmount(lastChildren);
                    setTextContent(parentDOM, nextChildren);
                    break;
                default:
                    replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                case 16 /* HasTextChildren */:
                    setTextContent(parentDOM, nextChildren);
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
            }
            break;
        case 16 /* HasTextChildren */:
            switch (nextChildFlags) {
                case 16 /* HasTextChildren */:
                    patchSingleTextChild(lastChildren, nextChildren, parentDOM);
                    break;
                case 2 /* HasVNodeChildren */:
                    clearDOM(parentDOM);
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    clearDOM(parentDOM);
                    break;
                default:
                    clearDOM(parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
            }
            break;
        default:
            switch (nextChildFlags) {
                case 16 /* HasTextChildren */:
                    unmountAllChildren(lastChildren);
                    setTextContent(parentDOM, nextChildren);
                    break;
                case 2 /* HasVNodeChildren */:
                    removeAllChildren(parentDOM, parentVNode, lastChildren);
                    mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                    break;
                case 1 /* HasInvalidChildren */:
                    removeAllChildren(parentDOM, parentVNode, lastChildren);
                    break;
                default:
                    var lastLength = lastChildren.length | 0;
                    var nextLength = nextChildren.length | 0;
                    // Fast path's for both algorithms
                    if (lastLength === 0) {
                        if (nextLength > 0) {
                            mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
                        }
                    }
                    else if (nextLength === 0) {
                        removeAllChildren(parentDOM, parentVNode, lastChildren);
                    }
                    else if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                        patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, parentVNode, lifecycle);
                    }
                    else {
                        patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, lifecycle);
                    }
                    break;
            }
            break;
    }
}
function createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle) {
    lifecycle.push(function () {
        instance.componentDidUpdate(lastProps, lastState, snapshot);
    });
}
function updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, force, nextNode, lifecycle) {
    var lastState = instance.state;
    var lastProps = instance.props;
    var usesNewAPI = Boolean(instance.$N);
    var hasSCU = isFunction(instance.shouldComponentUpdate);
    if (usesNewAPI) {
        nextState = createDerivedState(instance, nextProps, nextState !== lastState ? combineFrom(lastState, nextState) : nextState);
    }
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (!usesNewAPI && isFunction(instance.componentWillUpdate)) {
            instance.componentWillUpdate(nextProps, nextState, context);
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        var snapshot = null;
        var nextInput = renderNewInput(instance, nextProps, context);
        if (usesNewAPI && isFunction(instance.getSnapshotBeforeUpdate)) {
            snapshot = instance.getSnapshotBeforeUpdate(lastProps, lastState);
        }
        patch(instance.$LI, nextInput, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
        // Dont update Last input, until patch has been succesfully executed
        instance.$LI = nextInput;
        if (isFunction(instance.componentDidUpdate)) {
            createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle);
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
}
function patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var instance = (nextVNode.children = lastVNode.children);
    // If Component has crashed, ignore it to stay functional
    if (isNull(instance)) {
        return;
    }
    instance.$L = lifecycle;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var nextRef = nextVNode.ref;
    var lastRef = lastVNode.ref;
    var nextState = instance.state;
    if (!instance.$N) {
        if (isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing.
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (!isNull(instance.$PS)) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PS = null;
        }
    }
    updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, false, nextNode, lifecycle);
    if (lastRef !== nextRef) {
        unmountRef(lastRef);
        mountRef(nextRef, instance, lifecycle);
    }
}
function patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
    var shouldUpdate = true;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var nextRef = nextVNode.ref;
    var lastProps = lastVNode.props;
    var nextHooksDefined = !isNullOrUndef(nextRef);
    var lastInput = lastVNode.children;
    if (nextHooksDefined && isFunction(nextRef.onComponentShouldUpdate)) {
        shouldUpdate = nextRef.onComponentShouldUpdate(lastProps, nextProps);
    }
    if (shouldUpdate !== false) {
        if (nextHooksDefined && isFunction(nextRef.onComponentWillUpdate)) {
            nextRef.onComponentWillUpdate(lastProps, nextProps);
        }
        var type = nextVNode.type;
        var nextInput = normalizeRoot(nextVNode.flags & 32768 /* ForwardRef */ ? type.render(nextProps, nextRef, context) : type(nextProps, context));
        patch(lastInput, nextInput, parentDOM, context, isSVG, nextNode, lifecycle);
        nextVNode.children = nextInput;
        if (nextHooksDefined && isFunction(nextRef.onComponentDidUpdate)) {
            nextRef.onComponentDidUpdate(lastProps, nextProps);
        }
    }
    else {
        nextVNode.children = lastInput;
    }
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = (nextVNode.dom = lastVNode.dom);
    if (nextText !== lastVNode.children) {
        dom.nodeValue = nextText;
    }
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength, nextNode, lifecycle) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    var nextChild;
    var lastChild;
    for (; i < commonLength; ++i) {
        nextChild = nextChildren[i];
        lastChild = lastChildren[i];
        if (nextChild.flags & 16384 /* InUse */) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChild, nextChild, dom, context, isSVG, nextNode, lifecycle);
        lastChildren[i] = nextChild;
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; ++i) {
            nextChild = nextChildren[i];
            if (nextChild.flags & 16384 /* InUse */) {
                nextChild = nextChildren[i] = directClone(nextChild);
            }
            mount(nextChild, dom, context, isSVG, nextNode, lifecycle);
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; ++i) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength, outerEdge, parentVNode, lifecycle) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var j = 0;
    var aNode = a[j];
    var bNode = b[j];
    var nextPos;
    var nextNode;
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aNode.key === bNode.key) {
            if (bNode.flags & 16384 /* InUse */) {
                b[j] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            a[j] = bNode;
            ++j;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[j];
            bNode = b[j];
        }
        aNode = a[aEnd];
        bNode = b[bEnd];
        // Sync nodes with the same key at the end.
        while (aNode.key === bNode.key) {
            if (bNode.flags & 16384 /* InUse */) {
                b[bEnd] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            a[aEnd] = bNode;
            aEnd--;
            bEnd--;
            if (j > aEnd || j > bEnd) {
                break outer;
            }
            aNode = a[aEnd];
            bNode = b[bEnd];
        }
    }
    if (j > aEnd) {
        if (j <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge;
            while (j <= bEnd) {
                bNode = b[j];
                if (bNode.flags & 16384 /* InUse */) {
                    b[j] = bNode = directClone(bNode);
                }
                ++j;
                mount(bNode, dom, context, isSVG, nextNode, lifecycle);
            }
        }
    }
    else if (j > bEnd) {
        while (j <= aEnd) {
            remove(a[j++], dom);
        }
    }
    else {
        patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle);
    }
}
function patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle) {
    var aNode;
    var bNode;
    var nextPos;
    var i = 0;
    var aStart = j;
    var bStart = j;
    var aLeft = aEnd - j + 1;
    var bLeft = bEnd - j + 1;
    var sources = new Int32Array(bLeft + 1);
    // Keep track if its possible to remove whole DOM using textContent = '';
    var canRemoveWholeContent = aLeft === aLength;
    var moved = false;
    var pos = 0;
    var patched = 0;
    // When sizes are small, just loop them through
    if (bLength < 4 || (aLeft | bLeft) < 32) {
        for (i = aStart; i <= aEnd; ++i) {
            aNode = a[i];
            if (patched < bLeft) {
                for (j = bStart; j <= bEnd; j++) {
                    bNode = b[j];
                    if (aNode.key === bNode.key) {
                        sources[j - bStart] = i + 1;
                        if (canRemoveWholeContent) {
                            canRemoveWholeContent = false;
                            while (aStart < i) {
                                remove(a[aStart++], dom);
                            }
                        }
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.flags & 16384 /* InUse */) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                        ++patched;
                        break;
                    }
                }
                if (!canRemoveWholeContent && j > bEnd) {
                    remove(aNode, dom);
                }
            }
            else if (!canRemoveWholeContent) {
                remove(aNode, dom);
            }
        }
    }
    else {
        var keyIndex = {};
        // Map keys by their index
        for (i = bStart; i <= bEnd; ++i) {
            keyIndex[b[i].key] = i;
        }
        // Try to patch same keys
        for (i = aStart; i <= aEnd; ++i) {
            aNode = a[i];
            if (patched < bLeft) {
                j = keyIndex[aNode.key];
                if (j !== void 0) {
                    if (canRemoveWholeContent) {
                        canRemoveWholeContent = false;
                        while (i > aStart) {
                            remove(a[aStart++], dom);
                        }
                    }
                    sources[j - bStart] = i + 1;
                    if (pos > j) {
                        moved = true;
                    }
                    else {
                        pos = j;
                    }
                    bNode = b[j];
                    if (bNode.flags & 16384 /* InUse */) {
                        b[j] = bNode = directClone(bNode);
                    }
                    patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
                    ++patched;
                }
                else if (!canRemoveWholeContent) {
                    remove(aNode, dom);
                }
            }
            else if (!canRemoveWholeContent) {
                remove(aNode, dom);
            }
        }
    }
    // fast-path: if nothing patched remove all old and add all new
    if (canRemoveWholeContent) {
        removeAllChildren(dom, parentVNode, a);
        mountArrayChildren(b, dom, context, isSVG, outerEdge, lifecycle);
    }
    else if (moved) {
        var seq = lis_algorithm(sources);
        j = seq.length - 1;
        for (i = bLeft - 1; i >= 0; i--) {
            if (sources[i] === 0) {
                pos = i + bStart;
                bNode = b[pos];
                if (bNode.flags & 16384 /* InUse */) {
                    b[pos] = bNode = directClone(bNode);
                }
                nextPos = pos + 1;
                mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
            }
            else if (j < 0 || i !== seq[j]) {
                pos = i + bStart;
                bNode = b[pos];
                nextPos = pos + 1;
                moveVNodeDOM(bNode, dom, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge);
            }
            else {
                j--;
            }
        }
    }
    else if (patched !== bLeft) {
        // when patched count doesn't match b length we need to insert those new ones
        // loop backwards so we can use insertBefore
        for (i = bLeft - 1; i >= 0; i--) {
            if (sources[i] === 0) {
                pos = i + bStart;
                bNode = b[pos];
                if (bNode.flags & 16384 /* InUse */) {
                    b[pos] = bNode = directClone(bNode);
                }
                nextPos = pos + 1;
                mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
            }
        }
    }
}
var result;
var p;
var maxLen = 0;
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var arrI = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var u = 0;
    var v = 0;
    var c = 0;
    var len = arr.length;
    if (len > maxLen) {
        maxLen = len;
        result = new Int32Array(len);
        p = new Int32Array(len);
    }
    for (; i < len; ++i) {
        arrI = arr[i];
        if (arrI !== 0) {
            j = result[k];
            if (arr[j] < arrI) {
                p[i] = j;
                result[++k] = i;
                continue;
            }
            u = 0;
            v = k;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = k + 1;
    var seq = new Int32Array(u);
    v = result[u - 1];
    while (u-- > 0) {
        seq[u] = v;
        v = p[v];
        result[u] = 0;
    }
    return seq;
}

var hasDocumentAvailable = typeof document !== 'undefined';
if (hasDocumentAvailable) {
    /*
     * Defining $EV and $V properties on Node.prototype
     * fixes v8 "wrong map" de-optimization
     */
    if (window.Node) {
        Node.prototype.$EV = null;
        Node.prototype.$V = null;
    }
}
function __render(input, parentDOM, callback, context) {
    var lifecycle = [];
    var rootInput = parentDOM.$V;
    renderCheck.v = true;
    if (isNullOrUndef(rootInput)) {
        if (!isNullOrUndef(input)) {
            if (input.flags & 16384 /* InUse */) {
                input = directClone(input);
            }
            mount(input, parentDOM, context, false, null, lifecycle);
            parentDOM.$V = input;
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDOM);
            parentDOM.$V = null;
        }
        else {
            if (input.flags & 16384 /* InUse */) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDOM, context, false, null, lifecycle);
            rootInput = parentDOM.$V = input;
        }
    }
    if (lifecycle.length > 0) {
        callAll(lifecycle);
    }
    renderCheck.v = false;
    if (isFunction(callback)) {
        callback();
    }
    if (isFunction(options.renderComplete)) {
        options.renderComplete(rootInput, parentDOM);
    }
}
function render(input, parentDOM, callback, context) {
    if ( callback === void 0 ) callback = null;
    if ( context === void 0 ) context = EMPTY_OBJ;

    __render(input, parentDOM, callback, context);
}
function createRenderer(parentDOM) {
    return function renderer(lastInput, nextInput, callback, context) {
        if (!parentDOM) {
            parentDOM = lastInput;
        }
        render(nextInput, parentDOM, callback, context);
    };
}

var QUEUE = [];
var nextTick = typeof Promise !== 'undefined'
    ? Promise.resolve().then.bind(Promise.resolve())
    : function (a) {
        window.setTimeout(a, 0);
    };
var microTaskPending = false;
function queueStateChanges(component, newState, callback, force) {
    var pending = component.$PS;
    if (isFunction(newState)) {
        newState = newState(pending ? combineFrom(component.state, pending) : component.state, component.props, component.context);
    }
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$BR) {
        if (!renderCheck.v) {
            if (QUEUE.length === 0) {
                applyState(component, force, callback);
                return;
            }
        }
        if (QUEUE.indexOf(component) === -1) {
            QUEUE.push(component);
        }
        if (!microTaskPending) {
            microTaskPending = true;
            nextTick(rerender);
        }
        if (isFunction(callback)) {
            var QU = component.$QU;
            if (!QU) {
                QU = component.$QU = [];
            }
            QU.push(callback);
        }
    }
    else if (isFunction(callback)) {
        component.$L.push(callback.bind(component));
    }
}
function callSetStateCallbacks(component) {
    var queue = component.$QU;
    for (var i = 0, len = queue.length; i < len; ++i) {
        queue[i].call(component);
    }
    component.$QU = null;
}
function rerender() {
    var component;
    microTaskPending = false;
    while ((component = QUEUE.pop())) {
        var queue = component.$QU;
        applyState(component, false, queue ? callSetStateCallbacks.bind(null, component) : null);
    }
}
function applyState(component, force, callback) {
    if (component.$UN) {
        return;
    }
    if (force || !component.$BR) {
        var pendingState = component.$PS;
        component.$PS = null;
        var lifecycle = [];
        renderCheck.v = true;
        updateClassComponent(component, combineFrom(component.state, pendingState), component.props, findDOMfromVNode(component.$LI, true).parentNode, component.context, component.$SVG, force, null, lifecycle);
        if (lifecycle.length > 0) {
            callAll(lifecycle);
        }
        renderCheck.v = false;
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
    if (isFunction(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    // Public
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$QU = null; // QUEUE
    this.$N = false; // Uses new lifecycle API Flag
    this.$L = null; // Current lifecycle of this component
    this.$SVG = false; // Flag to keep track if component is inside SVG tree
    this.props = props || EMPTY_OBJ;
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    // Do not allow double render during force update
    queueStateChanges(this, {}, callback, true);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback, false);
    }
};
Component.prototype.render = function render (_nextProps, _nextState, _nextContext) {
    return null;
};

var version = "7.3.3";



// CONCATENATED MODULE: ./node_modules/inferno/index.esm.js
/* concated harmony reexport Component */__webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* concated harmony reexport EMPTY_OBJ */__webpack_require__.d(__webpack_exports__, "EMPTY_OBJ", function() { return EMPTY_OBJ; });
/* concated harmony reexport Fragment */__webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* concated harmony reexport _CI */__webpack_require__.d(__webpack_exports__, "_CI", function() { return createClassComponentInstance; });
/* concated harmony reexport _HI */__webpack_require__.d(__webpack_exports__, "_HI", function() { return normalizeRoot; });
/* concated harmony reexport _M */__webpack_require__.d(__webpack_exports__, "_M", function() { return mount; });
/* concated harmony reexport _MCCC */__webpack_require__.d(__webpack_exports__, "_MCCC", function() { return mountClassComponentCallbacks; });
/* concated harmony reexport _ME */__webpack_require__.d(__webpack_exports__, "_ME", function() { return mountElement; });
/* concated harmony reexport _MFCC */__webpack_require__.d(__webpack_exports__, "_MFCC", function() { return mountFunctionalComponentCallbacks; });
/* concated harmony reexport _MP */__webpack_require__.d(__webpack_exports__, "_MP", function() { return mountProps; });
/* concated harmony reexport _MR */__webpack_require__.d(__webpack_exports__, "_MR", function() { return mountRef; });
/* concated harmony reexport __render */__webpack_require__.d(__webpack_exports__, "__render", function() { return __render; });
/* concated harmony reexport createComponentVNode */__webpack_require__.d(__webpack_exports__, "createComponentVNode", function() { return createComponentVNode; });
/* concated harmony reexport createFragment */__webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* concated harmony reexport createPortal */__webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* concated harmony reexport createRef */__webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* concated harmony reexport createRenderer */__webpack_require__.d(__webpack_exports__, "createRenderer", function() { return createRenderer; });
/* concated harmony reexport createTextVNode */__webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return createTextVNode; });
/* concated harmony reexport createVNode */__webpack_require__.d(__webpack_exports__, "createVNode", function() { return createVNode; });
/* concated harmony reexport directClone */__webpack_require__.d(__webpack_exports__, "directClone", function() { return directClone; });
/* concated harmony reexport findDOMfromVNode */__webpack_require__.d(__webpack_exports__, "findDOMfromVNode", function() { return findDOMfromVNode; });
/* concated harmony reexport forwardRef */__webpack_require__.d(__webpack_exports__, "forwardRef", function() { return forwardRef; });
/* concated harmony reexport getFlagsForElementVnode */__webpack_require__.d(__webpack_exports__, "getFlagsForElementVnode", function() { return getFlagsForElementVnode; });
/* concated harmony reexport linkEvent */__webpack_require__.d(__webpack_exports__, "linkEvent", function() { return linkEvent; });
/* concated harmony reexport normalizeProps */__webpack_require__.d(__webpack_exports__, "normalizeProps", function() { return normalizeProps; });
/* concated harmony reexport options */__webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* concated harmony reexport rerender */__webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* concated harmony reexport version */__webpack_require__.d(__webpack_exports__, "version", function() { return version; });


if (false) {}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Format: a Tree can be either Nil, Tip or Oct. Nil holds
// nothing. TIP holds a value. Oct holds 8 Trees. The memory
// is organized in blocks if 8 uint32, plus a root pointer.
// A pointer is represented as an uint32, where the first
// two bits represent the constructor it points to, and the
// last 30 bits represent its data. For a `Tip`, it is the
// value. For an `oct`, it is an index. The tree has an
// exact depth of 10, allowing 1024x1024x1024 values to be
// stored.

const min = Math.min;
const max = Math.max;
const flr = Math.floor;
const p32 = 2 ** 32;
const q32 = 1 / p32;
//const eps = 1 / 65536;
const eps = 0.00001526;

const CTR = 0xC0000000;
const VAL = 0x3FFFFFFF;

const NIL = 0x00000000;
const TIP = 0x40000000;
const OCT = 0x80000000;

function empty() {
  return [NIL, NIL, NIL, NIL, NIL, NIL, NIL, NIL];
};

function insert(px, py, pz, col, oct) {
  px = (px + 512) >>> 0;
  py = (py + 512) >>> 0;
  pz = (pz + 512) >>> 0;
  var idx = 0;
  for (var bit = 9; bit >= 0; bit = bit - 1) {
    var slt
      = (((px >>> bit) & 1) << 2)
      | (((py >>> bit) & 1) << 1)
      | (((pz >>> bit) & 1) << 0);
    if (bit === 0) {
      oct[idx+slt] = TIP | col;
    } else {
      var nod = oct[idx+slt];
      var ctr = (nod&CTR)>>>0;
      var val = (nod&VAL)>>>0;
      if (ctr === NIL) {
        oct[idx+slt] = OCT | oct.length;
        idx = oct.length;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
      } else {
        idx = val;
      }
    }
  }
};

const NOP = 0x00000000;
const GOT = 0x40000000;

// Lookup returns either GOT(col) or NOP(lvl). GOT contains
// the found color. NOP contains the how many levels above
// the contained color it stopped.
function lookup(px, py, pz, oct) {
  px = (px + 512) >>> 0;
  py = (py + 512) >>> 0;
  pz = (pz + 512) >>> 0;
  var idx = 0;
  for (var bit = 9; bit >= 0; bit = bit - 1) {
    var slt
      = (((px >>> bit) & 1) << 2)
      | (((py >>> bit) & 1) << 1)
      | (((pz >>> bit) & 1) << 0);
    if (bit === 0) {
      // No need to deconstruct because NIL/TIP have the
      // same constructor labels as NOP/GOT.
      return oct[idx+slt];
    } else {
      var nod = oct[idx+slt];
      var ctr = (nod&CTR)>>>0;
      if (ctr !== NIL) {
        idx = (nod&VAL)>>>0;
      } else {
        return NOP | bit;
      }
    }
  };
};

// Converts an octree to a string
function show(oct, ptr = OCT, lvl = 0) {
  var ctr = (ptr & 0xC0000000) >>> 0;
  var val = (ptr & 0x3FFFFFFF) >>> 0;
  var str = "";
  for (var j = 0; j < lvl; ++j) {
    str += j === lvl-1 ? "+" : "-";
  }
  switch (ctr) {
    case NIL:
      return str + "\n";
    case TIP:
      //for (var j = 0; j < lvl; ++j) {
        //str += "-";
      //}
      return str + "0x"+val.toString(16) + "\n";
    case OCT:
      str += "oct\n";
      for (var i = 0; i < 8; ++i) {
        str += show(oct, oct[val+i], lvl+1);
      }
      return str;
  }
};


// This isn't used, but is here for documentation purposes.
// In order for the intersection function below to work in
// cases such as `intersect(-100,5,0, 1,0,0, 0,0,0,
// 10,10,10)`, i.e., when you're firing the ray towards the
// box in the plane of one of its faces, we must have
// caution on how we perform the division to get each `t`.
// If we divide `a` by 0, then we must return `-inf` if
// `a<0`, `+inf` if `a>0`, and `k` if `a==0`. In JavaScript,
// this can be performed as `a / b || k`, so we do that
// instead, since it is faster, but on WebGL, we need to use
// this division algorithm.
function div(a, b, k) {
  if (b === 0) {
    return a > 0.0 ? Infinity : a < 0.0 ? -Infinity : k;
  } else {
    return a / b;
  }
}

// Moves a ray through a direction and returns the distance
// traveled until it hits the surface of the box. The ray
// can start inside. If it never hits, returns infinite.
function intersect(
  ray_pos_x, ray_pos_y, ray_pos_z,
  ray_dir_x, ray_dir_y, ray_dir_z,
  box_pos_x, box_pos_y, box_pos_z,
  box_siz_x, box_siz_y, box_siz_z) {
  var box_min_x = box_pos_x - box_siz_x * 0.5;
  var box_min_y = box_pos_y - box_siz_y * 0.5;
  var box_min_z = box_pos_z - box_siz_z * 0.5;
  var box_max_x = box_pos_x + box_siz_x * 0.5;
  var box_max_y = box_pos_y + box_siz_y * 0.5;
  var box_max_z = box_pos_z + box_siz_z * 0.5;
  var t1 = (box_min_x - ray_pos_x) / ray_dir_x || -Infinity;
  var t2 = (box_max_x - ray_pos_x) / ray_dir_x || Infinity;
  var t3 = (box_min_y - ray_pos_y) / ray_dir_y || -Infinity;
  var t4 = (box_max_y - ray_pos_y) / ray_dir_y || Infinity;
  var t5 = (box_min_z - ray_pos_z) / ray_dir_z || -Infinity;
  var t6 = (box_max_z - ray_pos_z) / ray_dir_z || Infinity;
  var t7 = max(max(min(t1, t2), min(t3, t4)), min(t5, t6));
  var t8 = min(min(max(t1, t2), max(t3, t4)), max(t5, t6));
  var t9 = (t8<0.0 || t7>t8) ? Infinity : t7<0.0 ? t8 : t7;
  return t9;
};

const HIT = 0;
const PAS = 1;
const MIS = 2;

// Marches through an octree until it hits a value. Returns
// `HIT(pos,val)` if it hits, with `pos` being the value
// position (not the ray position) and `val` being its
// value. If it never hits the octree, returns `MIS`. If it
// hits but passes through, returns `PAS`.
function march(rx,ry,rz,dx,dy,dz,oct) {

  // Enters the octree
  if ( rx >=  512 || ry >=  512 || rz >=  512
    || rx <= -512 || ry <= -512 || rz <= -512) {
    var ht = intersect(rx,ry,rz,dx,dy,dz,0,0,0,1024,1024,1024);
    if (ht !== Infinity) {
      rx = rx + dx*ht + dx*eps;
      ry = ry + dy*ht + dy*eps;
      rz = rz + dz*ht + dz*eps;
      //console.log("enter",rx,ry,rz);
    } else {
      return {ctr: MIS};
    }
  }

  // Marches through it
  while (
    !( rx >=  512 || ry >=  512 || rz >=  512
    || rx <= -512 || ry <= -512 || rz <= -512)) {
    rx += dx*eps;
    ry += dy*eps;
    rz += dz*eps;
    var got = lookup(rx, ry, rz, oct);
    if (((got&CTR)>>>0) === NOP) {
      // If the ray isn't colliding with a value, thus
      // computes the bounds of the box around the ray on
      // the octree, using the "number of levels above the
      // color" returned by the lookup function.
      var lv = 10 - (got&VAL);
      //if (lv !== 10) {
        //console.log("???", lv);
      //}
      var bl = 1024 >>> lv; // box size
      var bq = 1/bl;
      var bx = ((((rx+512)*bq)>>>0)+0.5)*bl-512;
      var by = ((((ry+512)*bq)>>>0)+0.5)*bl-512;
      var bz = ((((rz+512)*bq)>>>0)+0.5)*bl-512;
      var ht = intersect(rx,ry,rz,dx,dy,dz,bx,by,bz,bl,bl,bl);
      if (ht !== Infinity) {
        rx = rx + dx*ht;
        ry = ry + dy*ht;
        rz = rz + dz*ht;
      } else {
        //console.log(bx,by,bz,"|",bl);
        //console.log("aff", rx-dx*eps,ry-dy*eps,rz-dz*eps, got, (got&VAL)>>>0);
        break;
        //return {ctr: MIS};
      }
    } else {
      //console.log("hit",rx,ry,rz,lookup(rx,ry,rz,oct));
      return {
        //pos: {
          //x: rx - dx*eps,
          //y: ry - dy*eps,
          //z: rz - dz*eps
        //},
        ctr: HIT,
        pos: {
          x: Math.floor(rx),
          y: Math.floor(ry),
          z: Math.floor(rz),
        },
        val: (got&VAL)>>>0
      };
    }
  }

  // Passed through
  return {
    ctr: PAS, 
    pos: {
      x: rx - dx*eps,
      y: ry - dy*eps,
      z: rz - dz*eps,
    }
  };
};

module.exports = {
  CTR,
  VAL,
  NIL,
  TIP,
  OCT,
  empty,
  insert,
  NOP,
  GOT,
  lookup,
  march,
  HIT,
  MIS,
  PAS,
  show,
};


var oct = module.exports;
var tree = oct.empty();
for (var k = -8; k < 8; ++k) {
  for (var j = -8; j < 8; ++j) {
    for (var i = -8; i < 8; ++i) {
      oct.insert(i,j,k,0xFF,tree);
    }
  }
}

//console.log(oct.march(-1000,0,0,1,0,0,tree));
//console.log(oct.march(1000,0,0,-1,0,0,tree));

//var t = empty();
//var hit = march(100,-512,0, -1,0,0, t);
//console.log(hit);
//for (var z = -16; z < 16; ++z) {
  //for (var y = -16; y < 16; ++y) {
    //for (var x = -16; x < 16; ++x) {
      //insert(x,y,z,1,t);
    //}
  //}
//}
//var s = 0;
//for (var i = 0; i < 5000000; ++i) {
  //s += march(60,0,0, -1,0,0, t).val;
//};
//console.log(s);
//console.log(march(-60,0,0, -1,0,0, t));

//console.log(
  //intersect(
    //511.99998474121094,0,0,
    //-1,0,0,
    //384,128,128,
    //256,256,256));
    
//console.log(
  //intersect(
    //9.9999,0,0,
    //-1,0,0,
    //0,0,0,
    //20,20,20));

//console.log(intersect(
  //0,0,0,
  //1,0,0,
  //0,0,0,
  //30,64,64));


//var t = empty();
//var L = 10000000;
//var T = Date.now();
//for (var i = 0; i < L; ++i) {
  //var x = i % 1024 - 512;
  //var y = Math.floor(i / 1024) % 1024 - 512;
  //var z = Math.floor(i / 1024 / 1024) - 512;
  //insert(x,y,z,1,t);
//}
//console.log((Date.now() - T)+"ms"); T = Date.now();
//var s = 0;
//for (var i = 0; i < L; ++i) {
  //var x = i % 1024 - 512;
  //var y = Math.floor(i / 1024) % 1024 - 512;
  //var z = Math.floor(i / 1024 / 1024) - 512;
  //s += lookup(x,y,z,t)&VAL;
//}
//console.log(s);
//console.log((Date.now() - T)+"ms"); T = Date.now();

//insert(0, 0, 0, 0x1, t);
//insert(1, 0, 0, 0x2, t);
//insert(0, 1, 0, 0x3, t);
//insert(1, 1, 0, 0x4, t);
//insert(0, 0, 1, 0x5, t);
//insert(1, 0, 1, 0x6, t);
//insert(0, 1, 1, 0x7, t);
//insert(1, 1, 1, 0x8, t);
//insert(1023, 1023, 1023, 0x9, t);
//console.log(show(t));
//console.log(lookup(2,0,0,t));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

module.exports = {now};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// HTML Rendering
const {Component, render} = __webpack_require__(0);
const h = __webpack_require__(4).h;
const oct = __webpack_require__(1);
const canvox = __webpack_require__(5);
const TA = __webpack_require__(6);
const extra = __webpack_require__(2);

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0};
  }
  componentDidMount() {
  }
  render() {
    return h("div", {
      style: {
        "position": "absolute",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
        "width": "100%",
        "margin": "2px",
        "font-size": "16px",
        "font-family": "monospace",
        "font-weight": "bold",
      },
      onClick: () => {
        this.setState({count: this.state.count + 1});
      }
    }, [
      h("span", {}, "Taelin Arena"),
    ])
  }
};

window.onload = () => {
  // Renders site using Inferno
  render(h(Main), document.getElementById("main"));

  // Creates canvas and inserts on page
  var canvas = canvox();
  document.body.appendChild(canvas);

  // Keys that are pressed
  var key = {};
  var refresh_game_pad = () => {
    var key_d = key.d||0;
    var key_a = key.a||0;
    var key_w = key.w||0;
    var key_s = key.s||0;
    var event = t => {
      var id = 0;
      var dir = t => {
        var x = (key_d||0) - (key_a||0);
        var y = (key_w||0) - (key_s||0);
        var z = 0;
        return t(x)(y)(0);
      }
      return t(id)(dir);
    };
    game = TA.input_game(event)(game);
  };
  document.body.onkeyup = (e) => {
    key[e.key] = 0;
    refresh_game_pad();
  };
  document.body.onkeypress = (e) => {
    key[e.key] = 1;
    refresh_game_pad();
  };

  // FPS metering
  var last_fps_print = extra.now();
  var fps_count = 0;

  // Initial state of the game
  var game = TA.demo_game;

  // Main loop of the game
  setInterval(function main_loop() {
    // Updates the FPS counter
    ++fps_count;
    if (extra.now() > last_fps_print + 1) {
      document.title = "FPS " + fps_count;
      fps_count = 0;
      last_fps_print = extra.now();
    };

    // Renders game to canvas
    TA.render_game(game, canvas);

    // Updates game state
    game = TA.tick_game(game);

  }, 1000 / 24);
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return o === void 0;
}

var classIdSplit = /([.#]?[a-zA-Z0-9_:-]+)/;
var notClassId = /^\.|#/;
function parseTag(tag, props) {
    if (!tag) {
        return 'div';
    }
    if (tag === inferno__WEBPACK_IMPORTED_MODULE_0__["Fragment"]) {
        return tag;
    }
    var noId = props && isUndefined(props.id);
    var tagParts = tag.split(classIdSplit);
    var tagName = null;
    if (notClassId.test(tagParts[1])) {
        tagName = 'div';
    }
    var classes;
    for (var i = 0, len = tagParts.length; i < len; ++i) {
        var part = tagParts[i];
        if (!part) {
            continue;
        }
        var type = part.charAt(0);
        if (!tagName) {
            tagName = part;
        }
        else if (type === '.') {
            if (classes === void 0) {
                classes = [];
            }
            classes.push(part.substring(1, part.length));
        }
        else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }
    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }
        props.className = classes.join(' ');
    }
    return tagName || 'div';
}
function isChildren(x) {
    return isStringOrNumber(x) || (x && isArray(x));
}
/**
 * Creates virtual node
 * @param {string|VNode|Function} _tag Name for virtual node
 * @param {object=} _props Additional properties for virtual node
 * @param {string|number|VNode|Array<string|number|VNode>|null=} _children Optional children for virtual node
 * @returns {VNode} returns new virtual node
 */
function h(_tag, _props, _children) {
    // If a child array or text node are passed as the second argument, shift them
    if (!_children && isChildren(_props)) {
        _children = _props;
        _props = {};
    }
    var isElement = isString(_tag);
    _props = _props || {};
    var tag = isElement ? parseTag(_tag, _props) : _tag;
    var newProps = {};
    var key = null;
    var ref = null;
    var children = null;
    var className = null;
    for (var prop in _props) {
        if (isElement && (prop === 'className' || prop === 'class')) {
            className = _props[prop];
        }
        else if (prop === 'key') {
            key = _props[prop];
        }
        else if (prop === 'ref') {
            ref = _props[prop];
        }
        else if (prop === 'hooks') {
            ref = _props[prop];
        }
        else if (prop === 'children') {
            children = _props[prop];
        }
        else if (!isElement && prop.substr(0, 11) === 'onComponent') {
            if (!ref) {
                ref = {};
            }
            ref[prop] = _props[prop];
        }
        else {
            newProps[prop] = _props[prop];
        }
    }
    if (isElement) {
        var flags = Object(inferno__WEBPACK_IMPORTED_MODULE_0__["getFlagsForElementVnode"])(tag);
        if (flags & 8192 /* Fragment */) {
            return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createFragment"])(_children || children, 0 /* UnknownChildren */, key);
        }
        if (newProps.contenteditable !== void 0) {
            flags |= 4096 /* ContentEditable */;
        }
        return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(flags, tag, className, _children || children, 0 /* UnknownChildren */, newProps, key, ref);
    }
    if (children || _children) {
        newProps.children = children || _children;
    }
    return Object(inferno__WEBPACK_IMPORTED_MODULE_0__["createComponentVNode"])(2 /* ComponentUnknown */, tag, newProps, key, ref);
}




/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const oct = __webpack_require__(1);

function build_voxel_octree(voxels) {
  var tree = oct.empty();
  for (var i = 0; i < voxels.length / 2; ++i) {
    var pos = voxels[i*2+0];
    var col = voxels[i*2+1];
    var vx  = ((pos >>> 20) & 0x3FF) - 512;
    var vy  = ((pos >>> 10) & 0x3FF) - 512;
    var vz  = ((pos >>>  0) & 0x3FF) - 512;
    var vr  = (col >>> 24) & 0xFF;
    var vg  = (col >>> 16) & 0xFF;
    var vb  = (col >>>  8) & 0xFF;
    var c   = vr | (vg<<8) | (vb<<16);
    oct.insert(vx,vy,vz,c,tree);
  }
  return tree;
};

function setup_cam(cam) {
  var W = window.innerWidth;
  var H = window.innerHeight;
  //var W = 300;
  //var H = 300;
  var T = Date.now()/1000;
  if (!cam) {
    //var ang = Math.PI * 1/4 + Math.sin(T) * Math.PI * 0.2;
    var ang = Math.PI * 1/4;
    //45 graus +- 36 pi
    //45-36 a 45+36

    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    var front = {x:0, y:cos, z:-sin};
    var right = {x:1, y:0, z:0};
    var down = {x:0, y:-sin, z:-cos};
    var pos = {x:0,y:-2048*cos,z:2048*sin};
    var cam = {
      pos   : pos, // center pos
      right : right, // right direction
      down  : down, // down direction
      front : front, // front direction
      size  : {x:W*0.5, y:H*0.5}, // world size
      port  : {x:W, y:H}, // browser size
      res   : 1.0, // rays_per_pixel = res^2
    };
  } else {
    var cam = cam;
  }
  return cam;
};

module.exports = function canvox(opts = {}) {
  const mode = window.mode || opts.mode || "GPU";

  var canvas = document.createElement("canvas");
  //canvas.style.border = "1px solid gray";
  canvas.style["image-rendering"] = "pixelated";

  // CPU MODE
  if (mode === "CPU") {
    var context = canvas.getContext("2d");
    canvas.draw = ({voxels, cam}) => {
      // Camera and viewport
      var cam = setup_cam(opts.cam);

      // Canvas setup
      canvas.width = cam.size.x * cam.res;
      canvas.height = cam.size.y * cam.res;
      canvas.style.width = cam.port.x + "px";
      canvas.style.height = cam.port.y + "px";
      if (!canvas.image_data) {
        canvas.image_data = context.getImageData(0, 0, canvas.width, canvas.height);
        canvas.image_buf = new ArrayBuffer(canvas.image_data.data.length);
        canvas.image_u8 = new Uint8ClampedArray(canvas.image_buf);
        canvas.image_u32 = new Uint32Array(canvas.image_buf);
      }

      // Builds voxel octree
      var tree = build_voxel_octree(voxels);

      // For each pixel on the screen
      var dx = 2 / (cam.size.x * cam.res);
      var dy = 2 / (cam.size.y * cam.res);
      for (var scr_pos_y = -1; scr_pos_y <= 1; scr_pos_y += dy) {
        for (var scr_pos_x = -1; scr_pos_x < 1; scr_pos_x += dx) {

          // Computes ray position
          var ray_pos_x = cam.pos.x;
          var ray_pos_y = cam.pos.y;
          var ray_pos_z = cam.pos.z;
          ray_pos_x += cam.right.x*cam.size.x*scr_pos_x*0.5;
          ray_pos_y += cam.right.y*cam.size.x*scr_pos_x*0.5;
          ray_pos_z += cam.right.z*cam.size.x*scr_pos_x*0.5;
          ray_pos_x += cam.down.x *cam.size.y*scr_pos_y*0.5;
          ray_pos_y += cam.down.y *cam.size.y*scr_pos_y*0.5;
          ray_pos_z += cam.down.z *cam.size.y*scr_pos_y*0.5;

          // Computes ray direction
          var ray_dir_x = cam.front.x;
          var ray_dir_y = cam.front.y;
          var ray_dir_z = cam.front.z;

          // Performs the march
          var hit = oct.march(
            ray_pos_x, ray_pos_y, ray_pos_z,
            ray_dir_x, ray_dir_y, ray_dir_z,
            tree);

          // Renders to screen
          var j = Math.floor((scr_pos_y+1)/2*(cam.size.y*cam.res));
          var i = Math.floor((scr_pos_x+1)/2*(cam.size.x*cam.res));
          var n = j * Math.floor(cam.size.x*cam.res) + i;
          switch (hit.ctr) {
            case oct.HIT:
              var pos = hit.pos;
              var col = hit.val & oct.VAL;
              canvas.image_u32[n] = col | 0xFF000000;
              break;
            default:
              canvas.image_u32[n] = 0;
              break;
          }
        }
      }

      // Draws buffers to screen
      canvas.image_data.data.set(canvas.image_u8);
      context.putImageData(canvas.image_data, 0, 0);
    };
    return canvas;
  };

  // GPU MODE
  if (mode === "GPU") {
    var gl = canvas.getContext('webgl2');

    var vertices = [-1,1,0,-1,-1,0,1,-1,0,-1,1,0,1,1,0,1,-1,0,];
    var indices = [0,1,2,3,4,5];

    var vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var index_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    // Vertex shader source code
    var vert_code = `#version 300 es
      in vec3 coordinates;
      out vec3 scr_pos;
      void main(void) {
        scr_pos = coordinates;
        scr_pos.y = - scr_pos.y;
        gl_Position = vec4(coordinates, 1.0);
      }
    `;

    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vert_code);
    gl.compileShader(vertShader);

    var frag_code = `#version 300 es
      precision mediump float;
      precision mediump sampler2D;

      in vec3 scr_pos;
      out vec4 outColor;

      uniform vec3 cam_pos;
      uniform vec3 cam_right;
      uniform vec3 cam_down;
      uniform vec3 cam_front;
      uniform vec2 scr_siz;

      uniform sampler2D octree;

      const float inf = 65536.0;
      const float eps = 0.0009765625;

      const uint CTR = 0xC0000000u;
      const uint VAL = 0x3FFFFFFFu;
      const uint NIL = 0x00000000u;
      const uint TIP = 0x40000000u;
      const uint OCT = 0x80000000u;
      const uint NOP = 0x00000000u;
      const uint GOT = 0x40000000u;
      const uint HIT = 0u;
      const uint PAS = 1u;
      const uint MIS = 2u;

      float div(float a, float b, float k) {
        if (b == 0.0) {
          return a > 0.0 ? inf : a < 0.0 ? -inf : k;
        } else {
          return a / b;
        }
      }

      float intersect(vec3 ray_pos, vec3 ray_dir, vec3 box_pos, vec3 box_siz) {
        vec3 box_min = box_pos - box_siz * 0.5;
        vec3 box_max = box_pos + box_siz * 0.5;
        float t1 = div(box_min.x - ray_pos.x, ray_dir.x, -inf);
        float t2 = div(box_max.x - ray_pos.x, ray_dir.x, inf);
        float t3 = div(box_min.y - ray_pos.y, ray_dir.y, -inf);
        float t4 = div(box_max.y - ray_pos.y, ray_dir.y, inf);
        float t5 = div(box_min.z - ray_pos.z, ray_dir.z, -inf);
        float t6 = div(box_max.z - ray_pos.z, ray_dir.z, inf);
        float t7 = max(max(min(t1, t2), min(t3, t4)), min(t5, t6));
        float t8 = min(min(max(t1, t2), max(t3, t4)), max(t5, t6));
        float t9 = (t8 < 0.0 || t7 > t8) ? inf : t7 < 0.0 ? t8 : t7;
        return t9;
      }

      uint vec4_to_uint(vec4 v) {
        return 
          ( (uint(v.x*255.0) << 0u)
          | (uint(v.y*255.0) << 8u)
          | (uint(v.z*255.0) << 16u)
          | (uint(v.w*255.0) << 24u));
      }

      vec4 uint_to_vec4(uint u) {
        float x = float((u >> 0) & 0xFFu);
        float y = float((u >> 8) & 0xFFu);
        float z = float((u >> 16) & 0xFFu);
        float w = float((u >> 24) & 0xFFu);
        return vec4(x,y,z,w)/255.0;
      }

      uint get(sampler2D arr, uint idx) {
        float x = float(idx & 0x7FFu) / 2048.0;
        float y = float((idx >> 11) & 0x7FFu) / 2048.0;
        vec4 col = texture(arr, vec2(x,y));
        return vec4_to_uint(col);
      }

      uint lookup(sampler2D octree, vec3 pos) {
        uint px = uint(floor(pos.x) + 512.0);
        uint py = uint(floor(pos.y) + 512.0);
        uint pz = uint(floor(pos.z) + 512.0);
        uint idx = 0u;
        for (uint bit = 9u; bit >= 0u; bit = bit - 1u) {
          uint slt
            = (((px >> bit) & 1u) << 2u)
            | (((py >> bit) & 1u) << 1u)
            | (((pz >> bit) & 1u) << 0u);
          uint nod = get(octree, idx + slt);
          if (bit == 0u) {
            return nod;
          } else {
            uint ctr = nod & CTR;
            if (ctr != NIL) {
              idx = nod & VAL;
            } else {
              return NOP | bit;
            }
          }
        }
      }

      struct Hit {
        uint ctr;
        vec3 pos; 
        uint val;
      };

      Hit march(vec3 ray, vec3 dir, sampler2D octree) {
        Hit hit;
        // Enters the octree
        if ( ray.x >=  512.0 || ray.y >=  512.0 || ray.z >=  512.0
          || ray.x <= -512.0 || ray.y <= -512.0 || ray.z <= -512.0) {
          float ht = intersect(ray, dir, vec3(0.0), vec3(1024.0));
          if (ht != inf) {
            ray.x = ray.x + dir.x * ht + dir.x * eps;
            ray.y = ray.y + dir.y * ht + dir.y * eps;
            ray.z = ray.z + dir.z * ht + dir.z * eps;
          } else {
            hit.ctr = MIS;
            return hit;
          }
        }
        // Marches through it
        while (
          !( ray.x >=  512.0 || ray.y >=  512.0 || ray.z >=  512.0
          || ray.x <= -512.0 || ray.y <= -512.0 || ray.z <= -512.0)) {
          ray.x += dir.x * eps;
          ray.y += dir.y * eps;
          ray.z += dir.z * eps;
          uint got = lookup(octree, ray);
          if ((got&CTR) == NOP) {
            uint lv = 10u - (got & VAL);
            float bl = float(1024u >> lv);
            float bq = 1.0 / float(bl);
            float bx = (floor((ray.x+512.0)*bq)+0.5)*bl-512.0;
            float by = (floor((ray.y+512.0)*bq)+0.5)*bl-512.0;
            float bz = (floor((ray.z+512.0)*bq)+0.5)*bl-512.0;
            float ht = intersect(ray,dir,vec3(bx,by,bz),vec3(bl));
            if (ht != inf) {
              ray.x = ray.x + dir.x * ht;
              ray.y = ray.y + dir.y * ht;
              ray.z = ray.z + dir.z * ht;
            } else {
              break;
            }
          } else {
            hit.ctr = HIT;
            hit.pos = ray;
            hit.val = got & VAL;
            return hit;
          }
        }
        // Passed through
        hit.ctr = PAS;
        hit.pos = ray - dir * eps;
        return hit;
      }

      void main(void) {
        // Computes ray pos and dir
        vec3 ray_pos;
        vec3 ray_dir;
        ray_pos = cam_pos;
        ray_pos = ray_pos + cam_right*scr_siz.x*scr_pos.x*0.5;
        ray_pos = ray_pos + cam_down*scr_siz.y*scr_pos.y*0.5;
        ray_dir = cam_front;

        //ray_pos = vec3(0.0, -1000.0, 0.0);
        //ray_dir = vec3(0.0, 1.0, 0.0);

        // Marches towards octree
        Hit hit = march(ray_pos, ray_dir, octree);

        // If it hit a voxel, draw it
        if (hit.ctr == HIT) {
          vec4 col = uint_to_vec4(hit.val);
          outColor = vec4(vec3(col),1.0);
          //outColor = vec4(1.0,0.5,0.5,1.0);
        //} else if (hit.ctr == MIS) {
          //outColor = vec4(0.9,1.0,0.9,1.0);
        //} else if (hit.ctr == PAS) {
          //outColor = vec4(0.9,0.9,1.0,1.0);
        //}
        } else {
          outColor = vec4(0.0);
        }
      }
    `;

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, frag_code); 
    gl.compileShader(fragShader);

    var compiled = gl.getShaderParameter(vertShader, gl.COMPILE_STATUS);
    console.log('Shader compiled successfully: ' + compiled);
    var compilationLog = gl.getShaderInfoLog(vertShader);
    console.log('Shader compiler log: ' + compilationLog);
    var compiled = gl.getShaderParameter(fragShader, gl.COMPILE_STATUS);
    console.log('Shader compiled successfully: ' + compiled);
    var compilationLog = gl.getShaderInfoLog(fragShader);
    console.log('Shader compiler log: ' + compilationLog);

    var shader = gl.createProgram();
    gl.attachShader(shader, vertShader);
    gl.attachShader(shader, fragShader);
    gl.linkProgram(shader);
    gl.useProgram(shader);

    // ======= Input texture =======

    var texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 2048, 2048, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(gl.getUniformLocation(shader, "octree"), texture);

    // ======= Octree data buffer =======
    
    var octree_buffer = new Uint32Array(2048*2048);

    // ======= Associating shaders to buffer objects =======

    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

    // Get the attribute location
    var coord = gl.getAttribLocation(shader, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 
    gl.enableVertexAttribArray(coord);
      
    canvas.draw = function({voxels,cam}) {
      var cam = setup_cam(cam);

      // Canvas setup
      // TODO: why odd widths won't work?
      canvas.width = cam.size.x * cam.res;
      canvas.height = cam.size.y * cam.res;
      canvas.width -= canvas.width % 2;
      canvas.height -= canvas.height % 2;
      canvas.style.width = cam.port.x + "px";
      canvas.style.height = cam.port.y + "px";

      // Builds voxel octree
      var tree = build_voxel_octree(voxels);

      // Copies data to octree buffer
      for (var i = 0; i < tree.length; ++i) {
        octree_buffer[i] = tree[i] >>> 0;
      }

      // Uploads octree to GPU
      var buff = new Uint8Array(octree_buffer.buffer);
      var size = [2048, 2048];
      gl.texSubImage2D(
        gl.TEXTURE_2D, 0, 0,0, ...size,
        gl.RGBA, gl.UNSIGNED_BYTE, buff);

      // Uploads camera to GPU
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_pos"),
        [cam.pos.x, cam.pos.y, cam.pos.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_right"),
        [cam.right.x, cam.right.y, cam.right.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_down"),
        [cam.down.x, cam.down.y, cam.down.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_front"),
        [cam.front.x, cam.front.y, cam.front.z]);
      gl.uniform2fv(
        gl.getUniformLocation(shader,"scr_siz"),
        [cam.size.x, cam.size.y]);

      // Renders screen
      gl.viewport(0,0,canvas.width,canvas.height);
      gl.clearColor(0.5, 0.5, 0.5, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);
    };

    return canvas;
  };
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const TA = __webpack_require__(7);
const extra = __webpack_require__(2);
const {models} = __webpack_require__(8);

function render_game(game, canvox) {
  // Gets the current time
  var T = extra.now();

  // Gets the main hero position
  var hero_pos = TA.get_position_by_id(0, game);

  // Creates list of voxels
  var voxels = [];

  // Renders each game object
  TA.map_game_objects(function(object) {
    // Gets the object fields
    var id = TA.get_object_id(object);
    var hp = TA.get_object_hp(object);
    var pos = TA.get_object_pos(object);
    var dir = TA.get_object_dir(object);
    var vel = TA.get_object_vel(object);
    var box = TA.get_object_box(object);
    var spr = TA.get_object_spr(object);
    var [dir_x,dir_y,dir_z] = dir(x=>y=>z=>([x,y,z]));
    var [pos_x,pos_y,pos_z] = pos(x=>y=>z=>([x,y,z]));

    // Computes the object facing angle
    var ang = Math.atan2(dir_y, dir_x);
    var ang = ang + Math.PI*0.5;

    // Gets the object model and current frame
    var anim_id = spr(anim_id => anim_id);
    var model = models[anim_id||0];
    var feet = model.pivot.z;
    var frames = model.frames.length;
    var frame = model.frames[Math.floor((T*10) % frames)];

    // Renders each voxel of the frame
    for (var i = 0; i < frame.length; ++i) {
      var [{x,y,z},col] = frame[i];
      var cx = pos_x;
      var cy = pos_y;
      var cz = pos_z;
      var px = cx + x;
      var py = cy + y;
      var pz = cz + z;
      var pl = Math.sqrt((px-cx)**2+(py-cy)**2);
      var pa = Math.atan2(py-cy,px-cx);
      var px = cx + pl * Math.cos(pa + ang) + 0.5;
      var py = cy + pl * Math.sin(pa + ang) + 0.5;
      var pz = cz + z;
      var pos = (px+512)<<20 | (py+512)<<10 | (pz+512);
      var col = col | 0x000000FF;
      voxels[voxels.length] = pos;
      voxels[voxels.length] = col;
    }

    // Renders hitbox (for debugging)
    let case_circbox = (rad) => {
      for (var j = -rad; j <= rad; ++j) {
        for (var i = -rad; i <= rad; ++i) {
          if (i*i+j*j < rad*rad) {
            var px = pos_x + i;
            var py = pos_y + j;
            var pz = -64;
            var pos = (px+512)<<20 | (py+512)<<10 | (pz+512);
            var col = 0xE0E0FFFF;
            voxels[voxels.length] = pos;
            voxels[voxels.length] = col;
          }
        }
      }
    };
    let case_polybox = (pts) => {
    };
    box(case_circbox)(case_polybox);
  })(game);

  canvox.draw({voxels});
};

module.exports = {
  ...TA,
  render_game,
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = (function(){
  var _TaelinArena$Hitbox = undefined;
  var _TaelinArena$circbox = (_0=>(_1=>(_2=>_1(_0))));
  var _TaelinArena$polybox = (_0=>(_1=>(_2=>_2(_0))));
  var _TaelinArena$ObjectId = undefined;
  var _TaelinArena$Sprite = undefined;
  var _TaelinArena$sprite = (_0=>(_1=>_1(_0)));
  var _TaelinArena$GameObject = undefined;
  var _TaelinArena$game_object = (_0=>(_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_8(_0)(_1)(_2)(_3)(_4)(_5)(_6)(_7))))))))));
  var _TaelinArena$mut_object_fields = (_0=>(_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_8((_9=>(_10=>(_11=>(_12=>(_13=>(_14=>(_15=>(_16=>_TaelinArena$game_object(_0(_9))(_1(_10))(_2(_11))(_3(_12))(_4(_13))(_5(_14))(_6(_15))(_7(_16))))))))))))))))))));
  var _TaelinArena$get_object_id = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_1))))))))));
  var _TaelinArena$get_object_hp = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_2))))))))));
  var _TaelinArena$get_object_pos = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_3))))))))));
  var _TaelinArena$get_object_spd = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_4))))))))));
  var _TaelinArena$get_object_dir = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_5))))))))));
  var _TaelinArena$get_object_vel = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_6))))))))));
  var _TaelinArena$get_object_box = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_7))))))))));
  var _TaelinArena$get_object_spr = (_0=>_0((_1=>(_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>_8))))))))));
  var _Function$3v_K$id = (_2=>_2);
  var _TaelinArena$mut_object_id = (_0=>(_1=>_TaelinArena$mut_object_fields(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_hp = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_pos = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_spd = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_dir = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_vel = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_box = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_Function$3v_K$id)(_1)));
  var _TaelinArena$mut_object_spr = (_0=>(_1=>_TaelinArena$mut_object_fields(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_Function$3v_K$id)(_0)(_1)));
  var _List$HQNc$List = (_0=>undefined);
  var _TaelinArena$GameMap = _List$HQNc$List(_TaelinArena$GameObject);
  var _Maybe$rXzW$none = (_2=>(_3=>_2));
  var _Maybe$rXzW$some = (_12=>(_13=>(_14=>_14(_12))));
  var _TaelinArena$get_object_from_map = (_0=>(_1=>_1(_Maybe$rXzW$none)((_2=>(_3=>_2((_4=>(_5=>(_6=>(_7=>(_8=>(_9=>(_10=>(_11=>((_4===_0? 1 : 0)?_Maybe$rXzW$some(_2):_TaelinArena$get_object_from_map(_0)(_3))))))))))))))));
  var _TaelinArena$Game = undefined;
  var _TaelinArena$game = (_0=>(_1=>_1(_0)));
  var _TaelinArena$get_game_map = (_0=>_0((_1=>_1)));
  var _TaelinArena$get_object_by_id = (_0=>(_1=>_1((_2=>_TaelinArena$get_object_from_map(_0)(_2)))));
  var _Geometry$v3 = (_2=>(_3=>(_4=>(_5=>_5(_2)(_3)(_4)))));
  var _TaelinArena$get_position_by_id = (_0=>(_1=>_TaelinArena$get_object_by_id(_0)(_1)(_Geometry$v3(0)(0)(0))((_2=>_TaelinArena$get_object_pos(_2)))));
  var _TaelinArena$SRPX = 0;
  var _TaelinArena$STANCI = 1;
  var _TaelinArena$NEELIX = 2;
  var _TaelinArena$BELANNA = 3;
  var _TaelinArena$srpx = _TaelinArena$game_object(0)(70)(_Geometry$v3(0)(0)(0))(0)(_Geometry$v3(0)(-1)(0))(_Geometry$v3(0)(0)(0))(_TaelinArena$circbox(12))(_TaelinArena$sprite(0));
  var _TaelinArena$stanci = _TaelinArena$game_object(1)(90)(_Geometry$v3(64)(0)(0))(0)(_Geometry$v3(-1)(0)(0))(_Geometry$v3(0)(0)(0))(_TaelinArena$circbox(10))(_TaelinArena$sprite(1));
  var _TaelinArena$neelix = _TaelinArena$game_object(2)(700)(_Geometry$v3(-64)(0)(0))(0)(_Geometry$v3(-1)(0)(0))(_Geometry$v3(0)(0)(0))(_TaelinArena$circbox(8))(_TaelinArena$sprite(2));
  var _TaelinArena$belanna = _TaelinArena$game_object(3)(80)(_Geometry$v3(0)(64)(0))(0)(_Geometry$v3(-1)(0)(0))(_Geometry$v3(0)(0)(0))(_TaelinArena$circbox(12))(_TaelinArena$sprite(3));
  var _List$HQNc$cons = (_0=>(_1=>(_2=>(_3=>_3(_0)(_1)))));
  var _List$HQNc$nil = (_0=>(_1=>_0));
  var _TaelinArena$demo_game = _TaelinArena$game(_List$HQNc$cons(_TaelinArena$srpx)(_List$HQNc$cons(_TaelinArena$stanci)(_List$HQNc$cons(_TaelinArena$neelix)(_List$HQNc$cons(_TaelinArena$belanna)(_List$HQNc$nil)))));
  var _TaelinArena$GameEvent = undefined;
  var _TaelinArena$game_move = (_0=>(_1=>(_2=>_2(_0)(_1))));
  var _Extra$map_list = (_2=>(_3=>_3(_List$HQNc$nil)((_4=>(_5=>_List$HQNc$cons(_2(_4))(_Extra$map_list(_2)(_5)))))));
  var _TaelinArena$map_game_objects = (_0=>(_1=>_TaelinArena$game(_Extra$map_list(_0)(_TaelinArena$get_game_map(_1)))));
  var _Geometry$len_v3 = (_13=>_13((_14=>(_15=>(_16=>((((0+(_14*_14))+(_15*_15))+(_16*_16))**0.5))))));
  var _TaelinArena$input_game = (_0=>(_1=>_0((_2=>(_3=>_TaelinArena$map_game_objects((_4=>_4((_5=>(_6=>(_7=>(_8=>(_9=>(_10=>(_11=>(_12=>((_2===_5? 1 : 0)?_TaelinArena$mut_object_spd(((_Geometry$len_v3(_3)===0? 1 : 0)?(_13=>0):(_13=>4)))(_TaelinArena$mut_object_dir(((_Geometry$len_v3(_3)===0? 1 : 0)?(_13=>_13):(_13=>_3)))(_4)):_4))))))))))))(_1))))));
  var _Geometry$sqrdist_v3 = (_22=>(_23=>_22((_24=>(_25=>(_26=>_23((_27=>(_28=>(_29=>(((0+((_24-_27)**2))+((_25-_28)**2))+((_26-_29)**2))))))))))));
  var _Geometry$dist_v3 = (_20=>(_21=>(_Geometry$sqrdist_v3(_20)(_21)**0.5)));
  var _Geometry$add_v3 = (_21=>(_22=>_21((_23=>(_24=>(_25=>_22((_26=>(_27=>(_28=>_Geometry$v3((_23+_26))((_24+_27))((_25+_28))))))))))));
  var _Geometry$scale_v3 = (_21=>(_22=>_22((_23=>(_24=>(_25=>_Geometry$v3((_23*_21))((_24*_21))((_25*_21))))))));
  var _Geometry$norm_v3 = (_21=>_21((_22=>(_23=>(_24=>_Geometry$v3((_22/_Geometry$len_v3(_21)))((_23/_Geometry$len_v3(_21)))((_24/_Geometry$len_v3(_21))))))));
  var _Geometry$sub_v3 = (_21=>(_22=>_21((_23=>(_24=>(_25=>_22((_26=>(_27=>(_28=>_Geometry$v3((_23-_26))((_24-_27))((_25-_28))))))))))));
  var _TaelinArena$interact_with = (_0=>(_1=>_0((_2=>(_3=>(_4=>(_5=>(_6=>(_7=>(_8=>(_9=>_1((_10=>(_11=>(_12=>(_13=>(_14=>(_15=>(_16=>(_17=>_8((_18=>_16((_19=>(((_Geometry$dist_v3(_4)(_12)>_19)&(_Geometry$dist_v3(_4)(_12)<(_18+_19)))?_TaelinArena$mut_object_pos((_20=>_Geometry$add_v3(_4)(_Geometry$scale_v3(((_18+_19)-_Geometry$dist_v3(_4)(_12)))(_Geometry$norm_v3(_Geometry$sub_v3(_4)(_12))))))(_0):_0)))((_19=>_0))))((_18=>_0))))))))))))))))))))));
  var _Extra$fold_list = (_11=>(_12=>(_13=>_13(_11)((_14=>(_15=>_12(_14)(_Extra$fold_list(_11)(_12)(_15))))))));
  var _TaelinArena$tick_game = (_0=>_0((_1=>_TaelinArena$game(_Extra$map_list((_2=>_2((_3=>(_4=>(_5=>(_6=>(_7=>(_8=>(_9=>(_10=>_Extra$fold_list(_TaelinArena$game_object(_3)(_4)(_Geometry$add_v3(_5)(_Geometry$scale_v3(_6)(_7)))(_6)(_7)(_8)(_9)(_10))((_11=>(_12=>_TaelinArena$interact_with(_12)(_11))))(_1))))))))))))(_1)))));
  return {
    'Hitbox':_TaelinArena$Hitbox,
    'circbox':_TaelinArena$circbox,
    'polybox':_TaelinArena$polybox,
    'ObjectId':_TaelinArena$ObjectId,
    'Sprite':_TaelinArena$Sprite,
    'sprite':_TaelinArena$sprite,
    'GameObject':_TaelinArena$GameObject,
    'game_object':_TaelinArena$game_object,
    'mut_object_fields':_TaelinArena$mut_object_fields,
    'get_object_id':_TaelinArena$get_object_id,
    'get_object_hp':_TaelinArena$get_object_hp,
    'get_object_pos':_TaelinArena$get_object_pos,
    'get_object_spd':_TaelinArena$get_object_spd,
    'get_object_dir':_TaelinArena$get_object_dir,
    'get_object_vel':_TaelinArena$get_object_vel,
    'get_object_box':_TaelinArena$get_object_box,
    'get_object_spr':_TaelinArena$get_object_spr,
    'mut_object_id':_TaelinArena$mut_object_id,
    'mut_object_hp':_TaelinArena$mut_object_hp,
    'mut_object_pos':_TaelinArena$mut_object_pos,
    'mut_object_spd':_TaelinArena$mut_object_spd,
    'mut_object_dir':_TaelinArena$mut_object_dir,
    'mut_object_vel':_TaelinArena$mut_object_vel,
    'mut_object_box':_TaelinArena$mut_object_box,
    'mut_object_spr':_TaelinArena$mut_object_spr,
    'GameMap':_TaelinArena$GameMap,
    'get_object_from_map':_TaelinArena$get_object_from_map,
    'Game':_TaelinArena$Game,
    'game':_TaelinArena$game,
    'get_game_map':_TaelinArena$get_game_map,
    'get_object_by_id':_TaelinArena$get_object_by_id,
    'get_position_by_id':_TaelinArena$get_position_by_id,
    'SRPX':_TaelinArena$SRPX,
    'STANCI':_TaelinArena$STANCI,
    'NEELIX':_TaelinArena$NEELIX,
    'BELANNA':_TaelinArena$BELANNA,
    'srpx':_TaelinArena$srpx,
    'stanci':_TaelinArena$stanci,
    'neelix':_TaelinArena$neelix,
    'belanna':_TaelinArena$belanna,
    'demo_game':_TaelinArena$demo_game,
    'GameEvent':_TaelinArena$GameEvent,
    'game_move':_TaelinArena$game_move,
    'map_game_objects':_TaelinArena$map_game_objects,
    'input_game':_TaelinArena$input_game,
    'interact_with':_TaelinArena$interact_with,
    'tick_game':_TaelinArena$tick_game
  };
})()

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const spritestack = __webpack_require__(9);

const load_model = name => {
  var model_json = __webpack_require__(10)("./"+name+".json");
  return spritestack.model_to_voxels(model_json);
};

var CRONI_IDLE = 0;
var LYN_IDLE = 1;
var FANTASY_IDLE = 2;
var ARCHER_IDLE = 3;

var models = {
  [CRONI_IDLE]: {
    pivot: {x:0, y:0, z:-64},
    frames: [
      load_model("croni_idle0"),
      load_model("croni_idle1"),
      load_model("croni_idle2"),
      load_model("croni_idle3"),
      load_model("croni_idle4"),
      load_model("croni_idle5"),
      load_model("croni_idle6"),
      load_model("croni_idle7"),
      load_model("croni_idle8"),
      load_model("croni_idle9"),
      load_model("croni_idle10"),
      load_model("croni_idle11"),
    ]
  },
  [LYN_IDLE]: {
    pivot: {x:0, y:0, z:-56},
    frames: [load_model("lyn")]
  },
  [FANTASY_IDLE]: {
    pivot: {x:0, y:0, z:-64},
    frames: [load_model("fantasy")]
  },
  [ARCHER_IDLE]: {
    pivot: {x:0, y:0, z:-64},
    frames: [load_model("archer")]
  },
};

module.exports = {
  CRONI_IDLE,
  LYN_IDLE,
  FANTASY_IDLE,
  ARCHER_IDLE,
  models,
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// Receives a SpriteStack model, returns an array of voxels
// in the format [[{x:x0,y:y0,z:z0},col], ...].
function model_to_voxels(model) {
  var voxels = [];

  var col = (model.palette[1]) | 0xFF;
  var r = Math.floor(col / 65536);
  var g = Math.floor(col / 256) % 256;
  var b = col % 256;

  //var K = Infinity;
  // A model has many parts
  for (var m = 0; m < model.parts.length; ++m) {

    // Each part has a data array storing 64x64x64 color ids
    var data = model.parts[m].data;
    var size = model.size;
    for (var i = 0, d = 0; d < data.length; ++d) {
      var val = data[d];

      // When an element of the array is negative, it isn't
      // a color id (cid), but a number of times to repeat
      // the next color id; this is a micro-compression
      if (val < 0) {
        var len = Math.abs(val);
        var cid = data[++d];
      } else {
        var len = 1;
        var cid = val;
      }

      // If the color id isn't zero, then the actual color
      // is stored on `model.pallete[col - 1]`, so we
      // get it, together with its position, and add
      if (cid !== 0) {
        for (var k = 0; k < len; ++k) {
          var n = i + k;
          var x = n % size[0] - size[0]/2;
          var y = ((n/size[0])>>>0) % size[0] - size[1]/2;
          var z = ((n/(size[0]*size[1]))>>>0) - size[2]/2;
          var pos = {x,y,z};
          var col = (model.palette[cid-1]<<8) | 0xFF;
          //K = Math.min(z,K);
          //var r = Math.floor(col / 65536);
          //var g = Math.floor(col / 256) % 256;
          //var b = col % 256;
          //var col = {r,g,b};
          //var col = 0xFF000000;
          //var col = col + r;
          //var col = col + (g << 8);
          //var col = col + (b << 16);
          voxels.push([pos,col]);
          //console.log(x,y,z);
        }
      }

      i += len;
    }
  }
  //console.log("->",K);

  return voxels;
};

module.exports = {model_to_voxels};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./archer.json": 11,
	"./chair.json": 12,
	"./croni_idle0.json": 13,
	"./croni_idle1.json": 14,
	"./croni_idle10.json": 15,
	"./croni_idle11.json": 16,
	"./croni_idle12.json": 17,
	"./croni_idle2.json": 18,
	"./croni_idle3.json": 19,
	"./croni_idle4.json": 20,
	"./croni_idle5.json": 21,
	"./croni_idle6.json": 22,
	"./croni_idle7.json": 23,
	"./croni_idle8.json": 24,
	"./croni_idle9.json": 25,
	"./cylinder.json": 26,
	"./fantasy.json": 27,
	"./ferumbras.json": 28,
	"./lyn.json": 29,
	"./wizard.json": 30,
	"./wizard_of_legends.json": 31,
	"./xtest.json": 32
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 10;

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[56,71,56,70,0,34],\"size\":[128,128,128],\"data\":[-7483,0,-4,1,-124,0,-4,1,-124,0,-4,1,-763,0,1,0,-4,1,-122,0,1,0,-4,1,-122,0,1,0,-4,1,-15097,0,1,8,-3,1,-123,0,1,8,-3,1,-123,0,1,8,-3,1,-764,0,-5,1,-123,0,-5,1,-123,0,-5,1,-15098,0,-3,1,-125,0,-3,1,-125,0,-3,1,-766,0,-4,1,-124,0,-4,1,-124,0,-4,1,-15099,0,-3,1,-125,0,-2,1,2,1,-124,0,-4,1,-765,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15101,0,1,-2,8,-125,0,1,2,8,-125,0,1,-2,8,-765,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15102,0,8,-127,0,8,-2,3,-125,0,8,-2,3,-764,0,-3,8,-125,0,-3,8,-125,0,-3,8,-15231,0,-2,3,-126,0,-2,3,-764,0,-2,3,-126,0,-2,3,-15103,0,-2,2,-126,0,-2,2,-127,0,-2,3,-126,0,-2,3,-764,0,-2,3,-126,0,-2,3,-391,0,-5,10,-14708,0,-2,2,-126,0,-2,2,-127,0,-2,3,-126,0,-2,3,-763,0,-3,3,-125,0,-3,3,-388,0,-3,10,0,2,-14710,0,-3,2,-125,0,-3,2,-126,0,-2,3,-126,0,-2,3,-636,0,-3,3,-125,0,-2,3,-126,0,-2,3,-386,0,-3,10,-3,0,2,-14711,0,-3,2,-125,0,-3,2,-125,0,-2,3,-126,0,-3,3,-125,0,-3,3,-506,0,-4,3,-124,0,-4,3,-512,0,-2,10,-4,0,2,-14712,0,-4,2,-124,0,-4,2,-124,0,-2,3,-2,2,-124,0,-3,3,-125,0,-3,3,-378,0,-3,3,-125,0,-4,3,-124,0,-4,3,-511,0,-2,10,-5,0,2,-14713,0,-3,2,-124,0,-5,2,-123,0,-3,3,-2,2,-123,0,-2,3,6,-125,0,-3,6,-378,0,-3,6,-125,0,6,-2,3,6,-124,0,-2,6,3,6,-126,0,6,-383,0,-2,10,-5,0,2,-14584,0,3,-127,0,-2,3,0,-2,2,-121,0,-2,2,-4,1,-2,4,-120,0,1,-2,0,6,3,-2,1,2,-119,0,1,-3,0,6,3,-2,1,-120,0,1,-3,0,6,0,-2,1,-120,0,1,-3,0,6,0,-2,1,-120,0,1,-5,0,-2,1,-119,0,1,0,-3,6,-2,0,-2,1,-119,0,-2,1,-3,3,6,-3,1,-119,0,-2,1,-4,3,-2,1,-121,0,-7,1,-253,0,3,-126,0,10,3,-5,0,2,-14583,0,10,-3,3,-124,0,10,-3,3,-251,0,2,-5,1,-121,0,-7,1,2,-120,0,-7,1,2,-120,0,-7,1,2,-120,0,-7,1,-121,0,-2,1,-2,3,-3,1,-121,0,-2,1,-2,3,-3,1,-121,0,-2,1,-2,0,-3,1,-122,0,-5,1,-123,0,-2,3,-126,0,-4,3,-125,0,-2,10,3,-4,0,2,-14583,0,-2,3,10,-125,0,-2,3,10,-255,0,-4,1,-122,0,2,-5,1,-121,0,-7,1,-121,0,-7,1,-121,0,-6,1,2,-121,0,-6,1,2,-122,0,-5,1,-123,0,-5,1,-250,0,-3,3,-125,0,-3,3,-127,0,10,-6,0,2,-14583,0,-2,3,-126,0,-2,3,-382,0,2,-4,1,-122,0,-6,1,-122,0,-6,1,-122,0,-6,1,-122,0,-6,1,-123,0,-4,1,2,-377,0,-3,3,-125,0,-3,3,-128,0,10,-5,0,2,-14584,0,-2,3,-126,0,-2,3,-383,0,-3,1,-124,0,-4,2,1,-123,0,1,-3,2,1,-123,0,1,-3,2,1,-123,0,1,-3,2,1,-124,0,-2,1,2,-378,0,-2,3,-126,0,-2,3,-128,0,10,-6,0,2,-14583,0,-2,3,-126,0,-2,3,-512,0,-3,2,-125,0,-3,2,-125,0,-3,2,-125,0,-3,2,-379,0,-2,3,-125,0,-3,3,-125,0,-2,3,-128,0,10,-5,0,2,-14584,0,-2,3,-126,0,-2,3,-384,0,-3,2,5,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-3,2,5,-250,0,-2,3,-126,0,-2,3,-255,0,10,-5,0,2,-14584,0,-2,3,-126,0,-3,3,-126,0,-2,3,-131,0,7,-123,0,-4,2,7,-123,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,7,-122,0,-2,3,-3,0,7,-121,0,-3,3,-125,0,-2,3,-254,0,-2,10,-4,0,2,-14714,0,-2,3,-126,0,-3,3,-126,0,-2,3,0,-2,9,-123,0,-4,2,9,-123,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,-124,0,-4,2,9,-122,0,-2,3,-2,0,-2,9,-122,0,-2,3,-381,0,10,-5,0,2,-14843,0,-2,3,-126,0,3,-2,9,7,-124,0,-3,2,7,-124,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-3,2,7,-123,0,-2,3,-2,9,7,-123,0,-2,3,-381,0,10,-4,0,2,-14973,0,-2,7,-381,0,-2,6,-126,0,-2,6,-383,0,-2,7,-507,0,10,-4,0,2,-14973,0,-2,9,-126,0,-2,9,-126,0,6,3,-124,0,7,6,-4,3,-122,0,7,6,-4,3,-124,0,6,3,-126,0,-2,9,-126,0,-2,9,-506,0,10,-4,0,2,-14974,0,-2,7,-124,0,-4,7,-123,0,-2,7,-5,3,-121,0,-2,7,-5,3,-121,0,-2,7,-5,3,-121,0,-2,7,-5,3,-122,0,-5,7,-633,0,10,-4,0,2,-15100,0,7,-4,9,-122,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-121,0,-6,7,-123,0,-3,7,-506,0,10,-3,0,2,-14973,0,-5,7,9,-122,0,1,-5,7,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-121,0,1,-6,7,-121,0,-5,7,-505,0,10,-3,0,2,-14974,0,1,-4,7,-122,0,1,-5,7,-121,0,-2,1,-4,3,7,-121,0,-2,1,-5,3,-121,0,-2,1,-5,3,7,-120,0,-2,1,-3,3,-3,7,-121,0,1,-6,7,-122,0,-2,1,-507,0,10,-2,0,2,-14976,0,-2,1,7,-124,0,1,7,-2,1,7,-122,0,1,-3,7,1,7,-121,0,-2,1,-3,7,1,-122,0,-2,1,-3,7,1,-2,7,-121,0,1,-3,7,1,-2,7,-122,0,1,7,1,-126,0,1,-507,0,10,-2,0,2,-15104,0,-2,1,-125,0,-4,1,-123,0,-5,1,-123,0,-5,1,-123,0,-5,1,-125,0,1,-635,0,10,0,2,-15233,0,-2,1,-125,0,-3,1,-125,0,-3,1,-126,0,-2,1,-762,0,10,0,2,-16381,0,10,2,-16382,0,10,2,-16382,0,10,-1531079,0],\"uuid\":\"CD5E269A-B932-4D24-8E8B-DA59AC90742B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[16737843,16777113,16764006,6697728,10066278,16750950,6736947,10040064,34816,16750848],\"bounds\":[56,71,56,70,0,34]}");

/***/ }),
/* 12 */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":2,\"parts\":[{\"name\":\"main\",\"bounds\":[16,47,15,48,0,58],\"size\":[64,64,64],\"data\":[-1234,0,-2,2,-24,0,-2,2,-36,0,-2,2,-24,0,-2,2,-1443,0,-2,2,-26,0,-2,2,-34,0,-2,2,-26,0,-2,2,-2467,0,-2,2,-24,0,-2,2,-36,0,-2,2,-24,0,-2,2,-1443,0,-2,2,-26,0,-2,2,-34,0,-2,2,-26,0,-2,2,-2467,0,-2,23,-24,0,-2,23,-36,0,-2,23,-24,0,-2,23,-1443,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-2467,0,-2,23,-24,0,-2,23,-36,0,-3,23,-22,0,-3,23,-37,0,-2,23,-22,0,-2,23,-1317,0,-2,23,-24,0,-2,23,-35,0,-3,23,-24,0,-3,23,-34,0,-2,23,-26,0,-2,23,-2597,0,-2,23,-20,0,-2,23,-40,0,-2,23,-20,0,-2,23,-498,0,-4,2,-60,0,-4,2,-60,0,-4,2,-60,0,-4,2,-497,0,-2,23,-22,0,-2,23,-38,0,-2,23,-22,0,-2,23,-2792,0,-2,23,-18,0,-2,23,-42,0,-3,23,-16,0,-3,23,-43,0,-3,23,-14,0,-3,23,-45,0,-3,23,-12,0,-3,23,-47,0,-3,23,-10,0,-3,23,-49,0,-3,23,-8,0,-3,23,-51,0,-3,23,-6,0,-3,23,-53,0,-2,23,-6,0,-2,23,-55,0,-2,23,-4,2,-2,23,-56,0,-2,23,-4,2,-2,23,-56,0,-2,23,-4,2,-2,23,-55,0,-3,23,-4,2,-3,23,-53,0,-3,23,-6,0,-3,23,-51,0,-3,23,-8,0,-3,23,-49,0,-3,23,-10,0,-3,23,-47,0,-3,23,-12,0,-3,23,-45,0,-3,23,-14,0,-3,23,-43,0,-3,23,-16,0,-3,23,-41,0,-3,23,-18,0,-3,23,-40,0,-2,23,-20,0,-2,23,-3378,0,-4,2,-60,0,2,-2,23,2,-60,0,2,-2,23,2,-60,0,-4,2,-3965,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-3889,0,-3,2,-60,0,-5,2,-58,0,-7,2,0,-6,22,0,-2,23,-47,0,-7,2,22,-5,0,-2,22,-2,23,-47,0,-7,2,-58,0,-5,2,-60,0,-3,2,-3850,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-4030,0,-2,23,-62,0,-2,23,-3189,0,-20,23,-44,0,-20,23,-44,0,-20,23,-46,0,-2,3,0,-2,3,-6,0,-2,3,0,-2,3,-47,0,-18,3,-46,0,-18,3,-46,0,-18,3,-46,0,-18,3,-45,0,-20,3,-44,0,-20,3,-44,0,-20,3,-44,0,-20,3,-43,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-41,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-39,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-37,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-28,3,-35,0,-30,3,-34,0,-6,3,-18,0,-6,3,-34,0,-2,3,-26,0,-2,3,-2214,0,-2,23,-18,3,-2,23,-42,0,-2,23,-18,3,-2,23,-44,0,-18,3,-45,0,-20,3,-44,0,-20,3,-44,0,-20,3,-43,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-42,0,-22,3,-41,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-40,0,-24,3,-39,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-38,0,-26,3,-37,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-28,3,-36,0,-7,3,-14,0,-7,3,-35,0,-5,3,-20,0,-5,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-2094,0,-6,3,-54,0,-14,3,-46,0,-2,23,0,-16,3,0,-2,23,-42,0,-2,23,-2,3,-14,0,-2,3,-2,23,-43,0,-2,3,-16,0,-2,3,-3827,0,-6,3,-54,0,-14,3,-49,0,-16,3,-44,0,-2,23,0,-2,3,-14,0,-2,3,0,-2,23,-40,0,-2,23,-2,3,-16,0,-2,3,-2,23,-3825,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-2,23,-3,3,-16,0,-3,3,-2,23,-38,0,-2,23,-22,0,-2,23,-3760,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-2,2,-12,0,-2,2,-3,3,-39,0,-2,23,-5,0,-3,2,-8,0,-3,2,-5,0,-2,23,-36,0,-2,23,-8,0,-8,2,-8,0,-2,23,-3695,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-16,0,-3,3,-45,0,2,-14,0,2,-42,0,-2,23,-4,0,-16,2,-4,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3631,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-44,0,-3,3,-16,0,-3,3,-45,0,2,-14,0,2,-48,0,-3,2,-10,0,-3,2,-42,0,-2,23,-6,0,-12,2,-6,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3567,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-3,2,-12,0,-3,2,-2,0,3,-45,0,-14,2,-107,0,-2,23,-24,0,-2,23,-36,0,-2,23,-24,0,-2,23,-3503,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-3,2,-12,0,-3,2,-2,0,3,-45,0,-14,2,-234,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-3374,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,-4,2,-10,0,-4,2,-2,0,3,-47,0,-10,2,-300,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-3310,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,2,-14,0,2,-4,3,-40,0,3,-3,0,-4,2,-8,0,-4,2,-3,0,3,-47,0,-10,2,-364,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-34,0,-2,23,-26,0,-2,23,-33,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-32,0,-2,23,-28,0,-2,23,-2093,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-2,2,-12,0,-2,2,-4,3,-40,0,3,-5,0,-12,2,-5,0,3,-612,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-32,0,-2,2,-28,0,-2,2,-2093,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-3,0,-4,2,-8,0,-4,2,-3,0,3,-47,0,-10,2,-3704,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-3,0,2,-14,0,2,-3,0,3,-45,0,-4,2,-6,0,-4,2,-54,0,-6,2,-3642,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-2,2,-14,0,-2,2,-47,0,-4,2,-8,0,-4,2,-51,0,-10,2,-3576,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-2,2,-14,0,-2,2,-47,0,-3,2,-10,0,-3,2,-50,0,-12,2,-3575,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-43,0,-4,3,-16,0,-4,3,-40,0,3,-2,0,2,-16,0,2,-2,0,3,-43,0,-4,2,-10,0,-4,2,-49,0,-4,2,-4,0,-4,2,-55,0,-6,2,-3578,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,2,-16,0,2,-2,0,-2,3,-43,0,2,-14,0,2,-49,0,-4,2,-6,0,-4,2,-53,0,-8,2,-3577,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-3,0,2,-14,0,2,-3,0,-2,3,-43,0,-4,2,-8,0,-4,2,-51,0,-10,2,-3640,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,-2,2,-14,0,-2,2,-2,0,-2,3,-43,0,-6,2,-4,0,-6,2,-54,0,-4,2,-3643,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-8,2,-3705,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,-16,0,-5,3,-38,0,-2,3,-3,0,-4,2,-8,0,-4,2,-3,0,-2,3,-46,0,-10,2,-3704,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,2,-14,0,2,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-8,2,-3705,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,0,-2,3,-42,0,-5,3,2,-14,0,2,-5,3,-38,0,-2,3,-2,0,-6,2,-6,0,-6,2,-2,0,-2,3,-47,0,-2,2,-4,0,-2,2,-57,0,-6,2,-3642,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,2,-12,0,2,-2,3,-41,0,-6,3,0,-14,2,0,-6,3,-36,0,-2,3,-10,0,-4,2,-10,0,-2,3,-3759,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-2,3,-14,2,-2,3,-41,0,-6,3,-2,2,-12,0,-2,2,-6,3,-36,0,-2,3,-3,0,-2,2,-14,0,-2,2,-3,0,-2,3,-3759,0,-6,3,-54,0,-14,3,-49,0,-16,3,-47,0,-18,3,-41,0,-8,3,-12,0,-8,3,-36,0,-2,3,-2,0,-3,3,-14,0,-3,3,-2,0,-2,3,-3694,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-37,0,-8,3,-12,0,-8,3,-36,0,-7,3,-14,0,-7,3,-3694,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-36,0,-8,3,-12,0,-8,3,-36,0,-7,3,-14,0,-7,3,-36,0,-3,3,-22,0,-3,3,-3630,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-35,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-2,3,-26,0,-2,3,-3565,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-40,0,-28,3,-35,0,-10,3,-10,0,-10,3,-34,0,-8,3,-14,0,-8,3,-34,0,-5,3,-20,0,-5,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-3501,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-36,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-3,3,-24,0,-3,3,-3565,0,-8,3,-52,0,-16,3,-47,0,-18,3,-45,0,-20,3,-41,0,-26,3,-36,0,-9,3,-12,0,-9,3,-34,0,-8,3,-14,0,-8,3,-34,0,-4,3,-22,0,-4,3,-34,0,-3,3,-24,0,-3,3,-3503,0,-4,3,-57,0,-10,3,-52,0,-14,3,-48,0,-18,3,-45,0,-20,3,-43,0,-22,3,-39,0,-8,3,-12,0,-8,3,-35,0,-8,3,-14,0,-8,3,-34,0,-3,3,-24,0,-3,3,-34,0,-3,3,-24,0,-3,3,-34,0,-2,3,-26,0,-2,3,-22929,0],\"uuid\":\"0F83B31A-98B6-4290-A164-95C437723E1C\",\"hidden\":false}],\"size\":[64,64,64],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[16,47,15,48,0,58]}");

/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,6,-4,7,6,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,7,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13813,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-757,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13814,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-885,0,-6,6,-122,0,-6,6,-122,0,-6,6,-13944,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-762,0,-4,6,-124,0,-4,6,-124,0,-4,7,-13945,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-764,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13689,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-764,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13561,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-892,0,-4,6,-124,0,-4,6,-124,0,-4,7,-13561,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1020,0,-4,6,-124,0,-4,6,-124,0,-4,6,-13433,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1149,0,-2,6,-126,0,-2,6,-13434,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"15013266-1B66-40BE-8AB4-3BDD092173E6\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,7496558,5391165,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 14 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-755,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13816,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-883,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13946,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-760,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13947,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13563,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-890,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13563,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1018,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13435,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1147,0,-2,7,-126,0,-2,7,-13436,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"3012310E-96D8-4DC9-B11E-2FBEBA73DCAA\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,5391165,7496558,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13560,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-894,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13559,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1023,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13430,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1154,0,-2,7,-126,0,-2,7,-13429,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"2AD1D28D-1BD3-4F18-BFD7-7455B3C12194\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1021,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13432,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1152,0,-2,7,-126,0,-2,7,-13431,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"9872E874-5864-4714-A6C0-9C73F14CAA1F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1020,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13433,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1149,0,-2,7,-126,0,-2,7,-13434,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"76BCDE88-3711-47F2-853A-6718D7A1C601\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 18 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-2,4,-4,0,-2,4,5,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-2,2,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,2,-8,3,-3,2,1,-112,0,1,-3,2,-8,5,-3,2,1,-112,0,1,-14,2,1,-112,0,1,-14,2,1,-112,0,-16,2,-114,0,-12,2,-116,0,-12,2,-118,0,-3,2,-2,1,-3,2,-120,0,-3,2,-2,1,-3,2,-14326,0,-2,2,-8,0,-2,2,-114,0,-4,2,-8,0,-4,2,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-3,2,-2,4,-4,0,-2,4,-3,2,1,-112,0,1,-2,2,5,-8,0,3,-2,2,1,-112,0,1,-2,2,3,-8,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,3,-2,2,1,-112,0,1,-3,3,-2,0,-4,3,-2,0,-3,3,1,-112,0,1,-6,3,-2,5,-6,3,1,-112,0,1,-3,3,-7,5,-4,3,1,-112,0,1,-10,2,-3,3,2,1,-112,0,1,-14,2,1,-114,0,-14,2,-114,0,-12,2,-116,0,-10,2,-120,0,-2,2,-4,1,-2,2,-14454,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-4,5,-2,4,-4,0,-2,4,-4,5,-2,2,-108,0,-2,2,-2,5,-2,0,-2,4,-4,0,-2,4,-2,0,-2,5,-2,2,-108,0,-2,2,-2,5,-2,0,-8,4,-2,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,-2,5,-2,2,-108,0,-2,2,5,3,-4,0,3,-2,4,3,-4,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-3,3,-2,5,-3,3,-2,0,3,5,-2,2,-108,0,-2,2,5,3,-2,0,-7,5,3,-2,0,3,5,-2,2,-108,0,-2,2,-11,5,-3,3,-2,5,-2,2,-108,0,-2,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,-2,5,-4,3,-2,5,-14454,0,-2,5,-8,0,-2,5,-112,0,-2,2,-3,5,3,-8,0,3,-3,5,-2,2,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-4,5,-8,4,-4,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,-2,5,-2,0,-8,4,-2,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,-2,5,2,1,-108,0,1,2,5,3,-4,0,3,-3,4,-4,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-3,3,-4,5,3,-2,0,3,5,2,1,-108,0,1,2,5,3,-2,0,-7,5,3,-2,0,3,5,2,1,-108,0,1,-3,5,3,-8,5,-3,3,-2,5,2,1,-108,0,1,2,-16,5,-2,2,-110,0,-16,5,-114,0,-12,5,-118,0,-8,5,-120,0,5,-6,3,5,-14454,0,-2,5,-8,0,-2,5,-111,0,-3,2,-3,5,3,-8,0,3,-3,5,-3,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,2,-105,0,-2,2,-4,5,-2,0,-8,4,-2,0,-4,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-2,0,-8,4,-4,0,-2,5,-2,2,-104,0,-2,2,-4,5,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-4,0,-4,4,-6,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-104,0,-2,2,-3,5,3,-2,0,-7,5,3,-4,0,-2,5,-2,2,-105,0,2,-3,5,3,-2,0,-7,5,3,-2,0,3,-3,5,2,-106,0,2,-4,5,-2,0,-8,5,-2,0,-4,5,2,-108,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-108,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,-105,0,2,-5,5,-2,0,-8,4,-2,0,-5,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-8,4,-4,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-4,0,-4,4,-6,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-104,0,2,-5,5,-2,0,-7,5,3,-4,0,-3,5,2,-106,0,-4,5,-2,0,-7,5,3,-2,0,-4,5,-108,0,-4,5,-2,0,-8,5,-2,0,-4,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-14,5,-3,3,-5,5,-106,0,-14,5,-3,3,-5,5,-107,0,-4,5,-2,0,-7,5,-3,3,-4,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-109,0,-7,5,10,-6,9,10,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-8,9,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-7,5,-2,0,-4,9,-2,0,-7,5,-106,0,-22,5,-106,0,-22,5,-107,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-109,0,-18,5,-113,0,-12,5,-118,0,-8,5,-120,0,-8,5,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,5,-8,0,-2,5,-114,0,-3,5,3,-8,0,3,-3,5,-110,0,-6,5,10,-6,9,10,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-8,9,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-6,5,-2,0,-4,9,-2,0,-6,5,-108,0,-20,5,-108,0,-20,5,-108,0,-4,5,-2,0,-14,5,-108,0,-4,5,-2,0,-14,5,-112,0,-12,5,-116,0,-12,5,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-5,5,-6,0,-5,5,-112,0,-5,5,10,-4,9,10,-5,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-755,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13816,0,-5,5,-4,0,-5,5,-113,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-6,5,-4,9,-6,5,-112,0,-16,5,-112,0,-16,5,-112,0,-16,5,-112,0,-5,5,-5,3,-6,5,-883,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13946,0,-2,3,5,-4,0,5,-2,3,-117,0,3,-3,5,-4,10,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,3,-119,0,-2,3,-4,0,-2,3,-760,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13947,0,-10,5,-117,0,3,-3,5,-4,4,-2,5,-2,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-3,5,-4,4,-3,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-116,0,3,-10,5,3,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-761,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13564,0,5,-8,0,5,-117,0,-2,5,-8,4,-2,5,-113,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-889,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13564,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-113,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-2,8,-4,4,-2,8,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-5,5,-8,4,-5,5,-110,0,-18,5,-110,0,-18,5,-113,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1017,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13436,0,5,-8,0,5,-117,0,-2,5,-2,8,-4,4,-2,8,-2,5,-114,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-2,8,-4,4,-2,8,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-1146,0,-2,7,-126,0,-2,7,-13437,0,5,-8,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,5,-3,4,-2,5,-3,4,5,-117,0,-2,5,-8,4,-2,5,-114,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-4,5,-8,4,-4,5,-112,0,-16,5,-112,0,-16,5,-114,0,-12,5,-117,0,-10,5,-119,0,-8,5,-122,0,-4,5,-14713,0,-10,5,-117,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15095,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-116,0,-12,5,-119,0,-6,5,-15225,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-122,0,-4,5,-15354,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-120,0,-8,5,-1712444,0],\"uuid\":\"95EEDB35-0E0E-402D-BB93-A0A6F0F232F3\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[7371892,9541791,2236962,1118481,4858461,5391165,7496558,15216661,7365786,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-112,0,-4,1,10,-6,8,10,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-16,1,-112,0,-16,1,-112,0,-2,1,-2,0,-12,1,-112,0,-2,1,-2,0,-12,1,-114,0,-12,1,-116,0,-12,1,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-758,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-762,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13691,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-761,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13564,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-889,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13564,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1016,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13437,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1143,0,-2,7,-126,0,-2,7,-13440,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"243C6468-1C9E-4654-ACE9-ED8A70E8D4E6\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-112,0,-4,1,10,-6,8,10,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-8,8,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-4,1,-2,0,-4,8,-2,0,-4,1,-112,0,-16,1,-112,0,-16,1,-112,0,-2,1,-2,0,-12,1,-112,0,-2,1,-2,0,-12,1,-114,0,-12,1,-116,0,-12,1,-374,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-758,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13689,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-763,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13562,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-891,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13562,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1018,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13435,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1145,0,-2,7,-126,0,-2,7,-13438,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"7AC62D52-02A0-4DEC-8EBA-D099FBA3B48B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 21 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-6,0,-4,1,-114,0,-4,1,10,-4,8,10,-4,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-759,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-4,1,-4,8,-4,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-3,1,-5,2,-4,1,-888,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-763,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13944,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-764,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13561,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-892,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13561,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1019,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13434,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1146,0,-2,7,-126,0,-2,7,-13437,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"ACB4ABDA-33DB-4CB1-8E49-528CA48C4D6F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 22 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13686,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13812,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-896,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13557,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1023,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13430,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1150,0,-2,7,-126,0,-2,7,-13433,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"892BCF8C-EDA6-47FB-A8D5-2AE32C2D6B8E\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 23 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13686,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-376,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13812,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-897,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13556,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1025,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13428,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1153,0,-2,7,-126,0,-2,7,-13430,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"F33A3005-1936-4D74-BD64-844EDA568B57\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 24 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-757,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13814,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-887,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13943,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-765,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13942,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-767,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13686,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-768,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13557,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-897,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13556,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1025,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13428,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1155,0,-2,7,-126,0,-2,7,-13428,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"18A51C2A-2C23-4B9B-95C4-2EFA82506920\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[52,75,52,75,0,23],\"size\":[128,128,128],\"data\":[-6714,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-2,3,-4,0,-2,3,1,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-2,4,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,4,-8,2,-3,4,5,-112,0,5,-3,4,-8,1,-3,4,5,-112,0,5,-14,4,5,-112,0,5,-14,4,5,-112,0,-16,4,-114,0,-12,4,-116,0,-12,4,-118,0,-3,4,-2,5,-3,4,-120,0,-3,4,-2,5,-3,4,-14326,0,-2,4,-8,0,-2,4,-114,0,-4,4,-8,0,-4,4,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-3,4,-2,3,-4,0,-2,3,-3,4,5,-112,0,5,-2,4,1,-8,0,2,-2,4,5,-112,0,5,-2,4,2,-8,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,2,-2,4,5,-112,0,5,-3,2,-2,0,-4,2,-2,0,-3,2,5,-112,0,5,-6,2,-2,1,-6,2,5,-112,0,5,-3,2,-7,1,-4,2,5,-112,0,5,-10,4,-3,2,4,5,-112,0,5,-14,4,5,-114,0,-14,4,-114,0,-12,4,-116,0,-10,4,-120,0,-2,4,-4,5,-2,4,-14454,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-4,1,-2,3,-4,0,-2,3,-4,1,-2,4,-108,0,-2,4,-2,1,-2,0,-2,3,-4,0,-2,3,-2,0,-2,1,-2,4,-108,0,-2,4,-2,1,-2,0,-8,3,-2,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,-2,1,-2,4,-108,0,-2,4,1,2,-4,0,2,-2,3,2,-4,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-3,2,-2,1,-3,2,-2,0,2,1,-2,4,-108,0,-2,4,1,2,-2,0,-7,1,2,-2,0,2,1,-2,4,-108,0,-2,4,-11,1,-3,2,-2,1,-2,4,-108,0,-2,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,-2,1,-4,2,-2,1,-14454,0,-2,1,-8,0,-2,1,-112,0,-2,4,-3,1,2,-8,0,2,-3,1,-2,4,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-4,1,-8,3,-4,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,-2,1,-2,0,-8,3,-2,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,-2,1,4,5,-108,0,5,4,1,2,-4,0,2,-3,3,-4,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-3,2,-4,1,2,-2,0,2,1,4,5,-108,0,5,4,1,2,-2,0,-7,1,2,-2,0,2,1,4,5,-108,0,5,-3,1,2,-8,1,-3,2,-2,1,4,5,-108,0,5,4,-16,1,-2,4,-110,0,-16,1,-114,0,-12,1,-118,0,-8,1,-120,0,1,-6,2,1,-14454,0,-2,1,-8,0,-2,1,-111,0,-3,4,-3,1,2,-8,0,2,-3,1,-3,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,4,-105,0,-2,4,-4,1,-2,0,-8,3,-2,0,-4,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-2,0,-8,3,-4,0,-2,1,-2,4,-104,0,-2,4,-4,1,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-4,0,-4,3,-6,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-104,0,-2,4,-3,1,2,-2,0,-7,1,2,-4,0,-2,1,-2,4,-105,0,4,-3,1,2,-2,0,-7,1,2,-2,0,2,-3,1,4,-106,0,4,-4,1,-2,0,-8,1,-2,0,-4,1,4,-108,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-14199,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-108,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,-105,0,4,-5,1,-2,0,-8,3,-2,0,-5,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-8,3,-4,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-4,0,-4,3,-6,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-104,0,4,-5,1,-2,0,-7,1,2,-4,0,-3,1,4,-106,0,-4,1,-2,0,-7,1,2,-2,0,-4,1,-108,0,-4,1,-2,0,-8,1,-2,0,-4,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-14071,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-14,1,-3,2,-5,1,-106,0,-14,1,-3,2,-5,1,-107,0,-4,1,-2,0,-7,1,-3,2,-4,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,7,-4,6,7,-13943,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-109,0,-7,1,10,-6,8,10,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-8,8,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-7,1,-2,0,-4,8,-2,0,-7,1,-106,0,-22,1,-106,0,-22,1,-107,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-109,0,-18,1,-113,0,-12,1,-118,0,-8,1,-120,0,-8,1,-121,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,6,-13815,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13687,0,-2,1,-8,0,-2,1,-114,0,-3,1,2,-8,0,2,-3,1,-110,0,-6,1,10,-6,8,10,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-8,8,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-6,1,-2,0,-4,8,-2,0,-6,1,-108,0,-20,1,-108,0,-20,1,-108,0,-4,1,-2,0,-14,1,-108,0,-4,1,-2,0,-14,1,-112,0,-12,1,-116,0,-12,1,-375,0,-6,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,7,0,-4,7,-122,0,-6,7,-13813,0,-5,1,-6,0,-5,1,-112,0,-5,1,10,-4,8,10,-6,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-6,1,-4,8,-7,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-111,0,-17,1,-756,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13815,0,-4,1,-4,0,-4,1,-115,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-5,1,-4,8,-5,1,-114,0,-14,1,-114,0,-14,1,-114,0,-14,1,-114,0,-4,1,-5,2,-5,1,-886,0,-6,7,-122,0,-6,7,-122,0,-6,7,-13944,0,-2,2,1,-4,0,1,-2,2,-117,0,2,-3,1,-4,10,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,2,-119,0,-2,2,-4,0,-2,2,-762,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13945,0,-10,1,-117,0,2,-3,1,-4,3,-2,1,-2,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-3,1,-4,3,-3,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-116,0,2,-10,1,2,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-765,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13688,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-766,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13559,0,1,-8,0,1,-117,0,-2,1,-8,3,-2,1,-113,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-895,0,-4,7,-124,0,-4,7,-124,0,-4,6,-13558,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-113,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-2,9,-4,3,-2,9,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-5,1,-8,3,-5,1,-110,0,-18,1,-110,0,-18,1,-113,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1024,0,-4,7,-124,0,-4,7,-124,0,-4,7,-13429,0,1,-8,0,1,-117,0,-2,1,-2,9,-4,3,-2,9,-2,1,-114,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-2,9,-4,3,-2,9,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-1154,0,-2,7,-126,0,-2,7,-13429,0,1,-8,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,1,-3,3,-2,1,-3,3,1,-117,0,-2,1,-8,3,-2,1,-114,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-4,1,-8,3,-4,1,-112,0,-16,1,-112,0,-16,1,-114,0,-12,1,-117,0,-10,1,-119,0,-8,1,-122,0,-4,1,-14713,0,-10,1,-117,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15095,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-116,0,-12,1,-119,0,-6,1,-15225,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-122,0,-4,1,-15354,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-120,0,-8,1,-1712444,0],\"uuid\":\"B4310167-CEB8-4757-8FF8-EA37AEC35FB7\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[4858461,2236962,1118481,9541791,7371892,5391165,7496558,7365786,15216661,5455195],\"bounds\":[52,75,52,75,0,23]}");

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[52,76,52,75,0,12],\"size\":[128,128,128],\"data\":[-6718,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-13435,0,-5,12,-119,0,-4,12,-5,0,-4,12,-114,0,12,-13,0,12,-112,0,12,-15,0,12,-110,0,12,-17,0,12,-108,0,12,-19,0,12,-107,0,12,-19,0,12,-106,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-104,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-103,0,12,-23,0,12,-104,0,12,-21,0,12,-105,0,12,-21,0,12,-105,0,12,-21,0,12,-106,0,12,-19,0,12,-107,0,12,-19,0,12,-108,0,12,-17,0,12,-110,0,12,-15,0,12,-112,0,12,-13,0,12,-114,0,-4,12,-5,0,-4,12,-119,0,-5,12,-1890877,0],\"uuid\":\"AF55B709-8F88-45D9-9490-37FA7714171F\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[52,76,52,75,0,12]}");

/***/ }),
/* 27 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part2\",\"bounds\":[39,87,37,90,0,40],\"size\":[128,128,128],\"data\":[-4808,0,-7,18,-97,0,-6,18,-17,0,-10,18,-93,0,-14,18,-6,0,-16,18,-91,0,-38,18,-89,0,-40,18,-87,0,-6,18,-3,20,-22,18,-3,20,-8,18,-86,0,-5,18,-5,20,-20,18,-10,20,-2,18,-86,0,-4,18,-7,20,-18,18,-12,20,-2,18,-85,0,-4,18,-7,20,-6,18,-6,20,-6,18,-12,20,-2,18,-85,0,-4,18,-7,20,-4,18,-10,20,-4,18,-12,20,-2,18,-85,0,-5,18,-5,20,-3,18,-14,20,-3,18,-10,20,-3,18,-86,0,-5,18,-3,20,-3,18,-16,20,-3,18,-3,20,-9,18,-86,0,-10,18,-18,20,-14,18,-86,0,-10,18,-18,20,-13,18,-88,0,-8,18,-20,20,-11,18,-89,0,-8,18,-20,20,-11,18,-89,0,-7,18,-22,20,-10,18,-89,0,-7,18,-22,20,-9,18,-90,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-7,18,-22,20,-8,18,-91,0,-8,18,-20,20,-8,18,-92,0,-8,18,-20,20,-8,18,-91,0,-10,18,-18,20,-9,18,-91,0,-10,18,-18,20,-9,18,-90,0,-12,18,-16,20,-10,18,-90,0,-13,18,-14,20,-2,18,-6,20,-4,18,-88,0,-16,18,-10,20,-3,18,-8,20,-3,18,-88,0,-18,18,-6,20,-4,18,-10,20,-2,18,-87,0,-8,18,-3,20,-18,18,-10,20,-3,18,-86,0,-7,18,-5,20,-17,18,-10,20,-4,18,-84,0,-7,18,-7,20,-16,18,-10,20,-5,18,-82,0,-8,18,-7,20,-16,18,-10,20,-6,18,-81,0,-8,18,-7,20,-16,18,-10,20,-6,18,-81,0,-9,18,-5,20,-8,18,-4,20,-6,18,-8,20,-8,18,-80,0,-10,18,-3,20,-7,18,-8,20,-5,18,-6,20,-9,18,-80,0,-6,18,-5,20,-8,18,-10,20,-8,18,-5,20,-6,18,-80,0,-5,18,-7,20,-7,18,-10,20,-7,18,-7,20,-6,18,-79,0,-4,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-79,0,-4,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-80,0,-3,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-80,0,-3,18,-9,20,-5,18,-12,20,-5,18,-9,20,-5,18,-81,0,-2,18,-9,20,-6,18,-10,20,-6,18,-9,20,-5,18,-81,0,-3,18,-7,20,-7,18,-10,20,-7,18,-7,20,-5,18,-82,0,-4,18,-5,20,-9,18,-8,20,-9,18,-5,20,-6,18,-83,0,-19,18,-4,20,-21,18,-85,0,-43,18,-86,0,-41,18,-89,0,-38,18,-92,0,-35,18,-95,0,-31,18,-99,0,-25,18,-107,0,-14,18,-10347,0,-3,27,-22,0,-3,27,-99,0,-5,27,-20,0,-5,27,4,5,4,5,4,-93,0,-2,27,20,-2,27,-20,0,-2,27,20,-2,27,4,5,4,5,4,-93,0,-5,27,-20,0,-5,27,4,5,4,5,4,-94,0,-3,27,-8,0,-6,27,-8,0,-3,27,-109,0,-10,27,-117,0,-12,27,-115,0,-14,27,-113,0,-16,27,-112,0,-16,27,-111,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-110,0,-18,27,-111,0,-16,27,-112,0,-16,27,-113,0,-14,27,-115,0,-12,27,-117,0,-10,27,-120,0,-6,27,-135,0,-4,27,-123,0,-6,27,-121,0,-8,27,-98,0,-3,27,-19,0,-8,27,-97,0,-5,27,-18,0,-8,27,-97,0,-2,27,20,-2,27,-18,0,-8,27,-97,0,-5,27,-19,0,-6,27,-99,0,-3,27,-21,0,-4,27,-239,0,-6,27,-121,0,-8,27,-106,0,-5,27,-9,0,-8,27,-9,0,-5,27,-92,0,-5,27,-9,0,-3,27,-2,20,-3,27,-9,0,-5,27,-92,0,-2,27,20,-2,27,-9,0,-3,27,-2,20,-3,27,-9,0,-2,27,20,-2,27,-92,0,-5,27,-9,0,-8,27,-9,0,-5,27,-92,0,-5,27,-9,0,-8,27,-9,0,-5,27,-107,0,-6,27,-11503,0,-3,4,-22,0,-3,4,-2,5,-97,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-99,0,-3,4,-8,0,-6,4,-8,0,-3,4,-109,0,-10,4,-117,0,-12,4,-115,0,-14,4,-113,0,-16,4,-112,0,-16,4,-111,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-110,0,-18,4,-111,0,-16,4,-112,0,-16,4,-113,0,-14,4,-115,0,-12,4,-117,0,-10,4,-120,0,-6,4,-135,0,-4,4,-123,0,-6,4,-121,0,-8,4,-98,0,-3,4,-19,0,-8,4,-97,0,-5,4,-18,0,-8,4,-97,0,-5,4,-18,0,-8,4,-97,0,-5,4,-19,0,-6,4,-99,0,-3,4,-21,0,-4,4,-239,0,-6,4,-121,0,-8,4,-106,0,-5,4,-9,0,-8,4,-9,0,-5,4,-92,0,-5,4,-9,0,-8,4,-9,0,-7,4,-4,0,4,-85,0,-5,4,-9,0,-8,4,-9,0,-12,4,-85,0,-5,4,-9,0,-8,4,-9,0,-7,4,-4,0,4,-85,0,-5,4,-9,0,-8,4,-9,0,-5,4,-107,0,-6,4,-11402,0,-2,5,-99,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-135,0,-4,5,-123,0,-6,5,-121,0,-8,5,-98,0,-3,5,-19,0,-8,5,-97,0,-5,5,-18,0,-8,5,-97,0,-5,5,-18,0,-8,5,-97,0,-5,5,-19,0,-6,5,-99,0,-3,5,-21,0,-4,5,-239,0,-6,5,-108,0,4,0,4,-10,0,-8,5,-11,0,4,-94,0,-5,5,-9,0,-8,5,-9,0,-5,5,-91,0,4,-6,5,-8,0,-8,5,-8,0,-13,5,-85,0,5,-4,7,-2,5,-7,0,-8,5,-7,0,-2,5,-12,7,-84,0,4,-6,5,-8,0,-8,5,-8,0,-13,5,-85,0,-5,5,-9,0,-8,5,-9,0,-5,5,-93,0,4,0,4,-11,0,-6,5,-12,0,4,-111,0,-2,13,-11275,0,5,-101,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-7,0,4,-2,0,4,-124,0,-4,5,-123,0,5,-4,12,5,-120,0,4,5,-6,12,5,4,-97,0,-3,5,-19,0,5,-6,12,5,-97,0,-5,5,-18,0,5,-6,12,5,-97,0,-5,5,-17,0,4,5,-6,12,5,4,-96,0,-5,5,-19,0,5,-4,12,5,-99,0,-3,5,-21,0,-4,5,-124,0,4,-2,0,4,-111,0,-6,5,-107,0,-4,4,-10,0,-8,5,-10,0,-4,4,-91,0,4,-4,0,4,-9,0,-8,5,-9,0,4,-4,0,-6,4,-85,0,4,-5,0,-2,5,-6,0,-10,5,-6,0,-2,5,-96,0,4,-5,0,-2,7,5,-5,0,-10,5,-5,0,5,-2,7,-96,0,4,-5,0,-2,5,-6,0,-10,5,-6,0,-2,5,-96,0,4,-4,0,4,-9,0,-3,5,-2,4,-3,5,-9,0,4,-4,0,-6,4,-86,0,-4,4,-11,0,-6,5,-11,0,-4,4,-108,0,-4,13,-11273,0,5,-102,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-117,0,-12,5,-115,0,-14,5,-113,0,-16,5,-112,0,-16,5,-111,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-111,0,-16,5,-112,0,-16,5,-113,0,-14,5,-115,0,-12,5,-117,0,-10,5,-120,0,-6,5,-7,0,-4,4,-112,0,-4,5,-7,0,4,-4,0,4,-121,0,4,-6,0,4,-119,0,4,-8,0,4,-97,0,-3,5,-18,0,4,-3,0,-2,3,-3,0,4,-96,0,-5,5,-17,0,4,-3,0,-2,3,-3,0,4,-96,0,-5,5,-17,0,4,-8,0,4,-96,0,-5,5,-18,0,4,-6,0,4,-98,0,-3,5,-20,0,4,-4,0,4,-111,0,-4,5,-8,0,-4,4,-111,0,-6,5,-121,0,-8,5,-111,0,-2,4,-7,0,-8,5,-7,0,-2,4,-104,0,-3,5,-2,0,-12,5,-2,0,-3,5,-106,0,-2,7,5,-2,0,-12,5,-2,0,5,-2,7,-106,0,-3,5,-2,0,-12,5,-2,0,-3,5,-104,0,-2,4,-7,0,-3,5,-2,4,-3,5,-7,0,-2,4,-112,0,-6,5,-123,0,13,-2,26,13,-11272,0,5,-103,0,-3,5,-21,0,-4,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-7,0,25,-4,0,25,-7,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-116,0,25,-12,5,25,-114,0,-14,5,-113,0,-16,5,-112,0,-16,5,-110,0,25,-18,5,25,-109,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-109,0,25,-18,5,25,-110,0,-16,5,-112,0,-16,5,-113,0,-14,5,-114,0,25,-12,5,25,-116,0,-10,5,-120,0,-6,5,-123,0,-4,5,-123,0,25,-4,5,25,-239,0,-3,5,-22,0,-2,3,-100,0,-5,5,-21,0,-2,3,-100,0,-5,5,-123,0,-5,5,-124,0,-3,5,-9,0,-4,5,-124,0,-4,5,-123,0,-6,5,-121,0,-8,5,-113,0,-2,4,-5,0,-8,5,-5,0,-2,4,-108,0,-18,5,-110,0,-2,7,-14,5,-2,7,-110,0,-18,5,-108,0,-2,4,-5,0,-3,5,-2,4,-3,5,-5,0,-2,4,-114,0,-6,5,-123,0,13,-2,26,13,-11376,0,-3,4,-20,0,5,0,-3,4,-99,0,-5,4,-19,0,5,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-7,0,26,-4,0,26,-7,0,-5,4,-99,0,-3,4,-8,0,-6,5,-8,0,-3,4,-109,0,-10,5,-116,0,26,-12,5,26,-114,0,-14,5,-113,0,-16,5,-112,0,-16,5,-110,0,26,-18,5,26,-109,0,-18,5,-110,0,-18,5,-110,0,-18,5,-110,0,-18,5,-109,0,26,-18,5,26,-110,0,-16,5,-112,0,-16,5,-113,0,-14,5,-114,0,26,-12,5,26,-116,0,-10,5,-120,0,-6,5,-123,0,-4,5,-123,0,26,-4,5,26,-123,0,-4,5,-112,0,-3,4,-9,0,-4,5,-9,0,3,14,-100,0,-5,4,-21,0,-2,3,-100,0,-5,4,-8,0,-4,5,-111,0,-5,4,-8,0,-4,5,-112,0,-3,4,-9,0,-4,5,-124,0,-4,5,-123,0,-6,5,-121,0,-8,5,-115,0,-2,4,-3,0,-8,5,-3,0,-2,4,-112,0,-14,5,-114,0,-2,7,-10,5,-2,7,-114,0,-14,5,-112,0,-2,4,-3,0,-8,5,-3,0,-2,4,-116,0,-6,5,-123,0,-4,13,-11376,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-19,0,-6,5,-98,0,-5,5,-7,0,26,-4,0,26,-7,0,-5,5,-99,0,-3,5,-8,0,-6,5,-8,0,-3,5,-109,0,-10,5,-116,0,26,-3,5,-6,6,-3,5,26,-114,0,-3,5,6,-6,7,6,-3,5,-113,0,-3,5,6,-8,7,6,-3,5,-112,0,-2,5,6,-10,7,6,-2,5,-110,0,26,-2,5,6,-12,7,6,-2,5,26,-109,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-110,0,-2,5,6,-12,7,6,-2,5,-109,0,26,-2,5,6,-12,7,6,-2,5,26,-110,0,-2,5,6,-10,7,6,-2,5,-112,0,-3,5,6,-8,7,6,-3,5,-113,0,-3,5,6,-6,7,6,-3,5,-114,0,26,-3,5,-2,6,-2,7,-2,6,-3,5,26,-116,0,-4,5,-2,7,-4,5,-120,0,-2,5,-2,7,-2,5,-123,0,5,-2,7,5,-123,0,26,5,-2,7,5,26,-123,0,5,-2,7,5,-112,0,-3,5,-8,0,4,5,-2,7,5,4,-8,0,4,-2,14,-99,0,-5,5,-8,0,5,-2,7,5,-9,0,4,-2,14,-99,0,-5,5,-7,0,4,5,-2,7,5,4,-9,0,14,-100,0,-5,5,-8,0,5,-2,7,5,-112,0,-3,5,-8,0,4,5,-2,7,5,4,-123,0,5,-2,7,5,-123,0,-2,5,-2,7,-2,5,-121,0,-2,5,-4,7,-2,5,-117,0,-2,4,0,5,-6,7,5,0,-2,4,-116,0,-2,5,-6,7,-2,5,-118,0,-10,7,-118,0,-2,5,-6,7,-2,5,-116,0,-2,4,0,-2,5,-4,7,-2,5,0,-2,4,-118,0,-6,5,-123,0,-4,4,-11376,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-19,0,-2,5,-3,3,5,-99,0,5,0,5,-8,0,-2,4,-2,26,-2,4,-8,0,5,0,5,-109,0,-2,4,-2,0,-2,26,-2,0,-2,4,-116,0,26,4,-10,0,4,26,-114,0,4,-12,0,4,-113,0,4,-14,0,4,-112,0,4,-14,0,4,-110,0,26,4,-16,0,4,26,-109,0,4,-16,0,4,-110,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-110,0,4,-16,0,4,-109,0,26,4,-16,0,4,26,-110,0,4,-14,0,4,-112,0,4,-14,0,4,-113,0,4,-12,0,4,-114,0,26,4,-10,0,4,26,-116,0,-2,4,-6,0,-2,4,-120,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-111,0,5,0,5,-8,0,4,-4,0,4,-8,0,4,-2,14,-99,0,5,-3,3,5,-7,0,4,-4,0,4,-8,0,-3,14,-99,0,5,-3,3,5,-7,0,4,-4,0,4,-9,0,14,-100,0,5,-3,3,5,-7,0,4,-4,0,4,-111,0,5,0,5,-8,0,4,-4,0,4,-122,0,4,-4,0,4,-122,0,4,-4,0,4,-121,0,4,-6,0,4,-119,0,-2,4,-6,0,-2,4,-502,0,4,-8,0,4,-119,0,4,-6,0,4,-121,0,-6,4,-11375,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,26,-4,0,26,-7,0,5,-3,3,5,-99,0,5,0,5,-10,0,-2,26,-8,0,-3,5,0,5,-113,0,-2,26,-120,0,26,-12,0,26,-495,0,26,-18,0,26,-237,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-237,0,26,-18,0,26,-495,0,26,-12,0,26,-374,0,26,-4,0,26,-263,0,14,4,-102,0,5,0,5,-20,0,14,-2,4,-2,13,-99,0,5,-3,3,5,-20,0,-2,14,13,14,-99,0,5,-3,3,5,-22,0,14,-100,0,5,-3,3,5,-124,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,26,-4,0,26,-7,0,5,-3,3,5,-99,0,5,0,5,-10,0,-2,26,-10,0,5,0,5,-113,0,-2,26,-9,0,-2,5,-109,0,26,-12,0,26,-495,0,26,-18,0,26,-237,0,-2,26,-14,0,-2,26,-110,0,-2,26,-14,0,-2,26,-237,0,26,-18,0,26,-495,0,26,-12,0,26,-374,0,26,-4,0,26,-8,0,14,-126,0,13,4,14,-124,0,-2,13,4,13,-101,0,5,0,5,-19,0,13,14,-2,4,-101,0,5,-3,3,5,-19,0,14,13,-102,0,5,-3,3,5,-123,0,5,-3,3,5,-124,0,5,0,5,-12669,0,-3,5,-22,0,-3,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-7,0,-6,26,-7,0,5,-3,3,5,-99,0,-3,5,-6,0,-2,26,-6,0,-2,26,-6,0,-3,5,-107,0,-2,26,-10,0,-2,26,-5,0,5,-107,0,26,-14,0,26,-112,0,26,-14,0,26,-111,0,26,-16,0,26,-110,0,26,-16,0,26,-109,0,26,-18,0,26,-108,0,26,-18,0,26,-108,0,-2,26,-16,0,-2,26,-108,0,-2,26,-16,0,-2,26,-108,0,26,-18,0,26,-108,0,26,-18,0,26,-109,0,26,-16,0,26,-110,0,26,-16,0,26,-111,0,26,-14,0,26,-112,0,26,-14,0,26,-113,0,-2,26,-10,0,-2,26,-116,0,-2,26,-6,0,-2,26,-6,0,-2,13,-112,0,-6,26,-7,0,-3,13,14,-124,0,13,-2,4,-2,13,-123,0,-5,13,-99,0,-3,5,-19,0,-3,13,4,-2,13,-99,0,5,-3,3,5,-18,0,-3,13,-102,0,5,-3,3,5,-19,0,-2,14,-102,0,5,-3,3,5,-124,0,-3,5,-12669,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-98,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-127,0,5,-872,0,-2,26,-16,0,-2,26,-108,0,-2,26,-16,0,-2,26,-1025,0,-2,13,-125,0,-4,13,-123,0,-6,13,-123,0,-4,13,-100,0,-3,4,-20,0,-2,13,4,-101,0,-5,4,-20,0,13,4,-101,0,-5,4,-123,0,-5,4,-124,0,-3,4,-12669,0,-3,5,-22,0,-3,5,-99,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-98,0,-5,5,-20,0,-5,5,-99,0,-3,5,-22,0,-4,5,-127,0,5,-752,0,-2,6,-117,0,-2,26,-6,0,-4,6,-6,0,-2,26,-108,0,-2,26,-6,0,-4,6,-6,0,-2,26,-117,0,-2,6,-906,0,13,-127,0,-3,13,-124,0,-5,13,-124,0,-3,13,-100,0,-3,5,-21,0,13,4,-3,13,-98,0,-5,5,-20,0,13,4,-3,13,-98,0,-5,5,-20,0,-5,13,-98,0,-5,5,-21,0,-3,13,-100,0,-3,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-98,0,5,0,5,-22,0,5,0,5,0,5,-622,0,-4,4,-123,0,-6,4,-121,0,-3,4,-2,6,-3,4,-114,0,-2,26,-4,0,-2,4,-3,6,-3,4,-4,0,-2,26,-108,0,-2,26,-4,0,-2,4,-4,6,-2,4,-4,0,-2,26,-114,0,-3,4,-3,6,-2,4,-121,0,-4,4,6,4,-123,0,-4,4,-521,0,-2,13,-125,0,-4,13,-123,0,-6,13,-122,0,-6,13,-121,0,-7,13,-99,0,5,0,5,-19,0,-8,13,-97,0,5,-3,3,5,-19,0,-2,13,4,-4,13,-97,0,5,-3,3,5,-19,0,-7,13,-97,0,5,-3,3,5,-20,0,-5,13,-99,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-97,0,5,-3,3,5,-20,0,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-496,0,6,-3,4,-122,0,4,6,-6,4,-120,0,-8,4,-119,0,-10,4,-113,0,-2,26,-3,0,-9,4,6,-3,0,-2,26,-108,0,-2,26,-3,0,6,-8,4,6,-3,0,-2,26,-113,0,6,-9,4,-119,0,6,-7,4,-120,0,-8,4,-122,0,-4,4,-394,0,-2,13,-124,0,-2,12,-3,13,-122,0,12,-6,13,-120,0,12,-7,13,-120,0,-9,13,-97,0,5,0,5,-19,0,-8,13,12,-96,0,5,-3,3,5,-18,0,-3,13,0,-3,13,-2,12,-96,0,5,-3,3,5,-19,0,-6,13,12,-97,0,5,-3,3,5,-20,0,-3,13,-2,12,-99,0,5,0,5,-12669,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,5,-20,0,5,-3,3,-2,5,-97,0,5,-3,3,5,-20,0,5,-3,3,5,-98,0,5,-3,3,5,-20,0,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-368,0,6,-3,4,-122,0,4,6,-6,4,-119,0,-10,4,-118,0,-10,4,-117,0,-12,4,-112,0,-3,26,0,-12,4,0,-3,26,-108,0,-3,26,0,6,-11,4,0,-3,26,-112,0,6,-10,4,6,-117,0,6,-9,4,-118,0,6,-9,4,-119,0,-8,4,-122,0,-4,4,-266,0,-2,13,-124,0,-4,12,13,-122,0,-6,12,13,-120,0,-8,12,13,-119,0,-9,12,-97,0,5,0,5,-19,0,13,-8,12,-96,0,5,-3,3,5,-18,0,13,-2,12,0,-5,12,-96,0,5,-3,3,5,-19,0,13,-7,12,-96,0,5,-3,3,5,-20,0,-2,13,-4,12,-98,0,5,0,5,-23,0,-3,12,-12643,0,-3,5,-22,0,-5,5,-97,0,-6,5,-18,0,-6,5,-98,0,-6,5,-18,0,-6,5,-98,0,-6,5,-18,0,-6,5,-99,0,-3,5,-22,0,-3,5,-367,0,-3,6,-3,4,-121,0,6,-7,4,-119,0,-10,4,-117,0,-12,4,-116,0,-12,4,-113,0,-2,26,0,-12,4,0,-2,26,-110,0,-2,26,0,6,-11,4,0,-2,26,-113,0,6,-10,4,6,-116,0,6,-10,4,6,-117,0,6,-9,4,-119,0,6,-7,4,-121,0,-5,4,6,-393,0,-2,12,-124,0,-5,12,-123,0,-6,12,-120,0,-9,12,-97,0,-3,5,-19,0,-9,12,-96,0,-5,5,-19,0,-9,12,-95,0,-5,5,-19,0,-9,12,-95,0,-5,5,-21,0,-6,12,-97,0,-3,5,-24,0,-3,12,-12541,0,-2,5,-99,0,-3,4,-22,0,-3,4,-99,0,-7,4,-16,0,-7,4,-98,0,-7,4,-16,0,-7,4,-98,0,-7,4,-16,0,-7,4,-99,0,-3,4,-22,0,-3,4,-366,0,-3,6,-4,4,6,-119,0,6,-9,4,-117,0,-12,4,-116,0,-12,4,-116,0,-12,4,-113,0,-3,26,-12,4,-3,26,-110,0,-3,26,-12,4,-3,26,-113,0,6,-10,4,6,-116,0,6,-10,4,6,-116,0,-2,6,-9,4,6,-117,0,-2,6,-8,4,-119,0,6,-4,4,-2,6,4,-392,0,12,-125,0,11,-3,12,-124,0,-4,12,11,-122,0,-6,12,-99,0,-3,5,-20,0,-6,12,11,-97,0,-5,5,-19,0,-8,12,-96,0,-5,5,-20,0,11,-6,12,-96,0,-5,5,-22,0,-3,12,11,-98,0,-3,5,-12566,0,-2,5,-101,0,-3,5,-22,0,-3,5,-99,0,-8,5,-14,0,-8,5,-98,0,-8,5,-14,0,-8,5,-98,0,-8,5,-14,0,-8,5,-99,0,-3,5,-22,0,-3,5,-366,0,-2,6,-4,4,-2,6,-119,0,-9,4,6,-117,0,-12,4,-116,0,-11,4,6,-116,0,-11,4,6,-113,0,-3,26,-12,4,-3,26,-110,0,-3,26,-12,4,-3,26,-113,0,6,-11,4,-116,0,6,-10,4,6,-116,0,-2,6,-9,4,6,-117,0,6,-9,4,-119,0,-4,4,-3,6,4,-519,0,11,-2,12,-125,0,-2,11,12,-124,0,-5,11,-98,0,-5,4,-20,0,12,-4,11,-98,0,4,-3,0,4,-22,0,-5,11,-96,0,4,-3,0,4,-23,0,-3,11,12,-96,0,4,-3,0,4,-24,0,-2,12,-97,0,-5,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-6,5,-10,0,-6,5,-3,3,5,-99,0,-3,3,-6,5,-10,0,-6,5,-3,3,-99,0,5,-3,3,-6,5,-10,0,-6,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-366,0,4,-2,6,-4,4,6,-119,0,-9,4,6,-117,0,-10,4,-2,6,-116,0,-12,4,-116,0,-12,4,-114,0,-2,26,-12,4,-2,26,-112,0,-2,26,4,6,-10,4,-2,26,-114,0,4,6,-10,4,-116,0,-2,6,-10,4,-116,0,-2,6,-10,4,-117,0,6,-9,4,-119,0,-3,4,-5,6,-647,0,-2,11,-125,0,-4,11,-99,0,4,-3,0,4,-21,0,-4,11,-126,0,-3,11,-126,0,-2,11,-225,0,4,-3,0,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-8,5,-6,0,-8,5,-3,3,5,-99,0,-3,3,-8,5,-6,0,-8,5,-3,3,-99,0,5,-3,3,-8,5,-6,0,-8,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-366,0,-8,4,-119,0,-9,4,6,-117,0,-11,4,6,-116,0,-11,4,6,-116,0,6,-10,4,6,-114,0,-2,26,-2,6,-10,4,-2,26,-112,0,-2,26,-2,6,-10,4,-2,26,-114,0,-2,6,-10,4,-116,0,-2,6,-9,4,6,-116,0,-2,6,-9,4,6,-117,0,6,-9,4,-119,0,-2,4,-6,6,-877,0,4,-3,0,4,-507,0,4,-3,0,4,-12668,0,5,0,5,-22,0,5,0,5,-99,0,5,-3,3,-10,5,-2,0,-10,5,-3,3,5,-99,0,-3,3,-10,5,-2,0,-10,5,-3,3,-99,0,5,-3,3,-10,5,-2,0,-10,5,-3,3,5,-99,0,5,0,5,-22,0,5,0,5,-367,0,-4,4,-2,6,-121,0,-6,4,-2,6,-119,0,-7,4,-3,6,-117,0,-12,4,-116,0,4,6,-10,4,-115,0,26,-2,6,-10,4,26,-114,0,26,-2,6,-10,4,26,-115,0,-2,6,-10,4,-116,0,6,-10,4,6,-117,0,-10,4,-119,0,6,-7,4,-121,0,-6,6,-751,0,-3,4,-124,0,-5,4,-122,0,-2,4,-3,0,-2,4,-121,0,-2,4,-3,0,-2,4,-121,0,-2,4,-3,0,-2,4,-122,0,-5,4,-124,0,-3,4,-12541,0,-3,5,-22,0,-3,5,-99,0,5,-3,3,-22,5,-3,3,5,-98,0,5,-3,3,-22,5,-3,3,5,-98,0,5,-3,3,-22,5,-3,3,5,-99,0,-3,5,-22,0,-3,5,-368,0,-3,4,6,-122,0,-6,4,-2,6,-119,0,-9,4,6,-118,0,-9,4,6,-117,0,-2,6,-9,4,6,-116,0,-2,6,-10,4,-116,0,6,-11,4,-116,0,6,-10,4,6,-117,0,-9,4,6,-118,0,-9,4,6,-119,0,4,6,-6,4,-122,0,-3,6,4,-880,0,-3,4,-124,0,4,-3,0,4,-123,0,4,-3,0,4,-123,0,4,-3,0,4,-124,0,-3,4,-12668,0,-5,4,0,4,0,4,0,4,0,4,0,-2,4,0,4,0,4,0,4,0,4,0,-5,4,-98,0,4,-3,7,-22,5,-3,7,4,-98,0,4,-28,7,4,-98,0,4,-3,7,-22,5,-3,7,4,-98,0,-5,4,0,4,0,4,0,4,0,4,0,-2,4,0,4,0,4,0,4,0,4,0,-5,4,-495,0,-3,4,6,-122,0,-6,4,-2,6,-120,0,-7,4,6,-119,0,-9,4,6,-118,0,6,-9,4,-118,0,6,-9,4,-118,0,-10,4,-119,0,-8,4,-120,0,-2,6,-6,4,-122,0,-3,6,4,-1008,0,-3,4,-124,0,4,-3,0,4,-123,0,4,-3,0,4,-123,0,4,-3,0,4,-124,0,-3,4,-12668,0,-30,4,-98,0,4,-28,0,4,-98,0,4,-28,0,4,-98,0,4,-28,0,4,-98,0,-30,4,-623,0,-4,4,-123,0,-5,4,6,-121,0,-2,4,-3,6,-3,4,-120,0,4,-5,6,-2,4,-120,0,-2,4,-4,6,-2,4,-120,0,-3,4,-2,6,-3,4,-121,0,-6,4,-123,0,-2,6,-2,4,-1137,0,4,-126,0,-3,4,-124,0,-5,4,-124,0,-3,4,-126,0,4,-12669,0,4,-3,0,4,-20,0,4,-3,0,4,-482,0,4,-3,0,4,-20,0,4,-3,0,4,-880,0,-2,6,-125,0,-4,6,-124,0,-4,6,-125,0,-2,6,-1521,0,-3,4,-125,0,-3,4,-125,0,-3,4,-12796,0,4,-3,0,4,-20,0,4,-3,0,4,-482,0,4,-3,0,4,-20,0,4,-3,0,4,-2787,0,-3,4,-125,0,-3,4,-125,0,-3,4,-12669,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-97,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-96,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-96,0,-2,4,-3,0,-2,4,-18,0,-2,4,-3,0,-2,4,-97,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-2789,0,4,-12926,0,-3,4,-22,0,-3,4,-99,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-99,0,-3,4,-22,0,-3,4,-2795,0,-2,14,-120,0,4,-2,14,-2,0,14,-2,0,14,-122,0,-2,14,-12794,0,-3,4,-22,0,-3,4,-99,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-98,0,4,-3,0,4,-20,0,4,-3,0,4,-99,0,-3,4,-22,0,-3,4,-2795,0,13,-121,0,4,-2,13,-2,0,13,-125,0,-2,13,-12795,0,4,-24,0,4,-101,0,-3,4,-22,0,-3,4,-99,0,-5,4,-20,0,-5,4,-99,0,-3,4,-22,0,-3,4,-101,0,4,-24,0,4,-2918,0,4,-2,12,-128,0,-2,12,-12922,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-3045,0,4,-13054,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-100,0,-3,4,-22,0,-3,4,-16229,0,4,-24,0,4,-16358,0,4,-24,0,4,-16236,0,-2,14,-23,0,-2,14,-95,0,4,-2,14,-2,0,14,-2,0,14,-16,0,4,-2,14,-2,0,14,-2,0,14,-97,0,-2,14,-23,0,-2,14,-16104,0,13,-24,0,13,-96,0,4,-2,13,-2,0,13,-19,0,4,-2,13,-2,0,13,-100,0,-2,13,-23,0,-2,13,-16226,0,4,-2,12,-22,0,4,-2,12,-103,0,-2,12,-23,0,-2,12,-16226,0,4,-24,0,4,-1435956,0],\"uuid\":\"75184B45-EE35-4715-8795-CBF43477C07B\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4995126,7756116,9662817,10715503,13082230,15647642,16777215,16511542,6284153,4702084,3642478,4418392,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,4150124,11285042,14243683,14121914,9410378,9072432,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"bounds\":[39,87,37,90,0,40]}");

/***/ }),
/* 28 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[41,86,44,82,0,73],\"size\":[128,128,128],\"data\":[-5696,0,-4,3,-123,0,-6,3,-3,4,-118,0,-7,3,-3,2,-3,4,-114,0,-11,3,-3,2,-2,3,-110,0,-20,3,-106,0,-22,3,4,-103,0,-24,3,2,4,-100,0,-26,3,4,2,4,-98,0,6,-13,1,-13,3,-4,4,-96,0,-2,1,-8,0,-3,3,-3,1,-17,3,-94,0,2,1,-8,0,-5,3,-3,1,-16,3,-93,0,2,1,-9,0,-6,3,-3,1,-16,3,-91,0,-2,2,-10,0,-8,3,-2,1,-13,3,2,4,-90,0,5,1,-11,0,-6,3,1,-2,3,-2,1,-12,3,2,4,-90,0,1,-12,0,-10,3,1,-13,3,-2,4,-89,0,1,-12,0,-10,3,1,-13,3,2,4,-89,0,1,-12,0,-10,3,1,-13,3,2,4,-89,0,1,-13,0,-9,3,1,-15,3,4,-88,0,1,-13,0,3,1,-7,3,1,-15,3,4,-88,0,1,-14,0,1,-7,3,1,-16,3,-88,0,2,-14,0,1,-7,3,1,-16,3,-88,0,2,-15,0,-7,3,1,-16,3,-88,0,2,-16,0,-6,3,1,-15,3,-89,0,2,-18,0,-4,3,1,-15,3,-89,0,2,-18,0,-4,3,1,-14,3,4,-89,0,6,1,-16,0,-4,3,-2,1,-14,3,-91,0,2,1,-15,0,-4,3,1,-15,3,-92,0,2,1,-14,0,-3,3,1,-16,3,-93,0,-2,1,0,1,-11,0,-2,3,1,-16,3,-95,0,1,0,1,-11,0,-2,1,-17,3,-96,0,-14,1,-17,3,-98,0,-10,3,0,-18,3,-101,0,-26,3,-104,0,3,4,-20,3,4,-107,0,-2,4,-17,3,4,-110,0,4,-15,3,-113,0,4,-12,3,-116,0,-5,3,-4,4,-120,0,-4,4,-11772,0,-3,4,3,-123,0,4,-3,2,-5,3,-118,0,4,2,-10,3,4,-112,0,-16,3,4,-2,3,-111,0,-18,3,-112,0,-14,3,2,-2,3,-101,0,-2,6,-10,1,0,-12,3,-2,2,3,-98,0,-2,1,-11,0,-3,1,-12,3,2,-2,3,-96,0,5,1,-13,0,-3,1,-12,3,2,3,-95,0,5,1,-15,0,-3,1,-14,3,-93,0,-2,1,-18,0,-2,1,-13,3,-93,0,1,-19,0,3,1,-13,3,-92,0,5,-20,0,-2,3,1,-12,3,2,-91,0,5,-20,0,-2,3,1,-12,3,2,-91,0,6,-20,0,-2,3,1,-13,3,-91,0,1,-20,0,-2,3,1,-14,3,-90,0,1,-21,0,3,1,-14,3,-90,0,6,-20,0,-2,3,1,-12,3,4,3,-90,0,5,-18,0,-4,3,1,-12,3,-2,4,-90,0,5,-18,0,-4,3,1,-10,3,-3,4,2,-90,0,5,-17,0,-5,3,1,-10,3,-3,4,-91,0,5,-17,0,-5,3,1,-10,3,-3,4,-91,0,5,-16,0,-6,3,1,-10,3,-2,4,2,-92,0,1,-15,0,-5,3,1,-11,3,-2,4,-93,0,-2,1,-14,0,-5,3,1,-11,3,-2,4,-94,0,-2,1,-13,0,-4,3,1,-12,3,4,2,-95,0,2,1,-12,0,-3,3,1,-12,3,-2,4,-97,0,2,6,1,-11,0,-2,1,-13,3,4,2,-99,0,-2,5,-10,1,-15,3,2,-109,0,-18,3,-109,0,-18,3,-108,0,-19,3,-112,0,-15,3,-114,0,-9,3,-120,0,-4,3,-12284,0,2,-3,3,-121,0,-7,3,-3,2,4,-118,0,-10,3,4,-2,3,-117,0,-12,3,2,-113,0,-15,3,2,-102,0,6,-5,1,5,-7,1,-12,3,2,-100,0,2,-9,0,-5,3,1,-12,3,2,-98,0,2,-10,0,-6,3,1,-12,3,2,-96,0,2,-12,0,-6,3,1,-12,3,-95,0,1,-14,0,-18,3,-95,0,6,-15,0,-16,3,4,-95,0,6,-18,0,-14,3,4,-94,0,1,-17,0,-16,3,-94,0,1,-17,0,-3,3,1,-12,3,-94,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-17,0,-3,3,1,-13,3,-93,0,1,-18,0,-2,3,1,-12,3,-94,0,1,-16,0,-4,3,1,-12,3,-94,0,1,-15,0,-5,3,1,-12,3,-94,0,1,-15,0,-5,3,1,-11,3,-95,0,-2,1,-13,0,-6,3,1,-11,3,-96,0,1,-13,0,-5,3,1,-12,3,-97,0,1,-12,0,-4,3,1,-13,3,-98,0,1,-11,0,-3,3,1,-13,3,-100,0,1,6,5,-11,1,-13,3,-111,0,-16,3,-113,0,-12,3,-2,4,-113,0,-6,3,-4,2,3,-3,4,-114,0,-2,3,-4,2,-3,3,-3,4,-118,0,-4,3,-12925,0,-7,3,-119,0,4,-7,3,2,-3,3,-106,0,5,6,1,2,-3,5,2,-4,1,-7,3,2,-2,3,4,-103,0,5,1,-12,0,-2,1,-9,3,4,-94,0,16,-6,0,5,-16,0,1,-6,3,-2,2,3,4,-99,0,5,-18,0,1,-6,3,-2,2,3,4,-98,0,1,-18,0,1,-7,3,2,3,4,-97,0,1,-20,0,-10,3,-97,0,1,-20,0,-11,3,-96,0,1,-20,0,-8,3,2,-2,3,-96,0,1,-20,0,1,-8,3,2,3,-96,0,1,-20,0,1,-8,3,2,-2,3,-95,0,1,-20,0,1,-8,3,2,-2,3,-95,0,1,-20,0,1,-8,3,2,-2,3,-95,0,5,-20,0,1,-8,3,2,3,-96,0,5,-20,0,1,-7,3,2,-2,3,-96,0,5,-20,0,1,-10,3,-96,0,5,-20,0,1,-6,3,2,-2,3,-98,0,2,-18,0,1,-7,3,2,-2,3,-98,0,2,-18,0,1,-6,3,2,-2,3,4,-99,0,2,-16,0,1,-6,3,2,-2,3,4,-101,0,2,1,-12,0,-2,1,-6,3,2,-3,3,-104,0,2,-3,1,-3,2,-5,1,0,-6,3,2,-3,3,-115,0,-8,3,2,-3,3,-116,0,-9,3,-118,0,-6,3,-13307,0,-8,3,-128,0,3,-108,0,-14,1,-6,0,3,-98,0,16,-7,0,-2,1,-11,0,1,0,1,-6,0,3,-104,0,-2,1,-14,0,-2,1,-5,0,-2,3,-102,0,-2,1,-16,0,-2,1,-4,0,-3,3,-101,0,2,-18,0,1,-4,0,-3,3,-101,0,2,-18,0,1,-4,0,-4,3,-100,0,2,-18,0,1,-4,0,-3,3,4,-100,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,1,-18,0,1,-4,0,-4,3,4,-99,0,6,-18,0,1,-4,0,-3,3,4,-100,0,5,-18,0,1,-4,0,-4,3,-100,0,5,-18,0,1,-4,0,-3,3,-101,0,-2,1,-17,0,1,-4,0,-3,3,-102,0,-2,1,-14,0,-2,1,-5,0,3,4,-104,0,1,0,1,-11,0,-2,1,-6,0,4,-106,0,-2,1,-4,5,-3,1,-5,2,-6,0,4,-126,0,4,-119,0,-7,3,4,-13561,0,-2,3,-5,4,-123,0,3,-4,0,3,-108,0,5,-13,1,-6,0,3,-98,0,16,-7,0,-2,1,-13,0,1,-6,0,3,-104,0,-2,1,-15,0,1,-5,0,3,-103,0,2,1,-17,0,1,-4,0,3,4,-102,0,2,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,3,4,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-102,0,1,-18,0,1,-4,0,-2,3,-103,0,1,-16,0,1,-5,0,3,-105,0,1,-14,0,1,-6,0,4,-106,0,-2,1,-4,5,-4,1,-3,2,1,-6,0,4,-125,0,3,4,-119,0,-3,3,-2,2,-2,3,2,-13561,0,-2,3,-128,0,-4,4,-2,3,-108,0,-2,5,6,-11,1,-6,0,3,-98,0,16,-7,0,1,-14,0,1,-6,0,3,-104,0,1,-16,0,1,-5,0,3,-103,0,2,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-102,0,6,1,-18,0,1,-4,0,4,-102,0,6,1,-18,0,1,-4,0,4,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-104,0,1,-16,0,1,-5,0,3,-105,0,1,-13,0,-2,1,-6,0,3,-106,0,-2,1,-4,5,-5,1,2,-2,1,-6,0,3,-121,0,-6,3,-120,0,3,2,-13566,0,-2,3,-128,0,-2,4,-4,3,-108,0,-3,5,6,-10,1,-6,0,3,-98,0,16,-7,0,1,-14,0,1,-6,0,3,-104,0,1,-16,0,1,-5,0,3,-103,0,2,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,3,1,-18,0,1,-4,0,3,-102,0,6,1,-18,0,1,-4,0,3,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,4,-103,0,1,-18,0,1,-4,0,3,-104,0,1,-16,0,1,-5,0,3,-105,0,1,-14,0,1,-6,0,3,-106,0,6,2,-3,5,6,-7,1,2,-6,0,3,-121,0,-6,3,-120,0,-2,3,-13566,0,-2,3,-128,0,-5,3,2,-109,0,-3,5,2,-8,1,-7,0,2,-98,0,17,-7,0,2,-2,1,-11,0,-2,1,-5,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,3,1,-18,0,1,-3,0,2,-103,0,6,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,2,-104,0,1,-18,0,1,-3,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-106,0,2,1,-12,0,-2,1,-5,0,4,-108,0,6,-2,5,6,-5,1,6,-2,5,-5,0,3,0,4,-121,0,-6,3,-120,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-4,3,2,-99,0,17,-8,0,-2,1,-2,2,-6,1,2,-3,5,-6,0,3,-106,0,-2,1,-13,0,1,-5,0,3,-105,0,1,-15,0,-2,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,2,-104,0,3,1,-16,0,1,-4,0,2,-104,0,5,1,-16,0,1,-4,0,2,-104,0,3,1,-16,0,1,-4,0,2,-104,0,6,1,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,2,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-15,0,-2,1,-4,0,3,-106,0,1,-14,0,1,-5,0,3,-107,0,-2,1,-2,5,6,1,-4,2,1,-2,6,5,-6,0,4,-122,0,-2,4,-3,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-5,3,-99,0,15,-8,0,-11,1,2,-2,5,-6,0,3,-106,0,1,-14,0,1,-5,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,5,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,3,1,-16,0,1,-4,0,3,-104,0,6,1,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,2,-16,0,1,-4,0,3,-105,0,1,-16,0,1,-4,0,3,-106,0,1,-14,0,1,-5,0,3,-107,0,-2,1,5,6,-3,1,-2,2,-5,1,-6,0,2,-122,0,4,-4,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,-4,3,4,-99,0,16,-8,0,-13,1,5,-2,0,3,-2,0,-2,4,-106,0,1,-14,0,1,-2,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,3,1,-16,0,1,0,3,-2,0,3,-104,0,6,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,3,-105,0,2,-16,0,1,0,3,-2,0,3,-105,0,2,-16,0,1,0,3,-2,0,3,-105,0,1,-16,0,1,0,3,-2,0,2,-106,0,1,-14,0,1,-2,0,3,-2,0,2,-107,0,-14,1,-2,0,3,-2,0,3,2,-122,0,-5,3,-122,0,3,-125,0,-2,3,-13566,0,-2,3,-128,0,3,-128,0,3,-103,0,16,-8,0,-14,1,-2,0,-3,3,-108,0,1,-14,0,1,-2,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,2,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-107,0,1,-14,0,1,-2,0,3,0,3,-108,0,-14,1,-2,0,-3,3,-124,0,3,-126,0,3,-125,0,-2,3,-13567,0,3,-128,0,3,-128,0,3,-103,0,16,-8,0,6,-4,1,-3,5,-6,1,-2,0,-3,3,-108,0,1,-2,0,-2,1,-10,0,1,-2,0,3,0,3,-106,0,2,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,5,-16,0,1,0,3,0,3,-107,0,6,-14,0,1,-2,0,3,0,3,-108,0,6,2,-12,1,-2,0,-3,3,-124,0,3,-126,0,3,-126,0,3,-13695,0,-2,3,-128,0,3,-103,0,17,-9,0,6,-2,1,-4,5,6,-4,1,-3,0,3,-2,4,-108,0,-2,5,-12,0,5,1,-2,0,-2,3,4,-107,0,5,-14,0,1,-2,0,3,0,4,-106,0,2,-15,0,-2,1,0,3,0,4,-106,0,1,-16,0,1,0,3,0,2,-105,0,6,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,2,-105,0,3,1,-16,0,1,0,3,0,3,-105,0,6,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,1,-16,0,1,0,3,0,3,-106,0,5,-16,0,1,0,3,0,3,-107,0,1,-14,0,1,-2,0,3,0,3,-107,0,6,1,-12,0,-2,1,-2,0,3,0,4,-109,0,-2,2,-2,1,-2,2,1,6,-4,5,-3,0,-2,3,4,-124,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,3,-103,0,17,-24,0,3,-111,0,5,-12,1,5,-3,0,3,2,-108,0,5,1,-12,0,-2,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,3,2,-107,0,3,1,-14,0,1,-2,0,3,2,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,6,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,2,-14,0,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,-2,1,-12,0,-2,1,-2,0,-2,3,-109,0,1,-3,5,6,-4,1,6,-3,5,1,-3,0,-2,3,-125,0,3,-126,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-12,1,-2,5,-3,0,2,-109,0,1,-14,0,1,-2,0,3,2,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,5,1,-14,0,1,-2,0,-2,3,-107,0,3,1,-14,0,1,-2,0,-2,3,-107,0,6,1,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,5,-14,0,1,-2,0,-2,3,-108,0,2,-14,0,1,-2,0,-2,3,-108,0,1,-14,0,1,-2,0,-2,3,-108,0,-2,1,-13,0,1,-2,0,-2,3,-109,0,1,-2,5,6,-6,1,6,-2,5,1,-3,0,3,-126,0,3,-126,0,3,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-11,1,-3,5,-3,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,2,-109,0,5,-14,0,1,-2,0,2,-109,0,5,-14,0,1,-2,0,2,-109,0,2,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,0,1,-12,0,1,-2,0,2,-110,0,1,5,6,-8,1,6,5,1,-3,0,3,-126,0,3,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,16,-24,0,3,-111,0,-10,1,-4,5,-3,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,5,-14,0,1,-2,0,3,-109,0,6,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-109,0,1,-14,0,1,-2,0,2,-110,0,1,6,-10,1,6,1,-3,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-111,0,2,-8,1,6,-4,5,-3,0,2,-109,0,2,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,5,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,2,-109,0,2,-14,0,1,-2,0,2,-110,0,2,-5,1,-2,2,-6,1,-3,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-112,0,-7,1,6,-4,5,-4,0,3,-110,0,5,-11,0,-2,1,-3,0,3,-109,0,-2,1,-13,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,3,1,-14,0,1,-2,0,3,-108,0,6,1,-14,0,1,-2,0,3,-109,0,6,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,1,-14,0,1,-2,0,3,-109,0,2,1,-12,0,-2,1,-2,0,3,-110,0,5,1,-11,0,1,-3,0,2,-111,0,2,-3,1,-4,2,1,6,-2,5,-4,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,15,-24,0,3,-128,0,3,-110,0,-2,5,-12,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,5,-4,0,1,-7,0,1,-3,0,3,-110,0,-3,5,-2,2,-6,1,-2,2,1,-3,0,2,-127,0,3,-126,0,2,-126,0,2,-125,0,-2,3,-13822,0,3,2,-128,0,2,-103,0,17,-24,0,3,-128,0,3,-110,0,6,5,-10,1,6,1,-3,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,6,-12,0,1,-3,0,3,-110,0,5,-5,0,1,-6,0,1,-3,0,3,-110,0,6,5,6,2,-8,1,2,1,-3,0,3,-127,0,3,-117,0,-2,11,-7,0,3,-117,0,-3,11,-6,0,2,-118,0,-3,11,-4,0,-2,3,-13822,0,3,2,-128,0,3,-103,0,16,-23,0,-2,3,-128,0,3,-111,0,5,-9,1,6,5,-4,0,3,-110,0,5,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,3,1,-12,0,1,-3,0,3,-109,0,6,1,-12,0,1,-3,0,3,-110,0,2,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,1,-12,0,1,-3,0,3,-110,0,5,-5,0,1,-6,0,1,-3,0,3,-111,0,5,-11,1,-4,0,3,-127,0,3,-116,0,-3,11,-6,0,-2,3,-117,0,-3,11,-6,0,3,-118,0,-3,11,-5,0,3,-13823,0,3,-128,0,3,-103,0,16,-23,0,-2,3,-127,0,-2,3,-111,0,5,-8,1,6,-2,5,-3,0,-2,3,-110,0,5,-12,0,1,-2,0,-2,3,-110,0,2,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,5,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,6,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,6,-6,0,1,-5,0,1,-2,0,-2,3,-111,0,6,-11,1,-3,0,-2,3,-126,0,-2,3,-116,0,-3,11,-6,0,-2,3,-117,0,-3,11,-6,0,3,-118,0,-3,11,-5,0,3,-13823,0,3,-128,0,3,-103,0,16,-23,0,-2,3,-127,0,3,4,-111,0,5,1,6,-2,5,-4,1,-3,5,-3,0,-2,3,-110,0,5,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,3,1,-12,0,1,-2,0,-2,3,-109,0,6,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,1,-12,0,1,-2,0,-2,3,-110,0,2,-12,0,2,-2,0,-2,3,-111,0,6,-11,1,-3,0,-2,3,-116,0,-3,3,-7,0,3,4,-115,0,3,-3,11,3,-5,0,-2,3,-116,0,3,-3,11,3,-5,0,3,-117,0,3,-3,11,3,-4,0,3,-119,0,-3,3,-13701,0,3,-128,0,3,-103,0,16,-23,0,3,-128,0,2,-112,0,5,1,-4,5,-2,1,-4,5,-3,0,2,-111,0,6,-2,1,-10,0,1,-2,0,2,-111,0,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,3,1,-12,0,1,-2,0,3,-110,0,6,1,-12,0,1,-2,0,2,-111,0,1,-12,0,1,-2,0,2,-111,0,2,-12,0,1,-2,0,2,-111,0,2,-12,0,2,-2,0,2,-112,0,-11,1,2,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,6,-4,1,-5,0,3,-117,0,2,-3,0,6,-5,0,3,-117,0,5,-3,0,6,-4,0,3,-119,0,5,-2,6,-13701,0,3,-128,0,3,-103,0,17,-23,0,3,-128,0,2,-112,0,-12,12,-3,0,2,-111,0,12,-12,1,12,-2,0,2,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,2,-111,0,12,-12,1,12,-2,0,2,-112,0,-12,12,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,2,-4,1,-5,0,3,-117,0,1,-3,0,1,-5,0,3,-117,0,5,-3,0,6,-4,0,3,-118,0,-2,5,1,6,5,-13700,0,3,-128,0,3,-103,0,17,-23,0,3,-128,0,2,-112,0,-12,12,-3,0,2,-111,0,12,-12,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,-12,1,12,-2,0,2,-112,0,-12,12,-3,0,2,-117,0,-3,1,-7,0,2,-116,0,-5,1,-5,0,3,-117,0,1,-3,0,1,-5,0,3,-117,0,1,-3,0,1,-4,0,3,-118,0,-5,1,-13700,0,3,-128,0,3,-103,0,16,-23,0,3,-128,0,2,-113,0,-10,12,-4,0,2,-112,0,12,-10,1,12,-3,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,3,12,1,-10,0,1,12,-2,0,3,-110,0,6,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-10,0,1,12,-2,0,3,-111,0,12,1,-9,0,-2,1,12,-2,0,3,-112,0,12,-10,1,12,-3,0,3,-113,0,-10,12,-4,0,2,-117,0,-3,1,-7,0,2,-116,0,-6,1,-4,0,3,-116,0,5,-5,0,1,-4,0,3,-116,0,1,-5,0,5,-3,0,3,-118,0,-4,1,5,-13680,0,2,-2,1,-4,2,-2,1,-11,0,3,-106,0,3,-4,1,-2,2,-3,1,-12,0,3,-103,0,16,0,3,-9,1,-12,0,3,-106,0,-2,2,-5,1,-2,2,-13,0,2,-127,0,3,-114,0,-8,1,-5,0,3,-113,0,2,-9,1,-4,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-111,0,3,-2,1,-8,0,-2,1,-3,0,3,-112,0,6,1,-8,0,-2,1,-3,0,3,-113,0,6,-9,1,-4,0,3,-114,0,6,-6,1,-6,0,3,-115,0,-6,1,-6,0,3,-116,0,-6,1,-4,0,3,2,-115,0,5,-5,0,1,-4,0,3,-116,0,6,-5,0,1,-4,0,3,-116,0,1,-5,0,6,-3,0,3,-117,0,6,-4,1,6,5,-123,0,-3,5,-13427,0,6,-4,1,6,-119,0,2,-9,1,-2,5,-9,0,3,-103,0,-4,11,-11,1,-10,0,3,-102,0,-4,11,-11,1,-10,0,3,-105,0,3,5,2,-7,1,-2,2,-11,0,2,-127,0,3,-115,0,-6,1,-6,0,3,-113,0,2,-9,1,-4,0,3,-113,0,2,-8,0,1,-4,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,1,-8,0,-2,1,-3,0,3,-113,0,2,-8,0,1,-4,0,3,-113,0,-2,2,-6,1,0,1,-4,0,3,-115,0,2,-5,1,0,1,-4,0,3,-115,0,2,-5,1,-5,0,-2,3,-116,0,-6,1,-4,0,3,2,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-3,0,3,-117,0,-6,1,6,-122,0,6,2,-3,5,-13425,0,6,-7,1,-118,0,3,-11,1,5,6,-111,0,-4,11,-13,1,-8,0,3,-102,0,-4,11,-13,1,-8,0,3,-105,0,3,-2,5,-11,1,-9,0,3,-127,0,3,-127,0,3,-113,0,-10,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-8,0,1,-4,0,3,-113,0,1,-7,0,-2,1,-4,0,3,-113,0,-10,1,-4,0,3,-115,0,1,-5,0,-2,1,-4,0,3,-115,0,-5,1,-7,0,3,-116,0,-6,1,-4,0,-2,3,-115,0,1,-4,0,-2,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,-6,1,6,-122,0,-2,1,-3,5,-13425,0,-7,1,2,-118,0,3,-9,1,2,-3,1,6,5,-109,0,-4,11,-15,1,-6,0,3,-103,0,-3,11,-15,1,-6,0,3,-105,0,3,-3,5,-12,1,-7,0,3,-127,0,3,-113,0,-10,1,-4,0,3,-112,0,5,-11,1,-3,0,3,-112,0,5,-10,0,1,-3,0,3,-112,0,6,-10,0,1,-3,0,3,-112,0,6,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,2,-10,0,1,-3,0,3,-112,0,5,-11,1,-3,0,3,-113,0,-4,1,0,-5,1,-4,0,3,-117,0,-4,1,-6,0,3,-116,0,-6,1,-4,0,-2,3,-115,0,1,-4,0,-2,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,-6,1,2,-122,0,-2,1,2,-2,5,-13426,0,-5,1,2,-120,0,-8,1,-2,2,-5,1,5,-111,0,3,-16,1,-5,0,3,-103,0,15,0,3,-16,1,-5,0,3,-106,0,-4,5,-12,1,-6,0,3,-127,0,3,-113,0,-10,1,-4,0,3,9,-111,0,5,-11,1,-3,0,3,9,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,-12,1,-3,0,3,7,-111,0,9,-10,1,-4,0,3,9,-112,0,10,-2,0,-5,1,-6,0,3,-113,0,13,-3,0,-5,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-121,0,2,-5,1,2,-122,0,-3,1,-2,5,-13436,0,-2,2,6,-114,0,-2,6,-4,5,-4,1,2,-5,1,-111,0,1,6,-3,5,-12,1,-4,0,3,-103,0,17,-2,0,-18,1,-3,0,3,-107,0,-4,5,-12,1,-5,0,3,-127,0,3,9,-112,0,-10,1,-4,0,3,9,-111,0,2,-11,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,-12,1,-3,0,3,7,-111,0,9,-10,1,-4,0,3,7,-112,0,10,-2,0,-5,1,-6,0,3,9,-112,0,7,-7,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-2,1,-2,5,-13435,0,-2,2,-2,1,6,-118,0,5,-10,1,-116,0,-2,5,-10,1,-4,0,3,-103,0,17,-7,0,-13,1,-3,0,3,-112,0,-12,1,-4,0,3,-127,0,3,9,-112,0,-10,1,-4,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,10,-111,0,7,-10,1,-4,0,3,7,-112,0,10,1,0,-5,1,-6,0,3,7,-112,0,7,-7,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,3,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-2,1,2,5,-13435,0,2,-3,1,5,-122,0,-7,1,-120,0,5,-7,1,-4,0,4,-103,0,16,-11,0,-9,1,-3,0,3,-115,0,-9,1,-4,0,3,-127,0,3,7,-112,0,-10,1,-4,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,1,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,7,-111,0,2,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,9,-111,0,1,-10,0,1,-3,0,3,7,-111,0,7,-10,1,-4,0,3,7,-112,0,10,-7,1,-6,0,3,7,-112,0,7,-2,1,-5,0,1,-4,0,-2,3,-115,0,1,-5,0,1,-4,0,3,-116,0,1,-5,0,1,-4,0,4,-116,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,2,-3,1,5,-122,0,-7,1,-120,0,5,-7,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-116,0,-9,1,-3,0,3,-127,0,3,9,-113,0,-10,1,-3,0,3,9,-112,0,-2,1,-9,0,1,-2,0,3,7,-112,0,-2,1,-9,0,1,-2,0,3,7,-112,0,1,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,7,-112,0,2,-10,0,1,-2,0,3,10,-112,0,1,-10,0,1,-2,0,3,7,-112,0,1,-10,0,1,-2,0,3,7,-112,0,7,-10,1,-3,0,3,7,-113,0,10,-7,1,-5,0,3,7,-113,0,7,-2,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,1,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,2,-5,0,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,-3,1,-2,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,-12,1,-2,0,3,9,-112,0,1,-10,0,1,-2,0,3,7,-111,0,5,-2,1,-10,0,1,0,3,7,-111,0,6,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,1,-12,0,1,0,3,7,-111,0,5,-14,0,3,7,-111,0,9,1,-9,0,-2,1,-2,0,3,7,-111,0,-2,10,-10,1,-3,0,3,7,-112,0,13,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,5,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,2,-6,1,-121,0,2,-6,1,-122,0,2,-4,1,-13435,0,-3,1,-2,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,-12,1,-2,0,3,9,-111,0,1,-11,0,-2,1,0,3,7,-111,0,6,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,6,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-111,0,1,-11,0,-2,1,0,3,7,-111,0,9,1,-9,0,-2,1,-2,0,3,7,-111,0,10,-11,1,-3,0,3,7,-112,0,7,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,5,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,2,-6,1,-122,0,-5,1,-13435,0,-2,1,-3,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,16,-11,0,-9,1,-2,0,3,-115,0,-10,1,-3,0,3,-113,0,1,-3,0,-8,1,-2,0,3,7,-111,0,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-110,0,2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,6,1,-12,0,1,0,3,7,-110,0,5,1,-12,0,1,0,3,7,-111,0,9,-10,0,-2,1,-2,0,3,7,-111,0,10,1,-3,0,-7,1,-3,0,3,9,-112,0,7,-3,1,-5,0,5,-3,0,-2,3,-116,0,1,-5,0,1,-3,0,3,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,-7,1,-122,0,6,-3,1,2,-13435,0,6,1,-3,5,-122,0,-7,1,-120,0,-8,1,-3,0,3,-104,0,17,-11,0,-9,1,-2,0,2,-115,0,-10,1,-3,0,2,-113,0,1,-3,0,-8,1,-2,0,3,7,-111,0,1,-12,0,1,0,3,10,-110,0,5,1,-12,0,1,0,3,10,-110,0,5,1,-12,0,1,0,3,10,-110,0,-2,1,-12,0,1,0,3,10,-110,0,-2,1,-12,0,1,0,3,9,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,-2,1,-12,0,1,0,3,7,-110,0,2,1,-12,0,1,0,3,7,-111,0,10,-10,0,-2,1,-2,0,3,7,-111,0,10,1,-3,0,-7,1,-3,0,3,9,-111,0,-2,7,-3,1,-5,0,1,-3,0,3,2,-116,0,1,-5,0,1,-3,0,2,-117,0,1,-5,0,1,-3,0,3,-117,0,-7,1,-121,0,-7,1,-122,0,6,-2,1,2,5,-13436,0,6,-2,5,-123,0,5,-6,1,-120,0,5,-7,1,-2,0,3,-105,0,16,-11,0,-9,1,0,3,-116,0,-10,1,-2,0,3,-114,0,1,-3,0,-8,1,0,3,7,-112,0,5,-12,0,1,3,7,-111,0,5,1,-12,0,1,3,10,-111,0,5,1,-12,0,1,3,10,-111,0,2,1,-12,0,1,3,9,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,-2,1,-12,0,1,3,7,-111,0,2,1,-12,0,1,3,10,-111,0,2,1,-12,0,1,3,10,-112,0,10,-11,0,1,0,3,7,-112,0,7,1,-3,0,-7,1,-2,0,3,9,-112,0,7,9,-3,1,-5,0,1,0,1,-2,3,-117,0,1,-5,0,1,-2,0,3,-118,0,1,-5,0,1,-2,0,3,-118,0,-7,1,-121,0,5,-6,1,-123,0,6,-2,5,-13564,0,-4,1,2,-122,0,2,1,-2,0,-2,1,5,-2,0,3,-105,0,16,-11,0,2,0,-6,1,5,0,3,-116,0,-10,1,-2,0,3,-114,0,1,-3,0,-8,1,0,3,7,-112,0,5,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,10,-11,0,1,0,3,10,-112,0,7,1,-3,0,-7,1,-2,0,3,9,-112,0,-2,9,-3,1,-5,0,1,0,1,-2,3,-117,0,2,-5,0,1,-2,0,3,-118,0,1,-5,0,1,-2,0,3,-118,0,5,-5,1,5,-122,0,6,-3,1,5,-13692,0,-2,1,2,-124,0,-5,1,-3,0,3,-105,0,16,-12,0,-7,1,-2,0,3,-116,0,-10,1,-2,0,3,-114,0,6,-3,0,-8,1,0,3,9,-113,0,6,-11,0,1,3,7,-112,0,5,-12,0,1,3,7,-112,0,5,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,1,-12,0,1,3,7,-112,0,2,1,-11,0,1,3,7,-112,0,10,1,-10,0,1,0,3,7,-112,0,7,-2,1,-2,0,-7,1,-2,0,3,7,-112,0,-2,9,-3,1,-5,0,1,-2,0,-2,3,-117,0,2,-5,0,1,-2,0,3,-118,0,2,-4,0,1,5,-2,0,3,-119,0,-5,1,-124,0,6,1,5,-13561,0,3,-8,0,3,-118,0,3,-8,0,3,-117,0,3,-10,0,8,-106,0,16,-9,0,3,-4,0,-3,1,-3,0,8,3,-115,0,3,-2,0,-2,1,-6,0,-2,3,9,-115,0,-4,1,-5,0,-4,3,9,-113,0,2,-11,1,-2,3,9,-113,0,1,-10,0,1,-2,3,10,-113,0,1,-10,0,1,-2,3,10,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,7,-113,0,1,-10,0,1,-2,3,10,-113,0,5,-9,0,-2,1,-2,3,10,-112,0,7,1,-3,0,-7,1,-3,3,9,-112,0,-2,7,-3,1,-5,0,1,0,-3,3,9,-112,0,13,3,-3,1,-5,0,1,0,-2,3,7,-114,0,3,-2,0,2,-5,0,1,0,8,3,-115,0,3,-3,0,-5,1,-2,0,8,-117,0,3,-3,0,-3,1,-2,0,3,-118,0,3,-8,0,3,-13303,0,-8,3,-120,0,-8,3,-120,0,-8,3,-120,0,-8,3,-119,0,3,-8,0,3,-107,0,16,-10,0,3,-8,0,3,-118,0,3,-8,0,3,7,9,-116,0,-3,1,-6,0,-2,3,7,9,-114,0,5,-3,0,-6,1,-3,3,7,-114,0,2,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,-2,1,-9,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,1,-10,0,-2,3,7,-114,0,5,-10,0,-2,3,7,-114,0,5,-10,0,-2,3,7,-113,0,10,1,-3,0,-6,1,-3,3,7,-114,0,7,-3,1,-6,0,-2,3,-2,7,-114,0,7,3,-8,0,3,7,10,-116,0,3,-8,0,3,-118,0,-2,3,-7,0,3,-119,0,-8,3,-120,0,-8,3,-120,0,3,-7,0,3,-119,0,3,-7,0,3,-12920,0,-6,3,-122,0,-7,3,-121,0,-6,3,-123,0,-4,5,-123,0,-6,3,-121,0,-8,3,-108,0,16,-11,0,-8,3,-120,0,3,-6,0,3,7,-119,0,3,-6,0,3,-2,7,-117,0,1,3,1,-5,0,3,-3,7,-116,0,1,3,-6,1,-2,3,7,9,-116,0,1,3,-7,0,3,-2,7,-116,0,1,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,3,-8,0,3,7,10,-116,0,1,-8,0,3,7,10,-116,0,6,-8,0,3,-2,7,-116,0,6,3,-6,1,-2,3,-2,7,-115,0,10,1,-8,3,-3,7,-116,0,7,-8,3,-2,7,-117,0,10,-8,3,10,-119,0,-8,3,-120,0,-8,3,-121,0,-6,3,-123,0,-4,5,-123,0,-7,3,-121,0,-7,3,-121,0,3,-5,0,-2,3,-12665,0,-4,3,-123,0,-6,3,-124,0,5,1,-125,0,-3,5,1,-124,0,-4,5,-124,0,-4,5,-238,0,15,-12,0,-6,3,-122,0,-6,3,7,-121,0,-6,3,-2,7,-120,0,-6,3,-2,7,13,-119,0,-7,3,-2,7,10,-118,0,-2,3,-2,11,-3,3,-2,7,9,-117,0,3,-5,11,-2,3,-3,7,-116,0,3,-7,11,3,-2,7,10,-117,0,-7,11,3,-2,7,10,-116,0,3,-7,11,3,-2,7,10,-117,0,3,-5,11,-2,3,-2,7,9,-117,0,1,-2,3,-2,11,-3,3,-3,7,-118,0,-7,3,-2,7,10,-116,0,-2,7,-6,3,-2,7,13,-118,0,7,-6,3,-2,7,-119,0,9,7,-5,3,7,-121,0,-6,3,-251,0,-4,5,-124,0,1,-3,5,-124,0,1,-3,5,-125,0,-2,5,-124,0,-7,3,-122,0,-5,3,-12539,0,-4,3,-878,0,17,-270,0,-2,9,-2,7,10,-122,0,9,-5,7,10,-120,0,13,7,-2,3,-2,0,-2,7,9,-119,0,-2,3,-2,11,3,-2,0,-3,7,-117,0,3,-5,11,3,0,-3,7,-118,0,-6,11,3,-3,7,-118,0,-6,11,3,-3,7,-118,0,-6,11,3,-3,7,-117,0,3,-5,11,3,0,-3,7,-118,0,-2,3,-2,11,3,-2,0,-3,7,-118,0,-8,7,13,-119,0,-8,7,-120,0,-7,7,-122,0,9,-4,7,9,-1018,0,-5,3,-13421,0,16,-271,0,-3,7,-124,0,-5,7,-122,0,-8,7,-119,0,7,0,-2,7,-3,0,-3,7,-120,0,-2,11,-3,0,-3,7,-119,0,-4,11,-2,0,-3,7,-119,0,-4,11,-2,0,-3,7,-119,0,-4,11,-2,0,-3,7,-120,0,-2,11,-6,7,-121,0,-7,7,-118,0,-9,7,-120,0,-7,7,-122,0,-5,10,-14572,0,16,-271,0,-3,7,-124,0,-5,7,-122,0,7,-4,0,-3,7,-119,0,7,0,-8,7,-120,0,-8,7,-120,0,-2,11,-4,0,-2,7,-120,0,-2,11,-3,0,-3,7,-120,0,-2,11,-4,0,-2,7,-121,0,-3,7,-2,0,-2,7,-122,0,-6,7,-118,0,-9,7,-120,0,-7,7,-122,0,7,-3,10,7,-14572,0,16,-271,0,10,-2,7,-124,0,-5,7,-122,0,7,-3,0,-4,7,-119,0,7,-3,0,-6,7,-120,0,-3,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-119,0,-4,11,-3,0,-2,7,-120,0,-3,11,-3,0,-2,7,-122,0,-6,7,-118,0,9,-8,7,-120,0,-7,7,-122,0,9,-4,7,-14572,0,16,-271,0,-2,10,9,-124,0,9,-4,7,-122,0,7,-4,0,-3,7,-119,0,7,0,-3,11,-2,0,-2,7,10,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-119,0,-5,11,-2,0,-2,7,-120,0,-3,11,0,-4,7,-118,0,9,-7,7,10,-121,0,-4,7,10,7,-123,0,9,-2,7,-14573,0,16,-398,0,-2,9,-3,7,-122,0,7,-3,11,0,-3,7,-119,0,7,-5,11,0,-2,7,10,-119,0,-6,11,0,7,9,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-119,0,-6,11,0,-2,7,-118,0,9,-5,11,0,-3,7,-119,0,7,-3,11,-4,7,-121,0,-5,7,10,-14699,0,16,-398,0,-5,7,-122,0,7,-4,11,-3,7,-119,0,7,-6,11,-2,7,10,-119,0,-7,11,7,9,-119,0,-7,11,7,9,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-118,0,7,-6,11,-2,7,10,-119,0,7,-4,11,-3,7,-121,0,-5,7,10,-14699,0,17,-398,0,-4,7,9,-122,0,10,-4,11,-3,7,-119,0,7,-6,11,-2,7,-120,0,-7,11,7,10,-119,0,-7,11,7,10,-119,0,-7,11,7,10,-119,0,-7,11,-2,7,-119,0,-7,11,-2,7,-118,0,10,-6,11,7,13,-120,0,7,-4,11,-3,7,-121,0,-5,7,10,-14699,0,15,-398,0,-2,7,-2,9,10,-122,0,7,-4,11,13,-122,0,10,-5,11,7,10,-119,0,7,-7,11,7,-120,0,-7,11,7,-120,0,-7,11,7,-120,0,-7,11,7,-119,0,10,-7,11,7,-120,0,7,-5,11,-2,7,-120,0,10,-4,11,7,-123,0,-5,9,-14700,0,14,-399,0,7,-2,10,-124,0,7,-2,11,-2,7,-122,0,7,-4,11,7,13,-121,0,7,-5,11,7,10,-119,0,7,-7,11,7,-120,0,-7,11,7,-119,0,10,-7,11,7,-120,0,7,-5,11,-2,7,-120,0,10,-4,11,-2,7,-122,0,7,-2,11,-2,7,-124,0,-3,10,-14573,0,14,-126,0,-2,15,14,-12,0,-2,6,-4,3,-108,0,15,-12,0,6,1,-6,3,-119,0,6,1,-8,3,-117,0,6,1,-10,3,-116,0,6,-12,3,-115,0,-5,3,-3,11,-5,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-4,3,-5,11,-4,3,-115,0,-5,3,-3,11,-5,3,-115,0,-13,3,-116,0,-11,3,-118,0,-9,3,-120,0,-7,3,-122,0,-2,1,-3,3,-14060,0,14,-126,0,-3,15,-12,0,-3,5,-2,6,2,-106,0,14,15,16,-2,15,-10,0,5,-6,0,3,-106,0,17,-2,15,-10,0,5,-8,0,3,-106,0,15,-10,0,5,-4,0,-3,12,-3,0,3,-115,0,5,-4,0,12,-3,3,12,-3,0,2,-114,0,5,-3,0,-2,12,-3,3,-2,12,-3,0,2,-113,0,3,-2,0,-2,12,-5,3,-2,12,-2,0,2,-113,0,3,-2,0,12,-7,3,12,-2,0,2,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,12,-7,3,12,-2,0,3,-113,0,3,-2,0,-2,12,-5,3,-2,12,-2,0,3,-113,0,3,-3,0,-2,12,-3,3,-2,12,-3,0,3,-114,0,6,-3,0,12,-3,3,12,-3,0,3,-116,0,5,-3,0,-3,12,-3,0,3,-118,0,5,-7,0,3,-120,0,1,-5,0,3,-122,0,-3,1,-2,3,-13930,0,17,-4,16,-123,0,-5,16,-123,0,-5,16,-123,0,17,-3,16,17,-123,0,17,-3,16,17,-141,0,-3,12,-125,0,12,3,12,-124,0,12,-3,3,12,-122,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-121,0,12,-5,3,12,-122,0,12,-3,3,12,-124,0,12,3,12,-125,0,-3,12,-14316,0,17,-2,16,-125,0,-3,16,-125,0,-2,16,17,-125,0,-3,16,-125,0,-2,16,17,-125,0,-3,16,-125,0,17,-2,16,-142,0,3,-2,1,-124,0,-4,3,2,-123,0,-4,3,2,-123,0,-5,3,-123,0,-5,3,-123,0,-5,3,-123,0,1,-4,3,-123,0,1,-3,3,1,-124,0,-2,3,1,-14316,0,-3,16,-125,0,-3,16,-125,0,17,-2,16,-126,0,15,-126,0,-2,16,17,-126,0,16,-126,0,15,-2,16,-125,0,-3,16,-125,0,-3,16,-141,0,-4,3,1,-123,0,1,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,5,-123,0,-4,3,6,-123,0,-5,3,-124,0,-2,3,1,-14316,0,16,-2,17,-125,0,-2,16,17,-125,0,17,-2,16,-254,0,17,-126,0,17,16,17,-126,0,16,-254,0,15,-2,16,-125,0,-3,16,-125,0,17,16,17,-13,0,1,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,5,-123,0,5,-3,3,6,-123,0,2,-4,3,-124,0,-3,3,-125,0,-3,3,-14829,0,17,-126,0,17,16,17,-126,0,16,-399,0,-3,3,-124,0,-5,3,-123,0,-5,3,-123,0,-5,3,-123,0,2,-4,3,-124,0,-3,3,-125,0,-3,3,-14957,0,17,-126,0,17,16,17,-126,0,16,-399,0,-3,3,-125,0,-3,3,-124,0,-5,3,-123,0,2,-4,3,-124,0,-3,3,-125,0,-2,3,2,-125,0,-2,3,2,-14957,0,16,-126,0,17,-2,16,-126,0,16,-271,0,-3,3,-125,0,-3,3,-125,0,1,3,1,-125,0,5,3,5,-125,0,5,3,6,-125,0,-2,3,2,-125,0,-2,3,2,-15085,0,15,-126,0,15,16,14,-126,0,15,-271,0,-3,3,-125,0,1,3,5,-124,0,-2,5,3,-2,5,-124,0,5,3,6,-125,0,-3,3,-125,0,-2,3,2,-14828,0,-2,17,16,-14,0,5,6,3,-108,0,-3,16,-125,0,-2,16,17,-126,0,15,-126,0,14,16,15,-126,0,14,-126,0,-3,16,-14,0,-3,3,-108,0,17,-2,16,-14,0,5,3,5,-108,0,-3,17,-13,0,-2,5,3,-2,5,-124,0,5,3,1,-125,0,-3,3,-125,0,-3,3,-15101,0,-2,3,1,-108,0,17,-2,16,-14,0,-3,3,-108,0,-2,16,15,-14,0,-3,3,-108,0,15,-2,16,-125,0,-2,16,15,-14,0,-3,3,-108,0,17,-2,16,-14,0,6,3,1,-124,0,-2,5,3,-2,5,-124,0,5,3,5,-125,0,-3,3,-125,0,-3,3,-15469,0,14,-15,0,-3,3,-108,0,-3,14,-14,0,1,-2,3,-109,0,14,-15,0,6,3,6,-125,0,5,3,5,-125,0,5,3,5,-125,0,-3,3,-125,0,-3,3,-15725,0,14,-15,0,-3,3,-125,0,-3,3,-125,0,-3,3,-125,0,-3,3,-125,0,-3,3,-893506,0],\"uuid\":\"C4E0CFD1-227D-4C27-8038-65D60F3231F9\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[11141120,8912896,7798784,5570560,14483456,12255232,8947848,4456448,7829367,11184810,13395507,1118481,5592405,13382400,16737792,13408512,16750848],\"bounds\":[41,86,44,82,0,73]}");

/***/ }),
/* 29 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[50,76,51,76,8,54],\"size\":[128,128,128],\"data\":[-137669,0,-3,6,-126,0,-2,6,-126,0,-2,6,-126,0,6,-127,0,6,-1663,0,-2,1,-125,0,-4,1,-124,0,-4,1,6,-124,0,-3,1,6,-125,0,-3,6,-13819,0,-2,6,-126,0,-2,6,-126,0,-2,6,-126,0,6,-1535,0,1,-126,0,-3,1,-126,0,-3,1,-126,0,-2,1,-14205,0,1,-127,0,-2,1,-126,0,-2,1,-126,0,1,-1406,0,-3,1,-125,0,-3,1,-125,0,-4,1,-126,0,1,-14206,0,1,-127,0,-2,1,-126,0,-2,1,-126,0,-2,1,-1406,0,-2,1,-125,0,1,-2,8,1,-124,0,1,8,1,-126,0,1,-14207,0,1,-126,0,-3,1,-125,0,-3,1,-125,0,-3,1,-1406,0,8,-126,0,-3,8,-126,0,-2,8,-14461,0,-3,1,-125,0,-3,1,-125,0,-2,1,8,-1272,0,2,-8,0,2,-118,0,2,-4,0,-2,8,-2,0,2,-118,0,2,-4,0,-3,8,0,2,-118,0,2,-5,0,-2,8,0,2,-118,0,2,-8,0,2,-118,0,2,-8,0,2,-105,0,-3,1,-14223,0,-3,8,-125,0,-3,8,-126,0,-2,8,-888,0,2,-8,0,3,-118,0,2,-8,0,3,-119,0,6,-7,0,6,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-106,0,-3,1,-14222,0,-2,8,-126,0,-3,8,-125,0,-3,8,-760,0,2,-8,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-107,0,-3,1,-14349,0,-3,8,-125,0,-3,8,-125,0,-3,8,-633,0,3,-7,0,3,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-108,0,-3,1,-14348,0,-3,8,-125,0,-3,8,-125,0,-3,8,-633,0,3,-7,0,3,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-3,0,-3,8,0,5,-119,0,5,-7,0,5,-119,0,5,-7,0,5,-109,0,-3,1,-14347,0,-2,8,-126,0,-3,8,-125,0,-3,8,-125,0,-3,8,-505,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-2,0,-2,8,-3,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-3,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-110,0,-3,1,-14474,0,-3,8,-125,0,-3,8,-125,0,-3,8,-125,0,-2,8,-378,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-7,0,6,-119,0,6,-2,0,-3,8,-2,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-119,0,1,-7,0,1,-111,0,-3,1,-14473,0,-2,8,-125,0,-4,8,-124,0,-4,8,-125,0,-3,8,-377,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-3,0,-2,8,-2,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-7,0,1,-112,0,-3,1,-14599,0,-4,8,-124,0,-5,8,-123,0,-5,8,-124,0,-3,8,-249,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,6,-2,0,-4,8,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-113,0,-3,1,-14599,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-124,0,-3,8,-121,0,3,-7,0,3,-119,0,6,-7,0,6,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-114,0,-3,1,-14725,0,-4,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,-3,0,-3,8,0,3,-119,0,6,-7,0,6,-119,0,1,-3,0,-2,8,-2,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-119,0,1,-7,0,1,-115,0,-3,1,-14725,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,-2,0,-5,8,3,-119,0,6,-3,0,-3,8,0,6,-119,0,1,-7,0,1,-119,0,1,-2,0,-4,8,0,1,-119,0,1,-2,0,-5,8,1,-119,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,1,-2,0,-4,8,0,1,-114,0,-4,7,0,2,-3,0,-2,8,-2,0,2,-114,0,-4,7,0,2,-7,0,2,-116,0,-3,1,-14467,0,-3,8,-125,0,-3,8,-126,0,-3,8,-124,0,-5,8,-123,0,-5,8,-123,0,-5,8,-120,0,3,0,-6,8,3,-119,0,6,0,-5,8,0,6,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-6,8,2,-115,0,-2,7,-2,0,2,-2,0,-4,8,0,2,-114,0,-4,7,0,2,-7,0,2,-114,0,-4,7,0,2,-7,0,2,-115,0,-2,7,-3,1,-123,0,-2,7,-14341,0,-3,8,-125,0,-3,8,-126,0,8,-127,0,-3,8,-124,0,-5,8,-122,0,-6,8,-120,0,3,0,-6,8,3,-119,0,1,0,-5,8,0,1,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-5,8,0,2,-119,0,2,0,-6,8,2,-114,0,-4,7,0,2,-3,0,-2,8,-2,0,2,-114,0,-4,7,0,2,-7,0,2,-114,0,-4,7,-3,1,-122,0,-2,7,-14214,0,-2,4,-125,0,4,-2,8,4,-124,0,4,8,0,4,-124,0,4,-2,0,4,-125,0,-2,4,-125,0,-5,8,-122,0,-6,8,-120,0,3,0,-6,8,3,-119,0,1,0,-5,8,0,1,-119,0,1,0,-5,8,0,1,-119,0,1,0,-6,8,1,-119,0,1,0,-5,8,0,1,-119,0,2,0,-5,8,0,2,-119,0,2,0,-6,8,2,-115,0,-2,7,-2,0,2,-2,0,-4,8,0,2,-114,0,-4,7,-2,0,2,-6,0,2,-114,0,-4,7,0,-3,1,-121,0,-2,7,-14214,0,-2,5,-125,0,5,-2,6,5,-124,0,5,6,0,5,-124,0,5,-2,0,5,-125,0,-2,5,-125,0,-4,8,-123,0,-6,8,-121,0,2,-6,8,3,-120,0,1,-5,8,0,1,-120,0,1,-5,8,0,1,-120,0,1,-6,8,1,-120,0,1,-5,8,0,1,-120,0,2,-5,8,0,2,-120,0,2,-6,8,2,-120,0,2,0,-4,8,-2,2,-114,0,-4,7,-2,0,2,-5,0,2,-115,0,-4,7,-2,0,-3,1,-119,0,-4,7,-125,0,-2,7,-14086,0,-2,6,-125,0,-4,6,-124,0,-2,6,0,6,-124,0,6,-2,0,6,-124,0,-3,6,-126,0,-3,8,-124,0,-2,8,1,8,2,-121,0,2,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,1,-121,0,1,-5,8,2,-121,0,2,-5,8,2,-121,0,2,0,-4,8,2,-121,0,-2,2,-4,0,2,-116,0,-2,7,-4,0,-5,2,-116,0,-4,7,-3,0,-2,1,-2,5,-117,0,-4,7,-124,0,-4,7,-14085,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-3,6,-125,0,2,-4,1,-123,0,2,-3,1,2,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,1,-122,0,1,0,-3,8,2,-122,0,2,0,-3,8,2,-122,0,2,0,-3,8,2,-123,0,-4,2,-116,0,-4,7,-124,0,-4,7,-4,0,-3,5,-117,0,-4,7,-124,0,-4,7,-14213,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-126,0,2,-126,0,-3,2,-124,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,2,-3,8,2,-123,0,-5,2,-244,0,-3,7,-2,0,-3,6,-119,0,-4,7,-2,0,-2,6,-2,5,-2,9,-116,0,-4,7,-3,0,-3,6,-118,0,-4,7,-14213,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-252,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-125,0,-3,2,-245,0,-4,7,-4,6,-120,0,-4,7,-5,6,-3,9,8,-115,0,-4,7,0,-5,6,5,-2,4,-115,0,-4,7,-2,0,-4,6,-2,5,-116,0,-3,7,-14085,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-252,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-248,0,-3,6,-122,0,-4,7,-5,6,-3,0,8,-115,0,-4,7,-6,6,-3,9,8,-114,0,-4,7,-6,6,-2,5,8,-115,0,-4,7,0,-5,6,-2,5,4,-115,0,-4,7,-3,0,-4,6,-14077,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-125,0,-2,6,-126,0,-2,5,-125,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-124,0,-4,5,-125,0,-2,5,-249,0,-3,6,-123,0,-3,7,-2,6,-7,0,8,-114,0,-4,7,-2,6,0,-2,6,-2,0,-3,9,8,-113,0,-4,7,-7,6,0,4,8,-114,0,-4,7,-3,0,-4,6,0,4,-116,0,-3,7,-14212,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-125,0,-2,4,-125,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-124,0,-4,4,-125,0,-2,4,-250,0,-3,6,-124,0,-4,6,-123,0,-4,7,6,-5,0,-3,9,-115,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14083,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-4,6,-124,0,-3,1,-125,0,-4,1,-124,0,-5,1,-123,0,-5,1,-123,0,-5,1,-123,0,-4,1,-124,0,-3,1,-250,0,-3,6,-125,0,-4,6,-122,0,-4,7,-2,6,-5,0,-3,9,-114,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14083,0,-2,6,-125,0,-4,6,-124,0,-4,6,-124,0,-2,6,-2,1,-124,0,6,-3,1,-123,0,-5,1,6,-122,0,-5,1,-2,6,-121,0,-5,1,-2,6,-121,0,-5,1,-2,6,-121,0,-5,1,6,-123,0,-4,1,-124,0,6,-3,1,-122,0,-5,6,-122,0,-6,6,-120,0,-4,7,-3,6,-5,0,-3,9,-113,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14082,0,-2,6,-125,0,-4,6,-124,0,6,-3,1,-124,0,6,-3,1,-124,0,-3,6,1,-123,0,-7,6,-121,0,-7,6,-121,0,-7,6,-121,0,-7,6,-121,0,-7,6,-122,0,-3,6,1,-124,0,6,-3,1,-123,0,-4,6,1,-122,0,-5,6,-121,0,-3,7,-3,6,-6,0,-2,9,-113,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14082,0,-2,6,-125,0,-4,6,-124,0,6,-3,1,-124,0,-3,6,1,-123,0,-7,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-120,0,-8,6,-121,0,-7,6,-122,0,-3,6,1,-123,0,-4,6,1,-123,0,-4,6,-121,0,-4,7,-2,6,-122,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14210,0,-2,6,-125,0,-4,6,-123,0,-6,6,-121,0,-8,6,-120,0,-7,6,-121,0,-3,6,-2,4,-2,1,-121,0,-3,6,-2,4,-2,1,-121,0,-3,6,-2,4,-2,1,-121,0,-7,6,-121,0,-8,6,-121,0,-7,6,-122,0,-4,6,-124,0,-3,6,-121,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14337,0,-2,6,-124,0,-6,6,-121,0,-7,6,-121,0,-3,6,-2,4,1,4,-121,0,-3,6,-3,4,-122,0,-3,6,-3,4,-122,0,-3,6,-3,4,-122,0,-3,6,-4,4,-121,0,-7,6,-122,0,-6,6,-124,0,-2,6,-249,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14592,0,-3,6,-124,0,-2,6,-3,4,-123,0,6,-2,4,8,-124,0,6,-2,4,8,-124,0,6,-2,4,8,-124,0,-2,6,-3,4,-124,0,-3,6,-506,0,-3,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14720,0,-3,4,-125,0,4,-2,8,-125,0,4,-2,8,-125,0,4,-2,8,-125,0,-3,4,-634,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-3,7,-14592,0,-2,7,-125,0,7,-3,8,-124,0,7,-4,8,-123,0,7,-4,8,-123,0,7,-3,8,-124,0,7,-2,8,7,-125,0,-2,7,-507,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14463,0,-3,7,-124,0,-3,7,-2,8,-122,0,-2,7,-5,8,-121,0,-2,7,-5,8,-121,0,-2,7,-5,8,-121,0,-2,7,-4,8,-122,0,-2,7,-3,8,7,-123,0,-4,7,-506,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14211,0,7,-123,0,-4,7,0,7,-121,0,-5,7,-122,0,-5,7,-2,8,-120,0,-3,7,-5,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-121,0,-2,7,-3,8,-2,7,-121,0,-6,7,-124,0,-2,7,-379,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14334,0,-6,7,-121,0,-8,7,-119,0,-6,7,-2,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-120,0,-7,7,-122,0,-4,7,-250,0,-3,7,-126,0,-3,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-3,7,-14334,0,-6,7,-121,0,-8,7,-119,0,-6,7,-2,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-119,0,-2,7,-5,8,-2,7,-120,0,-7,7,-122,0,-4,7,-251,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-14335,0,-4,7,-122,0,-7,7,-121,0,-5,7,8,-2,7,-119,0,-3,7,-5,8,-120,0,-2,7,-6,8,-120,0,-2,7,-5,8,-2,7,-119,0,-2,7,-5,8,-2,7,-120,0,-2,7,-3,8,-2,7,-121,0,-6,7,-123,0,-4,7,-251,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-14589,0,-5,7,-122,0,-7,7,-121,0,-2,7,-2,8,-4,7,-120,0,-2,7,-3,8,-3,7,-120,0,-2,7,-3,8,-3,7,-120,0,-2,7,-3,8,-2,7,-121,0,-2,7,-2,8,-2,7,-123,0,-4,7,-126,0,5,-252,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-14718,0,-4,7,-123,0,-6,7,-122,0,-6,7,-122,0,-6,7,-123,0,-4,7,-124,0,5,-2,7,5,-123,0,-6,5,-123,0,5,0,7,5,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-15485,0,-2,5,-125,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-15614,0,-2,7,-125,0,-4,7,-124,0,-4,7,-124,0,-4,7,-124,0,-4,7,-125,0,-2,7,-15870,0,-2,7,-126,0,-2,7,-126,0,-2,7,-126,0,-2,7,-1203131,0],\"uuid\":\"F02050FE-4200-47B8-877A-2105B74D5E66\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[13260,170,187,10053120,13408512,3381759,43520,16764006,13158],\"bounds\":[50,76,51,76,8,54]}");

/***/ }),
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part0\",\"bounds\":[59,68,55,72,0,47],\"size\":[128,128,128],\"data\":[-7102,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-120,0,-3,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-118,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-119,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-121,0,-6,9,-123,0,-4,9,-14204,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-5,4,-118,0,-3,9,-2,0,-5,4,-118,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-125,0,-3,9,-2,0,-5,4,-119,0,-2,9,-2,0,-5,4,-119,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,-2,9,-121,0,-6,9,-123,0,-4,9,-14204,0,-4,9,-123,0,-6,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,5,-121,0,-2,9,-2,0,5,6,5,-120,0,-3,9,-3,0,5,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,-3,0,5,-122,0,-2,9,-2,0,5,6,5,-121,0,-2,9,-2,0,-3,5,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,-2,9,-120,0,-2,9,-4,0,9,12,-121,0,-6,9,-123,0,-4,9,-14205,0,-3,9,-123,0,-6,9,-121,0,-2,9,-4,0,12,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,12,-122,0,-6,9,-124,0,-3,9,-14205,0,-2,9,-124,0,-6,9,-121,0,-2,9,-4,0,11,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,9,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,9,-121,0,-2,9,-4,0,9,12,-120,0,-2,9,-4,0,11,-122,0,-6,9,-124,0,-2,9,-14206,0,9,-125,0,-6,9,-122,0,9,-4,0,11,-122,0,9,-4,0,9,11,-120,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,9,11,-121,0,9,-4,0,11,-122,0,-6,9,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,11,-121,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,11,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-121,0,-2,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-4,0,12,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14207,0,9,-125,0,-5,9,11,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,13,-122,0,9,-4,0,13,-122,0,-5,9,11,-124,0,9,-14333,0,-5,9,12,-122,0,9,-4,0,11,-122,0,9,-4,0,11,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-121,0,-3,9,-125,0,-3,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,11,-122,0,9,-4,0,11,-122,0,-5,9,12,-14458,0,-5,9,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-3,0,6,-122,0,-2,9,-126,0,-2,9,-126,0,-2,9,-3,0,6,-122,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-3,6,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,-5,9,12,-14458,0,-6,9,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,9,-4,0,9,-121,0,-2,9,-2,0,6,-2,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-3,0,5,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-3,0,5,6,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,6,-2,5,-122,0,9,-4,0,9,-122,0,9,-4,0,12,-122,0,9,-4,0,12,-122,0,-6,9,-14332,0,9,-125,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,12,-122,0,9,-3,0,5,9,-122,0,9,-2,0,5,-2,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-3,6,-122,0,9,-2,0,5,-2,6,-122,0,9,-3,0,5,9,-122,0,9,-4,0,12,-122,0,9,-4,0,9,-122,0,-6,9,-124,0,9,-14207,0,9,-125,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,0,-3,5,12,-122,0,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-2,6,5,-121,0,-2,9,-2,0,-2,6,5,-122,0,9,-2,0,-2,6,5,-122,0,9,0,-3,5,12,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,-6,9,-124,0,9,-14207,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,6,4,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,-2,9,-121,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,-2,0,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,-6,9,-124,0,-2,9,-14206,0,-2,9,-124,0,-6,9,-122,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-122,0,-2,9,0,-2,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-121,0,-2,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,-6,9,-124,0,-2,9,-14333,0,-4,9,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-123,0,9,0,-2,6,4,6,-121,0,-2,9,-2,0,-3,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-122,0,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,-2,9,-121,0,9,-4,0,9,-123,0,-4,9,-14460,0,-4,9,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-2,0,-2,6,-123,0,9,0,-2,6,4,6,-121,0,-2,9,-2,0,6,4,6,-121,0,-2,9,-126,0,-2,9,-126,0,-2,9,-2,0,-3,6,-122,0,9,0,-2,6,4,6,-122,0,9,-2,0,-2,6,-123,0,9,-4,0,9,-122,0,9,-4,0,9,-122,0,9,-4,0,9,-123,0,-4,9,-14460,0,-4,9,-123,0,-6,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,0,-3,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,0,-3,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-6,9,-123,0,-4,9,-14588,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,0,-3,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,0,-3,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,-2,6,4,6,-121,0,-3,9,-4,6,-121,0,-3,9,-125,0,-3,9,-125,0,-3,9,-4,6,-122,0,-2,9,-2,6,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,-123,0,-2,9,6,-2,4,6,-122,0,-2,9,6,4,-2,6,-122,0,-2,9,-3,6,-123,0,-2,9,-3,6,-123,0,-2,9,6,4,-2,6,-122,0,-2,9,6,-2,4,6,-122,0,-2,9,0,-2,6,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,9,-123,0,-4,9,-14589,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,6,9,-122,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,6,4,6,-123,0,-2,9,0,-2,6,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,5,9,-122,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,-3,5,-123,0,-2,9,0,-2,5,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-122,0,-2,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,-126,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,-126,0,-2,9,-3,0,9,-122,0,-2,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,-126,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,-126,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14462,0,-2,9,-125,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-125,0,-2,9,-14589,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,-2,9,-121,0,-2,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,-3,0,9,-123,0,9,-3,0,-2,9,-122,0,9,0,3,0,9,-123,0,-4,9,-14716,0,-4,9,-124,0,9,0,3,0,9,-123,0,9,-3,0,9,-123,0,9,-3,0,9,-122,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,7,8,-123,0,-2,9,0,7,8,-123,0,-2,9,0,-2,7,-123,0,-2,9,0,-2,7,-124,0,9,-3,0,9,-123,0,9,-3,0,9,-123,0,9,0,3,0,9,-123,0,-4,9,-14717,0,-3,9,-124,0,-2,9,3,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,-2,7,-124,0,-2,9,-2,7,-124,0,-2,9,7,8,-124,0,-2,9,7,8,-124,0,-2,9,-2,7,-124,0,-2,9,-2,7,-124,0,-2,9,-2,0,9,-123,0,-2,9,-2,0,9,-123,0,-2,9,3,0,9,-124,0,-3,9,-14717,0,5,-2,9,-124,0,-2,5,3,-2,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,-2,7,-124,0,-2,5,-2,7,-124,0,-2,5,7,8,-124,0,-2,5,7,8,-124,0,-2,5,-2,7,-124,0,-2,5,-2,7,-124,0,-2,5,-2,0,9,-123,0,-2,5,-2,0,9,-123,0,-2,5,3,-2,9,-124,0,5,-2,9,-14717,0,1,-2,5,-125,0,1,3,1,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,7,5,-123,0,-2,1,7,4,5,-123,0,-2,1,7,8,-124,0,-2,1,7,8,-124,0,-2,1,7,4,5,-123,0,-2,1,-2,7,5,-123,0,-2,1,-2,0,5,-123,0,-2,1,-2,0,5,-124,0,1,3,1,5,-124,0,1,-2,5,-14717,0,-3,1,-125,0,1,3,-2,1,-123,0,-5,1,-123,0,-5,1,-123,0,-2,1,-2,7,1,-123,0,-2,1,-2,4,1,-123,0,-2,1,7,8,-124,0,-2,1,7,8,-124,0,-2,1,-2,4,1,-123,0,-2,1,-2,7,1,-123,0,-5,1,-123,0,-5,1,-124,0,1,3,-2,1,-124,0,-3,1,-14717,0,-3,1,-125,0,1,4,-2,1,-124,0,-4,1,-123,0,-5,1,-123,0,-2,1,4,7,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-124,0,1,-2,4,1,-123,0,-2,1,4,7,1,-123,0,-5,1,-124,0,-4,1,-124,0,1,4,-2,1,-124,0,-3,1,-14845,0,-3,1,-125,0,-3,1,-125,0,-3,1,-125,0,-4,1,-124,0,-3,1,5,-125,0,3,1,5,-125,0,3,1,5,-124,0,-3,1,5,-124,0,-4,1,-124,0,-3,1,-125,0,-3,1,-125,0,-3,1,-15102,0,-2,1,-126,0,-2,1,-382,0,3,-127,0,3,-383,0,-2,1,-126,0,-2,1,-15742,0,3,-127,0,3,-16126,0,10,-2,3,-125,0,10,-2,3,-125,0,10,-2,3,-125,0,10,-2,3,-15997,0,10,-2,3,-124,0,-2,10,-2,3,-124,0,-2,10,-2,3,-125,0,10,-2,3,-15996,0,-3,10,3,-124,0,10,-3,3,-124,0,10,-3,3,-124,0,-3,10,3,-15996,0,-3,10,3,-124,0,10,-3,3,-124,0,10,-3,3,-124,0,-3,10,3,-15997,0,-2,10,-125,0,-4,10,-124,0,-4,10,-125,0,-2,10,-1318719,0],\"uuid\":\"B66E5C29-81F3-4E29-AF59-25B80D87DA17\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[5981507,47872,16763313,4791325,15318849,7162190,9057340,6497578,16703926,12255232,9855308,12154974,6175791],\"bounds\":[59,68,55,72,0,47]}");

/***/ }),
/* 31 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[56,71,58,65,0,29],\"size\":[128,128,128],\"data\":[-8125,0,5,-4,0,5,-122,0,5,-4,0,5,-122,0,5,-4,0,5,-16122,0,5,-4,0,5,-16378,0,5,-4,0,5,-16378,0,5,-4,0,5,-16249,0,-3,2,-2,0,-3,2,-116,0,28,-3,0,-3,2,-2,0,-3,2,-3,0,28,-116,0,-3,2,-2,0,-3,2,-15992,0,-3,2,-2,0,-3,2,-116,0,28,-2,0,-4,2,-2,0,-4,2,-2,0,28,-112,0,28,-2,0,-4,2,-2,0,-4,2,-2,0,28,-115,0,-4,2,-2,0,-4,2,-15860,0,30,-12,0,30,-113,0,30,-3,0,-3,2,-2,0,-3,2,-3,0,30,-112,0,30,-2,0,-4,2,-2,0,-4,2,-2,0,30,-112,0,30,-2,0,-4,2,-2,0,-4,2,-2,0,30,-115,0,-4,2,-2,0,-4,2,-15733,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-3,0,-3,2,-2,0,-3,2,-3,0,30,-112,0,30,-2,0,-10,2,-2,0,30,-112,0,30,-2,0,-10,2,-2,0,30,-115,0,-10,2,-119,0,-3,2,-2,0,-3,2,-15606,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-3,0,-8,4,-3,0,30,-112,0,30,-2,0,4,-8,2,4,-2,0,30,-112,0,30,-2,0,4,-8,2,4,-2,0,30,-115,0,4,-8,2,4,-15733,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-14,0,30,-112,0,30,-3,0,-8,4,-3,0,30,-112,0,30,-3,0,4,-6,2,4,-3,0,30,-116,0,4,-6,2,4,-15734,0,-12,30,-115,0,30,-12,0,30,-113,0,30,-14,0,30,-112,0,30,-2,0,8,-8,4,8,-2,0,30,-112,0,30,-2,0,8,4,-6,2,4,8,-2,0,30,-116,0,4,-6,2,4,-15862,0,-12,28,-115,0,-2,28,-10,0,-2,28,-114,0,28,0,8,-8,10,8,0,28,-114,0,28,0,8,10,-6,2,10,8,0,28,-117,0,-8,10,-15863,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,28,0,8,4,-6,2,4,8,0,28,-117,0,-2,4,-4,2,-2,4,-15863,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,-2,28,8,4,-6,2,4,8,-2,28,-116,0,28,-2,4,-4,2,-2,4,28,-15862,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,-2,28,8,4,-6,2,4,8,-2,28,-116,0,28,-2,4,-4,2,-2,4,28,-15862,0,-10,28,-117,0,28,-10,0,28,-115,0,28,0,8,-8,4,8,0,28,-114,0,28,0,8,4,-6,2,4,8,0,28,-117,0,-2,4,-4,2,-2,4,-15863,0,-10,28,-117,0,28,4,-8,0,4,28,-115,0,28,4,8,-8,4,8,4,28,-114,0,28,4,8,4,-6,2,4,8,4,28,-116,0,4,0,-6,28,0,4,-15990,0,-10,28,-117,0,28,8,-3,4,-2,8,-3,4,8,28,-116,0,28,8,4,-2,2,-2,8,-2,2,4,8,28,-117,0,4,0,-6,28,0,4,-15865,0,-4,28,-123,0,28,-4,0,28,-119,0,-4,28,0,-2,8,0,-4,28,-116,0,-4,28,0,-2,8,0,-4,28,-117,0,-2,28,-6,0,-2,28,-15737,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15740,0,-6,28,-121,0,28,-6,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15613,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-123,0,-2,8,-15613,0,-4,28,-123,0,28,-4,0,28,-121,0,28,-2,0,-2,8,-2,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-120,0,28,0,-4,8,0,28,-15866,0,-4,28,-123,0,28,-4,0,28,-122,0,28,-4,0,28,-122,0,28,-4,0,28,-122,0,28,-4,0,28,-15995,0,-4,28,-124,0,-4,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-15996,0,-4,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-124,0,28,-2,0,28,-16125,0,-2,28,-126,0,-2,28,-126,0,-2,28,-16254,0,-2,28,-126,0,-2,28,-16382,0,-2,28,-16382,0,-2,28,-1613887,0],\"uuid\":\"92532D38-8574-4B38-A7D5-EDF403BF9E4D\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,10759726,14243683,8924725,9410378,9072432],\"bounds\":[56,71,58,65,0,29]}");

/***/ }),
/* 32 */
/***/ (function(module) {

module.exports = JSON.parse("{\"formatVersion\":2,\"fileType\":\"SpriteStackModel\",\"parts\":[{\"name\":\"part1\",\"bounds\":[51,78,48,76,0,0],\"size\":[128,128,128],\"data\":[-6222,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-114,0,-27,18,-113,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-126,0,18,-2087372,0],\"uuid\":\"1460D336-050C-4FBC-9338-20A33DAB3680\",\"hidden\":false}],\"size\":[128,128,128],\"palette\":[0,2236468,4532284,6699313,9393723,14643494,14262374,15647642,16777215,16511542,10085712,6995504,3642478,4942127,5393188,3292217,4145012,3170434,5992161,6527999,6278628,13360124,10202551,8683143,6908522,5854802,7750282,11285042,14243683,14121914,9410378,9072432],\"bounds\":[51,78,48,76,0,0]}");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map