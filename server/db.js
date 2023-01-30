const mongoose = require('mongoose');

module.exports = () => {
    const connecetionParams = {
        useNewurlParser: true,
        useUnifiedTopology: true
    };try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB, connecetionParams);
        console.log('Connection to database successfully');
    } catch (error) {
        console.log(error);
        console.log("Couldn't connect to database");
    }

}