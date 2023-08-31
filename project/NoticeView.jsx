import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notice.css';
import { useNavigate, useParams } from 'react-router-dom';

const NoticeView = ({ location }) => {
  const [ data, setData ] = useState();
  const navigate = useNavigate();
  const { no } = useParams();
  const accessToken = sessionStorage.getItem('accessToken');

  useEffect(() => {
      fetchNoticeData(no);
    }, [no]);

  const fetchNoticeData = async (noticeBoardId) => {
      try {
        const response = await axios.get(`/api/noticeboards/${noticeBoardId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('게시물을 불러오지 못했습니다.');
      }
    }

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          data ? (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ data.id }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{  }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{  }</label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label>{ data.views }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {

                  }
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={() => navigate('/api/noticeboards')}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default NoticeView;
