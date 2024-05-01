function ToggleInstructionButton({ setDisplayInstructions }) {
	return (
		<button
			onClick={(e) => {
				setDisplayInstructions(false);
			}}
		>
			Lets Go!
		</button>
	);
}

export default ToggleInstructionButton;
