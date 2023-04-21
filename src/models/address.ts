import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column({
        nullable: true,
    })
    zip_code: string;

    @Column()
    is_default: boolean;

    @Column()
    client_id: number;
}