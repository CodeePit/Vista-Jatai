import Image from 'next/image';
import { FasesStyle } from './style';

const Fases = () => {
  return (
    <FasesStyle id="localizacao">
      <div className="texts">
        <div className="escolha-container">
          <Image src="/img/pin.svg" alt="fases" width={24} height={24} />
          <div className="escolha">
            Escolha o bem estar de viver <br />
            <span>em um bairro tranquilo e arborizado</span>
          </div>
        </div>
        <div className="endereco">
          Av. Antônio Lopes dos Santos, 875{' '}
          <span>Parque Jataí - Votorantim</span>
        </div>
      </div>
    </FasesStyle>
  );
};

export default Fases;
