/**
 * Biblioteca para validação e formatação de CPF e CNPJ.
 *
 * Este módulo fornece funções para validar e formatar números de CPF e CNPJ
 * seguindo as regras da Receita Federal do Brasil.
 */

export { isValidCPF } from "./cpf";
export { isValidCNPJ } from "./cnpj";
export { formatCPF, formatCNPJ } from "./utils";
