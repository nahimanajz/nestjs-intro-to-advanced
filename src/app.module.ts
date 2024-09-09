import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      //consumer.apply(LoggerMiddleware).forRoutes('songs') // option 1. of using middleware
      //consumer.apply(LoggerMiddleware).forRoutes({path:'songs', method:RequestMethod.GET}) //option 2
      consumer.apply(LoggerMiddleware).forRoutes(SongsController) // option 3

  }
}
