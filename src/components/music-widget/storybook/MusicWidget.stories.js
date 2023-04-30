import MusicWidget from './../MusicWidget';

export default {
  title: 'Components/MusicWidget',
  component: MusicWidget,
    parameters: {
        backgrounds: {
            default: 'black',
            values: [
            {
                name: 'black',
                value: '#1B1C1D',
            },{
              name: 'white',
              value: 'white',
          }
            ],
        },
    }
};

export const MusicWidgetDark = {
  args: {
    author: "David Bowie",
    title: "Space Oddity",
    album: "The Rise and Fall of Ziggy Stardust and the Spider from Mars",
    theme: "dark"
  },
};

export const MusicWidgetLight = {
  args: {
    author: "David Bowie",
    title: "Space Oddity",
    album: "The Rise and Fall of Ziggy Stardust and the Spider from Mars",
    theme: "light"
  },
};

