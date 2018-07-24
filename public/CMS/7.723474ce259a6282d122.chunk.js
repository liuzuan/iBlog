webpackJsonp([7],{221:function(e,t,s){"use strict";function a(e){d||s(288)}Object.defineProperty(t,"__esModule",{value:!0});var r=s(250),o=s.n(r);for(var n in r)"default"!==n&&function(e){s.d(t,e,function(){return r[e]})}(n);var i=s(290),l=s.n(i),d=!1,c=s(4),p=a,u=c(o.a,l.a,!1,p,null,null);u.options.__file="src/views/own-space/own-space.vue",t.default=u.exports},250:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(52),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"ownspace_index",data:function(){var e=this;return{userForm:{userName:"",cellphone:"",company:"",department:""},uid:"",save_loading:!1,editPasswordModal:!1,savePassLoading:!1,oldPassError:"",editPasswordForm:{oldPass:"",newPass:"",rePass:""},validate:{userName:[{required:!0,message:"请输入姓名",trigger:"change"}],oldPass:[{required:!0,message:"请输入原密码",trigger:"change"}],newPass:[{required:!0,message:"请输入新密码",trigger:"change"},{min:6,message:"请至少输入6个字符",trigger:"change"},{max:32,message:"最多输入32个字符",trigger:"change"}],rePass:[{required:!0,message:"请再次输入新密码",trigger:"change"},{validator:function(t,s,a){s!==e.editPasswordForm.newPass?a(new Error("两次输入密码不一致")):a()},trigger:"change"}]},initPhone:""}},mounted:function(){var e=JSON.parse(localStorage.userInfo),t=e.userName,s=e.avatar_url,a=e._id;this.userForm={userName:t,avatar_url:s,_id:a}},methods:{showEditPassword:function(){this.editPasswordModal=!0},cancelEditUserInfor:function(){this.$store.commit("removeTag","ownspace_index"),localStorage.pageOpenedList=(0,r.default)(this.$store.state.app.pageOpenedList);var e="";e=this.$store.state.app.pageOpenedList.length>1?this.$store.state.app.pageOpenedList[1].name:this.$store.state.app.pageOpenedList[0].name,this.$router.push({name:e})},saveEdit:function(){},cancelEditPass:function(){this.editPasswordModal=!1},saveEditPass:function(){var e=this;this.$refs.editPasswordForm.validate(function(t){t&&(e.savePassLoading=!0)})},cancelInputCodeBox:function(){this.userForm.cellphone=this.initPhone}}}},288:function(e,t,s){var a=s(289);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(14)("3fa41cca",a,!1,{})},289:function(e,t,s){t=e.exports=s(13)(!1),t.push([e.i,"\n.own-space-btn-box {\n  margin-bottom: 10px;\n}\n.own-space-btn-box button {\n  padding-left: 0;\n}\n.own-space-btn-box button span {\n  color: #2D8CF0;\n  transition: all .2s;\n}\n.own-space-btn-box button span:hover {\n  color: #0C25F1;\n  transition: all .2s;\n}\n.own-space-tra {\n  width: 10px;\n  height: 10px;\n  transform: rotate(45deg);\n  position: absolute;\n  top: 50%;\n  margin-top: -6px;\n  left: -3px;\n  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  z-index: 100;\n}\n.own-space-input-identifycode-con {\n  position: absolute;\n  width: 200px;\n  height: 100px;\n  right: -220px;\n  top: 50%;\n  margin-top: -50px;\n  border-radius: 4px;\n  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.1);\n}\n",""])},290:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"person"}}),e._v("\n            个人信息\n        ")],1),e._v(" "),s("div",[s("Form",{ref:"userForm",attrs:{model:e.userForm,"label-width":100,"label-position":"right",rules:e.validate}},[s("FormItem",{attrs:{label:"用户头像："}},[s("img",{attrs:{src:e.userForm.avatar_url,alt:""}})]),e._v(" "),s("FormItem",{attrs:{label:"用户姓名：",prop:"userName"}},[s("div",{staticStyle:{display:"inline-block",width:"200px"}},[s("Input",{model:{value:e.userForm.userName,callback:function(t){e.$set(e.userForm,"userName",t)},expression:"userForm.userName"}})],1)]),e._v(" "),s("FormItem",{attrs:{label:"登录密码："}},[s("Button",{attrs:{type:"text",size:"small"},on:{click:e.showEditPassword}},[e._v("修改密码")])],1),e._v(" "),s("div",[s("Button",{staticStyle:{width:"100px"},attrs:{type:"text"},on:{click:e.cancelEditUserInfor}},[e._v("取消")]),e._v(" "),s("Button",{staticStyle:{width:"100px"},attrs:{type:"primary",loading:e.save_loading},on:{click:e.saveEdit}},[e._v("保存")])],1)],1)],1)]),e._v(" "),s("Modal",{attrs:{closable:!1,"mask-closable":!1,width:500},model:{value:e.editPasswordModal,callback:function(t){e.editPasswordModal=t},expression:"editPasswordModal"}},[s("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("修改密码")]),e._v(" "),s("Form",{ref:"editPasswordForm",attrs:{model:e.editPasswordForm,"label-width":100,"label-position":"right",rules:e.validate}},[s("FormItem",{attrs:{label:"原密码",prop:"oldPass",error:e.oldPassError}},[s("Input",{attrs:{placeholder:"请输入原密码"},model:{value:e.editPasswordForm.oldPass,callback:function(t){e.$set(e.editPasswordForm,"oldPass",t)},expression:"editPasswordForm.oldPass"}})],1),e._v(" "),s("FormItem",{attrs:{label:"新密码",prop:"newPass"}},[s("Input",{attrs:{placeholder:"请输入新密码"},model:{value:e.editPasswordForm.newPass,callback:function(t){e.$set(e.editPasswordForm,"newPass",t)},expression:"editPasswordForm.newPass"}})],1),e._v(" "),s("FormItem",{attrs:{label:"确认新密码",prop:"rePass"}},[s("Input",{attrs:{placeholder:"请再次输入新密码"},model:{value:e.editPasswordForm.rePass,callback:function(t){e.$set(e.editPasswordForm,"rePass",t)},expression:"editPasswordForm.rePass"}})],1)],1),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"text"},on:{click:e.cancelEditPass}},[e._v("取消")]),e._v(" "),s("Button",{attrs:{type:"primary",loading:e.savePassLoading},on:{click:e.saveEditPass}},[e._v("保存")])],1)],1)],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o}});