import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  constructor() {}

  @Get('')
  default() {
    return 'Olá mundo!';
  }

  @Get('home')
  home() {
    return 'Você está na home';
  }
}
