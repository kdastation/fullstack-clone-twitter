const PostService = require("../services/post-service");

class PostContoller {
  async createPost(request, response, next) {
    try {
      const { content } = request.body;
      console.log(request);
      const img = request.files?.img;
      const newPost = await PostService.createPost(content, img);
      return response.json(newPost);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostContoller();
