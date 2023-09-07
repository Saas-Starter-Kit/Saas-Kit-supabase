import Link from 'next/link';

export interface NavItemProps {
  title: string;
  link: string;
}

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <Link className="p-12" href={link} replace>
      {title}
    </Link>
  );
};

export default NavItem;
