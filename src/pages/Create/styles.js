import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;

        max-width: 1200px;
        margin: 0 auto;

        display: flex;
        flex-direction: column;

        gap: 40px;

        > h1 {
            font-size: 36px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > p {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        .input {
            display: flex;
            gap: 40px;
        }

        .tags {
            display: flex;
            gap: 24px;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }

        .buttons {
            display: flex;
            gap: 40px;
        }
    }
`;
