import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 144px;
        background-color: rgba(255, 133, 155, 0.05);
        padding-left: 144px;
    }
`;

export const Avatar = styled.div`
    display: flex;
    justify-content: center;

    margin: -75px 0 64px;
    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 0 auto;

    div + div {
        margin-top: 8px;
    }

    > div:nth-child(3) {
        margin-top: 24px;
    }

    > div:nth-child(4) {
        margin-bottom: 24px;
    }
`;
