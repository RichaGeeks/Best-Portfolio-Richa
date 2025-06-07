import ModelViewer from './model';
import Quotes from './quotes';
const Home = () => (
  <div className="flex h-screen w-screen overflow-hidden">
    {/* 3D Background and Main Content */}
    <div className="relative flex-1">
      {/* 3D model background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ModelViewer />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-white p-0">
        <Quotes />
        <div className="flex justify-end pr-8">
          <div>
            <h1 className="flex justify-end text-[#111112] text-[12vw] font-custom mb-0 leading-none">RICHAS</h1>
            <h1 className="text-[12vw] text-[#111112] font-custom mb-4 leading-none">PORTFOLIO</h1>
          </div>
        </div>
        <p className="text-lg font-custom">Your website content goes here on top of the 3D model.</p>
      </div>
    </div>
  </div>
);

export default Home;