![HTML 5](http://www.w3.org/html/logo/downloads/HTML5_Logo_128.png)

# Desenvolvimento Front-End

## 1 - HTML

* [HTML não é programação](#topic_11)
* [Estrutura básica de um documento HTML](#topic_12)
* [Elementos para marcação de texto](#topic_13)
* [Elementos para marcação de imagens](#topic_14)
* [Elementos estruturais](#topic_15)
* Elementos de formulário
* IFrames
* Hyperlinks
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

As listas de definição são utlizadas para descrever determinados termos, são compostas de 3 elementos, ```<dl></dl>``` define o container para a lista, ```<dt></dt>``` define o termo a ser definido e ```<dd></dd>``` é a definição do termo.
 
```html
<dl>
	<dt>Disco</dt>
	<dd>Um objeto circular</dd>

	<dt>Quadro</dt>
	<dd>Um objeto quadrado</dd>	
	<dd>Lugar onde se coloca uma foto</dd>	
</dl>
```
