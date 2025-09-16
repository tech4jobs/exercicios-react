import styled from "@emotion/styled"

export const Botao = styled.button`
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #2ecc71;
    }
`;

export const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 16px;
    width: 180px;
    text-align: center;
    background-color: #fdfdfd;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

    h2 {
        font-size: 20px;
        color: #8e44ad;
    }
    
    p {
        margin: 8px 0;
    }
`;
