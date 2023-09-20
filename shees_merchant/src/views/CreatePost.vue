<template>
  <div>
    <Nav></Nav>
    <div class="h-screen">
    <p class="text-h4 font-weight-bold text-center mt-10 mb-10">
      Create Your Blog Post
    </p>

    <v-responsive class="mx-auto" max-width="80vw">
      <v-text-field
        outlined
        dense
        color="blue"
        label="Blog Title Here"
        type="input"
      ></v-text-field>

      <v-textarea
        outlined
        dense
        color="blue"
        label="Content"
        rows="14"
      ></v-textarea>

      <v-btn color="indigo-darken-1" dark block tile type="submit">Publish Post</v-btn>
    </v-responsive>
    </div>
    <Footer></Footer>
  </div>
</template>


<script setup>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
</script>
<style scoped></style>