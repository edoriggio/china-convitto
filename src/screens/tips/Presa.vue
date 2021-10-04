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
  <view class="container">
    <status-bar :backgroundColor="'transparent'"
                :barStyle="'dark-content'"
                :translucent="true" />

    <image class="image"
           :source="require('../../../assets/tips/power_adapter.jpg')" />

    <touchable-opacity class="plate"
                       :onPress="openLink">
      <text class="button">Acquista l'adattatore</text>
    </touchable-opacity>
  </view>
</template>

<script>
import { Linking } from 'react-native'

export default {
  methods: {
    openLink() {
      Linking.openURL('https://www.amazon.it/Q2-Power-Q21100160-Alimentatore-Viaggio/dp/B0199SMCNQ/ref=sr_1_3?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=adattatore+ue+to+australia&qid=1633388505&qsid=262-1353117-7429530&sr=8-3&sres=B084Z76LZB%2CB01MR8UZSK%2CB0199SMCNQ%2CB07XZ2XY49%2CB084YVTGQB%2CB01KMRRXT6%2CB084YP3H6Y%2CB009NSR2NS%2CB08ND51GYW%2CB009NSR2W4%2CB088JWPMXF%2CB087T2NNH6%2CB08XX78HYS%2CB01N406T5G%2CB09G36P6S8%2CB09CZ134Q5%2CB09BN3V114%2CB0797Q9V44%2CB07DRP4NND%2CB07QLM8HJW&srpt=POWER_CONVERTER')
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;

  justify-content: center;
}

.image {
  flex: 1;
  width: 45%;

  align-self: center;

  resize-mode: contain;
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
