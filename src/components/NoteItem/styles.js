import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) =>
        isNew ? 'transparent' : theme.COLORS.BACKGROUND_600};

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

    margin: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;

        > svg {
            color: ${({ theme }) => theme.COLORS.ROSA};
        }
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
