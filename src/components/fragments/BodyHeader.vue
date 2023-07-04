<template>
  <v-app-bar app>
    <v-toolbar-title>
      <router-link to="/">
        <h3 class="text-muted">BucketList</h3>
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items class="ml-auto">
      <v-btn text to="/">Home</v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-container>
    <h1>BucketList</h1>
    <v-row class="text-center">
      <!-- <v-img src="../../static/img/logo.jpg" class="logo"></v-img> -->
    </v-row>
    <nav class="gnb-menu">
      <v-btn text to="../home.html">홈</v-btn>
      <v-btn text to="../board_list.html">버킷리스트 둘러보기</v-btn>
      <v-btn text to="../add_bucket.html">버킷리스트 추가하기</v-btn>
      <v-btn text to="../my_bucket.html">나의 버킷리스트</v-btn>
    </nav>
  </v-container>
</template>
