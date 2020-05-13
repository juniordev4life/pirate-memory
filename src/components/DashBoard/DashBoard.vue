<template>
  <div class="status-bar">
    <Logo></Logo>
    <Match-info></Match-info>
    <Score></Score>
  </div>
</template>

<script>
import Logo from '../Logo/Logo.vue'
import MatchInfo from '../MatchInfo/MatchInfo.vue'
import Score from '../Score/Score.vue'

export default {
  components: { Logo, MatchInfo, Score }
}
</script>

<style scoped>
.status-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
