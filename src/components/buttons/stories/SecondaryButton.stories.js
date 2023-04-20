import SecondaryButton from '../SecondaryButton';
import { ArrowLeft, ArrowRight } from '../SecondaryButtonUtils';

const meta = {
    title: 'Components/Buttons/SecondaryButton',
    component: SecondaryButton,
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

export const SecondaryButtonArrowRight = {
    render: () => <SecondaryButton icon={<ArrowRight />} />
};

export const SecondaryButtonArrowLeft = {
    render: () => <SecondaryButton icon={<ArrowLeft />} />
};
