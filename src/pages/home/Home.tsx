import { Link } from "wouter";

const Home = () => {
  return (
    <div className="home-container">
      <header className="row menu-principal">
        <div className="logo-box">
          <img src="/imgs/logo-marca.jpeg" alt="Logo" width="45" />
          <h1>PetSitter</h1>
        </div>
        <nav>
          <Link href="/login" className="btn">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="btn">
            Registrarse
          </Link>
        </nav>
      </header>

      <main>
        <section>
          <h2>¿Quiénes Somos?</h2>
          <p>
            De la mano de un equipo especializado, cuidamos y paseamos a tus
            mascotas con dedicación y seguridad diaria.
          </p>
        </section>

        <section>
          <h2>Nuestros Peludos</h2>
          <div className="row">
            <div className="col-6 col-sm-12 card">
              <img src="/imgs/golden.avif" alt="Mascota 1" className="card-img" />
              <h3>Rocky</h3>
              <p>Golden Retriever · 3 años · Enérgico y juguetón.</p>
            </div>
            <div className="col-6 col-sm-12 card">
              <img src="/imgs/gato.jpg" alt="Mascota 2" className="card-img" />
              <h3>Luna</h3>
              <p>Gata Mestiza · 2 años · Regalona y tranquila.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Trabajadores</h2>
          <div className="row">
            <div className="col-6 col-sm-12 card">
              <img
                src="/imgs/carlos.webp"
                alt="Trabajador 1"
                className="card-img"
              />
              <h3>Carlos Muñoz</h3>
              <p>Paseador canino certificado con 4 años de experiencia.</p>
            </div>
            <div className="col-6 col-sm-12 card">
              <img
                src="/imgs/valentina.webp"
                alt="Trabajador 2"
                className="card-img"
              />
              <h3>Valentina Soto</h3>
              <p>Cuidadora especialista en primeros auxilios veterinarios.</p>
            </div>
          </div>
        </section>

        <section className="agendar">
          <h2>Agendar Servicio</h2>
          <p>
            Para agendar un paseo para tu mascota, ingresa con tu cuenta o
            regístrate:
          </p>
          <Link href="/login" className="btn">
            Ingresar Usuario
          </Link>
          <Link href="/register" className="btn">
            Registrarse
          </Link>
        </section>
      </main>

      <footer>
        <p>PetSitter Chile · Cuidado y paseos profesionales</p>
        <p>
          Contacto: contacto@petsitter.cl | +56 9 1234 5678 | Santiago, Chile
        </p>
        <p>2026 PetSitter. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;