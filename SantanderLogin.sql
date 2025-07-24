CREATE TABLE Usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    consentimento_lgpd BOOLEAN DEFAULT FALSE,
    data_consentimento TIMESTAMP -- Poderia ser NULL se o consentimento inicial ainda não foi dado ou se o usuário não aceitou
);

CREATE TABLE Contas (
    id_conta SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES Usuarios(id_usuario),
    numero_conta VARCHAR(20) UNIQUE NOT NULL,
    agencia VARCHAR(10) NOT NULL,
    saldo DECIMAL(12,2) DEFAULT 0.00
);

CREATE TABLE Pagamentos (
    id_pagamento SERIAL PRIMARY KEY,
    id_conta INT REFERENCES Contas(id_conta),
    valor DECIMAL(10,2) NOT NULL,
    descricao TEXT,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Extratos (
    id_extrato SERIAL PRIMARY KEY,
    id_conta INT REFERENCES Contas(id_conta),
    tipo_operacao VARCHAR(50), -- Renomeado de 'operacao' para ser mais descritivo (Ex: 'DEBITO', 'CREDITO', 'PIX', 'TED', etc.)
    valor DECIMAL(10,2) NOT NULL,
    descricao TEXT,
    data_operacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Autenticacoes (
    id_login SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES Usuarios(id_usuario),
    token TEXT NOT NULL,
    ip_acesso VARCHAR(45),
    data_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sucesso BOOLEAN DEFAULT TRUE
);

CREATE TABLE Administradores ( -- Renomeado de 'AdministradorPrincipal' para um nome mais genérico e escalável
    id_admin SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    ultimo_login TIMESTAMP,
    acesso_total BOOLEAN DEFAULT TRUE -- Indica se tem acesso irrestrito
);

CREATE TABLE LogsAcessoDados (
    id_log SERIAL PRIMARY KEY,
    id_admin INT REFERENCES Administradores(id_admin), -- Atualizado para referenciar a nova tabela 'Administradores'
    id_usuario INT REFERENCES Usuarios(id_usuario),
    data_acesso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    finalidade TEXT NOT NULL
);

CREATE TABLE ConsentimentosLGPD (
    id_consentimento SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES Usuarios(id_usuario),
    tipo_dado TEXT, -- Ex: 'Dados Pessoais', 'Dados de Navegação', etc.
    finalidade TEXT, -- Ex: 'Marketing', 'Análise Interna', 'Atendimento ao Cliente'
    data_consentimento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    revogado BOOLEAN DEFAULT FALSE,
    data_revogacao TIMESTAMP -- Adicionado para registrar quando o consentimento foi revogado
);
