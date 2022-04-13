const PostRepository = require("../repository/post-repository");
const FileUtils = require("../utils/file-utils");

class PostService {
  async createPost(content, img, userId) {
    let fileNameImg = null;
    if (img) {
      fileNameImg = FileUtils.generatePathName("jpg");
      FileUtils.saveFile("img", fileNameImg, img);
    }
    const newPost = await PostRepository.createPost(
      content,
      fileNameImg,
      userId
    );
    return newPost;
  }
}

module.exports = new PostService();
