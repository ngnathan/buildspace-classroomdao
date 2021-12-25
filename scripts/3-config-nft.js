import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC38852e06c5685782A3DE030821Ca93dDe84a8a6",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Learning Station",
        description: "This NFT will give you access to ClassroomDAO!",
        image: readFileSync("scripts/assets/ClassroomDAO_membership.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()