# Framework de Saúde Confiável (FSC)

![Logo do FSC](logo.png)

O Framework de Saúde Confiável (FSC) é uma ferramenta inovadora para ajudar na seleção de algoritmos de consenso em projetos de blockchain no contexto da saúde. Este repositório contém o código-fonte e a documentação relacionada ao FSC.

## Visão Geral

O FSC é uma ferramenta de código aberto projetada para ajudar as partes interessadas na área da saúde a escolher o algoritmo de consenso mais adequado para seus projetos de blockchain. Ele leva em consideração vários critérios e métricas, incluindo segurança, escalabilidade e eficiência.

## Funcionalidades Principais

- Seleção de algoritmo de consenso com base em critérios definidos.
- Comparação de métricas entre algoritmos de consenso.
- Adaptação de métricas com base nas necessidades do projeto.
- Facilidade de colaboração e revisão de métricas.

## Instalação

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm instalados.
3. Execute `npm install` na raiz do projeto para instalar as dependências.

## Uso

- Execute o framework com `npx hardhat run SimpleToken.js`.
- Siga as instruções no terminal para interagir com o FSC.
ara o funcionamento do C.A.R.E Blockchain é necessário que o Helix Sandbox NG esteja sendo executado e federado.

Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina a seguinte ferramenta: Docker.


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Configurações

Para fazer a configuração do serviço da blockchain, é necessário editar as variaveis de ambiente que se encontram no docker-compose.yml, sendo elas:

ConnString : Conexão ao banco de dados da blockchain (MongoDB).
Difficulty : Dificuldade da cadeia da blockchain.
MonitoringTime : Intevarlo de tempo entre cada validação da blockchain.
HelixUrl : Url do Helix Sandbox NG.
HelixEntity : Entidade do Helix Sandbox NG.
Blockchain : Url para obtenção de outra blockchain em funcionamento, caso a blockchain atual seja corrompida.

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

Blockchain (NodeJS + hardhat)

Veja o arquivo package.json

Utilitários

Protótipo: Adobe XD
Editor: Visual Studio Code
Markdown: StackEdit, Markdown Emoji
Teste de API: Postman

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar o FSC. Consulte o [Guia de Contribuição](CONTRIBUTING.md) para obter mais informações.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

## Contato

Para qualquer dúvida ou sugestão, entre em contato conosco em:

👋 Hi, I’m @vcanieus
👀 I’m interested in Cybersecurity, Governance, Digital strategies.
🌱 I’m currently learning about the Consensus Algorithm.
💞️ I’m looking to collaborate in studies on the analysis of consensus algorithms for healthcare blockchains.
📫 How to reach me: 
- Email: 210035625@aluno.unb.br
- Linkedin: https://www.linkedin.com/in/suenia-almeida-11113a34/
- Website: [https://www.fscframework.com](https://www.fscframework.com)

---

**Nota:** Este é projeto que foi desenvolvido durante o trabalho de conclusão de curso (TCC) do PROGRAMA DE POS GRADUACAO PROFISSIONAL DE ENGENHARIA ELETRICA -  PPEE da Universidade de Brasilia (UnB) no curso de Engenharia Elétrica - Segurança Cibernética.
