import { AiFillDelete } from "react-icons/ai";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DisplayUser = () => {
  const userData = useSelector((state) => {
    return state.user;
  });

  return (
    <>
      <Wrapper>
        {userData.map((user, key) => {
          return <li key={key}>{user}</li>;
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`;
export default DisplayUser;
