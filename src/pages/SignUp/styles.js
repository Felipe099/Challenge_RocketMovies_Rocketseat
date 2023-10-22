import styled from 'styled-Components';
import backgroundImg from '../../../assets/Logo.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;

    margin: auto;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ROSA};
        font-size: 48px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_400};
        font-size: 14px;
        margin-bottom: 48px;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        margin-bottom: 48px;
    }

    > div:nth-child(5) {
        margin: 8px 0;
    }

    > div:nth-child(7) {
        margin-top: 24px;
    }
    > a {
        color: ${({ theme }) => theme.COLORS.ROSA};
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 42px;

        transition: filter 0.2s;

        gap: 8px;
    }

    > a:hover {
        filter: brightness(0.5);
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;
