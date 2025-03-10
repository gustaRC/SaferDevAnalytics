export class IssuesQuantitative {
  qty_open_issues: number = 0;       //abertas|novas
  qty_send_test: number = 0;         //enviadas para teste
  qty_test_error: number = 0;        //erro no teste
  percentage_errors: string = '0%';  //porcentagem de erros
  time_spent: string = '0';          //tempo gasto
  average_time: string = '0';        //tempo médio
  qty_issues_moved: number = 0;      //movidas
  qty_closed_issues: number = 0;     //desenvolvidas
  qty_issues_level = {               //nível
    low: 0,
    medium: 0,
    high: 0,
    project: 0,
  }
}
