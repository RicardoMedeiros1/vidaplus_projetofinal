# Documentação do Projeto VidaPlus

## 1. Introdução

O VidaPlus é um sistema de gestão de saúde desenvolvido para facilitar o agendamento e acompanhamento de consultas médicas, com foco especial em telemedicina. O sistema visa modernizar a experiência de atendimento médico, conectando pacientes e profissionais de saúde de forma eficiente e segura.

### Objetivos Principais:
- Digitalizar o processo de agendamento de consultas
- Facilitar o acesso à telemedicina
- Melhorar a gestão de prontuários médicos
- Otimizar o tempo de profissionais de saúde
- Proporcionar uma experiência mais conveniente para os pacientes

## 2. Requisitos

### Requisitos Funcionais (RF)

#### Implementados:
- [x] Sistema de autenticação (login/cadastro)
- [x] Agendamento de consultas
- [x] Consultas por telemedicina
- [x] Visualização de histórico médico
- [x] Gestão de usuários (pacientes e profissionais)
- [x] Geração de relatórios básicos

#### Pendentes:
- [ ] Sistema de prontuário eletrônico completo
- [ ] Integração com sistemas de pagamento
- [ ] Chat em tempo real para telemedicina
- [ ] Sistema de notificações por e-mail/SMS
- [ ] Agendamento recorrente de consultas

### Requisitos Não Funcionais (RNF)

#### Implementados:
- [x] Interface responsiva
- [x] Sistema de segurança básico
- [x] Compatibilidade com principais navegadores
- [x] Performance adequada para operações básicas

#### Pendentes:
- [ ] Alta disponibilidade (99.9%)
- [ ] Backup automático
- [ ] Criptografia de dados sensíveis
- [ ] Conformidade com LGPD
- [ ] Escalabilidade para múltiplos usuários simultâneos

## 3. Modelagem

### Diagrama de Casos de Uso
O sistema possui três atores principais:
- Paciente: Usuário final que agenda consultas e acessa serviços
- Profissional: Médico ou especialista que realiza atendimentos
- Administrador: Gerencia o sistema e seus usuários

Principais casos de uso:
1. Login/Cadastro
2. Agendamento de Consulta
3. Realização de Telemedicina
4. Visualização de Histórico
5. Gestão de Usuários
6. Geração de Relatórios
7. Configuração do Sistema

### Diagrama de Classes
O sistema é estruturado em classes principais:
- Usuario (classe base)
  - Paciente
  - Profissional
  - Administrador
- Consulta
- Prontuario

### Diagrama ER
Estrutura do banco de dados com as principais entidades:
- usuarios
- pacientes
- profissionais
- consultas

## 4. Implementação

### Tecnologias Utilizadas
- Frontend: HTML5, CSS3, JavaScript
- Backend: Python
- Banco de Dados: MySQL
- Ferramentas de Desenvolvimento: VS Code, Git

### Estrutura do Projeto
```
vidaplus/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
├── admin.html
├── admin-usuarios.html
├── admin-relatorios.html
├── admin-configuracoes.html
├── agendamento.html
├── cadastro.html
├── index.html
├── login.html
├── pacientes.html
├── profissionais.html
└── telemedicina.html
```

## 5. Plano de Testes

### Testes de Usabilidade
1. **Login**
   - Entrada: Credenciais válidas
   - Saída: Acesso ao sistema
   - Caso de erro: Mensagem de erro apropriada

2. **Agendamento**
   - Entrada: Data, horário, especialidade
   - Saída: Confirmação do agendamento
   - Validações: Disponibilidade, conflitos

3. **Telemedicina**
   - Entrada: Link da consulta
   - Saída: Sala de videoconferência
   - Testes: Qualidade de áudio/vídeo

### Testes de Integração
- Verificação de fluxo completo de agendamento
- Testes de comunicação entre módulos
- Validação de permissões de usuário

## 6. Conclusão

### O que foi feito
- Sistema básico de gestão de consultas
- Interface responsiva e intuitiva
- Módulo de telemedicina
- Gestão de usuários

### Aprendizados
- Desenvolvimento de interfaces responsivas
- Implementação de sistemas de autenticação
- Gestão de estados em aplicações web
- Integração de diferentes tecnologias

### Dificuldades
- Implementação de videoconferência
- Gestão de concorrência em agendamentos
- Segurança de dados sensíveis
- Performance em operações simultâneas

## 7. Referências

### Frameworks e Bibliotecas
- Bootstrap 5.0
- jQuery 3.6.0
- Font Awesome 6.0

### Tutoriais e Documentação
- MDN Web Docs
- W3Schools
- Bootstrap Documentation
- Python Documentation

### Ferramentas de Desenvolvimento
- Visual Studio Code
- Git
- GitHub
- PlantUML

### Sites de Referência
- [Bootstrap](https://getbootstrap.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [GitHub](https://github.com/) 