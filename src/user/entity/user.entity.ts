import { Exclude } from '@nestjs/class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, default: null })
  @Exclude({ toPlainOnly: true })
  googleID: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;
}
