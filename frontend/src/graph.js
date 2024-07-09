//This file contains information for the graphs to display

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

export function Demand({name, information, header}){
	return (
	  <div className="mInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={350}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"APH.Three_Phase_"+name+"_Demand_Delivered"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH "+name+" Demand Delivered"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_"+name+"_Demand_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"APH.Three_Phase_"+name+"_Demand_Received"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH "+name+" Demand Received"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_"+name+"_Demand_Received"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Three_Phase_"+name+"_Demand_Delivered"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV "+name+" Demand Delivered"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_"+name+"_Demand_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Three_Phase_"+name+"_Demand_Received"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV "+name+" Demand Received"} >
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_"+name+"_Demand_Received"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Three_Phase_"+name+"_Demand_Delivered"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px"  name={"POCC "+name+" Demand Delivered"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_"+name+"_Demand_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Three_Phase_"+name+"_Demand_Received"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"POCC "+name+" Demand Received"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_"+name+"_Demand_Received"],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function PeakDemand({name, information, header}){
	return (
	  <div className="mInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={350}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"APH.Three_Phase_"+name+"_Delivered"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH "+name+" Demand Delivered"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_"+name+"_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"APH.Three_Phase_"+name+"_Received"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH "+name+" Demand Received"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_"+name+"_Received"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Three_Phase_"+name+"_Delivered"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV "+name+" Demand Delivered"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_"+name+"_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Three_Phase_"+name+"_Received"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV "+name+" Demand Received"} >
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_"+name+"_Received"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Three_Phase_"+name+"_Delivered"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px"  name={"POCC "+name+" Demand Delivered"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_"+name+"_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Three_Phase_"+name+"_Received"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"POCC "+name+" Demand Received"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_"+name+"_Received"],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function DemandCurrent({name, information, header}){
	return (
	  <div className="mInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={350}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"APH.Three_Phase_Zero_Seq_Demand_Current"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH Zero Seq"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_Zero_Seq_Demand_Current"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"APH.Three_Phase_Neg_Seq_Demand_Current"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH Neg Seq"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_Neg_Seq_Demand_Current"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Three_Phase_Zero_Seq_Demand_Current"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV Zero Seq"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_Zero_Seq_Demand_Current"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Three_Phase_Neg_Seq_Demand_Current"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV Neg Seq"} >
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_Neg_Seq_Demand_Current"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Three_Phase_Zero_Seq_Demand_Current"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px"  name={"POCC Zero Seq"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_Zero_Seq_Demand_Current"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Three_Phase_Neg_Seq_Demand_Current"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"POCC Neg Seq"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_Neg_Seq_Demand_Current"],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function ABCN({name, information, header}) {
	return (
	  <div className="mInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={350}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"APH.A_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH A" >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["A_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"APH.B_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH B">
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["B_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"APH.C_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH C">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["C_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"APH.Neutral_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH N">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Neutral_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.A_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV A">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["A_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.B_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV B" >
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["B_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.C_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV C">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["C_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Neutral_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV N">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Neutral_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.A_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px"  name="POCC A">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["A_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.B_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC B">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["B_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.C_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC C">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["C_Phase_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Neutral_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC N">
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Neutral_"+name],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function ABC3({name, information, header}) {
	return (
		<div className="mInfoBox">
		<p>{header}:</p>
		<BarChart
			width={350}
			height={300}
			data={information}
			margin={{
				top: 1,
				right: 1,
				left: 1,
				bottom: 1,
			}}
			>
			<CartesianGrid strokeDasharray="3 3" stroke="white" />
			<XAxis dataKey={"APH"} stroke="white"/>
			<YAxis type="number" stroke="white" domain={[0, 1]} />
			<Tooltip
				shared={false}
				trigger="hover"
				contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
			/>
			<Legend iconSize="7" iconType="dot"/>
			<Bar dataKey={"APH.A_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH A" >
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["A_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"APH.B_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH B">
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["B_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"APH.C_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH C">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["C_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"APH.Three_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH 3 Phase">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"EV.A_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV A">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["A_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"EV.B_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV B" >
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["B_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"EV.C_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV C">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["C_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"EV.Three_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV 3 Phase">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"POCC.A_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px"  name="POCC A">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["A_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"POCC.B_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC B">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["B_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"POCC.C_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC C">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["C_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"POCC.Three_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC 3 Phase">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
		</BarChart>
		</div>
	  );
}

export function ABC6({name, information, header}) {
	return (
		<div className="lInfoBox">
		<p>{header}:</p>
		<BarChart
			width={575}
			height={300}
			data={information}
			margin={{
				top: 1,
				right: 1,
				left: 1,
				bottom: 1,
			}}
			>
			<CartesianGrid strokeDasharray="3 3" stroke="white" />
			<XAxis dataKey={"APH"} stroke="white"/>
			<YAxis type="number" stroke="white" domain={[0, 1]} />
			<Tooltip
				shared={false}
				trigger="hover"
				contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
			/>
			<Legend iconSize="7" iconType="dot"/>
			<Bar dataKey={"APH.A_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH A" >
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["A_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"APH.AB_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH AB">
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["AB_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"APH.B_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH B">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["B_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"APH.BC_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH BC">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["BC_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"APH.C_Phase_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH C">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["C_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"APH.CA_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name="APH CA">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["APH"]["CA_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>

			  <Bar dataKey={"EV.A_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV A" >
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["A_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"EV.AB_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV AB">
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["AB_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"EV.B_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV B">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["B_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"EV.BC_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV BC">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["BC_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"EV.C_Phase_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV C">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["C_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"EV.CA_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name="EV CA">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["EV"]["CA_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>

			  <Bar dataKey={"POCC.A_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC A" >
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["A_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"POCC.AB_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC AB">
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["AB_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"POCC.B_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC B">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["B_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"POCC.BC_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC BC">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["BC_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"POCC.C_Phase_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC C">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["C_Phase_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
			  <Bar dataKey={"POCC.CA_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name="POCC CA">
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["POCC"]["CA_"+name],.75,.5,.25)} />
			  ))}
			  </Bar>
		</BarChart>
		</div>
	  );
}

export function Whr({name, information, header}){
	return (
	  <div className="mInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={350}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"APH.Three_Phase_"+name+"_Delivered"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH "+name+" Delivered"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_"+name+"_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"APH.Three_Phase_"+name+"_Received"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH "+name+" Received"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"]["Three_Phase_"+name+"_Received"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Three_Phase_"+name+"_Delivered"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV "+name+" Delivered"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_"+name+"_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV.Three_Phase_"+name+"_Received"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV "+name+" Received"} >
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"]["Three_Phase_"+name+"_Received"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Three_Phase_"+name+"_Delivered"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px"  name={"POCC "+name+" Delivered"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_"+name+"_Delivered"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC.Three_Phase_"+name+"_Received"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"POCC "+name+" Received"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"]["Three_Phase_"+name+"_Received"],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function FLP({name, information, header}){
	return (
	  <div className="mInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={350}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"FIT_160"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"Fit"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["FIT_160"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"LIT_160"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"Lit"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["LIT_160"],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"PIT_160"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"Pit"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["PIT_160"],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function Misc({name, information, header}){
	return (
	  <div className="mInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={350}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"APH."+name} fill="#000000" stroke="#000000" strokeWidth="5px" name={"APH"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["APH"][name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"EV."+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"EV"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["EV"][name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"POCC."+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px"  name={"POCC"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["POCC"][name],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function PGABC({name, information, header}){
	return (
	  <div className="sInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={250}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"Power_Generation.A_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name={"A"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["A_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"Power_Generation.B_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"B"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["B_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"Power_Generation.C_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"C"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["C_"+name],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function PGABCT({name, information, header}){
	return (
	  <div className="mInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={350}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"Power_Generation.A_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name={"A"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["A_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"Power_Generation.B_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"B"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["B_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"Power_Generation.C_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"C"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["C_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"Power_Generation.Total_"+name} fill="#111111" stroke="#111111" strokeWidth="5px" name={"Total"} >
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["Total_"+name],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function PGABBCCA({name, information, header}){
	return (
	  <div className="sInfoBox">
	  <p>{header}:</p>
	  <BarChart
		  width={250}
		  height={300}
		  data={information}
		  margin={{
			  top: 1,
			  right: 1,
			  left: 1,
			  bottom: 1,
		  }}
		  >
		  <CartesianGrid strokeDasharray="3 3" stroke="white" />
		  <XAxis dataKey={"APH"} stroke="white"/>
		  <YAxis type="number" stroke="white" domain={[0, 1]} />
		  <Tooltip
			  shared={false}
			  trigger="hover"
			  contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
		  />
		  <Legend iconSize="7" iconType="dot"/>
		  <Bar dataKey={"Power_Generation.AB_"+name} fill="#000000" stroke="#000000" strokeWidth="5px" name={"AB"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["AB_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"Power_Generation.BC_"+name} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"BC"} >
		  	{
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["BC_"+name],.75,.5,.25)} />
			))}
			</Bar>
		  <Bar dataKey={"Power_Generation.CA_"+name} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"CA"}>
		  {
				information.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["CA_"+name],.75,.5,.25)} />
			))}
			</Bar>
	  </BarChart>
	  </div>
	);
}

export function PGPower({information,header}){
	return (
		<div className="mInfoBox">
		<p>{header}:</p>
		<BarChart
			width={350}
			height={300}
			data={information}
			margin={{
				top: 1,
				right: 1,
				left: 1,
				bottom: 1,
			}}
			>
			<CartesianGrid strokeDasharray="3 3" stroke="white" />
			<XAxis dataKey={"APH"} stroke="white"/>
			<YAxis type="number" stroke="white" domain={[0, 1]} />
			<Tooltip
				shared={false}
				trigger="hover"
				contentStyle={{ backgroundColor: "steelblue", borderColor: "black" }}
			/>
			<Legend iconSize="7" iconType="dot"/>
			<Bar dataKey={"Power_Generation.MegWatt_Power_In"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"Mega Watt Power In"} >
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["MegWatt_Power_In"],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"Power_Generation.MegWatt_Power_Out"} fill="#000000" stroke="#000000" strokeWidth="5px" name={"Mega Watt Power Out"} >
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["MegWatt_Power_Out"],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"Power_Generation.MegVoltAmp_Power"} fill="#CCCCCC" stroke="#CCCCCC" strokeWidth="5px" name={"Mega VA Power"} >
				{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["MegVoltAmp_Power"],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"Power_Generation.MegVar_Power_In"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"Mega VAR Power In"}>
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["MegVar_Power_In"],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"Power_Generation.MegVar_Power_Out"} fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="5px" name={"Mega VAR Power Out"}>
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["MegVar_Power_Out"],.75,.5,.25)} />
			  ))}
			  </Bar>
			<Bar dataKey={"Power_Generation.Total_Frequency"} fill="#111111" stroke="#111111" strokeWidth="5px" name={"Total Frequency"} >
			{
				  information.map((entry, index) => (
				  <Cell key={`cell-${index}`} fill={Color(entry["Power_Generation"]["Total_Frequency"],.75,.5,.25)} />
			  ))}
			  </Bar>
		</BarChart>
		</div>
	);
}
const blue = "#5597DE"
const green = "#58D0B1"
const yellow = "#F2E060"
const orange = "#F2A35B"
const red = "#F15D54"

//This function accepts 4 arguments. The first argument is the value to be compared. In otherwords, the value of the bar itself.
//The other 3 arguments are breakpoints to compare the MainValue to that determine the color. Set these to color the bar when it's at important values.
function Color(MainValue=.5,Value1,Value2,Value3){
	if (MainValue>=1){
		return blue;
	}else if (MainValue>=Value1){
		return green;
	}else if (MainValue>=Value2){
		return yellow;
	}else if (MainValue>=Value3){
		return orange;
	}else return red;
}