import Pagination from './../Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
    parameters: {
        backgrounds: {
            default: 'black',
            values: [
            {
                name: 'black',
                value: '#1B1C1D',
            }, {
              name: 'white',
              value: 'white'
            }
            ],
        },
    }
};

export const PaginationLight = {
  args: {
    totalElements: 100,
    elementsPerPage: 10,
    onPageChange: () => {},
    theme: 'light'
  },
};

export const PaginationDark = {
  args: {
    totalElements: 100,
    elementsPerPage: 10,
    onPageChange: () => {},
    theme: 'dark'
  },
};
