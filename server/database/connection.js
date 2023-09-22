import mongoose from "mongoose";

const connection = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true, // Use the new URL parser
            useUnifiedTopology: true,  // Use the new server discovery and monitoring engine
        })
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        throw error // Re-throw the error to propagate it to the caller
    }
}

export { connection }