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
    <check-box :value="selected"
               :onValueChange="() => {
                 if (selected) {
                   selected = false
                   saveToDo(false)
                 } else {
                   selected = true
                   saveToDo(true)
                 }
               }" />
  
    <text :class="selected  ? 'selected' : 'unselected'" class="text">{{ text }}</text>
  </view>
</template>

<script>
import storage from '../../../data/storage'

import { CheckBox } from 'react-native'

export default {
  components: {
    CheckBox
  },
  props: {
    text: String
  },
  data() {
    return {
      selected: false
    }
  },
  async mounted() {
    await storage
      .load({
        key: this.text
      })
      .then((res) => {
        this.selected = res
      })
      .catch((err) => {
        switch (err.name) {
          case 'NotFoundError':
            storage.save({
              key: this.text,
              data: false
            })
            break
          default:
            break
        }
      })
  },
  methods: {
    saveToDo(selected) {
      storage.save({
        key: this.text,
        data: selected
      })
    }
  }
}
</script>

<style scoped>
.container {
  flex-direction: row;

  align-items: center;
}

.text {
  margin-left: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
}

.selected {
  text-decoration-line: line-through;

  color: #327D68;
}

.unselected {
  color: black;
}
</style>
