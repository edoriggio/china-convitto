// Copyright 2021 Edoardo Riggio
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

<template>
  <view class="wrapper">
    <status-bar :backgroundColor="'transparent'"
                :barStyle="'dark-content'"
                :translucent="true" />

    <view class="app">
      <image class="image"
             :source="require('../../../assets/apps/proton_vpn.png')" />

      <text class="title">Air Matters: Global Air Quality</text>
      <text class="text">By Proton Technologies AG</text>
    </view>

    <warning title="Attenzione!"
             content="Avendo la Cina bloccato alcuni siti occidentali, come ad esempio Instagram, Whatsapp, Snapchat e Google, vi conviene scaricare questa VPN in modo tale da navigare come se foste in un altro paese"
             color="#F1A83A" />

    <touchable-opacity class="plate"
                       :onPress="() => openLink(platform)">
      <text class="button">Scarica l'app</text>
    </touchable-opacity>
  </view>
</template>

<script>
import { Linking, Platform } from 'react-native'

import Warning from '../../components/tips/Warning.vue'

export default {
  components: {
    Warning
  },
  data() {
    return {
      platform: Platform.OS
    }
  },
  methods: {
    openLink(link) {
      if (link === 'ios') {
        Linking.openURL('https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085')
      } else {
        Linking.openURL('https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en&gl=US')
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  flex: 1;

  justify-content: space-between;
}

.app {
  align-items: center;
  justify-content: center;

  margin-top: 5px;
}

.image {
  height: 150px;
  width: 150px;
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: #327D68;
}

.text {
  margin-top: 6px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: black;
}

.plate {
  border-radius: 10px;

  padding: 15px;
  margin-bottom: 20px;
  margin-horizontal: 20px;

  background-color: #327D68;
}

.button {
  text-align: center;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;

  color: white;
}
</style>
