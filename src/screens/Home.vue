// Copyright 2021 Edoardo Riggio
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

<template>
<view class="container">
  <status-bar :backgroundColor="'transparent'"
              :barStyle="'light-content'"
              :translucent="true" />

  <view class="background">
    <image class="bg-image"
           :source="require('../../assets/bg.png')" />
  </view>

  <view class="foreground"
        :style="{height: height}">

    <view class="logo-title-view">
      <image class="logo-title"
             :source="require('../../assets/icon-with-title.png')"
             :style="{ width: imageWidth }" />
    </view>

    <view class="menu">
      <tray />
      <menu />
    </view>
    
  </view>
  
  <image class="delimiter"
         :source="require('../../assets/delimiter.png')" />
</view>
</template>

<script>
import { Dimensions, Platform } from 'react-native'

import Tray from '../components/home/Tray.vue'
import Menu from '../components/home/Menu.vue'

const WINDOW_HEIGHT = Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height
const IMAGE_WIDTH = WINDOW_HEIGHT < 700 ? 150 : 200

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
  data() {
    return {
      height: WINDOW_HEIGHT,
      imageWidth: IMAGE_WIDTH,
      weatherCity: String,
      setWeather: Function
    }
  },
  mounted() {
    this.$root.$on('navigate', (route) => {
      this.navigation.navigate(route)
    })
  }
}
</script>

<style scoped>
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
  flex-direction: column;

  width: 100%;

  align-items: center;
  justify-content: space-between;
}

.menu {
  width: 100%;

  align-items: center;
}

.logo-title-view {
  flex: 1;

  margin-top: 24px;

  align-items: center;
  justify-content: center;
}

.logo-title {
  resize-mode: contain;
}

.delimiter {
  position: absolute;

  bottom: 150px;
  left: 130px;
}
</style>