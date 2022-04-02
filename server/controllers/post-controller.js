const postService = require("../services/post-service");

class PostContoller {
  async createPost(request, response, next) {
    try {
      const { content } = request.body;
      const img = request.files?.img;
      const newPost = img
        ? await postService.createPost(content, img)
        : await postService.createPostWithOutImg(content);
      return response.json(newPost);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PostContoller();
