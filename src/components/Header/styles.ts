import styled from "styled-components";

export const Container = styled.header`
  height: 4rem;
  width: 100vw;
  display: flex;
  padding: 0 6rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  box-shadow: inset rgba(0, 0, 0, 0.25) 0px 25px 20px;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
