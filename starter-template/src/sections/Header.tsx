import { NavLink } from '@mantine/core';
export const Header = () => {
  return <div className='flex justify-center items-center w-full fixed z-10 top-3'>
    <div className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
    <NavLink
        href="#required-for-focus"
        label="Home"
        classNames={{
          root: 'nav-item'
        }}
      />
      <NavLink
        href="#required-for-focus"
        label="Projects"
        classNames={{
          root: 'nav-item'
        }}
      />
      <NavLink
        href="#required-for-focus"
        label="About"
        classNames={{
          root: 'nav-item'
        }}
      />
      <NavLink
        href="#required-for-focus"
        label="Contact"
        classNames={{
          root: 'nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
        }}
      />
      </div>
  </div>;
};
