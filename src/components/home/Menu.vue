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
<view class="background">
  <view class="row">
    <touchable-opacity :on-press="() => navigate('Monumenti')">
      <view class="element">
        <image :source="require('../../../assets/menu/monuments.png')" />
        <text class="menu-text"> Monumenti </text>
      </view>
    </touchable-opacity>

    <touchable-opacity :on-press="() => navigate('Mappa')">
      <view class="element">
        <image :source="require('../../../assets/menu/map.png')" />
        <text class="menu-text"> Mappa </text>
      </view>
    </touchable-opacity>
  </view>

  <view class="row">
    <touchable-opacity :on-press="() => navigate('Tips')">
      <view class="element">
        <image :source="require('../../../assets/menu/tips.png')" />
        <text class="menu-text"> Tips </text>
      </view>
    </touchable-opacity>

    <touchable-opacity :on-press="() => navigate('Rewind')">
      <view class="element">
        <image :source="require('../../../assets/menu/rewind.png')" />
        <text class="menu-text"> Rewind </text>
      </view>
    </touchable-opacity>
  </view>
</view>
</template>

<script>
export default {
  methods: {
    navigate(route) {
      this.$root.$emit('navigate', route)
    }
  }
}
</script>

<style scoped>
.background {
  flex-direction: column;

  justify-content: space-around;

  width: 100%;
  height: 430px;

  margin-top: 20px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  background-color: white;  
}

.row {
  flex-direction: row;
  justify-content: space-around;
}

.element {
  align-items: center;
  justify-content: center;
}

.menu-text {
  margin-top: 15px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: black;
}
</style>
