<template>
  <div class="box constrained-box tw-card">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img
            :src="tweet.user.profile_image_url"
            class="rounded"
            alt="Image"
          />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="no-margin">
            <span
              ><strong>{{ tweet.user.name }}</strong></span
            >
            <small style="float:right">31m ago</small>
          </p>
          <p>
            {{ tweet.text }}
          </p>
        </div>
        <div class="buttons">
          <button
            class="button is-primary"
            v-if="tweet.entities.urls.length > 0"
            @click="openGig(tweet.entities.urls[0].url)"
          >
            Apply
          </button>
          <button
            class="button is-secondary"
            @click="
              openGig(
                `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
              )
            "
            target="_blank"
          >
            View Tweet
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Gig',
  props: ['tweet'],
  methods: {
    openGig(link) {
      window.open(link, '_blank');
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  margin-bottom: 10px;
}
</style>
