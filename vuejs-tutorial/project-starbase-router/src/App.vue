

<template>
  <div id="app">
    <h3>Starbase Router</h3>
    <h4>
      <router-link class="link" to="/data/people"
        >Meet the Characters</router-link
      >
      |
      <router-link class="link" to="/data/planets"
        >Explore the planets</router-link
      >
    </h4>
    <router-view></router-view>
    <h4>Made by Vu Tuan Trung</h4>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background: #263238;
}

#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.link,
.link:hover,
.link:visited,
.link:active {
  color: #4fc08d;
}

.item-card {
  border: 2px solid #4fc08d;
  border-radius: 4px;
  padding: 5px;
  padding-bottom: 10px;
  cursor: pointer;
}
</style>