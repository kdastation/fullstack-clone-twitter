const path = require("path");
const PostRepository = require("../repository/post-repository");
const FileUtils = require("../utils/file-utils");

class PostService {
  async createPost(content, img) {
    const fileName = FileUtils.generatePathName("jpg");
    this._saveImgPost(img, fileName);
    const newPost = await PostRepository.createPost(content, fileName);
    return newPost;
  }

  async createPostWithOutImg(content) {
    const newPost = await PostRepository.createPostWithOutImg(content);
    return newPost;
  }

  _saveImgPost(img, fileName) {
    // eslint-disable-next-line no-undef
    img.mv(path.resolve(__dirname, "..", "static", "img", fileName));
  }
}

module.exports = new PostService();
