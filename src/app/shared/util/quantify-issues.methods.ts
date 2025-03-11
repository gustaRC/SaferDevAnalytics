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
    [IssueStatusEnum.FECHADA, 'qty_closed_issues'],
  ]);

  //direcionamento
  updateUserFromChanges(journalDetail: JournalDetail, userQuantify: IssuesQuantitative) {
    //if (journalsDetails.property === 'attr') {}
    switch (journalDetail.name) {
      case 'status_id':
        this.updateStatus(journalDetail, userQuantify);
        break;
      case 'assigned_to_id':
        //moved issues
    }

  }

  //loop e reduce
  updateGroupFromChanges(): IssuesQuantitative {
    return new IssuesQuantitative;
  }

  //verificar e direicionar para o método correto
  private updateStatus(journalDetail: JournalDetail, userQuantify: IssuesQuantitative) {
    const { new_value, old_value } = journalDetail;
    const statusFieldNewValue = this.statusFieldMap.get(new_value as IssueStatusEnum);
    const statusFieldOldValue = this.statusFieldMap.get(old_value as IssueStatusEnum);

    if(new_value && statusFieldNewValue) {
      console.log('increment')
      userQuantify[statusFieldNewValue]++;
    }

    if(old_value && statusFieldOldValue) {
      console.log('decrement')
      userQuantify[statusFieldOldValue]--;
    }
  }

  //verificar e direicionar para o método correto
  private updateLevel(newValue: string, oldValue: string | null) {
  }

  //incrementar qtde issues movidas
  private incrementIssuesMoved(userQuantify: IssuesQuantitative) {
  }

  //calcular porcentagem de erro
  private calculateErrorPercentage() {
  }

}
