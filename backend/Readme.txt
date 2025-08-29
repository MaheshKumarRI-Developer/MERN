refer URL
    - https://mongoosejs.com/docs/guide.html

1. Create a folder (eg:backend)

2. Inside the folder in terminal
    In terminal:
        for package.json
            - npm init or npm init -y
        for express install
            - npm express
        for continuous output without abort of the terminal
            - npm install -g nodemon
        for env use 
            - npm install dotenv
        for start
            - npm start

3. Getting the connection string
    - Create a free account in cloud.mongodb website 
    - If your a first time user there will be configuration setup.
    - Build a database for that select free tier
    - Then click create there will be "userName" and "password" auto generate we can change if we want
    - Click connect then you will find the connection string copy that and paste it in the .env file for security reason
    change the password and username in the URI
    - There will default first IP will be set in the network access for security reason we need to change the IP of the wifi
    or any network which we have connected, To avoid that we can set to anywhere for only developing after that we can switch
    it back to IP.

4. Connecting the mongodb
    - Install the mongoose library (npm)
    - Import the mongoose and connect the mongooDB add the success and failure message