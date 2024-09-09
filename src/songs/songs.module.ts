import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
// SET: controller, providers, import & export array, 
@Module({
  controllers: [SongsController],
  providers: [SongsService]
})
export class SongsModule {}
