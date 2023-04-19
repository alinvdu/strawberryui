import Button from './../Button';

export default {
  title: 'Button',
  component: Button,
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

export const ButtonStory = {
  args: {
  },
};
