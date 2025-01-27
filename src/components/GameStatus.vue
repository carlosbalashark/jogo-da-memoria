<template>
  <div class="status-footer">
    <div class="game-completed" v-if="status === IStatus.PASSED">
      <div>Você completou todos os pares em {{ turns }} Turnos!</div>
      <a @click.prevent.stop="reset">Jogar Novamente</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { GameStoreKey } from '../stores/GameStore'
import { IStatus } from '../constants'

const { state, commit } = useStore(GameStoreKey)

const status = computed(() => state.status)
const turns = computed(() => state.turns)
const reset = () => commit('reset')
</script>

<style scoped>
.status-footer {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

a {
  padding: .5rem;
  background-color: #5979AC;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}


.game-completed {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: #fff;
  padding: 4rem 1rem;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
}
</style>
