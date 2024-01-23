<script>
import userStore from "@/userStore.js";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userStore: userStore(),
    };
  },
  methods: {
    editUser() {
      this.$router.push(`/edit/${this.user.id}`);
    },
    deleteUser() {
      const _confirm = confirm("Are You Sure Want To Delete This User ?");
      if (_confirm === true) {
        this.userStore.deleteUser(this.user.id);
      }
    },
  },
};
</script>

<template>
  <div class="lg:my-5 lg:ml-3 md:ml-3 md:my-5">
    <!-- card -->
    <div class="w-full shadow-xl rounded-lg overflow-hidden p-5 border mb-5">
      <div class="flex items-center justify-center relative">
        <img
          :src="user.avatar"
          class="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          alt="..."
        />
        <div
          class="w-7 h-7 bg-blue-500 rounded-full absolute bottom-2 lg:bottom-0 right-28 lg:right-24 flex items-center justify-center"
        >
          <i class="fa-solid fa-check text-white"></i>
        </div>
      </div>
      <!-- card body -->
      <div class="p-3">
        <h5 class="text-sky-500 font-semibold text-xl mb-2 text-center">
          {{ user.name }}
        </h5>
        <a
          :href="'tel:' + user.phone"
          class="font-semibold text-center block text-gray-500 mt-1"
        >
          {{ user.phone }}
        </a>
        <a
          :href="'mailto:' + user.mail"
          class="font-semibold text-center block text-blue-500 mt-1"
        >
          {{ user.email }}
        </a>
        <p class="font-semibold text-center text-gray-500 mt-1">
          {{ user.address }}
        </p>
        <a
          :href="user.site"
          class="font-semibold text-center block text-blue-500 mt-1"
        >
          {{ user.site }}
        </a>
        <p class="font-semibold text-center text-gray-500 mt-1">
          {{ user.birthday }}
        </p>
        <p class="font-semibold text-center text-gray-500 mt-1">
          Active : 
          <div class="w-3 h-3 rounded-full bg-green-500 inline-block ml-3" v-show="user.isActive === true"></div>
          <div class="w-3 h-3 rounded-full bg-red-500 inline-block ml-3"  v-show="user.isActive === false"></div>
        </p>
        <div class="mt-10 flex">
          <button
            @click="editUser"
            class="w-full bg-sky-500 mr-3 text-white p-3 rounded-lg font-semibold hover:bg-slate-500 duration-500"
          >
            Edit User
          </button>
          <button
            @click="deleteUser"
            class="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-slate-500 duration-500"
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
