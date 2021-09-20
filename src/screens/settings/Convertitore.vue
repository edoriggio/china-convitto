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
  <view class="view">
    <scroll-view class="scroll-view" 
                :scollEnabled="false">
      <view class="converter">
        <status-bar :backgroundColor="'transparent'"
                    :barStyle="'dark-content'"
                    :translucent="true" />

        <view class="currency">
          <text class="curr-text">EUR</text>

          <text-input class="input"
                      v-model="eur"
                      keyboard-type="decimal-pad"
                      placeholder="0.0"
                      :clearTextOnFocus="true"
                      :onFocus="clear"
                      :onSubmitEditing="convertEUR" />
        </view>

        <view class="currency"
              :style="{ marginTop: 50 }">
          <text class="curr-text">CNY</text>
          
          <text-input class="input-cny"
                      v-model="cny"
                      keyboard-type="decimal-pad"
                      placeholder="0.0"
                      :clearTextOnFocus="true"
                      :onFocus="clear"
                      :onSubmitEditing="convertCNY" />
        </view>
      </view>
    </scroll-view>

    <view class="rate">
      <text class="text">Tasso di conversione:</text>
      <text class="text-green">1 EUR = {{ exchangeRate }} CNY</text>
    </view>
  </view>
</template>

<script>
import { EXCHANGE_RATE_KEY } from '@env'

export default {
  data() {
    return { 
      exchangeRate: Number,
      eur: String,
      cny: String
    }
  },
  mounted() {
    this.getCurrRates()
  },
  methods: {
    getCurrRates() {
      const request = new XMLHttpRequest()

      request.open(
        'GET',
        `https://freecurrencyapi.net/api/v1/rates?apikey=${EXCHANGE_RATE_KEY}base_currency=EUR`
      )

      request.send()
      request.onload = () => {
        if (request.status === 200) {
          let response = JSON.parse(request.response)
          response = parseFloat(JSON.stringify(response).split(',')[20].split(':')[1])
          this.exchangeRate = response
        }
      }
    },
    clear() {
      this.eur = ''
      this.cny = ''
    },
    convertEUR() {
      let cny = parseInt(this.eur) * this.exchangeRate
      this.cny = cny.toFixed(2)
    },
    convertCNY() {
      let eur = parseInt(this.cny) / this.exchangeRate
      this.eur = eur.toFixed(2)
    }
  }
}
</script>

<style scoped>
.view {
  flex: 1;

  justify-content: space-between;
}

.converter {
  flex-direction: column;

  align-items: center;

  margin-top: 30px;
}

.currency {
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 75%;
  /* background-color: black; */
}

.curr-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: #327D68;
}

.input {
  flex: 1;

  border-bottom-width: 1px;
  border-bottom-color: black;

  margin-left: 60px;

  text-align: right;

  font-style: normal;
  font-weight: bold;
  font-size: 26px;
}

.input-cny {
  flex: 1;

  border-bottom-width: 1px;
  border-bottom-color: black;

  margin-left: 57px;
  margin-bottom: 2px;

  text-align: right;

  font-style: normal;
  font-weight: bold;
  font-size: 26px;
}

.rate {
  align-items: center;

  margin-bottom: 20px;
}

.text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}

.text-green {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #327D68;
}
</style>
