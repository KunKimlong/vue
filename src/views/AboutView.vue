<script lang="ts" setup>
import { onBeforeMount, onMounted } from "vue";
  import {useUserStore} from "../store/user";
  import axios from "axios"
  const userStore = useUserStore();
  onBeforeMount(async ()=>{
     const user = await axios.get('http://127.0.0.1:8000/ap/user');
  })
</script>
<template>
  <h1>About</h1>
  <h1>{{ userStore.fullName }}</h1>
</template>
