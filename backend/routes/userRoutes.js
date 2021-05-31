import express from 'express';
import {
  getUserById,
  getUsers,
  updateUser,
  usercreate,
} from '../controllers/userControllers.js';

const router = express.Router();

//new User create new user
router.route('/createuser').post(usercreate);

//get usr by id
//update user by id
router.route('/userid/:id').get(getUserById).put(updateUser);

//get all user
router.route('/getUser').get(getUsers);
export default router;
