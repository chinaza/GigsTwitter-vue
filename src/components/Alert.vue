<template>
  <div :class="`modal ${alert.isOpen ? 'is-active' : ''}`">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <button class="close" aria-label="close" @click="close()">
          &times;
        </button>
        <article class="media">
          <div class="media-content">
            <div class="content">
              <h5>NOTIFICATION</h5>
              <p>{{ alert.message }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  computed: {
    alert() {
      return this.$store.state.alert;
    }
  },
  methods: {
    close() {
      this.$store.dispatch('toggleAlert');
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 85% !important;
  margin: 0 auto;
  max-width: 400px !important;
}

.close {
  color: black;
  font-size: 30px;
  float: right;
  margin-top: -10px;
  background: none;
  border: none;
  box-shadow: none;
}
</style>
