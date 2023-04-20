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
            },
            ],
        },
    }
};

export const PaginationStory = {
  args: {
    totalElements: 100,
    elementsPerPage: 10,
    onPageChange: () => {}
  },
};
