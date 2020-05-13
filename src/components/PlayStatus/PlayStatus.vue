<template>
  <div class="status-footer">
    <span style="width:80px">&nbsp;</span>
    <span v-if="status === READY">Ready</span>
    <span v-if="status === PLAYING">Playing</span>
    <span class="reset" v-if="status === PASS" @click="reset(amountOfCards)">
      Play again
    </span>
    <span class="elapsed">{{ elapsedMs }} s</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { STATUS } from '../../store/statusEnum'

export default {
  data() {
    return STATUS
  },

  computed: {
    ...mapGetters(['status', 'elapsedMs', 'amountOfCards'])
  },

  methods: {
    ...mapActions(['reset']),

    openSettings() {
      this.$modal.show('settings')
    }
  }
}
</script>

<style scoped>
.status-footer {
  position: relative;
  margin-top: 25px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}
.settings,
.reset {
  cursor: pointer;
}
.elapsed {
  width: 45px;
  text-align: right;
}
</style>
