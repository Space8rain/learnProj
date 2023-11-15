import Image from "next/image";
import Link from 'next/link';
import imageLogo from "../../public/images/logo.png";

const Logo = () => {
  return (
    <Link href='/'>
      <Image 
        src={imageLogo}
        alt="Logo"
        width={imageLogo.width}
        height={imageLogo.height}
        layout="fixed"
        // objectFit='cover'
        // sizes="(max-width: 768px) 100vw, 33vw"
        style={{
          width: '115px',
          height: 'auto',
          // objectFit: "contain",
        }}
      />
    </Link>
  )
};

export default Logo