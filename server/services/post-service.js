const path = require("path");
const PostRepository = require("../repository/post-repository");
const FileUtils = require("../utils/file-utils");

class PostService {
  async createPost(content, img) {
    let fileNameImg = null;
    if (img) {
      fileNameImg = FileUtils.generatePathName("jpg");
      this._saveImgPost(img, fileNameImg);
    }
    const newPost = await PostRepository.createPost(content, fileNameImg);
    return newPost;
  }
  _saveImgPost(img, fileName) {
    // eslint-disable-next-line no-undef
    img.mv(path.resolve(__dirname, "..", "static", "img", fileName));
  }
}

module.exports = new PostService();
