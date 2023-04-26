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
            },
            ],
        },
    }
};

export const SliderStory = {
  args: {
    currentDate: new Date()
  },
};
