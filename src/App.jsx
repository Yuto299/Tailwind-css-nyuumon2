import './App.css';

export default function App() {
  return (
    // ナビゲーションバー
    <header className='py-6'>
      <div className='container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full'>
        <div>Yut.com</div>
        <div>
          <a href='#home'>ホーム</a>
          <a href='#portfolio'>ポートフォリオ</a>
          <a href='#clients'>お客様</a>
          <a href='#contact'>
            <button>お問い合わせ</button>
          </a>
        </div>
      </div>
    </header>
  );
}
