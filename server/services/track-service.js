const ApiError = require("../exceptions/api-error");
const TrackRepository = require("../repository/track-repository");
const FileUtils = require("../utils/file-utils");

class TrackService {
  async createTrack(name, audioFile, userId) {
    if (!audioFile) {
      throw ApiError.BadRequest("Вы не прикрепили аудио файл");
    }
    const fileNameAudio = FileUtils.generatePathName("mp3");
    FileUtils.saveFile("music", fileNameAudio, audioFile);
    const newTrack = await TrackRepository.createTrack(
      userId,
      name,
      fileNameAudio
    );
    return newTrack;
  }
}

module.exports = new TrackService();
