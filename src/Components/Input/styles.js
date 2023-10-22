import styled from 'styled-Components';

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 10px;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-left: 16px;
    }

    > input {
        width: 100%;
        background-color: transparent;
        border: 0;
        font-size: 14px;
        padding: 19px 24px 19px 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-appearance: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;
