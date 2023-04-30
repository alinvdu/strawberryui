import TimeWidget from './../TimeWidget';

export default {
  title: 'Components/TimeWidget',
  component: TimeWidget,
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
            {
                name: 'black',
                value: '#1B1C1D',
            }, {
              name: 'white',
              value: 'white',
            }
            ],
        },
    }
};

export const TimeWidgetLight = {
  args: {
    theme: 'light'
  },
};

export const TimeWidgetDark = {
  args: {
    theme: 'dark'
  },
};
