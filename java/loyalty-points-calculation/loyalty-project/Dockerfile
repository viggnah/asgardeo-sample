FROM eclipse-temurin:11 as build
WORKDIR /workspace/app

ARG USERNAME=USER
ARG USER_UID=10004
ARG USER_GID=$USER_UID

# Create the user and apply permissions
#RUN groupadd --gid $USER_GID $USERNAME \
#    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USER_UID \
#
# [Optional] Add sudo support. Omit if you don't need to install software after connecting.
#    && apt-get update \
#    && apt-get install -y sudo \
#    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
#    && chmod 0440 /etc/sudoers.d/$USERNAME
#USER root
RUN chown -R $USER_UID /workspace/app
USER $USER_UID

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN ./mvnw install -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

FROM eclipse-temurin:11
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/target/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","org.wso2.demo.Main"]
EXPOSE 8080
