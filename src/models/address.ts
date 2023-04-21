import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, RelationId } from "typeorm";
import { Client } from "./client";

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
    @RelationId((client: Client) => client.id)
    client_id: number;
}