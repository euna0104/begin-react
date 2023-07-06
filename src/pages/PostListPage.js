import React from 'react';
import PostListContainer from '../containers/PostListContainer';
import {Outlet} from "react-router-dom";

const PostListPage = () => {
    return (
        <>
            <PostListContainer />
            <Outlet />
        </>
    );
}

export default PostListPage;
