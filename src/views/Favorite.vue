<template>
    <span>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <a href="#" v-if="isFavorited" @click.prevent="unFavorite(news)">
            <i  class="fa fa-heart"></i>
        </a>
        <a href="#" v-else @click.prevent="favorite(news)">
            <i  class="fa fa-heart-o"></i>
        </a>
    </span>
</template>

<script>
    import axios from "axios";
    export default {
        name: "favorite",
        props: ['news', 'favorited'],

        data: function() {
            return {
                isFavorited: '',
            }
        },

        mounted() {
            this.isFavorited = this.isFavorite === 'true' ? true : false;
        },

        computed: {
            isFavorite() {
                return this.favorited;
            },
        },

        methods: {
            favorite(news) {
                axios.post('/favorites',{
                    "title" : news.title,
                    "author" : news.author,
                    "content" : news.content,
                    "url_to_image" : news.urlToImage,
                    "url" : news.url,
                    "published_at" : news.publishedAt,
                })
                    .then(this.isFavorited = true)
                    .catch((e)=>{
                        alert(e)
                    });
            },

            unFavorite(news) {
                axios.post('/favorites?_method=delete',{
                    "title" : news.title,
                })
                    .then( this.isFavorited = false)
                    .catch((e)=>{
                        alert(e)
                    });

            }
        }
    }
</script>