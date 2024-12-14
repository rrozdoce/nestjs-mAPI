import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropostaController } from './proposta.controller';
import { PropostaService } from './proposta.servicce';
import { Proposta } from './entities/proposta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proposta])],
  controllers: [PropostaController],
  providers: [PropostaService],
})
export class PropostaModule {}
