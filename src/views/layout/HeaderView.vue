<template>
    <div class="header">
    <v-app-bar app>
      <v-toolbar-title class="text-muted">
        <router-link to="/">BucketList</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/board_list">버킷리스트 둘러보기</v-btn>
        <v-btn text to="/add_bucket">버킷리스트 추가하기</v-btn>
        <v-btn text to="/my_bucket">나의 버킷리스트</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <div class="text-center">
      <!-- <img src="../../static/img/logo.jpg" class="logo"> -->
    </div>
    <div>
      <h1>BucketList</h1>
    </div>
  </div>
</template>

<script>
export default {
  // Component options here
};
</script>


<style scoped>
.header {
  /* CSS styles for the header component */
}
</style>