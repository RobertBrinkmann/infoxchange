<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Movie title keywords" aria-label="Search field" aria-describedby="button-search" v-model="keywords" v-on:keyup.enter="searchMovies(keywords, 0)">
                        <button class="btn btn-outline-secondary" type="button" id="button-search" @click="searchMovies(keywords, 0)">Search</button>
                    </div>
                </div>
            </div>
            <div class="row text-center" v-if="movies.length == 0">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <p class="fs-4 text-muted">{{message}}</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
                <div class="col" v-for="movie in movies" v-bind:key="movie">
                    <router-link :to="{name: 'movie', params: {id: movie.imdbID, keywords: search}}" tag="div" class="card shadow-sm card-movie d-flex flex-column" @click="selectMovie(movie.imdbID)">
                        <div class="card-image">
                            <img v-bind:src="movie.Poster" @error="errorImage(movie, $event)" v-if="movie.imageError == undefined"/>
                            <div class="image-error text-muted text-center" v-if="movie.imageError">Sorry, couldn't find the image</div>
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h3>{{movie.Title}}</h3>
                            <div class="card-info mt-auto d-flex justify-content-between">
                                <small class="text-muted mt-auto">{{movie.Type}}</small>
                                <small class="text-muted">Year {{movie.Year}}</small>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <nav class="p-5" aria-label="Movie results navigation">
                <ul class="pagination justify-content-center" v-if="totalResults > 10">
                    <li class="page-item" v-bind:class="{disabled: page == 0}"><button type="button" class="page-link" @click="searchMovies(keywords, page - 1)"><font-awesome-icon icon="angle-left"/></button></li>
                    <li class="page-item" v-for="index in pagination" v-bind:key="index" v-bind:class="{active: page == index}"><button type="button" class="page-link" @click="searchMovies(keywords, index)">{{index}}</button></li>
                    <li class="page-item" v-bind:class="{disabled: page == totalPages}"><button type="button" class="page-link" @click="searchMovies(keywords, page + 1)"><font-awesome-icon icon="angle-right" /></button></li>
                </ul>
                <div class="text-center text-muted" v-if="search">{{totalResults}} results found</div>
            </nav>
        </div>
    </div>
</template>

<script>
    import imdb from '@/api/omdb'
    import backend from '@/api/backend'

    function getPagingRange(current, {min = 1, total = 20, length = 5} = {}) {
        if (length > total) length = total;

        let start = current - Math.floor(length / 2);
        start = Math.max(start, min);
        start = Math.min(start, min + total - length);
        
        return Array.from({length: length}, (el, i) => start + i);
    }

    export default {
        data() {
            return {
                keywords: '',
                search: '',
                page: 0,
                movies: [],
                totalResults: 0,
                loading: false,
                message: 'Enter some details to search for a movie :)',
            }
        },
        computed: {
            totalPages: function() {
                return this.totalResults / 10;
            },
            pagination: function() {
                return getPagingRange(this.page, {
                    min: 0,
                    total: this.totalPages,
                    length: 10
                });
            }
        },
        methods: {
            searchMovies(search, page = 0) {
                if (search == this.search && page == this.page) {
                    return;
                }

                if (search != this.search) {
                    page = 0;
                    this.search = search;
                }

                this.page = page;
                this.message = '';
                this.loading = true;
                imdb.find(this.search, page)
                    .then(response => {
                        if (response.error != undefined) {
                            this.message = '[error] ' + response.error;
                            this.movies = [];
                            return;
                        }

                        this.movies = response.Search;
                        this.totalResults = response.totalResults;
                        if (!this.movies.length) {
                            this.message = 'Sorry, we couldn\'t find any movies for those search values.';
                        }
                    })
                    .finally(() => {
                        backend.postActivity({
                            search: this.search,
                            results: this.movies.length,
                            message: this.message
                        }).then(response => {
                            console.log(response);
                        })
                    });
            },
            errorImage(movie, error) {
                movie.imageError = error;
            }
        }
    }
</script>