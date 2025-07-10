import Image from 'next/image';
import { LegalStyle } from './style';

const Legal = () => {
  return (
    <LegalStyle>
      <div className="box">
        <span>
          Texto legal Vista Jataí Residence Julio e Julio, Texto legal Vista
          Jataí Residence Julio e Julio, Texto legal Vista Jataí Residence Julio
          e Julio, Texto legal Vista Jataí Residence Julio e Julio, Texto legal
          Vista Jataí Residence Julio e Julio, Texto legal Vista Jataí Residence
          Julio e Julio, Texto legal Vista Jataí Residence Julio e Julio, Texto
          legal Vista Jataí Residence Julio e Julio, Texto legal Vista Jataí
          Residence Julio e Julio, Texto legal Vista Jataí Residence Julio e
          Julio, Texto legal Vista Jataí Residence Julio e Julio, Texto legal
          Vista Jataí Residence
        </span>
        <div className="logos">
          <Image src="/img/logoJulio.png" alt="logo" width={500} height={500} />
          <Image src="/img/caixa.png" alt="logo" width={500} height={500} />
        </div>
      </div>
    </LegalStyle>
  );
};

export default Legal;
