"use strict";$(function(){var e=$("body"),n=$(".search_input"),i=$(".reset_search_btn"),a=$(".menu_icon"),o="";function t(){var e=function(){var e=navigator.userAgent;navigator.appVersion;return{trident:-1<e.indexOf("Trident"),presto:-1<e.indexOf("Presto"),webKit:-1<e.indexOf("AppleWebKit"),gecko:-1<e.indexOf("Gecko")&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/)&&e.indexOf("QIHU")&&e.indexOf("Chrome")<0,ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:-1<e.indexOf("Android")||-1<e.indexOf("Linux"),iPhone:-1<e.indexOf("iPhone")||-1<e.indexOf("Mac"),iPad:-1<e.indexOf("iPad"),webApp:-1==e.indexOf("Safari"),ua:e}}();(navigator.browserLanguage||navigator.language).toLowerCase();o=e.mobile||e.iPad?"touchstart":"click"}t(),a.on(o,function(){e.toggleClass("open")}),n.on("input change",function(){""===$(this).val()?i.fadeOut(300):i.fadeIn(300)}),i.on(o,function(){n.val(""),i.fadeOut(300)}),$(window).resize(function(){767<$(window).innerWidth()&&e.removeClass("open"),t()})});