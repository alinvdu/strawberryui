import ToDoList from './../ToDoList';

export default {
  title: 'Components/ToDoList',
  component: ToDoList,
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

export const ToDoListStory = {
  args: {
    items: [{
      description: 'Strawberry Fields Forever',
      done: false
    }, {
      description: 'Lucy in the Sky with Diamonds',
      done: false
    }, {
      description: 'Lucy in the Sky with Diamonds',
      done: false
    }, {
      description: 'Lucy in the Sky with Diamonds',
      done: false
    }]
  },
};
