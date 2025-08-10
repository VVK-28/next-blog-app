import mongoose from "mongoose";

export const ConnectDB = async ()  => {
    await mongoose.connect('mongodb+srv://naruto02122004:YzrqTJUACqTiLOW0@cluster0.z4j563w.mongodb.net/blog-app')
    console.log("DB Connected");
}
