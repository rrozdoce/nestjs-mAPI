import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposta } from 'src/modules/proposta/entities/proposta.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db.nzryswydbcpuggnefaez.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'eA03M&6qKwoY',
      database: 'postgres',
      entities: [Proposta],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
