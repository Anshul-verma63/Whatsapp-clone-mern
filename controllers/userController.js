import userModel from "../models/userModel.js";

export const addUserController = async (req, res) => {
  try {
    const findUser = await userModel.findOne({ sub: req.body.sub });
    if (findUser) {
      return res.status(200).send({
        message: "user already exist",
      });
    }
    const newUser = new userModel(req.body);
    await newUser.save();
    return res.status(200).send({
      success: true,
      message: "user saved success",
      newUser,
    });
  } catch (error) {
    return res.status(501).send({
      success: false,
      message: "Error while add user",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(501).send({
      success: false,
      message: "Error while get users",
    });
  }
};
