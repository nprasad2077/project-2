# Project Overview


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Project Links

- [github repo](https://github.com/nprasad2077/project-2)
- [deployment](https://project-2-teal.vercel.app/)
- [demo recording]()

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- [wireframes](https://media.git.generalassemb.ly/user/45667/files/a2a9f73f-4a78-45b7-9aa3-10a932a62bf3)
- [react architecture](https://media.git.generalassemb.ly/user/45667/files/dbb54739-78e3-43c0-826e-7c66794848c7)

Define the the React components and the architectural design of your app.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decide what is placed into your MVP as the "client" will expect this functionality to be implemented upon project completion.  

#### MVP

-  Access the [Open Food Facts API](https://world.openfoodfacts.org/)
- User is able to search for product by name or UPC code.
- Images of product are rendered onto the page for selection. 
- User is able to view details for each food product.

#### PostMVP

- Add styling to nutrition components.
- Add literature/definitions about data values.
- Incorporate assets for visual clarifiction.
- Sort feature
- Add/remove components

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header, include the nav | 
| Footer | This will render the footer, include links to github repo | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| ------ | :---: |  :---: | :---: | :---: |
| Testing API | H | 2hr | 4hrs | 4hrs |
| Creating react component structure | H | 3hrs| 2hrs | 2hrs |
| Creating search input | H | 3.5hrs| 6hrs | 6hrs |
| 'Mapping' out search results | H | 2hr | 1hrs | 1hrs |
| Creating/Implementing 'state' | H | 3hr | 2hrs | 2hrs |
| Product details page | H | 2hr | 4hrs | 4hrs |
| Routing | H | 1hr | 2hrs | 2hrs |
| Styling | H | 2hr | 2hrs | 2hrs |
| Total | H | 18.5hrs| 23hrs | 23hrs |

## Additional Libraries
Axios

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function NutritionData({foodData, setImage}) {
  const {id} = useParams();

  const index = foodData.findIndex(function(data, index){
    if (data.id === id) {
      return true;
    }
  });

  setImage(index);
```

This snippet of code is used to identify the index position of the current product in the array of data from the API call. The code grabs the 'id' of the product from the url with 'useParams()'. Then, 'findIndex()' is used to determine the index position based off the food product ID. Finally, setState is used to pass the index value to to be used in any other component.

## Issues and Resolutions

**ERROR**: ./src/components/NutriLevels.js:20 fat is not defined no-undef
**RESOLUTION**: Use ['saturated-fat'] instead of {.saturated-fat} in the variable. The hyphen will not be recognized and break the code.

**ERROR**:./src/components/NutriLevels.js:9 TypeError: Cannot read properties of undefined (reading 'nutrient_levels')
**RESOLUTION**: Missing brackets when passing in variables from NutritionData component.

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
