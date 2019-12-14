# **D&D Character Creator**

## Project Planning

### Overview

A React application which will provide an interface for creating a character for the tabletop roleplaying game known as "Dungeons & Dragons".


### Wireframes


![](/images/wireframes.png)


### MVP

To provide a minimum viable product, this application will need to include a complete form for users to select several character options from, as well as a page displaying the aggregate of their selections once they have submitted the form.

#### Goals

- Pull data from an API to populate a Character Creation form with text inputs, checkboxes, drop-downs, and buttons.
- Track all user selections within state to produce a complete "Character Sheet" upon submission.
- Combine necessary data from selections to calculate ability scores and other character details.
- Allow user to select from a checklist of skills, limiting their selections to the appropriate number of choices allowed.

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
|__ assets/
      |__ images
|__ components/
      |__ Header.jsx
      |__ CharacterSheet.jsx
      |__ Form.jsx
      |__ AbilityScores.jsx
      |__ Skills.jsx
      |__ Footer.jsx
```

_Component Breakdown_


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and title._               |
|  Form  | class |   y   |   y   | _The form will hold all character options and the character state._       |
|   Ability Scores    |   class    |   y   |   y   | _Ability Scores will handle selection of ability scores and the methods to increase and decrease them._      |
| Skills | class |   y   |   y   | _Skills will handle selection of character skills and limiting the number of choices._                 |
| Character Sheet | function |   n   |   y   | _The Character Sheet will render the character information once the form is submitted._                 |
|    Footer    | functional |   n   |   n   | _The footer will show copyright information._ |


### Post-MVP

#### Goals

- Add ability to create and save multiple characters.
- Implement dice-rolling functionality for generating ability scores.
- Incorporate random name generator for new characters.
- Add ability to automatically level up characters and render an updated character sheet.
