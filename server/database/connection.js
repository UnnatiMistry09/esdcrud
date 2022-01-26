const mongoose = require('mongoose');
const dburl='mongodb+srv://unnati:unnati@cluster0.adyrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB