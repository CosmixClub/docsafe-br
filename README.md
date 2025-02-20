## @cosmixclub/docsafe-br

Este pacote fornece funções para **validação** e **formatação** de **CPF** e **CNPJ**, garantindo que os números estejam no formato correto e sejam válidos de acordo com as regras da **Receita Federal do Brasil**.

### Índice

-   [@cosmixclub/docsafe-br](#cosmixclubdocsafe-br)
    -   [Índice](#índice)
-   [Instalação](#instalação)
-   [Uso](#uso)
    -   [Validando um CPF](#validando-um-cpf)
    -   [Validando um CNPJ](#validando-um-cnpj)
    -   [Formatando um CPF](#formatando-um-cpf)
    -   [Formatando um CNPJ](#formatando-um-cnpj)
-   [API](#api)
    -   [Funções de Validação](#funções-de-validação)
        -   [`isValidCPF(cpf: string): boolean`](#isvalidcpfcpf-string-boolean)
        -   [`isValidCNPJ(cnpj: string): boolean`](#isvalidcnpjcnpj-string-boolean)
    -   [Funções de Formatação](#funções-de-formatação)
        -   [`formatCPF(cpf: string): string`](#formatcpfcpf-string-string)
        -   [`formatCNPJ(cnpj: string): string`](#formatcnpjcnpj-string-string)
-   [Contribuição](#contribuição)

## Instalação

```bash
pnpm add @cosmixclub/docsafe-br
```

ou

```bash
npm install @cosmixclub/docsafe-br
```

ou

```bash
yarn add @cosmixclub/docsafe-br
```

## Uso

### Validando um CPF

A função `isValidCPF` verifica se um CPF é válido de acordo com as regras da Receita Federal.

```typescript
import { isValidCPF } from "@cosmixclub/docsafe-br";

console.log(isValidCPF("123.456.789-09")); // true
console.log(isValidCPF("111.111.111-11")); // false
```

### Validando um CNPJ

A função `isValidCNPJ` verifica se um CNPJ é válido.

```typescript
import { isValidCNPJ } from "@cosmixclub/docsafe-br";

console.log(isValidCNPJ("12.345.678/0001-95")); // true
console.log(isValidCNPJ("11.111.111/0001-11")); // false
```

### Formatando um CPF

A função `formatCPF` transforma um CPF não formatado para o padrão `XXX.XXX.XXX-XX`.

```typescript
import { formatCPF } from "@cosmixclub/docsafe-br";

console.log(formatCPF("11144477735")); // "111.444.777-35"
console.log(formatCPF("123")); // "123" (mantém se inválido)
```

### Formatando um CNPJ

A função `formatCNPJ` transforma um CNPJ não formatado para o padrão `XX.XXX.XXX/XXXX-XX`.

```typescript
import { formatCNPJ } from "@cosmixclub/docsafe-br";

console.log(formatCNPJ("54550752000155")); // "54.550.752/0001-55"
console.log(formatCNPJ("123456")); // "123456" (mantém se inválido)
```

## API

### Funções de Validação

#### `isValidCPF(cpf: string): boolean`

-   **Parâmetro**: `cpf` - Uma string representando um CPF, com ou sem formatação.
-   **Retorno**: `true` se o CPF for válido, `false` caso contrário.

```typescript
isValidCPF("123.456.789-09"); // true
isValidCPF("111.111.111-11"); // false
```

#### `isValidCNPJ(cnpj: string): boolean`

-   **Parâmetro**: `cnpj` - Uma string representando um CNPJ, com ou sem formatação.
-   **Retorno**: `true` se o CNPJ for válido, `false` caso contrário.

```typescript
isValidCNPJ("12.345.678/0001-95"); // true
isValidCNPJ("11.111.111/0001-11"); // false
```

### Funções de Formatação

#### `formatCPF(cpf: string): string`

-   **Parâmetro**: `cpf` - Uma string representando um CPF, com ou sem formatação.
-   **Retorno**: O CPF formatado no padrão `XXX.XXX.XXX-XX`.

```typescript
formatCPF("11144477735"); // "111.444.777-35"
formatCPF("12345678900"); // "123.456.789-00"
```

#### `formatCNPJ(cnpj: string): string`

-   **Parâmetro**: `cnpj` - Uma string representando um CNPJ, com ou sem formatação.
-   **Retorno**: O CNPJ formatado no padrão `XX.XXX.XXX/XXXX-XX`.

```typescript
formatCNPJ("54550752000155"); // "54.550.752/0001-55"
formatCNPJ("12345678000199"); // "12.345.678/0001-99"
```

## Contribuição

1. **Fork** este repositório.
2. Crie uma **branch** para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça o **commit** das alterações (`git commit -m "Adiciona nova funcionalidade"`).
4. Envie para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um **Pull Request**.

Se encontrar algum **bug** ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma **issue**!

---

Este pacote foi desenvolvido para ser **simples, eficiente e confiável** na **validação e formatação de CPF e CNPJ no Brasil**. 🚀🇧🇷
