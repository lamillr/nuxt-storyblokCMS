<template>
  <section id="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id" 
      :title= "post.title"
      :excerpt = "post.previewText"
      :imageUrl = "post.imageUrl"
      :id = "post.id"/>
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";

export default {
  components: {
    PostPreview
  },

  asyncData(context) {
    return context.app.$storyapi.get("cdn/stories", {
      version: "draft",
      starts_with: 'blog/'
    })
    .then(res => {
      return { 
        posts: res.data.stories.map(bp => {
        return {
        id: bp.slug,
        title: bp.content.title,
        previewText: bp.content.summary,
        imageUrl: bp.content.pic
        };
      })
      };
    });
}

  //data() {
  // //   return {
  // //     posts: [{
  // //       title: 'A New Beginning',
  // //       previewText: 'Learn somthing new today',
  // //       imageUrl: 'http://placeimg.com/200/200/arch',
  //       id:'a-new-beginning'
  //     },
  //     {
  //       title: 'A Second Beginning',
  //       previewText: 'Learn somthing new today',
  //       imageUrl: 'http://placeimg.com/200/200/arch',
  //       id:'a-second-beginning'
  //     }]
  //   }
  // }
};
</script>

<style scoped>
#posts {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width:35rem){
  #posts {
    flex-direction: row;
  }
}

</style>
