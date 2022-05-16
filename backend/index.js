const app = require("./app");
const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log({ error });
    throw new Error(error);
  }
};
const port = process.env.PORT || 3264;
app.listen(port, async () => {
  await connectToDB();
  console.log(`Server started on ${port}`);
});
