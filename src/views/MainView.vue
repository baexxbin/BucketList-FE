<template>
  <div>
    <div class="header">
      <HeaderView />
    </div>
    <div>
      <template>
        <v-data-table :headers="tableHeaders" :items="fetchItems" :total-items="totalItems" :loading="loading" v-model:pagination="pagination" @pagination="onPagination">
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
      </template>
    </div>
    <div class="footer">
      <FooterView />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import HeaderView from '@/views/layout/HeaderView.vue';
import FooterView from '@/views/layout/FooterView.vue';
import axios from 'axios';

export default defineComponent({
  components: {
    HeaderView,
    FooterView,
  },
  setup() {
    const tableHeaders = [
      { text: 'Register ID', value: 'registerId' },
      { text: '이름', value: 'name' },
      { text: '목표', value: 'goal' },
      { text: '목표일', value: 'targetDate' },
    ];

    const fetchItems = ref([]);
    const totalItems = ref(0);
    const loading = ref(false);
    const pagination = ref({
      page: 1,
      itemsPerPage: 10,
    });

    const fetchData = () => {
      loading.value = true;
      axios
        .get('/api/v3/simple-orders', {
          params: {
            page: pagination.value.page,
            limit: pagination.value.itemsPerPage,
          },
        })
        .then(response => {
          fetchItems.value = response.data;
          totalItems.value = response.data.length;
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const onPagination = (pagination) => {
      pagination.value = pagination;
      fetchData();
    };

    onMounted(fetchData);

    return {
      tableHeaders,
      fetchItems,
      totalItems,
      loading,
      pagination,
      onPagination,
    };
  },
});
</script>

<style>
/* 사용자 정의 스타일 */
</style>
