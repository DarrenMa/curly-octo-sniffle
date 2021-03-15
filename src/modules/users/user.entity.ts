import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Generated } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Generated('increment')
    id: string;

    @Column({ nullable: true })
    firstname: string;

    @Column({ nullable: true })
    surname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    phone: string;
}