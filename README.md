# Infoxchange Take-Home
Hello! This is a demo for Infoxchange to demonstrate Laravel + Vue JS.

## Running
- git clone https://github.com/RobertBrinkmann/infoxchange.git
- copy/rename example.env to .env, update to include private OMDb key
- visit https://localhost:8080/

## Process
- Setup Laravel
  - composer create-project laravel/laravel backend
  - cd .\backend\
  - php artisan key:generate --ansi
- Setup Vue JS
  - vue create frontend
  - cs .\frontend\
  - npm install --save axios vue-axios vue-router@next
  - npm install --seve bootstrap @popperjs/core
  - npm install --save-dev sass sass-loader@^10

## TODO:
- Setup Dockerfiles + docker-compose.yaml, add a .env with example
- Add containers for backend, frontend, database
- Add the Vue JS routes and blank index/view pages to frontend
- Add a API service to the frontend, including unit testing
- Creat/style the index and view pages, including calls to the API service
  - Base it roughly off [Boostrap Album](https://getbootstrap.com/docs/5.0/examples/album/)
- Create Laravel backend models and API controllers/routes
  - php artisan make:model Activity -mc
  - php artisan make:test ActivityTest --unit