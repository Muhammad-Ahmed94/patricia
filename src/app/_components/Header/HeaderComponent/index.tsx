'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Header } from '../../../../payload/payload-types';
import { noHeaderFooterUrls } from '../../../constants';
import { Gutter } from '../../Gutter';
import { HeaderNav } from '../Nav';
import classes from './index.module.scss';

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo.png" alt="logo-main" height={50} width={170} />
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
