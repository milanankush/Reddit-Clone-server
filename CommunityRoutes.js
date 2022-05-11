import express from "express";
import Community from "./models/Community.js";
import { getUserFromToken } from "./UserFunctions.js";
const router = express.Router();

router.post("/communities", (req, res) => {
  const { name, slogan, avatar, cover } = req.body;
  Community.exists({ name }).then((exists) => {
    if (exists) {
      res.json("");
    } else {
      getUserFromToken(req.cookies.token).then((userInfo) => {
        const community = new Community({
          name,
          slogan,
          avatar,
          cover,
          author: userInfo.username,
        });
        community.save().then(() => {
          res.status(201).json("");
        });
      });
    }
  });
});

router.get("/communities/:name", (req, res) => {
  const { name } = req.params;
  Community.findOne({ name }).then((c) => {
    res.json(c);
  });
});

export default router;
