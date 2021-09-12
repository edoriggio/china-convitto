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
    <image class="logo-title"
            :source="require('../../assets/icon-with-title.png')" />

    <tray />
    <menu />

  </view>
  
  <image class="delimiter"
         :source="require('../../assets/delimiter.png')" />
</view>
</template>

<script>
import { Dimensions, Platform } from 'react-native'

import Tray from '../components/home/Tray.vue'
import Menu from '../components/home/Menu.vue'

const WINDOW_HEIGHT = Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height + 20

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
  width: 100%;

  align-items: center;
  justify-content: center;
}

.logo-title {
  margin-top: 90px;
}

.delimiter {
  position: absolute;

  bottom: 150px;
}
</style>