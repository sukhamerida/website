'use strict'

import {register} from './main'

function state(open=false, message='', classes='') {
  return {
    isOpen: open,
    classes: classes,
    message: message,

    open(message=this.message, classes=this.classes) {
      this.isOpen = true
      this.classes = classes
      this.message = message
    },

    close() {
      this.isOpen = false
    },
  }
}

register('notification', state)

export {
  state,
}

