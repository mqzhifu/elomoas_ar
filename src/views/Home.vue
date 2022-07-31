<template>

</template>

<script>

import {useStore} from "vuex"

export default {
  name: "Home",
  mounted() {
    useStore().commit("SET_MENU_ID",1)
  },
};
</script>