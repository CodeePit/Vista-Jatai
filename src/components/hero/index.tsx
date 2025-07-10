import Image from 'next/image';
import { HeroStyle } from './style';

const Hero = () => {
  return (
    <HeroStyle>
      <Image
        alt=""
        className="hero"
        src="/img/hero-banne.jpg"
        width={1920}
        height={730}
      />
      <Image
        alt=""
        className="hero-mobile"
        src="/img/hero-banner-mobil.jpg"
        width={1920}
        height={730}
      />
    </HeroStyle>
  );
};

export default Hero;
