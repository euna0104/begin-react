import React from 'react';
import { useParams } from 'react-router-dom';

// 프로필에서 사용할 데이터
const profileData = {
  euna: {
    name: '고은아',
    description: '경기대학생'
  },
  gildong: {
    name: '홍길동',
    description: '고은아의 친구'
  }
};

const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
