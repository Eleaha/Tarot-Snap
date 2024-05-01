import ToggleInstructionButton from "./ToggleInstructionButton";

function Instructions({setDisplayInstructions}) {
	return (
		<section>
			<h1>Tarot Snap</h1>
			<h2>Instructions...</h2>
            <p>Here is some writing on how to use</p>
            <ToggleInstructionButton setDisplayInstructions={setDisplayInstructions} />
		</section>
	);
}

export default Instructions;
