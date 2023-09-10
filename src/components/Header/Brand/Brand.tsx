import Logo from '../../../assets/Logo.png';
import { Container, Image, Title } from './styles';

type BrandProps = {
  brand: string
};

function Brand({ brand }: BrandProps) {
  return (
    <Container>
      <Image src={ Logo } alt="Logo" />
      <Title>{brand}</Title>
    </Container>
  );
}

export default Brand;
