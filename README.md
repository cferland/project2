# **D&D Character Creator**

### Overview

A React application which provides an interface for creating a character for the tabletop roleplaying game known as "Dungeons & Dragons".

Live Site: http://dnd-char-creator.surge.sh/

### Wireframes


![](/images/wireframes.png)


### Description

This application includes a complete form for users to select several character options from, as well as a page displaying the aggregate of their selections once they have submitted the form.

#### Features

- Pulls data from an API to populate a character creation form with text input, checkboxes, drop-downs, and radio buttons.
- Tracks all user selections within state to produce a complete "Character Sheet" upon submission.
- Mimics a dice roll by generating random ability scores, and allows the use to redistribute points as desired.
- Combines necessary data from selections to calculate ability modifiers and render character details.
- Allows user to select from a checklist of skills, limiting their selections to the appropriate number of choices allowed.

#### Libraries

 - React Router
 - Axios

#### API Data

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| D&D 5e API | Yes | http://www.dnd5eapi.co/ | http://dnd5eapi.co/api/classes/

#### React Components

_Component Hierarchy_

```
src
|__ components/
      |__ Header.js
      |__ Form.js
      |__ CharacterSheet.js
      |__ Alignment.js
      |__ AbilityScores.js
      |__ Proficiencies.js
      |__ Traits.js
```

_Component Breakdown_


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header contains the page header and title._               |
|  Form  | class |   y   |   y   | _The form holds all character options and the character state._       |
|  Alignment  | function |   n   |   y   | _Alignment holds all the form elements pertaining to selection of character alignment._       |
|   Ability Scores    |   class    |   n   |   y   | _Ability Scores handles selection of ability scores._      |
| Proficiencies | class |   y   |   y   | _Proficiencies handles selection of character skills and limiting the number of choices._                 |
| Character Sheet | function |   n   |   y   | _The Character Sheet renders the character information once the form is submitted._                 |
|    Traits    | functional |   n   |   y   | _Traits contains the traits, features, and proficiencies section of the character sheet._ |


### Post-MVP

#### To Do
- Code clean-up & DRY check.
- Convert Ability Scores to a functional component.
- Prefix CSS for cross-browser compatibility.
- Add artwork!


#### Future Goals

- Switch over to an alternative API or add a second API so that the following can be included:
  - Spell selection for classes with spellcasting features.
  - Descriptions for racial traits and class features.
  - Improved handling of ability bonuses, proficiency selection, etc.
- Add ability to create and save multiple characters.
- Incorporate random name generator for new characters.
- Add functionality for leveling up characters and updating the character sheet appropriately.
