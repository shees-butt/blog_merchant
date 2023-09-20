<template>
  <div>
    <Nav></Nav>
    <v-container class="h-screen mt-3">
      <!-- Title -->
      <h1 class="text-2xl font-semibold mb-4">Title of the Post</h1>

      <!-- Content -->
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        dignissim, nunc a vehicula auctor, dui libero vehicula ipsum,
        nec dictum quam est vel massa. Fusce consectetur eu ex id
        bibendum. Nullam eget dolor quis justo rhoncus tempor. Nullam
        eget lacinia quam. In vulputate turpis vel justo volutpat
        pretium. Fusce nec tristique massa.
      </p>

      <!-- Comment Section -->
      <div class="mb-4">
        <!-- Comment 1 -->
        <div class="mb-2">
          <strong>User 1:</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <!-- Comment 2 -->
        <div class="mb-2">
          <strong>User 2:</strong>
          <p>
            Nullam eget lacinia quam. In vulputate turpis vel justo volutpat pretium.
          </p>
        </div>

        <!-- Add more comments as needed -->
      </div>

      <!-- Post Comment -->
      <div class="mb-4">
        <textarea
          class="w-full h-16 border border-gray-300 rounded p-2"
          placeholder="Write your comment here..."
        ></textarea>
      </div>
      <v-btn @click="postComment" color="indigo-darken-1" dark tile type="submit">Add Comment</v-btn>
    
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";

const postComment = () => {
  // Add your logic to post the comment here
};
</script>

<style scoped></style>
