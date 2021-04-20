export const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(product => product.id !== action.payload);

        default:
            return state;
    }
}