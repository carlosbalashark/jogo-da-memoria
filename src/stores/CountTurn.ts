import type { ActionContext } from 'vuex'
import { IStatus } from '@/constants'
import type { IState } from '@/IType'

class CountTurn {
  private moveCount: number = 0
  tryStartGame(status: IStatus, context: ActionContext<IState, IState>) {
    if (status === IStatus.PLAYING) {
      this.moveCount = 0
    }
  }

  incrementMoveCount(context: ActionContext<IState, IState>) {
    this.moveCount++
    context.commit('updateMoveCount', this.moveCount) 
  }

  playerMove(context: ActionContext<IState, IState>) {
    this.incrementMoveCount(context)
  }

  tryEndGame(status: IStatus, context: ActionContext<IState, IState>) {
    if (status === IStatus.PASSED) {
      context.commit('updateTopScore', this.moveCount)
    }
  }
}

export default new CountTurn()
