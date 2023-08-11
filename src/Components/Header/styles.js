import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    display: flex;
    padding: 24px 123px;
    align-items: center;
    justify-content: space-around;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ROSA};
    }

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};

    .input {
        width: 630px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        margin-right: 9px;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    img {
        border-radius: 50%;
        width: 64px;
        height: 64px;
    }
`;
