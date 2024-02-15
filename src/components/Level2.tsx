import { useNavigate } from 'react-router-dom'
import '../App.css'
import ExplanationCard from './ExplanationCard'
import lightBulbSvg from '../assets/lightBulb.svg'
import MainHeader from './MainHeader'
import { useEffect, useState } from 'react'

function Level2() {
  const navigate = useNavigate()

  const [meme, setMeme] = useState(null)
  const [trigger, setTrigger] = useState<boolean>(false)

  useEffect(() => {
    console.log('I got rendered')

    // Define the async function inside the effect
    const fetchMeme = async () => {
      try {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json'
          }
        })
        const data = await response.json()
        setMeme(data.joke)
      } catch (error) {
        console.error('Failed to fetch meme', error)
      }
    }

    fetchMeme()
  }, [trigger])

  return (
    <>
      <MainHeader />
      <button onClick={() => navigate(-1)} className="backButton">
        ← Back
      </button>
      {/* CARD1: Meant to showcase useEffect behaviour */}
      <div className="card">
        <ExplanationCard explanationCardSvg={lightBulbSvg} text="Dummy test" />
        <div>
          <button onClick={() => setTrigger(!trigger)}>Fetch Meme</button>
          {meme && <p>{meme}</p>}
        </div>
        <div>
          A link to the related official documentation can be found{' '}
          <a
            rel="stylesheet"
            href="https://react.dev/reference/react/useEffect"
          >
            here
          </a>
        </div>
        <p>Check the code in the project!</p>
      </div>
    </>
  )
}

// Example with a cleanup function
// useEffect(() => {
//   let isCancelled = false;

//   const fetchMeme = async () => {
//     try {
//       const response = await fetch('https://icanhazdadjoke.com/', {
//         headers: {
//           Accept: 'application/json'
//         }
//       });
//       if (!isCancelled) {
//         const data = await response.json();
//         setMeme(data.joke);
//       }
//     } catch (error) {
//       if (!isCancelled) {
//         console.error('Failed to fetch meme', error);
//       }
//     }
//   };

//   fetchMeme();

//   return () => {
//     isCancelled = true;
//   };
// }, [trigger]);

export default Level2
