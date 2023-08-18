import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        'header'
        'content';

    > main {
        grid-area: content;
        overflow-y: auto;
    }
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 40px auto 0;

    display: flex;
    flex-direction: column;

    > h1 {
        font-size: 36px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin: 24px 0 40px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    > main::-webkit-scrollbar {
        width: 8px;
    }

    > main::-webkit-scrollbar-track {
        background: transparent;
    }

    > main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.ROSA};
        border-radius: 8px;
    }

    .input {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    > p {
        margin: 40px 0 0;
    }

    .tags {
        height: 90px;
        display: flex;
        gap: 24px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        align-items: center;
        border-radius: 8px;
        padding: 16px;

        margin: 24px 0 40px;
    }

    .buttons {
        display: flex;
        gap: 40px;
    }
`;
