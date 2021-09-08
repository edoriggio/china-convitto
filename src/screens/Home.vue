<template>
<view class="container">
  <view class="background">
    <image class="bg-image"
            :source="require('../../assets/bg.png')" />
  </view>

  <image class="logo-title"
          :source="require('../../assets/icon-with-title.png')" />

  <tray />
  <menu />
</view>
</template>

<script>
import Tray from '../components/home/Tray.vue'
import Menu from '../components/home/Menu.vue'

export default {
  components: {
    Tray,
    Menu
  },
  props: {
    navigation: {
      type: Object
    }
  },
  mounted() {
    this.$root.$on('navigate', (route) => {
      this.navigation.navigate(route)
    })
  }
}
</script>

<style>
.container {
  flex: 1;
  align-items: center;
  justify-content: space-between;

  background-color: white;
}

.background {
  position: absolute;
  
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.bg-image {
  width: 100%;
}

.foreground {
  align-items: center;
}

.logo-title {
  margin-top: 90px;
}
</style>