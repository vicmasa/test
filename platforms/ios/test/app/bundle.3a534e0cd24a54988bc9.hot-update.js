webpackHotUpdate("bundle",{

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root/app-root-view-model.js": "./app-root/app-root-view-model.js",
	"./app-root/app-root.js": "./app-root/app-root.js",
	"./app-root/app-root.scss": "./app-root/app-root.scss",
	"./app-root/app-root.xml": "./app-root/app-root.xml",
	"./app.js": "./app.js",
	"./app.scss": "./app.scss",
	"./browse/browse-page.js": "./browse/browse-page.js",
	"./browse/browse-page.xml": "./browse/browse-page.xml",
	"./browse/browse-view-model.js": "./browse/browse-view-model.js",
	"./featured/featured-page.js": "./featured/featured-page.js",
	"./featured/featured-page.xml": "./featured/featured-page.xml",
	"./featured/featured-view-model.js": "./featured/featured-view-model.js",
	"./home/home-page.js": "./home/home-page.js",
	"./home/home-page.xml": "./home/home-page.xml",
	"./home/home-view-model.js": "./home/home-view-model.js",
	"./modal/modal.js": "./modal/modal.js",
	"./modal/modal.xml": "./modal/modal.xml",
	"./search/search-page.js": "./search/search-page.js",
	"./search/search-page.xml": "./search/search-page.xml",
	"./search/search-view-model.js": "./search/search-view-model.js",
	"./settings/settings-page.js": "./settings/settings-page.js",
	"./settings/settings-page.xml": "./settings/settings-page.xml",
	"./settings/settings-view-model.js": "./settings/settings-view-model.js",
	"./shared/selected-page-service.js": "./shared/selected-page-service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
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
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const modalViewModule = "../modal/modal";

function openModal(args) {
    const mainView = args.object;
    const option = {
        context: { username: "test_username", password: "test" },
        closeCallback: (username, password) => {
            // Receive data from the modal view. e.g. username & password
            alert(`Username: ${username} : Password: ${password}`);
        },
        fullscreen: true
    };
    mainView.showModal(modalViewModule, option);

}
exports.openModal = openModal;; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./modal/modal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./modal/modal.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./modal/modal.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./modal/modal.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = ""; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./modal/modal.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./modal/modal.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1wYWdlLmpzIiwid2VicGFjazovLy8uL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL21vZGFsL21vZGFsLnhtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEg7Ozs7Ozs7QUM5Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUE4QztBQUNoRTtBQUNBO0FBQ0EsK0JBQStCLFNBQVMsZUFBZSxTQUFTO0FBQ2hFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQjtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDhDQUE4QztBQUN6RSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUN0QkEsK0M7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwyQ0FBMkM7QUFDdEUsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQ05BLG9CO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsNENBQTRDO0FBQ3ZFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS4zYTUzNGUwY2QyNGE1NDk4OGJjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290L2FwcC1yb290LXZpZXctbW9kZWwuanNcIjogXCIuL2FwcC1yb290L2FwcC1yb290LXZpZXctbW9kZWwuanNcIixcblx0XCIuL2FwcC1yb290L2FwcC1yb290LmpzXCI6IFwiLi9hcHAtcm9vdC9hcHAtcm9vdC5qc1wiLFxuXHRcIi4vYXBwLXJvb3QvYXBwLXJvb3Quc2Nzc1wiOiBcIi4vYXBwLXJvb3QvYXBwLXJvb3Quc2Nzc1wiLFxuXHRcIi4vYXBwLXJvb3QvYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL2Jyb3dzZS9icm93c2UtcGFnZS5qc1wiOiBcIi4vYnJvd3NlL2Jyb3dzZS1wYWdlLmpzXCIsXG5cdFwiLi9icm93c2UvYnJvd3NlLXBhZ2UueG1sXCI6IFwiLi9icm93c2UvYnJvd3NlLXBhZ2UueG1sXCIsXG5cdFwiLi9icm93c2UvYnJvd3NlLXZpZXctbW9kZWwuanNcIjogXCIuL2Jyb3dzZS9icm93c2Utdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vZmVhdHVyZWQvZmVhdHVyZWQtcGFnZS5qc1wiOiBcIi4vZmVhdHVyZWQvZmVhdHVyZWQtcGFnZS5qc1wiLFxuXHRcIi4vZmVhdHVyZWQvZmVhdHVyZWQtcGFnZS54bWxcIjogXCIuL2ZlYXR1cmVkL2ZlYXR1cmVkLXBhZ2UueG1sXCIsXG5cdFwiLi9mZWF0dXJlZC9mZWF0dXJlZC12aWV3LW1vZGVsLmpzXCI6IFwiLi9mZWF0dXJlZC9mZWF0dXJlZC12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiOiBcIi4vaG9tZS9ob21lLXBhZ2UuanNcIixcblx0XCIuL2hvbWUvaG9tZS1wYWdlLnhtbFwiOiBcIi4vaG9tZS9ob21lLXBhZ2UueG1sXCIsXG5cdFwiLi9ob21lL2hvbWUtdmlldy1tb2RlbC5qc1wiOiBcIi4vaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIixcblx0XCIuL21vZGFsL21vZGFsLmpzXCI6IFwiLi9tb2RhbC9tb2RhbC5qc1wiLFxuXHRcIi4vbW9kYWwvbW9kYWwueG1sXCI6IFwiLi9tb2RhbC9tb2RhbC54bWxcIixcblx0XCIuL3NlYXJjaC9zZWFyY2gtcGFnZS5qc1wiOiBcIi4vc2VhcmNoL3NlYXJjaC1wYWdlLmpzXCIsXG5cdFwiLi9zZWFyY2gvc2VhcmNoLXBhZ2UueG1sXCI6IFwiLi9zZWFyY2gvc2VhcmNoLXBhZ2UueG1sXCIsXG5cdFwiLi9zZWFyY2gvc2VhcmNoLXZpZXctbW9kZWwuanNcIjogXCIuL3NlYXJjaC9zZWFyY2gtdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vc2V0dGluZ3Mvc2V0dGluZ3MtcGFnZS5qc1wiOiBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MtcGFnZS5qc1wiLFxuXHRcIi4vc2V0dGluZ3Mvc2V0dGluZ3MtcGFnZS54bWxcIjogXCIuL3NldHRpbmdzL3NldHRpbmdzLXBhZ2UueG1sXCIsXG5cdFwiLi9zZXR0aW5ncy9zZXR0aW5ncy12aWV3LW1vZGVsLmpzXCI6IFwiLi9zZXR0aW5ncy9zZXR0aW5ncy12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCI6IFwiLi9zaGFyZWQvc2VsZWN0ZWQtcGFnZS1zZXJ2aWNlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImNvbnN0IG1vZGFsVmlld01vZHVsZSA9IFwiLi4vbW9kYWwvbW9kYWxcIjtcblxuZnVuY3Rpb24gb3Blbk1vZGFsKGFyZ3MpIHtcbiAgICBjb25zdCBtYWluVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICAgY29udGV4dDogeyB1c2VybmFtZTogXCJ0ZXN0X3VzZXJuYW1lXCIsIHBhc3N3b3JkOiBcInRlc3RcIiB9LFxuICAgICAgICBjbG9zZUNhbGxiYWNrOiAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgICAgICAvLyBSZWNlaXZlIGRhdGEgZnJvbSB0aGUgbW9kYWwgdmlldy4gZS5nLiB1c2VybmFtZSAmIHBhc3N3b3JkXG4gICAgICAgICAgICBhbGVydChgVXNlcm5hbWU6ICR7dXNlcm5hbWV9IDogUGFzc3dvcmQ6ICR7cGFzc3dvcmR9YCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICB9O1xuICAgIG1haW5WaWV3LnNob3dNb2RhbChtb2RhbFZpZXdNb2R1bGUsIG9wdGlvbik7XG5cbn1cbmV4cG9ydHMub3Blbk1vZGFsID0gb3Blbk1vZGFsOzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tb2RhbC9tb2RhbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21vZGFsL21vZGFsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21vZGFsL21vZGFsLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL21vZGFsL21vZGFsLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9