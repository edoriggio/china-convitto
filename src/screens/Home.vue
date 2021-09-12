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
    <view class="background">
      <image class="bg-image"
            :source="require('../../assets/bg.png')" />
    </view>

    <image class="logo-title"
          :source="require('../../assets/icon-with-title.png')" />

    <tray />
    <menu />

    <image class="delimiter"
          :source="require('../../assets/delimiter.png')">
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

.delimiter {
  position: absolute;

  bottom: 150px;
}
</style>