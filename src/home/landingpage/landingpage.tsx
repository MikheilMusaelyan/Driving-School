import { useEffect, useRef } from 'react'
import './landingpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { toggleShowContact } from '../../features/messageSlice'

export default function Landingpage() {
    const imageRef = useRef(null)

    useEffect(() => {
        scrollAnim()
    }, [])

    function scrollAnim() {
        let scrollSpeed = -0.12
        window.addEventListener('scroll', () => {
          const scrollPos = window.scrollY * scrollSpeed;
          if(imageRef?.current){
            imageRef.current.style.transform = `translateY(${scrollPos}px)`;
          }
        });
    }

    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(toggleShowContact());
    };

  return (
    <>
        <main className="landing-page">
            <div className="bubble-wrap"></div>
            <div className="bubble right-bubble">
            </div>
            <div className="bubble left-bubble">
                <div className="bubble-before"></div>
            </div>
            <section className="l-text-wrap l-left">
                <div className="l-text">
                    <h1 className="l-h1" ref={imageRef}>
                        Auto School NYC
                    </h1>
                    <span className="l-span">
                        Licensed and certified instructors.
                        <br />
                        Individual approach to every student.
                    </span>
                </div>
            </section>
            <section className="l-text-wrap l-right" >
                {/* <div className="bubble right-bubble">
                    <div className="bubble-before"></div>
                </div> */}
                <div className="l-image-wrap">
                    <img className="l-image" src="/src/assets/car.png" />
                </div>
            </section>
        </main>
        <section className='second-page'>
                <h1 className='ttitle'>We Speak</h1>
                <ul className='ul-bullet-point'>
                    <li className='li-bullet-point'>
                        <div className='flag'>🇺🇸</div>
                        <span>English</span>
                    </li>
                    <li className='li-bullet-point'>
                        <div className='flag'>🇬🇪</div>
                        <span>Georgian</span>
                    </li>
                    <li className='li-bullet-point'>
                        <div className='flag'>🇷🇺</div>
                        <span>Russian</span>
                    </li>
                    <li className='li-bullet-point'>
                        <div className='flag'>🇪🇸</div>
                        <span>Spanish</span>
                    </li>
                </ul>
        </section>
        <section>
            <h1 className='ttitle'>Packages</h1>
            <div className="plan-wrap">
                <div className="plan">
                    <div 
                      className="top-info-wrap" 
                      style={{ backgroundImage: 'url(/src/assets/instructor2.jpg)' }}
                    >
                      <div className="top-info-before"></div>
                      <div className="top-info">
                        <h1 className="title">Road Test Preparation</h1>
                        <h2 className="course-price">
                          <span className="discount">$149</span>
                        </h2>
                        <div className="interact-wrap">
                          <button className="interact" onClick={handleClick}>
                            Get in Touch
                          </button>
                        </div>
                      </div>
                    </div>
                
                    <div className="stamp-wrap">
                      {[
                        'Scheduling Road Test',
                        'Car for Road Test',
                        '30 Minute Lesson Before the Test',
                      ].map((skill, index) => (
                        <span key={index} className="time-stamp">
                          <div className="title-wrap">
                            <FontAwesomeIcon 
                              className={skill === 'Certification of Completion' ? 'tickIcon orangetick' : 'tickIcon'}
                              icon={faCheckCircle} 
                            />
                            <span className="skill-name">{skill}</span>
                          </div>
                        </span>
                      ))}
                    </div>
                </div>
                <div className="plan">
                    <div 
                      className="top-info-wrap" 
                      style={{ backgroundImage: 'url(/src/assets/instructor1.jpg)' }}
                    >
                      <div className="top-info-before"></div>
                      <div className="top-info">
                        <h1 className="title">One Full Hour Lesson</h1>
                        <h2 className="course-price">
                          <span className="discount">$49</span>
                        </h2>
                        <div className="interact-wrap">
                          <button className="interact" onClick={handleClick}>
                            Get in Touch
                          </button>
                        </div>
                      </div>
                    </div>
                
                    <div className="stamp-wrap">
                      {[
                        'First Step',
                        '2nd Step',
                        '3rd Step',
                      ].map((skill, index) => (
                        <span key={index} className="time-stamp">
                          <div className="title-wrap">
                            <FontAwesomeIcon 
                              className={skill === 'Certification of Completion' ? 'tickIcon orangetick' : 'tickIcon'}
                              icon={faCheckCircle} 
                            />
                            <span className="skill-name">{skill}</span>
                          </div>
                        </span>
                      ))}
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <ul className="opening-hours-wrap">
                <li className="opening-hours opening-hours-text"><h4>Working Hours</h4></li>
                <li className="opening-hours">Sat - Mon ... 08:30 AM - 8:00 PM</li>
                <li className="opening-hours">Tues - Thu ... 9:00 AM - 7:30 PM</li>
                <li className="opening-hours">Friday ... 8:30 AM - 4:30 PM</li>
            </ul>
        </footer>
    </>
  )
}
