import styled from 'styled-Components';

export const Container = styled.textarea`
    width: 100%;
    height: 275px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;
    border: none;
    padding: 19px 24px;

    resize: none;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;
