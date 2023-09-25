<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12 pa-5">
          <form @submit.prevent="login">
            <h1 class="text-center mb-5">Login</h1>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
            ></v-text-field>

            <v-btn color="primary" class="mr-4" type="submit">Login</v-btn>
            <!-- <router-link to="/viewpost" class="text-decoration-none"
              ><v-btn color="black" dark>
                <v-icon start icon="mdi-account"></v-icon> Guest
              </v-btn>
            </router-link> -->

            <p class="text-center pt-2">
              Don't have an account? <router-link to="/">Sign Up</router-link>
            </p>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios"; // Import Axios

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login(e) {
      e.preventDefault()
      try {
        // Create an object containing the data to send
        const dataToSend = {
          email: this.email,
          password: this.password,
        };

        console.log(dataToSend)

        // Send a POST request to the API endpoint using Axios
        const response = await axios.post(
          "http://10.0.10.211:3300/api/login",
          dataToSend,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data); // Log the response data

        if (response.status === 200) {
          const userData = response.data;

          // for token store
          localStorage.setItem("userToken", response.data.access_token);

          // for user id store
          localStorage.setItem("userId", response.data.user_id);

          if (
            this.email === "admin@gmail.com" &&
            this.password === "admin@123"
          ) {
            // Route to the admin dashboard
            this.$router.push({ path: "/admindashboard" });
          } else {
            // Route to the user dashboard
            this.$router.push({ path: "/userdashboard" });
          }
        } else {
          // Handle other status codes or errors
        }
      } catch (error) {
        console.error("Error sending POST request:", error);
      }
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