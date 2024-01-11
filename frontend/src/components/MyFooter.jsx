'use client';

import { Footer } from 'flowbite-react';
import FooterImg from '../assets/awardbooks.png';

const MyFooter = () => {
  return (
    <Footer container>
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand
          href="/"
          src={FooterImg}
          alt="Flowbite Logo"
          name="PageTurner"
        />
        <Footer.LinkGroup>
          <Footer.Link href="/about">About Us</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright href="#" by="PageTurner™" year={2024} />
    </div>
  </Footer>
  )
}

export default MyFooter