import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 8px;
    padding: 8px 16px;

    font-size: 12px;
`;
