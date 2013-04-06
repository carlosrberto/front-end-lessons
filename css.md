
# Desenvolvimento Front End
## CSS Cascading Style Sheets

### O que é CSS

### Como utilizar as CSS

#### inline
```html
<elemento style="propridade: valor"></elemento>
```
#### tag style
```html
<style type="text/css">
	seletor{
		propriedade: valor;
	}
</style>
```

#### tag link
```html
<link rel="stylesheet" type="text/css" href="arquivo.css">
```

#### `@import`
 ```html
<style type="text/css">
	@import url("arquivo.css");
</style>
```

### Sintaxe

```css
seletor{
	propriedade: valor;
	propriedade: valor
}
```

```css
seletor{ atributo: valor; atributo.valor }
```

### IDs e Classes

```css
#seletor{
	propriedade: valor;
}
```

### Formatando textos

* font-style
* font-variant
* font-weight
* font-size
* line-height
* font-family
* font: font-style font-variant font-weight font-size/line-height font-family;
* text-transform

### As propriedades do Box Model

* padding
* margin
* border
	
### Trabalhando com Floats
### Posicionamento e z-index
### Backgrounds
### Bugs

### Seletores de Atributo
* el[attr="val"]
* el[attr]

### Valores Especiais
* attr(attr-name)

### Brutal Force
* !important

### Pseudo-seletores
* `:hover`
* `:focus`
* `:active`
* `:first-child`
* `:last-child`
* `:nth-child`

### Como funciona a cascata
* `#id
* `.class
* `el.#id
* `el.class
* Descendente 
	* `.parent .child`
* Adjacente 
	* `.child + .child`
* Irmãos
	* `.child ~ .child`
* Filhos 
	* `.parent > .child`

### Já podemos usar CSS3 ?

### Novidades na CSS3

* `box-shadow`
* `text-shadow`
* `border-radius`
* `cores rgba`
* `gradiente`
* `Animações`