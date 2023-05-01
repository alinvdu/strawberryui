import Calendar from '../Calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
    parameters: {
        backgrounds: {
            default: 'black',
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

export const CalendarDark = {
  args: {
    currentDate: new Date(),
    theme: 'dark'
  },
};

export const CalendarLight = {
  args: {
    currentDate: new Date(),
    theme: 'light'
  },
};
