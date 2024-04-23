import conversationModel from "../models/conversationModel.js";
import messageModel from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const newMessage = new messageModel(req.body);
    await newMessage.save();
    //apdate latest message
    await conversationModel.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });

    return res.status(200).send({
      success: true,
      message: "message has been send success",
    });
  } catch (error) {
    return res.status(501).send({
      success: false,
      message: "Error while send sms",
      error,
    });
  }
};

//get message
export const getMessage = async (req, res) => {
  try {
    const messages = await messageModel.find({
      conversationId: req.params.id,
    });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(501).send({
      success: false,
      message: "Error while get sms",
      error,
    });
  }
};
