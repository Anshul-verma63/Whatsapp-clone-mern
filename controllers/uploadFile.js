import fileModel from "../models/fileModel.js";

export const uploadFile = async (req, res) => {
  try {
    const path = req.file.path;
    const name = req.file.originalname;

    const newFile = await new fileModel({ path: path, name: name }).save();

    const imageUrl = `http://localhost:8500/api/v1/user/file/${newFile._id}`;
    return res.status(200).json({ imageUrl, name });
  } catch (error) {
    return res.status({
      success: false,
      message: "Error while uoload file",
      error,
    });
  }
};

//get file
export const downloadFile = async (req, res) => {
  try {
    const file = await fileModel.findById(req.params.fileId);
    if (!file) {
      return res.status(400).send("Invalid Link");
    }

    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    res.status(404).send({
      error: "Somthing went wrong",
    });
  }
};
