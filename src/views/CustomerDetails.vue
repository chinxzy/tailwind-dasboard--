<template>
  <customer-detail />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../store";
import CustomerDetail from "../components/CustomerDetail.vue";

export default defineComponent({
  components: {
    CustomerDetail,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const id = Number(route.params.id);
    store.dispatch("customers/getCustomer", id);
  },
});
</script>
