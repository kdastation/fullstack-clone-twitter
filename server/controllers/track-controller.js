const TrackRepository = require("../repository/track-repository");
const TrackService = require("../services/track-service");

class TrackController {
  async createTrack(request, response, next) {
    try {
      const { name } = request.body;
      const audioFile = request.files?.audio;
      console.log(audioFile);
      const userId = request.user.id;
      const newTrack = await TrackService.createTrack(name, audioFile, userId);
      return response.json(newTrack);
    } catch (error) {
      next(error);
    }
  }
  async getTracksUser(request, response, next) {
    try {
      const userId = request.user.id;
      const tracks = await TrackRepository.getTracksUser(userId);
      return response.json({ tracks });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TrackController();
