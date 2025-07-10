import Form from '@components/form';
import { SectionFormStyle } from './style';
import Link from 'next/link';
import Image from 'next/image';

const SectionForm = () => {
  return (
    <SectionFormStyle id="contato">
      <h1 className="title">
        Surpreenda-se com o <strong>Apartamento Decorado!</strong>
      </h1>
      <Form />
      <div className="text">
        <span className='location'><strong>Stand de Vendas:</strong> Av. Rogério Cassola, 581 - Votorantim</span>
        <Link href="https://ul.waze.com/ul?place=ChIJ5UoozR2KxZQRkvlPROJmkdI&ll=-23.56029190%2C-47.46299510&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">Ver localização <Image src="/img/waze.svg" alt="waze" width={24} height={24} /></Link>
      </div>
    </SectionFormStyle>
  );
};

export default SectionForm;
