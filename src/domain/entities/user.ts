import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Unique('users_email_unique', ['email'])
@Index('users_uuid_index', ['uuid'], {})
@Entity('User')
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
  })
  id: number;

  @Column('char', { name: 'uuid', length: 36 })
  uuid: string;

  @Column('varchar', { name: 'email', length: 191 })
  email: string;

  @Column('varchar', { name: 'password', nullable: true, length: 191 })
  password: string;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date | null;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
