import { Injectable } from '@nestjs/common';
/**
 * a service is a provider, means you can inject it into another class,
 * it is responsible for sending and retrieving data from/to database
 * You can use one use one service into multiple controllers from other modules,
 * todo that you export from module
 */
@Injectable()
export class SongsService {
  // local db;
  private readonly songs = [];
  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    return this.songs;
  }
}
