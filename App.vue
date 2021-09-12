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
import { getStatusBarHeight } from 'react-native-status-bar-height'

import Home from "./src/screens/Home.vue"

import Monumenti from "./src/screens/Monumenti.vue"
import Monumento from "./src/screens/Monumento.vue"
import Mappa from "./src/screens/Mappa.vue"
import Tips from "./src/screens/Tips.vue"
import Rewind from "./src/screens/Rewind.vue"

const STATUS_BAR_HEIGHT = getStatusBarHeight(false)

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
          shadowOpacity: 0
        }
      })
    },
    Monumento: {
      screen: Monumento,
      navigationOptions: () => ({
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: 'transparent'
        },
        headerTintColor: '#ffffff'
      })
    },
    Mappa: {
      screen: Mappa,
      navigationOptions: () => ({
        title: "Mappa",
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0,
        }
      })
    },
    Tips: {
      screen: Tips,
      navigationOptions: () => ({
        title: "Tips",
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0,
        }
      })
    },
    Rewind: {
      screen: Rewind,
      navigationOptions: () => ({
        title: "Rewind",
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0,
        }
      })
    },

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
