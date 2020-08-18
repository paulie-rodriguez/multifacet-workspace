const Reducer = (state, action) => {
    switch (action.type) {
        case 'CLOSE_WINDOW':
            return !state
            case 'OPEN_WINDOW':
             {
                state = true
            };
        default:
            return state;
    }
};

export default Reducer;