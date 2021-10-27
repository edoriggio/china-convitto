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
  <view class="super-section">
    <touchable-opacity class="shadow section"
                      :style="{ shadowOffset: {width: 0, height: 2} }"
                      :onPress="() => navigate(link, page)">
      <view class="left">
        <icon :name="icon" color="#327D68" />
        <text class="text">{{ name }}</text>
      </view>

      <icon name="arrow-right-s-line" color="#327D68" />
    </touchable-opacity>

    <view v-if="name !== 'VPN' && name !== 'Riconoscimenti'"
          class="divider" />
  </view>
</template>

<script>
import Icon from 'react-native-remix-icon'

export default {
  props: {
    name: String,
    icon: String,
    link: String,
    page: String
  },
  components: {
    Icon
  },
  methods: {
    navigate(link, page) {
      if (page === 'Tips') {
        this.$root.$emit('navigate-tips', link)
      } else if (page === 'Info') {
        this.$root.$emit('navigate-info', link)
      }
    }
  }
}
</script>

<style scoped>
.super-section {
  justify-content: center;
  align-items: center;
}

.section {
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  
  width: 95%;

  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
  
  padding-vertical: 10px;

  border-radius: 12px;

  background-color: white;
}

.divider {
  height: 2px;
  width: 70%;
  
  background-color: #F6F6F6;
}

.left {
  flex-direction: row;

  align-items: center;
}

.text {
  margin-left: 19px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
</style>
