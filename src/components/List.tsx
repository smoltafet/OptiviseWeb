import React from 'react';

const List = () => {
  const links = [
    { name: 'Clarity', href: '/about' },
    { name: 'Simplicity', href: '/projects' },
    { name: 'Empathy', href: '/news' },
    { name: 'Delight', href: '/careers' },
    { name: 'Accessibility', href: '/contact' },
  ];

  return (
    <nav className="py-10">
      <ul className="py-10 flex flex-row gap-4">
        {links.map(link => (
          <li key={link.name}>
            <a 
            href="/#"
            className="text-black hover:bg-gray-100 font-light border border-gray-300 rounded-full px-9 py-6 text-3xl">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default List;
