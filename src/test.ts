import { isValidCNPJ } from "./cnpj";
import { isValidCPF } from "./cpf";
import { formatCNPJ } from "./utils";
import { formatCPF } from "./utils";

console.log(formatCPF("11144477735")); // "111.444.777-35"
console.log(formatCPF("123")); // "123" (mantém se inválido)

console.log(formatCNPJ("54550752000155")); // "54.550.752/0001-55"
console.log(formatCNPJ("123456")); // "123456" (mantém se inválido)