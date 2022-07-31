<template>
  <!-- navigation -->
  <nav class="navigation scroll-bar">
    <div class="container pl-0 pr-0">
      <div class="nav-content">
        <div class="nav-top">
          <a href="index.html"><i class="feather-slack text-success display1-size mr-3 ml-3"></i><span class="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">SeedAR. </span> </a>
          <a href="#" class="close-nav d-inline-block d-lg-none"><i class="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i></a>
        </div>
        <div class="nav-caption fw-600 font-xssss text-grey-500"><span>日常 </span>功能</div>
        <ul class="mb-3">
          <li class="logo d-none d-xl-block d-lg-block"></li>
          <li><a href="/screen" :class="menuId==1?'active':''" class="nav-content-bttn open-font" data-tab="chats"><i class="feather-tv mr-3"></i><span>录屏</span></a></li>
          <li><a href="/file" :class="menuId==2?'active':''" class="nav-content-bttn open-font" data-tab="friends"><i class="feather-shopping-bag mr-3"></i><span>文件</span></a></li>
          <li><a href="/blank" :class="menuId==3?'active':''" class="nav-content-bttn open-font" data-tab="favorites"><i class="feather-globe mr-3"></i><span>空页</span></a></li>
          <li><a href="/video" :class="menuId==4?'active':''" class="nav-content-bttn open-font" data-tab="favorites"><i class="feather-play-circle mr-3"></i><span>视频</span></a></li>
<!--          <li class="flex-lg-brackets"><a href="default-user-profile.html" data-tab="archived" class="nav-content-bttn open-font"><i class="feather-video mr-3"></i><span>Saved Course</span></a></li>-->
        </ul>

<!--        <div class="nav-caption fw-600 font-xssss text-grey-500"><span>Following </span>Author</div>-->
<!--        <ul class="mb-3">-->
<!--          <li><a href="default-author-profile.html" class="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto" data-tab="chats"><img src="./../../assets/images/profile-4.png" alt="user" class="w40 mr-2"><span>Surfiya Zakir </span> <span class="circle-icon bg-success mt-3"></span></a></li>-->
<!--          <li><a href="default-author-profile.html" class="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto" data-tab="chats"><img src="./../../assets/images/profile-2.png" alt="user" class="w40 mr-2"><span>Vincent Parks </span> <span class="circle-icon bg-warning mt-3"></span></a></li>-->
<!--          <li><a href="default-author-profile.html" class="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto" data-tab="chats"><img src="./../../assets/images/profile-3.png" alt="user" class="w40 mr-2"><span>Richard Bowers </span> <span class="circle-icon bg-success mt-3"></span></a></li>-->
<!--          <li><a href="default-author-profile.html" class="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto" data-tab="chats"><img src="./../../assets/images/profile-4.png" alt="user" class="w40 mr-2"><span>John Lambert </span> <span class="circle-icon bg-success mt-3"></span></a></li>-->
<!--        </ul>-->
        <div class="nav-caption fw-600 font-xssss text-grey-500"><span></span> 账号信息</div>
        <ul class="mb-3">
          <li class="logo d-none d-xl-block d-lg-block"></li>
          <li><a href="/setting" :class="menuId==10?'active':''" class="nav-content-bttn open-font h-auto pt-2 pb-2"><i class="font-sm feather-settings mr-3 text-grey-500"></i><span>设置</span></a></li>
<!--          <li><a href="default-analytics.html" class="nav-content-bttn open-font h-auto pt-2 pb-2"><i class="font-sm feather-pie-chart mr-3 text-grey-500"></i><span>Analytics</span></a></li>-->
<!--          <li><a href="message.html" class="nav-content-bttn open-font h-auto pt-2 pb-2"><i class="font-sm feather-message-square mr-3 text-grey-500"></i><span>聊天</span><span class="circle-count bg-warning mt-0">23</span></a></li>-->

        </ul>
      </div>
    </div>
  </nav>
  <!-- navigation -->
</template>


<script>

export default {
  data : function (){
    return {currMenuId:0}
  },
  name: "Left",
  mounted() {
    //useStore().commit("Setting",1)
    console.log("left current menuId:" , this.$store.getters.GET_MENU_ID)

    // useStore().watch()

  },
  computed:{
    menuId:function(){
      return this.$store.getters.GET_MENU_ID;
    },
  },
  watch: {
    "menuId":function (){
      console.log("watch menuId change:",this.$store.getters.GET_MENU_ID)
      this.currMenuId = this.$store.getters.GET_MENU_ID
    },
  },

};
</script>
