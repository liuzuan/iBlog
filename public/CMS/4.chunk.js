webpackJsonp([4],{

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_category_list_vue__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_category_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_category_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_category_list_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_category_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_f07e2490_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_category_list_vue__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_f07e2490_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_category_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_f07e2490_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_category_list_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(304)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_category_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_f07e2490_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_category_list_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/blog/category-list/category-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f07e2490", Component.options)
  } else {
    hotAPI.reload("data-v-f07e2490", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = exports.register = exports.editCategory = exports.addCategory = exports.delArticle = exports.editArticle = exports.addArticle = exports.getArticle = exports.getAllCategories = undefined;

var _util = __webpack_require__(12);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = _util2.default.ajax;

var http = function http(methods, url, data) {
    if (methods === 'get') {
        return axios.get(url, { params: data });
    } else if (methods === 'post') {
        return axios.post(url, data);
    }
};

var getAllCategories = exports.getAllCategories = function getAllCategories() {
    return http('get', '/getAllCategories');
};

var getArticle = exports.getArticle = function getArticle(data) {
    return http('post', '/getArticle', data);
};

var addArticle = exports.addArticle = function addArticle(data) {
    return http('post', '/addArticle', data);
};

var editArticle = exports.editArticle = function editArticle(data) {
    return http('post', '/editArticle', data);
};

var delArticle = exports.delArticle = function delArticle(data) {
    return http('post', '/delArticle', data);
};

var addCategory = exports.addCategory = function addCategory(data) {
    return http('post', '/addCategory', data);
};

var editCategory = exports.editCategory = function editCategory(data) {
    return http('post', '/editCategory', data);
};

var register = exports.register = function register(data) {
    return http('post', '/register', data);
};

var login = exports.login = function login(data) {
    return http('post', '/login', data);
};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(306);

var _extends3 = _interopRequireDefault(_extends2);

var _api = __webpack_require__(214);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        var _this = this;

        return {
            tableData: [],
            showModal: false,
            newData: {
                status: 1
            },
            loading: false,
            ruleValidate: {
                name: [{ required: true, message: '请填写分类名称', trigger: 'blur' }]
            },
            columns: [{
                title: '分类名称',
                align: 'center',
                key: 'name'
            }, {
                title: '所含文章数',
                align: 'center',
                render: function render(h, params) {
                    return h('span', params.row.articles.length || '-');
                }
            }, {
                title: '创建时间',
                align: 'center',
                key: 'createTime',
                render: function render(h, params) {
                    return h('span', params.row.createTime.slice(0, 10));
                }
            }, {
                title: '操作',
                align: 'center',
                key: 'address',
                render: function render(h, params) {
                    return h('div', [h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: function click() {
                                _this.editorRow(params.row);
                            }
                        }
                    }, '编辑'), h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        style: {
                            display: params.row.status == 1 ? '' : 'none'
                        },
                        on: {
                            click: function click() {
                                _this.handelCategoryStatus(params.row._id, 0);
                            }
                        }
                    }, '删除'), h('Button', {
                        props: {
                            type: 'success',
                            size: 'small'
                        },
                        style: {
                            display: params.row.status == 0 ? '' : 'none'
                        },
                        on: {
                            click: function click() {
                                _this.handelCategoryStatus(params.row._id, 1);
                            }
                        }
                    }, '恢复')]);
                }
            }]
        };
    },

    methods: {
        getList: function getList() {
            var _this2 = this;

            (0, _api.getAllCategories)().then(function (res) {
                _this2.tableData = res.data;
            });
        },
        createNew: function createNew() {
            this.showModal = true;
            this.isCreate = true;
        },
        editorRow: function editorRow(row) {
            this.showModal = true;
            this.newData = (0, _extends3.default)({}, row);
            this.isCreate = false;
        },
        handleSubmit: function handleSubmit() {
            var _this3 = this;

            this.$refs.newData.validate(function (valid) {
                if (valid) {
                    _this3.loading = true;
                    _this3.isCreate && (0, _api.addCategory)(_this3.newData).then(function (res) {
                        _this3.handleCancel();
                        _this3.$Message.success(res.data.desc);
                        _this3.getList();
                    }, function (err) {
                        _this3.handleCancel();
                        _this3.$Message.error(err.data.desc);
                    });
                    !_this3.isCreate && (0, _api.editCategory)(_this3.newData).then(function (res) {
                        _this3.handleCancel();
                        _this3.$Message.success(res.data.desc);
                        _this3.getList();
                    }, function (err) {
                        _this3.handleCancel();
                        _this3.$Message.error(err.data.desc);
                    });
                }
            });
        },
        handleCancel: function handleCancel() {
            this.$refs['newData'].resetFields();
            this.newData = { status: 1 };
            this.loading = false;
            this.showModal = false;
        },
        handleBeforeClose: function handleBeforeClose(bool) {
            if (bool) {
                this.$refs.newData.resetFields();
            }
        },
        handelCategoryStatus: function handelCategoryStatus(id, status) {
            var _this4 = this;

            (0, _api.editCategory)({ _id: id, status: status }).then(function (res) {
                _this4.$Message.success(res.data.desc);
                _this4.getList();
            }, function (err) {
                _this4.$Message.error(err.data.desc);
            });
        }
    },
    created: function created() {
        this.getList();
    },
    mounted: function mounted() {},

    watch: {}
};

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("5f58375c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f07e2490\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./category-list.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f07e2490\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./category-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(52);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", { staticStyle: { width: "100%", overflow: "hidden" } }, [_c("Button", {
    staticStyle: { float: "right", "margin-bottom": "10px" },
    attrs: { icon: "ios-plus-outline", type: "primary" },
    on: { click: _vm.createNew }
  }, [_vm._v("新增分类")])], 1), _vm._v(" "), _c("Table", {
    attrs: { stripe: "", columns: _vm.columns, data: _vm.tableData }
  }), _vm._v(" "), _c("Modal", {
    attrs: { title: "新增分类", width: "360" },
    on: { "on-visible-change": _vm.handleBeforeClose },
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_c("Form", {
    ref: "newData",
    attrs: {
      model: _vm.newData,
      rules: _vm.ruleValidate,
      "label-width": 80
    }
  }, [_c("FormItem", { attrs: { label: "分类名称", prop: "name" } }, [_c("Input", {
    attrs: { placeholder: "请输入分类名称" },
    model: {
      value: _vm.newData.name,
      callback: function callback($$v) {
        _vm.$set(_vm.newData, "name", $$v);
      },
      expression: "newData.name"
    }
  })], 1), _vm._v(" "), _c("FormItem", { attrs: { label: "链接URL" } }, [_c("Input", {
    attrs: { placeholder: "请输入链接URL" },
    model: {
      value: _vm.newData.link,
      callback: function callback($$v) {
        _vm.$set(_vm.newData, "link", $$v);
      },
      expression: "newData.link"
    }
  })], 1), _vm._v(" "), _c("FormItem", { attrs: { label: "状态" } }, [_c("Select", {
    staticStyle: { width: "200px" },
    model: {
      value: _vm.newData.status,
      callback: function callback($$v) {
        _vm.$set(_vm.newData, "status", $$v);
      },
      expression: "newData.status"
    }
  }, [_c("Option", { attrs: { value: 1 } }, [_vm._v("公开")]), _vm._v(" "), _c("Option", { attrs: { value: 0 } }, [_vm._v("隐藏")])], 1)], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [_c("Button", {
    attrs: { type: "primary", loading: _vm.loading },
    on: { click: _vm.handleSubmit }
  }, [_vm._v("确认")]), _vm._v(" "), _c("Button", { attrs: { type: "ghost" }, on: { click: _vm.handleCancel } }, [_vm._v("取消")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f07e2490", esExports);
  }
}

/***/ })

});
//# sourceMappingURL=4.chunk.js.map