import express from "express";
import{
    getUser,
    getUserFriends,
    addRemoveFriends,
} from "../controller/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id",verifyToken,getUser); //include verifyToken middleware to include auth. 
router.get("/:id/friends",verifyToken,getUserFriends);

/* UPDATE */

router.patch("/:id/friendId",verifyToken,addRemoveFriend);

export default router;