<template>
  <form @submit.prevent="submit">
    <div>
      <label for="email"> Email </label>
      <input type="text" name="email" id="email" v-model="form.email" />
    </div>
    <div>
      <label for="name"> Name </label>
      <input type="text" name="name" id="name" v-model="form.name" />
    </div>
    <div>
      <label for="date_of_birth"> DOB </label>
      <input
        type="text"
        name="date_of_birth"
        id="date_of_birth"
        v-model="form.date_of_birth"
      />
    </div>
    <div>
      <button type="submit">Sign Up</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: "signup",
  components: {},
  data() {
    return {
      form: {
        email: "",
        name: "",
        date_of_birth: "",
      },
    };
  },
  methods: {
    async submit() {
        let response = await axios.post('auth/signup', this.form)
        this.$router.replace({
          name: 'signin'
        })
        console.log(response);
    },
  },
};
</script>
