<template>
      <div class="middle-sidebar-bottom">
        <div class=" bg-white dark-bg-transparent mr-3 pr-0" style="width: 100%">
      <div class="row">



        <div class="col-xl-10 ">
          <div class="card border-0 mb-0 rounded-lg overflow-hidden live-stream bg-image-center bg-image-cover vbg" id="remote_video_box" >
            <div class="card-body d-flex justify-content-start p-2 position-absolute top-0 w-100 bg-gradiant-top" v-if="switchRemoteUserInfo">
<!--              <div >-->
                <figure class="avatar mb-0 mt-0 overflow-hidden">
                  <img src="../assets/images/user-1.png" alt="image" class="z-index-1 shadow-sm rounded-circle w40">
                </figure>
                <h5 class="text-white mt-1 fw-700 ml-2 z-index-1 ">{{remoteUserInfo.uid}}<span class="d-block font-xsssss mt-1 fw-400 text-grey-300 z-index-1 ">2 hour</span></h5>
<!--              </div>-->
<!--              <span class="live-tag position-absolute right-15 mt-2 bg-danger p-2 z-index-1  rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>-->
            </div>


            <div class="position-absolute right-15 mt-2 p-2 z-index-1  rounded-lg  fw-700 ls-3 w150 h200" id="localVideoBox" >
              <img v-if="switchLocalVideoBox" src="../assets/images/video-bg-2.jpg" alt="image" class="w150 h200 rounded-3 position-relative z-index-1 shadow-xss">
            </div>

            <div class="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
              <a v-if="switchRtcJoinIcon" href="#" @click.native="rtcJoinChannel();" class="btn-round-xl d-md-inline-block d-none bg-blur m-3 mr-0 z-index-1"><i class="feather-user-plus text-white font-md"></i></a>
              <a v-if="switchLeaveIcon" href="#" @click.native="rtcUserLeave();" class="btn-round-xxl bg-danger z-index-1"><i class="feather-phone-off text-white font-md"></i></a>
              <a v-if="switchCameraIcon" href="#" class="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"><i class="ti-video-camera text-white font-md"></i></a>
              <a v-if="switchMonitorIcon" href="#"  @click.native="screenshotsDoing();"  class="btn-round-xl d-md-inline-block d-none bg-blur m-3 ml-0 z-index-1"><i class="feather-monitor text-white font-md"></i></a>
              <span v-if="switchLiveTime" class="p-2 bg-blur z-index-1 text-white fw-700 font-xssss rounded-lg right-15 position-absolute mb-4 bottom-0">44:00</span>
              <span v-if="switchLiveIcon" class="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
            </div>








          </div>


          <!--截图容器 start-->
          <div class="middle-wrap" id="screenshots_container" style="display:none " >
            <div class="">
                <canvas id="screenshots_canvas"></canvas>
                <div id="myCanvasTools"></div>

