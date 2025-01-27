<template>
  <div>
    <div class="form-user" v-if="isNameEntered === false">
      <input class="input-user" v-model="userName" placeholder="Digite seu nome" />
      <button class="start-game" @click="submitName" :disabled="!userName.trim()">Iniciar Jogo</button>
    </div>
    <div v-if="isNameEntered" class="game-panel">
      <ScoreBoard :userName="userName" v-if="isNameEntered" />
      <ChessBoard />
      <GameStatus />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { ScoreBoard, ChessBoard, GameStatus } from '@/components'
import { GameStoreKey } from '@/stores'

const { commit } = useStore(GameStoreKey)
const userName = ref('')
const isNameEntered = ref(false)

const submitName = () => {
  if (userName.value.trim() !== '') {
    isNameEntered.value = true;
  }
}

onMounted(() => {
  commit('reset')
})
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
.game-panel {
  width: 450px;
  height: 770px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.form-user {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.input-user {
  padding: .5rem;
  border-left: none;
  border-top: none;
  border-right: none;
  border-width: 1px;
  margin-bottom: 0.5rem;
}

.start-game {
  padding: 0.5rem;
  background-color: #5979AC;
  color: #fff;
  font-weight: bold;
}

@media screen and (max-width: 450px) {
  .game-panel {
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }
}
</style>
