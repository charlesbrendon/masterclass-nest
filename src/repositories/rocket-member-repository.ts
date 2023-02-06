 export abstract class rocketMembersRepository {
    abstract create(name: string, memberFunction: string): Promise<void>
}