<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin" @submit.prevent="submit">
              <div class="form-label-group">
                <input type="email" name="email" id="email" v-model="form.email" class="form-control" placeholder="Email address" required autofocus>
                <label for="email"></label>
              </div>

              <div class="form-label-group">
                <input type="password" name="password" id="password" v-model="form.password" class="form-control" placeholder="Password" required>
                <label for="inputPassword"></label>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions} from 'vuex'

  export default {
    name: 'signin',
    components: {
    },
    data(){
      return {
        form: {
          email: '',
          password: ''
        }
      }

    },
    methods: {
      ...mapActions({
        signIn: 'auth/signIn'
      }),
      submit(){
        this.signIn(this.form).then(()=>{
          this.$router.replace({
            name: 'dashboard'
          })
        }).catch(()=>{
          alert("Invalid credentials failed to login!")
        })
      }
    }
  }
</script>

<style>
    .login-form {
      width: 500px;
      margin: 40px auto;
    }

    form {
      background-color: #eee;
      padding: 20px;
      text-align: center;
    }
</style>