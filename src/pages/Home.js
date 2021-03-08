import getHash from "../utils/getHash";

const Home = () => {
    const id = getHash();
    const view = `
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./src/styles/mobile.css">
    <title>Clientes</title>
    </head>
    <body>
    <header>
    <div class="header__background-image"></div>
    <section class="header__first-section">
        <figure class="header__first-section--logo">
            <img src="./src/assets/HermesBikeWhite.svg" alt="Logo Hermes">
        </figure>
        <input id="burger" type="checkbox" />
        <label for="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>    
          <ul>
            <li>
                <figure>
                    <img src="./src/assets/HERMESblanco 2.svg" alt="Logo de bici mensajeria hermes">
                </figure>
            </li>
            <li><a href="#/about/">¿Quienes somos?</a></li>
            <li><a href="#/clientes/">Clientes</a></li>
            <li><a href="#/empresas/">Empresas</a></li>
            <li><a href="#/cotizador">Costiza ahora</a></li>
          </ul>  
        </nav>
    </section>
    <section class="header__second-section">
        <span>Servicio de logística de entregas punto a punto, rápido y seguro</span>
    </section>
</header>
<main>
    <section class="main__info-section">
        <div class="main__info-section--features">
            <figure>
                <img src="./src/assets/ImageFeatures1.svg" alt="Bicicleta animada">
            </figure>
            <span><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i></span>
        </div>
        <div class="main__info-section--features">
            <figure>
                <img src="./src/assets/ImageFeatures2.svg" alt="Bicicleta animada">
            </figure>
            <span><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i></span>
        </div>
        <div class="main__info-section--features">
            <figure>
                <img src="./src/assets/ImageFeatures3.svg" alt="Bicicleta animada">
            </figure>
            <span><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i></span>
        </div>
        <div class="main__info-section--features">
            <figure>
                <img src="./src/assets/ImageFeatures4.svg" alt="Bicicleta animada">
            </figure>
            <span><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i></span>
        </div>
    </section>
    <section class="carousel">
        <div class="carousel-inner">
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
            <div class="carousel-item">
                <div class="main__about-section--info">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit</span>
                </div>
            </div>
            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
            <div class="carousel-item">
                <div class="main__about-section--info">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit</span>
                </div>
            </div>
            <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
            <div class="carousel-item">
                <div class="main__about-section--info">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit</span>
                </div>
            </div>
            <label for="carousel-3" class="carousel-control prev control-1">‹</label>
            <label for="carousel-2" class="carousel-control next control-1">›</label>
            <label for="carousel-1" class="carousel-control prev control-2">‹</label>
            <label for="carousel-3" class="carousel-control next control-2">›</label>
            <label for="carousel-2" class="carousel-control prev control-3">‹</label>
            <label for="carousel-1" class="carousel-control next control-3">›</label>
            <ol class="carousel-indicators">
                <li>
                    <label for="carousel-1" class="carousel-bullet">•</label>
                </li>
                <li>
                    <label for="carousel-2" class="carousel-bullet">•</label>
                </li>
                <li>
                    <label for="carousel-3" class="carousel-bullet">•</label>
                </li>
            </ol>
        </div>
    </section>
    <section class="main__features-section">
        <h2>Precios</h2>
        <div class="main__features-section--fee-card">
            <div class="top-feecard">
                <span>Zona A</span>
                <div>
                    <span class="money"></span>
                    <p>90.00</p>
                </div>
            </div>
            <figure>
                <img src="./src/assets/FeeMap.jpg" alt="Mapa con la zona A marcada">
            </figure>
            <div class="middle-feecard">
                <span class="time"></span>
                <span>Tiempo real</span>
            </div>
            <p class="description">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            <a href="#contact">
                <div class="button">
                    <span>Cotizar</span>
                </div>
            </a>
        </div>
    </section>
    <section class="class-contact-section" id="contact">
        <p>Nosotros te contactamos</p>
        <form action="">
            <label for="fname">Primer Nombre:</label><br>
            <input type="text" id="fname" name="fname"><br>
            <br>
            <label for="lname">Primer Apellido:</label><br>
            <input type="text" id="lname" name="lname"><br>
            <br>
            <label for="lname">Correo:</label><br>
            <input type="email" id="lname" name="lname">
        </form>
    </section>
</main>
<footer>
    <span></span>
    <p>¿Tienes dudas? </p>
    <a href="#">Visita nuestra sección de preguntas frecuentes</a>
    <p>Medios de Contacto</p>
    <ul class="class-icon-section">
        <li>
            <a href="https://wa.me/message/G5DKUAEBTGFUI1">
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9201 2C10.7922 2 1.75366 11.0386 1.75366 22.1664C1.75366 25.7421 2.73321 29.0815 4.37036 31.9927L1.78791 41.2197C1.70229 41.5211 1.78449 41.843 2.00026 42.0656C2.21946 42.2917 2.53799 42.3807 2.84281 42.3054L12.4602 39.9216C15.2858 41.432 18.4951 42.3328 21.9201 42.3328C33.0479 42.3328 42.0865 33.2942 42.0865 22.1664C42.0865 11.0386 33.0479 2 21.9201 2ZM21.9201 3.7536C32.0992 3.7536 40.3329 11.9873 40.3329 22.1664C40.3329 32.3455 32.0992 40.5792 21.9201 40.5792C18.656 40.5792 15.6009 39.7298 12.9431 38.2399C12.7479 38.1337 12.5219 38.1029 12.3027 38.1543L3.88059 40.2435L6.13766 32.1845C6.20616 31.955 6.17191 31.7084 6.05204 31.4995C4.43886 28.7629 3.50726 25.5777 3.50726 22.1664C3.50726 11.9873 11.741 3.7536 21.9201 3.7536ZM14.594 11.6448C14.0289 11.6448 13.2274 11.8537 12.5698 12.5661C12.1725 12.9908 10.5217 14.6006 10.5217 17.4262C10.5217 20.3751 12.5664 22.9165 12.813 23.2453H12.8164C12.7924 23.2144 13.1281 23.7042 13.5802 24.2899C14.0289 24.8721 14.6591 25.6428 15.4502 26.475C17.0292 28.1396 19.252 30.0644 22.0125 31.2426C23.2832 31.7804 24.2867 32.1092 25.0471 32.3489C26.4513 32.7907 27.7357 32.7222 28.6981 32.5818C29.4174 32.4756 30.212 32.1263 30.9963 31.6297C31.7806 31.1365 32.5513 30.5165 32.8903 29.5815C33.1301 28.9068 33.2534 28.2869 33.3013 27.7765C33.3219 27.5197 33.3253 27.2936 33.3082 27.0847C33.2911 26.8758 33.3082 26.7148 33.1164 26.3963C32.7054 25.725 32.243 25.7078 31.7635 25.4715C31.4929 25.3379 30.7292 24.9646 29.9654 24.6016C29.2016 24.2351 28.5406 23.9131 28.133 23.7693C27.8727 23.6734 27.5576 23.5398 27.1055 23.5946C26.6534 23.646 26.2047 23.9714 25.9444 24.3584C25.6944 24.7249 24.7012 25.8996 24.3963 26.2456C24.3929 26.2421 24.4203 26.2558 24.3004 26.1976C23.9237 26.0092 23.4647 25.8517 22.7866 25.4921C22.105 25.1359 21.2556 24.605 20.3274 23.7864V23.783C18.9403 22.5671 17.971 21.0361 17.6662 20.5224C17.6868 20.4984 17.6628 20.5292 17.7073 20.4847L17.7107 20.4813C18.0224 20.1765 18.2998 19.8066 18.5327 19.536C18.865 19.1558 19.0122 18.8167 19.1698 18.5016C19.4849 17.8749 19.3102 17.1864 19.1287 16.82C19.139 16.8439 19.0294 16.5973 18.9095 16.3131C18.7862 16.0288 18.6321 15.6589 18.4711 15.265C18.1423 14.4807 17.7758 13.597 17.5566 13.0764C17.2997 12.4668 16.9538 12.0284 16.4983 11.816C16.0428 11.6037 15.642 11.6653 15.6283 11.6619H15.6249C15.2995 11.6482 14.9468 11.6448 14.594 11.6448ZM14.594 13.3984C14.9296 13.3984 15.2653 13.4018 15.5427 13.4155C15.8304 13.4292 15.8133 13.4326 15.7585 13.4052C15.7003 13.3778 15.7756 13.371 15.94 13.758C16.1524 14.2649 16.5223 15.152 16.8511 15.9432C17.0155 16.337 17.1696 16.7069 17.2929 16.9981C17.4162 17.2892 17.4813 17.4502 17.56 17.6077L17.5635 17.6111C17.6388 17.7584 17.632 17.6625 17.6046 17.7173C17.4196 18.0838 17.3956 18.1728 17.2073 18.3886C16.923 18.7174 16.6319 19.0839 16.4777 19.2346C16.3442 19.3682 16.101 19.5737 15.9503 19.9778C15.7962 20.3785 15.8681 20.9334 16.1113 21.3478C16.4366 21.8992 17.5052 23.6391 19.1664 25.1016C20.2144 26.0229 21.1871 26.636 21.9646 27.047C22.7455 27.4546 23.3791 27.6943 23.5195 27.7663C23.8586 27.9341 24.2251 28.0642 24.6532 28.0129C25.0848 27.9581 25.4512 27.7012 25.6876 27.434C26.0027 27.0778 26.9308 26.0161 27.3761 25.3619C27.3966 25.3688 27.3898 25.3619 27.5371 25.4167V25.4201H27.5405C27.609 25.4441 28.455 25.8209 29.2119 26.1839C29.9688 26.5435 30.736 26.9169 30.9826 27.0402C31.3457 27.2183 31.5135 27.3347 31.558 27.3347C31.5614 27.4135 31.5649 27.4957 31.5512 27.6224C31.5238 27.9752 31.4279 28.4615 31.2395 28.9856C31.147 29.239 30.6675 29.7665 30.0579 30.1501C29.4516 30.5337 28.7153 30.8042 28.4413 30.8453C27.6193 30.9652 26.6431 31.0097 25.5711 30.6741C24.8279 30.4412 23.8997 30.1398 22.701 29.6295C20.2658 28.5883 18.1971 26.8244 16.7209 25.2694C15.9811 24.4886 15.3886 23.7659 14.9673 23.2179C14.5495 22.6699 14.3645 22.3856 14.2104 22.1869V22.1835C13.9398 21.8239 12.2753 19.512 12.2753 17.4262C12.2753 15.2205 13.2993 14.354 13.8542 13.758C14.1453 13.4429 14.4638 13.3984 14.5906 13.3984H14.594Z" fill="#EB2629"/>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/BicimensajeriaHermes">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.89138 3.50723C5.48015 3.50723 3.50732 5.48006 3.50732 7.89129V35.9493C3.50732 38.3605 5.48015 40.3333 7.89138 40.3333H22.6499C22.7458 40.3504 22.8417 40.3504 22.9376 40.3333H27.9108C28.0067 40.3504 28.1026 40.3504 28.1985 40.3333H35.9494C38.3606 40.3333 40.3334 38.3605 40.3334 35.9493V7.89129C40.3334 5.48006 38.3606 3.50723 35.9494 3.50723H7.89138ZM7.89138 5.26086H35.9494C37.4118 5.26086 38.5798 6.4288 38.5798 7.89129V35.9493C38.5798 37.4118 37.4118 38.5797 35.9494 38.5797H28.9349V26.3043H32.2846L33.5141 20.1667H28.9349V18.413C28.9349 17.9232 28.9828 17.8856 29.1438 17.7794C29.3082 17.6732 29.8151 17.5362 30.6885 17.5362H33.3189V12.6007L32.8189 12.361C32.8189 12.361 30.8049 11.3985 28.0581 11.3985C26.0852 11.3985 24.4652 12.1829 23.4274 13.481C22.3896 14.7791 21.9204 16.5121 21.9204 18.413V20.1667H19.2899V26.3043H21.9204V38.5797H7.89138C6.42889 38.5797 5.26095 37.4118 5.26095 35.9493V7.89129C5.26095 6.4288 6.42889 5.26086 7.89138 5.26086ZM28.0581 13.1522C29.8802 13.1522 31.0276 13.5529 31.5653 13.7652V15.7826H30.6885C29.6781 15.7826 28.8698 15.8648 28.1916 16.3066C27.51 16.7519 27.1812 17.591 27.1812 18.413V21.9203H31.3701L30.846 24.5507H27.1812V38.5797H23.674V24.5507H21.0436V21.9203H23.674V18.413C23.674 16.8067 24.0816 15.4709 24.7974 14.577C25.5132 13.683 26.5236 13.1522 28.0581 13.1522Z" fill="#EB2629"/>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/BiciHermes">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M30.083 4.79507C24.8392 4.79507 20.575 9.05926 20.575 14.303C20.575 14.6181 20.6538 14.9264 20.6846 15.2346C14.201 14.6147 8.46751 11.491 4.57324 6.7131C4.39171 6.48362 4.11085 6.36032 3.8163 6.38087C3.52517 6.40142 3.26487 6.56925 3.12102 6.8227C2.30243 8.2304 1.8332 9.85044 1.8332 11.5904C1.8332 13.6968 2.58671 15.6251 3.75122 17.2074C3.52517 17.1081 3.27857 17.0533 3.06622 16.9334C2.79564 16.7896 2.47026 16.7964 2.20653 16.954C1.9428 17.1115 1.78182 17.3958 1.7784 17.7006V17.8102C1.7784 21.0401 3.44982 23.8452 5.91585 25.5646C5.88845 25.5611 5.86105 25.5714 5.83365 25.5646C5.53225 25.5132 5.22742 25.6194 5.02534 25.8488C4.82326 26.0783 4.75819 26.3968 4.84724 26.688C5.8268 29.7328 8.32708 32.0584 11.4233 32.9078C8.95729 34.3738 6.09738 35.2369 3.01141 35.2369C2.34353 35.2369 1.70305 35.2026 1.06599 35.1273C0.654984 35.0725 0.261103 35.3122 0.124102 35.7027C-0.0163253 36.0931 0.137802 36.5281 0.490581 36.7439C4.44651 39.2819 9.14225 40.7718 14.1908 40.7718C22.3732 40.7718 28.7917 37.3536 33.097 32.4694C37.4023 27.5853 39.6457 21.2421 39.6457 15.3168C39.6457 15.0668 39.6251 14.8236 39.6183 14.577C41.2246 13.3474 42.6597 11.9055 43.7831 10.2203C44.0058 9.89497 43.9818 9.45999 43.7249 9.15858C43.4715 8.85718 43.0433 8.7647 42.6871 8.93253C42.235 9.13461 41.7076 9.15516 41.2349 9.31613C41.8583 8.48385 42.3926 7.58649 42.7145 6.5761C42.8241 6.23017 42.7043 5.84999 42.42 5.62394C42.1357 5.40131 41.7384 5.37391 41.4267 5.56228C39.93 6.44937 38.2723 7.07273 36.5221 7.45291C34.8232 5.86369 32.5867 4.79507 30.083 4.79507ZM30.083 6.5487C32.3195 6.5487 34.3403 7.50429 35.7548 9.01473C35.9672 9.23393 36.2789 9.32641 36.5769 9.26133C37.7208 9.03528 38.8066 8.70305 39.8649 8.27492C39.2552 9.09693 38.5017 9.79907 37.6181 10.3299C37.2173 10.5252 37.029 10.9876 37.1762 11.4088C37.3201 11.8267 37.7585 12.0699 38.1935 11.974C39.0703 11.8678 39.8512 11.5116 40.6869 11.289C39.9368 12.1007 39.1148 12.8337 38.2209 13.481C37.9777 13.6591 37.8441 13.9468 37.8647 14.2482C37.8784 14.6044 37.8921 14.9572 37.8921 15.3168C37.8921 20.7969 35.7891 26.7462 31.7818 31.2912C27.7745 35.8363 21.8903 39.0181 14.1908 39.0181C10.6938 39.0181 7.39205 38.2441 4.40883 36.8809C8.10788 36.5966 11.5192 35.2883 14.273 33.1271C14.5607 32.8976 14.6737 32.514 14.5572 32.1646C14.4408 31.8153 14.1188 31.5755 13.7524 31.5652C10.8616 31.5139 8.44011 29.8322 7.14887 27.4552C7.19682 27.4552 7.23792 27.4552 7.28587 27.4552C8.15241 27.4552 9.00867 27.3456 9.8067 27.1264C10.1903 27.0133 10.454 26.6571 10.4403 26.2564C10.4266 25.8557 10.1424 25.5132 9.7519 25.4275C6.63169 24.7973 4.29238 22.256 3.75122 19.0981C4.63489 19.4029 5.5391 19.6426 6.51866 19.6735C6.91939 19.6974 7.28244 19.4474 7.40575 19.0672C7.52905 18.6871 7.37835 18.2692 7.03927 18.0569C4.95684 16.6629 3.58682 14.2893 3.58682 11.5904C3.58682 10.5903 3.84713 9.67234 4.18963 8.79553C8.57369 13.6077 14.7114 16.8033 21.6437 17.1526C21.9177 17.1663 22.1848 17.0533 22.3629 16.8444C22.541 16.632 22.6095 16.3512 22.5479 16.084C22.4143 15.5155 22.3287 14.9127 22.3287 14.303C22.3287 10.008 25.788 6.5487 30.083 6.5487Z" fill="#EB2629"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="43.8406" height="43.8406" fill="white" transform="translate(0.0795898)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/hermes_bicimensajeria/">
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0289 2.87683C7.74396 2.87683 2.63037 7.99042 2.63037 14.2754V30.058C2.63037 36.3429 7.74396 41.4565 14.0289 41.4565H29.8115C36.0965 41.4565 41.2101 36.3429 41.2101 30.058V14.2754C41.2101 7.99042 36.0965 2.87683 29.8115 2.87683H14.0289ZM14.0289 4.63045H29.8115C35.1478 4.63045 39.4565 8.93916 39.4565 14.2754V30.058C39.4565 35.3942 35.1478 39.7029 29.8115 39.7029H14.0289C8.6927 39.7029 4.38399 35.3942 4.38399 30.058V14.2754C4.38399 8.93916 8.6927 4.63045 14.0289 4.63045ZM32.442 9.89132C31.4727 9.89132 30.6883 10.6757 30.6883 11.6449C30.6883 12.6142 31.4727 13.3986 32.442 13.3986C33.4113 13.3986 34.1956 12.6142 34.1956 11.6449C34.1956 10.6757 33.4113 9.89132 32.442 9.89132ZM21.9202 12.5218C16.6046 12.5218 12.2753 16.851 12.2753 22.1667C12.2753 27.4824 16.6046 31.8116 21.9202 31.8116C27.2359 31.8116 31.5652 27.4824 31.5652 22.1667C31.5652 16.851 27.2359 12.5218 21.9202 12.5218ZM21.9202 14.2754C26.2872 14.2754 29.8115 17.7998 29.8115 22.1667C29.8115 26.5336 26.2872 30.058 21.9202 30.058C17.5533 30.058 14.0289 26.5336 14.0289 22.1667C14.0289 17.7998 17.5533 14.2754 21.9202 14.2754Z" fill="#EB2629"/>
                </svg>
            </a>
        </li>
    </ul>
</footer>
</body>
    `;
    return view;
};

export default Home;