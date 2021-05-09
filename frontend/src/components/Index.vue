<template>
    <div>
		<section class="py-5 text-center container">
			<div class="row py-lg-5">
				<div class="col-lg-6 col-md-8 mx-auto">
					<h1 class="fw-light">IMDB Example</h1>
					<p class="lead text-muted">This is a basic Laravel + Vue JS project to showcase a API connection to IMDB an retrieve a list of movies.</p>
				</div>
			</div>
		</section>
		<section>
			<imdb-index></imdb-index>
		</section>
    </div>
</template>

<script>
	import index from './imdb/Index';

    export default {
		components: {
			'imdb-index': index
		}
    }
</script>