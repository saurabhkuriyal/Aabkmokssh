import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
// For the 'X' icon, you can use FaXTwitter from react-icons/fa6 or a custom SVG.
// I'm using FaTwitter from the standard set for simplicity, as FaXTwitter might require a newer version.
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const navigation = [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ];

  const social = [
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'X', icon: FaTwitter, href: '#' }, // Using FaTwitter as a placeholder for X
    { name: 'GitHub', icon: FaGithub, href: '#' },
    { name: 'YouTube', icon: FaYoutube, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-emerald-950 to-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className="px-5 my-2">
              <a href={item.href} className="text-base text-gray-400 hover:text-gray-300">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;