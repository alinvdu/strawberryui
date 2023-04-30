import LoginPage from './../LoginPage';

export default {
  title: 'Components/LoginPage',
  component: LoginPage,
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

export const LoginPageDark = {
  args: {
    url: 'localhost',
    onLogin: () => {
        alert("login clicked")
    },
    theme: 'dark'
  },
};

export const LoginPageLight = {
  args: {
    url: 'localhost',
    onLogin: () => {
        alert("login clicked")
    },
    theme: 'light'
  },
};
