import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        'header'
        'content';

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 40px 0;
    }
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        align-items: center;
        margin: 24px 0;

        h1 {
            margin-right: 19px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > svg {
            color: ${({ theme }) => theme.COLORS.ROSA};
        }
    }

    .about {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        gap: 8px;

        > img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }

        > svg {
            color: ${({ theme }) => theme.COLORS.ROSA};
        }
    }

    > ul {
        list-style: none;
        display: flex;
        margin: 40px 0;
        gap: 8px;

        > li {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
            color: ${({ theme }) => theme.COLORS.GRAY};
            border-radius: 8px;
            padding: 8px 16px;

            font-size: 12px;
        }
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: justify;
    }
`;
