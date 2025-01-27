<template>
  <div class="container" @click="doFlip">
    <div class="card" :class="{ flipped: card.flipped }">
      <img v-if="card.name === 'bode'" class="front" src="../../assets/bode.jpg" />
      <img v-if="card.name === 'cachorro'" class="front" src="../../assets/cachorro.jpg" />
      <img v-if="card.name === 'cavalo'" class="front" src="../../assets/cavalo.jpg" />
      <img v-if="card.name === 'coelho'" class="front" src="../../assets/coelho.jpg" />
      <img v-if="card.name === 'galinha'" class="front" src="../../assets/galinha.jpg" />
      <img v-if="card.name === 'galo'" class="front" src="../../assets/galo.jpg" />
      <img v-if="card.name === 'ovelha'" class="front" src="../../assets/ovelha.jpg" />
      <img v-if="card.name === 'pato'" class="front" src="../../assets/pato.jpg" />
      <img v-if="card.name === 'porco'" class="front" src="../../assets/porco.jpg" />
      <img v-if="card.name === 'vaca'" class="front" src="../../assets/vaca.jpg" />

      <img class="back" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import type { ICard } from '@/IType'
import { GameStoreKey } from '@/stores'

interface IGameCardProps {
  card: ICard
}

const props = defineProps<IGameCardProps>()

const emit = defineEmits(['onFlip'])

const { card } = toRefs(props)
const { commit } = useStore(GameStoreKey)

const doFlip = () => {
  if (card.value.flipped) {
    return
  }
  commit('flips', [card.value])
  emit('onFlip', card.value)
}
</script>

<style scoped>
.container {
  width: 100px;
  height: 121px;
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: #5979AC;
  transform: rotateY(0deg);
}

.card .front {
  background: #5979AC;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
