<template>
  <h1 class="userName">
    {{ userName }}
  </h1>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  userName: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.userName {
  width: 160px;
  height: 100px;
  line-height: 90px;
  padding: 5px;
  border-radius: 5px;
  background-color: #5979ac;
  color: #fff;
  text-align: center;
}
a {
  text-decoration: none;
  color: #fff;
}

@media screen and (max-width: 450px) {
  .logo {
    width: 150px;
  }
}

@media screen and (max-width: 380px) {
  .logo {
    width: 140px;
  }
}

@media screen and (max-width: 360px) {
  .logo {
    width: 110px;
  }
  a {
    font-size: 18px;
  }
}
</style>
