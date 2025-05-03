const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { sendRequest, acceptRequest,  cancelOrRejectRequest,  getIncomingRequests,  getSentRequests,  getFriends,  removeFriend } = require('../controllers/friendsController');

// Friend request actions
router.post('/request/:id', auth, sendRequest);              // send a friend request
router.post('/accept/:id', auth, acceptRequest);             // accept a request
router.delete('/request/:id', auth, cancelOrRejectRequest);  // reject or cancel a request

// Get requests
router.get('/requests/incoming', auth, getIncomingRequests);
router.get('/requests/sent', auth, getSentRequests);

// Friend list & actions
router.get('/', auth, getFriends);                  // get friends
router.delete('/remove/:id', auth, removeFriend);   // unfriend someone

module.exports = router;
