"use strict";$(function(){var n=$("body"),t=$(".search_input"),e=$(".reset_search_btn"),i=$(".menu_icon"),s=$(".sidebar"),c="";function o(){new Date;var n,t,e,i,s,o,a,r=(n=navigator.userAgent,t=/(?:Windows Phone)/.test(n),e=/(?:SymbianOS)/.test(n)||t,i=/(?:Android)/.test(n),s=/(?:Firefox)/.test(n),/(?:Chrome|CriOS)/.test(n),o=/(?:iPad|PlayBook)/.test(n)||i&&!/(?:Mobile)/.test(n)||s&&/(?:Tablet)/.test(n),a=/(?:iPhone)/.test(n)&&!o,{isTablet:o,isPhone:a,isAndroid:i,isPc:!a&&!i&&!e});c=r.isAndroid||r.isPhone||r.isTablet?"touchstart":"click"}o(),i.on(c,function(){s.css("transition","background 0.35s linear, height 0.35s ease-in"),n.toggleClass("open")}),t.on("input change",function(){""===$(this).val()?e.fadeOut(300):e.fadeIn(300)}),e.on(c,function(){t.val(""),e.fadeOut(300)}),$(window).resize(function(){767<$(window).innerWidth()&&(s.css("transition","none"),n.removeClass("open")),o()})});