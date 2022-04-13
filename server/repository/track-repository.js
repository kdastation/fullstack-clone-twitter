const { Track } = require("../models/models");

class TrackRepository {
  static async createTrack(userId, name, audioFileName) {
    const newTrack = await Track.create({
      name,
      userId,
      audio: audioFileName,
    });
    return newTrack;
  }

  static async getTracksUser(userId) {
    const tracks = await Track.findAll({
      where: {
        userId,
      },
    });
    return tracks;
  }
}

module.exports = TrackRepository;
