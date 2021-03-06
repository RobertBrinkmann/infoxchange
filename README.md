# Infoxchange Take-Home
Hello! This is a demo for Infoxchange to demonstrate Laravel + Vue JS.

## Installing & Running
- Run `git clone https://github.com/RobertBrinkmann/infoxchange.git`
- Copy/rename example.env to .env
  - Update `VUE_APP_OMDB_KEY` to your own OMDb key
- Navigate to `backend` and run `composer install`
- Navigate to `frontend` and run `npm install`
- Run `docker-compose up` in the root folder
- Run `docker-compose exec backend sh -c "php artisan key:generate && php artisan migrate && php artisan db:seed"`
- Visit https://localhost:8080/

### My Process
- Setup Laravel
  - composer create-project laravel/laravel backend
  - cd .\backend\
  - php artisan key:generate --ansi
- Setup Vue JS
  - vue create frontend
  - cd .\frontend\
  - npm install --save axios vue-axios vue-router@next
  - npm install --seve bootstrap @popperjs/core
  - npm install --save-dev sass sass-loader@^10
- Setup Dockerfiles + docker-compose.yaml, add a .env with example
  - docker-compose up
  - docker-compose run backend bash -c "php artisan key:generate && php artisan migrate && php artisan db:seed"
- Add the Vue JS routes and blank index/view pages to frontend
- Add a API service to the frontend
- Creat/style the index and view pages, including calls to the API service
  - Base it roughly off [Boostrap Album](https://getbootstrap.com/docs/5.0/examples/album/)
- Create Laravel backend models and API controllers/routes
  - php artisan make:model Activity -mc
- Create some Laravel tests
  - php artisan make:test ActivityTest
  - php artisan make:test ActivityTest --unit

### TODO:
- Add login and view in backend for search activity
