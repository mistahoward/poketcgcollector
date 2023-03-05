import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity() 
export class User {
	@PrimaryGeneratedColumn()
	id!: number;
  
	@Column()
	firstName!: string;
  
	@Column()
	lastName!: string;

	@Column()
	userName!: string;
  
	@Column()
	email!: string;
  
	@CreateDateColumn()
	createdAt!: Date;
  
	@UpdateDateColumn()
	updatedAt!: Date;
  }