//This file contains header, footer, and timestamp components.
//To add locations/units insert them into the appropriate selection sections in the header component

import Logo from "./logo.js";
import { useState } from "react";

export function Header({location,onLocChange,unit,onUnitChange}) {
	//Variable that displays on the location button in the header
	const [loc, setLoc] = useState("Moscow, ID");//update useState as necessary
	function handleLoc(loc1, loc2) {
		setLoc(loc1);
		onLocChange(loc2);
	}

  return (
    <>
		{/* TITLE */}
      <div className="top">
        <h1>Aquifer Pumped Hydro</h1>
      </div>
	<div className="altrow">
			{/* LOCATION SELECTION */}
		<div className="selectionBox">
			Locations
			<div class="dropdown">
				<button class="dropbtn">{loc}</button>
				<div class="dropdown-content">
					{/* INSERT NEW LOCATIONS HERE */}

				<button className="dropdownButton" onClick={() => handleLoc("Coeur D'Alene, ID","cda")}>
					Coeur D'Alene, ID
				</button>

				<button className="dropdownButton" onClick={() => handleLoc("Moscow, ID","moscow")}>
					Moscow, ID
				</button>

				<button className="dropdownButton" onClick={() => handleLoc("Monterey, CA","monterey")}>
					Monterey, CA
				</button>

				</div>
			</div>
		</div>

			{/* UNIT SELECTION */}
		<div className="selectionBox">
		Units
			<div class="dropdown">
				<button class="dropbtn">Unit {unit}</button>
				<div class="dropdown-content">

					{/* INSERT NEW UNITS HERE */}

					<button className="dropdownButton" onClick={() => onUnitChange=onUnitChange(1)}>
						Unit 1
					</button>
					
					<button className="dropdownButton" onClick={() => onUnitChange=onUnitChange(2)}>
						Unit 2
					</button>
					
					<button className="dropdownButton" onClick={() => onUnitChange=onUnitChange(3)}>
						Unit 3
					</button>
				</div>
			</div>
		</div>
	</div>
    </>
  );
}

export function Footer({information}) {
  return (
    <div className="altrow" >
      <Logo />
      <Timestamp information={information}/>
    </div>
  );
}

export function Timestamp({information}) {
  if (information!=null){
	return (
		information.map((entry, index) => (
			<div>Last data recieved was at: {entry["timestamp"]}</div>
		))
	)
  }else return (
	<div>No information to display</div>
  )
}
