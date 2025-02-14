import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    // ナビゲーションバー
    <header className='py-6'>
      <div className='container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full'>
        <div className='text-3xl font-bold'>Yut.com</div>
        <div className='space-x-12 hidden md:flex items-center'>
          <a href='#home' className='hover:text-selected-text transition-all duration-300'>
            ホーム
          </a>
          <a href='#portfolio' className='hover:text-selected-text transition-all duration-300'>
            ポートフォリオ
          </a>
          <a href='#clients' className='hover:text-selected-text transition-all duration-300'>
            お客様
          </a>
          <a href='#contact'>
            <button className='px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300'>
              お問い合わせ
            </button>
          </a>
        </div>
        <div className='md:hidden'>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
}
