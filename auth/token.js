// api.js
// route 등록
const AuthTokenController = require('../controllers/api/v1/AuthTokenController');
route.post('/auth/tokens', AuthTokenController.create);