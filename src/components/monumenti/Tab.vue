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
<touchable-opacity class="pill"
                   :class="[
                            (active ? 'active' : 'not-active'),
                            (title === 'Primo' ? 'primo': ''),
                            (title === 'Quarto' ? 'quarto': ''),
                            (title !== 'Quarto' ? 'other' : '')
                           ]"
                   :on-press="() => changeTab(title)">
  <text class="title"
        :class="active ? 'active-title' : 'not-active-title'">
    {{ title }} Anno
  </text>
</touchable-opacity>
</template>

<script>

export default {
  props: {
    title: String,
    active: Boolean
  },
  methods: {
    changeTab(tab) {
      this.$root.$emit('changedTab', tab)
      console.log(tab)
    }
  },
  mounted() {
    this.$root.$on('activeTabChanged', (title) => {
      this.active = title === this.title ? true : false
    })
  }
}
</script>

<style scoped>
.pill {
  align-items: center;
  justify-content: center;

  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;

  border-radius: 100px;
  color: black;
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
}

.not-active {
  border-width: 3px;
  border-color: #B8B8B8;
}

.not-active-title {
  color: #B8B8B8;
}

.active {
  border-color: #327D68;
  border-width: 3px;

  background-color: rgba(50, 125, 104, 0.08)
}

.active-title {
  color: #327D68;
}

.primo {
  margin-left: 20px;
}

.quarto {
  margin-right: 20px;
}

.other {
  margin-right: 10px;
}
</style>
