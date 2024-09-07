import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @HttpCode(202)
  @Header('Cache-Control', 'none')
  @Redirect('https://nestjs.com', 301)
  createAnyThing() {
    return { url: 'https://github.com/tranductri138/iphone13/tree/main/src' };
    // return { url } will be override
    return this.appService.createAnything();
  }
}
