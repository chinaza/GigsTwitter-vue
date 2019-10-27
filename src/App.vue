<template>
  <div id="app">
    <div class="container">
      <nav
        class="navbar is-primary is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" @click="submitQ()" style="padding-left:20px">
            <img src="/img/logo.png" class="nav-logo" />
          </a>

          <div
            class="navbar-item"
            style="position:absolute; left:60px; right:20px;"
          >
            <div class="field" style="width:100%">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Role (e.g. Customer Service)"
                  v-model="q"
                  v-on:keyup="submitQ($event)"
                />
                <span class="icon is-left">
                  <i class="icon ion-md-search"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <router-view />
    </div>

    <progress
      class="progress app-loader is-small is-danger"
      max="100"
      v-if="isLoading"
      >80%</progress
    >
    <nav
      class="navbar is-light is-fixed-bottom"
      role="navigation"
      aria-label="main navigation"
      @click="submitQ()"
    >
      <div class="navbar-item has-text-centered" style="width:100%;">
        <h4 class="has-text-centered" style="margin: 0 auto">#GigsTwitter</h4>
      </div>
    </nav>
    <Alert />
  </div>
</template>

<script>
import Twitter from './services/twitter';
import Loc from './services/location';
import Alert from '@/components/Alert.vue';

export default {
  data() {
    return {
      q: '',
      pos: null,
      twitter: new Twitter()
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  components: {
    Alert
  },
  methods: {
    async submitQ(e) {
      if (!e || e.key.toLowerCase() === 'enter') {
        this.$store.commit('isLoading', true);
        try {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          this.$store.commit('twitterQ', this.q);
          const tweets = await this.twitter.loadData(this.q);
          this.$store.commit('tweets', tweets);
          this.$store.commit('isLoading', false);
        } catch (error) {
          console.log(error);
          this.$store.commit('isLoading', false);
          this.$store.dispatch('toggleAlert', {
            isOpen: true,
            message: error.message
          });
        }
      }
    }
  },
  async beforeCreate() {
    try {
      this.$store.commit('isLoading', true);
      const search = new URLSearchParams(window.location.search);
      this.q = search.get('q') || '';
      this.$store.commit('twitterQ', this.q);

      this.pos = await Loc.getLatLng();

      this.twitter = new Twitter(this.pos);
      const tweets = await this.twitter.loadData(this.q);
      this.$store.commit('tweets', tweets);
      this.$store.commit('isLoading', false);
    } catch (error) {
      this.$store.commit('isLoading', false);
      this.$store.dispatch('toggleAlert', {
        isOpen: true,
        message: error.message
      });
    }
  }
};
</script>
