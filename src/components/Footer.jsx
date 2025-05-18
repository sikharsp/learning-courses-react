import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

 const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Help Center", href: "/support" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];


  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold text-white">EduPlatform</h2>
          <p className="mt-2 text-sm">
            Learn anytime, anywhere. Courses tailored for modern learners.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Github"><Github className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Navigation Columns */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {currentYear} EduPlatform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
