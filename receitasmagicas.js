<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receitas Mágicas</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: 'Arial', sans-serif;
            font-size: 1em;
            background-color: #f4f4f9;
            margin: 0;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        .rainbow-text {
            display: inline-block;
        }
        .rainbow-text span {
            display: inline-block;
            transition: all 0.3s ease;
        }
        .rainbow-text span:nth-child(1) { color: #ff0000; }
        .rainbow-text span:nth-child(2) { color: #ff7f00; }
        .rainbow-text span:nth-child(3) { color: #ffff00; }
        .rainbow-text span:nth-child(4) { color: #00ff00; }
        .rainbow-text span:nth-child(5) { color: #0000ff; }
        .rainbow-text span:nth-child(6) { color: #4b0082; }
        .rainbow-text span:nth-child(7) { color: #9400d3; }
        .ingredient-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 10px;
            max-width: 600px;
            width: 100%;
            padding: 10px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .ingredient-list label {
            display: flex;
            align-items: center;
            background-color: #e9ecef;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .ingredient-list label:hover {
            background-color: #dfe3e8;
        }
        .ingredient-list input {
            margin-right: 10px;
        }
        button {
            margin: 20px;
            padding: 15px 30px;
            font-size: 1em;
            cursor: pointer;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #218838;
        }
        .recipe {
            margin-top: 20px;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 600px;
            text-align: center;
        }
        .recipe h2 {
            margin: 0 0 10px;
        }
        .recipe p {
            margin: 0;
        }
    </style>
</head>
<body>
    <h1>Receitas <span class="rainbow-text">
        <span>M</span><span>á</span><span>g</span><span>i</span><span>c</span><span>a</span><span>s</span>
    </span></h1>
    <div class="ingredient-list">
        <label><input type="checkbox" value="ovo"> Ovo</label>
        <label><input type="checkbox" value="sal"> Sal</label>
        <label><input type="checkbox" value="queijo"> Queijo</label>
        <label><input type="checkbox" value="pão"> Pão</label>
        <label><input type="checkbox" value="maçã"> Maçã</label>
        <label><input type="checkbox" value="banana"> Banana</label>
        <label><input type="checkbox" value="laranja"> Laranja</label>
        <label><input type="checkbox" value="presunto"> Presunto</label>
        <label><input type="checkbox" value="tomate"> Tomate</label>
        <label><input type="checkbox" value="alface"> Alface</label>
        <label><input type="checkbox" value="frango"> Frango</label>
        <label><input type="checkbox" value="carne"> Carne</label>
        <label><input type="checkbox" value="peixe"> Peixe</label>
        <label><input type="checkbox" value="arroz"> Arroz</label>
        <label><input type="checkbox" value="feijão"> Feijão</label>
        <label><input type="checkbox" value="batata"> Batata</label>
        <label><input type="checkbox" value="cenoura"> Cenoura</label>
        <label><input type="checkbox" value="beterraba"> Beterraba</label>
        <label><input type="checkbox" value="espinafre"> Espinafre</label>
        <label><input type="checkbox" value="pepino"> Pepino</label>
    </div>
    <button onclick="suggestRecipe()">Sugerir Receita</button>
    <div id="recipe" class="recipe"></div>
    <script>
        const recipes = [
            {name: "Omelete de Queijo", ingredients: ["ovo", "sal", "queijo"], instructions: "Bata os ovos, adicione sal e queijo. Cozinhe em uma frigideira."},
            {name: "Salada de Frutas", ingredients: ["maçã", "banana", "laranja"], instructions: "Corte todas as frutas e misture em uma tigela."},
            {name: "Sanduíche de Presunto", ingredients: ["pão", "queijo", "presunto"], instructions: "Coloque o queijo e o presunto entre duas fatias de pão."},
            {name: "Frango com Tomate e Alface", ingredients: ["frango", "tomate", "alface"], instructions: "Grelhe o frango e sirva com tomate e alface."},
            {name: "Carne com Arroz e Feijão", ingredients: ["carne", "arroz", "feijão"], instructions: "Cozinhe a carne, o arroz e o feijão juntos."},
            {name: "Legumes Assados", ingredients: ["batata", "cenoura", "beterraba"], instructions: "Asse batata, cenoura e beterraba com azeite e sal."},
            {name: "Salada Verde", ingredients: ["espinafre", "pepino", "alface"], instructions: "Misture espinafre, pepino e alface com azeite e vinagre."},
            {name: "Salada de Ovo", ingredients: ["ovo", "sal", "alface"], instructions: "Ferva os ovos, corte e misture com sal e alface."},
            {name: "Frango com Espinafre", ingredients: ["frango", "espinafre", "sal"], instructions: "Grelhe o frango e sirva com espinafre e sal."},
            {name: "Carne com Batata", ingredients: ["carne", "batata", "sal"], instructions: "Cozinhe a carne e a batata com sal."},
            {name: "Sanduíche de Queijo", ingredients: ["pão", "queijo", "sal"], instructions: "Coloque queijo entre duas fatias de pão e adicione sal."},
            {name: "Arroz com Feijão e Tomate", ingredients: ["arroz", "feijão", "tomate"], instructions: "Cozinhe o arroz e o feijão, e adicione tomate picado."},
            {name: "Batata Frita", ingredients: ["batata", "sal"], instructions: "Corte as batatas em fatias finas e frite até ficarem crocantes. Adicione sal a gosto."},
            {name: "Carne com Cenoura", ingredients: ["carne", "cenoura", "sal"], instructions: "Cozinhe a carne e a cenoura com sal."},
            {name: "Sanduíche de Presunto e Queijo", ingredients: ["pão", "queijo", "presunto", "sal"], instructions: "Coloque o queijo e o presunto entre duas fatias de pão e adicione sal."},
            {name: "Frango com Arroz", ingredients: ["frango", "arroz", "sal"], instructions: "Grelhe o frango e sirva com arroz."},
            {name: "Salada de Tomate", ingredients: ["tomate", "alface", "sal"], instructions: "Corte o tomate e misture com alface e sal."},
            {name: "Feijão com Carne", ingredients: ["feijão", "carne", "sal"], instructions: "Cozinhe o feijão com carne e sal."},
            {name: "Batata Assada", ingredients: ["batata", "sal"], instructions: "Asse a batata com sal."},
            {name: "Frango com Batata", ingredients: ["frango", "batata", "sal"], instructions: "Grelhe o frango e sirva com batata."},
            {name: "Carne com Arroz", ingredients: ["carne", "arroz", "sal"], instructions: "Cozinhe a carne com arroz e sal."},
            {name: "Pepino com Tomate", ingredients: ["pepino", "tomate", "sal"], instructions: "Corte o pepino e o tomate, e adicione sal."},
            {name: "Sanduíche de Queijo e Presunto", ingredients: ["pão", "queijo", "presunto"], instructions: "Coloque o queijo e o presunto entre duas fatias de pão."},
            {name: "Salada de Espinafre", ingredients: ["espinafre", "tomate", "pepino"], instructions: "Misture espinafre, tomate e pepino com azeite e vinagre."},
            {name: "Frango com Cenoura", ingredients: ["frango", "cenoura", "sal"], instructions: "Grelhe o frango e sirva com cenoura."},
            {name: "Arroz com Carne", ingredients: ["arroz", "carne", "sal"], instructions: "Cozinhe o arroz com carne e sal."},
            {name: "Salada de Pepino", ingredients: ["pepino", "alface", "sal"], instructions: "Corte o pepino e misture com alface e sal."},
            {name: "Batata com Feijão", ingredients: ["batata", "feijão", "sal"], instructions: "Cozinhe a batata com feijão e sal."},
            {name: "Frango com Pepino", ingredients: ["frango", "pepino", "sal"], instructions: "Grelhe o frango e sirva com pepino."},
            {name: "Salada de Espinafre com Tomate", ingredients: ["espinafre", "tomate", "sal"], instructions: "Misture espinafre e tomate com sal."},
            {name: "Arroz com Feijão", ingredients: ["arroz", "feijão", "sal"], instructions: "Cozinhe o arroz com feijão e sal."},
            {name: "Sanduíche de Presunto com Tomate", ingredients: ["pão", "presunto", "tomate", "sal"], instructions: "Coloque o presunto e o tomate entre duas fatias de pão e adicione sal."},
            {name: "Frango com Batata e Cenoura", ingredients: ["frango", "batata", "cenoura"], instructions: "Grelhe o frango e sirva com batata e cenoura."},
            {name: "Carne com Beterraba", ingredients: ["carne", "beterraba", "sal"], instructions: "Cozinhe a carne com beterraba e sal."},
            {name: "Pepino com Alface", ingredients: ["pepino", "alface", "sal"], instructions: "Corte o pepino e misture com alface e sal."},
            {name: "Batata com Espinafre", ingredients: ["batata", "espinafre", "sal"], instructions: "Cozinhe a batata com espinafre e sal."},
            {name: "Carne com Tomate", ingredients: ["carne", "tomate", "sal"], instructions: "Cozinhe a carne com tomate e sal."},
            {name: "Frango com Beterraba", ingredients: ["frango", "beterraba", "sal"], instructions: "Grelhe o frango e sirva com beterraba."},
            {name: "Arroz com Cenoura", ingredients: ["arroz", "cenoura", "sal"], instructions: "Cozinhe o arroz com cenoura e sal."},
            {name: "Salada de Tomate com Pepino", ingredients: ["tomate", "pepino", "sal"], instructions: "Corte o tomate e o pepino, e adicione sal."},
            {name: "Carne com Espinafre", ingredients: ["carne", "espinafre", "sal"], instructions: "Cozinhe a carne com espinafre e sal."},
            {name: "Sanduíche de Queijo com Tomate", ingredients: ["pão", "queijo", "tomate", "sal"], instructions: "Coloque o queijo e o tomate entre duas fatias de pão e adicione sal."},
            {name: "Frango com Alface", ingredients: ["frango", "alface", "sal"], instructions: "Grelhe o frango e sirva com alface."},
            {name: "Arroz com Beterraba", ingredients: ["arroz", "beterraba", "sal"], instructions: "Cozinhe o arroz com beterraba e sal."},
            {name: "Batata com Tomate", ingredients: ["batata", "tomate", "sal"], instructions: "Cozinhe a batata com tomate e sal."},
            {name: "Salada de Alface com Tomate", ingredients: ["alface", "tomate", "sal"], instructions: "Corte o tomate e misture com alface e sal."},
            {name: "Feijão com Cenoura", ingredients: ["feijão", "cenoura", "sal"], instructions: "Cozinhe o feijão com cenoura e sal."},
            {name: "Frango com Arroz e Alface", ingredients: ["frango", "arroz", "alface"], instructions: "Grelhe o frango e sirva com arroz e alface."},
            {name: "Batata com Beterraba", ingredients: ["batata", "beterraba", "sal"], instructions: "Cozinhe a batata com beterraba e sal."},
            {name: "Arroz com Espinafre", ingredients: ["arroz", "espinafre", "sal"], instructions: "Cozinhe o arroz com espinafre e sal."},
            {name: "Pepino com Tomate e Sal", ingredients: ["pepino", "tomate", "sal"], instructions: "Corte o pepino e o tomate, e adicione sal."},
            {name: "Carne com Alface", ingredients: ["carne", "alface", "sal"], instructions: "Cozinhe a carne com alface e sal."},
            {name: "Feijão com Beterraba", ingredients: ["feijão", "beterraba", "sal"], instructions: "Cozinhe o feijão com beterraba e sal."},
            {name: "Frango com Espinafre", ingredients: ["frango", "espinafre", "sal"], instructions: "Grelhe o frango e sirva com espinafre."},
            {name: "Batata com Alface", ingredients: ["batata", "alface", "sal"], instructions: "Cozinhe a batata com alface e sal."},
            {name: "Arroz com Pepino", ingredients: ["arroz", "pepino", "sal"], instructions: "Cozinhe o arroz com pepino e sal."},
            {name: "Sanduíche de Queijo com Alface", ingredients: ["pão", "queijo", "alface", "sal"], instructions: "Coloque o queijo e a alface entre duas fatias de pão e adicione sal."},
            {name: "Frango com Cenoura e Alface", ingredients: ["frango", "cenoura", "alface"], instructions: "Grelhe o frango e sirva com cenoura e alface."},
            {name: "Carne com Cenoura e Beterraba", ingredients: ["carne", "cenoura", "beterraba"], instructions: "Cozinhe a carne com cenoura e beterraba."},
            {name: "Arroz com Tomate e Espinafre", ingredients: ["arroz", "tomate", "espinafre"], instructions: "Cozinhe o arroz com tomate e espinafre."},
            {name: "Batata com Cenoura e Alface", ingredients: ["batata", "cenoura", "alface"], instructions: "Cozinhe a batata com cenoura e alface."},
            {name: "Sanduíche de Queijo com Presunto e Tomate", ingredients: ["pão", "queijo", "presunto", "tomate"], instructions: "Coloque o queijo, o presunto e o tomate entre duas fatias de pão."},
            {name: "Frango com Arroz e Cenoura", ingredients: ["frango", "arroz", "cenoura"], instructions: "Grelhe o frango e sirva com arroz e cenoura."},
            {name: "Carne com Espinafre e Pepino", ingredients: ["carne", "espinafre", "pepino"], instructions: "Cozinhe a carne com espinafre e pepino."},
            {name: "Arroz com Alface e Tomate", ingredients: ["arroz", "alface", "tomate"], instructions: "Cozinhe o arroz com alface e tomate."},
            {name: "Batata com Pepino e Cenoura", ingredients: ["batata", "pepino", "cenoura"], instructions: "Cozinhe a batata com pepino e cenoura."},
            {name: "Sanduíche de Queijo com Presunto e Alface", ingredients: ["pão", "queijo", "presunto", "alface"], instructions: "Coloque o queijo, o presunto e a alface entre duas fatias de pão."},
            {name: "Frango com Beterraba e Pepino", ingredients: ["frango", "beterraba", "pepino"], instructions: "Grelhe o frango e sirva com beterraba e pepino."},
            {name: "Carne com Arroz e Tomate", ingredients: ["carne", "arroz", "tomate"], instructions: "Cozinhe a carne com arroz e tomate."},
            {name: "Arroz com Espinafre e Alface", ingredients: ["arroz", "espinafre", "alface"], instructions: "Cozinhe o arroz com espinafre e alface."},
            {name: "Batata com Tomate e Alface", ingredients: ["batata", "tomate", "alface"], instructions: "Cozinhe a batata com tomate e alface."},
            {name: "Sanduíche de Presunto com Tomate e Alface", ingredients: ["pão", "presunto", "tomate", "alface"], instructions: "Coloque o presunto, o tomate e a alface entre duas fatias de pão."},
            {name: "Frango com Cenoura e Beterraba", ingredients: ["frango", "cenoura", "beterraba"], instructions: "Grelhe o frango e sirva com cenoura e beterraba."},
            {name: "Carne com Espinafre e Pepino", ingredients: ["carne", "espinafre", "pepino"], instructions: "Cozinhe a carne com espinafre e pepino."},
            {name: "Arroz com Alface e Cenoura", ingredients: ["arroz", "alface", "cenoura"], instructions: "Cozinhe o arroz com alface e cenoura."},
            {name: "Batata com Tomate e Espinafre", ingredients: ["batata", "tomate", "espinafre"], instructions: "Cozinhe a batata com tomate e espinafre."},
            {name: "Sanduíche de Queijo com Presunto e Beterraba", ingredients: ["pão", "queijo", "presunto", "beterraba"], instructions: "Coloque o queijo, o presunto e a beterraba entre duas fatias de pão."},
            {name: "Frango com Arroz e Pepino", ingredients: ["frango", "arroz", "pepino"], instructions: "Grelhe o frango e sirva com arroz e pepino."},
            {name: "Carne com Cenoura e Alface", ingredients: ["carne", "cenoura", "alface"], instructions: "Cozinhe a carne com cenoura e alface."},
            {name: "Arroz com Espinafre e Tomate", ingredients: ["arroz", "espinafre", "tomate"], instructions: "Cozinhe o arroz com espinafre e tomate."},
            {name: "Batata com Pepino e Espinafre", ingredients: ["batata", "pepino", "espinafre"], instructions: "Cozinhe a batata com pepino e espinafre."},
            {name: "Sanduíche de Queijo com Presunto e Cenoura", ingredients: ["pão", "queijo", "presunto", "cenoura"], instructions: "Coloque o queijo, o presunto e a cenoura entre duas fatias de pão."},
            {name: "Frango com Alface e Tomate", ingredients: ["frango", "alface", "tomate"], instructions: "Grelhe o frango e sirva com alface e tomate."},
            {name: "Carne com Arroz e Beterraba", ingredients: ["carne", "arroz", "beterraba"], instructions: "Cozinhe a carne com arroz e beterraba."},
            {name: "Arroz com Espinafre e Pepino", ingredients: ["arroz", "espinafre", "pepino"], instructions: "Cozinhe o arroz com espinafre e pepino."},
            {name: "Batata com Tomate e Cenoura", ingredients: ["batata", "tomate", "cenoura"], instructions: "Cozinhe a batata com tomate e cenoura."},
            {name: "Sanduíche de Presunto com Pepino e Tomate", ingredients: ["pão", "presunto", "pepino", "tomate"], instructions: "Coloque o presunto, o pepino e o tomate entre duas fatias de pão."},
            {name: "Frango com Beterraba e Espinafre", ingredients: ["frango", "beterraba", "espinafre"], instructions: "Grelhe o frango e sirva com beterraba e espinafre."},
            {name: "Carne com Arroz e Alface", ingredients: ["carne", "arroz", "alface"], instructions: "Cozinhe a carne com arroz e alface."},
            {name: "Arroz com Cenoura e Espinafre", ingredients: ["arroz", "cenoura", "espinafre"], instructions: "Cozinhe o arroz com cenoura e espinafre."},
            {name: "Batata com Tomate e Pepino", ingredients: ["batata", "tomate", "pepino"], instructions: "Cozinhe a batata com tomate e pepino."},
            {name: "Sanduíche de Queijo com Presunto e Alface", ingredients: ["pão", "queijo", "presunto", "alface"], instructions: "Coloque o queijo, o presunto e a alface entre duas fatias de pão."},
            {name: "Frango com Cenoura e Alface", ingredients: ["frango", "cenoura", "alface"], instructions: "Grelhe o frango e sirva com cenoura e alface."},
            {name: "Carne com Espinafre e Beterraba", ingredients: ["carne", "espinafre", "beterraba"], instructions: "Cozinhe a carne com espinafre e beterraba."},
            {name: "Arroz com Pepino e Cenoura", ingredients: ["arroz", "pepino", "cenoura"], instructions: "Cozinhe o arroz com pepino e cenoura."},
            {name: "Batata com Tomate e Alface", ingredients: ["batata", "tomate", "alface"], instructions: "Cozinhe a batata com tomate e alface."},
            {name: "Sanduíche de Presunto com Cenoura e Alface", ingredients: ["pão", "presunto", "cenoura", "alface"], instructions: "Coloque o presunto, a cenoura e a alface entre duas fatias de pão."},
            {name: "Frango com Beterraba e Pepino", ingredients: ["frango", "beterraba", "pepino"], instructions: "Grelhe o frango e sirva com beterraba e pepino."},
            {name: "Carne com Arroz e Cenoura", ingredients: ["carne", "arroz", "cenoura"], instructions: "Cozinhe a carne com arroz e cenoura."},
            {name: "Arroz com Espinafre e Beterraba", ingredients: ["arroz", "espinafre", "beterraba"], instructions: "Cozinhe o arroz com espinafre e beterraba."},
            {name: "Batata com Tomate e Cenoura", ingredients: ["batata", "tomate", "cenoura"], instructions: "Cozinhe a batata com tomate e cenoura."}
        ];

        function suggestRecipe() {
            const checkboxes = document.querySelectorAll('.ingredient-list input[type="checkbox"]');
            const selectedIngredients = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
            const result = recipes.find(recipe => recipe.ingredients.every(ing => selectedIngredients.includes(ing)));

            const recipeDiv = document.getElementById('recipe');
            if (result) {
                recipeDiv.innerHTML = `<h2>${result.name}</h2><p>${result.instructions}</p>`;
            } else {
                recipeDiv.innerHTML = `<p>Nenhuma receita encontrada com os ingredientes fornecidos.</p>`;
            }
        }
    </script>
</body>
</html>
