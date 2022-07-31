<template>

</template>

<script>

import {useStore} from "vuex"

export default {
  name: "Blank",
  mounted() {
    useStore().commit("SET_MENU_ID",3)
  },
};
</script>