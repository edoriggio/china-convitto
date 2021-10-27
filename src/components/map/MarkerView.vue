<template>
  <view class="marker">
    <image v-if="platform === 'ios'" 
           class="image"
           :source="getImage(image)"
           resizerMode="cover" />

    <view>
      <text class="title">
        {{ title }}
      </text>

      <text class="subtitle">
        {{ description }}
      </text>
    </view>

    <icon class="navigate"
          name="compass-3-fill"
          color="#327D68" />
  </view>
</template>>

<script>
import getImage from '../../assets.js'
import { Platform } from 'react-native'

import Icon from 'react-native-remix-icon'

export default {
  props: {
    title: String,
    description: String,
    image: String,
    coordinates: Object
  },
  components: {
    Icon
  },
  data() {
    return {
      platform: Platform.OS
    }
  },
  methods: {
    getImage(code) {
      return getImage(code)
    }
  }
}
</script>

<style scoped>
.marker {
  flex-direction: row;

  align-items: center;
  justify-content: center;
}

.image {
  height: 30px;
  width: 30px;

  margin-right: 10px;

  border-radius: 5px;
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
}

.subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 12px;

  color: #AAAAAA
}

.navigate {
  margin-left: 10px;
}
</style>
