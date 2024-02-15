/* eslint-disable prettier/prettier */
export class CreateUserDto {
    id!: number
    fullName!: string
    phone_number!: number
    email!: string
    password!: string
    gender: boolean
    bio: string
}
