const uuid = require("uuid");
const path = require("path");
class FileUtils {
  static generatePathName(fileExtension) {
    return uuid.v4() + `.${fileExtension}`;
  }

  static saveFile(nameDirectory, fileName, file) {
    // eslint-disable-next-line no-undef
    file.mv(path.resolve(__dirname, "..", "static", nameDirectory, fileName));
  }
}

module.exports = FileUtils;
