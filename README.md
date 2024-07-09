#Aquifer Pumped Hydro Dashboard#

##Overview##


##Installation##
	Download all the files from the github.
	Run the `install.ps1` script to download necessary requirements

##Running##
	Run `APH_Dashboard.ps1` script.

##Updating information##
	###For updating database###
		-Url: backend/.env -> Change MONGO_URL
		-Database name: backend/.env -> Change DB_NAME
		-Collection name: backend/.env -> Change COL_NAME
		-Database Schema: backend/models/info.js -> Change infoschema
		
	###For updating frontend pieces###
		####App.js####
		-Changing defaults: frontend/App.js -> Update location/unit/page useState function arguments.
		-Page cycle timer: frontend/App.js -> Update "delay" variable
		If more pages are added to cycle: frontend/App.js -> Update prevPage area.
		Updating information on dashboard: frontend/App.js -> Update what is displayed for each case in switch in "Body" function.

		####Graph.js####
		-Adding/Updating graph options: frontend/graph.js ->
			-className: Determines size of graph. Use in tandem with the width/height variables
			-header: Variable that shows atop the graph
			-data/information: This is necessary to provide the information for the graph. Make sure to use this when creating a new graph.
			-Bar:
				-dataKey: Variable to pull information from.
				-fill: Color of index entry under graph. Normally color of bar, but is overwritten by the Cell
				-stroke: Outline color
				-name: Name that displays when hovering over graph and in the legend.
			-Cell:
				-fill: Determines the interior color of the bar. Uses the "Color" function to compare the value of the bar to certain breakpoint values for easy recognition of good/bad values.

		-Changing/adding colors: frontend/graph.js -> Add new const variables at the bottom and update the "Color" function as needed.

		####HeaderFooter.js####
		-Updating Locations/Units: frontend/headerFooter.js -> Add new button with appropriate values.
			-Note: For handleLoc function, first variable is for the button display, second variable is for the database to reference.