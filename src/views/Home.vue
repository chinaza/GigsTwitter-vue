<template>
  <div class="home">
    <h6 style="margin: 0 auto; margin-bottom:5px">RECENT TWEETS</h6>
    <Gig v-for="(tweet, i) in tweets" v-bind:key="i" :tweet="tweet" />
  </div>
</template>

<script>
// @ is an alias to /src
import Gig from '@/components/Gig.vue';

export default {
  name: 'home',
  computed: {
    tweets() {
      return this.$store.state.twitter.tweets;
    }
  },
  components: {
    Gig
  }
};
</script>
