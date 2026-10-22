
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const avisos = [
  ["Mantenimiento de áreas verdes", "05 de septiembre", "Podado y limpieza de jardines principales a partir de las 8:00 AM."],
  ["Asamblea general de vecinos", "12 de septiembre", "Reunión en la palapa comunitaria para revisar temas de la comunidad."],
  ["Revisión de alumbrado", "18 de septiembre", "Revisión preventiva de luminarias en las calles del fraccionamiento."]
];

const servicios = [
  ["!", "Avisos comunitarios", "Consulta información importante de la comunidad."],
  ["✎", "Reportes y sugerencias", "Envía a administración un reporte o propuesta."],
  ["i", "Información comunitaria", "Encuentra datos básicos y canales de atención."]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });
  const [enviado, setEnviado] = useState(false);

  // Recuperar los reportes guardados
  const [reportes, setReportes] = useState(() => {
    try {
      const datos = JSON.parse(
        localStorage.getItem("reportesLosRobles") || "[]"
      );
      return Array.isArray(datos) ? datos : [];
    } catch {
      return [];
    }
  });

  // Guardar un nuevo reporte
  function submit(e) {
    e.preventDefault();

    if (!form.mensaje.trim()) return;

    const nuevoReporte = {
      nombre: form.nombre,
      mensaje: form.mensaje,
      fecha: new Date().toLocaleString("es-MX")
    };

    const lista = [...reportes, nuevoReporte];

    setReportes(lista);
    localStorage.setItem("reportesLosRobles", JSON.stringify(lista));

    setEnviado(true);
    setForm({ nombre: "", email: "", mensaje: "" });
  }
  // Eliminar los reportes con confirmación
  function borrarReportes() {
    const confirmar = window.confirm(
      "¿Estás segura de que deseas eliminar todos los reportes?"
    );

    if (confirmar) {
      setReportes([]);
      localStorage.removeItem("reportesLosRobles");
    }
  }
  return (
    <div>
      <header className="top">
        <div className="nav">
          <div className="logo">
            <span>LR</span>
            <div>
              <strong>Los Robles</strong>
              <small>Administración comunitaria</small>
            </div>
          </div>

          <button
            className="menuBtn"
            onClick={() => setMenu(!menu)}
          >
            ☰
          </button>

          <nav className={menu ? "open" : ""}>
            <a href="#inicio">Inicio</a>
            <a href="#avisos">Avisos</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
            <a href="#historial">Historial</a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div>
            <p className="tag">PORTAL COMUNITARIO</p>
            <h1>Sistema de Administración Comunitaria Los Robles</h1>
            <p className="lead">
              Un espacio digital para mantener informados a los
              residentes y facilitar la comunicación con la administración.
            </p>
            <a className="btn" href="#avisos">Ver avisos</a>
          </div>

          <div className="heroCard">
            <div className="circle">LR</div>
            <h3>Comunidad informada</h3>
            <p>
              Información clara, atención y comunicación
              en un solo lugar.
            </p>
          </div>
        </section>

        <section id="avisos" className="section">
          <div className="sectionTitle">
            <div>
              <p className="tag">INFORMACIÓN</p>
              <h2>Avisos comunitarios</h2>
            </div>
            <span>{avisos.length} avisos</span>
          </div>

          <div className="grid">
            {avisos.map((a, i) => (
              <article className="card" key={i}>
                <span className="date">{a[1]}</span>
                <h3>{a[0]}</h3>
                <p>{a[2]}</p>
                <button
                  className="linkBtn"
                  onClick={() => alert(a[2])}
                >
                  Leer aviso →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="servicios" className="section alt">
          <p className="tag">ATENCIÓN</p>
          <h2>Servicios del portal</h2>

          <div className="grid">
            {servicios.map((s, i) => (
              <article className="service" key={i}>
                <div className="icon">{s[0]}</div>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div>
            <p className="tag">COMUNICACIÓN</p>
            <h2>Reportes y sugerencias</h2>
            <p>
              Utiliza este formulario para enviar una sugerencia,
              reporte o comentario a la administración.
            </p>
            <ul>
              <li>Atención organizada</li>
              <li>Registro local de solicitudes</li>
              <li>Consulta del historial</li>
            </ul>
          </div>

          <form onSubmit={submit} className="form">
            {enviado && (
              <div className="success">
                ✓ Reporte registrado correctamente.
              </div>
            )}

            <label>
              Nombre
              <input
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, nombre: e.target.value })
                }
                placeholder="Tu nombre"
              />
            </label>

            <label>
              Correo
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="correo@ejemplo.com"
              />
            </label>

            <label>
              Mensaje
              <textarea
                required
                rows="5"
                value={form.mensaje}
                onChange={(e) =>
                  setForm({ ...form, mensaje: e.target.value })
                }
                placeholder="Escribe tu reporte o sugerencia..."
              />
            </label>

            <button className="btn submit" type="submit">
              Enviar reporte
            </button>
          </form>
        </section>

        {/* Nueva sección: historial sencillo */}
        <section id="historial" className="section">
          <p className="tag">SEGUIMIENTO</p>
          <h2>Historial de reportes</h2>
          <p>Total de reportes: {reportes.length}</p>
          {reportes.length > 0 && (
  <button
    className="btn"
    type="button"
    onClick={borrarReportes}
  >
    Eliminar todos los reportes
  </button>
)}

          {reportes.length === 0 ? (
            <p>Todavía no hay reportes registrados.</p>
          ) : (
            <div className="grid">
              {reportes.map((reporte, i) => (
                <article className="card" key={i}>
                  <span className="date">{reporte.fecha}</span>
                  <h3>{reporte.nombre || "Vecino"}</h3>
                  <p>{reporte.mensaje}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer>
        <strong>Los Robles</strong>
        <p>Proyecto Mayra Melendez— Scrum + React</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
