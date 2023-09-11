import Link from 'next/link';

export interface NavItemProps {
  title: string;
  link: string;
}

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <Link className="border-4 m-4 p-2" href={link} replace>
      {title}
    </Link>
  );
};

export default NavItem;
