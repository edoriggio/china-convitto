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
  <scroll-view :showsVerticalScrollIndicator="false"
               :alwaysBounceVertical="false">
    <status-bar :backgroundColor="'transparent'"
                :barStyle="'dark-content'"
                :translucent="true" />
  
    <view class="acks">
      <view class="sub-ack">
        <text class="sub-title">Sviluppatore e Designer</text>
        <text class="content">{{ "\t\tEdoardo Riggio" }}</text>
      </view>

      <view class="sub-ack">
        <text class="sub-title">Supporto Grafico</text>
        <text class="content">{{ "\t\tValerio Stancati" }}</text>
      </view>

      <view class="sub-ack">
        <text class="sub-title">Autori</text>
        <text class="content">{{ "\t\tAlessandro Cocomazzi\n\t\tAndrea Assenza\n\t\tGiovanni Bartolomeo\n\t\tBruno Mastrangelo\n\t\tLavinia Venditto\n\t\tMario Orsini\n\t\tNicholas Kovacich\n\t\tVittoria Mazzei\n\t\tLucrezia Anselmi\n\t\tGiovanni Stoppoloni\n\t\tAndrea Mina\n\t\tLorenzo Falzetti\n\t\tGiulia Espositi" }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<style scoped>
.acks {
  padding-horizontal: 20px;
  padding-top: 30px;
}

.sub-ack {
  margin-bottom: 21px;
}

.sub-title {
  margin-bottom: 10px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: #327D68;
}

.content {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: black;
}
</style>
