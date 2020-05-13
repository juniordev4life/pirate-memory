<template>
  <modal name="settings" height="auto">
    <div class="c-settings__container">
      <span class="c-settings__close" @click="closeSettings">Close</span>
      <h2>Settings</h2>
      <p>You want a restart?</p>
      <Levels></Levels>
      <div class="c-settings__button-container">
        <span class="c-settings__start-button" @click="closeSettings">
          Start
        </span>
      </div>
    </div>
  </modal>
</template>
<script>
import Levels from '@/components/Levels/Levels.vue'

export default {
  components: { Levels },
  methods: {
    closeSettings() {
      this.$modal.hide('settings')
    }
  }
}
</script>

<style scoped>
.c-settings__container {
  padding: 25px;
}
.c-settings__close {
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 10px;
}
.c-settings__button-container {
  text-align: center;
}
.c-settings__start-button {
  background-color: #6a3460;
  padding: 8px 16px;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
}
</style>
