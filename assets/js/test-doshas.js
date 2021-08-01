'use strict'

import {state as jobsState} from './components/jobs'
import {state as notificationState} from './components/notification'

const _state = {
  fields: {
    body: [],
    mind: [],
    doshas: [],

    firstname: '',
    lastname: '',
    countryCode: '+58',
    phone: '',
    email: '',
  },

  tab: 'intro',

  results: {
    body: {vata: 0, pitta: 0, kapha: 0},
    mind: {sattva: 0, rajas: 0, tamas: 0},
  },
}

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj))
}

window.doshasState = function () {
  return {
    ..._state,
    ...jobsState(),
    notification: notificationState(open=false),

    changeTab(tab) {
      this.tab = tab
      this.$refs.tabs.querySelector(`#tab-${tab}`).scrollIntoView()
    },

    getResults() {
      this.newJob()
      this.notification.close()
      this.results = cloneObject(_state.results)

      for (const key of ['body', 'mind']) {
        const total = document.querySelectorAll(`[name="${key}[]"]`).length

        for (const v of this.fields[key]) {
          if (!v)
            continue

          this.results[key][v] += 1 * 100 / total
        }

        if (total !== this.fields[key].length) {
          const tab = document.querySelector(`#tab-${key}`).innerText

          this.notification.open(
            `Faltan algunos items por seleccionar en la pestaña 
            <em>${tab}</em>`,
            'is-warning',
          )
        }
      }

      this.finishJob()
    },

    init() {
      this.newJob()

      Spruce.store('testDoshas', {
        fields: cloneObject(_state.fields),
        tab: _state.tab,
      }, window.localStorage)

      this.changeTab(this.$store.testDoshas.tab)
      this.fields = this.$store.testDoshas.fields
      this.$watch('tab', (v) => this.$store.testDoshas.tab = v)
      this.finishJob()
    },

    reset() {
      this.newJob()
      this.notification.close()
      Spruce.clear('testDoshas')
      this.init()
      this.notification.open('Reiniciamos el test para ti 😄', 'is-success')
      this.finishJob()
    },

    submit() {
      this.newJob()
      this.notification.close()
      this.tab = _state.tab
      this.notification.open('Hemos enviamos los resultados a tu correo electrónico ❤️', 'is-success')
      this.finishJob()
    },
  }
}

