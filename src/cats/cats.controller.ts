import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Redirect } from '@nestjs/common';
import { UpdateCatDto } from 'src/dtos/cat.dto';
import { CreateCatDto } from 'src/dtos/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  create(@Body() catDto: CreateCatDto): string {
    return 'this action adds new cat';
  }

  @Get(':id')
  findOne(@Param('id') id:string): string {
    return `this action returns a #${id} cat`;
  }

  @Get('docs')
  @Redirect("https://docs.nestjs.com", 302)
  getDocs(@Query('version') version){
    if(version && version === '5'){
      return {url: "https://docs.nestjs.com/v5"};
    }

  }
  
  @Put(':id')
  update(@Param('id') id:string, cat:UpdateCatDto):string {
    return `this is method for updating ${id} cat`;
  }

  @Delete(':id')
  remove(@Param(':id') id:string){
    return `This action removes a #${id} cat`
  }
}

