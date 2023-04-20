import PrimaryButton, { VARIANTS } from '../PrimaryButton';

const meta = {
  title: 'Components/Buttons/PrimaryButton',
  component: PrimaryButton,
    parameters: {
        backgrounds: {
            default: 'black',
            values: [
            {
                name: 'black',
                value: '#1B1C1D',
            },
            ],
        },
    }
};

export default meta;

export const PrimaryButtonRed = {
  render: () => <PrimaryButton />
};

export const PrimaryButtonBlue = {
  render: () => <PrimaryButton variant={VARIANTS.BLUE} />
};
