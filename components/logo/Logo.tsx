import Image from "next/image";
import Link from 'next/link';
import imageLogo from "../../public/images/logo.png";

const Logo = () => {
  return (
    <Link href='/' >
      <Image src={imageLogo} alt="Logo" width={133} height={46} />
    </ Link>
  )
};

export default Logo