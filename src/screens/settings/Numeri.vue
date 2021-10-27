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
  <view>
    <status-bar :backgroundColor="'transparent'"
                :barStyle="'dark-content'"
                :translucent="true" />

    <view class="numbers">
      <emergency name="Polizia"
                 number="110" />

      <emergency name="Ambulanza"
                 number="120" />
      
      <emergency :name="'Vigili\ndel Fuoco'"
                 number="119" />
    </view>
  </view>
</template>

<script>
import Emergency from '../../components/settings/Emergency.vue'

export default {
  components: {
    Emergency
  }
}
</script>

<style scoped>
.numbers {
  flex-direction: row;
  flex-wrap: wrap;
  
  align-items: center;
  justify-content: space-around;

  margin-top: 20px;
}
</style>
