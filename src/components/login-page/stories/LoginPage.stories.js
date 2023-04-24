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
            },
            ],
        },
    }
};

export const LoginPageStory = {
  args: {
    url: 'localhost',
    onLogin: () => {
        alert("login clicked")
    }
  },
};
