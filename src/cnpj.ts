/**
 * Módulo para validação de CNPJ no formato brasileiro.
 *
 * O CNPJ (Cadastro Nacional da Pessoa Jurídica) é um número único atribuído a empresas no Brasil
 * para identificação fiscal. A validação segue as regras oficiais da Receita Federal.
 */

/**
 * Valida se um CNPJ é válido.
 *
 * @param {string} cnpj - O CNPJ a ser validado. Pode conter pontos, barras e traços.
 * @returns {boolean} - Retorna `true` se o CNPJ for válido, senão `false`.
 */
export function isValidCNPJ(cnpj: string): boolean {
	// Remove todos os caracteres não numéricos (ex.: ".", "/", "-")
	cnpj = cnpj.replace(/\D/g, "");

	// O CNPJ deve ter exatamente 14 dígitos
	if (cnpj.length !== 14) return false;

	// Evita CNPJs com todos os dígitos iguais (ex.: "11.111.111/1111-11")
	if (/^(\d)\1{13}$/.test(cnpj)) return false;

	/**
	 * Função auxiliar para calcular os dígitos verificadores do CNPJ.
	 *
	 * O CNPJ é validado com base em dois dígitos verificadores, calculados a partir dos 12 primeiros números.
	 * O primeiro dígito verificador é calculado usando os 12 primeiros dígitos,
	 * e o segundo dígito é calculado usando os 13 primeiros (incluindo o primeiro dígito verificador).
	 *
	 * @param {number} slice - Define até qual posição do CNPJ será usado para o cálculo.
	 * @returns {number} - Retorna o dígito verificador calculado.
	 */
	const calcDigit = (slice: number): number => {
		const weights =
			slice === 12
				? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] // Pesos para o primeiro dígito verificador
				: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]; // Pesos para o segundo dígito verificador

		const sum = cnpj
			.slice(0, slice)
			.split("")
			.reduce((total, num, index) => total + Number(num) * (weights[index] ?? 0), 0);

		// O dígito é o resto da divisão por 11, ajustado conforme a regra da Receita Federal
		return sum % 11 < 2 ? 0 : 11 - (sum % 11);
	};

	// Calcula os dois dígitos verificadores
	const digit1 = calcDigit(12);
	const digit2 = calcDigit(13);

	// O CNPJ é válido se os dígitos calculados forem iguais aos dígitos informados
	return digit1 === Number(cnpj[12]) && digit2 === Number(cnpj[13]);
}
