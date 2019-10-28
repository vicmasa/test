webpackHotUpdate("bundle",{

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const modalViewModule = "~/modal/modal";

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBOEM7QUFDaEU7QUFDQTtBQUNBLCtCQUErQixTQUFTLGVBQWUsU0FBUztBQUNoRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0I7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjk3MDdhMGRjZWZlZDljZTc2MGM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RhbFZpZXdNb2R1bGUgPSBcIn4vbW9kYWwvbW9kYWxcIjtcblxuZnVuY3Rpb24gb3Blbk1vZGFsKGFyZ3MpIHtcbiAgICBjb25zdCBtYWluVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICAgY29udGV4dDogeyB1c2VybmFtZTogXCJ0ZXN0X3VzZXJuYW1lXCIsIHBhc3N3b3JkOiBcInRlc3RcIiB9LFxuICAgICAgICBjbG9zZUNhbGxiYWNrOiAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgICAgICAvLyBSZWNlaXZlIGRhdGEgZnJvbSB0aGUgbW9kYWwgdmlldy4gZS5nLiB1c2VybmFtZSAmIHBhc3N3b3JkXG4gICAgICAgICAgICBhbGVydChgVXNlcm5hbWU6ICR7dXNlcm5hbWV9IDogUGFzc3dvcmQ6ICR7cGFzc3dvcmR9YCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICB9O1xuICAgIG1haW5WaWV3LnNob3dNb2RhbChtb2RhbFZpZXdNb2R1bGUsIG9wdGlvbik7XG5cbn1cbmV4cG9ydHMub3Blbk1vZGFsID0gb3Blbk1vZGFsOzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=