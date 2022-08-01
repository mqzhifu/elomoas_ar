<template>



  <div class="aui-register-popup">
    <div class="aui-register-box">
      <div class="aui-register-link">
        <a href="javascript:;" class="fl">返回首页</a>
        <a href="javascript:;" class="fr">已有账号？去登录</a>
      </div>
      <div class="aui-register-logo">
        <img src="../assets/images/login/logo.png" alt="">
      </div>
      <div class="aui-register-form" id="verifyCheck">
        <div class="register-wrap" id="register-wrap">
          <div class="register" id="register">
            <div class="register-top" id="reg-top">
              <h2 class="normal" id="normal">普通登录</h2>
              <h2 class="nopassword" id="nopw">手机无密码登录</h2>
              <a id="qrcode" href="#">
                <span class="aui-tag-size">扫码登录</span>
              </a>
            </div>
            <!--账户密码登录-->
            <div class="register-con" id="rc">
              <div class="aui-register-form-item">
                <input type="text" name="username" maxlength="20" placeholder="账户名" class="txt03 f-r3 required" tabindex="3" data-valid="isNonEmpty||between:3-20||isUname" data-error="><i class='icon-tips'></i>您还没有输入账户名||<i class='icon-tips'></i>用户名长度3-20位||<i class='icon-tips'></i>只能输入字母、数字、且以中文或字母开头" id="adminNo">
                <label class="focus valid"></label>
              </div>
              <div class="aui-register-form-item">
                <input type="password" name="password" placeholder="密码" id="password" maxlength="20" class="txt04 f-r3 required" tabindex="4" style="ime-mode:disabled;" onpaste="return  false" autocomplete="off" data-valid="isNonEmpty||between:6-20||level:2" data-error="><i class='icon-tips'></i>密码太短，最少6位||<i class='icon-tips'></i>密码长度6-20位||<i class='icon-tips'></i>密码太简单，有被盗风险，建议字母+数字的组合">
                <label class="focus valid"></label>

              </div>
              <div class="aui-register-form-item">
                <p class="aui-for-pwd">
                  <a class="" href="#">忘记密码</a>
                </p>
                <input id="aui-btn-reg" class="aui-btn-reg" placeholder="" readonly="readonly" value="登录">
              </div>
              <div class="aui-protocol">
                登录即同意
                <a href="#">《bootstrapmb网使用协议》</a>&
                <a href="#">《隐私权条款》</a>
              </div>
              <div class="aui-thirds">
                <a href="#">
                  <i class="aui-qq-img"></i>
                  <i>QQ登录</i>
                </a>
                <a href="#">
                  <i class="aui-wx-img"></i>
                  <i>微信登录</i>
                </a>
                <a href="#">
                  <i class="aui-wb-img"></i>
                  <i>微博登录</i>
                </a>
                <div class="clear"></div>
              </div>
            </div>

            <!--手机动态码登录-->
            <div class="login-con" id="lc">
              <div class="aui-register-form-item">
                <input type="text" name="phone" placeholder="手机号码" class="txt01 f-r3 required" keycodes="tel" tabindex="1" data-valid="isNonEmpty||isPhone" data-error="><i class='icon-tips'></i>请输入手机号||<i class='icon-tips'></i>手机号码格式不正确" maxlength="11" id="phone">
                <label class="focus valid"><div class="msg" style="display:none"><i class='icon-tips'></i>您还未输入手机号</div></label>
                <span class="aui-get-code btn btn-gray f-r3 f-ml5 f-size13" id="time_box" disabled style="display:none;"></span>
                <span class="aui-get-code btn btn-gray f-r3 f-ml5 f-size13" id="verifyYz">获取动态码</span>
              </div>
              <div class="aui-register-form-item">
                <input type="text" placeholder="动态码" maxlength="6" id="verifyNo" class="txt02 f-r3 f-fl required" tabindex="2" data-valid="isNonEmpty||isInt" data-error="><i class='icon-tips'></i>请填写正确的手机动态码||<i class='icon-tips'></i>请填写6位手机动态码">
                <label class="focus valid"></label>
              </div>
              <div class="aui-register-form-item">
                <input id="aui-btn-reg1" class="aui-btn-reg" placeholder="" readonly="readonly" value="登录">
              </div>
              <div class="aui-protocol">
                登录即同意
                <a href="#">《bootstrapmb网使用协议》</a>&
                <a href="#">《隐私权条款》</a>
              </div>
              <div class="aui-thirds">
                <a href="#">
                  <i class="aui-qq-img"></i>
                  <i>QQ登录</i>
                </a>
                <a href="#">
                  <i class="aui-wx-img"></i>
                  <i>微信登录</i>
                </a>
                <a href="#">
                  <i class="aui-wb-img"></i>
                  <i>微博登录</i>
                </a>
                <div class="clear"></div>
              </div>
            </div>


            <!-- 扫码登录 -->
            <div class="saoma" id="sm">
              <div class="screen-tu" id="screen">
                <span class="aui-tag-size">密码登录</span>
              </div>
              <div class="aui-text-item">
                <h1>1秒即登录，方便又安全</h1>
              </div>
              <div class="qr-code">
                <span class="tips_img"></span>
                <img src="../assets/images/login/code.png" alt="">
              </div>
              <div class="aui-tab-footer">
                <p>扫码登录，同步账户信息 | <a href="#">下载APP</a></p>
              </div>

            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="aui-register-bottom">
        <a>©www.bootstrapmb.com</a>
        <a href="#">联系客服</a>
        <a href="#">帮助中心</a>
        <div class="clear"></div>
      </div>
    </div>
  </div>





