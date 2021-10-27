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
  <view class="container">
    <status-bar :backgroundColor="'transparent'"
                :barStyle="'dark-content'"
                :translucent="true" />
              
    <map-view v-if="finishedLoading"
              class="container"
              :showsUserLocation="true"
              :initialRegion="coordinates">
      <marker v-for="monument in keys"
              :key="monument"
              :coordinate="{ 
                            latitude: monuments[monument].coordinates.latitude,
                            longitude: monuments[monument].coordinates.longitude
                           }">
        <callout :onPress="() => {
          showLocation({
            latitude: monuments[monument].coordinates.latitude,
            longitude: monuments[monument].coordinates.longitude,
            googleForceLatLon: true
          })
        }">
          <marker-view :title="monument"
                       :description="monuments[monument].category + ' Anno'"
                       :image="monuments[monument].code"
                       :coordinates="monuments[monument].coordinates" />
        </callout>
      </marker>
    </map-view>
  </view>
</template>

<script>
import * as Location from 'expo-location'
import MonumentiDB from '../../data/monumenti.json'
import { showLocation } from 'react-native-map-link'

import MapView, { Marker, Callout } from 'react-native-maps';
import MarkerView from '../components/map/MarkerView.vue'

export default {
  components: {
    MapView,
    Marker,
    Callout,
    MarkerView
  },
  data() {
    return {
      coordinates: {
        latitude: Number,
        longitude: Number,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
      },
      finishedLoading: false,
      monuments: Object,
      keys: [],
      errorMessage: String,
      showLocation: showLocation,
    }
  },
  mounted() {
    this.getLocation()

    this.monuments = MonumentiDB

    for (let monument in this.monuments) {
      this.keys.push(monument.toString())
    }
  },
  methods: {
    getLocation() {
      Location.requestForegroundPermissionsAsync()
        .then(status => {
          if (!status.granted) {
            this.errorMessage = 'Permission to access location was denied'
          } else if (status.granted) {
            Location.getCurrentPositionAsync({}).then((location) => {
              this.errorMessage = ''

              this.coordinates.latitude = Number(location.coords.latitude)
              this.coordinates.longitude = Number(location.coords.longitude)

              this.finishedLoading = true
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;  
}
</style>
