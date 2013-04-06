![HTML 5](https://dl.dropbox.com/u/1747775/aulas/frontend/html5_logo.png)

# Desenvolvimento Front-End

## 1 - HTML

* [HTML não é programação](#topic_11)
* [Estrutura básica de um documento HTML](#topic_12)
* [Elementos para marcação de texto](#topic_13)
* [Elementos para marcação de imagens](#topic_14)
* [Elementos estruturais](#topic_15)
* [Elementos de formulário](#topic_16)
* [Hyperlinks](#topic_17)
* [IFrames](#topic_18)
* Novidades no HTML 5
* Elementos multimidia (áudio, vídeo, canvas)

### <a name="topic_11"/></a> 1.1 - HTML não é programação

Muitas vezes as pessoas confundem o desenvolvimento de HTML com programação, HTML não é uma linguagem de programação, pois não possui as características de uma, como variáveis, estruturas de controle etc.

### <a name="topic_12"/></a> 1.2 - Estrutura básica de um documento HTML

```html
<!doctype>
<html>
<head>
  <title>Título do documento</title>
</head>
<body>
  conteúdo do documento
</body>
</html>
```

#### 1.2.1 - Tag ```<!doctype>```

Um documento HTML é composto por diversos elementos denominados tags. Por exemplo a tag ```<!doctype>``` define
o tipo de html que estamos escrevendo, no caso do exemplo acima HTML5, fazendo o browser compreender
corretamente os elementos presentes no documento.

Outros doctypes possíveis:

Doctype para HTML 4.01:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

Doctype para XHTML 1.0:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
```

Doctype para HTML5:

```html
<!doctype>
```

Ou:

```html
<!DOCTYPE>
```

#### 1.2.2 - Tag ```<html></html>```
Define o inicio/fim do documento.

#### 1.2.3 - Tag ```<head></head>``` 
Define uma região para insersão de elementos especificos, como por exemplo a tag para definir o titulo do documento ```<title></title>```, inserir JavaScript (```<script></script>```), folhas de estilos (```<link href="estilos.css" rel="stylesheet">```, ```<style></style>```) e metadados como descrição da página, palavras-chave entre muitas outras.

#### 1.2.4 - Tag ```<body></body>``` 

Define a região do documento onde serão inseridos todos os elementos que fazem parte do **corpo** do documento, como elementos de texto e elementos estruturais, elementos de scripts e estilo também podem ser inseridos nessa região, porem o uso do ultimo nessa região não é recomendado pela comunidade.

HTML é uma linguagem de **marcação**, ou seja marcamos o conteúdo do documento com tags para dar significado, estruturar ou incorporar um conteúdo.

### <a name="topic_13"/></a> 1.3 - Elementos para marcação de texto

#### 1.3.1 - Tags ```<h1></h1>```, ```<h2></h2>```, ..., ```<h6></h6>```

Os títulos  como o próprio nome sugere definem os títulos para os textos do documento e devem ser utilizados de acordo com a importância e hierarquia do texto. Quanto menor no número maior a importância, por exemplo h1 é mais importante do que h2.

Na folha de estilo padrão o browser renderiza os títulos com tamanhos diferentes para destacar a importância.

#### 1.3.2 - Tag ```<p></p>``` 

Define blocos de texto, paragrafos, da mesma forma como estamos acostumados na gramática.

#### 1.3.3 - Tag ```<b></b>```
Renderiza o texto em negrito. Eassa Tag não tem significado semântico e seu uso não é mais recomendado.

#### 1.3.4 - Tag ```<i></i>```
Renderiza o texto em itálico. Eassa Tag não tem significado semântico e seu uso não é mais recomendado.

#### 1.3.5 - Tag ```<strong></strong>```
Define um texto de alta importância em uma frase, por padrão o browser renderiza esse texto em negrito.

Exemplo:

```html
<strong>Perigo!</strong> Risco de incêndio.
```

#### 1.3.6 - Tag ```<em></em>```

Define um texto no qual se deseja dar enfase, geralmente um texto que é pronunciado com outra entonação.

Exemplo:

```html
Eu quero que entreguem o meu site <em>agora</em>!
```

#### 1.3.7 - Tag ```<span></span>```

A tag ```span``` não tem significado semântico, geralmente é utilizada para auxiliar na formatação de textos, como por exemplo para alterar a cor ou tamanho de determinadas palavras, também pode ser utilizada na estruturação do layout.


Ex:

```html
<style>
	.vermelho{
		color: red;
	}
</style>
<span class="vermelho">Esse texto é vermelho</span>!
```

### <a name="topic_14"/></a> 1.4 - Elementos para marcação de imagens

Para inserir imagens em um documento utiliza-se a tag ```<img>```.

Ex:

```html
<img src="imagem.jpg" alt="Descrição alternativa">
```

A tag ```<img>``` possui dois atributos principais, ```src``` define o caminho para o arquivo de imagem a ser inserido, e ```alt``` define uma descrição alternativa para a imagem, essa descrição é exibida quando a imagem ainda não carregou ou quando ela não esta disponível, o atributo ```alt``` também é interpretado por **mecanismos de busca e por leitores de tela**, sendo assim um ponto importante para semântica e SEO.

### <a name="topic_15"/></a> 1.5 - Elementos estruturais

Elementos estruturais são os utilizados para dar estrutura e forma ao conteúdo de um documento.

#### 1.5.1 - Lista não ordenada

Listas não ordenadas são utilizadas para diversos propósitos, como por exemplo definir uma lista de características em uma determinado objeto, ou definir os itens de um menu de navegação para um website.

Elas são formadas por dois elementos, o container dos itens ```<ul></ul>``` e os itens da lista ```<li></li>```.

Ex:

```html
<p>Itens opicionais em um carro:</p>
<ul>
	<li>ar condicionado</li>
	<li>frios ABS</li>
	<li>farol de neblina</li>
	<li>alarme</li>
</ul>
```

#### 1.5.2 - Lista ordenada

Semelhantes a lista não ordenada porem esta é utilizada para definir um lista que segue uma ordem especifica, pode ser utilizada por exemplo para definir os itens de uma receita ou uma sequência de passos a ser seguida

Elas são formadas por dois elementos, o container dos itens ```<ol></ol>``` e os itens da lista ```<li></li>```.

Ex:

```html
<p>Ingredientes:</p>
<ol>
	<li>1kg de farinha de trigo</li>
	<li>3 ovos</li>
	<li>1 colher de sal</li>
</ol>
```

#### 1.5.3 - Lista de definição

As listas de definição são utlizadas para descrever determinados termos, são compostas de 3 elementos, `<dl></dl>` define o container para a lista, `<dt></dt>` define o termo a ser definido e `<dd></dd>` é a definição do termo.
 
```html
<dl>
	<dt>Disco</dt>
	<dd>Um objeto circular</dd>

	<dt>Quadro</dt>
	<dd>Um objeto quadrado</dd>	
	<dd>Lugar onde se coloca uma foto</dd>	
</dl>
```

#### 1.5.4 - `<div></div>`

A tag `<div></div>` não tem significado semântico, é um elemento utilizado básicamente para estruturação do layout de um documento, utilizamos elas em conjunto com o CSS para definir blocos e colunas de conteúdo.

Ex:

```html
<div class="blog">

	<h1 class="blog-title">Meu Blog</h1>
	
	<div class="post">
		<h2 class="post-title">Titulo de uma postagem em um blog</h2>
		<div class="post-text">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
		</div>
	</div>

	<div class="post">
		<h2 class="post-title">Outra postagem em um blog</h2>
		<div class="post-text">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
		</div>
	</div>	

</div>
```

### <a name="topic_16"/></a> 1.6 - Elementos de formulário

Um formulário em HTML é um conjundo de elementos geralmente interativos que recebem entradas ou escolhas do usuário que posteriormente são enviadas para um endereço onde o back-end faz o processamento dos dados, podendo por exemplo enviar os dados para algum e-mail ou salvar em um banco de dados

#### 1.6.1 - `<form></form>`

Define o container de um formulário, ela possui atributos que definem o seu comportamento quando for enviado

Os atributos mais comumente usados são:

* `action` : define o endereço para onde os dados serão enviados
* `method` : define o método de envio dos dados através do protocoo [HTTP](http://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol) que pode ser POST ou GET
* `enctype` : esse atributo deve ser utilizado em formulários que enviem arquivos com o valor de `multipart/form-data`

Ex:

```html
<form action="http://www.example.com/enviar-contato/" method="post"></form>
```

#### 1.6.2 - `<label></label>`

Define uma descrição para um campo do formulário. Para fazer essa associação corretamente devemos utilizar `for` da tag `label` referênciando o atributo `id` do campo.

Quando isso é feito e o usuário clica no label o browser automáticamente mudará o foco para o campo correspondente.

Ex:

```html
<label for="nome">Nome:</label>
<input type="text" id="nome">

<label for="email">e-mail:</label>
<input type="text" id="email">
```

#### 1.6.3 - `<input type="text">`

Define um campo para entrada de texto em uma linha

Ex:

![Form Input Text](https://dl.dropbox.com/u/1747775/aulas/frontend/input_text.png)

#### 1.6.4 - `<input type="password">`

Ex:

![Form Input Password](https://dl.dropbox.com/u/1747775/aulas/frontend/input_pass.png)

Define um campo para entrada de senhas, os caractéres digitados nesse tipo de campo são substituídos por uma máscara.

#### 1.6.5 - `<input type="button">` ou `<button type="button"></button>`

Define um botão para propósitos diversos.

Ex:

![Form Input Button](https://dl.dropbox.com/u/1747775/aulas/frontend/input_button.png)

#### 1.6.6 - `<input type="radio">`

Define elementos para seleção de uma única opção.

```html
<p>Sexo:</p>

<input type="radio" value="m" name="sexo">
<label>Masculino</label>

<input type="radio" value="f" name="sexo">
<label>Feminino</label>
```

![Form Radio](https://dl.dropbox.com/u/1747775/aulas/frontend/radio.png)

#### 1.6.7 - `<input type="checkbox">`

Define elementos para seleção de multiplas opções

```html
<p>Quais gêneros de filme você gosta?:</p>

<input type="checkbox" value="terror" name="genero">
<label>Terror</label>

<input type="checkbox" value="suspense" name="genero">
<label>Suspense</label>

<input type="checkbox" value="ficcao" name="genero">
<label>Ficção</label>

<input type="checkbox" value="romance" name="genero">
<label>Romance</label>
```

![Form Checkbox](https://dl.dropbox.com/u/1747775/aulas/frontend/checkbox.png)

#### 1.6.8 - `<select></select>`

Define uma lista de opções para seleção de uma opção ou para seleção multipla caso o elemento tenha o atributo `multiple="multiple"`

As opções são definidas por elementos `<option>opção</option>`

Ex para seleção de uma opção:

```html
<select>
	<option>Selecione um estado</option>
	<option>Acre</option>
	<option>Sao Paulo</option>
	<option>Rio de Janeiro</option>
	<option>Minas Gerais</option>
</select>
```

![Form Select](https://dl.dropbox.com/u/1747775/aulas/frontend/select.png)

Ex para seleção de multiplas opções:

```html
<label>Selecione os itens que deseja em seu carro</label>
<select multiple="multiple">
	<option>Ar condicionado</option>
	<option>Vidros</option>
	<option>Rodas Aro 15</option>
	<option>Airbag</option>
</select>
```

![Form Select Multiple](https://dl.dropbox.com/u/1747775/aulas/frontend/select_multiple.png)

É possivel ainda agrupar opções utilizado o elemento `optgroup`

#### 1.6.9 - `<textarea></textarea>`

Define uma região para entrada de texto com multiplas linhas. Diferente as demais tags de formulário na `textarea` para se definir um valor padrão escrevemos dentro da tag.

Ex:

```html
<textarea>Digite seu comentário aqui!</textarea>
```

#### 1.6.10 - `<input type="hidden">`

Define um campo oculto.

#### 1.6.11 - `<input type="submit">` ou `<button type="submit">`

Define um botão que ao ser clicado envia o formulário para o endereço especificado no atributo `action` da tag `form`.

#### 1.6.12 - Atributos comuns nos elementos de formulário

* `value`: define um valor padrão para o campo (exceto em textareas).
* `disabled`: desativa um campo (exceto `<input type="hidden">`, os dados desse campo não serão enviados com o formulário.
* `readonly`: o valor do campo não pode ser editado, mas os dados são enviados com o formulário.
* `checked` : valido para elemenetos `radio` e  `checkbox`, definem o campo como selecionado por padrão.


### <a name="topic_17"/></a> 1.7 - Hyperlinks

Hyperlinks ou links são elementos responsaveis pela interligação entre documentos, são definidos pela tag `<a></a>`, o atributo `href` define o destino para o qual o link levará ao ser clicado, podendo ser uma **url** e/ou uma seção do documento.

Ex:

```html
<a href="http://wwww.google.com">Google</a>
<a href="http://wwww.yahoo.com">Yahoo!</a>
<a href="http://wwww.bing.com">Bing</a>

<a href="http://wwww.example.com/pagina/#secao-do-documento">Bing</a>
```

### <a name="topic_18"/></a> 1.8 - IFrames

IFrames definem uma região de um documento onde se pode exibir um outro documento externo ou não.

São muito utilizados para incorporar aplicativos ou seções específicas de um site, por exemplo sites de compartilhamento de vídeo com o Youtube oferecem a opção de o usuário incorporar os vídeos em suas páginas pessoais com um código HTML que nada mais é do que um IFrame apontando para uma página contendo apenas aquele vídeo.

Exemplo de um IFrame exibindo a página do Google:

```html
<iframe src="http://www.google.com"></iframe>
```

Exemplo de um IFrame para incorporar um vídeo do youtube:

```html
<iframe width="560" height="315" src="http://www.youtube.com/embed/9Q7Vr3yQYWQ" frameborder="0" allowfullscreen></iframe>
```
