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
    },
    decorators: [
      (story) => (
        <div style={{ width: '269px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {story()}
        </div>
      )
    ]
};

export const TextFieldStory = {
  args: {
    onSubmit: value => alert(value)
  },
};
