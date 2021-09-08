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
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from "vue-native-router"
import { Dimensions, StatusBar } from 'react-native'

import Home from "./src/screens/Home.vue";

import Monumenti from "./src/screens/Monumenti.vue"

const SCREEN_HEIGHT = Dimensions.get('screen').height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Monumenti: {
      screen: Monumenti,
      navigationOptions: () => ({
        title: "Monumenti",
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0,
        }
      })
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: {
    AppNavigator
  }
}
</script>
