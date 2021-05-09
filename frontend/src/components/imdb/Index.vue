<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Movie title keywords" aria-label="Search field" aria-describedby="button-search" v-model="search" v-on:keyup.enter="searchMovies()">
                        <button class="btn btn-outline-secondary" type="button" id="button-search" @click="searchMovies()">Search</button>
                    </div>
                </div>
            </div>
            <div class="row text-center" v-if="movies.length == 0">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <p class="fs-4 text-muted">{{message}}</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                <div class="col" v-for="movie in movies" v-bind:key="movie">
                    <div class="card shadow-sm card-movie d-flex flex-column" @click="selectMovie(movie.imdbID)">
                        <div class="card-image">
                            <img v-bind:src="movie.Poster" />
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h3>{{movie.Title}}</h3>
                            <div class="mt-auto text-end">
                                <small class="text-muted">Year {{movie.Year}}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import imdb from '@/api/omdb'

    export default {
        data() {
            return {
                search: '',
                movies: [],
                loading: false,
                message: 'Enter some details to search for a movie :)',
            }
        },
        created() {
        },
        methods: {
            // TODO
            searchMovies() {
                if (this.search == '') {
                    return;
                }

                this.message = '';
                this.loading = true;
                imdb.find(this.search)
                    .then(response => {
                        if (response.error != undefined) {
                            this.message = '[error] ' + response.error;
                            this.movies = [];
                            return;
                        }

                        this.movies = response.Search;
                        if (!this.movies.length) {
                            this.message = 'Sorry, we couldn\'t find any movies for those search values.';
                        }
                    })
                    .finally({
                        // TODO: Send something ot the backend API [this.search, this.movies.length, this.message]
                    });
            }
        }
    }
</script>