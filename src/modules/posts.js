/*
< 프로미스를 다루는 리덕스 모듈을 다룰때 >
1. 프로미스가 시작, 성공, 실패했을때 다른 액션을 디스패치해야한다.
2. 각 프로미스마다 thunk 함수를 만들어주어야 한다.
3. 리듀서에서 액션에 따라 로딩중, 결과, 에러 상태를 변경해주어야 한다.
*/

import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS' // 요청시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' // 요청성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' // 요청에러

// 포스트 하나 조회하기
const GET_POST = 'GET_POST' // 요청시작
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' // 요청성공
const GET_POST_ERROR = 'GET_POST_ERROR' // 요청에러

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPosts);
    

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading()
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success(action.payload)
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: reducerUtils.error(action.error)
            };
        case GET_POST:
            return {
                ...state,
                post: reducerUtils.loading()
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: reducerUtils.success(action.payload)
            };
        case GET_POST_ERROR:
            return {
                ...state,
                post: reducerUtils.error(action.error)
            };
        default:
            return state;
    }
}
