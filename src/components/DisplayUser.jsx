import { AiFillDelete } from "react-icons/ai";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/userSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => {
    return state.user;
  });

  const removeOne = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      <Wrapper>
        {userData.map((user, id) => {
          return (
            <li key={id}>
              {user}
              <button className=" btn-delete" onClick={() => removeOne(id)}>
                <AiFillDelete className="delete-icon" />
              </button>
            </li>
          );
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
