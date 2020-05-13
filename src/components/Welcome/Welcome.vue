<template>
  <modal name="welcome" height="auto" :width="modalWidth">
    <div class="c-welcome__container">
      <span class="c-welcome__headline">Welcome</span>
      <p class="c-welcome__text">
        We have a big problem. In case of Corona, our Rubyies are afraid and
        hide in different treasure chests.
      </p>
      <p class="c-welcome__text">
        Please try to help us and find all of them to bring them back to the
        ship for quarantine.
      </p>
      <Levels></Levels>
      <div class="c-welcome__button-container">
        <span class="c-welcome__start-button" @click="closeWelcome">Start</span>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'
import Levels from '@/components/Levels/Levels.vue'

export default {
  data() {
    return {
      modalWidth: '50%'
    }
  },
  components: { Levels },
  computed: {
    ...mapGetters(['amountOfCards'])
  },
  created() {
    if (window.innerWidth < 1000) {
      this.modalWidth = '80%'
    }
    if (window.innerWidth < 600) {
      this.modalWidth = '100%'
    }
  },
  methods: {
    newAmountOfCards(cardNumber) {
      this.$store.dispatch('updateAmountOfCards', cardNumber)
      this.$store.dispatch('reset', cardNumber)
    },

    closeWelcome() {
      this.$modal.hide('welcome')
    }
  }
}
</script>

<style scoped>
.c-welcome__headline {
  font-size: 28px;
  margin: 0 0 25px 0;
  font-weight: bold;
}
.c-welcome__text {
  padding: 10px 0;
  font-family: 'Open Sans';
}
.c-welcome__container {
  padding: 25px;
}
.c-welcome__button-container {
  text-align: center;
}
.c-welcome__start-button {
  background-color: #6a3460;
  padding: 8px 16px;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
}
</style>
