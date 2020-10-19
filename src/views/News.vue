<template>
  <div class="d-flex justify-content-between" style="flex-wrap: wrap">
    <div
      class="card mx-4 my-3"
      style="width: 18rem"
      v-for="newsData in newsDataList"
      :key="newsData.id"
    >
      <img class="card-img" :src="`${newsData.urlToImage}`" />
      <div class="d-flex align-items-center justify-content-between p-2">
        <div class="author-div">
          <span class="author">by: {{ newsData.author }}</span>
        </div>
        <div class="published">
          <span>{{ newsData.publishedAt | readableDate }}</span>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <span class="title"
            ><a :href="`${newsData.url}`">{{ newsData.title }}</a></span
          >
        </h5>
        <!-- <p class="card-text">{{newsData.content}}</p> -->
        <a class="btn btn-link favorite-icon">
          <favorite
            :news="newsData"
            :favorited="`${newsData.favorited}`"
          ></favorite>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import favorite from "./Favorite";

export default {
  name: "news",
  props: ["initNews"],
  data: function () {
    return {
      newsDataList: this.initNews,
    };
  },
  components: {
    favorite,
  },
  filters: {
    readableDate: function (value) {
      if (!value) return "";
      var ts = new Date(value);
      return ts.toLocaleString();
    },
  }
};
</script>
<style>
.favorite-icon {
  font-size: 22px;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: -1px 4px 5px 1px rgba(0, 0, 0, 0.52);
  background-color: #eee;
}

.card-img {
  height: 190px;
  margin-bottom: 10px;
}

.author {
  display: block;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-break: anywhere;
}
</style>