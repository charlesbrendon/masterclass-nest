import { IsString, IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string;
    
    @IsString()
    @IsNotEmpty({
    message: 'The member function should not be empty.',
    })
    function: string;
}