<!--                <div class="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">-->
                  <div class="">
                  <a v-if="switchCloseScreenIcon" href="#" @click="screenshotsCloseCanvasTools" class="btn-round-xl d-md-inline-block d-none bg-blur m-3 mr-0 z-index-1"><i class="feather-x text-white font-md"></i></a>
                  <a v-if="switchSendScreenPicIcon" href="#" id="bnt_send_screenshots" class="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"><i class="feather-send text-white font-md"></i></a>
                </div>

            </div>
          </div>
          <!--截图容器 end-->



        </div>


        <div class="col-xl-2 scroll-bar bg-white" style="height: calc(100vh - 150px) ">
          <form action="#" class="">
            <div class="search-form">
              <i class="ti-search font-xs"></i>
              <input type="text" class="form-control text-grey-500 mb-0 bg-greylight border-0" placeholder="Search here.">
            </div>
          </form>
          <div class="section full mt-2 mb-2 pl-3">
            <ul class="list-group list-group-flush">
              <li class="bg-transparent list-group-item no-icon pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-8.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Hurin Seary</a></h3> <span class="d-block">Online</span> <span class="badge mt-0 text-grey-500 badge-pill">4:09 pm</span><div class="snippet float-right" data-title=".dot-typing"><div class="stage"><div class="dot-typing"></div></div></div></li>
              <li class="bg-transparent list-group-item no-icon pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-7.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Victor Exrixon</a></h3> <span class="d-block">Offline</span> <span class="badge badge-primary text-white badge-pill"><i class="feather-phone-outgoing"></i></span></li>
              <li class="bg-transparent list-group-item no-icon pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-12.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Surfiya Zakir</a></h3> <span class="d-block">Working</span>  </li>
              <li class="bg-transparent list-group-item no-icon pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-4.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Goria Coast</a></h3> <span class="d-block">Away</span> </li>

              <li class="bg-transparent list-group-item pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-3.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Hurin Seary</a></h3> <span class="d-block">Online</span> <span class="badge badge-danger text-white badge-pill"><i class="feather-phone-incoming"></i></span> </li>
              <li class="bg-transparent list-group-item pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-2.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Victor Exrixon</a></h3> <span class="d-block">Online</span></li>
              <li class="bg-transparent list-group-item pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-8.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Surfiya Zakir</a></h3> <span class="d-block">Working</span></li>
              <li class="bg-transparent list-group-item pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-4.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Goria Coast</a></h3> <span class="d-block">Working</span></li>

              <li class="bg-transparent list-group-item pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-3.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Hurin Seary</a></h3> <span class="d-block">Offline</span></li>
              <li class="bg-transparent list-group-item pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-8.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Surfiya Zakir</a></h3> <span class="d-block">Offline</span></li>
              <li class="bg-transparent list-group-item pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-4.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Goria Coast</a></h3> <span class="d-block">Offline</span></li>

              <li class="bg-transparent list-group-item pl-0"><figure class="avatar float-left mb-0 mr-3"><img src="../assets/images/user-3.png" alt="image" class="w45"></figure><h3 class="fw-700 mb-0 mt-1"><a class="font-xsss text-grey-900 text-dark d-block" href="chat.html">Hurin Seary</a></h3> <span class="d-block">Offline</span></li>

            </ul>
          </div>
        </div>

      </div>
      </div>
      </div>
<!--    <button class="btn btn-circle text-white btn-neutral sidebar-right">-->
<!--      <i class="ti-angle-left"></i>-->
<!--    </button>-->

</template>



<script>
import {useStore} from "vuex"
import AgoraRTM from "agora-rtm-sdk";//声网 消息传输 SDK
import AgoraRTC from "agora-rtc-sdk-ng";//声网 音视频 SDK
import CanvasTools from "../utils/canvastools.min"//截图 涂鸦 工具


var rtc = {
  client: null,
    localAudioTrack: null,
    localVideoTrack: null,
    remoteVideoTrack:null,//给截图使用
};

var rtm = {
  client  : null,
  channel : null,
};

