const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const chatController = require("../controllers/chatController")

// // Create new chat or get existing between 2 users
// router.post('/start', auth, async (req, res) => {
//   const { receiverId } = req.body;

//   let chat = await Chat.findOne({ members: { $all: [req.user, receiverId] } });
//   if (!chat) {
//     chat = new Chat({ members: [req.user, receiverId] });
//     await chat.save();
//   }
//   res.json(chat);
// });

// // Get all chats for user
// router.get('/', auth, async (req, res) => {
//   const chats = await Chat.find({ members: req.user });
//   res.json(chats);
// });

  // Create chat
router.post('/start', auth, chatController.createChat);


// Get all chats
router.get('/', auth, chatController.getAllChats);

module.exports = router;

//----------------------------------------------------------------------------------------
// POST /api/chats/:chatId/message
//✅ Socket send should also trigger this route via frontend to persist messages.
router.post('/:chatId/message', auth, async (req, res) => {
    const { text } = req.body;
    const chat = await Chat.findById(req.params.chatId);
  
    if (!chat || !chat.members.includes(req.user)) {
      return res.status(403).json({ msg: 'Unauthorized or chat not found' });
    }
  
    const message = { sender: req.user, text };
    chat.messages.push(message);
    await chat.save();
  
    res.json(message);
  });
//--------------------------------------------------------------------------
