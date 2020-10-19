<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">News App</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav w-100">
        <template v-if="authenticated">
            <li class="nav-item ml-auto" style="line-height: 40px">
            <router-link
              :to="{
                name: 'dashboard',
              }"
            >
              Headlines
            </router-link>
          </li>
          <li class="nav-item ml-auto" style="line-height: 40px">
            <router-link
              :to="{
                name: 'favorites',
              }"
            >
              My Favorites
            </router-link>
          </li>
          <li class="nav-item ml-auto" style="line-height: 40px">
            {{ user.name }}
          </li>
          <li class="nav-item ml-4">
            <a
              style="cursor: pointer"
              class="nav-link"
              @click.prevent="signOut"
            >
              SignOut
            </a>
          </li>
        </template>
        <template v-else>
          <li class="nav-item ml-auto mr-3">
            <router-link
              :to="{
                name: 'signin',
              }"
            >
              SignIn
            </router-link>
          </li>
          <li clas="nav-item">
            <router-link
              :to="{
                name: 'signup',
              }"
            >
              SignUp
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
      //Using getters from state management(vuex) to get authenticated user.
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions({
      //Using actions from state management(vuex) to logout authenticated user.
      signOutAction: "auth/signOut",
    }),

    signOut() {
      this.signOutAction().then(() => {
        //Redirect user to sign in page after signout.
        this.$router.replace({
          name: "signin",
        });
      });
    },
  },
};
</script>