export default {
  data : function (){
    return {
      "remoteUserInfo":{
          "uid":0,
      },
      "canvasTools":null,//截图 - 工具栏
      "screenshotsExist":0,//标记：用户已经点击了截图按钮，canvas里已经有图片了
      "agora":{
        appId: process.env.VUE_APP_APP_ID,
        channel: process.env.VUE_APP_APP_CHANNEL,
        rtc_user:{
          token : "",
          uid: parseInt(process.env.VUE_APP_RTC_USER_ID),
          // uid: process.env.VUE_APP_RTC_USER_ID,
        },
        rtm_user :{
          uid : process.env.VUE_APP_RTM_USER_ID,
          token: ""
        },

        rtc_local_video_width:"145",
        rtc_local_video_height:"190",
        rtc_remote_video_width:process.env.VUE_APP_RTC_REMOTE_VIDEO_WIDTH,
        rtc_remote_video_height:process.env.VUE_APP_RTC_REMOTE_VIDEO_HEIGHT,
      },
      // "rtc":{
      //   client: null,
      //   localAudioTrack: null,
      //   localVideoTrack: null,
      //   remoteVideoTrack:null,//给截图使用
      // },
      // "rtm":{
      //   client  : null,
      //   channel : null,
      // },
      "switchRemoteUserInfo" : false,
      "switchLiveTime" : false,
      "switchLiveIcon" : false,
      "switchRtcJoinIcon" : false,
      "switchLeaveIcon" : false,
      "switchMonitorIcon" : false,
      "switchCameraIcon" : false,
      "switchLocalVideoBox" :false,
      "switchSendScreenPicIcon" :false,
      "switchCloseScreenIcon" : false,
      "switchMyCanvasTools" : false,
      "switchScreenshotsContainer" :false,
      // "switch" : false,
      "screenshots_canvas_width": 0,
      "screenshots_canvas_height" : 0,

    };
  },
  name: "Video",
  mounted() {
    useStore().commit("SET_MENU_ID",4),
    this.initPageElementSwitch();

    //从后端获取RTC-Token，然后初始化RTC

    var data = {"username": this.agora.rtc_user.uid.toString(), "channel": this.agora.channel};
    // var data = {"username": this.agora.rtc_user.uid, "channel": this.agora.channel};
    var requestPromise = this.$Server.request("/twin/agora/rtc/get/token", data );
    requestPromise.then((res)=>{
      if (res.code != 200){
        return alert("reqeust err (/twin/agora/rtc/get/token):"+res.msg);
      }
      this.rtcInit(res.data);
    });
    //从后端获取RTM-Token，然后初始化RTM
    var data = {"username":this.agora.rtm_user.uid};
    var requestPromise = this.$Server.request("/twin/agora/rtm/get/token",data);
    requestPromise.then((res)=>{
      if (res.code != 200){
        return alert("reqeust err (/twin/agora/rtm/get/token):"+res.msg);
      }
      this.rtmInit(res.data);
    });

    this.screenshotsInit();
  },
  methods:{
    //页面上的一些元素 隐藏掉
    initPageElementSwitch : function(){
      // this.swich = false;
      this.switchRemoteUserInfo = false;
      this.switchLiveTime = false;
      this.switchLiveIcon = false;
      this.switchRtcJoinIcon = true;
      this.switchLeaveIcon = false;
      this.switchMonitorIcon = false;
      this.switchCameraIcon = false;
      this.switchLocalVideoBox = true;
      this.switchSendScreenPicIcon = false;
      this.switchCloseScreenIcon = false;
      this.switchMyCanvasTools = false;
      this.switchScreenshotsContainer = false;

      document.getElementById("localVideoBox").innerHTML = "";
    },
    remoteUserJoinSwitch :function(){
      // this.swich = true;
      this.switchLiveIcon = true;
      this.switchLiveTime = true;
      this.switchLeaveIcon = true;
      this.switchMonitorIcon = true;
      this.switchCameraIcon = true;
      this.switchRemoteUserInfo = true;
      this.switchLocalVideoBox = false;
      this.switchRtcJoinIcon = false;
      this.switchMyCanvasTools = false;
      this.switchScreenshotsContainer = false;
    },
    rtcInit: function (token) {
      console.log("rtcInit ~ : createClient , ListeningEvent : user-published , user-unpublished. ");
      this.agora.rtc_user.token = token;
      rtc.client = AgoraRTC.createClient({mode: "rtc", codec: "vp8"});
      //监听 用户加入频道
      rtc.client.on("user-published", this.rtcEventUserPublished);
      //点击按钮：自己离开
      // document.getElementById("rtc_leave").onclick = this.rtcUserLeave;
    },
    rtcEventUserPublished : async function(user, mediaType){
      console.log("Listening event <user-published> , user:",user , " mediaType:",mediaType , " this.rtc.client:",rtc.client);
      await rtc.client.subscribe(user, mediaType);
      // console.log("aaa:",aaa)
      if (mediaType === "video") {
        rtc.remoteVideoTrack = user.videoTrack;//给外部使用
        // var remotePlayerContainer = this.$refs.remote_video;//找到装视频的容器对象
        var remotePlayerContainer = document.getElementById("remote_video_box");
        this.remoteUserInfo.uid = user.uid;
        this.remoteUserJoinSwitch();
        // remotePlayerContainer.style.width = "1600px";
        // remotePlayerContainer.style.height = "600px";
        // remotePlayerContainer.style.width = getVideoSizePlusPX("width");
        // remotePlayerContainer.style.height = getVideoSizePlusPX("height");

        rtc.remoteVideoTrack.play(remotePlayerContainer);
      }

      if (mediaType === "audio") {
        user.audioTrack.play();
      }
      //监听：其它用户退出事件
      rtc.client.on("user-unpublished", this.rtcEventUserUnpublished);
    },
    rtcUserLeave : async function(){
      rtc.localAudioTrack.close();
      rtc.localVideoTrack.close();
      rtc.remoteVideoTrack = null;

      this.switchRtcJoinIcon = true;
      this.switchLocalVideoBox = true;
      this.switchLeaveIcon = false;
      this.switchRemoteUserInfo = false;
      this.switchLiveTime = false;
      this.switchLiveIcon = false;
      this.switchMonitorIcon = false;
      this.switchCameraIcon = false;
      document.getElementById("localVideoBox").innerHTML = "";
      this.screenshotsCloseCanvasTools();
      await rtc.client.leave();

    },
    rtcJoinChannel: async function () {
      console.log("rtc join :", this.agora.appId, this.agora.channel, this.agora.rtc_user.token, this.agora.rtc_user.uid);
      await rtc.client.join(this.agora.appId, this.agora.channel, this.agora.rtc_user.token, this.agora.rtc_user.uid);



      this.switchLocalVideoBox = false;
      this.switchRtcJoinIcon = false;
      this.switchLeaveIcon = true;

      var localPlayerContainerDiv = document.getElementById("localVideoBox");
      rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack(); //创建一个：本地 音频追踪 -> 通过麦克风，获取音频采样
      rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();//创建一个：本地 视频追踪 -> 通过摄像头，获取音频采样
      // alert(this.rtc.client);
      await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);//发布本地音频和视频到 RTC通道
      rtc.localVideoTrack.play(localPlayerContainerDiv);

      console.log("local AudioTrack json success, publish success!");
    },
    rtcEventUserUnpublished :async function(user){
      console.log("Listening event <user-unpublished> , user:",user );
      // remotePlayerContainer.remove();
      rtc.remoteVideoTrack = null;

      this.switchRtcJoinIcon = true;
      this.switchLocalVideoBox = true;
      this.switchLeaveIcon = false;
      this.switchRemoteUserInfo = false;
      this.switchLiveTime = false;
      this.switchLiveIcon = false;
      this.switchMonitorIcon = false;
      this.switchCameraIcon = false;
      this.screenshotsClose();

      document.getElementById("localVideoBox").innerHTML = "";
      // document.getElementById("remote_video").innerHTML="";
      // document.getElementById("bnt_send_screenshots").style.display = "none";
      // this.$ref.remote_video.innerHTML = "";
      // this.$ref.remote_video.style.display = "none";
      this.screenshotsCloseCanvasTools();
    },
    //============================screenshots start====================================================================================
    //初始化：视频截图功能
    screenshotsInit :function (){
      // this.switchScreenshotsContainer = true;
      var screenshots_canvas_obj =  document.getElementById("screenshots_canvas");
      screenshots_canvas_obj.width = this.getVideoSize("width");
      screenshots_canvas_obj.height = this.getVideoSize("height");
      // this.screenshots_canvas_width = this.getVideoSize("width");
      // this.screenshots_canvas_height = this.getVideoSize("height");
    },
    //截取 - 对方视频 - 图片
    screenshotsDoing : function (){
      if (this.screenshotsExist == 1){
        this.screenshotsClose();
      }
      this.screenshotsExist = 1;//标记下：已经有截图的图片了
      if (!rtc.remoteVideoTrack){
        return alert("对端还未接入视频，无法截图，请等待...");
      }
      //默认 截图的窗口是关闭的，当点击截图后，要先展示出来
      // this.switchScreenshotsContainer = true;
      this.switchSendScreenPicIcon = true;
      this.switchCloseScreenIcon = true;

      var screenshots_container = document.getElementById("screenshots_container");
      screenshots_container.style.display = "";

      var videoFrameImgData = rtc.remoteVideoTrack.getCurrentFrameData();
      console.log("width:",videoFrameImgData.width," height:",videoFrameImgData.height, " videoFrameImgData:",videoFrameImgData)

      // var newSize = {"width":1000,"height":500}
      // var hasResize = 0;
      // if (videoFrameImgData.width < this.getVideoSize("width") ){
      //   newSize.width = 1600;
      //   hasResize = 1;
      // }
      //
      // if (videoFrameImgData.height < this.getVideoSize("height") ){
      //   newSize.height = 800;
      //   hasResize = 1;
      // }
      videoFrameImgData = spreadImageData(videoFrameImgData,2);

      var  canvas = document.getElementById("screenshots_canvas");
      var ctx = canvas.getContext('2d');
      // alert(videoFrameImgData.width);
      // 这里先注释掉，暂时不要改变大小


      // var newCanvas = $("<canvas>")
      //     .attr("width", videoFrameImgData.width)
      //     .attr("height", videoFrameImgData.height)[0];
      //
      // newCanvas.getContext("2d").putImageData(videoFrameImgData, 0, 0);

      // ctx.scale(2,2);
      // ctx.drawImage(newCanvas, 0, 0);


      // videoFrameImgData = videoFrameImgData.scale(2,2);
      // canvas.width = videoFrameImgData.width;
      // canvas.height = videoFrameImgData.height;
      ctx.putImageData(videoFrameImgData, 0, 0);
      //给发送截图 按钮：注册点击事件
      // var bnt_send_screenshots_obj = document.getElementById("bnt_send_screenshots");
      // //先给按钮点击事件置空，防止重复添加事件
      // bnt_send_screenshots_obj.onclick = null;
      // bnt_send_screenshots_obj.onclick = function(){
      //   //将截图发送到服务端
      //   this.screenshotsSendPicToServer();
      // }
      //打开涂鸦工具条
      this.screenshotsOpenCanvasTools();
    },

    screenshotsOpenCanvasTools : function(){
      if(!this.screenshotsExist){
        return alert("未点击截图，无法打开：截图工具栏");
      }
      var canvas = document.getElementById("screenshots_canvas");
      // canvas.style.width = this.getVideoSize()
      // var canvas =  this.$refs.screenshots_canvas
      this.canvasTools = new CanvasTools(canvas, {
        container : document.getElementById('myCanvasTools')
      });
    },

    // screenshotsClose:function(){
    //   // this.switchScreenshotsContainer = false;
    //   this.screenshotsCloseCanvasTools();
    // },

    screenshotsCloseCanvasTools : function(){
      document.getElementById("screenshots_container").style.display = "none";
      if(!this.screenshotsExist){
        return alert("未点击截图，不需要关闭截图工具栏");
      }

      document.getElementById('myCanvasTools').innerHTML = "";
      this.canvasTools = null;
      this.screenshotsExist = 0;
    },
    screenshotsSendPicToServer :function (){
      if (!this.screenshotsExist){
        return alert("请先截图，再发送...");
      }
      //从canvas中读取图片流
      var  canvas = document.getElementById("screenshots_canvas");
      var myImg = new Image();
      myImg.src = canvas.toDataURL("image/jpeg",0.7);
      //将图片流传到server端
      var data = {"stream":myImg.src}
      var requestPromise = this.$Server.request("/file/upload/img/one/stream/base64",data);
      requestPromise.then((res)=>{
        this.screenshotsSendPicToServerCallback(res);
      });
    },
    //截图后发送图片到服务端，回调函数，最后，再通过RTM推送到对端
    screenshotsSendPicToServerCallback: function(data){
      var r= Math.random();
      if (process.env.NODE_ENV == "development"){
        var url = data.full_local_ip_url;
      }else{
        var url = data.full_local_domain_url;
      }
      url += "?r="+r;//加随机数，防止缓存

      var now = new Date().getTime();
      var msg = url + "," + now.toString();
      console.log("start send message:",msg);
      rtm.channel.sendMessage({ text: msg }).then(() => {
        console.log("send unity msg finish.")
        // document.getElementById("log").appendChild(document.createElement('div')).append("Channel message: " + url + " from " + rtm.channel.channelId)
      });

      console.log("server back img url:",url);
    },
    //============================screenshots end====================================================================================
    //============================rtm start====================================================================================
    rtmInit : function (token){
      this.agora.rtm_user.token = token;
      console.log("initRtm , "," token:",this.agora.rtm_user.token, " appid:",this.agora.appId , " channel:",this.agora.channel);

      rtm.client = AgoraRTM.createInstance(this.agora.appId);
      rtm.channel = rtm.client.createChannel(this.agora.channel);

      this.rtmAutoLoginJoinChannel();
    },
    rtmAutoLoginJoinChannel : async function (){
      console.log("rtm login:",this.agora.rtm_user);
      await  rtm.client.login(this.agora.rtm_user).then(() => {
       console.log("rtm login ok")
        rtm.channel.join().then (() => {
          console.log("rtm join channel ok")
          // document.getElementById("log").appendChild(document.createElement('div')).append("You have successfully joined channel " + rtm.channel.channelId)
        });
      });
    },
    //============================rtm end====================================================================================
    getVideoSize:function  (direction){
      var rs = 0;
      if (direction == "width"){
        rs = parseInt(this.agora.rtc_remote_video_width ) / 2;
      }else if (direction == "height"){
        rs = parseInt(this.agora.rtc_remote_video_height ) / 2;
      }else{
        alert("err:getVideoSize direction: "+ direction);
      }
      return rs;
    },

    getVideoSizePlusPX:function  (direction){
      var num  = this.getVideoSize(direction);
      return num.toString() + "px";
    }
  }

};

