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
  <view>
    <status-bar :backgroundColor="'transparent'"
                :barStyle="'light-content'"
                :translucent="true" />

    <image class="background"
           :source="getImage(params.code)"
           :transform="([{ translateY: -top }])"
           :style="{ width: width }" />
    
    <view class="card"
          :style="{
                    height: scroll_height,
                    marginTop: 180
                  }">

      <view class="header">
        <view>
          <text class="title">{{ title }}</text>
          <text class="chinese">{{ params.chinese }}</text>
        </view>

        <touchable-opacity class="nav"
                           :onPress="showLocation">
          <icon class="compass" name="compass-3-fill" color="white" />
        </touchable-opacity>
      </view>

      <segmented-control class="segmented" 
                         v-if="params.titles.length > 0"
                         :values="params.titles"
                         :selectedIndex="selectedIndex"
                         :tintColor="'#327D68'"
                         :fontStyle="{ color: 'black' }"
                         :activeFontStyle="{ color: 'white' }"
                         :onChange="(event) => {
                            selectedIndex = event.nativeEvent.selectedSegmentIndex
                         }" />

      <scroll-view :style="{ marginTop: margin_top, marginBottom: 0 }"
                   :showsVerticalScrollIndicator="false">
        <text class="article">{{ text }}</text>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import getImage from '../assets.js'
import { Dimensions, Platform } from 'react-native'
import { showLocation } from 'react-native-map-link'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import Icon from 'react-native-remix-icon'
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const NAVBAR_HEIGHT = Platform.OS === 'ios' ? 54 : 64
const STATUS_BAR_HEIGHT = getStatusBarHeight(false) + NAVBAR_HEIGHT
const SCROLL_HEIGHT = Dimensions.get('window').height - STATUS_BAR_HEIGHT - 180
const NAVIGATION_BAR = Platform.OS === 'ios' ? 0 : 20

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Icon,
    SegmentedControl
  },
  data() {
    return {
      params: this.navigation.state.params,
      title: String,
      width: Dimensions.get('window').width,
      top: STATUS_BAR_HEIGHT,
      navigation_bar: NAVIGATION_BAR,
      scroll_height: SCROLL_HEIGHT,
      selectedIndex: 0,
      text: String,
      margin_top: 30
    }
  },
  mounted() {
    this.text = this.params.article[0]

    if (this.params.name === 'Museo di Scienza e Tecnologia') {
      this.title = 'Museo di Scienza \ne Tecnologia'
    } else if (this.params.name === 'Storia della Città di Shanghai') {
      this.title = 'Storia della Città \ndi Shanghai'
    } else {
      this.title = this.params.name
    }

    if (this.params.titles.length > 0) {
      this.margin_top = 20
    }
  },
  watch: {
    'selectedIndex': function(val, _){
      this.text = this.params.article[val]
    }
  },
  methods: {
    getImage(code) {
      return getImage(code)
    },
    showLocation() {
      showLocation({
        latitude: this.params.coordinates.latitude,
        longitude: this.params.coordinates.longitude,
        googleForceLatLon: true
      })
    }
  }
}
</script>

<style scoped>
.background {
  position: absolute;
  height: 300px;

  resize-mode: cover;
}

.card {
  padding-top: 25px;
  padding-horizontal: 25px;
  border-radius: 20px;

  background-color: white;
}

.header {
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
}

.chinese {
  margin-top: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  color: #AAAAAA
}

.nav {
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 44px;

  border-radius: 10px;

  background-color: #327D68;
}

.segmented {
  margin-top: 25px;
}

.article {
  text-align: justify;
}
</style>
