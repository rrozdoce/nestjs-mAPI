import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proposta } from './entities/proposta.entity';
import { Between, Repository } from 'typeorm';
import { CreatePropostaDto } from './dto/proposta.dto';

@Injectable()
export class PropostaService {
  constructor(
    @InjectRepository(Proposta)
    private propostaRepository: Repository<Proposta>,
  ) {}

  async create(PropostaDto: CreatePropostaDto) {
    // buscar pelo numero de proposta na data de hoje, se nao encontrar, numeroDePropostas = 0
    const hoje = new Date();
    const inicioDia = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      hoje.getDate(),
    );
    const fimDia = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      hoje.getDate() + 1,
    );
    const numeroDePropostas = await this.propostaRepository.count({
      where: {
        dueDate: Between(inicioDia, fimDia),
      },
    });

    const dataFormatada =
      '' +
      hoje.toLocaleDateString('pt-BR').replace(/\//g, '-') +
      ':' +
      `${numeroDePropostas + 1}`;
    const proposta = new Proposta();
    proposta.dueDate = hoje;
    proposta.identification = dataFormatada;
    const ObjectProposta = Object.assign(proposta, PropostaDto);
    await this.propostaRepository.save(ObjectProposta);
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
