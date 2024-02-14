import { ApiHideProperty } from '@nestjs/swagger';
import { BrandEntity } from 'src/brand/entities/brand.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  crossedPrice?: number | null;

  @ApiHideProperty()
  @ManyToOne(() => CategoryEntity, (category) => category.product, {
    eager: true,
  })
  @JoinColumn()
  category: CategoryEntity;

  @ApiHideProperty()
  @ManyToOne(() => BrandEntity, (brand) => brand.product, {
    eager: true,
  })
  @JoinColumn()
  brand: BrandEntity;
}
