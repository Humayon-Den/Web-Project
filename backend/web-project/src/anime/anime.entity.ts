import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anime{
    
@PrimaryGeneratedColumn()
id : number;

@Column()
image : string;

@Column()
title : string;

@Column({ type: 'text' })
description: string;

@Column()
episodes : string;


}