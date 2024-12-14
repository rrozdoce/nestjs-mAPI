export interface Proposta {
  //id: number; // ID único da proposta
  name: string; // nome da proposta
  description: string; // descrição da proposta
  identification: string; // identifcação da proposta(data_de_hoje+qt_proposta_hoje)
  dueDate: string; // data de hoje
  due_date: string; // prazo de validade
}
