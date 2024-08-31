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

