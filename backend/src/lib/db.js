import mongoose from 'mongoose'

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected')
    }catch(err){
        console.log("error in connecting to database")
        console.log(err)
        process.exit(1)   // 1 means failure
    }
}

export default connectDB