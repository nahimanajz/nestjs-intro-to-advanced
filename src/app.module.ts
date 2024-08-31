import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from 'logger.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) // can apply many middleware
      .exclude(                // exclude specific route from being affected by this middleware
        {
          path: 'cats',
          method: RequestMethod.PATCH,
        },
        {
          path: 'cats/meow', // just another imaginated routes 
          method: RequestMethod.PATCH,
        },
      )
      .forRoutes('cats');
  }
}
