import './styles.css'

function App() {

  return (
    <div className='container'>
      <div className="header">
        <img src="/maia.png" alt="" />
      </div>
      <h1>THE FUTURE IS WAITING FOR YOU!</h1>
      <div className="maia">
        <div className="maia_texto">
          <h2>MAIA</h2>
          <h3>MOBILITY APPLIED AND ARTIFICIAL INTELLIGENCE</h3>
          <p>
            The MAIA team, which stands for Mobility Applied in Artificial Intelligence, has as its primary mission to provide a valuable opportunity for students who want to improve their skills and knowledge in artificial intelligence and apply them to practical projects.
            Our team is dedicated to creating a learning and collaborative environment where students interested in robotics and AI can not only expand their theoretical knowledge, but also put it into practice by carrying out concrete projects. We believe that practical application plays a key role in developing solid AI and engineering skills.
          </p>
          <p>
            We offer challenges where participants can get involved in projects that address real-world challenges, allowing them to apply AI algorithms, data analysis and machine learning techniques to everyday situations. This not only enriches the learning experience, but also prepares our members to face the challenges of industry and AI research with confidence.
          </p>
        </div>
        <div className="maia_world">
          <h2>FUTURE IS IN YOUR HAND</h2>
          <img src="/hand-planet.png" alt="" />
        </div>
      </div>

      <div className="category">
        <div className="team">
          <p>Inmoov</p>
          <img src="/inmoov.png" alt="" />
        </div>
        <div className="team">
          <p>Donkey Car</p>
          <img src="/donkey-car.png" alt="" />
        </div>
        <div className="team">
          <p>Eletric Scooter</p>
          <img src="/eletric-scooter.png" alt="" />
        </div>
      </div>
      <div className="end">
        <img src="/maia-pictures.png" alt="" />
        <div className="opportunity">
          <h2>SELECTIVE PROCESS</h2>
          <p>
            The team is looking for people who are willing to learn, committed to the team and the projects, and who are enthusiastic about developing skills in different types of technologies and engineering areas.
          </p>
          <h2>ARTICLE</h2>
          <p>
            The article about artificial intelligence is optional.

            If you are willing to write this article, we offer a little help. Down here we have some links with concepts and examples about artificial intelligence, and these links can be useful to the writing process.
          </p>
        </div>
      </div>
      <div className="links">
        <a href="https://firstlinesoftware.com/blog/fundamentals-of-ai-how-do-we-teach-machines-to-act-like-humans/" className="fundamentals" target="_blank" rel="noopener noreferrer">
          <div className="img-gradient">
            <img src="/humam-robot.png" alt="" />
          </div>
          <p>FUNDAMETALS OF AI</p>
        </a>

        <a href="https://www.bbc.com/future/article/20211126-how-driverless-cars-will-change-our-world" className="driver" target="_blank" rel="noopener noreferrer">
          <div className="img-gradient">
            <img src="/carro-diferenciado.png" alt="" />
          </div>
          <p>DRIVERLESS CAR</p>
        </a>

        <a href="https://www.youtube.com/watch?v=ad79nYk2keg" className="ai" target="_blank" rel="noopener noreferrer">
          <div className="img-gradient">
            <img src="/brain.png" alt="" />
          </div>
          <p>WHAT IS ARTIFICIAL INTELLIGENCE</p>
        </a>

        <a href="https://www.youtube.com/user/BostonDynamics" className="boston" target="_blank" rel="noopener noreferrer">
          <div className="img-gradient">
            <img src="/robot-dog.png" alt="" />
          </div>
          <p>BOSTON DYNAMICS</p>
        </a>

      </div>
    </div>
  )
}

export default App
