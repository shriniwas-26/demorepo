# Use OpenJDK base image
FROM openjdk:17

# Set working directory
WORKDIR /app

# Copy Java file into container
COPY Demo.java .

# Compile the Java file
RUN javac Demo.java

# Run the Java program
CMD ["java", "Demo"]