'use strict'

import {register} from './main'

function state() {
  return {
    _jobs: [],

    finishJob() {
      this._jobs.pop()
    },

    isReady () {
      if (this._jobs.length > 0)
        return false

      return true
    },

    newJob() {
      this._jobs.push(null)
    },
  }
}

register('jobs', state)

export {
  state,
}

