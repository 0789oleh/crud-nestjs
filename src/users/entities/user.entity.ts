/* eslint-disable prettier/prettier */
import { Entity, PrimaryKey, Property } from "@mikro-orm/sqlite"

@Entity()
export class User {
    
    @PrimaryKey()
    id!: number

    @Property()
    fullName!: string

    @Property()
    phone_number!: number

    @Property()
    email!: string

    @Property()
    password!: string

    @Property()
    gender: boolean

    @Property({ type: 'text' })
    bio = ''

}
