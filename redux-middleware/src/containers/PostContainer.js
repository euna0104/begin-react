import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../modules/posts';
import Post from '../components/Post';

// postId 값을 props로 받아온다
// 해당 값은 라우트의 url 파라미터에서 읽는다

function PostContainer({ postId }) {
    const{ data, loading, error } = useSelector(state => state.posts.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러발생</div>;
    if (!data) return null;

    return <Post post={data} />;
}

export default PostContainer;
