'use strict'

import {state as notificationState} from './components/notification'

window.doshasState = function () {
  const url = new URL(window.location.href)
  const tab = url.searchParams.get('tab')

  const defaultFields = {
    countryCode: '+58',
    body: [],
    mind: [],
    doshas: [],
  }

  Spruce.store('testDoshas', {
    tab: tab || 'intro',
    fields: defaultFields,
  }, window.localStorage)

  return {
    fields: {},
    tab: 'intro',
    notification: notificationState(open=false),
    ready: true,

    changeTab(tab) {
      this.tab = tab
      this.$refs.tabs.querySelector(`#tab-${tab}`).scrollIntoView()
    },

    init() {
      this.changeTab(this.$store.testDoshas.tab)
      this.$watch('tab', v => this.$store.testDoshas.tab = v)
    },

    resetTest() {
      this.ready = false
      this.$store.testDoshas.fields = defaultFields
      this.notification.open('Reiniciamos el test para ti 😄', 'is-success')
      this.ready = true
    },

    submit() {
      this.ready = false
      this.$store.testDoshas.tab = 'intro'
      this.resetTest()
      this.notification.open('Ya enviamos los resultados a tu correo electrónico ❤️', 'is-success')
      this.ready = true
    },
  }
}

