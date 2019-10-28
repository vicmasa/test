webpackHotUpdate("bundle",{

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const modalViewModule = "ns-ui-category/modal-view/basics/modal-view-page";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBOEM7QUFDaEU7QUFDQTtBQUNBLCtCQUErQixTQUFTLGVBQWUsU0FBUztBQUNoRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0I7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjA5NmY1OGYxM2U0NmI5YTQ1YmUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RhbFZpZXdNb2R1bGUgPSBcIm5zLXVpLWNhdGVnb3J5L21vZGFsLXZpZXcvYmFzaWNzL21vZGFsLXZpZXctcGFnZVwiO1xuXG5mdW5jdGlvbiBvcGVuTW9kYWwoYXJncykge1xuICAgIGNvbnN0IG1haW5WaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICBjb250ZXh0OiB7IHVzZXJuYW1lOiBcInRlc3RfdXNlcm5hbWVcIiwgcGFzc3dvcmQ6IFwidGVzdFwiIH0sXG4gICAgICAgIGNsb3NlQ2FsbGJhY2s6ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgICAgIC8vIFJlY2VpdmUgZGF0YSBmcm9tIHRoZSBtb2RhbCB2aWV3LiBlLmcuIHVzZXJuYW1lICYgcGFzc3dvcmRcbiAgICAgICAgICAgIGFsZXJ0KGBVc2VybmFtZTogJHt1c2VybmFtZX0gOiBQYXNzd29yZDogJHtwYXNzd29yZH1gKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgIH07XG4gICAgbWFpblZpZXcuc2hvd01vZGFsKG1vZGFsVmlld01vZHVsZSwgb3B0aW9uKTtcblxufVxuZXhwb3J0cy5vcGVuTW9kYWwgPSBvcGVuTW9kYWw7OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaG9tZS9ob21lLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==