import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAllUser } from "../store/slices/userSlice";

const DeleteUser = () => {
  const dispatch = useDispatch();

  const removeAll = () => {
    dispatch(deleteAllUser());
  };
  return (
    <>
      <Wrapper>
        <button className="btn clear-btn" onClick={removeAll}>
          Delete all
        </button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteUser;
