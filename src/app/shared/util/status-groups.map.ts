import { IssueStatusEnum } from "../enums/issue-status.enum";

export const statusGroupMap = new Map<string, number[]>([
  ['Dev', [
    IssueStatusEnum.EM_REVISAO_CODE_REVIEW,
    IssueStatusEnum.RETORNO_CODE_REVIEW,
    IssueStatusEnum.APROVADA_COMERCIAL,
    IssueStatusEnum.NOVA,
    IssueStatusEnum.EM_ANDAMENTO,
    IssueStatusEnum.EM_PAUSA,
    IssueStatusEnum.ERRO_NO_TESTE
  ].map(status => Number(status))],
  ['Testes', [
    IssueStatusEnum.EM_TESTES,
    IssueStatusEnum.TESTES_EM_ANDAMENTO,
    IssueStatusEnum.TESTES_EM_PAUSA,
    IssueStatusEnum.EM_TESTES_CLIENTE,
    IssueStatusEnum.ATUALIZACAO_DISPONIVEL,
  ].map(status => Number(status))],
]);
