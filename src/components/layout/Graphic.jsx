import React from 'react'

export default function Graphic() {
  return (
      <div id="plate-graphic">

          <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + 'fork-plate-knife/loading-bar.css'} />
          <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + 'fork-plate-knife/plate-style.css'} />
          <script type="text/javascript" src={process.env.PUBLIC_URL + 'fork-plate-knife/loading-bar.js'}> </script>

          <div id="fork-plate-knife" >
              <img src={process.env.PUBLIC_URL + 'fork-plate-knife/fork-plate-knife.svg'} />   
          </div>

            <div id="progress-plate"
              class="ldBar"
              data-value="66"
              data-preset="circle"
              data-type="stroke"
              data-stroke-width="55"

            ></div>
          
        </div>  
  )
}
