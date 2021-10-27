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
  <touchable-opacity class="circle"
                     :onPress="() => {
                       call(number)
                     }">
    <icon class="icon"
          name="phone-line"
          color="white"
          size="35" />

    <text class="text">
      {{ name }}
    </text>
  </touchable-opacity>
</template>

<script>
import { Linking, Alert, Platform } from 'react-native'

import Icon from 'react-native-remix-icon'

export default {
  components: {
    Icon
  },
  props: {
    name: String,
    number: String
  },
  methods: {
    call(number) {
      let phoneNumber = Platform.OS !== 'android' 
                      ? phoneNumber = `telprompt:${number}`
                      : `tel:${number}`

      Alert.alert(
        "Chiamata di emergenza",
        "Sei sicuro/a di voler chiamare questo numero?",
        [
          {
            text: "Annulla",
            style: "cancel"
          },
          {
            text: "Chiama",
            onPress: () => Linking.openURL(phoneNumber)
          }
        ]
      )
    }
  }
}
</script>

<style scoped>
.circle {
  align-items: center;
  justify-content: center;

  margin: 10px;

  height: 130px;
  width: 130px;

  border-radius: 65px;

  background-color: #D32F2F;
}

.icon {
  height: 40px;
  width: 40px;  
}

.text {
  margin-top: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  text-align: center;

  color: white;
}
</style>
