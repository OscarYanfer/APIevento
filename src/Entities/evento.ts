import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class evento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  registered: Date;

  @Column()
  updated: Date;

  @Column()
  status: number;
}
