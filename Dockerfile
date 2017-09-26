FROM java:8-jdk

WORKDIR /home/apps/
ADD target/zzz-1.0.0.jar .
ADD target/lib ./lib
ADD start.sh .
EXPOSE 8080

ENTRYPOINT ["sh", "/home/apps/start.sh"]
