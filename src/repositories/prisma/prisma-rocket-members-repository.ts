import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/database/prisma.service";
import { rocketMembersRepository } from "../rocket-member-repository";


@Injectable()
export class PrismaRocketMembersRepository implements rocketMembersRepository {
    constructor(private prisma: PrismaService) {}

    
    async create(name: string, memberFunction: string): Promise<void> {
     await this.prisma.rocketTeamMember.create({
    data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },  
    })

}

}
