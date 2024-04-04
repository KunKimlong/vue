<script lang="ts" setup>
import axios from "axios";


import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref('');
const password = ref('');
const router = useRouter();
const handdleSubmit = async ()=>{
    const res = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/login',
        data: {
            email:email.value,
            password:password.value,
        },
        headers:{'Content-Type':'application/json'},
        withCredentials:true,
    });
    const token = res.data.token;
    console.log(token);
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(res);
    router.push('/');
}


</script>
<template>
    <form action="" @submit.prevent="handdleSubmit" class="col-5 mx-auto">
        {{ email }} {{ password }}
        <input type="text" name="" v-model="email" class="form-control my-2" placeholder="Email:" id="first-name">
        <input type="text" name="" v-model="password" class="form-control my-2" placeholder="Password:" id="">
        <button class="btn btn-success">Submit</button>
    </form>
</template>