# Infoxchange Take-Home
Hello! This is a demo for Infoxchange to demonstrate Laravel + Vue JS.

## Running
- git clone https://github.com/RobertBrinkmann/infoxchange.git
- copy/rename example.env to .env, update to include private OMDb key
- docker-compose up
- docker-compose run backend bash -c "php artisan key:generate && php artisan migrate && php artisan db:seed"
- visit https://localhost:8080/

## Process
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

## TODO:
- Create Laravel backend models and API controllers/routes
  - php artisan make:model Activity -mc
  - php artisan make:test ActivityTest --unit