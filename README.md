# 🌿 Projeto de Paisagismo

Site desenvolvido para apresentação de projetos de paisagismo, com foco em visual, experiência do usuário e navegação intuitiva.

## 🚀 Tecnologias

* React
* TypeScript
* Vite
* Tailwind CSS

## 📱 Funcionalidades

* Grid responsivo de imagens (estilo Instagram no mobile)
* Modal para visualização ampliada das fotos
* Navegação entre imagens (botões e swipe no mobile)
* Interação ao toque
* Scroll suave e animações

## 💡 Diferenciais

* Experiência mobile aprimorada (gestos, swipe e feedback visual)
* Layout adaptado para diferentes tamanhos de tela
* Código organizado e reutilizável
* Foco em UI/UX

## 🖼️ Preview

<!DOCTYPE html>

<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview do Projeto</title>

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
    }

    h1 {
      text-align: center;
      padding: 20px;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .card:hover {
      transform: scale(1.03);
    }

    .card img {
      width: 100%;
      display: block;
    }

    .card p {
      padding: 10px;
      font-size: 14px;
      text-align: center;
    }
  </style>

</head>

<body>
  <h1>Preview do Projeto 🌿</h1>

  <div class="container">
    <div class="grid">


  <div class="card">
    <img src="preview1.png" alt="Tela inicial">
    <p>Tela inicial</p>
  </div>

  <div class="card">
    <img src="preview2.png" alt="Grid de projetos">
    <p>Grid de últimos projetos</p>
  </div>

  <div class="card">
    <img src="preview3.png" alt="Tela de contato">
    <p>Contato</p>
  </div>

   <div class="card">
    <img src="preview4.png" alt="Grid com todos os projetos">
    <p>Todos os projetos</p>
  </div>

  <div class="card">
    <img src="preview5.png" alt="Detalhes do projeto">
    <p>Detalhes do projeto</p>
  </div>

  <div class="card">
    <img src="preview6.png" alt="Área de navegação mobile">
    <p>Menu mobile</p>
  </div>

  <div class="card">
    <img src="preview7.png" alt="Tela inicial mobile">
    <p>Tela inicial mobile</p>
  </div>

  <div class="card">
    <img src="preview7.png" alt="Grid de detahes do projeto">
    <p>Detalhes do projeto mobile</p>
  </div>
</div>
```

  </div>
</body>
</html>


## 🌐 Deploy

Projeto publicado na Netlify:
👉 (https://mauropaisagismo.netlify.app/)

## 📦 Como rodar o projeto

```bash
# clonar repositório
git clone https://github.com/eummilena/portifolio-paisagismo.git

# entrar na pasta
cd portifolio-paisagismo

# instalar dependências
npm install

# rodar projeto
npm run dev
```



## 👩‍💻 Desenvolvido por

Milena — Desenvolvedora Front-end
