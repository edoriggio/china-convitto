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
<view class="tray">
  <view class="pill">
    <icon :name="`${icon_name}`" size="30"/>
    <text class="text left"> {{ temperature }} </text>
  </view>

  <view class="pill">
    <text class="text right"> {{ hours }}:{{ minutes }} </text>
    <icon name="time-line" size="30"/>
  </view>
</view>
</template>

<script>
import { WEATHER_API_KEY } from '@env'
import moment from 'moment-timezone'

import Icon from 'react-native-remix-icon'

export default {
  data() {
    return {
      hours: String,
      minutes: String,
      icon_name: "signal-wifi-error-line",
      temperature: "N/D"
    }
  },
  components: {
    Icon
  },
  mounted() {
    let offset = moment.tz.guess()
    this.updateTime(offset)

    // TODO: Get user location
    this.getWeather('Rome')
  },
  beforeDestroy() {
    clearTimeout()
  },
  methods: {
    updateTime(tz) {
      var new_tz = tz == 'Asia/Shanghai' ? 'Europe/Rome' : 'Asia/Shanghai'
      let now = moment.tz(new Date(), new_tz).format('HH:mm:ss')

      this.hours = now.toString().split(':')[0]
      this.minutes = now.toString().split(':')[1]

      setTimeout(this.updateTime, 1000)
    },
    getWeather(city) {
      let request = new XMLHttpRequest()

      request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)
      request.send()
      request.onload = () => {
        if (request.status === 200) {
          let response = JSON.parse(request.response)
          this.icon_name = this.getIconName(response.weather[0].icon)
          this.temperature = `${Math.floor(response.main.temp)}°C`
          // console.log(response)
        } else {
          this.icon_name = this.getIconName('no')
        }
      }
    },
    getIconName(code) {
      switch (code) {
        case '01d':
          return 'sun-line'
        case '01n':
          return 'moon-line'
        case '02d':
          return 'sun-cloudy-line'
        case '02n':
          return 'moon-cloudy-line'
        case '03d':
        case '03n':
        case '04d':
        case '04n':
          return 'cloudy-line'
        case '09d':
        case '09n':
          return 'showers-line'
        case '10d':
        case '10n':
          return 'showers-line'
        case '11d':
        case '11n':
          return 'thunderstorms-line'
        case '13d':
        case '13n':
          return 'snowy-line'
        case '50d':
        case'50n':
          return 'mist-line'
        default:
          return 'signal-wifi-error-line'
      }
    }
  }
}
</script>

<style scoped>
.tray {
  flex-direction: row;
  justify-content: space-between;

  margin-top: 35px;

  width: 92%;
}

.pill {
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 13px;

  background-color: white;
  border-radius: 200px;
}

.text {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;

  color: black;
}

.left {
  margin-left: 10px;
}

.right {
  margin-right: 10px;
}
</style>
