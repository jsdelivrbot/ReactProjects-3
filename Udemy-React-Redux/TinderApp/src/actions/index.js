
// Action Creators

export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action
    // an object with a TYPE property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
    //console.log('Book selected:', book.title);
}