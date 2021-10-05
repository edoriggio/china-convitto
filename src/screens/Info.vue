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
  <view class="view">
    <status-bar :backgroundColor="'transparent'"
                :barStyle="'dark-content'"
                :translucent="true" />

    <scroll-view class="sections"
                 :showsVerticalScrollIndicator="false"
                 :alwaysBounceVertical="false">
      <section v-for="section in settings"
               :key="section.name"
               :name="section.name"
               :icon="section.icon"
               :link="section.link"
               :page="navigation.state.routeName" />
    </scroll-view>

    <view class="info">
      <text class="version">Version {{ version }}</text>
      <touchable-opacity :onPress="openLink">
        <text class="content">GitHub Repository</text>
      </touchable-opacity>
    </view>
  </view>
</template>

<script>
import { Linking } from 'react-native'
import Package from '../../app.json'
import Info from '../../data/info.json'

import Section from '../components/tips/Section.vue'

export default {
  components: {
    Section
  },
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      settings: Object,
      version: Package.expo.version,
    }
  },
  mounted() {
    this.settings = Info

    this.$root.$on("navigate-info", (link) => {
      this.navigation.navigate(link)
    })
  },
  methods: {
    openLink() {
      Linking.openURL('https://github.com/edoriggio/china-convitto')
    }
  }
}
</script>

<style scoped>
.view {
  flex: 1;
}

.sections {
  flex: 1;

  margin-top: 20px;

  padding-horizontal: 10px;
}

.info {
  align-items: center;

  margin-bottom: 20px;
}

.content {
  margin-top: 10px;

  text-decoration-line: underline;
}

.version {
  font-weight: bold;
}
</style>
