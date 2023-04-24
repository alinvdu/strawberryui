import TimeWidget from './../TimeWidget';

export default {
  title: 'Components/TimeWidget',
  component: TimeWidget,
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

export const TimeWidgetStory = {
  args: {
    url: 'localhost',
    onLogin: () => {
        alert("login clicked")
    }
  },
};
