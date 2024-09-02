'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Footer, Media } from '../../../../payload/payload-types';
import { inclusions, noHeaderFooterUrls } from '../../../constants';
import { Button } from '../../Button';
import { Gutter } from '../../Gutter';
import classes from './index.module.scss';

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ' '}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
          {/* <Image 
          src='/admin_ui/footer/instagram.svg'
          alt='instagram'
          height={36}
          width={36}
          className={classes.icon}
          /> */}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-white.png" alt="logo" width={170} height={50} />
            </Link>

            <p>{footer.copyright}</p>

            <div className={classes.socialLinks}>
              {/* Instagram icon */}
              <Button
                el="link"
                href='https://instagram.com/'
                newTab={true}
                className={classes.socialLinkItems}
              >
                <Image
                  src="/instagram.svg"
                  alt='instagram'
                  width={24}
                  height={24}
                  className={classes.socialIcon}
                />
              </Button>
              {/* Facebook icon */}
              <Button
                el="link"
                href='https://facebook.com/'
                newTab={true}
                className={classes.socialLinkItems}
              >
                <Image
                  src="/facebook.svg"
                  alt='facebook'
                  width={24}
                  height={24}
                  className={classes.socialIcon}
                />
              </Button>
              {/* Twitter icon */}
              <Button
                el="link"
                href='https://x.com/'
                newTab={true}
                className={classes.socialLinkItems}
              >
                <Image
                  src="/twitter.svg"
                  alt='twitter'
                  width={24}
                  height={24}
                  className={classes.socialIcon}
                />
              </Button>
              {/* {navItems.map(item => {
                const icon = item?.link?.icon as Media

                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItems}
                  >
                    <Image
                      src='/instagram.svg'
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                  </Button>
                )
              })} */}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