</template>


<script>
import {useStore} from "vuex"

export default {
  name: "Login",
  mounted() {
  },
};

$(document).ready(function() {
  (function ($) {
    var h, timerC = 60,
        opt;
    var j = function (a) {
      a = $.extend(require.defaults, a || {});
      opt = a;
      return (new require())._init(a)
    };

    function require(f) {
      var g = {
        phone: /^1(3\d|5[0-35-9]|8[025-9]|47)\d{8}$/,
        company: /^[\u4E00-\u9FA5a-zA-Z][\u4E00-\u9FA5a-zA-Z0-9\s-,-.]*$/,
        uname: /^[\u4E00-\u9FA5a-zA-Z][\u4E00-\u9FA5a-zA-Z0-9_]*$/,
        zh: /^[\u4e00-\u9fa5]+$/,
        card: /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}(((((19|20)((\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(\d{2}(0[13578]|1[02])31)|(\d{2}02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[48])0229)))|20000229)\d{3}(\d|X|x))|(((\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(\d{2}(0[13578]|1[02])31)|(\d{2}02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[48])0229))\d{3}))$/,
        int: /^[0-9]*$/,
        s: ''
      };
      this.rules = {
        isNonEmpty: function (a, b) {
          b = b || " ";
          if (!a.length) return b
        },
        minLength: function (a, b, c) {
          c = c || " ";
          if (a.length < b) return c
        },
        maxLength: function (a, b, c) {
          c = c || " ";
          if (a.length > b) return c
        },
        isRepeat: function (a, b, c) {
          c = c || " ";
          if (a !== $("#" + b).val()) return c
        },
        between: function (a, b, c) {
          c = c || " ";
          var d = parseInt(b.split('-')[0]);
          var e = parseInt(b.split('-')[1]);
          if (a.length < d || a.length > e) return c
        },
        level: function (a, b, c) {
          c = c || " ";
          var r = j.pwdStrong(a);
          if (b > 4) b = 3;
          if (r < b) return c
        },
        isPhone: function (a, b) {
          b = b || " ";
          if (!g.phone.test(a)) return b
        },
        isCompany: function (a, b) {
          b = b || " ";
          if (!g.company.test(a)) return b
        },
        isInt: function (a, b) {
          b = b || " ";
          if (!g.int.test(a)) return b
        },
        isUname: function (a, b) {
          b = b || " ";
          if (!g.uname.test(a)) return b
        },
        isZh: function (a, b) {
          b = b || " ";
          if (!g.zh.test(a)) return b
        },
        isCard: function (a, b) {
          b = b || " ";
          if (!g.card.test(a)) return b
        },
        isChecked: function (c, d, e) {
          d = d || " ";
          var a = $(e).find('input:checked').length,
              b = $(e).find('.on').length;
          if (!a && !b) return d
        }
      }
    };
    require.prototype = {
      _init: function (b) {
        this.config = b;
        this.getInputs = $('#' + b.formId).find('.required:visible');
        var c = false;
        var d = this;
        if (b.code) {

          $("#verifyYz").click(function () {
            if ($('#phone').val().length) {
              $('.msg').hide()
              $("#time_box").text("60s后可重发");
              d._sendVerify()
            } else {
              $('.msg').show()
            }

          })
        }
        $('body').on({
              blur: function (a) {
                d.formValidator($(this));
                if (b.phone && $(this).attr("id") === "phone") d._change($(this));
                b.onBlur ? b.onBlur($(this)) : ''
              },
              focus: function (a) {
                b.onFocus ? b.onFocus($(this)) : $(this).parent().find("label.focus").not(".valid").removeClass("hide").siblings(".valid").addClass("hide") && $(this).parent().find(".blank").addClass("hide") && $(this).parent().find(".close").addClass("hide")
              },
              keyup: function (a) {
                if (b.phone && $(this).attr("id") === "phone") d._change($(this))
              },
              change: function (a) {
                b.onChange ? b.onChange($(this)) : ''
              }
            },
            "#" + b.formId + " .required:visible");
        $('body').on("click", ".close",
            function () {
              var p = $(this).parent(),
                  input = p.find("input");
              input.val("").focus()
            })
      },
      formValidator: function (a) {
        var b = a.attr('data-valid');
        if (b === undefined) return false;
        var c = b.split('||');
        var d = a.attr('data-error');
        if (d === undefined) d = "";
        var e = d.split("||");
        var f = [];
        for (var i = 0; i < c.length; i++) {
          f.push({
            strategy: c[i],
            errorMsg: e[i]
          })
        }
        ;
        return this._add(a, f)
      },
      _add: function (a, b) {
        var d = this;
        for (var i = 0,
                 rule; rule = b[i++];) {
          var e = rule.strategy.split(':');
          var f = rule.errorMsg;
          var g = e.shift();
          e.unshift(a.val());
          e.push(f);
          e.push(a);
          var c = d.rules[g].apply(a, e);
          if (c) {
            opt.resultTips ? opt.resultTips(a, false, c) : j._resultTips(a, false, c);
            return false
          }
        }
        opt.successTip ? (opt.resultTips ? opt.resultTips(a, true) : j._resultTips(a, true)) : j._clearTips(a);
        return true
      },
      _sendVerify: function () {
        var a = this;
        $("#verifyYz").text("发送验证码").hide();
        $("#time_box").text("10 s后可重发").show();
        if (timerC === 0) {
          clearTimeout(h);
          timerC = 60;
          var b = /^1([^01269])\d{9}$/;
          if (!b.test($("#phone").val())) {
            $("#time_box").text("发送验证码")
          } else {
            $("#verifyYz").show();
            $("#time_box").hide()
          }
          return
        }
        $("#time_box").text(timerC + " s后可重发");
        timerC--;
        h = setTimeout(function () {
              a._sendVerify()
            },
            1000)
      },
      _change: function (a) {
        var b = this;
        if (a.val().length != 11) {
          $("#verifyYz").hide();
          $("#time_box").show();
          if (timerC === 60) $("#time_box").text("发送验证码");
          $("#verifyNo").val("");
          this.config.clearTips ? this.config.clearTips($("#verifyNo")) : j._clearTips($("#verifyNo"));
          return
        }
        var c = /^1([^01269])\d{9}$/;
        if (!c.test(a.val())) return false;
        if (timerC === 60) {
          $("#verifyYz").show();
          $("#time_box").hide()
        } else {
          $("#verifyYz").hide();
          $("#time_box").show()
        }
      }
    };
    j._click = function (c) {
      c = c || opt.formId;
      var d = $("#" + c).find('.required:visible'),
          self = this,
          result = true,
          t = new require(),
          r = [];
      $.each(d,
          function (a, b) {
            result = t.formValidator($(b));
            if (result) r.push(result)
          });
      if (d.length !== r.length) result = false;
      return result
    };
    j._clearTips = function (a) {
      a.parent().find(".blank").addClass("hide");
      a.parent().find(".valid").addClass("hide");
      a.removeClass("v_error")
    };
    j._resultTips = function (a, b, c) {
      a.parent().find("label.focus").not(".valid").addClass("hide").siblings(".focus").removeClass("hide");
      a.parent().find(".close").addClass("hide");
      a.removeClass("v_error");
      c = c || "";
      if (c.length > 21) c = "<span>" + c + "</span>";
      var o = a.parent().find("label.valid");
      if (!b) {
        o.addClass("error");
        a.addClass("v_error");
        if ($.trim(a.val()).length > 0) a.parent().find(".close").removeClass("hide")
      } else {
        a.parent().find(".blank").removeClass("hide")
      }
      o.text("").append(c)
    };
    j.textChineseLength = function (a) {
      var b = /[\u4E00-\u9FA5]|[\u3001-\u3002]|[\uFF1A-\uFF1F]|[\u300A-\u300F]|[\u3010-\u3015]|[\u2013-\u201D]|[\uFF01-\uFF0E]|[\u3008-\u3009]|[\u2026]|[\uffe5]/g;
      if (b.test(a)) return a.match(b).length;
      else return 0
    };
    j.pwdStrong = function (a) {
      var b = 0;
      if (a.match(/[a-z]/g)) {
        b++
      }
      if (a.match(/[A-Z]/g)) {
        b++
      }
      if (a.match(/[0-9]/g)) {
        b++
      }
      if (a.match(/(.[^a-z0-9A-Z])/g)) {
        b++
      }
      if (b > 4) {
        b = 4
      }
      if (b === 0) return false;
      return b
    };
    require.defaults = {
      formId: 'verifyCheck',
      onBlur: null,
      onFocus: null,
      onChange: null,
      successTip: true,
      resultTips: null,
      clearTips: null,
      code: true,
      phone: false
    };
    window.verifyCheck = $.verifyCheck = j
  })(jQuery);
  (function ($) {
    var f;
    var g = function () {
      return (new require())._init()
    };

    function require(a) {
    };
    require.prototype = {
      _init: function () {
        var b = this;
        $('body').on({
              click: function (a) {
                b._click($(this))
              }
            },
            ".showpwd:visible")
      },
      _click: function (a) {
        var c = a.attr('data-eye');
        if (c === undefined) return false;
        var d = $("#" + c),
            cls = !d.attr("class") ? "" : d.attr("class"),
            value = !d.val() ? "" : d.val(),
            type = d.attr("type") === "password" ? "text" : "password",
            b = d.parent().find("b.placeTextB"),
            isB = b.length === 0 ? false : true;
        var s = d.attr("name") ? " name='" + d.attr("name") + "'" : "";
        s += d.attr("data-valid") ? " data-valid='" + d.attr("data-valid") + "'" : "";
        s += d.attr("data-error") ? " data-error='" + d.attr("data-error") + "'" : "";
        s += d.attr("placeholder") ? " placeholder='" + d.attr("placeholder") + "'" : "";
        var e = '<input readonly type="' + type + '" class="' + cls + '" value="' + value + '" id="' + c + '"' + s + ' />';
        if (type === "text") {
          if (isB) b.hide();
          d.parent().find(".icon-close.close").addClass("hide");
          d.removeAttr("id").hide();
          d.after(e);
          a.addClass("hidepwd")
        } else {
          d.prev("input").attr("id", c).val(value).show();
          if (isB && $.trim(value) === "") {
            d.prev("input").hide();
            b.show()
          }
          d.remove();
          a.removeClass("hidepwd")
        }
        ;
        $('body').on("click", "#" + c,
            function () {
              $(this).parent().find(".hidepwd").click();
              if (isB && $.trim($(this).val()) === "") {
                d.show();
                b.hide()
              }
              d.focus()
            })
      }
    };
    require.defaults = {};
    window.togglePwd = $.togglePwd = g
  })(jQuery);
  (function ($) {
    var b, timerC, opt;
    var d = function (a) {
      a = $.extend(require.defaults, a || {});
      opt = a;
      d._clear();
      return (new require())._init()
    };

    function require(a) {
    };
    require.prototype = {
      _init: function () {
        timerC = opt.maxTime;
        this._sendVerify()
      },
      _sendVerify: function () {
        var a = this;
        if (timerC === 0) {
          d._clear();
          opt.after();
          timerC = opt.maxTime;
          return
        }
        timerC--;
        opt.ing(timerC);
        b = setTimeout(function () {
              a._sendVerify()
            },
            1000)
      }
    };
    d._clear = function () {
      clearTimeout(b)
    };
    require.defaults = {
      maxTime: 60,
      minTime: 0,
      ing: function (c) {
      },
      after: function () {
      }
    };
    window.countdown = $.countdown = d
  })(jQuery);
  $(function () {
    togglePwd();
    verifyCheck();
    $('body').on("keyup", "#password",
        function () {
          var t = $(this).val(),
              o = $(this).parent().find(".strength");
          if (t.length >= 6) {
            o.show();
            var l = verifyCheck.pwdStrong(t);
            o.find("b i").removeClass("on");
            for (var i = 0; i < l; i++) {
              o.find("b i").eq(i).addClass("on")
            }
          } else {
            o.hide()
          }
        })
  });


  /* tab 扫码二维码登录方式 */

  var regTop = document.getElementById('reg-top');
  var normal = document.getElementById('normal');
  var nopw = document.getElementById('nopw');
  var saoma = document.getElementById('qrcode');
  var screen = document.getElementById('screen');
  var rc = document.getElementById('rc');
  var lc = document.getElementById('lc');
  var sm = document.getElementById('sm');

  var rcFlag = true;
  var lcFlag = false;

  normal.onclick = function () {
    rc.style.display = "block";
    lc.style.display = "none";
    sm.style.display = "none";
    regTop.style.display = "block";
    nopw.style.borderBottom = "none";
    normal.style.borderBottom = "1px solid #ff552e";
    nopw.style.color = "#666";
    normal.style.color = "#ff552e";
    rcFlag = true;
    lcFlag = false;

  }

  nopw.onclick = function () {
    rc.style.display = "none";
    lc.style.display = "block";
    sm.style.display = "none";
    regTop.style.display = "block";
    nopw.style.borderBottom = "1px solid #ff552e";
    normal.style.borderBottom = "none";
    nopw.style.color = "#ff552e";
    normal.style.color = "#666";
    rcFlag = false;
    lcFlag = true;
  }

  saoma.onclick = function () {
    rc.style.display = "none";
    lc.style.display = "none";
    sm.style.display = "block";
    regTop.style.display = "none";
  }
  screen.onclick = function () {
    regTop.style.display = "block";
    sm.style.display = "none";
    if (rcFlag) {
      rc.style.display = "block";
      return;
    } else {
      rc.style.display = "none";
    }
    if (lcFlag) {
      lc.style.display = "block";
      return;
    } else {
      lc.style.display = "none";
    }
  }


  var rcInnerNum = document.getElementById('rc-inner-num');
  var rcinnerText = rcInnerNum.getElementsByTagName('span')[0];


  var rcInnerVirity = document.getElementById('rc-inner-virity');
  var rcInnerVirityText = rcInnerVirity.getElementsByTagName('span')[0];

  var inputPhone = document.getElementsByName('phone-num')[0];
  var inputPassword = document.getElementsByName('password')[0];
  var loginBtn = document.getElementById('login-btn');


  var nFlag = false;
  inputPhone.onblur = function () {
    var reg = /^(1([358][0-9]|(47)|[7][0178]))[0-9]{8}$/;
    var reg1 = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var reg2 = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{4,10}$/i;
    if (this.value == "") {
      rcInnerNum.style.display = "block";
      rcInnerVirity.style.display = "none";
      return;
    }
    if (reg.test(this.value) || reg1.test(this.value) || reg2.test(this.value)) {

      var value = $(this).val();
      $.post('./js/login.php', {phone: value}, function (data) {
        if (data == '0') {
          $('#rc-inner-num').show().text();
          $('#rc-inner-virity').hide();
          $('#rc-inner-num > span').text('用户名不存在，请重新输入！');
        } else {
          $('.success').show();
          nFlag = true;
        }
      });
      return;
    } else {
      rcInnerNum.style.display = "block";
      rcInnerVirity.style.display = "none";
    }
  }

  inputPhone.onfocus = function () {
    rcInnerNum.style.display = "none";
    $('.success').hide();
    $('#rc-innerError').eq(0).hide();
  }

  var passFlag = false;
  inputPassword.onblur = function () {
    if (this.value == "") {
      if (nFlag) {
        rcInnerVirity.style.display = "block";
        rcInnerNum.style.display = "none";
        rcInnerVirityText.innerText = "请输入密码";
      }
      return;
    }
    var reg = /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,16}/i;
    if (!reg.test(this.value)) {
      rcInnerVirity.style.display = "block";
      rcInnerVirityText.innerText = "密码为8-16位的字母或数字或特殊字符的结合";
      rcInnerNum.style.display = "none";
    } else {
      passFlag = true;
      return;
    }
  }

  inputPassword.onfocus = function () {
    rcInnerVirity.style.display = "none";
    $('#rc-innerError').eq(0).hide();
  }

  loginBtn.onclick = function (e) {
    stopDefault(e);
    if (inputPhone.value == "") {
      rcInnerNum.style.display = "block";
      rcinnerText.innerText = "请输入昵称/邮箱/手机号码";
      rcInnerVirity.style.display = "none";
      return;
    }
    if (inputPassword.value == "") {
      if (nFlag) {
        rcInnerVirity.style.display = "block";
        rcInnerNum.style.display = "none";
      }
      return;
    }
    if (passFlag && nFlag) {
      var phone = inputPhone.value;
      var pass = inputPassword.value;
      $.post('./js/validate.php', {phone: phone, pass: pass}, function (data) {
        if (data == '0') {
          $('#rc-innerError').eq(0).show();
        } else {
          window.location.href = '../main/index.html';
        }
      });
    }
  }


  var innerNum = document.getElementById('inner-num');
  var innerNumText = innerNum.getElementsByTagName('span')[0];
  var innerVirity = document.getElementById('inner-virity');
  var innerVirityText = innerVirity.getElementsByTagName('span')[0];
  var selectList = document.getElementById('country');
  var noPhoneNum = document.getElementsByName('phone-num')[1];
  var otp = document.getElementsByName('password')[1];
  var getcodeBtn = document.getElementById('getcode');
  var loginBtn1 = document.getElementById('login-btn1');
  var country = [
    ' ',
  ];

  for (var i = 0; i < country.length; i++) {
    var option = document.createElement('option');
    option.innerText = country[i];
    selectList.appendChild(option);
  }

  var npnFlag = false;
  noPhoneNum.onblur = function () {
    var reg = /^(1([358][0-9]|(47)|[7][0178]))[0-9]{8}$/;
    if (this.value == "") {
      innerNum.style.display = "block";
      innerNumText.innerText = "请输入手机号码";
      innerVirity.style.display = "none";
      return;
    }
    if (!reg.test(this.value)) {
      innerNum.style.display = "block";
      innerNumText.innerText = "请输入正确的手机号码";
      innerVirity.style.display = "none";
      return;
    } else {
      var value = $(this).val();
      $.post('./js/login.php', {phone: value}, function (data) {
        //console.log(data);
        if (data == '0') {
          $('#inner-num').show().text();
          $('#inner-virity').hide();
          $('#inner-num > span').text('手机号码不存在,请重新输入！');
        } else {
          $('.success').show();
          npnFlag = true;
        }
      });
      return;
    }
  }

  noPhoneNum.onfocus = function () {
    innerNum.style.display = "none";
    $('.success').hide();
  }

  var otpFlag = false;
  otp.onblur = function () {
    var reg = /^\d{6}$/;
    if (this.value == "") {
      if (npnFlag) {
        innerVirity.style.display = "block";
        innerVirityText.innerText = "请输入验证码";
        innerNum.style.display = "none";
      }
      return;
    }
    if (!reg.test(this.value)) {
      if (npnFlag) {
        innerVirity.style.display = "block";
        innerVirityText.innerText = "验证码为6位数字";
        innerNum.style.display = "none";
      }
    } else {
      otpFlag = true;
      return;
    }
  }

  otp.onfocus = function () {
    innerVirity.style.display = "none";
  }

  getcodeBtn.onclick = function (e) {
    stopDefault(e);
    if (npnFlag) {
    } else {
      innerNum.style.display = "block";
      innerNumText.innerText = "请输入手机号码";
      innerVirity.style.display = "none";
      return;
    }
  }

  loginBtn1.onclick = function (e) {
    stopDefault(e);
    if (noPhoneNum.value == "") {
      innerNum.style.display = "block";
      innerNumText.innerText = "请输入手机号码";
      innerVirity.style.display = "none";
      return;
    }
    if (otp.value == "") {
      if (npnFlag) {
        innerVirity.style.display = "block";
        innerVirityText.innerText = "请输入验证码";
        innerNum.style.display = "none";
      }
      return;
    }
    if (npnFlag && otpFlag) {
      window.location.href = '../main/index.html';
    }

  }


  function stopDefault(e) {
    if (e && e.preventDefault) {
      e.preventDefault();//非IE
    } else {
      window.event.returnValue = false;//IE
      return false;
    }
  }
});

</script>


<!--<script type="text/javascript" src="js/login.js"></script>-->
<!--<script type="text/javascript">-->
<!--$(function () {-->
<!--  $("#aui-btn-reg").click(function () {-->
<!--    if (!verifyCheck._click()) return;-->
<!--    alert('恭喜你！登录成功')-->

<!--  });-->
<!--  $("#aui-btn-reg1").click(function () {-->
<!--    if (!verifyCheck._click()) return;-->
<!--    alert('恭喜你！登录成功')-->

<!--  });-->
<!--});-->
<!--</script>-->

<style>

@import "../assets/css/login_style.css";

</style>
