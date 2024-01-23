<script>
import userStore from "@/userStore.js";

export default {
    props: {
        type: {
            type: String,
            required: true,
            validator: (value) => {
                return value === 'create' || value === 'edit';
            }
        }
    },
    data() {
        return {
            userStore: userStore(),
            user: {
                id: null,
                name: "",
                avatar: "",
                email: "",
                phone: "",
                address: "",
                site: "",
                birthday: "",
                isActive: false,
            },
        };
    },
    mounted() {
        if (this.type === 'create') {
            return;
        }
        const userID = Number(this.$route.params.id);
        const extestingUser = this.userStore.users.find(user => user.id === userID);
        if (extestingUser) {
            this.user.id = extestingUser.id;
            this.user.name = extestingUser.name;
            this.user.email = extestingUser.email;
            this.user.avatar = extestingUser.avatar;
            this.user.phone = extestingUser.phone;
            this.user.address = extestingUser.address;
            this.user.site = extestingUser.site;
            this.user.birthday = extestingUser.birthday;
            this.user.active = extestingUser.active;
        }
        else {
            alert('User Not Found');
            this.$router.push('/');
        }
    },
    methods: {
        addUser() {
            this.user.id = this.userStore.users.id + 1;
            this.userStore.createUser(this.user);
            this.$router.push('/');
        },
        editUser() {
            this.userStore.updateUser(this.user);
            this.$router.push('/');
        }
    },
};
</script>

<template>
  <div class="container mx-auto lg:px-32 lg:my-32">
    <form class="p-5 shadow-xl rounded-none lg:rounded-lg mt-32 border" @submit.prevent="type === 'create' ? addUser() : editUser() ">
     <h1 class="text-xl font-semibold text-sky-500">{{ type === 'create' ? 'Create' : 'Edit' }} Form</h1>
      <div class="grid grid-cols-2">
        <div
          class="mr-3 *:mt-5 *:font-semibold *:p-3 *:w-full *:border-2 *:focus:outline-none *:border-black *:rounded-lg"
        >
          <input type="text" placeholder="Your Name" v-model="user.name" required  />
          <input type="url" placeholder="Your Avatar" v-model="user.avatar" required />
          <input type="text" placeholder="Your Address" v-model="user.address" required />
        </div>
        <div
          class="*:mt-5 *:font-semibold *:p-3 *:w-full *:border-2 *:focus:outline-none *:border-black *:rounded-lg"
        >
          <input type="email" placeholder="Your Email" v-model="user.email" required />
          <input type="tel" placeholder="Your Phone" v-model="user.phone" required />
          <input type="url" placeholder="Your Website" v-model="user.site" required />
        </div>
      </div>
      <div>
        <label class="mt-5 text-gray-400 block font-semibold"
          >Your Birthday</label
        >
        <input
          type="date"
          placeholder="Your Birthday"
          class="mt-3 border-2 border-black p-3 w-full rounded-lg font-semibold"
          v-model="user.birthday"
          required
        />
      </div>
      <div class="flex items-center mt-5">
        <label class="block font-semibold mr-5">IsActive</label>
        <input type="checkbox" class="cursor-pointer" v-model="user.isActive"/>
      </div>
        <button type="submit" class="bg-sky-500 mr-3 text-white font-semibold p-3 w-full mt-5 rounded-lg">{{ type === 'create' ? 'Create' : 'Update' }} User</button>
        <router-link to="/">
            <button  class="bg-sky-500 w-full text-white font-semibold p-3 mt-5 rounded-lg">Cancel</button>
        </router-link>
    </form>
  </div>
</template>
