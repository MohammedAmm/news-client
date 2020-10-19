
<template>
  <div>
    <h1 class="text-center">My Favorites</h1>
    <template v-if="childDataLoaded">
        <news :initNews="newsDataList"></news>
    </template>

  </div>
</template>

<script>
import axios from "axios";
import news from "./News";

export default {
  name: "MyFavorites",
  components: {
    news,
  },
  data() {
    return {
      childDataLoaded: false,
      newsDataList: [],
      favorites: [],
    };
  },
  async mounted() {
    //Getting user's favorites
    await axios.get(`favorites`).then((result)=>{
        this.newsDataList = result.data.data;
        this.childDataLoaded = true;
        }).catch(()=>{
          alert("Couldn't connect to api!")
        });
  }
  
};
</script>