function spreadImageData(imgData, ratio, size = {}) {
  const { width, height, data } = imgData;
  var ww = size?.width || width * ratio;
  var hh =  size?.height || height * ratio;
  console.log("ww:",ww ," hh:",hh);
  const result = new ImageData(ww,hh);
  const { width: rw, data: rData } = result;
  // 把源数据一个像素点填充到目标的10个像素点上，达到把图像放大10倍的目的
  for (let sourceRowIndex = 0; sourceRowIndex < height; sourceRowIndex++) {
    for (let sourceColumnIndex = 0; sourceColumnIndex < width; sourceColumnIndex++) {
      const sourcePixelIndex = (sourceRowIndex * width + sourceColumnIndex) * 4;
      const [r, g, b, a] = [
        data[sourcePixelIndex],
        data[sourcePixelIndex + 1],
        data[sourcePixelIndex + 2],
        data[sourcePixelIndex + 3],
      ];
      for (let resultRowIndex = 0; resultRowIndex < ratio; resultRowIndex++) {
        const resultPixelIndex = sourceRowIndex * ratio + resultRowIndex;
        for (let resultColumnIndex = 0; resultColumnIndex < ratio; resultColumnIndex++) {
          const resultDataIndex = (resultPixelIndex * rw + sourceColumnIndex * ratio + resultColumnIndex) * 4;
          rData[resultDataIndex] = r;
          rData[resultDataIndex + 1] = g;
          rData[resultDataIndex + 2] = b;
          rData[resultDataIndex + 3] = a;
        }
      }
    }
  }
  return result;
}



</script>

<style>
.vbg{
  background-image: url(../assets/images/video-bg-1.jpg)
}

@import "../assets/css/canvastools.min.css";

</style>