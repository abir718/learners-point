import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer flex flex-wrap justify-between gap-8 p-10 bg-neutral text-neutral-content">
      
      {/* Services */}
      <div>
        <span className="footer-title">Services</span> 
        <Link to="/courses" className="link link-hover">Courses</Link>
        <Link to="/tutorials" className="link link-hover">Tutorials</Link>
        <Link to="/resources" className="link link-hover">Resources</Link>
        <Link to="/support" className="link link-hover">Support</Link>
      </div> 

      {/* Company */}
      <div>
        <span className="footer-title">Company</span> 
        <Link to="/about" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/careers" className="link link-hover">Careers</Link>
      </div> 

      {/* Legal */}
      <div>
        <span className="footer-title">Legal</span> 
        <Link to="/terms" className="link link-hover">Terms of use</Link>
        <Link to="/privacy" className="link link-hover">Privacy policy</Link>
        <Link to="/cookie" className="link link-hover">Cookie policy</Link>
      </div>

      {/* Newsletter */}
      <div className="w-full md:w-80">
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-neutral-content">Enter your email</span>
          </label>
          <div className="relative">
            <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
