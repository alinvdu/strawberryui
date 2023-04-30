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
        }, {
          name: 'white',
          value: 'white',
        }
      ],
    },
  }
};

export const ToDoListLight = {
  args: {
    items: [{
      description: 'Visit Strawberry Fields in Central Park',
      done: false
    }, {
      description: 'Make strawberry jam',
      done: false
    }, {
      description: 'Host a Beatles-themed party',
      done: false
    }, {
      description: 'Take a trip to Liverpool',
      done: false
    }],
    theme: 'light'
  },
};

export const ToDoListDark = {
  args: {
    items: [{
      description: 'Visit Strawberry Fields in Central Park',
      done: false
    }, {
      description: 'Make strawberry jam',
      done: false
    }, {
      description: 'Host a Beatles-themed party',
      done: false
    }, {
      description: 'Take a trip to Liverpool',
      done: false
    }],
    theme: 'dark'
  },
};
