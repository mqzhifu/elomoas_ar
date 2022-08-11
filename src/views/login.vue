<template>



  <div class="aui-register-popup">
    <div class="aui-register-box">
<!--      <div class="aui-register-link">-->
<!--        <a href="javascript:;" class="fl">返回首页</a>-->
<!--        <a href="javascript:;" class="fr">已有账号？去登录</a>-->
<!--      </div>-->
      <div class="aui-register-logo">
        <img src="../assets/images/my_logo.png" alt="">
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
                <input type="text" name="username"   maxlength="20" placeholder="账户名" class="txt03 f-r3 required" tabindex="3" data-valid="isNonEmpty||between:3-20||isUname" data-error="><i class='icon-tips'></i>您还没有输入账户名||<i class='icon-tips'></i>用户名长度3-20位||<i class='icon-tips'></i>只能输入字母、数字、且以中文或字母开头" id="adminNo">
                <label class="focus valid"></label>
              </div>
              <div class="aui-register-form-item">
                <input type="password" name="password"  placeholder="密码" id="password" maxlength="20" class="txt04 f-r3 required" tabindex="4" style="ime-mode:disabled;" onpaste="return  false" autocomplete="off" data-valid="isNonEmpty||between:6-20||level:2" data-error="><i class='icon-tips'></i>密码太短，最少6位||<i class='icon-tips'></i>密码长度6-20位||<i class='icon-tips'></i>密码太简单，有被盗风险，建议字母+数字的组合">
                <label class="focus valid"></label>

              </div>
              <div class="aui-register-form-item">
                <p class="aui-for-pwd">
                  <a class="" href="#">忘记密码</a>
                </p>
                <input id="aui-btn-reg" class="aui-btn-reg" placeholder="" @click="login1" readonly="readonly" value="登录">
              </div>
              <div class="aui-protocol">
                登录即同意
                <a href="#">《seedreality网使用协议》</a>&
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
                <input id="aui-btn-reg1" @click= "login2" class="aui-btn-reg" placeholder="" readonly="readonly" value="登录">
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
<!--      <div class="aui-register-bottom">-->
<!--        <a>©www.seedreality.com</a>-->
<!--        <a href="#">联系客服</a>-->
<!--        <a href="#">帮助中心</a>-->
<!--        <div class="clear"></div>-->
<!--      </div>-->
    </div>
  </div>





</template>


<script>

export default {
  name: "Login",
  mounted() {
    // var that = this;
    // $("#aui-btn-reg").click(function (that) {
    //   if (!verifyCheck._click()) return;
    //   console.log("恭喜你！登录成功1")
    //   // alert('恭喜你！登录成功1')
    //   that.login()
    //
    // });
    // $("#aui-btn-reg1").click(function (that) {
    //   if (!verifyCheck._click()) return;
    //   // alert('恭喜你！登录成功2')
    //   console.log("恭喜你！登录成功2")
    //   that.login()
    // });
  },
  methods:{
    login1:function(){
      if (!verifyCheck._click()) return;
      this.login(1);
    },
    login2:function(){
      if (!verifyCheck._click()) return;
      this.login(2);
    },
    login:function(type){
      if(type == 1){
        var username = $("#adminNo").val();
        var password = $("#password").val();
        var loginFormData = {"username":username,"password":password};
        var p = this.$Server.request("/base/login",loginFormData);

        p.then((res)=>{
          if (res.code == 200) {
            alert("登陆成功");
            console.log(res);
            this.$TokenManager.Set(res.data.token);
            this.gotoHome();
          }else{
            var msg = "登陆失败,"+res.msg;
            alert(msg);
            console.log(msg);
            return false;
          }
        });

      }else{

      }

    },
    gotoHome : function(){
      location.href = "/";
    },
  }

};

// $(document).ready(function(){
  require("./../assets/js/login.js");
// });

// $(function () {
//   $("#aui-btn-reg").click(function () {
//     if (!verifyCheck._click()) return;
//     alert('恭喜你！登录成功')
//
//   });
//   $("#aui-btn-reg1").click(function () {
//     if (!verifyCheck._click()) return;
//     alert('恭喜你！登录成功')
//
//   });
// });


</script>




<style scoped>

@import "../assets/css/login_style.css";

</style>
