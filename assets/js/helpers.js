'use strict'

function getNextURL(def='') {
  const url = new URL(window.location.href)
  return url.searchParams.get('next') || def
}

function redirectToNext() {
  const redir = getNextURL()

  if (!redir)
    return

  window.location.href = redir
}

export {
  getNextURL,
  redirectToNext,
}

