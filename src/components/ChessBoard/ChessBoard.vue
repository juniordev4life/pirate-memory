<template>
  <div class="chessboard">
    <div
      :class="{
        'cards-container': true,
        'cards-container--easy': amountOfCards === 4,
        'cards-container--normal': amountOfCards === 6
      }"
    >
      <Card
        v-for="(card, index) of cards"
        :key="index"
        :option="card"
        @flipped="onFlipped"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from '../Card/Card.vue'

import { mapActions, mapGetters } from 'vuex'

import { STATUS } from '../../store/statusEnum'

export default {
  components: { Card },
  data() {
    return {
      lastCard: null
    }
  },

  computed: {
    ...mapGetters(['leftMatched', 'cards', 'status', 'amountOfCards'])
  },

  methods: {
    ...mapActions(['updateStatus', 'match', 'flipCards']),
    onFlipped(e) {
      if (this.status === STATUS.READY) {
        this.updateStatus(STATUS.PLAYING)
      }
      if (!this.lastCard) {
        return (this.lastCard = e)
      }
      if (this.lastCard !== e && this.lastCard.cardName === e.cardName) {
        this.lastCard = null
        this.match()
        return this.leftMatched || this.updateStatus(STATUS.PASS)
      }
      const lastCard = this.lastCard
      this.lastCard = null
      setTimeout(() => {
        this.flipCards([lastCard, e])
      }, 1000)
    }
  }
}
</script>

<style scoped>
.chessboard {
  margin-top: 20px;
  background-color: #fff;
  height: 530px;
  border-radius: 4px;
  padding: 10px 5px;
}

.cards-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-around;
}

.cards-container--easy {
  height: auto;
  width: 450px;
  margin: 145px 75px;
}

.cards-container--normal {
  height: auto;
  width: 450px;
  margin: 85px 75px;
}

.container:nth-child(4n) {
  margin-right: 0px;
}

@media screen and (max-width: 450px) {
  .chessboard {
    height: 450px;
    padding: 10px 0px;
  }

  .cards-container--easy {
    height: auto;
    width: 80%;
    margin: 145px 10%;
  }

  .cards-container--normal {
    height: auto;
    width: 80%;
    margin: 85px 10%;
  }
}
</style>
