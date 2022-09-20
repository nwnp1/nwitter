import React, { useState } from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";
import { updateProfile } from "@firebase/auth";

//로그인한 유저 정보 prop으로 받기
const Profile = ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  /*//내 nweets 얻는 function 생성
  const getMyNweets = async () => {
    //트윗 불러오기
    //1. dbService의 컬렉션 중 "nweets" Docs에서 userObj의 uid와 동일한 creatorID를 가진 모든 문서를 내림차순으로 가져오는 쿼리(요청) 생성
    const q = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", "userObj.uid"),
      orderBy("createdAt", "desc")
    );
    console.log(userObj);
    //2. getDocs()메서드로 쿼리 결과 값 가져오기
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });*/
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(authService.currentUser, {
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  // 내 nweets 얻는 function 호출
  /*useEffect(() => {
    getMyNweets();
  }, []);*/
  //const onLogOutClick = () => authService.signOut();
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};

export default Profile;
