<template>
    <div class="movie py-5 bg-light">
        <div class="container">
            <div class="row text-center" v-if="message != null">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <p class="fs-4 text-muted">{{message}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="movie-poster">
                        <img v-bind:src="movie.Poster" @error="errorImage(movie, $event)" v-if="movie.imageError == undefined"/>
                        <div class="poster-error text-muted text-center" v-if="movie.imageError">Sorry, couldn't find the image</div>
                    </div>
                </div>
                <div class="col">
                    <div class="movie-title d-flex justify-content-between">
                        <div class="mt-auto">
                            <h2 v-html="highlight(movie.Title)"></h2>
                        </div>
                        <div class="p-2">
                            <router-link :to="{name: 'home', params: { keywords: keywords }}" class="btn btn-dark">Back</router-link>
                        </div>
                    </div>
                    <div class="movie-info">
                        <div class="row">
                            <div class="col d-flex">
                                <div class="p-2 flex-fill">
                                    <b>Ratings:</b>
                                </div>
                                <div class="flex-fill">
                                    <div class="p-2" v-for="rating in movie.Ratings" v-bind:key="rating">
                                        <span class="text-muted">{{rating.Source}} - {{rating.Value}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-2">
                                    <b>Year: </b>
                                    <span class="text-muted">{{movie.Year}}</span>
                                </div>
                                <div class="p-2">
                                    <b>Runtime: </b>
                                    <span class="text-muted">{{movie.Runtime}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-plot p-3 bg-dark text-light" v-html="highlight(movie.Plot)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import imdb from '@/api/omdb';

	export default {
        data() {
            return {
                keywords: '',
                message: null,
                movie: {
                    Title: '',
                    Year: '',
                    Rated: '',
                    Released: '',
                    Runtime: '',
                    Genre: '',
                    Director: '',
                    Writer: '',
                    Actors: '',
                    Plot: '',
                    Language: '',
                    Country: '',
                    Awards: '',
                    Poster: '',
                    Ratings: [],
                    Metascore: '',
                    imdbRating: '',
                    imdbVotes: '',
                    imdbID: '',
                    Type: '',
                    DVD: '',
                    BoxOffice: '',
                    Production: '',
                    Website: '',
                    Response: ''
                }
            }
        },
        beforeMount() {
            this.keywords = this.$route.params.keywords;
            this.getMovie(this.$route.params.id);
        },
        methods: {
            getMovie(imdbID) {
                if (imdbID == '') {
                    return;
                }

                this.message = null;
                this.loading = true;
                imdb.get(imdbID)
                    .then(response => {
                        if (response.error != undefined) {
                            this.message = '[error] ' + response.error;
                            return;
                        }

                        this.movie = response;
                    });
            },
            errorImage(movie, error) {
                movie.imageError = error;
            },
            highlight(content) {
                if (!this.keywords || !content) {
                    return content;
                }
                console.log('content: ', content);
                return content.replace(new RegExp(this.keywords, "gi"), match => {
                    return '<span class="bg-info">' + match + '</span>';
                });
            }
        }
    }
</script>