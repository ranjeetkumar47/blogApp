import Container from '@/components/core/Container'
import { configuration } from '@/lib/siteConfiguration'
import Image from 'next/image'
import Link from 'next/link'

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className={'py-8 lg:py-24'}>
      <Container>
        <div className={'flex flex-col space-y-8 lg:flex-row lg:space-y-0'}>
          <div className={'flex w-full space-x-2 lg:w-4/12 xl:w-3/12' + ' xl:space-x-6 2xl:space-x-8'}>
            <div className={'flex flex-col space-y-4'}>
              <div>
                <Image src={'/assets/images/logo.png'} alt="logo" width={140} height={100} />
              </div>

              <div>
                <p className={'text-sm text-gray-500 dark:text-gray-400'}>Add a short tagline about your product</p>
              </div>

              <div className={'flex text-xs text-gray-500 dark:text-gray-400'}>
                <p>
                  © Copyright {YEAR} {configuration.site.name}. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              'flex flex-col space-y-8 lg:space-y-0 lg:space-x-6' +
              ' xl:space-x-16 2xl:space-x-20' +
              ' w-full lg:flex-row lg:justify-end' +
              ' md:flex-row md:justify-between'
            }
          >
            <div>
              <div className={'flex flex-col space-y-4'}>
                <FooterSectionHeading>Global Presence</FooterSectionHeading>
                <FooterSectionList>
                  <FooterLink>
                    <Link href={''}>USA</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Canada</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Qatar</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>India</Link>
                  </FooterLink>
                </FooterSectionList>
              </div>
            </div>

            <div>
              <div className={'flex flex-col space-y-4'}>
                <FooterSectionHeading>Company</FooterSectionHeading>
                <FooterSectionList>
                  <FooterLink>
                    <Link href={''}>About</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Our Team</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Investors</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Referral Program</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Careers</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Contact</Link>
                  </FooterLink>
                </FooterSectionList>
              </div>
            </div>

            <div>
              <div className={'flex flex-col space-y-4'}>
                <FooterSectionHeading>Services</FooterSectionHeading>
                <FooterSectionList>
                  <FooterLink>
                    <Link href={''}>Blockchain</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Mobile App Development</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Python Development</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Angular Development</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>React/Next JS Development</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>User Experience Design</Link>
                  </FooterLink>
                </FooterSectionList>
              </div>
            </div>
            <div>
              <div className={'flex flex-col space-y-4'}>
                <FooterSectionHeading>Events Overview</FooterSectionHeading>
                <FooterSectionList>
                  <FooterLink>
                    <Link href={''}>FAQs</Link>
                  </FooterLink>
                  <FooterLink>
                    <Link href={''}>Workshop</Link>
                  </FooterLink>
                </FooterSectionList>
              </div>
            </div>

            {/* <NewsletterSignup /> */}
          </div>
        </div>
      </Container>
    </footer>
  )
}

function FooterSectionHeading(props: React.PropsWithChildren) {
  return (
    <p>
      <span className={'font-semibold'}>{props.children}</span>
    </p>
  )
}

function FooterSectionList(props: React.PropsWithChildren) {
  return <ul className={'flex flex-col  space-y-4 text-gray-500 dark:text-gray-400'}>{props.children}</ul>
}

function FooterLink(props: React.PropsWithChildren) {
  return <li className={'text-sm [&>a]:transition-colors [&>a]:hover:text-gray-800' + ' dark:[&>a]:hover:text-white'}>{props.children}</li>
}

export default Footer
