webpackJsonp([9],{201:function(n,t,e){"use strict";function i(n){d||e(315)}Object.defineProperty(t,"__esModule",{value:!0});var a=e(250),o=e.n(a);for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);var l=e(317),r=e.n(l),d=!1,p=e(1),c=i,h=p(o.a,r.a,!1,c,null,null);h.options.__file="src/views/image-manage/upload/upload.vue",t.default=h.exports},250:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"file-upload",data:function(){return{defaultList:[{name:"a42bdcc1178e62b4694c830f028db5c0",url:"https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar"},{name:"bc7521e033abdd1e92222d733590f104",url:"https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar"}],imgName:"",visible:!1,uploadList:[]}},methods:{handleFormatError:function(n){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+n.name+" 格式不正确，请选择图片文件。"})},handleBeforeUpload:function(n){this.$Notice.warning({title:"文件准备上传",desc:"文件 "+n.name+" 准备上传。"})},handleProgress:function(n,t){this.$Notice.info({title:"文件正在上传",desc:"文件 "+t.name+" 正在上传。"})},handleSuccess:function(n,t){this.$Notice.success({title:"文件上传成功",desc:"文件 "+t.name+" 上传成功。"})},handleError:function(n,t){this.$Notice.error({title:"文件上传成功",desc:"文件 "+t.name+" 上传失败。"})},handleView:function(n){this.imgName=n,this.visible=!0},handleRemove:function(n){var t=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(t.indexOf(n),1)},handleSuccess2:function(n,t){t.url="https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar",t.name="7eb99afb9d5f317c912f08b5212fd69a"},handleFormatError2:function(n){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+n.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(n){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+n.name+" 太大，不能超过 2M。"})},handleBeforeUpload2:function(){var n=this.uploadList.length<5;return n||this.$Notice.warning({title:"最多只能上传 5 张图片。"}),n}},mounted:function(){this.uploadList=this.$refs.upload.fileList}}},315:function(n,t,e){var i=e(316);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(9)("8b7c4a6e",i,!1,{})},316:function(n,t,e){t=n.exports=e(8)(!1),t.push([n.i,"\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.admin-upload-list {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.admin-upload-list img {\n  width: 100%;\n  height: 100%;\n}\n.admin-upload-list-cover {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.admin-upload-list:hover .admin-upload-list-cover {\n  display: block;\n}\n.admin-upload-list-cover i {\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  margin: 0 2px;\n}\n",""])},317:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"margin-top-10 padding-left-10"},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-analytics"}}),n._v("\n            图片上传\n        ")],1),n._v(" "),e("div",{staticClass:"height-492px"},[e("Col",{attrs:{span:"8"}},[e("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":n.defaultList,"on-success":n.handleSuccess2,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":n.handleFormatError2,"on-exceeded-size":n.handleMaxSize,"before-upload":n.handleBeforeUpload2,multiple:"",type:"drag",action:"//jsonplaceholder.typicode.com/posts/"}},[e("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[e("Icon",{attrs:{type:"camera",size:"20"}})],1)]),n._v(" "),e("Modal",{attrs:{title:"查看图片"},model:{value:n.visible,callback:function(t){n.visible=t},expression:"visible"}},[n.visible?e("img",{staticStyle:{width:"100%"},attrs:{src:"https://o5wwk8baw.qnssl.com/"+n.imgName+"/large"}}):n._e()])],1),n._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[e("div",{staticClass:"height-460px"},n._l(n.uploadList,function(t){return e("div",{key:t.url,staticClass:"admin-upload-list"},["finished"===t.status?[e("img",{attrs:{src:t.url}}),n._v(" "),e("div",{staticClass:"admin-upload-list-cover"},[e("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(e){n.handleView(t.name)}}}),n._v(" "),e("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(e){n.handleRemove(t)}}})],1)]:[t.showProgress?e("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):n._e()]],2)}))])],1)])],1)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};t.default=o}});