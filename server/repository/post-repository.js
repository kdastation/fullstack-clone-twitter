const { Post } = require("../models/models");

class PostRepository {
  static async createPost(content, fileNameImg, userId) {
    const newPost = await Post.create({
      content,
      img: fileNameImg,
      userId,
    });
    return newPost;
  }
}

module.exports = PostRepository;
