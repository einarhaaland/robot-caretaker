# Demonstation Videos
It is highly recommended to watch these demonstration videos to visualize the syste, when reading the thesis.

## Demo 1: Controller UI
- Link to video: https://youtu.be/516dw7-RR6k

This video demonstrates:
- Performing singular motions
- Scheduling and performing a motion sequence

## Demo 2: Creating motions using RML
- Link to video: https://youtu.be/w3IUvo7UPfA

This video demonstrates:
- The editor page
- The code editor and examples of its functionalities
- Creating a robot motion using RML
- Adding and Deleting Motion cards (the dropdown menu *Positive, Neutral, Negative* was ignored by recording software)
- Performing the new motion

## Demo 3: Adding a new robot
- Link to video: https://youtu.be/znDf0UuVhF4

This video demonstrates:
- How an admin would add support for a new robot in Webots
- 
*You can restructure the robotend however you like as long as a Webots world has access to the files in the robotend. This means you can add multiple worlds, robots and configs.*

*If a joint on your robot is not already listed in config.yaml, you can just add it. However, if the joint is not supported by RML, you should extend the language to avoid validation or parsing errors when creating motions with the new joint. This is done by adding the new joint to the grammar file and re-building the language module.*
