<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="logo"><a>N/S Study</a></nuxt-link>
        <nuxt-link to="/" tag="li" ><a>Posts</a></nuxt-link>
        <nuxt-link to="/about" tag="li"><a>About</a></nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .main-header {
    background: #FFF;
    height:4.5rem;
  }

  .main-nav {
    height:100%;
  }
  
  .nav-links{
    list-style: none;
    margin:1rem 2rem;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    height: 100%;

  }

  li{
    margin: 0 1rem;
  }
 .nav-links a {
  color:#464E47;
  display: block;
  text-decoration: none;
  }
.nav-links a:hover ,
.nav-links a:active  {
    color:#568259;
    text-decoration: none;
  }

  li.logo {
    color: #464E47;
    font-size:2.5em;
    margin-right: auto;
   
}
  .logo:hover,
  .logo:active,
  .logo .nuxt-link-exact-active{
   color: #568259;
}
  </style>