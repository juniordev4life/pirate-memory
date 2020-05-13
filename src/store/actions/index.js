import { shuffle } from '../../lib/shuffle'
import { STATUS } from '../statusEnum'

const cardNamesOptions = [
  'ruby-music',
  'ruby-looking-glasses',
  'ruby-competetive',
  'ruby-fr',
  'ruby-fit',
  'ruby-okr',
  'ruby-phoenix',
  'ruby-cupid',
  'ruby-neweve',
  'ruby-artist',
  'ruby-love',
  'ruby-oktoberfest',
  'ruby-jacksparrow',
  'ruby-party',
  'ruby-home',
  'ruby-astronaut',
  'ruby-catchsun',
  'ruby-nature',
  'ruby-fifa',
  'ruby-easterbunny'
]

let timerId

const statusHandler = {
  PLAYING: function({ commit }) {
    timerId = setInterval(function() {
      commit('counting')
    }, 1000)
  },

  PASS: function({ commit }) {
    clearInterval(timerId)
    commit('updateHighestSpeed')
  }
}

export default {
  reset: function({ commit }, amountOfCards = 10) {
    const cardNames = shuffle(cardNamesOptions).slice(0, amountOfCards)
    commit('reset', {
      leftMatched: cardNames.length,
      highestSpeed: localStorage.getItem('highestSpeed') || 9999,
      status: STATUS.READY,
      cards: shuffle(cardNames.concat(cardNames)).map(name => ({
        flipped: false,
        cardName: name
      })),
      elapsedMs: 0
    })
  },

  updateAmountOfCards: function({ commit }, amountOfCards) {
    commit('updateAmountOfCards', amountOfCards)
  },

  updateStatus: function(context, status) {
    context.commit('updateStatus', status)
    statusHandler[status] && statusHandler[status](context)
  },

  flipCard: function({ commit }, card) {
    commit('flip', card)
  },

  flipCards: function({ commit }, cards) {
    commit('flips', cards)
  },

  match: function({ commit }) {
    commit('decreaseMatch')
  }
}
