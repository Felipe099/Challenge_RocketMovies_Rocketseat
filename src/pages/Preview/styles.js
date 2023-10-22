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
        padding: 40px 0;
    }
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-between;

    > button {
        display: flex;
        align-items: center;

        gap: 10px;

        background-color: ${({ theme }) => theme.COLORS.ROSA};
        border-color: transparent;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 14px 32px;
        border-radius: 10px;
        margin-right: 5px;

        transition: 0.3s;
    }
`;

export const Avaliation = styled.div`
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
`;

export const Author = styled.div`
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
`;

export const Description = styled.div`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;

    p + p {
        margin-top: 20px;
    }
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
export const Topics = styled.div`
    display: flex;
    margin: 40px 0;
    gap: 8px;
`;
