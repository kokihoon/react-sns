export const initialState= {
    mainPosts: [{
        User: {
            id:1,
            nickname:'kokihoon',
        },
        content : '첫번째 게시글',
        img : ''
    }],
    imagePath : [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type : ADD_POST,
};

const ADD_Dummy = {
    type: ADD_DUMMY,
    data: {
        content : 'Hello',
        UserId:1,
        User: {
            nickname: 'kokihoon',
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST : 
        case ADD_DUMMY : {
            return {
                ...state,
                mainPosts : [action.data, ...state.mainPosts]
            };
        };
        default : {
            return {
                ...state
            }
        }

    }
}

export default reducer;