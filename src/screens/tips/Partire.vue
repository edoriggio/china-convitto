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
  
    <view class="container">
      <text class="title">In Valigia</text>

      <view class="todos">
        <to-do v-for="item in inValigia"
               :key="item"
               :text="item" />
      </view>

      <text class="title">Nello Zaino</text>

      <view class="todos">
        <to-do v-for="item in nelloZaino"
               :key="item"
               :text="item" />
      </view>
    </view>
  </view>
</template>

<script>
import ToDo from '../../components/tips/ToDo.vue'

export default {
  components: {
    ToDo
  },
  data() {
    return {
      selected: false,
      inValigia: [
        "Scarpe eleganti",
        "Divisa ufficiale del Convitto",
        "Astuccio con delle penne e matite",
        "Qualche quaderno a quadretti"
      ],
      nelloZaino: [
        "Cappello con visiera",
        "Cuffiette",
        "Occhiali da sole",
        "Borraccia",
        "Mascherine"
      ]
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 21px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: #327D68;
}

.container {
  padding-horizontal: 20px;
  margin-top: 11px;
}

.todos {
  margin-top: 10px;
}
</style>
