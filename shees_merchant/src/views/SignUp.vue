<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12 pa-5">
          <form @submit.prevent="submit">
            <h1 class="text-center mb-5">Sign Up</h1>
            <v-text-field
              v-model="name.value.value"
              :counter="10"
              :error-messages="name.errorMessage.value"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              label="Password"
              type="password"
              required
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :error-messages="confirmPasswordError"
              label="Confirm Password"
              type="password"
              required
            ></v-text-field>

            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="E-mail"
              required
            ></v-text-field>

            <v-checkbox
              v-model="checkbox.value.value"
              :error-messages="checkbox.errorMessage.value"
              value="1"
              label="Do you agree?"
              required
            ></v-checkbox>

            <v-btn color="primary" class="mr-4" type="submit">Submit</v-btn>

            <v-btn @click="handleReset" color="error">Clear</v-btn>

            <p class="text-center pt-5">Already have an account? <router-link to="/login">Login</router-link></p>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 6) return true;

      return "Name needs to be at least 6 characters.";
    },
    password(value) {
      if (value?.length >= 8) return true;

      return "Password needs to be at least 8 characters.";
    },
    confirmPassword(value) {
      if (value === password.value.value) return true;

      return "Passwords do not match.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    checkbox(value) {
      if (value === "1") return true;

      return "Must be checked.";
    },
  },
});
const name = useField("name");
const password = useField("password");
const email = useField("email");
const select = useField("select");
const checkbox = useField("checkbox");

const confirmPassword = ref("");
const confirmPasswordError = computed(() => {
  if (confirmPassword.value === password.value.value) return "";

  return "Passwords do not match.";
});

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<style scoped>
  .elevation-12 {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
</style>
