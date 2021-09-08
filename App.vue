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
