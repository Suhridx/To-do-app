export const reduce = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "REMOVE":
            return (state.filter((item) => item.title !== action.payload.title))
        case "SET_IMP":
            return state.map((item) =>
                item.title === action.payload.title ? { ...item, imp: !item.imp } : item
            );
        case "SET_COMPLETE":
            return state.map((item) =>
                item.title === action.payload.title ? { ...item, complete: !item.complete } : item
            );

        case "EDIT":
            return state.map((item) => item.id === action.payload.id ? action.payload : item);
        default:
            return state;

    }
}