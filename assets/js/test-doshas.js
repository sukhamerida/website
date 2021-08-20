'use strict'

import {state as jobsState} from './components/jobs'
import {state as notificationState} from './components/notification'

const version = 'v1'

const _state = {
  tab: 'intro',

  fields: {
    name: '',
    lastname: '',
    countryCode: '+58',
    phone: '',
    email: '',
  },

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
      this.notification.close()
      this.$refs.tabs.querySelector(`#tab-${tab}`).scrollIntoView()

      if (tab === 'results')
        this.getResults()
    },

    getResults() {
      this.newJob()
      this.results = cloneObject(_state.results)

      for (const key of ['body', 'mind']) {
        const selector = `[id^="dropdown-${key}-"]`
        const total = document.querySelectorAll(selector).length
        const values = Object.values(this.$store.testDoshas.values[key])

        if (values.length !== total) {
          const tab = document.querySelector(`#tab-${key}`).innerText
          this.notification.open(`Faltan algunos items por seleccionar en la pestaña <em>${tab}</em>`, 'is-warning')
          this.finishJob()
          return
        }

        for (const v of values)
          this.results[key][v] += 1 * 100 / total
      }

      this.finishJob()
    },

    init() {
      this.newJob()

      Spruce.store('testDoshas', {
        version: version,
        tab: _state.tab,

        values: {
          body: {},
          mind: {},
        }
      }, window.localStorage)

      if (this.$store.testDoshas.version !== version) {
        this.reset()
        this.finishJob()
        return
      }

      this.changeTab(this.$store.testDoshas.tab)
      this.$watch('tab', (v) => this.$store.testDoshas.tab = v)
      this.finishJob()
    },

    reset() {
      this.newJob()
      Spruce.clear('testDoshas')
      this.init()
      this.notification.open('Reiniciamos el test para ti 😄', 'is-success')
      this.finishJob()
    },

    async submit() {
      this.newJob()

      const url = 'https://www.sukhamerida.com/.netlify/functions/tests-doshas'

      try {
        const resp = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},

          body: JSON.stringify({
            user: {
              name: this.fields.name,
              lastname: this.fields.lastname,
              email: this.fields.email,
              //phone: this.fields.countryCode + this.fields.phone,
            },

            results: this.results,
          }),
        })

        if (!resp.ok) {
          console.error(resp)
          throw 'Algo no salió bien mientras obteníamos respuesta de nuestros servidores'
        }

        if (resp.status >= 400) {
          const data = await resp.json()
          console.log(data)

          throw 'Parece que algunos datos son incorrectos, verifica que todo esté bien y vuelve a intentarlo'
        }

        this.notification.open('Hemos enviamos los resultados a tu correo electrónico ❤️', 'is-success')
      } catch(err) {
        let msg = err

        if (err instanceof TypeError) {
          msg = 'No pudimos conectar con nuestros servidores, verifica tu conexión a internet'
        }

        console.error(err)
        this.notification.open(msg, 'is-danger')
      } finally {
        this.finishJob()
      }
    },
  }
}

