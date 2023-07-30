export const reduce = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        case "REMOVE":
            return (state.filter((item) => item.id !== action.payload.id))
        case "SET_IMP":
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, imp: !item.imp } : item
            );
        case "SET_COMPLETE":
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, complete: !item.complete } : item
            );
        default:
            return state;

    }
}