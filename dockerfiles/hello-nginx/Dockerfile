FROM nginx:1.17

RUN mkdir /data
RUN ln -sf /data/access.log /var/log/nginx/access.log \
	&& ln -sf /data/error.log /var/log/nginx/error.log
