import TextField from './../TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
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

export const TextFieldStory = {
  args: {
    onSubmit: value => alert(value)
  },
};
