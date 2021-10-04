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

    <text class="text">È fortemente sconsigliato bere l'acqua del rubinetto dell'hotel o di qualsiasi altro posto in Cina, in quanto potenzialmente inquinata e pericolosa. È però sicuro lavarsi i denti o la faccia con l'acqua del rubinetto. Infine è anche sconsigliato prendere il ghiaccio, in quanto anch'esso potrebbe essere fatto con acqua di rubinetto. Per maggiori informazioni
      <a href="https://www.travelchinaguide.com/essential/water.htm#:~:text=Drinking%20Water%20in%20China,Tap%20water%20is%20not%20drinkable.">clicca qui</a>.</text>

    <warning title="Attenzione!"
             content="All'interno delle università sono presenti dei 'ditributori' di acqua. Fate attenzione, perchè la temperatura dell'acqua è di 100°C"
             color="#EA4335" />
  </view>
</template>

<script>
import A from 'react-native-a'
import Warning from '../../components/tips/Warning.vue'

export default {
  components: {
    A,
    Warning
  }  
}
</script>

<style scoped>
.container {
  flex: 1;
  flex-direction: column;

  margin-top: 30px;

  justify-content: space-around;
  align-items: center;
}

.text {
  margin-horizontal: 20px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  text-align: justify;
}
</style>