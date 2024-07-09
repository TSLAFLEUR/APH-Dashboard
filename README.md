# Aquifer Pumped Hydro Dashboard

## Overview

This is the source code for the Aquifer Pumped Hydro Dashboard. It utilizes React as the frontend and MongoDB for the backend. To connect the two, node.js is utilized. Axios is used for communication with the React elements and Mongoose is used for communication with the MongoDB database.

Currently, the dashboard displays all information about a particular unit using 4 pages that cycle through on a 30 second timer. The pages contain graphs that were created using Recharts. Each datapoint has a color-coded border that is determined by the parent element of the variable (such as APH, EV, or POCC) as well as the color-coded interior that is determined by the value of the variable. Currently, the colors are blue, green, yellow, orange, and red and the values are 1, 0.75, 0.5, 0.25, and 0, but the colors and values can be changed as needed.

There are options to select which location and unit to display information on by using dropdown buttons in the header. More locations and units may be added by following the instructions found in
the Updating information section.

![image](https://github.com/TSLAFLEUR/APH-Dashboard/assets/116909347/fd79a394-754f-4609-8b20-cefeff010c67)

## Installation

Download all the files from github.
Run the `install.ps1` script to download necessary requirements

## Running

Run `APH_Dashboard.ps1` script.

## Updating information

### For updating database
- Url: backend/.env -> Change MONGO_URL
- Database name: backend/.env -> Change DB_NAME
- Collection name: backend/.env -> Change COL_NAME
- Database Schema: backend/models/info.js -> Change infoschema

### For updating frontend pieces
#### App.js
- Changing defaults: frontend/App.js -> Update location/unit/page useState function arguments.
- Page cycle timer: frontend/App.js -> Update "delay" variable
- If more pages are added to cycle: frontend/App.js -> Update prevPage area.
- Updating information on dashboard: frontend/App.js -> Update what is displayed for each case in switch in "Body" function.

#### Graph.js
- Adding/Updating graph options: frontend/graph.js ->
	- className: Determines size of graph. Use in tandem with the width/height variables
	- header: Variable that shows atop the graph
	- data/information: This is necessary to provide the information for the graph. Make sure to use this when creating a new graph.
	- Bar:
		- dataKey: Variable to pull information from.
		- fill: Color of index entry under graph. Normally color of bar, but is overwritten by the Cell
		- stroke: Outline color
		- name: Name that displays when hovering over graph and in the legend.
	- Cell:
		- fill: Determines the interior color of the bar. Uses the "Color" function to compare the value of the bar to certain breakpoint values for easy recognition of good/bad values.
- Changing/adding colors: frontend/graph.js -> Add new const variables at the bottom and update the "Color" function as needed.

#### HeaderFooter.js

- Updating Locations/Units: frontend/headerFooter.js -> Add new button with appropriate values.
	- Note: For handleLoc function, first variable is for the button display, second variable is for the database to reference.

## Future Plans

- Update dashboard to be more helpful by showing important information in stylized format.
- Create "history" graphs that provide information to a certain point in the past.
