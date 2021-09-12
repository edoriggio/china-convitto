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
  <touchable-opacity class="card"
                     :on-press="() => navigate('Monumento')"
                     :style="{
                              marginTop: distance,
                              marginBottom: distance,
                              marginLeft: 6,
                              marginRight: 6,
                              shadowOffset: {width: 0, height: 2}
                             }">
    <image class="image"
           :source="getImage(code)" />

    <text class="text">{{ name }}</text>
    <text class="chinese">{{ chinese }}</text>
  </touchable-opacity>
</template>

<script>
import { Dimensions } from 'react-native'
import getImage from '../../assets.js'

const WINDOW_WIDTH = Dimensions.get('window').width
let distance = Math.round((WINDOW_WIDTH - (147 * 2) - (14 * 2) - (6 * 4)) / 2) - 6

export default {
  props: {
    name: String,
    article: Array,
    chinese: String,
    code: String,
    coordinates: Object,
    titles: Array
  },
  data() {
    return {
      distance: distance,
    }
  },
  methods: {
    navigate(route) {
      this.$root.$emit('navigate-monumento', {
        route: route,
        name: this.name,
        article: this.article,
        chinese: this.chinese,
        code: this.code,
        coordinates: this.coordinates,
        titles: this.titles
      })
    },
    getImage(code) {
      return getImage(code)
    }
  }
}
</script>

<style scoped>
.card {
  flex: 1;

  min-width: 147px;
  max-width: 147px;

  height: 200px;

  border-radius: 12px;

  elevation: 4;

  overflow: hidden;
  background-color: white;
}

.shadow {
  shadow-color: rgba(40, 40, 40, 0.23);
  shadow-opacity: 1;
  shadow-radius: 2.26px;
}

.text {
  margin: 12px;

  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
}

.chinese {
  margin-top: auto;
  margin-bottom: 12px;
  margin-left: 12px;
  margin-right: 12px;

  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 12px;

  color: #AAAAAA
}

.image {
  width: auto;
  height: 100px;

  resize-mode: cover;
}
</style>
