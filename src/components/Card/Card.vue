<template>
  <div class="container" @click="flip">
    <div class="card" :class="{ flipped: option.flipped }">
      <img
        v-if="option.cardName === 'ruby-home'"
        class="front"
        src="../../assets/img/cards/ruby-home.png"
        alt="ruby-home"
      />
      <img
        v-if="option.cardName === 'ruby-fifa'"
        class="front"
        src="../../assets/img/cards/ruby-fifa.png"
        alt="ruby-fifa"
      />
      <img
        v-if="option.cardName === 'ruby-party'"
        class="front"
        src="../../assets/img/cards/ruby-party.png"
        alt="ruby-party"
      />
      <img
        v-if="option.cardName === 'ruby-music'"
        class="front"
        src="../../assets/img/cards/ruby-music.png"
        alt="ruby-music"
      />
      <img
        v-if="option.cardName === 'ruby-nature'"
        class="front"
        src="../../assets/img/cards/ruby-nature.png"
        alt="ruby-nature"
      />
      <img
        v-if="option.cardName === 'ruby-catchsun'"
        class="front"
        src="../../assets/img/cards/ruby-catchsun.png"
        alt="rubycatchsun"
      />
      <img
        v-if="option.cardName === 'ruby-astronaut'"
        class="front"
        src="../../assets/img/cards/ruby-astronaut.png"
        alt="ruby-astronaut"
      />
      <img
        v-if="option.cardName === 'ruby-easterbunny'"
        class="front"
        src="../../assets/img/cards/ruby-easterbunny.png"
        alt="ruby-easterbunny"
      />
      <img
        v-if="option.cardName === 'ruby-love'"
        class="front"
        src="../../assets/img/cards/ruby-love.png"
        alt="ruby-love"
      />
      <img
        v-if="option.cardName === 'ruby-oktoberfest'"
        class="front"
        src="../../assets/img/cards/ruby-oktoberfest.png"
        alt="ruby-oktoberfest"
      />
      <img
        v-if="option.cardName === 'ruby-jacksparrow'"
        class="front"
        src="../../assets/img/cards/ruby-jacksparrow.png"
        alt="ruby-jacksparrow"
      />
      <img
        v-if="option.cardName === 'ruby-neweve'"
        class="front"
        src="../../assets/img/cards/ruby-neweve.png"
        alt="ruby-neweve"
      />
      <img
        v-if="option.cardName === 'ruby-artist'"
        class="front"
        src="../../assets/img/cards/ruby-artist.png"
        alt="ruby-artist"
      />
      <img
        v-if="option.cardName === 'ruby-looking-glasses'"
        class="front"
        src="../../assets/img/cards/ruby-looking-glasses.png"
        alt="ruby-looking-glasses"
      />
      <img
        v-if="option.cardName === 'ruby-competetive'"
        class="front"
        src="../../assets/img/cards/ruby-competetive.png"
        alt="ruby-competetive"
      />
      <img
        v-if="option.cardName === 'ruby-fr'"
        class="front"
        src="../../assets/img/cards/ruby-fr.png"
        alt="ruby-fr"
      />
      <img
        v-if="option.cardName === 'ruby-fit'"
        class="front"
        src="../../assets/img/cards/ruby-fit.png"
        alt="ruby-fit"
      />
      <img
        v-if="option.cardName === 'ruby-okr'"
        class="front"
        src="../../assets/img/cards/ruby-okr.png"
        alt="ruby-okr"
      />
      <img
        v-if="option.cardName === 'ruby-phoenix'"
        class="front"
        src="../../assets/img/cards/ruby-phoenix.png"
        alt="ruby-phoenix"
      />
      <img
        v-if="option.cardName === 'ruby-cupid'"
        class="front"
        src="../../assets/img/cards/ruby-cupid.png"
        alt="ruby-cupid"
      />

      <img
        class="back"
        src="../../assets/img/cards/ruby-back-alt.png"
        alt="back"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  props: {
    option: {
      type: Object,
      default() {
        return {
          flipped: false,
          cardName: ''
        }
      }
    }
  },

  methods: {
    ...mapActions(['flipCard']),
    flip() {
      if (this.option.flipped) {
        return
      }
      this.flipCard(this.option)
      this.$emit('flipped', this.option)
    }
  }
}
</script>

<style scoped>
.container {
  width: 100px;
  height: 121px;
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  background: blue;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
