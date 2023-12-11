import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <div >

      <nav class="navbar navbar-expand-xl fixed-top">
        <div class="container-fluid ">
          <a class="navbar-brand ms-5 mt-3 myname" href="#"><span className='myname'>Satyashil</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse show " id="navbarBasic">
            <ul class="navbar-nav me-3 mb-2 mb-xl-0 ms-auto  p-2 text-center ">
              <li class="nav-item me-5  ">
                <a class=" nav-button" href="#">Home</a>
              </li>
              <li class="nav-item  me-5 ">
                <a class=" nav-button" href="#">About</a>
              </li>
              <li class="nav-item   me-5 ">
                <a class=" nav-button" href="#">Skills</a>
              </li>
              <li class="nav-item   me-5">
                <a class=" nav-button" href="#">Experience</a>
              </li>
              <li class="nav-item   me-5">
                <a class=" nav-button" href="#">Projects</a>
              </li>
              <li class="nav-item   me-5 ">
                <a class=" nav-button" href="#">Contact</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      <div className='section d-flex justify-content-around '>

        {/* <img className='hero' src="image/hero.jpg" alt='laptop'/> */}
        <div className='name me-5 d-flex flex-column align-items-center justify-content-center'>
          <div className='ms-3 '>
            <p className='hello'>Hello I'm</p>
            <h1 className='mynames'>Satyashil Magre</h1>
            <h2 className='job'>Frontend Developer</h2>
            <p className='gmail'>satyashilmagre@gmail.com</p>
            <p className='gmail'>+917499667341</p>
          </div>

        </div>
        <div className=' d-flex align-items-center'>
          <img className='meimage me-5  align-items-center' src='image/m.avif' />
        </div>


        {/* <img className='hero' src="image/section.jpg" alt='laptop'/> */}

      </div>

      <div className='sectiontwo '>

        <div className='d-flex justify-content-evenly flex-wrap'>
          <div>
            <img className='laptopimage' src='image/boys.png' />
          </div>
          <div className='aboutme'>
            <h2>About Me</h2>
            <p>Hello i Am Satyashil, Web developer and IT Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum</p>
          </div>


        </div>
        <div className='skill '>
          <p className='skills'>React</p>
          <p className='skills'>JavaScript</p>
          <p className='skills'>CSS</p>
          <p className='skills'>HTML</p>
          <p className='skills'>JQuery</p>
          <p className='skills'>GIT</p>
          <p className='skills'>Responsive/Mobile Design</p>
          <p className='skills'>WordPress</p>
          <p className='skills'>PHP</p>
          <p className='skills'>SQL</p>
          <p className='skills'>Bootstrap</p>
          <p className='skills'>Jira</p>
          <p className='skills'>Web Tools</p>
          <p className='skills'>SEO</p>
          <p className='skills'>FIGMA</p>
          <p className='skills'>TailwadCSS</p>
          <p className='skills'>Cross Browser Development</p>
          <p className='skills'>Testing And Debugging</p>
          <p className='skills'>Craetivity</p>
          <p className='skills'>Teamwork</p>
          <p className='skills'>Problem Solving</p>
          <p className='skills'>Angular</p>
          <p className='skills'>JSON</p>
          <p className='skills'>UI/UX</p>

        </div>
        <div className='d-flex justify-content-center mt-3'>
          <button className='dbutton'>Dowload CV</button>
        </div>

        <div>
          <div className='d-flex justify-content-center mt-5 mb-4 text-white'>
            <h4 className='ani' >What I Do</h4>
          </div>



          <div className='whatido'>

            <div className='what'>
              <h3>UI Design</h3>
              <p>2019-2023</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a gall
                scrambled it to make a type specimen book</p>
              <p>sssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            </div>

            <div className='what'>
              <h3>Web Development</h3>
              <p>2019-2023</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen </p>
            </div>

            <div className='what'>
              <h3>App Development</h3>
              <p>2019-2023</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                scrambled it to make a type specimen book</p>
            </div>

          </div>
         </div>

        <div className='sectionfour d-flex justify-content-evenly mt-5'>
          <div>
            <h5>Technical Skills</h5>
            <p>JavaScript</p>
            {/* <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
          </div>

          <div>
            <h5>Professional Skills</h5>
          </div>
        </div>


        <div className='d-flex justify-content-evenly flex-wrap'>
          <div className='mb-4' >
            <h3>Education</h3>
            <div className='education'>
              <h6>Bsc Computer Science in Shivchhatrapati Collage</h6>
              <p>2018-2021</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting indust</p>
            </div>

            <div className='education'>
              <h6>Bsc Computer Science in Shivchhatrapati Collage</h6>
              <p>2018-2021</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting indust</p>
            </div>

            <div className='education'>
              <h6>Bsc Computer Science in Shivchhatrapati Collage</h6>
              <p>2018-2021</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting indust</p>
            </div>
          </div>

          <div> 
            <h3>Skills</h3>
            <div className='education'>
              <h6>Bsc Computer Science in Shivchhatrapati Collage</h6>
              <p>2018-2021</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting indust</p>
            </div>

            <div className='education'>
              <h6>Bsc Computer Science in Shivchhatrapati Collage</h6>
              <p>2018-2021</p>
              <p>Lorem Ipsum is simply dummy text of the printing and</p>
            </div>

            <div className='education'>
              <h6>Bsc Computer Science in Shivchhatrapati Collage</h6>
              <p>2018-2021</p>
              <p>Lorem Ipsum is simply dummy tex</p>
            </div>
          </div>

        </div>


        <div className='sectionsix'>
          <h2 className='d-flex justify-content-center text-white mt-5 mb-4'>Contact Me</h2>
          <div className='d-flex '>
            <div className='w-75 ms-5 me-4 '>
              <div className='rounded-3 mb-3 me-3 p-3 text-white bg-dark'>
                <h6>Address</h6>
                <p>Plot No.11 Himayat Bagh, Aurangabad Maharastra</p>
              </div>
              <div className='rounded-3 mb-3 me-3 p-3 text-white bg-dark'>
                <h6>Email</h6>
                <p>satyashilmagre@gmail.com</p>
              </div>
              <div className='rounded-3 mb-3 me-3 p-3 text-white bg-dark'>
                <h6>Phone</h6>
                <p>+91 7499667341</p>
              </div>
            </div>

            <div class='d-flex flex-column w-100 me-5 '>
              <input className=' form-control mt-1 mb-3' type="text" placeholder="First Name" />
              <input className=' form-control mt-3 mb-3' type="text" placeholder="Last Name" />
              <textarea className='form-control mt-3 mb-3 ' typeof='text' placeholder='Your Message' />
              <button type="button" class="rounded-pill sendbtn">Send Message</button>
            </div>

          </div>

        </div>

      </div>

    </div>



  )
}

export default Home;