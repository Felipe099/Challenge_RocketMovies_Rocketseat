import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 144px;
        background-color: ${({ theme }) => theme.COLORS.ROSA_900};;
        padding-left: 144px;
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 0 auto;

    div + div {
        margin-top: 8px;
    }

    > div:nth-child(4) {
        margin-top: 24px;
    }

    > div:nth-child(5) {
        margin-bottom: 24px;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -75px auto 64px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        position: absolute;

        right: 7px;
        bottom: 7px;

        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.ROSA};

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        > svg {
            color: ${({ theme }) => theme.COLORS.BACKGORUND_700};
        }
        > input {
            display: none;
        }
    }
`;

