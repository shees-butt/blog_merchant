<template>
  <div>
    <Nav></Nav>
    <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col
        v-for="n in 2"
        :key="n"
        cols="12"
        sm="6"
      >
        <v-sheet class="ma-2 pa-2">
          <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          OVERLINE
        </div>
        <div class="text-h6 mb-1">
          User
        </div>
        <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn variant="outlined">
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
    <Footer></Footer>
  </div>
</template>
<script setup>
//
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
</script>