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
  <touchable-opacity class="shadow section"
                     :style="{ shadowOffset: {width: 0, height: 2} }"
                     :onPress="() => navigate(link)">
    <view class="left">
      <icon :name="icon" color="#327D68" />
      <text class="text">{{ name }}</text>
    </view>

    <icon name="arrow-right-s-line" color="#327D68" />
  </touchable-opacity>
</template>

<script>
import Icon from 'react-native-remix-icon'

export default {
  props: {
    name: String,
    icon: String,
    link: String
  },
  components: {
    Icon
  },
  methods: {
    navigate(link) {
      this.$root.$emit('navigate-tips', link)
    }
  }
}
</script>

<style scoped>
.shadow {
  shadow-color: rgba(40, 40, 40, 0.23);
  shadow-opacity: 1;
  shadow-radius: 2.26px;

  elevation: 4;
}

.section {
  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;

  padding-left: 19px;
  padding-right: 14px;
  padding-vertical: 20px;

  border-radius: 12px;

  background-color: white;
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
