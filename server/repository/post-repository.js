const { Post } = require("../models/models");

class PostRepository {
  static async createPost(content, img) {
    const newPost = await Post.create({
      content,
      img,
    });
    return newPost;
  }

  static async createPostWithOutImg(content) {
    const newPost = await Post.create({ content });
    return newPost;
  }
}

module.exports = PostRepository;
