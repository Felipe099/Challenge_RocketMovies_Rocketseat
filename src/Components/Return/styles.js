import styled from 'styled-Components';

export const Container = styled.div`
    display: flex;

    a {
        display: flex;
        color: ${({ theme }) => theme.COLORS.ROSA};
        align-items: center;
        font-size: 16px;
        gap: 8px;
    }
`;
