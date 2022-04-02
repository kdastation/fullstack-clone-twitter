const { Post } = require("../models/models");

class PostRepository {
  static async createPost(content, fileNameImg) {
    const newPost = await Post.create({
      content,
      img: fileNameImg,
    });
    return newPost;
  }
}

module.exports = PostRepository;
