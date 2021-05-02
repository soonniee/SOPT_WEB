import React from "react";

const UserCard = ({ userData }) => {
    return (
        userData ? (
            <div className="profile">
                <img className="profile__img" src={userData.avatar_url} alt=""></img>
                <p>{userData.name}</p>
                {/* <p>{userData.bio}</p> */}
                <p>Followers : {userData.followers}</p>
                <p>Following : {userData.following}</p>
                <p>ID : {userData.login}</p>
                <a className="profile__link" href={userData.html_url} alt="" target="_blank">Visit Github</a>
                <div className="profile__detail">
                    <div className="detail__followers">Followers
                        <div>{userData.followers}</div>
                    </div>
                    <div className="detail__followings">Following
                    <div>{userData.following}</div></div>
                    <div className="detail__repos">Repos
                    <div>{userData.public_repos}</div></div>
                </div>
            </div>
        ) : <div>Loading...</div>

    );
};

export default UserCard;