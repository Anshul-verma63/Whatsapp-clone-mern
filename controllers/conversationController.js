import conversationModel from "../models/conversationModel.js";

export const addConversation = async (req, res) => {
  try {
    const { receiverId, senderId } = req.body;

    const exist = await conversationModel.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (exist) {
      return res.status(501).send({
        success: false,
        messsage: "conversation already exist",
      });
    }
    const newConv = new conversationModel({
      members: [senderId, receiverId],
    });
    await newConv.save();
    return res.status(200).send({
      success: true,
      messsage: "conversation saved success",
    });
  } catch (error) {
    return res.status(501).send({
      success: false,
      messsage: "Error while set conversation",
      error,
    });
  }
};

//get conversation
export const getConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const conversation = await conversationModel.findOne({
      members: { $all: [receiverId, senderId] },
    });
    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(501).send({
      success: false,
      messsage: "Error while get conversation",
      error,
    });
  }
};

export const getRecentMessage = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const recentSms = await conversationModel.findOne({
      members: { $all: [receiverId, senderId] },
    });

    return res.status(200).json(recentSms);
  } catch (error) {
    return res.status(501).send({
      success: false,
      messsage: "Error while get reecent sms",
      error,
    });
  }
};
