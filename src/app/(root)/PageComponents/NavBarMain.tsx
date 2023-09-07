import NavItem from '@/components/NavItem';
import config from '@/lib/config/default';

const NavBarMain = () => {
  return (
    <div>
      {config.routes.map((route) => (
        <NavItem key={route.title} title={route.title} link={route.link} />
      ))}
    </div>
  );
};

export default NavBarMain;
