<template>
      <div class="middle-sidebar-bottom">
        <div class=" bg-white dark-bg-transparent mr-3 pr-0" style="width: 100%">
      <div class="row">



        <div class="col-xl-10 ">
          <div class="middle-wrap mb-5 card border-0 mb-0 rounded-lg overflow-hidden live-stream bg-image-center bg-image-cover vbg" id="remote_video_box" :style="'width:'+(rtcRemoteVideWidth)+'px;height:' +(rtcRemoteVideHeight)+'px;'"  >
            <div class="card-body justify-content-start p-2 position-absolute top-0 w-100 bg-gradiant-top" v-show="switchRemoteUserInfo">
<!--              <div >-->
                <figure class="avatar mb-0 mt-0 overflow-hidden">
                  <img src="../assets/images/user-1.png" alt="image" class="z-index-1 shadow-sm rounded-circle w40">
                </figure>
                <h5 class="text-white mt-1 fw-700 ml-2 z-index-1 ">{{remoteUserInfo.uid}}<span class="d-block font-xsssss mt-1 fw-400 text-grey-300 z-index-1 ">{{remoteUserInfo.uname}}</span></h5>
<!--              </div>-->
<!--              <span class="live-tag position-absolute right-15 mt-2 bg-danger p-2 z-index-1  rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>-->
            </div>


            <div class="position-absolute right-15 mt-2 p-2 z-index-1  rounded-lg  fw-700 ls-3 w150 h200" id="localVideoBox" >
              <img v-show="switchLocalVideoBox" src="../assets/images/video_self_bg2.png" alt="image" class="w150 h200 rounded-3 position-relative z-index-1 shadow-xss">
            </div>

            <div class="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
              <a v-show="switchRtcJoinIcon" href="#" @click.native="rtcJoinChannel();"    class="btn-round-xl bg-blur m-3 mr-0 z-index-1"><i class="feather-user-plus text-white font-md"></i></a>
              <a v-show="switchLeaveIcon"   href="#" @click.native="rtcUserLeave();"      class="btn-round-xl bg-danger z-index-1"><i class="feather-phone-off text-white font-md"></i></a>
<!--              <a v-show="switchCameraIcon"  href="#"  @click.native="cameraDoing"        class="btn-round-xl bg-blur m-3 z-index-1"><i class="ti-video-camera text-white font-md"></i></a>-->
              <a  href="#"  @click.native="cameraDoing"        class="btn-round-xl bg-blur m-3 z-index-1"><i class="ti-video-camera text-white font-md"></i></a>
              <a v-show="switchMonitorIcon" href="#"  @click.native="screenshotsDoing();" class="btn-round-xl bg-blur m-3 ml-0 z-index-1"><i class="feather-monitor text-white font-md"></i></a>
              <span v-show="switchLiveTime" class="p-2 bg-blur z-index-1 text-white fw-700 font-xssss rounded-lg right-15 position-absolute mb-4 bottom-0">44:00</span>
              <span v-show="switchLiveIcon" class="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
            </div>








          </div>


          <!--???????????? start-->
          <div class="middle-wrap" id="screenshots_container" style="display:none; " >
<!--            <div class="middle-wrap" id="screenshots_container" style="display:none; " >-->
            <div class="card border-0 mb-4 rounded-lg overflow-hidden live-stream bg-image-center bg-image-cover" :style="'width:'+(rtcRemoteVideWidth)+'px;height:' +(rtcRemoteVideHeight)+'px;'">
                <canvas id="screenshots_canvas"></canvas>
                <div class="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
<!--                  <div class="">-->
                  <a href="#" @click="screenshotsCloseCanvasTools"           class="btn-round-xl d-md-inline-block d-none bg-blur m-3 mr-0 z-index-1"><i class="feather-x text-white font-md"></i></a>
                  <a href="#" @click.native="screenshotsSendPicToServer();"  class="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"><i class="feather-send text-white font-md"></i></a>
                </div>
            </div>
            <div id="myCanvasTools"></div>
          </div>

          <!--???????????? end-->



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
import AgoraRTM from "agora-rtm-sdk";//?????? ???????????? SDK
import AgoraRTC from "agora-rtc-sdk-ng";//?????? ????????? SDK
import CanvasTools from "../utils/canvastools.min"//?????? ?????? ??????


