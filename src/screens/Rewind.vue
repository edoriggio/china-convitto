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
                :barStyle="'dark-content'"
                :translucent="true" />

    <segmented-control class="segmented"
                       :values="titles"
                       :selectedIndex="selectedIndex"
                       :tintColor="'#327D68'"
                       :fontStyle="{ color: 'black' }"
                       :activeFontStyle="{ color: 'white' }"
                       :onChange="(event) => {
                         selectedIndex = event.nativeEvent.selectedSegmentIndex
                       }" />
              
    <web-view class="web-view"
              :source="{uri: link}"
              :androidHardwareAccelerationDisabled="true" />
  </view>
</template>

<script>
import 'react-native-get-random-values';

import { WebView } from 'react-native-webview'
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export default {
  components: {
    WebView,
    SegmentedControl
  },
  data() {
    return {
      titles: ['2015', '2016'],
      link: 'https://chinaconvitto.wixsite.com/2015rewind',
      selectedIndex: 0
    }
  },
  watch: {
    'selectedIndex': function(val, _){
      this.link = val === 1 ? 'https://chinaconvitto.wixsite.com/2016rewind' 
                  : 'https://chinaconvitto.wixsite.com/2015rewind'
    }
  },
}
</script>

<style scoped>
.container {
  flex: 1;
}

.segmented {
  margin-top: 20px;
  margin-bottom: 30px;

  margin-horizontal: 20px;
}
</style>
