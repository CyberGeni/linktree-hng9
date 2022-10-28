import './App.css'
import profileImg from './assets/profile-img.png'
import slackIcon from './assets/slack-icon.svg'
import githubIcon from './assets/github-icon.svg'
import zuriLogo from './assets/zuri-logo.svg'
import i4gLogo from './assets/i4g-logo.svg'

function App() {

  return (
    <div className="px-6">
      <header className="w-full">
        <img className="w-28 rounded-full mx-auto my-8" src={profileImg} alt="" id="profile__img" />
        <h1 className="text-center font-bold text-2xl my-4">Treasure Ajefu</h1>
        <p className="flex">
          <a href="https://twitter.com/cybergenie_" id="twitter" className="text-center bg-gray-200 text-gray-900 rounded py-5 mb-3 w-full">Twitter</a>
        </p>
        <p id="slack" className="hidden">cybergenie</p>
      </header>
      <main>
        <section className="flex flex-col space-y-3">
          <a href="https://training.zuri.team" id="btn__zuri" className="text-center bg-gray-200 text-gray-900 rounded py-5">Zuri Team</a>
          <a href="http://books.zuri.team" id="books" className="text-center bg-gray-200 text-gray-900 rounded py-5">Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=cybergenie" id="book__python" className="text-center bg-gray-200 text-gray-900 rounded py-5">Python Books</a>
          <a href="https://background.zuri.team" id="pitch" className="text-center bg-gray-200 text-gray-900 rounded py-5">Background Check for Coders</a>
          <a href="htttps://books.zuri.team/design-rules" id="book__design" className="text-center bg-gray-200 text-gray-900 rounded py-5">Design Books</a>
        </section>
        <section>
          <img src={slackIcon} alt="" />
          <img src={githubIcon} alt="" />
        </section>
      </main>
      <footer>
        <img src="" alt="" />
        <span>HNG Internship 9 Frontend Task</span>
        <img src="" alt="" />
      </footer>
    </div>
  )
}

export default App
