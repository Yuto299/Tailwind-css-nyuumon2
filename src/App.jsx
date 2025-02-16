import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRocket } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import humanImage from './images/human.jpg';
import portfolio1 from './images/portfolio1.jpg';
import portfolio2 from './images/portfolio2.jpg';
import portfolio3 from './images/portfolio3.jpg';
import portfolio4 from './images/portfolio4.jpg';
import portfolio5 from './images/portfolio5.jpg';
import portfolio6 from './images/portfolio6.jpg';
import { faCss, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';

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
            <a href='#skill' className='hover:text-selected-text transition-all duration-300'>
              スキル一覧
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

      {/* ポートフォリオセクション */}
      <div
        id='portfolio'
        className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'
      >
        <section className='w-full'>
          <h2 className='secondary-title'>私のポートフォリオ</h2>
          <p className='section-paragraph'>私が作ってきたWebアプリケーションはこちら</p>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            <img src={portfolio1} alt='1' className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer' />
            <img src={portfolio2} alt='2' className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer' />
            <img src={portfolio3} alt='3' className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer' />
            <img src={portfolio4} alt='4' className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer' />
            <img src={portfolio5} alt='5' className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer' />
            <img src={portfolio6} alt='6' className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer' />
          </div>
        </section>
      </div>

      {/* スキルスタック */}
      <div
        id='portfolio'
        className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'
      >
        <section className='w-full'>
          <h2 className='secondary-title'>スキルスタック</h2>
          <p className='section-paragraph'>私は以下のプログラミング言語を使用可能です。</p>

          {/* HTML */}
          <div className='my-16'>
            <div className='w-full border border-purple-200 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-400 transition-all duration-300 cursor-pointer'>
              {/* 言語のロゴ */}
              <div className='mb-6 lg:mb-0 self-center'>
                <FontAwesomeIcon icon={faHtml5} className='text-9xl text-orange-400' />
              </div>

              {/* スキルの説明 */}
              <div className='text-center flex flex-wrap justify-center lg:text-left lg:block'>
                <h3 className='text-3xl font-semibold'>HTML5</h3>
                <div className='flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8'>
                  <div className='badge'>ウェブサイト制作</div>
                  <div className='badge'>フロントエンド開発</div>
                </div>
                <p className='text-secondary'>HPやLPも作成可能です。料金は30万円から承っております。</p>
              </div>
            </div>
          </div>

          {/* CSS */}
          <div className='my-16'>
            <div className='w-full border border-purple-200 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-blue-300 transition-all duration-300 cursor-pointer'>
              {/* 言語のロゴ */}
              <div className='mb-6 lg:mb-0 self-center'>
                <FontAwesomeIcon icon={faCss} className='text-9xl text-blue-300' />
              </div>

              {/* スキルの説明 */}
              <div className='text-center flex flex-wrap justify-center lg:text-left lg:block'>
                <h3 className='text-3xl font-semibold'>CSS</h3>
                <div className='flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8'>
                  <div className='badge'>ウェブサイト制作</div>
                  <div className='badge'>フロントエンド開発</div>
                </div>
                <p className='text-secondary'>TailwindCSS、Saasも使用可能です。UIを意識して作成します。</p>
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className='my-16'>
            <div className='w-full border border-purple-200 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer'>
              {/* 言語のロゴ */}
              <div className='mb-6 lg:mb-0 self-center'>
                <FontAwesomeIcon icon={faJs} className='text-9xl text-yellow-300' />
              </div>

              {/* スキルの説明 */}
              <div className='text-center flex flex-wrap justify-center lg:text-left lg:block'>
                <h3 className='text-3xl font-semibold'>JavaScript</h3>
                <div className='flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8'>
                  <div className='badge'>ウェブサイト制作</div>
                  <div className='badge'>フロントエンド開発</div>
                </div>
                <p className='text-secondary'>JavaScriptエンジニア。フレームワークも使用可能です。</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* お問い合わせ */}
      <div
        id='contact'
        className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'
      >
        <section className='w-full'>
          <h2 className='secondary-title'>お問い合わせ</h2>
          <p className='section-paragraph'>お問い合わせは以下のフォームからお願いいたします。</p>
          <div className='w-ful grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16'>
            <div>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>お名前</label>
                <input type='text' className='w-full border border-inputBorder bg-input px-4 py-4' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
