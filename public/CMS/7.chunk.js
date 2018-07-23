webpackJsonp([7],{

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_own_space_vue__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_own_space_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_own_space_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_own_space_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_own_space_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_809e9776_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_own_space_vue__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_809e9776_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_own_space_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_809e9776_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_own_space_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_own_space_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_809e9776_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_own_space_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/own-space/own-space.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-809e9776", Component.options)
  } else {
    hotAPI.reload("data-v-809e9776", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(47);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'ownspace_index',
    data: function data() {
        var _this = this;

        var validePhone = function validePhone(rule, value, callback) {
            var re = /^1[0-9]{10}$/;
            if (!re.test(value)) {
                callback(new Error('请输入正确格式的手机号'));
            } else {
                callback();
            }
        };
        var valideRePassword = function valideRePassword(rule, value, callback) {
            if (value !== _this.editPasswordForm.newPass) {
                callback(new Error('两次输入密码不一致'));
            } else {
                callback();
            }
        };
        return {
            userForm: {
                userName: '',
                cellphone: '',
                company: '',
                department: ''
            },
            uid: '',
            save_loading: false,
            editPasswordModal: false,
            savePassLoading: false,
            oldPassError: '',
            editPasswordForm: {
                oldPass: '',
                newPass: '',
                rePass: ''
            },
            validate: {
                userName: [{ required: true, message: '请输入姓名', trigger: 'change' }],
                oldPass: [{ required: true, message: '请输入原密码', trigger: 'change' }],
                newPass: [{ required: true, message: '请输入新密码', trigger: 'change' }, { min: 6, message: '请至少输入6个字符', trigger: 'change' }, { max: 32, message: '最多输入32个字符', trigger: 'change' }],
                rePass: [{ required: true, message: '请再次输入新密码', trigger: 'change' }, { validator: valideRePassword, trigger: 'change' }]
            },
            initPhone: ''
        };
    },
    mounted: function mounted() {
        var _JSON$parse = JSON.parse(localStorage.userInfo),
            userName = _JSON$parse.userName,
            avatar_url = _JSON$parse.avatar_url,
            _id = _JSON$parse._id;

        this.userForm = { userName: userName, avatar_url: avatar_url, _id: _id };
    },

    methods: {
        showEditPassword: function showEditPassword() {
            this.editPasswordModal = true;
        },
        cancelEditUserInfor: function cancelEditUserInfor() {
            this.$store.commit('removeTag', 'ownspace_index');
            localStorage.pageOpenedList = (0, _stringify2.default)(this.$store.state.app.pageOpenedList);
            var lastPageName = '';
            if (this.$store.state.app.pageOpenedList.length > 1) {
                lastPageName = this.$store.state.app.pageOpenedList[1].name;
            } else {
                lastPageName = this.$store.state.app.pageOpenedList[0].name;
            }
            this.$router.push({
                name: lastPageName
            });
        },
        saveEdit: function saveEdit() {},
        cancelEditPass: function cancelEditPass() {
            this.editPasswordModal = false;
        },
        saveEditPass: function saveEditPass() {
            var _this2 = this;

            this.$refs['editPasswordForm'].validate(function (valid) {
                if (valid) {
                    _this2.savePassLoading = true;
                }
            });
        },
        cancelInputCodeBox: function cancelInputCodeBox() {
            this.userForm.cellphone = this.initPhone;
        }
    }
};

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("3fa41cca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-809e9776\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./own-space.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-809e9776\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./own-space.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\n.own-space-btn-box {\n  margin-bottom: 10px;\n}\n.own-space-btn-box button {\n  padding-left: 0;\n}\n.own-space-btn-box button span {\n  color: #2D8CF0;\n  transition: all .2s;\n}\n.own-space-btn-box button span:hover {\n  color: #0C25F1;\n  transition: all .2s;\n}\n.own-space-tra {\n  width: 10px;\n  height: 10px;\n  transform: rotate(45deg);\n  position: absolute;\n  top: 50%;\n  margin-top: -6px;\n  left: -3px;\n  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  z-index: 100;\n}\n.own-space-input-identifycode-con {\n  position: absolute;\n  width: 200px;\n  height: 100px;\n  right: -220px;\n  top: 50%;\n  margin-top: -50px;\n  border-radius: 4px;\n  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.1);\n}\n", ""]);

// exports


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("Card", [_c("p", { attrs: { slot: "title" }, slot: "title" }, [_c("Icon", { attrs: { type: "person" } }), _vm._v("\n            个人信息\n        ")], 1), _vm._v(" "), _c("div", [_c("Form", {
    ref: "userForm",
    attrs: {
      model: _vm.userForm,
      "label-width": 100,
      "label-position": "right",
      rules: _vm.validate
    }
  }, [_c("FormItem", { attrs: { label: "用户头像：" } }, [_c("img", {
    attrs: { src: _vm.userForm.avatar_url, alt: "" }
  })]), _vm._v(" "), _c("FormItem", { attrs: { label: "用户姓名：", prop: "userName" } }, [_c("div", {
    staticStyle: { display: "inline-block", width: "200px" }
  }, [_c("Input", {
    model: {
      value: _vm.userForm.userName,
      callback: function callback($$v) {
        _vm.$set(_vm.userForm, "userName", $$v);
      },
      expression: "userForm.userName"
    }
  })], 1)]), _vm._v(" "), _c("FormItem", { attrs: { label: "登录密码：" } }, [_c("Button", {
    attrs: { type: "text", size: "small" },
    on: { click: _vm.showEditPassword }
  }, [_vm._v("修改密码")])], 1), _vm._v(" "), _c("div", [_c("Button", {
    staticStyle: { width: "100px" },
    attrs: { type: "text" },
    on: { click: _vm.cancelEditUserInfor }
  }, [_vm._v("取消")]), _vm._v(" "), _c("Button", {
    staticStyle: { width: "100px" },
    attrs: { type: "primary", loading: _vm.save_loading },
    on: { click: _vm.saveEdit }
  }, [_vm._v("保存")])], 1)], 1)], 1)]), _vm._v(" "), _c("Modal", {
    attrs: { closable: false, "mask-closable": false, width: 500 },
    model: {
      value: _vm.editPasswordModal,
      callback: function callback($$v) {
        _vm.editPasswordModal = $$v;
      },
      expression: "editPasswordModal"
    }
  }, [_c("h3", {
    staticStyle: { color: "#2D8CF0" },
    attrs: { slot: "header" },
    slot: "header"
  }, [_vm._v("修改密码")]), _vm._v(" "), _c("Form", {
    ref: "editPasswordForm",
    attrs: {
      model: _vm.editPasswordForm,
      "label-width": 100,
      "label-position": "right",
      rules: _vm.validate
    }
  }, [_c("FormItem", {
    attrs: {
      label: "原密码",
      prop: "oldPass",
      error: _vm.oldPassError
    }
  }, [_c("Input", {
    attrs: { placeholder: "请输入原密码" },
    model: {
      value: _vm.editPasswordForm.oldPass,
      callback: function callback($$v) {
        _vm.$set(_vm.editPasswordForm, "oldPass", $$v);
      },
      expression: "editPasswordForm.oldPass"
    }
  })], 1), _vm._v(" "), _c("FormItem", { attrs: { label: "新密码", prop: "newPass" } }, [_c("Input", {
    attrs: { placeholder: "请输入新密码" },
    model: {
      value: _vm.editPasswordForm.newPass,
      callback: function callback($$v) {
        _vm.$set(_vm.editPasswordForm, "newPass", $$v);
      },
      expression: "editPasswordForm.newPass"
    }
  })], 1), _vm._v(" "), _c("FormItem", { attrs: { label: "确认新密码", prop: "rePass" } }, [_c("Input", {
    attrs: { placeholder: "请再次输入新密码" },
    model: {
      value: _vm.editPasswordForm.rePass,
      callback: function callback($$v) {
        _vm.$set(_vm.editPasswordForm, "rePass", $$v);
      },
      expression: "editPasswordForm.rePass"
    }
  })], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [_c("Button", { attrs: { type: "text" }, on: { click: _vm.cancelEditPass } }, [_vm._v("取消")]), _vm._v(" "), _c("Button", {
    attrs: { type: "primary", loading: _vm.savePassLoading },
    on: { click: _vm.saveEditPass }
  }, [_vm._v("保存")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-809e9776", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=7.chunk.js.map