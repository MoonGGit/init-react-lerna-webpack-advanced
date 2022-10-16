interface TestButtonProps {
	label: string;
}

export const TestButton = ({ label }: TestButtonProps) => {
	return <button>{label}</button>;
};

const TestButtonDefaultProps: TestButtonProps = {
	label: 'TestButton Default Label',
};
TestButton.defaultProps = TestButtonDefaultProps;
