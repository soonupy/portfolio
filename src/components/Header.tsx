import { Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import '../styles/index.scss';


const Header = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

    const toggleDropdown = (index: number) => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpen(newIsOpen);
    };

    

  return (
    <header className="header">
      <h1 className='header-logo'>
      <Link to="/" className='logo-link'>
        <i className='icon ico-lg'><FaReact /></i>
        <span className='logo-text'>빌드테스트</span>
     </Link>
     </h1>
      <nav className="header-nav">
          <Link to="/menu1" className='menu'>Menu1<i className='icon ico-md'><ChevronDown size={20} /></i></Link>

          <Link to="/menu2" className='menu'>Menu2<i className='icon ico-md'><ChevronDown size={20} /></i></Link>

          <Link to="/menu3" className='menu'>Menu3<i className='icon ico-md'><ChevronDown size={20} /></i></Link>

          <Link to="/menu4" className='menu'>Menu4<i className='icon ico-md'><ChevronDown size={20} /></i></Link>
        </nav>
    </header>
  )
}

export default Header