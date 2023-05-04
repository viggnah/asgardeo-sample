# Frontend

Stock App is a React App that has only 2 pages:
* Home page with login
* Items listing page that calls an API from the [spring backend](https://github.com/viggnah/asgardeo-sample/tree/v1.0/spring-backend)

## Configuration

`react-frontend/src/constants/config.js` file contains the configuration:

```
export const AsgardeoConfig = {
  signInRedirectURL: "http://<HOST>:<PORT>", (use default http://locahost:3000)
  signOutRedirectURL: "http://<HOST>:<PORT>", (use default http://locahost:3000)
  clientID:"<CLIENT_ID>",
  baseUrl: "<BASE_URL>",
  scope: ["openid", "profile"]
};

//Backend service host and port
export const Hosts = {
  host: "http://<BE_HOST>:<BE_PORT>" (use default http://locahost:8080)
};
```

`<HOST>` - Name of the host in which the app is running. \
`<PORT>` - Port of the app. \
`<CLIENT_ID>` - Client ID of the app (Taken from Asgardeo). \
`<BASE_URL>` - Base URL of the Asgardeo instance (depending on the organization created). \
`<BE_HOST>` - Name of the host in which the Spring Boot service is running. \
`<BE_PORT>` - Port of the Spring Boot Service.

## Build & Run the Service

Execute the following command inside the */react-frontend* folder

```
npm install && npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Backend

This Spring Boot service returns some hardcoded data:
* `GET /items/all` - Returns a map of Items

## Configuration

`spring-backend/src/main/resources/application.properties` file contains the configuration:

```
spring.mvc.pathmatch.matching-strategy=ant_path_matcher

app.security.cors.origin=http://localhost:3000

spring.security.oauth2.resourceserver.jwt.jwk-set-uri=<JWKS endpoint>
spring.security.oauth2.resourceserver.jwt.issuer-uri=<Issuer URI endpoint>

logging.level.org.springframework.security=DEBUG
```

`JWKS endpoint` - JWKS endpoint of the Asgardeo instance. \
`Issuer URI endpoint` - Issuer URI endpoint of the Asgardeo instance.

## Build & Run the Service

Execute the following command inside the */spring-backend* folder

```
mvn spring-boot:run
```
*Tested on Java 11*
