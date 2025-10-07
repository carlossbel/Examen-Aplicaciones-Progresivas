import { useState, useEffect } from 'react'
import './App.css'

interface Materia {
  id: number;
  nombre: string;
  profesor: string;
  horario: string;
}

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [materias, setMaterias] = useState<Materia[]>([])
  const [loading, setLoading] = useState(false)

  const cargarMaterias = async () => {
    setLoading(true)
    try {
      const response = await fetch('/data/materias.json')
      const data = await response.json()
      setMaterias(data.materias)
    } catch (error) {
      console.error('Error cargando materias:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (activeSection === 'materias') {
      cargarMaterias()
    }
  }, [activeSection])

  return (
    <div className="app">
      <header className="header">
        <h1>Mi Universidad</h1>
      </header>

      <nav className="nav">
        <button 
          onClick={() => setActiveSection('inicio')}
          className={activeSection === 'inicio' ? 'active' : ''}
        >
          Inicio
        </button>
        <button 
          onClick={() => setActiveSection('materias')}
          className={activeSection === 'materias' ? 'active' : ''}
        >
          Materias
        </button>
        <button 
          onClick={() => setActiveSection('horarios')}
          className={activeSection === 'horarios' ? 'active' : ''}
        >
          Horarios
        </button>
        <button 
          onClick={() => setActiveSection('perfil')}
          className={activeSection === 'perfil' ? 'active' : ''}
        >
          Perfil
        </button>
      </nav>

      <main className="content">
        {activeSection === 'inicio' && (
          <div className="section">
            <h2>Bienvenido a Mi Universidad</h2>
            <p>Esta es una aplicación web progresiva (PWA) que funciona offline.</p>
            <div className="info-card">
              <h3>Características:</h3>
              <ul>
                <li>✅ Funciona sin conexión a internet</li>
                <li>✅ Se puede instalar en tu dispositivo</li>
                <li>✅ Carga rápida con App Shell</li>
                <li>✅ Actualización automática de contenido</li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'materias' && (
          <div className="section">
            <h2>Lista de Materias Inscritas</h2>
            {loading ? (
              <p>Cargando materias...</p>
            ) : (
              <div className="materias-grid">
                {materias.map(materia => (
                  <div key={materia.id} className="materia-card">
                    <h3>{materia.nombre}</h3>
                    <p><strong>Profesor:</strong> {materia.profesor}</p>
                    <p><strong>Horario:</strong> {materia.horario}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeSection === 'horarios' && (
          <div className="section">
            <h2>Horarios</h2>
            <div className="info-card">
              <p>Consulta tus horarios de clases aquí.</p>
              <h3>Horario Semanal:</h3>
              <ul>
                <li><strong>Lunes:</strong> Aplicaciones Web Progresivas (10:00-12:00)</li>
                <li><strong>Martes:</strong> Desarrollo Móvil (14:00-16:00)</li>
                <li><strong>Miércoles:</strong> Base de Datos Avanzadas (08:00-10:00)</li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'perfil' && (
          <div className="section">
            <h2>Perfil del Estudiante</h2>
            <div className="info-card">
              <p><strong>Nombre:</strong> Estudiante</p>
              <p><strong>Carrera:</strong> Ingeniería en Sistemas</p>
              <p><strong>Semestre:</strong> 6to</p>
              <p><strong>Matrícula:</strong> 2021-0001</p>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Universidad XYZ – 2025</p>
      </footer>
    </div>
  )
}

export default App