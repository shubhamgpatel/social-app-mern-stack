const Chat = require('../models/Chat');

exports.createChat = async (req, res) => {
    try {
        const { receiverId } = req.body;

        let chat = await Chat.findOne({ members: { $all: [req.user, receiverId] } });
        if (!chat) {
          chat = new Chat({ members: [req.user, receiverId] });
          await chat.save();
        }
        res.json(chat);
    } catch (error) {
    res.status(500).json({ msg: 'Error creating Chat' });
        
    }
}
// Get all Chats
exports.getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find({ members: req.user });
  res.json(chats);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching chats' });
  }
};
