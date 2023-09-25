<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12 pa-5">
          <form @submit.prevent="signup">
            <h1 class="text-center mb-5">Sign Up</h1>
            <v-text-field v-model="name" label="Name" required></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-alert
              v-if="alertUser"
              class="mb-4"
              type="success"
              dismissible
              @input="alertUser = null"
            >
              {{ alertUser }}
            </v-alert>
            <v-btn color="primary" class="mr-4" type="submit">Submit</v-btn>
            <!-- <router-link to="/viewpost" class="text-decoration-none">
              <v-btn color="black" dark @click="navigateToViewPost">
                <v-icon start icon="mdi-account"></v-icon> Guest
              </v-btn>
            </router-link> -->
            <p class="text-center pt-5">
              Already have an account?
              <router-link to="/login">Login</router-link>
            </p>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      alertUser: null,
    };
  },

  methods: {
    async signup(e) {
      e.preventDefault();
      try {
        const dataToSend = {
          name: this.name,
          email: this.email,
          password: this.password,
        };

        console.log(dataToSend);

        const response = await axios.post(
          "http://10.0.10.211:3300/api/register",
          dataToSend,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        this.alertUser = response.data.message;
        // this.$refs.form.reset();
      } catch (error) {
        console.error("Error sending POST request:", error);
      }
    },

    navigateToViewPost() {
      // Navigation logic
    },
  },
};
</script>

<style scoped>
.elevation-12 {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
