const uuid = require("uuid");

class FileUtils {
  static generatePathName(fileExtension) {
    return uuid.v4() + `.${fileExtension}`;
  }
}

module.exports = FileUtils;
