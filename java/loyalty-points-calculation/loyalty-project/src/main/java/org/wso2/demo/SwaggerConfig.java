package org.wso2.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .paths(PathSelectors.ant("/loyalty/**"))
                .apis(RequestHandlerSelectors.basePackage("org.wso2.demo"))
                .build()
                .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Loyalty Points API", //title
                "Calculate Loyalty Points for Given User", //description
                "Version 1.0", //version
                "https://wso2.com/terms", //terms of service URL
                new Contact("Pamod Sylvester", "www.wso2.com", "pamod@wso2.com"),
                "Apache 2.0", "https://wso2.com/license", Collections.emptyList()); // contact info
    }
}
