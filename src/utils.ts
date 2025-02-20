/**
 * Módulo utilitário para formatação de CPF e CNPJ.
 *
 * Este módulo contém funções para formatar números de CPF e CNPJ,
 * garantindo que sejam apresentados corretamente seguindo as normas brasileiras.
 */

/**
 * Formata um CPF no padrão "XXX.XXX.XXX-XX".
 *
 * @param {string} cpf - O CPF a ser formatado. Pode estar sem formatação.
 * @returns {string} - O CPF formatado ou o valor original se inválido.
 */
export function formatCPF(cpf: string): string {
	// Remove caracteres não numéricos
	cpf = cpf.replace(/\D/g, "");

	// Verifica se tem o tamanho correto antes de formatar
	if (cpf.length !== 11) return cpf;

	// Aplica a máscara XXX.XXX.XXX-XX
	return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

/**
 * Formata um CNPJ no padrão "XX.XXX.XXX/XXXX-XX".
 *
 * @param {string} cnpj - O CNPJ a ser formatado. Pode estar sem formatação.
 * @returns {string} - O CNPJ formatado ou o valor original se inválido.
 */
export function formatCNPJ(cnpj: string): string {
	// Remove caracteres não numéricos
	cnpj = cnpj.replace(/\D/g, "");

	// Verifica se tem o tamanho correto antes de formatar
	if (cnpj.length !== 14) return cnpj;

	// Aplica a máscara XX.XXX.XXX/XXXX-XX
	return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}
