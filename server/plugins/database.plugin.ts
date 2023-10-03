import { connect } from "mongoose";

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig();
  const mongooDbUri = config.mongooDbUri;
  const dbName = config.dbName;

  try {
    await connect(mongooDbUri, {
      dbName: dbName,
    });
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
});
