import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { rocketMembersRepository } from './repositories/rocket-member-repository';

@Controller('app')
export class AppController {
  constructor( 
    private rocketMembersRepository : rocketMembersRepository
  ) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {    
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction)

 
  }
}
