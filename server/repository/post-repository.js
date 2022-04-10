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

  static async getPostsUser(userId) {
    const receviedData = await Post.findAndCountAll({
      where: {
        userId,
      },
    });
    const packedPostsData = {
      count: receviedData.count,
      posts: receviedData.rows,
    };
    return packedPostsData;
  }
}

module.exports = PostRepository;
