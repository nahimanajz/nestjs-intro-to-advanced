import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, resp: Response, next: NextFunction) {
    console.log('Requesting..');
    next();
  }
}
