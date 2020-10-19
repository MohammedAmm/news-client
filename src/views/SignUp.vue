<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign Up</h5>
            <form class="form-signin" @submit.prevent="submit">
              <div class="form-label-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
                <label for="email"></label>
              </div>

              <div class="form-label-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="form.name"
                  class="form-control"
                  placeholder="Name"
                  required
                />
                <label for="inputPassword"></label>
              </div>

              <div class="form-label-group">
                <input
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                  pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                  v-model="form.date_of_birth"
                  required
                />
                <label for="date_of_birth"></label>
              </div>
                <br>

              <button
                class="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
      let response = await axios.post("auth/signup", this.form).catch((e) => {
        var obj = e.response.data.errors;
        var result = Object.keys(obj).map(
          (key) => key + ": " + obj[key] + "\n"
        );
        alert(result);
      });
      if (response && response.status == 200) {
        this.form.name = this.form.email = this.form.date_of_birth = "";
        alert("Registered successfully, please check you email.");
      }
    },
  },
};
</script>
