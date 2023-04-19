import Calendar from './../Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
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

export const CalendarStory = {
  args: {
    currentDate: new Date()
  },
};
