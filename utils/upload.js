// import mongoose from "mongoose";
// import multer from "multer";
// import { GridFsStorage } from "multer-gridfs-storage";
// import dotenv from "dotenv";
// dotenv.config();

// const connection = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URI);
//   } catch (error) {
//     console.log(`Error while connect databsae`);
//   }
// };
// const storage = new GridFsStorage({
//   db: connection(),
//   url: process.env.DB_URI,
//   file: (req, file) => {
//     const match = ["image/png", "image/jpg"];

//     if (match.indexOf(file.mimeType) === -1) {
//       return `${Date.now()}-file-${file.originalname}`;
//     }

//     return {
//       backetName: "photos",
//       filename: `${Date.now()}-file-${file.originalname}`,
//     };
//   },
// });

// export default multer({ storage });

import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory = "./uploads";
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
    cb(null, directory);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()} - ${file.originalname}`;
    cb(null, fileName);
  },
});

export default multer({ storage });
