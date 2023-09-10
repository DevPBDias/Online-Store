import Logo from '../../../assets/Logo.png';

type BrandProps = {
  brand: string
};

function Brand({ brand }: BrandProps) {
  return (
    <div>
      <img src={ Logo } alt="Logo" />
      <h1>{brand}</h1>
    </div>
  );
}

export default Brand;
