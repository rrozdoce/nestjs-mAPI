import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proposta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  identification: string;

  @Column({ type: 'date' })
  dueDate: Date; // talvez mude para data
}
