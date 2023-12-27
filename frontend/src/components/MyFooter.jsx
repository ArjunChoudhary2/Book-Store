'use client';

import { Footer } from 'flowbite-react';
import FooterImg from '../assets/awardbooks.png';

const MyFooter = () => {
  return (
    <Footer container>
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand
          href="https://flowbite.com"
          src={FooterImg}
          alt="Flowbite Logo"
          name="Books"
        />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright href="#" by="Books™" year={2024} />
    </div>
  </Footer>
  )
}

export default MyFooter