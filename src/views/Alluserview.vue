<script>
import userStore from '@/userStore.js';
import UserCard from '@/components/UserCard.vue'

   export default {
       data() {
         return {
             userStore : userStore(),
         }
   },
   components : {
      UserCard,
   }
}
</script>

<template>
     <div class="container mx-auto lg:px-28 mt-10">
       <div class="flex items-center justify-between lg:px-0 px-5">
         <div>
          <label class="font-semibold">ACTIVE USER ONLY</label>
          <input type="checkbox" class="ml-3 cursor-pointer" v-model="userStore.activeUserOnly">
        </div>
        <router-link to="/crate">
           <button class="font-bold bg-slate-600 p-3 rounded-lg text-white ">Create User</button>
        </router-link>
       </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <div v-for="user in userStore.activeUser" :key="user.id">
               <UserCard :user="user"></UserCard>
            </div>
        </div>
    </div>
</template>