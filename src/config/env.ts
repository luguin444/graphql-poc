import { resolve } from "path";
import { config } from "dotenv";

if (process.env.NODE_ENV === "development") {
  config({ path: resolve(__dirname, "../../.env.development") });
}
if (process.env.NODE_ENV === "test") {
  config({ path: resolve(__dirname, "../../.env.test") });
}
if (process.env.NODE_ENV === "production") {
  config({ path: resolve(__dirname, "../../.env.production") });
}
