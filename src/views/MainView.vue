<template>
    <v-container>
    <div class="header">
      <HeaderView />
    </div>
    <div>
      <v-data-table
        :headers="tableHeaders"
        :items="items"
        item-key="registerId"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <tr>
            <td>{{ props.item.registerId }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.goal }}</td>
            <td>{{ props.item.targetDate }}</td>
          </tr>
        </template>
      </v-data-table>
    </div>
    <div class="footer">
      <FooterView />
    </div>
  </v-container>
</template>


<script>
// import { defineComponent } from '@vue/composition-api'
import HeaderView from '@/views/layout/HeaderView.vue';
import FooterView from '@/views/layout/FooterView.vue';
import axios from 'axios';
import { ref, onMounted, defineComponent } from 'vue';

export default defineComponent({
    components: {
        HeaderView,
        FooterView,
    },
    setup() {
    const tableHeaders = [
      { text: "Register ID", value: "registerId" },
      { text: "이름", value: "name" },
      { text: "목표", value: "goal" },
      { text: "목표일", value: "targetDate" },
    ];

    const items = ref([]);

    /**
     * 서버에서 데이터 가져오는 비동기 함수
     * axios 사용하여 API 호출, 응답 데이터 items.value 할당
     */
    const fetchData = () => {
      axios
        .get('/api/v3/simple-orders')
        .then(response => {
          items.value = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    };

    /**
     * 컴포넌트가 마운트 된 후 실행되는 로직 정의
     *  fetchData호출해 데이터 가져옴
     */
    onMounted(fetchData);

    return {
      tableHeaders,
      items,
    };
  },
});
</script>
