import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Store {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    owner: string;
}
