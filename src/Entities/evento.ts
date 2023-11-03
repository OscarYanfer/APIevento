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
  registered: string;

  @Column()
  updated: string;

  @Column()
  status: number;
}
