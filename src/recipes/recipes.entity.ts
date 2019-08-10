import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Recipes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 225 })
    name: string

    @Column({length: 255})
    description: string

    @Column('date')
    posted_on: Date;

    @Column({length: 255})
    facebook_url: string;

    @Column('boolean')
    active: boolean;
}
