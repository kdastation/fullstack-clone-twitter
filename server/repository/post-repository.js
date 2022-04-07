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

  static async getAllPosts() {
    const posts = Post.findAll();
    return posts;
  }
}

module.exports = PostRepository;
