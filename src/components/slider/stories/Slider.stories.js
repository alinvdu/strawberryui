import Slider from './../Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
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

export const SliderLight = {
  args: {
    theme: 'light'
  },
};

export const SliderDark = {
  args: {
    currentDate: new Date(),
    theme: 'dark'
  },
};
