webpackJsonp([6],{163:function(t,e,n){"use strict";function i(t){s||n(277)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(213),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var l=n(279),d=n.n(l),s=!1,p=n(0),u=i,c=p(a.a,d.a,!1,u,null,null);c.options.__file="src/views/image-manage/upload/upload.vue",e.default=c.exports},164:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.uploadUrl=e.editUserInfo=e.login=e.register=e.editCategory=e.addCategory=e.delArticle=e.editArticle=e.addArticle=e.getArticle=e.getAllCategories=void 0;var i=n(12),o=function(t){return t&&t.__esModule?t:{default:t}}(i),a=o.default.ajax,r=function(t,e,n){return"get"===t?a.get(e,{params:n}):"post"===t?a.post(e,n):void 0};e.getAllCategories=function(){return r("get","/getAllCategories")},e.getArticle=function(t){return r("post","/getArticle",t)},e.addArticle=function(t){return r("post","/addArticle",t)},e.editArticle=function(t){return r("post","/editArticle",t)},e.delArticle=function(t){return r("post","/delArticle",t)},e.addCategory=function(t){return r("post","/addCategory",t)},e.editCategory=function(t){return r("post","/editCategory",t)},e.register=function(t){return r("post","/register",t)},e.login=function(t){return r("post","/login",t)},e.editUserInfo=function(t){return r("post","/editUserInfo",t)},e.uploadUrl=o.default.ajaxUrl+"/upload"},213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(164);e.default={name:"file-upload",data:function(){return{defaultList:[],modalUrl:"",imgName:"",uploadTo:0,visible:!1,uploadList:[]}},computed:{uploadUrl:function(){return this.uploadTo?i.uploadUrl:i.uploadUrl+"?gallery=true"}},methods:{handleView:function(t){this.modalUrl=t.url,this.imgName=t.name,this.visible=!0},handleRemove:function(t){var e=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(e.indexOf(t),1)},handleSuccess:function(t,e){e.url=t.url,e.name=t.name},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 2M。"})},handleBeforeUpload:function(){var t=this.uploadList.length<5;return t||this.$Notice.warning({title:"最多只能上传 5 张图片。"}),t}},mounted:function(){this.uploadList=this.$refs.upload.fileList}}},277:function(t,e,n){var i=n(278);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(11)("25f4f700",i,!1,{})},278:function(t,e,n){e=t.exports=n(10)(!1),e.push([t.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.admin-upload-list {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.admin-upload-list img {\n  width: 100%;\n  height: 100%;\n}\n.admin-upload-list-cover {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.admin-upload-list:hover .admin-upload-list-cover {\n  display: block;\n}\n.admin-upload-list-cover i {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n",""])},279:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"margin-top-10 padding-left-10"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n            图片上传\n        ")],1),t._v(" "),n("div",[n("Form",[n("FormItem",{attrs:{label:"上传至："}},[n("Select",{staticStyle:{width:"200px"},model:{value:t.uploadTo,callback:function(e){t.uploadTo=e},expression:"uploadTo"}},[n("Option",{attrs:{value:0}},[t._v("文章")]),t._v(" "),n("Option",{attrs:{value:1}},[t._v("图库")])],1)],1)],1),t._v(" "),n("Upload",{ref:"upload",attrs:{"show-upload-list":!1,"default-file-list":t.defaultList,"on-success":t.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:"",type:"drag",action:t.uploadUrl}},[n("div",{staticStyle:{padding:"20px 0"}},[n("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),n("p",[t._v("Click or drag files here to upload")])],1)]),t._v(" "),n("div",{staticClass:"height-460px"},t._l(t.uploadList,function(e){return n("div",{key:e.url,staticClass:"admin-upload-list"},["finished"===e.status?[n("img",{attrs:{src:e.url}}),t._v(" "),n("div",{staticClass:"admin-upload-list-cover"},[n("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(n){t.handleView(e)}}}),t._v(" "),n("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(n){t.handleRemove(e)}}})],1)]:[e.showProgress?n("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()]],2)}))],1)]),t._v(" "),n("Modal",{attrs:{title:t.imgName,"footer-hide":""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?n("img",{staticStyle:{width:"100%"},attrs:{src:t.modalUrl}}):t._e()])],1)},o=[];i._withStripped=!0;var a={render:i,staticRenderFns:o};e.default=a}});