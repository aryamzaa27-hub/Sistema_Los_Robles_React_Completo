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

// Documentos del curso incluidos en la carpeta public/actividades.
// Vite los hace accesibles en el navegador y al publicar la pagina.
const actividadesCurso = {
  losRobles: [
    { titulo: 'Actividad 1: primera fase de desarrollo', archivo: 'los_robles_01_primera_fase.docx' },
    { titulo: 'Actividad 2: segunda fase de desarrollo', archivo: 'los_robles_02_segunda_fase.docx' },
    { titulo: 'Actividad 3: tercera fase de desarrollo', archivo: 'los_robles_03_tercera_fase.docx' },
    { titulo: 'Integradora: Sprint, el corazón de Scrum', archivo: 'los_robles_04_sprint_scrum.docx' },
    { titulo: 'Integradora 2: Backlog y Sprint Schedule', archivo: 'los_robles_05_backlog_sprints.docx' },
    { titulo: 'Producto final de la Unidad 3', archivo: 'los_robles_06_producto_final_u3.docx' },
  ],
  shopGo: [
    { titulo: 'Actividad 1: aplicación de Scrum', archivo: 'shopgo_01_aplicacion_scrum.docx' },
    { titulo: 'Actividad 2: Sprint Schedule', archivo: 'shopgo_02_sprint_schedule.docx' },
    { titulo: 'Unidad 4: reunión inicial', archivo: 'shopgo_03_reunion_inicial.docx' },
    { titulo: 'Unidad 4: reunión de revisión final', archivo: 'shopgo_04_revision_final.docx' },
  ]
};

// Para que los archivos funcionen tanto localmente como en GitHub Pages.
const rutaPublica = (ruta) => `${import.meta.env.BASE_URL}${ruta}`;

function App() {
  const [menu, setMenu] = useState(false);
  const [menuCurso, setMenuCurso] = useState(false);
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

        {/* Producto integrador: boton de menu con los materiales del curso. */}
        <section id="actividades" className="section entregaCurso">
          <p className="tag">PRODUCTO INTEGRADOR · PROYECTO II</p>
          <h2>El final del proceso</h2>
          <p>Consulta las actividades, los sistemas trabajados, el codigo y el reporte final.</p>
          <button
            className="btn btnMenuCurso"
            type="button"
            aria-expanded={menuCurso}
            aria-controls="contenidoMenuCurso"
            onClick={() => setMenuCurso(!menuCurso)}
          >
            {menuCurso ? "✕ Cerrar menú de actividades" : "☰ Abrir menú de actividades"}
          </button>

          {menuCurso && (
            <div id="contenidoMenuCurso" className="panelCurso">
              <div className="bloqueCurso">
                <h3>1. Actividades realizadas en el curso</h3>
                <h4>Proyecto Los Robles</h4>
                <ul>
                  {actividadesCurso.losRobles.map((actividad) => (
                    <li key={actividad.archivo}>
                      <a href={rutaPublica(`actividades/${actividad.archivo}`)} download>
                        📄 {actividad.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
                <h4>Proyecto ShopGo</h4>
                <ul>
                  {actividadesCurso.shopGo.map((actividad) => (
                    <li key={actividad.archivo}>
                      <a href={rutaPublica(`actividades/${actividad.archivo}`)} download>
                        📄 {actividad.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href={rutaPublica("actividades/material_01_formato_sprint.docx")} download>
                  📄 Formato Sprint (material de apoyo)
                </a>
              </div>

              <div className="bloqueCurso">
                <h3>2. Sistema implementado</h3>
                <p>Los Robles funciona en esta misma pagina. ShopGo tiene su propio repositorio.</p>
                <a href="#inicio">🏠 Ir al sistema Los Robles</a>
                <a href="https://github.com/aryamzaa27-hub/Sistema_Los_Robles_React_Completo"
                   target="_blank" rel="noopener noreferrer">Código Los Robles en GitHub</a>
                <a href="https://github.com/dahyuntuais912/tienda-movil"
                   target="_blank" rel="noopener noreferrer">Proyecto ShopGo en GitHub</a>
              </div>

              <div className="bloqueCurso">
                <h3>3. Código fuente comprimido</h3>
                <p>Descarga el proyecto Los Robles en un archivo ZIP.</p>
                <a href={rutaPublica("codigo/Codigo_Fuente_Los_Robles.zip")} download>
                  📦 Descargar código fuente ZIP
                </a>
              </div>

              <div className="bloqueCurso">
                <h3>4. Reporte de modificaciones</h3>
                <p>Resumen de los cambios realizados y las funciones pendientes de ambos proyectos.</p>
                <a href={rutaPublica("reporte/Reporte_Final_Proyecto_II.docx")} download>
                  📝 Descargar reporte final en Word
                </a>
              </div>
            </div>
          )}
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
