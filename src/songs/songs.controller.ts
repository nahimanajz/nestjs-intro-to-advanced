import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dtop/create-song';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Get()
  findAll() {
    try {
      return this.songService.findAll();
    } catch (error) {
      throw new HttpException(
        'Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get('/:id')
  findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
    return `For finding one song ${typeof id}`;
  }
  @Put('/:id')
  update() {
    return 'for updating a song';
  }
  @Delete()
  delete() {
    return 'for deleting a song';
  }
}
