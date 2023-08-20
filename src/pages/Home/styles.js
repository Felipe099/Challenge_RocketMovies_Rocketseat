import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        'header'
        'content';
`;

export const Content = styled.div`
    grid-area: content;

    width: 1200px;

    overflow-y: auto;

    margin: 50px auto 0;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > h1 {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > a {
            display: flex;
            align-items: center;
            background-color: ${({ theme }) => theme.COLORS.ROSA};
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            padding: 14px 32px;
            border-radius: 10px;
            margin-right: 5px;
        }
    }

    > section {
        margin-top: 40px;
    }
`;
