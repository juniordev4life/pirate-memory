<template>
  <div>
    <div class="game-panel">
      <Dashboard></Dashboard>
      <Chessboard></Chessboard>
      <Status></Status>
      <Settings></Settings>
      <Welcome></Welcome>
    </div>
  </div>
</template>

<script>
import Dashboard from '@/components/DashBoard/DashBoard.vue'
import Chessboard from '@/components/ChessBoard/ChessBoard.vue'
import Status from '@/components/PlayStatus/PlayStatus.vue'
import Settings from '@/components/Settings/Settings.vue'
import Welcome from '@/components/Welcome/Welcome.vue'

import { mapActions } from 'vuex'
import { STATUS } from '@/store/statusEnum'

export default {
  components: { Dashboard, Chessboard, Status, Settings, Welcome },
  created() {
    this.updateStatus(STATUS.READY)
    this.reset()
  },

  mounted() {
    this.$modal.show('welcome')
  },

  methods: {
    ...mapActions(['updateStatus', 'reset'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700');

@font-face {
  font-family: 'Bariol';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/bariol_regular-webfont.woff2') format('woff2'),
    url('./assets/fonts/bariol_regular-webfont.woff') format('woff');
}
@font-face {
  font-family: 'Bariol';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('./assets/fonts/bariol_bold-webfont.woff2') format('woff2'),
    url('./assets/fonts/bariol_bold-webfont.woff') format('woff');
}

.game-panel {
  width: 600px;
  height: 800px;
  border-radius: 2px;
  background-color: #6a3460;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: 'Bariol';
}

@media screen and (max-width: 450px) {
  .game-panel {
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }
}
</style>
