import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-purple-500/20 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ZORA
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Building intelligent AI systems that empower enterprises
              through automation, engagement, and scalable innovation.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-purple-400 transition cursor-pointer">Orbileads</li>
              <li className="hover:text-purple-400 transition cursor-pointer">HRMS</li>
              <li className="hover:text-purple-400 transition cursor-pointer">CRMS</li>
              <li className="hover:text-purple-400 transition cursor-pointer">Automation Suite</li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-blue-400 transition cursor-pointer">About Us</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Careers</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Blog</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">support@zora.ai</p>
            <p className="text-gray-400 text-sm mt-2">+91 98765 43210</p>

            <div className="flex gap-4 mt-6 text-gray-400">
              <FaLinkedin className="cursor-pointer hover:text-purple-400 transition text-lg" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition text-lg" />
              <FaEnvelope className="cursor-pointer hover:text-purple-400 transition text-lg" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-purple-500/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ZORA Technologies. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
