<template>

  <div class="middle-sidebar-left">
    <div class="middle-wrap">
      <div class="card w-100 border-0 bg-white shadow-xs p-0 mb-4">

        <div class="card-body p-lg-5 p-4 w-100 border-0">
          <div class="row">

            <div class="col-lg-12">
              <h4 class="mb-4 font-lg fw-700 mont-font mb-5">Settings</h4>
              <div class="nav-caption fw-600 font-xssss text-grey-500 mb-2">Genaral</div>
              <ul class="list-inline mb-4">
                <li class="list-inline-item d-block border-bottom mr-0"><a href="account-information.html" class="pt-2 pb-2 d-flex"><i class="btn-round-md bg-primary-gradiant text-white feather-home font-md mr-3"></i> <h4 class="fw-600 font-xssss mb-0 mt-3">Acount Information</h4><i class="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i></a></li>
                <li class="list-inline-item d-block border-bottom mr-0"><a href="contact-information.html" class="pt-2 pb-2 d-flex"><i class="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md mr-3"></i> <h4 class="fw-600 font-xssss mb-0 mt-3">Saved Address</h4><i class="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i></a></li>
                <li class="list-inline-item d-block mr-0"><a href="social.html" class="pt-2 pb-2 d-flex"><i class="btn-round-md bg-red-gradiant text-white feather-twitter font-md mr-3"></i> <h4 class="fw-600 font-xssss mb-0 mt-3">Social Acount</h4><i class="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i></a></li>
              </ul>

              <div class="nav-caption fw-600 font-xssss text-grey-500 mb-2">Acount</div>
              <ul class="list-inline mb-4">
                <li class="list-inline-item d-block border-bottom mr-0"><a href="payment.html" class="pt-2 pb-2 d-flex"><i class="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md mr-3"></i> <h4 class="fw-600 font-xssss mb-0 mt-3">My Cards</h4><i class="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i></a></li>
                <li class="list-inline-item d-block  mr-0"><a href="password.html" class="pt-2 pb-2 d-flex"><i class="btn-round-md bg-blue-gradiant text-white feather-inbox font-md mr-3"></i> <h4 class="fw-600 font-xssss mb-0 mt-3">Password</h4><i class="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i></a></li>

              </ul>

              <div class="nav-caption fw-600 font-xssss text-grey-500 mb-2">Other</div>
              <ul class="list-inline">
                <li class="list-inline-item d-block border-bottom mr-0"><a href="#" class="pt-2 pb-2 d-flex"><i class="btn-round-md bg-gold-gradiant text-white feather-bell font-md mr-3"></i> <h4 class="fw-600 font-xssss mb-0 mt-3">Notification</h4><i class="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i></a></li>
                <li class="list-inline-item d-block border-bottom mr-0"><a href="#" class="pt-2 pb-2 d-flex"><i class="btn-round-md bg-primary-gradiant text-white feather-help-circle font-md mr-3"></i> <h4 class="fw-600 font-xssss mb-0 mt-3">Help</h4><i class="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i></a></li>
                <li class="list-inline-item d-block mr-0"><a href="#" class="pt-2 pb-2 d-flex"><i class="btn-round-md bg-red-gradiant text-white feather-lock font-md mr-3"></i> <h4 class="fw-600 font-xssss mb-0 mt-3">Logout</h4><i class="ti-angle-right font-xsss text-grey-500 ml-auto mt-3"></i></a></li>

              </ul>
            </div>
          </div>


        </div>
      </div>

    </div>
  </div>



</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import { getCurrentInstance } from 'vue';
// const { proxy } =getCurrentInstance();

import {useStore} from "vuex"

export default {
  name: "Setting",
  mounted() {
    // alert(this.$menuId);
    // useStore().state.menuId = 10;
    useStore().commit("SET_MENU_ID",10)
  },
};
</script>