webpackHotUpdate("bundle",{

/***/ "./modal/modal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
let closeCallback;

function onShownModally(args) {
    const context = args.context;
    closeCallback = args.closeCallback;
    const page = args.object;
    page.bindingContext = observableModule.fromObject(context);
}
exports.onShownModally = onShownModally;

function onLoginButtonTap(args) {
    const page = args.object.page;
    const bindingContext = page.bindingContext;
    const username = bindingContext.get("username");
    const password = bindingContext.get("password");
    closeCallback(username, password);
}
exports.onLoginButtonTap = onLoginButtonTap;; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./modal/modal.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./modal/modal.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RhbC9tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVFQUF5QixtQkFBTyxDQUFDLGdFQUFrQztBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsMkNBQTJDO0FBQ3RFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS5mNWYzZjFiNDdmZjVhZTA1MzMyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbmxldCBjbG9zZUNhbGxiYWNrO1xuXG5mdW5jdGlvbiBvblNob3duTW9kYWxseShhcmdzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGFyZ3MuY29udGV4dDtcbiAgICBjbG9zZUNhbGxiYWNrID0gYXJncy5jbG9zZUNhbGxiYWNrO1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KGNvbnRleHQpO1xufVxuZXhwb3J0cy5vblNob3duTW9kYWxseSA9IG9uU2hvd25Nb2RhbGx5O1xuXG5mdW5jdGlvbiBvbkxvZ2luQnV0dG9uVGFwKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCBiaW5kaW5nQ29udGV4dCA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBiaW5kaW5nQ29udGV4dC5nZXQoXCJ1c2VybmFtZVwiKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGJpbmRpbmdDb250ZXh0LmdldChcInBhc3N3b3JkXCIpO1xuICAgIGNsb3NlQ2FsbGJhY2sodXNlcm5hbWUsIHBhc3N3b3JkKTtcbn1cbmV4cG9ydHMub25Mb2dpbkJ1dHRvblRhcCA9IG9uTG9naW5CdXR0b25UYXA7OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21vZGFsL21vZGFsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbW9kYWwvbW9kYWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==