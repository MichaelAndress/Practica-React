export const todoReducer =( state=initialState, action )=>{

    switch (action.type) {
        case 'Add Todo':
            return[ ...state, action.payload]
        case 'Delete Todo':
            return state.filter(todo => todo.id != action.payload);
        case 'Toggle Todo':
            return state.map(todo=>{

                if (todo.id === action.payload) {
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }


                return todo;
            })
        default:
            return initialState;
    }
}