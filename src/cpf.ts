/**
 * Módulo para validação de CPF no formato brasileiro.
 *
 * O CPF (Cadastro de Pessoas Físicas) é um número único atribuído a cidadãos no Brasil
 * para identificação fiscal. A validação segue as regras oficiais da Receita Federal.
 */

/**
 * Valida se um CPF é válido.
 *
 * @param {string} cpf - O CPF a ser validado. Pode conter pontos e traços.
 * @returns {boolean} - Retorna `true` se o CPF for válido, senão `false`.
 */
export function isValidCPF(cpf: string): boolean {
	// Remove todos os caracteres não numéricos (ex.: ".", "-")
	cpf = cpf.replace(/\D/g, "");

	// CPF deve ter exatamente 11 dígitos
	if (cpf.length !== 11) return false;

	// Evita CPFs com todos os dígitos iguais (ex.: "111.111.111-11")
	if (/^(\d)\1{10}$/.test(cpf)) return false;

	/**
	 * Função auxiliar para calcular os dígitos verificadores do CPF.
	 *
	 * O CPF é validado com base em dois dígitos verificadores, calculados a partir dos 9 primeiros números.
	 * O primeiro dígito verificador é calculado usando os 9 primeiros dígitos,
	 * e o segundo dígito é calculado usando os 10 primeiros (incluindo o primeiro dígito verificador).
	 *
	 * @param {number} factor - Fator inicial da multiplicação (10 para o primeiro dígito, 11 para o segundo).
	 * @returns {number} - Retorna o dígito verificador calculado.
	 */
	const calcDigit = (factor: number): number => {
		const sum = cpf
			.slice(0, factor - 1) // Pega os primeiros `factor - 1` dígitos
			.split("")
			.reduce((total, num, index) => total + Number(num) * (factor - index), 0);

		// O dígito é o resto da divisão por 11, ajustado conforme a regra da Receita Federal
		return ((sum * 10) % 11) % 10;
	};

	// Calcula os dois dígitos verificadores
	const digit1 = calcDigit(10);
	const digit2 = calcDigit(11);

	// O CPF é válido se os dígitos calculados forem iguais aos dígitos informados
	return digit1 === Number(cpf[9]) && digit2 === Number(cpf[10]);
}
