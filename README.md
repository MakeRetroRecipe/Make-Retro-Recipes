

# 🎒 Make Retro Recipes — Dofus Retro

> 🇪🇸 Español · 🇫🇷 Français · 🇬🇧 English  
> Una herramienta web para gestionar recursos, recetas, monstruos, zonas de farmeo y optimizar el crafteo en **Dofus Retro**.

---

# 🇪🇸 Español

## 📖 Descripción

**Make Retro Recipes** es una aplicación web centrada en la gestión del inventario y la planificación de crafteo para **Dofus Retro**.

Permite controlar los recursos disponibles, saber qué materiales faltan para fabricar los objetos previstos, consultar qué monstruos los dropean, organizar zonas de farmeo, controlar precios e historial y utilizar una calculadora de **brisage**.

La aplicación está construida como una aplicación web autocontenida en HTML, CSS y JavaScript, con persistencia local y soporte de sincronización en la nube mediante Supabase.

## ✨ Funcionalidades

### 📦 Recursos

- Gestión del stock de recursos.
- Cantidad disponible y cantidad necesaria.
- Precios actuales.
- Historial de precios.
- Cálculo del coste de los recursos que faltan.
- Indicadores de inversión y ahorro.
- Categorías de recursos.
- Recursos personalizados.
- Edición de recursos existentes.
- Marcado de recursos no dropeables.
- Condiciones especiales de obtención.
- Recursos que se convierten en otros recursos.
- Recursos adicionales necesarios para conversiones.
- Detección de posibles recursos duplicados.
- Reparación automática de nombres afectados por problemas de codificación.

### 📜 Recetas

- Creación y edición de recetas.
- Ingredientes y cantidades.
- Objetivo de fabricación.
- Nivel del objeto.
- Imagen del objeto.
- Características del objeto.
- Tipo de runa obtenida.
- Probabilidad de obtención de runas.
- Objetos que también pueden obtenerse directamente mediante drop.
- Asignación de monstruos que pueden dropear un objeto terminado.
- Importación masiva de recetas.
- Importación de ingredientes en varios formatos.
- Gestión de recetas propias y recetas base.
- Orden de prioridad de fabricación.
- Reparto del stock entre recetas según la prioridad configurada.

La aplicación puede reconocer formatos de importación como:

