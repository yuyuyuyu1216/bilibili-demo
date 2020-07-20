<template>
  <div id="app">
    <keep-alive >
      <router-view v-if="$route.meta.keepalive"/>
    </keep-alive>
      <router-view v-if="!$route.meta.keepalive" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background-color: #f6f6f6;
  margin: 0;
  padding: 0;
}
</style>
