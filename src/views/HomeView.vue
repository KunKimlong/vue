<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import axios from "axios";
import { useRouter } from "vue-router";
  const router = useRouter();
  const username = ref('');
  onMounted(async ()=>{
    // const user = await axios.get('http://127.0.0.1:8000/api/user');
    try{
        const res = await axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/api/user',
          headers:{'Content-Type':'application/json'},
          withCredentials:true,
      })
      username.value = res.data.user.name;
    }catch{
      router.push('/add');
    }
    
    
  })
</script>

<template>

  <h1>Hello {{ username }}</h1>
</template>
