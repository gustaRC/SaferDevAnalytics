import { IssuesQuantitative } from './../models/issues/quantitative/issues-quantitative.model';
import { Injectable } from '@angular/core';
import { IssueStatusEnum } from "../enums/issue-status.enum";
import { JournalDetail } from "../models/issues/journal/journal-detail.model";

@Injectable({
  providedIn: 'root'
})
export class QuantifyIssuesUtilMethods {

  private statusFieldMap = new Map<IssueStatusEnum, keyof IssuesQuantitative>([
    [IssueStatusEnum.NOVA, 'qty_open_issues'],
    [IssueStatusEnum.EM_TESTES, 'qty_send_test'],
    [IssueStatusEnum.ERRO_NO_TESTE, 'qty_test_error'],
]);

  //direcionamento
  updateUserFromChanges(journalsDetails: JournalDetail, userQuantify: IssuesQuantitative) {
    //if (journalsDetails.property === 'attr') {}
    switch (journalsDetails.name) {
      case 'status_id':
        this.updateStatus(journalsDetails, userQuantify);
        break;
    }

  }

  //loop e reduce
  updateGroupFromChanges(): IssuesQuantitative {

    return new IssuesQuantitative;
  }

  //verificar e direicionar para o método correto
  private updateStatus(journalsDetails: JournalDetail, userQuantify: IssuesQuantitative) {
    const { new_value, old_value } = journalsDetails;

    const incrementStatuses = new Set([
      IssueStatusEnum.NOVA,
      IssueStatusEnum.EM_TESTES,
      IssueStatusEnum.ERRO_NO_TESTE
    ]);
    const decrementStatuses = new Set([
      IssueStatusEnum.NOVA,
      IssueStatusEnum.EM_TESTES,
      IssueStatusEnum.ERRO_NO_TESTE
    ]);

    // const updateCount = (status: IssueStatusEnum | null | undefined, increment: number) => {
    //   const field = this.statusFieldMap.get(status as IssueStatusEnum);
    //   if (field) {
    //       userQuantify[field] += increment;
    //   }
    // };

    // const increment = new_value != null && incrementStatuses.has(new_value as IssueStatusEnum) ? 1 : 0;
    // const decrement = old_value != null && decrementStatuses.has(old_value as IssueStatusEnum) ? -1 : 0;

    // updateCount(new_value, 1);   // Incrementa o novo status, se for relevante
    // updateCount(old_value, -1);  // Decrementa o status antigo, se for relevante
  }

  //verificar e direicionar para o método correto
  private updateLevel(newValue: string, oldValue: string | null) {
  }

  //incrementar status
  private incrementStatus(userQuantify: IssuesQuantitative){
  }

  //decrementar status
  private decrementStatus(userQuantify: IssuesQuantitative) {
  }

  //incrementar qtde issues movidas
  private incrementIssuesMoved(userQuantify: IssuesQuantitative) {
  }

  //calcular porcentagem de erro
  private calculateErrorPercentage() {
  }

}
