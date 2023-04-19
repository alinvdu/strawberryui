import MusicWidget from './../MusicWidget';

export default {
  title: 'MusicWidget',
  component: MusicWidget,
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

export const MusicWidgetStory = {
  args: {
    author: "David Bowie",
    title: "Space Oddity",
    album: "The Rise and Fall of Ziggy Stardust and the Spider from Mars"
  },
};
