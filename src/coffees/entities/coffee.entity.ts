import { Column } from "typeorm/browser/decorator/columns/Column.js";
import { PrimaryGeneratedColumn } from "typeorm/browser/decorator/columns/PrimaryGeneratedColumn.js";
import { Entity } from "typeorm/browser/decorator/entity/Entity.js";

@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column('json', { nullable: true })
    flavors: string[];
}
