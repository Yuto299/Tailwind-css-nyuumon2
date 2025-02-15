import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRocket } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import humanImage from './images/human.jpg';

export const App = () => {
  return (
    <>
      {/* // ナビゲーションバー */}
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

      {/* // ヒーローセクション */}
      <div
        id='home'
        className='container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'
      >
        <div className='flex flex-wrap md:flex-nowrap'>
          <div className='md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap'>
            <h1 className='font-bold text-4xl md:text-left lg:text-6xl md:text-5xl'>
              TailwindCSSで
              <br />
              美しいサイトを
              <br />
              作ります
            </h1>
            <button className='px-6 py-3 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10'>
              <FontAwesomeIcon icon={faRocket} className='mr-1' />
              <span>もっと見る</span>
            </button>
          </div>
          <img
            src={humanImage}
            alt='human'
            className='md:absolute lg:top-2 lg:right-48 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-3/6'
          />
        </div>
      </div>
    </>
  );
};

export default App;
