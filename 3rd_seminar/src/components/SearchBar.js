import React from "react";
import Styled from 'styled-components';
import SVG from '../imgs/searchIcon.svg';
const SearchBarWrap = Styled.div`
input {
    padding:5px 40px;
    width: 500px;
    height:40px;
    background-color:#28223f;
    border: 2px solid skyblue;
    border-radius:20px;
    color: white;
    font-size: 15px;
    margin: 20px 0px;
    margin-left:50px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  }
  input::placeholder {
    color: white;
  }
  input:focus {
    outline: none;
  }
  form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  h2 {
    color: white;
    text-align: center;
    font-size: 32px;
    margin-top:75px;
    margin-bottom:10px;
  }
    img{
      position: absolute;
      left: 60px;
      top: 35px;
      width:30px;
      height:25px;
      /* left: 35.11%;
      right: 67.17%;
      top: 55.22%;
      bottom: 49.03%; */   
  }
  
`;
const SearchBar = ({ getUser }) => {
    const [userName, setUserName] = React.useState('');
    const changeHandler = (event) => {
        event.preventDefault();
        setUserName(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        getUser(userName);
        setUserName("");
    };
    return (
        <SearchBarWrap>
            <h2>GitHub Profile Finder</h2>
            <form onSubmit={submitHandler}>
                <input type="text" value={userName} onChange={changeHandler} placeholder="Github ID를 입력하세요ㅎ_ㅎ" />
                <img src={SVG}></img>
            </form>
        </SearchBarWrap>
    );
};

export default SearchBar;