import React, {FC} from 'react';
import {MainDescription, MainHeader, MainWrapper} from "./index.styled";

const Home: FC = () => {
    return (
        <MainWrapper>
            <MainHeader>This is Home page</MainHeader>
            <MainDescription>
                Welcome! You are in the main page!
            </MainDescription>
        </MainWrapper>
    );
};

export default Home;