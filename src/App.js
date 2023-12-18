import { useState } from 'react';
import navijson from './data/gnb.json';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [tabvar, settab] = useState(0)
  
  const myfun = (v) => {
    alert(v)
  }
  return (
    <div>
      <ul className='d-flex'>
        {
          navijson.map((v,idx) => {
            return ( //변수는 꼭 괄호껴야함
              <>
                <li onClick={function () { settab(idx) }}>{v.name}</li>
                {tabvar === idx && <div>  {/* 전부 참이여야만 나옴. fauls인 경우 그냥 멈춰버림. */}
                  {idx}
                </div>
                }
              </>
            )
          })
        }
      </ul>
      <div className='border py-5 bg-dark text-white'>
        {
          navijson[tabvar] && <p>
            <img src={navijson[tabvar].src} alt={navijson[tabvar].alt}></img>
            <strong>{navijson[tabvar].name}</strong>
          </p>

        }
      </div>
    </div>
  );
}

export default App;
