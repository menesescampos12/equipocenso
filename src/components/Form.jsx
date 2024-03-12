"use client";
import { supabaseClient } from "app/database/supabase";
import React, { useEffect, useState } from "react";

const Form = () => {
  /* Vamos a manejar las variables de nuestro formulario */
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [curp, setCurp] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState([]);
  const [addressPerson, setAddressPerson] = useState("");

  /* Creamos funcion para mandar datos del formulario */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabaseClient.from("usuarios").insert([
      {
        name: name,
        last_name: last_name,
        curp: curp,
        phone_number: phone_number,
        email: email,
        birthdate: birthdate,
        sex: sex,
        address: addressPerson,
      },
    ]);

    console.log(data);
  };

  useEffect(() => {
    const fetchAddress = async () => {
      const { data, error } = await supabaseClient.from("colonias").select("*");
      setAddress(data);
    };

    fetchAddress();
  }, []);


  return (
    <>
    
    <nav class="nav nav-pills nav-fill">
  <a class="nav-item nav-link active" href="/registers">Menú</a>
  <a class="nav-item nav-link" href="/registers">Inicio</a>
  <a class="nav-item nav-link" href="/registers">Damnificados</a>
  <a class="nav-item nav-link disabled" href="/registers">Página</a>
</nav>
   

    <h1> Secretaria de Bienestar</h1>
     
     

    <section id="sobremi">
    <div class="contenedor-foto">
        <img src="images/sobre.jpeg" alt="dacnificados traes el paso de huracan otis" />
    </div>
    <div class="sobremi">
        <p class="titulo-seccion">Esta página es parte del Gobierno de México</p>
        <h3>La Secretaría de Bienestar</h3>
        <p>Consulta la información sobre los pagos y censos</p>
        <div id="kiko-slider">

        <div className="slider">
    <ul>
        <li>
        <img src="images/images4.jpeg" alt="mejor productos" />
        </li>
        <li>
        <img src="images/images6.jpeg" alt="mejor productos" />
        </li>
        <li>
        <img src="images/images7.jpeg" alt="mejor productos" />
        </li>
    </ul>
</div>
</div>
        <p>Protección de Datos Personales Contiene datos personales concernientes.</p>
    </div>
</section>



    

    <div id="kiko-slider">

<ul class="slider">
    <li id="slide1">
        <h1>Bienestar gob.mx</h1>
        <img src="images/logo.jpg" alt="mejor productos" />
    </li>
    <li id="slide2">
    <img src="images/1.jpeg" alt="mejor productos" />
    <img src="images/images4.jpeg" alt="mejor productos" />
    </li>
    <li id="slide3">
        <h1>Ayuda a la reconstruccion de viviendas en Acapulco</h1>
        <p>Esta es una pagina de bienestar . gobmx</p>
        <a href="https://www.gob.mx/bienestar" target="_blank">¡Corre a mi web para más contenido!</a>
    </li>
</ul>
</div>
<ul class="menu">
    <li>
        <a href="#slide1">1</a>
    </li>
    <li>
        <a href="#slide2">2</a>
    </li>
    <li>
        <a href="#slide3">3</a>
    </li>
</ul>


     
    <section className="container top-products">
  <h1 className="heading-1">Acapulco  Huracán Otis</h1>
  <div className="container-options">
    <span className="active">Pagos</span>
    <span>Resagados</span>
    <span>Censos</span>
  </div>
  <div className="container-products">
    <div className="card-product">
      <div className="container-img">
        <img src="images/pagos1.jpeg" alt="mejor productos" />
        <span className="discount" />
        <div className="button-group">
          <span>
            <i className="fa-regular fa-eye" />
          </span>
          <span>
            <i className="fa-regular fa-heart" />
          </span>
          <span>
            <i className="fa-solid fa-code-compare" />
          </span>
        </div>
      </div>
      <div className="content-card-product">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <h3>Calendario de pago</h3>
        <span className="add-cart">
          <i className="fa-solid fa-basket-shopping" />
        </span>
        <p className="price">Inicio de pago</p>
      </div>
    </div>
    <div className="card-product">
      <div className="container-img">
        <img src="images/despensa1.jpeg" alt="inician los apoyos" />
        <span className="discount" />
        <div className="button-group">
          <span>
            <i className="fa-regular fa-eye" />
          </span>
          <span>
            <i className="fa-regular fa-heart" />
          </span>
          <span>
            <i className="fa-solid fa-code-compare" />
          </span>
        </div>
      </div>
      <div className="content-card-product">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <h3>Despensas</h3>
        <span className="add-cart">
          <i className="fa-solid fa-basket-shopping" />
        </span>
        <p className="price">Apoyos por parte de la Marina</p>
      </div>
    </div>
    <div className="card-product">
      <div className="container-img">
        <img src="images/despensa2.jpeg" alt="apoyos" />
        <div className="button-group">
          <span>
            <i className="fa-regular fa-eye" />
          </span>
          <span>
            <i className="fa-regular fa-heart" />
          </span>
          <span>
            <i className="fa-solid fa-code-compare" />
          </span>
        </div>
      </div>
      <div className="content-card-product">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
        <h3>Entrega de apoyos</h3>
        <span className="add-cart">
          <i className="fa-solid fa-basket-shopping" />
        </span>
        <p className="price">Dspensas y aguas embotelladas</p>
      </div>
    </div>
    <div className="card-product">
      <div className="container-img">
        <img src="images/despensa3.jpeg" alt="canastas basicas" />
        <div className="button-group">
          <span>
            <i className="fa-regular fa-eye" />
          </span>
          <span>
            <i className="fa-regular fa-heart" />
          </span>
          <span>
            <i className="fa-solid fa-code-compare" />
          </span>
        </div>
      </div>
      <div className="content-card-product">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <h3>Apoyo de casa por casa</h3>
        <span className="add-cart">
          <i className="fa-solid fa-basket-shopping" />
        </span>
        <p className="price">Canasta básica</p>
      </div>
    </div>
  </div>
</section>

     

    <iframe width="1100" height="400" src="https://www.youtube.com/embed/lOEFMSyGyiE?si=2H0Dcd9pB-gAr9ai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     

    <section id="sobremi">
    <div class="contenedor-foto">
    <img src="images/10.png" alt="apoyos" />
    </div>
    <div class="sobremi">
        <p class="titulo-seccion">Sobre Nosotros</p>
        <h3>La Secretaría de Bienestar inicia un camino de transformación para que las y los mexicanos tengamos una vida mejor. Junto al Gobierno de México hemos de empeñarnos en un cambio de fondo, en el que nuestra prioridad sea el pueblo de México</h3>
        <p>Morena, la esperanza de México</p>
    </div>
</section>




    <div className="slider">
    <ul>
        <li>
        <img src="images/pagos1.jpeg" alt="mejor productos" />
        </li>
        <li>
        <img src="images/logo.jpg" alt="mejor productos" />
        </li>
        <li>
        <img src="images/despensa1.jpeg" alt="mejor productos" />
        </li>
        <li>
        <img src="images/despensa2.jpeg" alt="mejor productos" />
        </li>
    </ul>
</div>
   

      
    <section id="sobremi">
    <div className="contenedor-foto">
    <img src="images/10.png" alt="apoyos" />
    </div>
    <div className="sobremi">
        <p className="titulo-seccion">Sobre Nosotros</p>
        <h3>La Secretaría de Bienestar inicia un camino de transformación para que las y los mexicanos tengamos una vida mejor. Junto al Gobierno de México hemos de empeñarnos en un cambio de fondo, en el que nuestra prioridad sea el pueblo de México</h3>
        <p>Morena, la esperanza de México</p>
    </div>
</section>






      
  
         
      <h1>Galerias de imagenes</h1>
  
  <section className="gallery">
    <img
      src="images/1.jpeg"
      alt="Gallery Img1"
      className="gallery-img-1"
    /><img
      src="images/2.jpeg"
      alt="Gallery Img2"
      className="gallery-img-2"
    /><img
      src="images/3.jpeg"
      alt="Gallery Img3"
      className="gallery-img-3"

      
    />
  </section>
     



      <section className="banner">
    <div className="content-banner">
        <p>Secretaria de Bienestar</p>
        <h2>Damnificados por el Huracán Otis<br /></h2>
        <a href="">Damnificados</a>
    </div>
</section>

<main className="main-content">
    <section className="container container-features">
        <div className="card-feature">
            <i className="fa-solid fa-plane-up"></i>
            <div className="feature-content">
                <span>Los pagos empiezan</span>
                <p>Del 8 al 24 de diciembre</p>
            </div>
        </div>
        <div className="card-feature">
            <i className="fa-solid fa-wallet"></i>
            <div className="feature-content">
                <span>Verificar módulo, hora y fecha</span>
                <p>Para ubicar el Módulo de Bienestar que te corresponde, consulta la página oficial: gob.mx/bienestar</p>
            </div>
        </div>
        <div className="card-feature">
            <i className="fa-solid fa-gift"></i>
            <div className="feature-content">
                <span>Requisitos para recibir el apoyo</span>
                <p>Talón del censo (Original)
         Identificación oficial con fotografía (Original y copia)
           CURP (Copia)
           Comprobante de domicilio (Original y copia)</p>
            </div>
            
        </div>
        <div className="card-feature">
            <i className="fa-solid fa-headset"></i>
            <div className="feature-content">
                <span>Requisitos para recibir el segundo apoyo</span>
                <p>Talón del cobro de apoyo para limpieza (original)</p>
                <p>INE (Original y copia)</p>
            </div>
        </div>
    </section>
</main>


<h1>Registro para censados</h1>
<form className="form-horizontal">
        <fieldset>
          {/* Form Name */}
          
          <legend>Registro de Censados</legend>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="name">
              Nombre
            </label>
            <div className="col-md-4">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre aquí"
                className="form-control input-md"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="last_name">
              Apellidos
            </label>
            <div className="col-md-4">
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Apellidos aquí"
                className="form-control input-md"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="curpo">
              CURP
            </label>
            <div className="col-md-4">
              <input
                id="curp"
                name="curp"
                type="text"
                placeholder="CURP (18)"
                className="form-control input-md"
                onChange={(e) => setCurp(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="phone_number">
              Teléfono
            </label>
            <div className="col-md-4">
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                placeholder="Teléfono"
                className="form-control input-md"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="email">
              Correo
            </label>
            <div className="col-md-4">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email@email.com"
                className="form-control input-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="birthdate">
              Fecha de Nacimiento
            </label>
            <div className="col-md-4">
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                placeholder="dd/mm/yyyy"
                className="form-control input-md"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="sex">
              Sexo
            </label>
            <div className="col-md-4">
              <select
                id="sex"
                name="sex"
                className="form-control"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Seleccione...</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="address">
              Dirección
            </label>
            <div className="col-md-4">
              <select
                id="address"
                name="address"
                className="form-control"
                onChange={(e) => setAddressPerson(e.target.value)}
              >
                {address.map((address) => (
                  <option key={address.id} value={address.id}>
                    {address.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>2
        </fieldset>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      
      <nav class="nav nav-pills nav-fill">
  <a class="nav-item nav-link active" href="/registers">Menú</a>
  <a class="nav-item nav-link" href="/registers">Inicio</a>
  <a class="nav-item nav-link" href="/registers">Damnificados</a>
  <a class="nav-item nav-link disabled" href="/registers">Página</a>
</nav>

<div className="container">
  <div className="row">
    <div className="col-sm-3">
      <h2>Enlaces</h2>
      <ul>
        <li><a href="/temas">Temas</a></li>
        <li><a href="/accesibilidad">Declaración de Accesibilidad</a></li>
        <li><a href="/privacidadintegral">Aviso de privacidad</a></li>
        <li><a href="/privacidadsimplificado">Aviso de privacidad simplificado</a></li>
        <li><a href="/terminos">Términos y Condiciones</a></li>
        <li><a href="/terminos#medidas-seguridad-informacion">Política de seguridad</a></li>
        <li><a href="http://www.ordenjuridico.gob.mx" target="_blank" rel="noopener" title="Enlace abre en ventana nueva">Marco jurídico</a></li>
        <li><a href="/sitemap">Mapa de sitio</a></li>
      </ul>
    </div>
    <div className="col-sm-3">
      <h2>Contacto</h2>
      <p>Dudas e información: <a href="mailto:demandasocial@bienestar.gob.mx">demandasocial@bienestar.gob.mx</a></p>
      <h2>Síguenos en</h2>
      <ul className="list-inline">
        <li>
          <a href="https://www.facebook.com/gobmexico" target="_blank" rel="noopener" className="footer" title="enlace a facebook abre en una nueva ventana">
            <img alt="Facebook" src="https://framework-gb.cdn.gob.mx/landing/img/facebook.png" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/GobiernoMX" target="_blank" rel="noopener" className="footer" title="Enlace a twitter abre en una nueva ventana">
            <img alt="Twitter" src="https://framework-gb.cdn.gob.mx/landing/img/twitter.png" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>


    </>
    
  );
};

export default Form;
