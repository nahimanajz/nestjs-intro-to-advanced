import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Redirect } from '@nestjs/common';
import { UpdateCatDto } from 'src/cats/dtos/cat.dto';
import { CreateCatDto } from 'src/cats/dtos/cat.dto';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService){}

  @Get()
  @HttpCode(200)
  async findAll():Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body() catDto: CreateCatDto) {
    this.catsService.create(catDto)
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

