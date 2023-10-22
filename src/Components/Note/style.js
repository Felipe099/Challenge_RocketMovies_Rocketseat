import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.ROSA_900};

    padding: 32px;
    border-radius: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: 24px;

    cursor: pointer;

    > header {
        color: ${({ theme }) => theme.COLORS.WHITE};

        > svg {
            color: ${({ theme }) => theme.COLORS.ROSA};
            margin: 8px 0 15px;
        }
    }

    > div {
        display: flex;
        margin-top: 15px;
        gap: 8px;
    }
`;
