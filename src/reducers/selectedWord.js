function selectedWord(state = '', action) {
    switch (action.type) {
        case 'SET':
            return action.selectedWord;
        default:
            return state;
    }
}

export default selectedWord;