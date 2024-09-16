import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
  destination(req, file, db) {
    db(null, "/uploads");
  },
  filename(req, file, db) {
    db(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, db) {
  const filetypes = /jpe?g|png|webp/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return db(null, true);
  } else {
    db("Images only");
  }
}

const upload = multer({
  storage,
});

router.post("/", upload.single("image"), (req, res) => {
  res.send({
    message: "Image Uploaded",
    image: `/${req.file.path}`,
  });
});
export default router;
