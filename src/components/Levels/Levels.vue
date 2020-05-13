<template>
  <div>
    <h3 class="c-levels__headline">Please choose your level</h3>
    <div class="c-levels__levels">
      <div
        :class="{
          'c-levels__level-container': true,
          'c-levels__level--active': amountOfCards === 4
        }"
      >
        <img
          src="../../assets/img/ruby-easy.svg"
          @click="newAmountOfCards(4)"
          alt="level easy"
          class="c-levels__level"
        />
        <span>Easy</span>
      </div>
      <div
        :class="{
          'c-levels__level-container': true,
          'c-levels__level--active': amountOfCards === 6
        }"
      >
        <img
          src="../../assets/img/ruby-normal.svg"
          @click="newAmountOfCards(6)"
          alt="level medium"
          class="c-levels__level"
        />
        <span>Normal</span>
      </div>
      <div
        :class="{
          'c-levels__level-container': true,
          'c-levels__level--active': amountOfCards === 10
        }"
      >
        <img
          src="../../assets/img/ruby-hard.svg"
          @click="newAmountOfCards(10)"
          alt="level hard"
          class="c-levels__level c-levels__level--hard"
        />
        <span>Hard</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { STATUS } from '@/store/statusEnum'

export default {
  computed: {
    ...mapGetters(['amountOfCards'])
  },
  methods: {
    ...mapActions(['updateStatus']),

    newAmountOfCards(cardNumber) {
      this.$store.dispatch('updateAmountOfCards', cardNumber)
      this.updateStatus(STATUS.READY)
      this.$store.dispatch('reset', cardNumber)
    }
  }
}
</script>

<style scoped>
.c-levels__levels {
  display: flex;
  justify-content: space-between;
  height: 250px;
  align-items: baseline;
}
.c-levels__headline {
  font-size: 24px;
  margin-top: 20px;
  text-align: center;
}
.c-levels__level-container {
  text-align: center;
}
.c-levels__level {
  height: 200px;
  width: 200px;
  cursor: pointer;
}
.c-levels__level--hard {
  padding: 25px;
}
.c-levels__level--active {
  box-shadow: 7px 10px 15px -4px rgba(0, 0, 0, 0.75);
}
@media screen and (max-width: 450px) {
  .c-levels__levels {
    height: 150px;
  }
  .c-levels__level {
    height: 100px;
    width: 100px;
    cursor: pointer;
  }
  .c-levels__level--hard {
    padding: 10px;
  }
}
</style>