```text
30x Marfil, 25x Piel de Cerdo de Farle

Marfil;30
Piel de Cerdo de Farle;25

y formatos del tipo:

[Objeto]=25x[Ingrediente A]+20x[Ingrediente B]

👹 Monstruos

Creación y edición de monstruos.

Recursos que dropea cada monstruo.

Objetos terminados que pueden caer directamente.

PP Lock.

Porcentaje base de drop.

Cantidad dropeable.

Drops únicos.

Motivos y recomendaciones sobre si conviene combatir solo o en grupo.

Familias de monstruos.

Aplicación de drops a variantes de una misma familia.

Buscador de monstruos.

Resumen de recursos sin monstruo asignado.


🗺️ Zonas de farmeo

Las zonas permiten agrupar varios monstruos bajo un mismo mapa o zona.

Incluyen:

Nombre de la zona.

Imagen.

Monstruos asociados.

Color identificativo.

Horarios recomendados.

Horarios a evitar.

Información de recaudadores.

Seguridad de la zona.

Tiempo recomendado para mantener un recaudador.

Recursos que puede recoger el recaudador.


💰 Precios e historial

La aplicación mantiene información de precios por recurso y genera un historial temporal.

Permite:

Consultar precio actual.

Comparar con el precio anterior.

Consultar evolución histórica.

Ver variaciones porcentuales.

Calcular el coste necesario para completar recursos faltantes.


🧮 Calculadora de brisage

Incluye una calculadora específica para el sistema de brisage de Dofus Retro.

La fórmula implementada en el archivo es:

peso = (valor × peso de la runa × nivel del objeto × 0,015) + 1

La calculadora permite introducir varias características y trabajar con rangos mínimo/máximo.

La configuración de pesos de runas es editable desde la aplicación. El propio proyecto advierte que determinados valores son datos de partida y pueden requerir comprobación mediante pruebas en el juego.

También incluye tablas utilizadas para las probabilidades de Ga Pa y una estimación derivada para Ga Pm.

> ⚠️ Los valores relacionados con runas y brisage deben considerarse configurables y verificarse con pruebas reales dentro de Dofus Retro.



📷 OCR desde imágenes

La aplicación incorpora Tesseract.js para intentar leer información desde capturas de pantalla.

Actualmente se utiliza para:

Leer un inventario desde una imagen.

Leer tablas de drops de recursos desde una imagen.


El resultado se presenta antes de aplicarlo al inventario para que pueda revisarse y corregirse.

> 🧪 Esta función está marcada como beta. El OCR puede cometer errores dependiendo de la imagen, fuente, resolución o fondo del juego.



🔎 Búsqueda

Incluye un buscador global para localizar rápidamente:

Recursos.

Recetas.

Monstruos.

Zonas.


También existen buscadores específicos dentro de las diferentes secciones de gestión.

💾 Copias de seguridad

La aplicación permite:

Exportar todo el progreso a JSON.

Importar posteriormente un backup.

Mantener datos localmente mediante localStorage.

Restaurar información eliminada mediante la papelera.

Recuperar recetas y recursos base eliminados.

Reiniciar completamente la aplicación.


El reinicio de fábrica incluye una confirmación y una espera de seguridad antes del borrado definitivo.

☁️ Sincronización en la nube

La aplicación integra Supabase para permitir cuentas y sincronización.

Al iniciar sesión o crear una cuenta, el progreso local puede combinarse con el progreso almacenado en la nube.

Después, los cambios realizados en el dispositivo se sincronizan automáticamente con un pequeño retraso para evitar enviar una petición por cada interacción.

🧭 Navegación

La aplicación está organizada en:

1. 📦 Recursos


2. 📜 Recetas


3. 👹 Monstruos


4. 🗺️ Zonas


5. 🛠️ Gestionar


6. 📈 Histórico



También dispone de una barra de navegación flotante que facilita el acceso a las secciones cuando se hace scroll.

🧠 Gestión inteligente del stock

Uno de los objetivos principales es decidir cómo utilizar el stock disponible cuando varias recetas comparten recursos.

La aplicación calcula prioridades y reparte las unidades disponibles entre las recetas siguiendo el orden efectivo configurado.

Esto permite detectar situaciones como:

Recursos suficientes para una receta pero no para otra.

Recursos compartidos entre varias recetas.

Recetas prioritarias bloqueando otras.

Coste de compra de los materiales restantes.

Recursos que conviene conseguir mediante drop.


🛠️ Tecnologías

El proyecto utiliza principalmente:

HTML5

CSS3

JavaScript

localStorage

Supabase

Tesseract.js

Google Fonts

Baloo 2

Nunito



Las dependencias externas se cargan mediante CDN.

🚀 Ejecutar el proyecto

El proyecto puede ejecutarse como una página web estática.

El archivo principal es:

index.html

Para una prueba local rápida:

1. Clona el repositorio.
2. Abre index.html en un navegador.

Para desplegarlo, puede utilizarse cualquier servicio compatible con páginas web estáticas.

🔐 Datos y privacidad

El progreso puede almacenarse localmente en el navegador mediante localStorage.

Si se utiliza la cuenta de sincronización, determinados datos se almacenan también en la infraestructura de Supabase configurada por el proyecto.

Se recomienda exportar periódicamente un backup JSON, especialmente antes de utilizar operaciones destructivas como el reinicio completo.

⚠️ Aviso

Make Retro Recipes no es un proyecto oficial de Ankama ni de Dofus.

Dofus y Dofus Retro son marcas de sus respectivos propietarios.

Los datos relacionados con drops, pesos de runas, probabilidades y mecánicas pueden requerir verificación según la versión concreta del juego.

📄 Licencia

No se especifica una licencia en el archivo actual del proyecto.

Si este repositorio se publica, se recomienda añadir un archivo LICENSE con la licencia elegida.


---

🇫🇷 Français

📖 Description

Make Retro Recipes est une application web destinée à la gestion de l'inventaire et à la planification du craft dans Dofus Retro.

Elle permet de suivre les ressources disponibles, de savoir quels matériaux manquent pour fabriquer les objets prévus, de consulter les monstres qui les droppent, d'organiser les zones de farm, de suivre les prix et leur historique et d'utiliser une calculatrice de brisage.

L'application est construite comme une application web autonome en HTML, CSS et JavaScript, avec une sauvegarde locale et une synchronisation cloud via Supabase.

✨ Fonctionnalités

📦 Ressources

Gestion du stock de ressources.

Quantité disponible et quantité nécessaire.

Prix actuels.

Historique des prix.

Calcul du coût des ressources manquantes.

Indicateurs d'investissement et d'économie.

Catégories de ressources.

Ressources personnalisées.

Modification des ressources existantes.

Marquage des ressources non droppables.

Conditions particulières d'obtention.

Ressources pouvant être transformées en d'autres ressources.

Ressources supplémentaires nécessaires aux transformations.

Détection des ressources potentiellement dupliquées.

Réparation automatique des noms affectés par des problèmes d'encodage.


📜 Recettes

Création et modification de recettes.

Ingrédients et quantités.

Objectif de fabrication.

Niveau de l'objet.

Image de l'objet.

Caractéristiques de l'objet.

Type de rune obtenu.

Probabilité d'obtention des runes.

Objets pouvant également être obtenus directement par drop.

Association des monstres pouvant droper un objet fini.

Importation massive de recettes.

Importation des ingrédients dans plusieurs formats.

Gestion des recettes personnalisées et des recettes de base.

Ordre de priorité de fabrication.

Répartition du stock entre les recettes selon la priorité configurée.


L'application reconnaît notamment des formats comme :

30x Ivoire, 25x Peau de Cochon de Farle

Ivoire;30
Peau de Cochon de Farle;25

et des formats du type :

[Objet]=25x[Ingrédient A]+20x[Ingrédient B]

👹 Monstres

Création et modification des monstres.

Ressources droppées par chaque monstre.

Objets finis pouvant être obtenus directement.

PP Lock.

Taux de drop de base.

Quantité droppable.

Drops uniques.

Raisons et recommandations concernant le farm en solo ou en groupe.

Familles de monstres.

Application des drops aux variantes d'une même famille.

Recherche de monstres.

Résumé des ressources sans monstre associé.


🗺️ Zones de farm

Les zones permettent de regrouper plusieurs monstres sous une même carte ou zone de farm.

Elles comprennent :

Nom de la zone.

Image.

Monstres associés.

Couleur d'identification.

Horaires recommandés.

Horaires à éviter.

Informations sur les percepteurs.

Sécurité de la zone.

Durée recommandée pour maintenir un percepteur.

Ressources pouvant être récoltées par le percepteur.


💰 Prix et historique

L'application conserve les informations de prix des ressources et génère un historique dans le temps.

Elle permet de :

Consulter le prix actuel.

Le comparer au prix précédent.

Consulter l'évolution historique.

Voir les variations en pourcentage.

Calculer le coût nécessaire pour obtenir les ressources manquantes.


🧮 Calculatrice de brisage

Une calculatrice dédiée au système de brisage de Dofus Retro est intégrée.

La formule implémentée dans le fichier est :

poids = (valeur × poids de la rune × niveau de l'objet × 0,015) + 1

La calculatrice permet d'entrer plusieurs caractéristiques et de travailler avec des valeurs minimales et maximales.

Les poids des runes peuvent être modifiés directement depuis l'application. Le projet indique que certaines valeurs sont des valeurs de départ et peuvent nécessiter une vérification avec des tests en jeu.

L'application comprend également des tableaux utilisés pour les probabilités de Ga Pa ainsi qu'une estimation dérivée pour le Ga Pm.

> ⚠️ Les valeurs liées aux runes et au brisage doivent être considérées comme configurables et vérifiées avec des tests réels dans Dofus Retro.



📷 OCR à partir d'images

L'application intègre Tesseract.js afin de tenter de lire des informations à partir de captures d'écran.

Cette fonction est actuellement utilisée pour :

Lire un inventaire à partir d'une image.

Lire des tableaux de drops de ressources à partir d'une image.


Les informations détectées sont affichées avant leur application afin de pouvoir être vérifiées et corrigées.

> 🧪 Cette fonctionnalité est actuellement en bêta. La précision de l'OCR peut varier selon l'image, la police, la résolution et l'arrière-plan du jeu.



🔎 Recherche

Une recherche globale permet de trouver rapidement :

Les ressources.

Les recettes.

Les monstres.

Les zones.


Des champs de recherche spécifiques sont également disponibles dans les différentes sections de gestion.

💾 Sauvegardes

L'application permet :

D'exporter la progression au format JSON.

D'importer des sauvegardes.

De conserver les données localement grâce à localStorage.

De restaurer les éléments supprimés depuis la corbeille.

De récupérer les recettes et ressources de base supprimées.

De réinitialiser complètement l'application.


La réinitialisation d'usine comprend plusieurs confirmations et un délai de sécurité avant la suppression définitive des données.

☁️ Synchronisation cloud

L'application intègre Supabase pour gérer les comptes et la synchronisation.

Lors de la connexion ou de la création d'un compte, la progression locale peut être fusionnée avec celle enregistrée dans le cloud.

Les modifications effectuées sur l'appareil sont ensuite synchronisées automatiquement avec un léger délai afin d'éviter une requête à chaque interaction.

🧭 Navigation

L'application est organisée en :

1. 📦 Ressources


2. 📜 Recettes


3. 👹 Monstres


4. 🗺️ Zones


5. 🛠️ Gestion


6. 📈 Historique



Une barre de navigation flottante facilite également l'accès aux différentes sections pendant le défilement.

🧠 Gestion intelligente du stock

L'un des objectifs principaux est de déterminer comment utiliser le stock disponible lorsque plusieurs recettes partagent les mêmes ressources.

L'application calcule les priorités et répartit les quantités disponibles entre les recettes selon l'ordre effectif configuré.

Cela permet notamment d'identifier :

Les ressources suffisantes pour une recette mais pas pour une autre.

Les ressources partagées entre plusieurs recettes.

Les recettes bloquées par des recettes prioritaires.

Le coût d'achat des matériaux manquants.

Les ressources qu'il peut être intéressant d'obtenir par drop.


🛠️ Technologies

Le projet utilise principalement :

HTML5

CSS3

JavaScript

localStorage

Supabase

Tesseract.js

Google Fonts

Baloo 2

Nunito



Les dépendances externes sont chargées via CDN.

🚀 Lancer le projet

Le projet peut être exécuté comme une page web statique.

Le fichier principal est :

index.html

Pour un test local rapide :

1. Cloner le dépôt.
2. Ouvrir index.html dans un navigateur.

Il peut ensuite être déployé sur n'importe quel service compatible avec les sites statiques.

🔐 Données et confidentialité

La progression peut être stockée localement dans le navigateur via localStorage.

Lorsque la synchronisation est utilisée, certaines données sont également stockées dans l'infrastructure Supabase configurée par le projet.

Il est recommandé d'exporter régulièrement une sauvegarde JSON, notamment avant toute opération destructive.

⚠️ Avertissement

Make Retro Recipes n'est pas un projet officiel d'Ankama ou de Dofus.

Dofus et Dofus Retro sont des marques appartenant à leurs propriétaires respectifs.

Les données concernant les drops, les poids des runes, les probabilités et certaines mécaniques peuvent nécessiter une vérification selon la version exacte du jeu.

📄 Licence

Aucune licence n'est actuellement spécifiée dans le fichier du projet.

Si le dépôt est publié, il est recommandé d'ajouter un fichier LICENSE avec la licence choisie.


---

🇬🇧 English

📖 Description

Make Retro Recipes is a web application designed to manage inventory and plan crafting in Dofus Retro.

It allows players to track available resources, determine which materials are missing for planned crafts, see which monsters drop them, organize farming zones, track prices and price history, and use a dedicated shattering calculator.

The application is built as a self-contained web application using HTML, CSS and JavaScript, with local persistence and cloud synchronization through Supabase.

✨ Features

📦 Resources

Resource stock management.

Available and required quantities.

Current prices.

Price history.

Cost calculation for missing resources.

Investment and savings indicators.

Resource categories.

Custom resources.

Editing of existing resources.

Non-droppable resource flag.

Special acquisition conditions.

Resource conversion into other resources.

Additional resources required for conversions.

Detection of potentially duplicated resources.

Automatic repair of names affected by encoding problems.


📜 Recipes

Recipe creation and editing.

Ingredients and quantities.

Crafting target.

Item level.

Item image.

Item characteristics.

Rune type produced.

Rune acquisition probability.

Items that can also be obtained directly as drops.

Assignment of monsters that can drop a finished item.

Bulk recipe import.

Ingredient import using multiple formats.

Management of custom and base recipes.

Crafting priority order.

Stock allocation between recipes according to the configured priority.


The application supports formats such as:

30x Ivory, 25x Farle Pig Skin

Ivory;30
Farle Pig Skin;25

and formats such as:

[Item]=25x[Ingredient A]+20x[Ingredient B]

👹 Monsters

Monster creation and editing.

Resources dropped by each monster.

Finished items that can drop directly.

PP Lock.

Base drop rate.

Droppable quantity.

Unique drops.

Reasons and recommendations for choosing solo or group farming.

Monster families.

Applying drops to variants within the same family.

Monster search.

Summary of resources without an assigned monster.


🗺️ Farming zones

Zones allow multiple monsters to be grouped under the same map or farming area.

They include:

Zone name.

Image.

Associated monsters.

Identification color.

Recommended schedules.

Times to avoid.

Collector information.

Zone safety.

Recommended collector duration.

Resources collected by the collector.


💰 Prices and history

The application stores resource prices and builds a time-based history.

It allows users to:

View the current price.

Compare it with the previous price.

View historical evolution.

See percentage changes.

Calculate the cost of obtaining missing resources.


🧮 Shattering calculator

A dedicated calculator for the Dofus Retro shattering system is included.

The formula implemented in the file is:

weight = (value × rune weight × item level × 0.015) + 1

The calculator supports multiple characteristics and minimum/maximum value ranges.

Rune weights can be edited directly from the application. The project itself notes that some values are starting values and may need to be verified through in-game testing.

The application also includes Ga Pa probability data and a derived estimate for Ga Pm.

> ⚠️ Rune and shattering values should be treated as configurable data and verified with real Dofus Retro testing.



📷 OCR from images

The application integrates Tesseract.js to attempt to read information from screenshots.

It is currently used to:

Read an inventory from an image.

Read resource drop tables from an image.


The detected information is displayed before being applied so it can be reviewed and corrected.

> 🧪 This feature is currently beta. OCR accuracy can vary depending on the image, font, resolution and game background.



🔎 Search

A global search allows users to quickly find:

Resources.

Recipes.

Monsters.

Zones.


Dedicated search fields are also available inside the management sections.

💾 Backups

The application supports:

Exporting progress as JSON.

Importing backups.

Local persistence through localStorage.

Restoring deleted items from the trash.

Restoring deleted base recipes and resources.

Completely resetting the application.


The factory reset includes multiple confirmations and a safety delay before permanently deleting the data.

☁️ Cloud synchronization

The application integrates Supabase for accounts and synchronization.

When signing in or creating an account, local progress can be merged with progress already stored in the cloud.

After that, changes made on the device are automatically synchronized with a small delay to avoid sending a request for every interaction.

🧭 Navigation

The application is organized into:

1. 📦 Resources


2. 📜 Recipes


3. 👹 Monsters


4. 🗺️ Zones


5. 🛠️ Manage


6. 📈 History



A floating navigation bar also makes it easier to move between sections while scrolling.

🧠 Intelligent stock management

One of the application's main goals is to determine how available stock should be used when multiple recipes share the same resources.

The application calculates priorities and distributes available quantities between recipes according to the effective configured order.

This makes it possible to identify:

Resources sufficient for one recipe but not another.

Resources shared by multiple recipes.

Recipes blocked by higher-priority recipes.

The purchase cost of missing materials.

Resources that may be better obtained through drops.


🛠️ Technologies

The project primarily uses:

HTML5

CSS3

JavaScript

localStorage

Supabase

Tesseract.js

Google Fonts

Baloo 2

Nunito



External dependencies are loaded through CDNs.

🚀 Running the project

The project can be run as a static web page.

The main file is:

index.html

For a quick local test:

1. Clone the repository.
2. Open index.html in a browser.

It can then be deployed to any service supporting static websites.

🔐 Data and privacy

Progress can be stored locally in the browser using localStorage.

When cloud synchronization is enabled, certain data is also stored in the Supabase infrastructure configured by the project.

Regularly exporting a JSON backup is recommended, especially before destructive operations.

⚠️ Disclaimer

Make Retro Recipes is not an official Ankama or Dofus project.

Dofus and Dofus Retro are trademarks of their respective owners.

Data related to drops, rune weights, probabilities and game mechanics may require verification depending on the exact game version.

📄 License

No license is currently specified in the project file.

If this repository is published, it is recommended to add a LICENSE file with the chosen license.


---

⭐ Project status

This README describes the functionality present in the supplied index.html application. Features and mechanics may evolve as the project is developed.

Built with ❤️ for Dofus Retro players.
