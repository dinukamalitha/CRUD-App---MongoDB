const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

//SAVE

router.post('/post/save', async (req, res) => {

    try{
        const newPost = new Posts(req.body);
        await newPost.save();
        return res.status(200).json({
            success: "Post saved Successfully"
        });
    }catch(err){
        return res.status(400).json({
            error: err.message
        });
    }
});

//GET

router.get('/post', async (req, res) => {
    try {
      const posts = await Posts.find().exec();
      return res.status(200).json({
        success: true,
        existingPosts: posts
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
});
  
//PUT

router.put('/post/update/:id', async (req, res) => {
    try {
      const updatedPost = await Posts.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        { new: true }
      );
  
      if (!updatedPost) {
        return res.status(404).json({
          error: "Post not found"
        });
      }
  
      return res.status(200).json({
        success: "Updated Successfully"
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  });


//delete

router.delete('/post/delete/:id', async (req, res) => {
    try {
      const deletedPost = await Posts.findByIdAndRemove(req.params.id).exec();
  
      if (!deletedPost) {
        return res.status(404).json({
          message: "Delete Unsuccessful: Post not found"
        });
      }
  
      return res.json({
        message: "Delete Successful",
        deletedPost
      });
    } catch (error) {
      return res.status(400).json({
        message: "Delete Unsuccessful",
        error: error.message
      });
    }
});
  

module.exports = router;