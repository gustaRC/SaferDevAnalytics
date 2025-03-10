import { IssueStatusEnum } from "../enums/issue-status.enum";
import { JournalDetail } from "../models/issues/journal/journal-detail.model";
import { IssuesQuantitative } from "../models/issues/quantitative/issues-quantitative.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantifyIssuesMethods {

  updateFromChanges(journalsDetails: JournalDetail) {
    //loop e direcionamento
  }

  private updateStatus(newValue: string, oldValue: string | null) {
    //verificar e direicionar para o método correto
  }

  private updateLevel(newValue: string, oldValue: string | null) {
    //verificar e direicionar para o método correto
  }

  private incrementStatus(key: keyof IssuesQuantitative){
    //incrementar status
  }

  private decrementStatus(key: keyof IssuesQuantitative) {
    //decrementar status
  }

  private incrementIssuesMoved(key: keyof IssuesQuantitative) {
    //incrementar qtde issues movidas
  }

  private calculateErrorPercentage() {
    //calcular porcentagem de erro
  }

}
