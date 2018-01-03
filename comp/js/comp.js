/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tpl = __webpack_require__(8);

var _tpl2 = _interopRequireDefault(_tpl);

var _drag = __webpack_require__(7);

var _drag2 = _interopRequireDefault(_drag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $oMenu = $('.menu');
var $oStart = $('.start');
var $oStartMenu = $('.startMenu');
var imgArr = ['./img/083a53b7.bg.jpg', './img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg'];
var iNow = 0;
var startOn = true;
var tonOff = true;
function init() {
    console.log('Author: Bin');
    this.one = $('.main .item').eq(0);
    this.two = $('.main .item').eq(1);
    this.three = $('.main .item').eq(2);
    this.four = $('.main .item').eq(3);
    this.five = $('.main .item').eq(4);
    this.six = $('.main .item').eq(5);
}
init.prototype = {
    // 点击全屏
    fullpage: function launchFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullScreen();
        }
    },
    // 获取时间
    getTime: function time() {
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();
        var y = now.getFullYear();
        var M = now.getMonth() + 1;
        var d = now.getDate();
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        if (M < 10) {
            M = '0' + M;
        }
        if (d < 10) {
            d = '0' + d;
        }
        $('.time').html(h + ':' + m + ':' + s + "<br>" + y + '/' + M + '/' + d);
    },
    // 退出
    fnExit: function fnExit() {
        $('.container').append(_tpl2.default.exit);
        $('.exitComp').parent('.modal').css({
            display: 'block'
        });
    },
    // 切换壁纸
    fnToggle: function fnToggle() {
        $('.container').css({
            backgroundImage: 'url(' + imgArr[iNow] + ')'
        });
        if (iNow == imgArr.length - 1) {
            iNow = -1;
        }
        iNow++;
    },
    // 显示详细时间
    shouFullTime: function shouFullTime(e) {
        e.stopPropagation();
        if (tonOff) {
            $('.times').animate({
                top: -'552'
            });
        } else {
            $('.times').animate({
                top: '60'
            });
        }
        tonOff = !tonOff;
    },
    // 状态栏显示
    showStatus: function showStatus() {
        $('.statusBar li').each(function () {
            $(this).on('click', function () {
                var i = $(this).attr('data-i');
                $('.drag').eq(i).show();
            });
        });
    },
    // 桌面图标双击
    showItem: function showItem(obj, cla) {
        $(obj).on('dblclick', function () {
            $(cla).show();
            // if(cla == '.media'){
            //     $('video').attr('src',$(this).attr('data-src'));
            // }
        });
    },
    // 放大
    big: function big(obj) {
        $(obj).each(function () {
            $(this).on('click', function () {
                var objParent = $(this).parent().parent().parent();
                if (objParent.width() == 800) {
                    objParent.css({
                        width: '100%',
                        height: '90%'
                    });
                    $(this).html('<span class="icon-min"></span>');
                } else {
                    objParent.css({
                        width: '800',
                        height: '600'
                    });
                    $(this).html('<span class="icon-max"></span>');
                }
            });
        });
    },
    // 关闭每个x
    closeItem: function closeItem(obj1) {
        $(document).on('click', function () {
            $(obj1).each(function () {
                $(this).on('click', function () {
                    var objParent = $(this).parent().parent().parent();
                    var ind = objParent.attr('data-s');
                    objParent.hide();
                    if (ind == 2) {
                        $('.media video').get(0).pause();
                    }
                    if (ind == 3) {
                        $('.music audio').get(0).pause();
                    }
                    $('.statusBar li').eq(ind).hide();
                });
            });
        });
    },
    // 缩小
    small: function small() {
        $('.small').each(function () {
            $(this).on('click', function () {
                var objParent = $(this).parent().parent().parent();
                objParent.hide();
                $('.statusBar li').eq(objParent.attr('data-s')).show();
            });
        });
    },
    // 右击
    rClick: function rClick(e) {
        e.preventDefault();
        var _ref = [e.pageX, e.pageY],
            oX = _ref[0],
            oY = _ref[1];

        if (e.which == 3) {
            $('.menu').css({
                display: 'block',
                left: oX,
                top: oY
            });
        }
    },
    // 桌面单击
    dClick: function dClick() {
        fn.fullpage(document.documentElement);
        $('.menu').hide();
        $oStartMenu.css({
            bottom: '-60%'
        });
        $('.times').animate({
            top: '60'
        });
        tonOff = true;
        startOn = true;
    },
    // 开始 菜单
    fnStart: function fnStart(e) {
        e.stopPropagation();

        if (startOn) {
            $oStartMenu.css({
                bottom: 50
            });
        } else {
            $oStartMenu.css({
                bottom: '-60%'
            });
        }
        startOn = !startOn;
    },
    // 右击显示公告
    showGg: function showGg() {
        $('.showNotice').on('click', function () {
            $('.notice').show();
        });
    },
    // 输入框回车提交
    enterSubmit: function enterSubmit(cla) {
        $(cla).find('input').on('keydown', function (e) {
            if (e.keyCode == 13) {
                var url = $(this).val();
                if (url.indexOf('http') == -1) {
                    url = 'http://' + url;
                } else if (url.indexOf('https') == -1) {
                    url = 'https://' + url;
                }
                $(cla).find('iframe').attr('src', url);
            }
        });
    }
};
// 初始化
var fn = new init();
// 时间
fn.getTime();
setInterval(function () {
    fn.getTime();
}, 1000);
// 退出
$('.exit').on('click', fn.fnExit);
// 切换壁纸
$('.toggle').on('click', fn.fnToggle);
// 显示详细时间
$('.time').on('click', fn.shouFullTime);
// 状态栏
fn.showStatus();
// 桌面图标双击
fn.showItem(fn.one, '.comp');
fn.showItem(fn.two, '.browser');
fn.showItem(fn.three, '.wzq');
fn.showItem(fn.four, '.dzk');
fn.showItem(fn.five, '.zwdzjs');
fn.showItem(fn.six, '.two');
// 放大
fn.big('.big');
// 关闭每个x
fn.closeItem('.close');
// 缩小
fn.small();
// 右击
$(document).on('contextmenu', fn.rClick);
// 右击显示公告
fn.showGg();
// 桌面单击
$(document).on('click', fn.dClick);
// 开始菜单
$oStart.on('click', fn.fnStart);
// 输入框回车提交
fn.enterSubmit('.browser');
fn.enterSubmit('.wzq');
fn.enterSubmit('.dzk');
fn.enterSubmit('.zwdzjs');
// 拖拽
$('.main .item').each(function () {
    var dragItem = new _drag2.default($(this));
    dragItem;
});
$('.drag').each(function () {
    var dragD = new _drag2.default($(this));
    dragD;
});

