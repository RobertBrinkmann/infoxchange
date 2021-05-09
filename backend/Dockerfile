FROM php:7.4-fpm-alpine

# Install the extensions and composer
RUN docker-php-ext-install pdo pdo_mysql sockets
RUN curl -sS https://getcomposer.org/installer | php -- \
     --install-dir=/usr/local/bin --filename=composer

# Set the wroking dir
WORKDIR /app
COPY . /app

# Install composer packages
RUN composer install

# Serve it
CMD php artisan serve --host=0.0.0.0 --port=9000
EXPOSE 9000