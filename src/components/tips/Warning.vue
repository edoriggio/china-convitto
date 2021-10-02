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
  <view :style="{backgroundColor: color}"
        class="alert">
    <view class="icon">
      <icon class="alert-icon" name="alert-fill" color="white" />
    </view>
    
    <view class="textual">
      <text class="text">{{ title }}</text>
      <text class="content">{{ content }}</text>
    </view>
  </view>
</template>

<script>
import Icon from 'react-native-remix-icon'

export default {
  components: { 
    Icon
  },
  props: {
    title: String,
    content: String,
    color: String
  }
}
</script>

<style scoped>
.alert {
  flex-direction: row;

  justify-content: center;

  margin-horizontal: 20px;
  padding: 20px;
  padding-bottom: 25px;

  border-radius: 10px;
}

.icon {
  justify-content: center;

  margin-right: 20px;
}

.text {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: white;
}

.textual {
  flex: 1;

  margin-right: 5px;
}

.content {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  text-align: justify;

  color: rgba(255, 255, 255, 0.7);
}
</style>
