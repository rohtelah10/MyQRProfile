import styled from 'styled-components';

type QRProps = {
    image: string,
    title: string,
    description: string
} 

const QRComponent: React.FC<QRProps> = ({ image, title, description }) => {
    return(
        <Card>
            <QRImage src={image} alt="QR Image"></QRImage>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
        </Card>
    )
}

export default QRComponent;


const Card = styled.div`
    width: 320px;
    background: hsl(0, 0%, 100%);
    border-radius: 16px;
    padding: 32px;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    `;

const QRImage = styled.img`
    border-radius: 16px;
    width: 100%;
    height: 320px;
    `;

const Content = styled.div`
    font-family: 'Segoe UI';
    margin: 5px;
    /* line-height: 2rem; */
`;

const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
`;

const Description = styled.p`
    margin: 8px;
    font-weight: 400;
`;