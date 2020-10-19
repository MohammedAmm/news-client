
<template>
  <div>
    <h1 class="text-center">Top Headlines</h1>
    <div class="radio-wrapper container-fluid">
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-1 pt-0">Country</legend>
          <div class="col-sm-8">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="eg"
                value="eg"
                v-model="country"
                v-on:change="onChange"
              />
              <label class="form-check-label" for="eg">EG</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="ae"
                value="ae"
                v-model="country"
                v-on:change="onChange"
              />
              <label class="form-check-label" for="ae">UAE</label>
            </div>
          </div>
          <legend class="col-form-label col-sm-1 pt-0">Category</legend>
          <div class="col-sm-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="sports"
                value="sports"
                v-model="category"
                v-on:change="onChange"
              />
              <label class="form-check-label" for="sports">Sports</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="business"
                value="business"
                v-model="category"
                v-on:change="onChange"
              />
              <label class="form-check-label" for="business">Business</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <template v-if="childDataLoaded">
        <news :initNews="newsDataList"></news>
    </template>

  </div>
</template>

<script>
import axios from "axios";
import news from "./News";

export default {
  name: "dashboard",
  components: {
    news,
  },
  data() {
    return {
      childDataLoaded: false,
      newsDataList: [],
      favorites: [],
      country: "eg",
      category: "business",
    };
  },
  async mounted() {
    //Getting top headlines based on user choice(country,category)
    await axios
      .get(`news?country=${this.country}&category=${this.category}`)
      .then((response) => {
        this.newsDataList = response.data.articles;
        this.childDataLoaded = true;
      })
      .catch(() => {
        alert("Couldn't connect to api!");
      });
    //Getting user's favorites
    // await axios.get(`favorites`).then((result)=>{
    //     this.favorites = result.data.data;
    //     }).catch(()=>{
    //       alert("Couldn't connect to api!")
    //     });
  },
  methods: {
    async onChange() {
      //Getting top headlines based on user choice(country,category)
      let response = await axios.get(
        `news?country=${this.country}&category=${this.category}`
      );
      this.newsDataList = response.data.articles;
    },
  },
  
};
</script>
