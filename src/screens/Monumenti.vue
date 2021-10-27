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
                :barStyle="'dark-content'"
                :translucent="true" />
        
    <tab-bar />

    <scroll-view class="monuments"
                 :style="{ marginBottom: bottom }"
                 :showsVerticalScrollIndicator="false"
                 :alwaysBounceVertical="false"
                 :content-container-style="{
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-around',
                                            paddingHorizontal: 14,
                                            paddingVertical: 14
                                           }">
      <card v-for="monument in keys"
            :key="monument"
            :name="monument"
            :article="monuments[monument].article"
            :chinese="monuments[monument].chinese"
            :code="monuments[monument].code"
            :coordinates="monuments[monument].coordinates"
            :titles="monuments[monument].titles" />
    </scroll-view>
  </view>
</template>

<script>
import { Dimensions } from 'react-native';
import MonumentiDB from '../../data/monumenti.json'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import TabBar from '../components/monumenti/TabBar.vue'
import Card from '../components/monumenti/Card.vue'

const SCREEN_HEIGHT = Dimensions.get('screen').height
const WINDOW_HEIGHT = Dimensions.get('window').height
const BOTTOM_BAR_HEIGHT = Math.floor(SCREEN_HEIGHT - WINDOW_HEIGHT + getStatusBarHeight(false) + 20)

export default {
  components: {
    TabBar,
    Card
  },
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      monuments: Object,
      keys: [],
      bottom: BOTTOM_BAR_HEIGHT,
      tab: "Primo"
    }
  },
  mounted() {
    this.monuments = MonumentiDB

    for (let monument in this.monuments) {
      if (this.monuments[monument.toString()].category === "Primo") {
        this.keys.push(monument.toString())
      }
    }

    this.$root.$on('navigate-monumento', (obj) => {
      this.navigation.navigate(obj.route, obj)
    })

    this.$root.$on('activeTabChanged', (title) => {
      this.keys = []

      for (let monument in this.monuments) {
        if (this.monuments[monument.toString()].category === title) {
          this.keys.push(monument.toString())
        }
      }
    })
  }
}
</script>

<style scoped>
.monuments {
  margin-top: 20px;
}
</style>
