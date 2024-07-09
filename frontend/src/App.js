//This file contains the main information for the Aquifer Pumped Hydro dashboard
//Contains variables for location, unit, and information

import "./styles.css";
import { useState,useEffect,useRef } from "react";
import axios from 'axios';
import Visual from "./visual.js"
import { Header, Footer } from "./headerFooter.js";
import { ABCN, 
		 ABC3, 
		 ABC6, 
		 PeakDemand, 
		 Demand, 
		 DemandCurrent, 
		 Whr, 
		 FLP, 
		 Misc, 
		 PGABC, 
		 PGABCT, 
		 PGABBCCA, 
		 PGPower } from "./graph.js"


export default function App() {
	//Page variable and functions
	const [page,setPage]=useState(1);
	function handlePage(value){
		setPage(value);
		handleInformation();
	}

	//Location variable and functions
	const [location, setLocation] = useState("moscow");
	function handleLocation(value) {
		setLocation(value);
		handleInformation();
	}

	//Unit number variable and functions
	const [unit, setUnit] = useState(3);
	function handleUnit(value) {
		setUnit(value);
		handleInformation();
	}

	//Information pulled from the database about location + unit
	const[information,setInformation]=useState([]);
	function handleInformation(){
		axios.get(process.env.REACT_APP_BACKEND_URL+'/info',{
			params:{
				location:location,
				unit:unit
			}
		})
		.then(info=>setInformation(info.data))
		.catch(err=>console.log(err.message))
	}

	//Necessary for updating information on update
	useEffect(()=>{
		handleInformation()
	},[location,unit])

	//Delay logic
	const timeoutRef = useRef(null);
	const delay = 30000; //Delay value in milliseconds
	function resetTimeout() {
		if (timeoutRef.current) {
		  clearTimeout(timeoutRef.current);
		}
	  }
	
	  useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
		  () =>
			setPage((prevPage) =>
			  prevPage === 4 ? 1 : prevPage + 1 //If number of pages change, update this
			),
		  delay
		);
	
		return () => {
		  resetTimeout();
		};
	  }, [page]);

	//Actual web content
	return (
	  <div className="App">
		{/* HEADER */}
		<div className="altrow">
			<Header location={location} onLocChange={handleLocation} unit={unit} onUnitChange={handleUnit}/>
		</div>

		{/* BODY */}
		<div className="body">
			<div className="col">
				<div className="row">
					<Body page={page} onPageChange={handlePage} information={information}/>
				</div>
			</div>
		</div>

		{/* FOOTER */}
		<Footer information={information}/>
	  </div>
	);
}

export function Body({page, information}){
	switch(page){
		
		case 1:
			return(
				<>
				<ABC3 name="Watts" information={information} header="Watts"/>
				<ABC3 name="VA" information={information} header="Volt Amps"/>
				<ABCN name="Current_Magnitude" information={information} header="Current Magnitude"/>
				<ABCN name="Current_Angle" information={information} header="Current Angle"/>
				<ABC3 name="VAR" information={information} header="Volt-Ampere Reactive"/>
				<ABC6 name="Voltage_Magnitude" information={information} header="Voltage Magnitude"/>
				<ABC6 name="Voltage_Angle" information={information} header="Voltage Angle"/>
				</>
			)
		case 2:
			return(
				<>
				<Whr name="Whr" information={information} header="Whr"/>
				<Whr name="VA_Whr" information={information} header="VA Whr"/>
				<Whr name="VAR_Whr" information={information} header="VAR Whr"/>
				<FLP name="FIT/LIT/PIT" information={information} header="FIT LIT PIT"/>
				<Misc name="Three_Phase_Whr_Net" information={information} header="Three Phase Whr Net"/>
				<Misc name="Frequency" information={information} header="Frequency"/>
				<Misc name="PF" information={information} header="PF"/>
				<Misc name="Lead_Lag_Indication" information={information} header="Lead Lag Indication"/>
				</>
			)
		case 3: //demand
			return(
				<>
				<Demand name="Watt" information={information} header="Watt Demand"/>
				<Demand name="Volt_Amp" information={information} header="Volt Amp Demand"/>
				<Demand name="VAR" information={information} header="Volt Amp Reactive Demand"/>
				<ABCN name="Demand_Current" information={information} header="Demand Current"/>
				<PeakDemand name="Peak_Demand_Watts" information={information} header="Peak Demand Watts"/>
				<PeakDemand name="Peak_Demand_VA" information={information} header="Peak Demand Volt Amps"/>
				<PeakDemand name="Peak_Demand_VAR" information={information} header="Peak Demand VAR"/>
				<DemandCurrent name="Zero/Neg Demand Current" information={information} header="Zero/Neg Demand Current"/>
				</>
			)
		case 4:
			return(
				<>
				<PGABCT name="Apparent_Power" information={information} header="Apparent Power"/>
				<PGABCT name="PF" information={information} header="PF"/>
				<PGABCT name="Reactive_Power" information={information} header="Reactive Power"/>
				<PGABCT name="Real_Power" information={information} header="Real Power"/>
				<PGABC name="Current_Angle" information={information} header="Current Angle"/>
				<PGABC name="Current_Mag" information={information} header="Current Magnitude"/>
				<PGABBCCA name="Voltage_Angle" information={information} header="Voltage Angle"/>
				<PGABBCCA name="Voltage_Mag" information={information} header="Voltage Magnitude"/>
				<PGPower information={information} header="PG Power"/>
				</>
			)
		case 5:
			return(
				<Visual information={information}/>
			)
		default:
			return(<>Error in page</>)
	}
}