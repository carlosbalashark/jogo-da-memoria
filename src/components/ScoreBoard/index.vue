<template>
  <div class="score-board">
    <GameUser :userName="userName" />
    <ProgressBar />
    <GameScore />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ScoreBoard'
}
</script>



<script lang="ts" setup>
import GameUser from './GameUser.vue'
import GameScore from './GameScore.vue'
import ProgressBar from './ProgressBar.vue'


import { defineProps } from 'vue'

const props = defineProps({
  userName: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.score-board {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
