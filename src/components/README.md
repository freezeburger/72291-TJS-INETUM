# Liste des composants.


## Base

> Composants graphique fonctionnellement neutres et réutilisables.
Dans le dosseirs "components"

> npx generate-react-cli component BaseButton

* BaseButton
* BaseFooter
* BaseMain
* BaseHeader

**Ajouts**

* BaseColorSelector
* BaseQuantitySelector
* BaseProductItem
* BaseCategoryItem

# Features (containers)

> Composants fonctionnels spécifiques.
Dans le dossier "containers"

> npx generate-react-cli component LoginForm ProductList 
CategoriesCarousel ProductCard --type=container   

* LoginForm
* ProductList
* CategoriesCarousel
* ProductCard

# Page (views)

> Ensemble de présentation de fonctionanlités (écran).
Dans le dossier "views"

> npx generate-react-cli component LoginForm ViewLogin ViewProducts ViewDetail --type=view 

* ViewLogin
* ViewProducts
* ViewDetail