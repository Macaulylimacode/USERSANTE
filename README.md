# USERSANTE
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://github.com/Macaulylimacode/USERSANTE/blob/main/LICENSE)

# 🏦 Sistema Bancário - Plataforma Web Completa

Este projeto é um sistema bancário completo com:

- Login seguro para **usuários** e **administrador central**
- Funcionalidades de **pagamentos**, **consulta de saldo**, **emissão de extratos**
- Backend em **Node.js + Express**
- Frontend moderno em **React + TailwindCSS**
- Banco de dados **PostgreSQL**
- Instalação rápida com **Docker + Docker Compose**
- Aplicação da **LGPD** com acesso restrito ao administrador

---

## 📂 Estrutura do Projeto

banco-sistema
- backend/ # API em Node.js
- frontend/ # Interface do usuário (React)
- db/init.sql # Script de criação do banco PostgreSQL
- docker-compose.yml # Orquestração dos serviços
- .env # Variáveis de ambiente

---

## 🚀 Como Executar o Projeto (via Docker)

### 1. Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

# Tecnologias utilizadas:
### Technologies used:

![java](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

---

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)

# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/Macaulylimacode/USERSANTE.git

# entrar na pasta do projeto
cd USERSANTE

# executar o projeto
./mvnw spring-boot:run
```

# 🖥️ Frontend - React (pasta /frontend)

Tecnologias:
React 18

React Router DOM

TailwindCSS

Axios para requisições HTTP

Telas:
Login

Cadastro

Painel do Usuário

Painel do Administrador

Pagamento e Extrato

# 🛢️ Banco de Dados - PostgreSQL (pasta /db/init.sql)

Contém as tabelas:

Usuarios

Contas

Pagamentos

Extratos

Autenticacoes

AdministradorCentral

# ⚖️ LGPD Aplicada

Senhas criptografadas com bcrypt

Logs de autenticação

Apenas o Administrador Central pode acessar dados sensíveis

Tokens JWT com expiração

Nenhuma informação pessoal exposta sem permissão

# ✅ Funcionalidades em Destaque

Login seguro com token

Usuário consulta saldo e faz pagamento

Admin visualiza todos os usuários e relatórios

Arquitetura segura com separação clara de camadas

Painel moderno e responsivo

# 🛠️ To-do Futuro

Envio de notificações por e-mail

Recuperação de senha

Dupla autenticação (2FA)

Relatórios em PDF

👨‍💻 Desenvolvido por

Macauly Lima


[![linkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/macauly-lima-75984a269)
