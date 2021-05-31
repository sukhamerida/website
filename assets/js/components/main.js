'use strict'

function get(name) {
  if (window._components === undefined)
    console.error('no components registered')

  const component = window._components.get(name)

  if (component === undefined)
    console.error(`undefined component ${name}`)

  return component
}

function register(name, state) {
  if (window._components === undefined)
    window._components = new Map()

  window._components.set(name, state)
}

export {
  get,
  register,
}

