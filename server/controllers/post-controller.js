const PostRepository = require("../repository/post-repository");
const PostService = require("../services/post-service");

class PostContoller {
  async createPost(request, response, next) {
    try {
      const { content } = request.body;
      const img = request.files?.img;
      const userId = request.user.id;
      const newPost = await PostService.createPost(content, img, userId);
      return response.json(newPost);
    } catch (error) {
      next(error);
    }
  }

  async getAllPosts(request, response, next) {
    try {
      const posts = await PostRepository.getAllPosts();
      return response.json(posts);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostContoller();
