# Sistema de Feedback TICBOX

Uma aplicação web simples para **coletar**, **armazenar** e **visualizar** feedbacks de usuários, usando apenas **HTML**, **CSS** e **JavaScript**. Os dados ficam salvos no **LocalStorage** do navegador.

---

## Funcionalidades

- **Envio de feedback** com:
  - Nome  
  - Telefone (com máscara e link para WhatsApp)  
  - E-mail (link `mailto:`)  
  - Descrição  
  - Avaliação (nota de 0 a 10)  
- **Visualização de feedbacks** em cards:
  - Informações agrupadas à esquerda  
  - Botões de **WhatsApp** e **E-mail** ao lado  
  - Opções de **editar** e **excluir**  
- **Navegação**:
  - Botão “Salvar Feedback”  
  - Botão “Ver Feedbacks” para ir direto à lista  
- **Estilo** em tons de verde (paleta definida em CSS)

---

## Como Executar

1. **Clone** ou **baixe** este repositório para sua máquina.  
2. Abra o arquivo **`index.html`** no seu navegador (Chrome, Firefox, Edge, etc.).  
3. Preencha os campos e clique em **“Salvar Feedback”**.  
4. Para ver todos os feedbacks, clique em **“Ver Feedbacks”**.  

> Não é necessário servidor ou instalação de dependências. Funciona 100% localmente e offline após o carregamento inicial.

---

## Tecnologias

- **HTML5**  
- **CSS3** (variables, flexbox, media queries)  
- **JavaScript (ES6+)**  
- **LocalStorage**  

---

## Observações

- Todos os dados ficam no **navegador** do usuário.  
- Remova o **LocalStorage** do seu devtools para limpar todos os feedbacks.  
- Os botões de contato geram links dinâmicos com base nos dados inseridos.

---

Feito por *Matheus Araújo Carvalho*.  



