<template>
  <section id="about-page">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/about', {
      version: 'draft'
    }).then(res => {
      console.log(res.data)
      return {
        title: res.data.story.content.title,
        content: res.data.story.content.Content
      }
    })
  }
}
</script>

<style scoped>
#about-page {
  margin:3.5rem;
  width:80%;
  max-width: 500px;
  margin: auto;
}

#about-page p {
  white-space: pre-line;

}
</style>