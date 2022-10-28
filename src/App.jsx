import './App.css'
import profileImg from './assets/profile-img.png'
import slackIcon from './assets/slack-icon.svg'
import githubIcon from './assets/github-icon.svg'
import zuriLogo from './assets/zuri-logo.svg'
import i4gLogo from './assets/i4g-logo.svg'

function App() {

  return (
    <div className="px-6 max-w-2xl md:max-w-3xl mx-auto">
      <header className="w-full">
        <img className="w-28 rounded-full mx-auto my-8" src={profileImg} alt="" id="profile__img" />
        <h1 className="text-center font-bold text-2xl my-4">Treasure Ajefu</h1>
        <p className="flex px-4">
          <a href="https://twitter.com/cybergenie_" id="twitter" className="text-center bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 rounded py-5 mb-3 w-full">Twitter</a>
        </p>
        <p id="slack" className="hidden">cybergenie</p>
      </header>
      <main className="px-4">
        <section className="flex flex-col space-y-3">
          <a href="https://training.zuri.team" id="btn__zuri" className="text-center bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 rounded py-5">Zuri Team</a>
          <a href="http://books.zuri.team" id="books" className="text-center bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 rounded py-5">Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=cybergenie" id="book__python" className="text-center bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 rounded py-5">Python Books</a>
          <a href="https://background.zuri.team" id="pitch" className="text-center bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 rounded py-5">Background Check for Coders</a>
          <a href="htttps://books.zuri.team/design-rules" id="book__design" className="text-center bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 rounded py-5">Design Books</a>
        </section>
        <section className="flex justify-center space-x-3 my-6">
          <img src={slackIcon} alt="" />
          <img src={githubIcon} alt="" />
        </section>
      </main>
      <footer className="space-y-5 md:space-y-0 border-t py-6 mb-6 md:flex md:items-center md:justify-between">
        <img src={zuriLogo} alt="" />
        <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
        <img src={i4gLogo} alt="" />
      </footer>
    </div>
  )
}

export default App
