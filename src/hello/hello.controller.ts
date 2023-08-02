import { Controller, Get, Query, Post, Body, Put, Param, Delete ,Headers,Req} from '@nestjs/common';
import { HelloService } from './hello.service';
import { Request } from 'express';
import { ApiQuery, ApiBody, ApiTags, ApiHeader ,ApiOkResponse} from '@nestjs/swagger';
import {FromBody,FromHeaders,FromParams,FromQuerys}from './dto'
@Controller('helloworld')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  sayHello(): string {
    return this.helloService.getHello();
  }

  @Post('addnum')
  @ApiTags('addnum')
  @ApiHeader({
    name: 'From',
  })
  addQuery(@Query() fromQuerys: FromQuerys): Number  {
    const bodyAdded = this.helloService.addNum(fromQuerys.num);
    return bodyAdded
  }
  
  @ApiTags('addnum')
  @ApiOkResponse({type:FromBody})
  addBody(@Body() fromBody: FromBody): Object  {
    const bodyAdded = this.helloService.addNum(fromBody.num);
    return bodyAdded
  }
  
  @Post('addnum/:num')
  @ApiTags('addnum')
  addParam(@Param() fromParams: FromParams):Number {
    const paramAdded = this.helloService.addNum(Number(fromParams));
    return paramAdded;
  }
}
