import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
    throw new HttpException(
        'Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: 'I am testing error handling',
        },
      );
  }

  @Get('/:id')
  findOne() {
    return 'For finding one song';
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
