<script setup lang="ts">
 

</script>

<template>
  <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> 
              <router-link to="/" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">Dashboard</span> </router-link>
                <div class="nav_list"> 
                  <router-link to="/" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Home</span> </router-link> 
                  <router-link to="/about" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">About</span> </router-link>
                  <router-link to="/add" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">Add</span> </router-link>
                </div>
            </div> 
            <router-link to="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </router-link>
        </nav>
    </div>
    <!--Container Main start-->
    <div class="height-100 bg-light">
        <router-view>

        </router-view>
        
    </div>
    <!--Container Main end-->
</template>

<style scoped>

</style>
