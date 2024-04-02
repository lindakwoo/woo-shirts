import mongoose from "mongoose";

const connectToDatabase = async () => {
	try {
		mongoose.set('strictQuery', false);
    console.log('env', process.env.MONGO_URI)
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`MongoDb Connected: ${connect.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
};

export default connectToDatabase;