export class QuantitativeIssues {
  qty_open_issues!: number; //abertas|novas
  qty_send_test!: number; //enviadas para teste
  qty_test_error!: number; //erro no teste
  percentage_errors!: string; //porcentagem de erros
  qty_closed_issues!: number; //desenvolvidas
  time_spent!: string; //tempo gasto
  average_time!: string; //tempo médio
  qty_issues_moved!: number; //movidas
  qtf_issues_level!: { //nível
    low: number;
    medium: number;
    high: number;
    project: number;
  }
}
