<template>
  <div>
    <div class="header">
      <HeaderView />
    </div>
    <div>
      <v-data-table :headers="tableHeaders" :items="fetchItems" :server-items-length="totalItems" :loading="loading" @pagination="onPagination">
        <template v-slot:headers="{ headers }">
          <tr>
            <th v-for="header in headers" :key="header.text">{{ header.text }}</th>
          </tr>
        </template>
        <template v-slot:body="{ items }">
          <tr v-for="item in items" :key="item.registerId">
            <td>{{ item.registerId }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.goal }}</td>
            <td>{{ item.targetDate }}</td>
          </tr>
        </template>
      </v-data-table>
    </div>
    <div class="footer">
      <FooterView />
    </div>
  </div>
</template>

<script>
import HeaderView from '@/views/layout/HeaderView.vue';
import FooterView from '@/views/layout/FooterView.vue';
import axios from 'axios';

export default {
  components: {
    HeaderView,
    FooterView,
  },
  data() {
    return {
      tableHeaders: [
        { text: 'Register ID', value: 'registerId' },
        { text: '이름', value: 'name' },
        { text: '목표', value: 'goal' },
        { text: '목표일', value: 'targetDate' },
      ],
      fetchItems: [],
      totalItems: 0,
      loading: false,
      pagination: {
        page: 1,
        itemsPerPage: 10,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get('/api/v3/simple-orders', {
          params: {
            page: this.pagination.page,
            limit: this.pagination.itemsPerPage,
          },
        })
        .then(response => {
          this.fetchItems = response.data;
          this.totalItems = response.headers['x-total-count'];
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    onPagination() {
      if (this.pagination.page !== this.pagination.prevPage) {
        this.fetchData();
      }
    },
  },
};
</script>

<style>
/* 사용자정의 스타일 */
</style>
