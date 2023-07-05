FROM nginx

EXPOSE 80

# Delete the default welcome to nginx page.
RUN rm /usr/share/nginx/html/*

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./views/index.ejs /usr/share/nginx/html/index.ejs
