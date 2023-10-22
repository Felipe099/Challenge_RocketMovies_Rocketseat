import styled from 'styled-Components';

export const Container = styled.button`
    background: none;
    border: none;
    
    width: 100%;
    height: 56px;
    border-radius: 10px;


    background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.COLORS.ROSA : theme.COLORS.BACKGROUND_900};

    color: ${({ theme, $isActive }) =>
        $isActive ? theme.COLORS.BACKGROUND_900 : theme.COLORS.ROSA};
`;
