import styled from "styled-components";
import { Outlet } from "react-router";

export const TitleTop = styled.div `
    height: 100px;
    width: 100x;
    background-color: #34ADB8;
    justify-content: space-between;
    display: flex;
`
export const TitleSite = styled.h1`
    margin-top: 70px;
    margin-left: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15pt;
    color: white;
`
export const NewOutlet = styled(Outlet)`
    display: flex;
    width: 10px;
`

export const NewMain = styled.main`
    height: auto;
    flex-direction: row;
`;