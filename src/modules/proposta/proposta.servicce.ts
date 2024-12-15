import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proposta } from './entities/proposta.entity';
import { Repository } from 'typeorm';
import { CreatePropostaDto } from './dto/proposta.dto';

@Injectable()
export class PropostaService {
  constructor(
    @InjectRepository(Proposta)
    private propostaRepository: Repository<Proposta>,
  ) {}

  async create(PropostaDto: CreatePropostaDto) {
    // buscar pelo numero de proposta na data de hoje, se nao encontrar, numeroDePropostas = 0
    const proposta = Object.assign(new Proposta(), PropostaDto);
    // criar data atual(hoje) obs: somente o dia eu acho
    // inserir data de hoje na proposta atual obs: acho q dia,data,hora etc
    // criar o identificador usando a data de hoje + (numeroDePropostas + 1)
    await this.propostaRepository.save(proposta);
  }

  async changeProposta(id: number, propostaAtt: CreatePropostaDto) {
    const item = await this.propostaRepository.findOne({ where: { id } });
    const proposta = Object.assign(item, propostaAtt);
    await this.propostaRepository.save(proposta);
  }

  async findAll(): Promise<Proposta[]> {
    return this.propostaRepository.find();
  }

  async findOne(id: number): Promise<Proposta | null> {
    return this.propostaRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.propostaRepository.delete(id);
  }
}
