import { Meta, Story } from '@storybook/react';
import { TestButton } from '.';

export default {
	component: TestButton,
	title: 'ATOMS/Buttons',
	argTypes: {
		label: {
			type: 'string',
			description: 'string',
			name: 'label(버튼 명)',
			table: {
				type: {
					summary: 'type desc summary',
					detail: 'type desc detail',
				},
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: 'TestButton **_markdown_** Desc',
			},
		},
	},
} as Meta;

/* TestButton */
const TestButtonSB: Story = args => <TestButton {...args} />;
export const Test_Button = {};

export const Test_Button1 = TestButtonSB.bind({});
Test_Button1.args = {
	label: 'test1',
};
Test_Button1.parameters = {
	docs: {
		description: {
			story: 'TestButton1 **markdown**',
		},
	},
};

export const Test_Button2 = TestButtonSB.bind({});
Test_Button2.args = {
	label: 'test2',
};
Test_Button2.parameters = {
	docs: {
		description: {
			story: 'TestButton2 **markdown**',
		},
	},
};
