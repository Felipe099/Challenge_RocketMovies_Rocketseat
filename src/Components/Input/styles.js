import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 10px;

    > input {
        width: 100%;
        height: 56px;
        background-color: transparent;
        border: 0;
        font-size: 14px;
        padding: 19px 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;