// 输入框获取光标
$('.inputBox').click(function () {
    $(this).find('input').focus();
});

$('.dbl li').each(function () {
    $(this).on('dblclick', function () {
        var thisParent = $(this).parent().parent();
        var ind = $(this).attr('data-pos');
        if ($(this).attr('video-src')) {
            $('.media').show();
            $('.media video').attr('src', $(this).attr('video-src'));
            $('.media video').get(0).play();
        } else if ($(this).attr('music-src')) {
            $('.music').show();
            $('.music audio').attr('src', $(this).attr('music-src'));
            $('.music audio').get(0).play();
        } else if ($(this).attr('img-src')) {
            $('.image').show();
            $('.image img').attr('src', $(this).attr('img-src'));
        } else {
            thisParent.hide();
            $('.dbl').eq(ind).show();
        }
    });
});

$('.left dt').each(function () {
    $(this).on('click', function () {
        var ind = $(this).attr('data-w');
        $('.dbl').eq(ind).show().siblings().hide();
    });
});
$('.left dd').each(function () {
    $(this).on('click', function () {
        var ind = $(this).attr('data-w');
        $('.dbl').eq(ind).show().siblings().hide();
    });
});

$('.cTitle').on('click', function () {
    $('.parent').show().siblings().hide();
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _comp = __webpack_require__(4);

var _comp2 = _interopRequireDefault(_comp);

__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Bin on 2017/5/14.
 */
// 拖拽

function Drag(obj) {
    var _this = this;
    this.disX = 0;
    this.disY = 0;
    this.obj = obj;
    this.obj.on('mousedown', function (e) {
        _this.Dragdown(e);
    });
}
Drag.prototype.Dragdown = function (e) {
    var _this = this;
    this.obj.css({
        zIndex: '10'
    }).siblings().css({
        zIndex: '1'
    });
    e.preventDefault();
    this.disX = e.pageX - this.obj.offset().left;
    this.disY = e.pageY - this.obj.offset().top;
    $(document).on('mousemove', function (e) {
        _this.Dragmove(e);
    });
    $(document).on('mouseup', function () {
        _this.Dragup();
    });
};
Drag.prototype.Dragmove = function (e) {
    var offL = e.clientX - this.disX;
    var offT = e.clientY - this.disY;
    // if (offT < 0) {
    //     offT = 0;
    // }
    // if (offL < 0) {
    //     offL = 0;
    // }
    this.obj.css({
        left: offL,
        top: offT
    });
};
Drag.prototype.Dragup = function () {
    $(document).off('mousemove mouseup');
};

exports.default = Drag;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Bin on 2017/5/14.
 */

exports.default = {
  // 退出
  exit: "\n        <div class=\"exitComp\">\n          <div class=\"cheader\">\n            <h3>\u63D0\u793A</h3>\n          </div>\n          <div class=\"cbody\">\n            <div class=\"ccontent\">\n              <p>\u786E\u5B9A\u8981\u9000\u51FA\u5C0F\u4E8C\u7535\u8111\u5417?</p>\n            </div>\n            <input type=\"button\" value=\"\u786E\u5B9A\" onclick=\"window.close()\">\n            <input type=\"button\" value=\"\u53D6\u6D88\" onclick=\"$('.exitComp').remove();\">\n          </div>\n        </div>"
};

/***/ })
/******/ ]);