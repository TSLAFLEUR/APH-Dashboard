import "./styles.css";

export default function Visual({information}){
	if (information!=null){
		return (
			information.map((entry, index) => (
<div className="xxlInfoBox">
	Last data recieved was at: {entry["timestamp"]}
	<div>Frequency<br/>{entry["APH"]["Frequency"].toFixed(2)} Hz</div>
	<div>PIT-160<br/>{entry["PIT_160"].toFixed(2)} PSI</div>
	<div>FIT-160<br/>{entry["FIT_160"].toFixed(2)} GPM</div>
</div>
			))
		)
	}
	return (
		<div>No information to display</div>
	)
}