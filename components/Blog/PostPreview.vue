<template>
  <nuxt-link
    :to="id">
    <article class="post-preview">
    <div 
      :style= "{backgroundImage: 'url(' + imageUrl + ')'}"
      class="post-preview-image">
    </div>
    <div class="post-preview-content">
      <h1>{{ title }}</h1>
      <p>{{ excerpt }}</p>
    </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
  },
    excerpt: {
    type: String,
    required: true
  },
    imageUrl: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
 }
};

</script>

<style scoped>

a {
  text-decoration: none;
  color: black;

}

.post-preview {
  border-radius: 3px;
  width: 90%;
  margin: 1rem;
  height: 20rem;
}

.post-preview-image {
  background-position: cneter;
  background-size: cover;
  width: 100%;
  height:10rem;

}

.post-preview-content {
  text-align: center;
  padding: 1rem;
}

@media (min-width: 35rem){
  .post-preview {
    width:25rem;
  }
}

</style>