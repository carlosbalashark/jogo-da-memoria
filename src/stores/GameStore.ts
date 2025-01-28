import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { IStatus } from '@/constants'
import type { ICard, IState } from '@/IType'
import { getHighestRecord, saveHighestRecord, shuffleAllCards } from '@/helper'
import CountTurn from './CountTurn'

export const GameStoreKey: InjectionKey<Store<IState>> = Symbol()

const GameStore = createStore<IState>({
  state() {
    return {
      nonMatchedPairs: 10,
      highestRecord: getHighestRecord(),
      status: IStatus.READY,
      cards: shuffleAllCards(),
      turns: 0
    }
  },
  getters: {
    nonMatchedPairs: (s) => s.nonMatchedPairs,
    highestRecord: (s) => s.highestRecord,
    status: (s) => s.status,
    cards: (s) => s.cards,
    turns: (s) => s.turns
  },
  actions: {
    updateStatus: (context, status: IStatus) => {
      context.commit('changeStatus', status)
      CountTurn.tryStartGame(status, context)
      CountTurn.tryEndGame(status, context)
    },
    flipsDelay: (context, { timeout, cards }: { timeout: number; cards: ICard[] }) => {
      CountTurn.playerMove(context)
      setTimeout(() => {
        context.commit('flips', cards)
      }, timeout)
    }
  },
  mutations: {
    reset: (state) => {
      state.nonMatchedPairs = 10
      state.highestRecord = getHighestRecord()
      state.cards = shuffleAllCards()
      state.status = IStatus.READY
      state.turns = 0
    },
    updateNonMatchedPairs: (state, payload) => {
      state.nonMatchedPairs = state.nonMatchedPairs + payload
    },
    updateMoveCount: (state, moveCount: number) => {
      state.turns = moveCount;
    },
    flips: (state, cards: ICard[]) => {
      state.cards
        .filter((c) => cards.some((cc) => cc.id === c.id))
        .forEach((c) => {
          c.flipped = !c.flipped
        })
    },
    changeStatus: (state, status: IStatus) => {
      state.status = status
    },
    updateTopScore(state) {
      saveHighestRecord(state.turns)
    }
  }
})

export { GameStore }
