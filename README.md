## NestJs
-   Create controller with built-in nest js `nest g resource [name]`
- Nest alway return 200 http code except Post method which returns 200 unless changed using `HttpCode() decorator`
- invoke @Res() decorator to return response `response.status(200).send()` just like in express.

``` ex: findAll(@Res response) {
  response.status(200).send()
}
```

- Handling request object

```
findAll(@Req request):string{
  return YOUR_RESPONSE;
}
```
to take full advantage of express intall `@types/express`

## decorator:
it is an expression that returns a function read [here](https://docs.nestjs.com/custom-decorators) for deep understanding.


1. ``` @Get(`ab*cd`) ```: Support anystring as wildcard of the route
2. ``` @Redirect(YOUR_REDIRECT_URL, STATUS CODE) ```: redirecting to specific url from controller
3. @Param(`id`), decorator for retrieveing route parameters

# Providers:
providers are plain javascript classes which are declared as providers in `module`, they include: services, repositories, factories, helpers, and so on.
- Create a service to handle storage and retrieval of data so think of our service as `provider`
- Creating new services use this command: `nest g service cats`
- finally service is injected in controller in 
``` 
import { Controller } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
}

 ```
## @Module()
Module is a class annotated with @Module it helps to keep application organized as codebase and tea grow [more info](https://docs.nestjs.com/modules)
use this command to create  a module `nest g module cats`
N.B: Module classes themselves cannot be injected as providers due to circular dependency .

## Middleware 
[more info](https://docs.nestjs.com/middleware)
middleware can be functional or class based middleware 
### functional middleware 
 file.middleare.ts
 ```
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};
```

then in app module

```
  consumer
    .apply(logger)
    .forRoutes(CatsController);
```
for global middleware we can set it in `main.ts` by calling  `use` method
``` 
  const app = await NestFactory.create(AppModule)
  app.use(logger) // logger is name of our middleware
  await app.listen(3000)
```