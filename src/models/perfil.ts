import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, RelationId } from "typeorm";
import { Client } from "./client";

@Entity()
export class Perfil extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    @RelationId((client: Client) => client.id)
    client_id: number;
}