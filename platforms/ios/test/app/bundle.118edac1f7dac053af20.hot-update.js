webpackHotUpdate("bundle",{

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const modalViewModule = "~/app/modal/modal";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBOEM7QUFDaEU7QUFDQTtBQUNBLCtCQUErQixTQUFTLGVBQWUsU0FBUztBQUNoRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0I7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjExOGVkYWMxZjdkYWMwNTNhZjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RhbFZpZXdNb2R1bGUgPSBcIn4vYXBwL21vZGFsL21vZGFsXCI7XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChhcmdzKSB7XG4gICAgY29uc3QgbWFpblZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgIGNvbnRleHQ6IHsgdXNlcm5hbWU6IFwidGVzdF91c2VybmFtZVwiLCBwYXNzd29yZDogXCJ0ZXN0XCIgfSxcbiAgICAgICAgY2xvc2VDYWxsYmFjazogKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVjZWl2ZSBkYXRhIGZyb20gdGhlIG1vZGFsIHZpZXcuIGUuZy4gdXNlcm5hbWUgJiBwYXNzd29yZFxuICAgICAgICAgICAgYWxlcnQoYFVzZXJuYW1lOiAke3VzZXJuYW1lfSA6IFBhc3N3b3JkOiAke3Bhc3N3b3JkfWApO1xuICAgICAgICB9LFxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgfTtcbiAgICBtYWluVmlldy5zaG93TW9kYWwobW9kYWxWaWV3TW9kdWxlLCBvcHRpb24pO1xuXG59XG5leHBvcnRzLm9wZW5Nb2RhbCA9IG9wZW5Nb2RhbDs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vaG9tZS9ob21lLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9