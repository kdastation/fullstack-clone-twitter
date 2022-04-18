const { Post, User } = require("../models/models");

const includeUser = {
  include: { model: User, attributes: ["email"] },
};

class PostRepository {
  static async createPost(content, fileNameImg, userId) {
    const newPost = await Post.create({
      content,
      img: fileNameImg,
      userId,
    });
    const newPostWithAllInformation = await PostRepository.getPostById(
      newPost.id
    );
    return newPostWithAllInformation;
  }

  static async getPostById(id) {
    const post = await Post.findOne({
      where: {
        id,
      },
      ...includeUser,
    });
    return post;
  }

  static async getAllPosts() {
    const posts = Post.findAll({
      ...includeUser,
    });
    return posts;
  }

  static async getPostsUser(userId) {
    const receviedData = await Post.findAndCountAll({
      where: {
        userId,
      },
      ...includeUser,
    });
    const packedPostsData = {
      count: receviedData.count,
      posts: receviedData.rows,
    };
    return packedPostsData;
  }
}

module.exports = PostRepository;
