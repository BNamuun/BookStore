import { CarouselNav } from "./CarouselNav";
import { GeneralInfo } from "./GeneralInfo";
import { HeaderNew } from "./HeaderNew";
import { NavHeader } from "./NavHeader";
import { Info } from "./info";
import Helmet from "react-helmet";

export function Header() {
  <head>
    <meta property="og:title" content="Namuun" />
    <meta property="og:url" content="https://book-store-flame.vercel.app/" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="iim yum ban" />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/dkmzrowed/image/upload/v1683468942/public/level1/p7vz2u1jtqgs2glupzud.jpg"
    />
  </head>;
  return (
    <>
      {/* <HeaderNew /> */}
      <NavHeader />
      <GeneralInfo />
      {/* <CarouselNav /> */}
      {/* <Info /> */}
      {/* <Helmet>
        <head>
          <meta property="og:title" content="Namuun" />
          <meta
            property="og:url"
            content="https://book-store-flame.vercel.app/"
          />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="iim yum ban" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dkmzrowed/image/upload/v1683468942/public/level1/p7vz2u1jtqgs2glupzud.jpg"
          />
        </head>
      </Helmet> */}
      ;
    </>
  );
}