var rtc = {
  client: null,
    localAudioTrack: null,
    localVideoTrack: null,
    remoteVideoTrack:null,//???????????????
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
          "uname":"",
      },
      "canvasTools":null,//?????? - ?????????
      "screenshotsExist":0,//?????????????????????????????????????????????canvas?????????????????????
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
      "rtcRemoteVideWidth":0,
      "rtcRemoteVideHeight":0,
      "switchRemoteUserInfo" : false,
      "switchLiveTime" : false,
      "switchLiveIcon" : false,
      "switchRtcJoinIcon" : false,
      "switchLeaveIcon" : false,
      "switchMonitorIcon" : false,
      "switchCameraIcon" : false,
      "switchLocalVideoBox" :false,
      "switchMyCanvasTools" : false,
      "switchScreenshotsContainer" :false,
      // "switch" : false,
      "screenshots_canvas_width": 0,
      "screenshots_canvas_height" : 0,
    };
  },
  name: "Video",
  mounted() {
    //??????????????????ID
    useStore().commit("SET_MENU_ID",4),
    this.initPageElementSwitch();
    //??????????????????????????????
    this.rtcRemoteVideWidth = this.getVideoSize("width");
    this.rtcRemoteVideHeight = this.getVideoSize("height");
    //???????????????RTC-Token??????????????????RTC
    var data = {"username": this.agora.rtc_user.uid.toString(), "channel": this.agora.channel};
    var requestPromise = this.$Server.request("/twin/agora/rtc/get/token", data );
    requestPromise.then((res)=>{
      if (res.code != 200){
        return alert("reqeust err (/twin/agora/rtc/get/token):"+res.msg);
      }
      this.rtcInit(res.data);
    });
    //???????????????RTM-Token??????????????????RTM
    var data = {"username":this.agora.rtm_user.uid};
    var requestPromise = this.$Server.request("/twin/agora/rtm/get/token",data);
    requestPromise.then((res)=>{
      if (res.code != 200){
        return alert("reqeust err (/twin/agora/rtm/get/token):"+res.msg);
      }
      this.rtmInit(res.data);
    });
    //????????? ??????????????????
    this.screenshotsInit();
  },
  methods:{
    //??????????????????????????? ?????????
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
      this.switchMyCanvasTools = false;
      this.switchScreenshotsContainer = false;

      // document.getElementById("localVideoBox").innerHTML = "";
    },
    //?????????????????????
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
      //?????? ??????????????????
      rtc.client.on("user-published", this.rtcEventUserPublished);
    },
    rtcEventUserPublished : async function(user, mediaType){
      console.log("Listening event <user-published> , user:",user , " mediaType:",mediaType , " this.rtc.client:",rtc.client);
      await rtc.client.subscribe(user, mediaType);
      // console.log("aaa:",aaa)
      if (mediaType === "video") {
        rtc.remoteVideoTrack = user.videoTrack;//???????????????
        // console.log("remoteVideoTrack: w:",rtc.remoteVideoTrack.width , " h :",rtc.remoteVideoTrack.height)
        console.log("rtc.remoteVideoTrack :",rtc.remoteVideoTrack  )
        var remotePlayerContainer = document.getElementById("remote_video_box");
        this.remoteUserInfo.uid = user.uid;
        this.remoteUserInfo.uname = user._cname;
        this.remoteUserJoinSwitch();

        rtc.remoteVideoTrack.play(remotePlayerContainer);
      }

      if (mediaType === "audio") {
        user.audioTrack.play();
      }
      //?????????????????????????????????
      rtc.client.on("user-unpublished", this.rtcEventUserUnpublished);
    },
    //?????????????????????????????????
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
      // document.getElementById("localVideoBox").innerHTML = "";
      this.screenshotsCloseCanvasTools();
      await rtc.client.leave();

    },
    //???????????????????????????
    rtcJoinChannel: async function () {
      console.log("rtc join :", this.agora.appId, this.agora.channel, this.agora.rtc_user.token, this.agora.rtc_user.uid);
      await rtc.client.join(this.agora.appId, this.agora.channel, this.agora.rtc_user.token, this.agora.rtc_user.uid);

      this.switchLocalVideoBox = false;
      this.switchRtcJoinIcon = false;
      this.switchLeaveIcon = true;

      var localPlayerContainerDiv = document.getElementById("localVideoBox");
      rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack(); //????????????????????? ???????????? -> ????????????????????????????????????
      rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();//????????????????????? ???????????? -> ????????????????????????????????????
      // alert(this.rtc.client);
      await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);//?????????????????????????????? RTC??????
      rtc.localVideoTrack.play(localPlayerContainerDiv);

      console.log("local AudioTrack json success, publish success!");
    },
    //??????????????????????????????
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

      // document.getElementById("localVideoBox").innerHTML = "";
      // document.getElementById("remote_video").innerHTML="";
      // document.getElementById("bnt_send_screenshots").style.display = "none";
      // this.$ref.remote_video.innerHTML = "";
      // this.$ref.remote_video.style.display = "none";
      this.screenshotsCloseCanvasTools();
    },
    //============================screenshots start====================================================================================
    //??????????????????????????????
    screenshotsInit :function (){
      var screenshots_canvas_obj =  document.getElementById("screenshots_canvas");
      screenshots_canvas_obj.width = this.getVideoSize("width");
      screenshots_canvas_obj.height = this.getVideoSize("height");
    },
    //??????:???????????? - ??????
    screenshotsDoing : function (){
      if (this.screenshotsExist == 1){
        this.screenshotsClose();
      }
      this.screenshotsExist = 1;//???????????????????????????????????????
      if (!rtc.remoteVideoTrack){
        return alert("???????????????????????????????????????????????????...");
      }
      this.switchScreenshotsContainer = true;
      //?????????????????????
      var screenshots_container = document.getElementById("screenshots_container");
      screenshots_container.style.display = "";
      //??????????????????????????????????????????
      var videoFrameImgData = rtc.remoteVideoTrack.getCurrentFrameData();
      console.log("width:",videoFrameImgData.width," height:",videoFrameImgData.height, " videoFrameImgData:",videoFrameImgData)

      var  canvas = document.getElementById("screenshots_canvas");
      var ctx = canvas.getContext('2d');
      // canvas.width = videoFrameImgData.width;
      // canvas.height = videoFrameImgData.height;
      ctx.putImageData(videoFrameImgData, 0, 0);
      //?????????????????????
      this.screenshotsOpenCanvasTools();
    },
    //?????? ?????????????????????
    screenshotsOpenCanvasTools : function(){
      if(!this.screenshotsExist){
        return alert("????????????????????????????????????????????????");
      }
      var canvas = document.getElementById("screenshots_canvas");
      // canvas.style.width = this.getVideoSize()
      // var canvas =  this.$refs.screenshots_canvas
      this.canvasTools = new CanvasTools(canvas, {
        container : document.getElementById('myCanvasTools')
      });
    },
    //??????????????????
    screenshotsCloseCanvasTools : function(){
      document.getElementById("screenshots_container").style.display = "none";
      // this.switchScreenshotsContainer = false;
      if(!this.screenshotsExist){
        console.log("????????????????????????????????????????????????");
        return 0;
      }

      document.getElementById('myCanvasTools').innerHTML = "";
      this.canvasTools = null;
      this.screenshotsExist = 0;
    },
    //??????????????????server???
    screenshotsSendPicToServer :function (){
      if (!this.screenshotsExist){
        return alert("????????????????????????...");
      }
      //???canvas??????????????????
      var  canvas = document.getElementById("screenshots_canvas");
      var myImg = new Image();
      myImg.src = canvas.toDataURL("image/jpeg",0.7);
      //??????????????????server???
      var data = {"stream":myImg.src}
      var requestPromise = this.$Server.request("/file/upload/img/one/stream/base64",data);
      requestPromise.then((res)=>{
        this.screenshotsSendPicToServerCallback(res.data);
      });
    },
    //?????????????????????????????????????????????????????????????????????RTM???????????????
    screenshotsSendPicToServerCallback: function(data){
      var r= Math.random();
      if (process.env.NODE_ENV == "development"){
        var url = data.full_local_ip_url;
      }else{
        var url = data.full_local_domain_url;
      }
      url += "?r="+r;//???????????????????????????

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
    cameraDoing : async function(){
      return 1;
      var data = {"uid": this.agora.rtc_user.uid.toString(), "cname": this.agora.channel};
      var requestPromise = this.$Server.request("/twin/agora/rtc/get/cloud/record/acquire", data );
      requestPromise.then((res)=>{
        if (res.code != 200){
          return alert("reqeust err (/twin/agora/rtc/get/cloud/record/acquire):"+res.msg);
        }
        this.cameraStart(res.data)
      });
    },
    cameraStart : async function(AgoraRecord){
      console.log("cameraStart AgoraRecord:",AgoraRecord)
      var data = {"uid": this.agora.rtc_user.uid.toString(), "cname": this.agora.channel ,"resource_id":AgoraRecord.resourceId};
      var requestPromise = this.$Server.request("/twin/agora/rtc/cloud/record/start", data );
      requestPromise.then((res)=>{
        console.log("cameraStart res:",res)
      //   if (res.code != 200){
      //     return alert("reqeust err (/twin/agora/rtc/get/cloud/record/acquire):"+res.msg);
      //   }
      //   var requestId = res.data;
      //   alert(requestId);
      });
    },
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


</script>

<style>
.vbg{
  background-image: url(../assets/images/video_self_bg1.jpg)
}

@import "../assets/css/canvastools.min.css";

</style>