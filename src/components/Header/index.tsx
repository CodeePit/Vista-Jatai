import { Navs } from '@utils/links';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { HeaderStyle } from './style';

const Header = () => {
  return (
    <HeaderStyle>
      <Image src="/img/logo.svg" alt="logo" width={197} height={77} />
      <nav>
        {Navs.map((e, i) => (
          <React.Fragment key={e.id}>
            <Link href={e.link}>{e.label}</Link>
            {i < Navs.length - 1 && <span />}
          </React.Fragment>
        ))}
      </nav>
    </HeaderStyle>
  );
};

export default Header;
