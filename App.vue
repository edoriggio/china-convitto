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
  <root-sibling-parent>
    <app-navigator></app-navigator>
  </root-sibling-parent>
</template>

<script>
import { Asset } from 'expo-asset'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { createAppContainer, createStackNavigator } from 'vue-native-router'

import AppLoading from 'expo-app-loading'
import { RootSiblingParent } from 'react-native-root-siblings';

import Home from './src/screens/Home.vue'

// MONUMENTI
import Monumenti from './src/screens/Monumenti.vue'
import Monumento from './src/screens/Monumento.vue'
// MAPPA
import Mappa from './src/screens/Mappa.vue'
// TIPS
import Tips from './src/screens/Tips.vue'
import Acqua from './src/screens/tips/Acqua.vue'
import Frasi from './src/screens/tips/Frasi.vue'
import Partire from './src/screens/tips/Partire.vue'
import Presa from './src/screens/tips/Presa.vue'
import Smog from './src/screens/tips/Smog.vue'
import VPN from './src/screens/tips/VPN.vue'
// REWIND
import Rewind from './src/screens/Rewind.vue'

const STATUS_BAR_HEIGHT = getStatusBarHeight(false)

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    // MONUMENTI
    Monumenti: {
      screen: Monumenti,
      navigationOptions: () => ({
        title: 'Monumenti',
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
    // MAPPA
    Mappa: {
      screen: Mappa,
      navigationOptions: () => ({
        title: 'Mappa',
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0,
        }
      })
    },
    // TIPS
    Tips: {
      screen: Tips,
      navigationOptions: () => ({
        title: 'Tips',
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0,
        }
      })
    },
    Partire: {
      screen: Partire,
      navigationOptions: () => ({
        title: 'Prima di Partire',
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    Smog: {
      screen: Smog,
      navigationOptions: () => ({
        title: 'Smog',
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    Acqua: {
      screen: Acqua,
      navigationOptions: () => ({
        title: 'Acqua',
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    Frasi: {
      screen: Frasi,
      navigationOptions: () => ({
        title: 'Frasi Utili',
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    Presa: {
      screen: Presa,
      navigationOptions: () => ({
        title: 'Prese',
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    VPN: {
      screen: VPN,
      navigationOptions: () => ({
        title: 'VPN',
        headerStyle: {
          marginTop: STATUS_BAR_HEIGHT,
          elevation: 0,
          shadowOpacity: 0
        }
      })
    },
    // REWIND
    Rewind: {
      screen: Rewind,
      navigationOptions: () => ({
        title: 'Rewind',
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
    AppLoading,
    AppNavigator,
    RootSiblingParent
  },
  data() {
    return {
      isReady: false,
    }
  },
  async mounted() {
    await this.loadAssetsAsync()
  },
  methods: {
    cacheImages(images) {
      return images.map(image => {
        if (typeof image === 'string') {
          return Image.prefetch(image);
        } else {
          return Asset.fromModule(image).downloadAsync();
        }
      })
    },
    async loadAssetsAsync() {
      const imageAssets = this.cacheImages([
        require('./assets/bg.png'),
        require('./assets/delimiter.png'),
        require('./assets/icon-with-title.png'),
        // MENU ICONS
        require('./assets/menu/map.png'),
        require('./assets/menu/monuments.png'),
        require('./assets/menu/rewind.png'),
        require('./assets/menu/tips.png'),
        // MONUMENT IMAGES
        require('./assets/monuments/art_district.jpg'),
        require('./assets/monuments/citta_proibita.jpg'),
        require('./assets/monuments/houhai.jpg'),
        require('./assets/monuments/mutianyu.jpg'),
        require('./assets/monuments/nanluoguxiang.jpg'),
        require('./assets/monuments/palazzo_estate.jpg'),
        require('./assets/monuments/parco_olimpico.jpg'),
        require('./assets/monuments/qianmen.jpeg'),
        require('./assets/monuments/tiananmen.jpeg'),
        require('./assets/monuments/tiantan.jpg')
      ])

      await Promise.all([...imageAssets])
    }
  }
}
</script>
