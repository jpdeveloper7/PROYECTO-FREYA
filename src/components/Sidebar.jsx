import React from 'react';

const Sidebar = ({ location, navigate, open = false, onClose }) => (
  open ? (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 100 }}>
      {/* Overlay para móvil */}
      <div
        className="sidebar-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.25)',
          zIndex: 100,
        }}
        onClick={onClose}
      />
      {/* Sidebar deslizante en móvil */}
      <aside
        className="dashboard__sidebar sidebar--open"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: 220,
          background: '#fff',
          zIndex: 101,
          boxShadow: '2px 0 12px #0002',
          transition: 'transform 0.3s',
          transform: 'translateX(0)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 0 0 0',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="sidebar__logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={'/ASSETS/freya_logo.svg'} alt="Logo Freya" style={{ width: 32, height: 32 }} />
          Freya-app
        </div>
        <nav className="sidebar__nav">
          <button type="button" onClick={() => { navigate('/home'); onClose(); }} className={`sidebar__item ${location.pathname === '/home' ? 'active' : ''}`}><span role="img" aria-label="Inicio">📊</span> Inicio</button>
          <button type="button" onClick={() => { navigate('/apuntes'); onClose(); }} className={`sidebar__item ${location.pathname === '/apuntes' ? 'active' : ''}`}><span role="img" aria-label="Apuntes">📝</span> Apuntes</button>
          <button type="button" onClick={() => { navigate('/calificaciones'); onClose(); }} className={`sidebar__item ${location.pathname === '/calificaciones' ? 'active' : ''}`}><span role="img" aria-label="Calificaciones">🎯</span> Calificaciones</button>
          <button type="button" onClick={() => { navigate('/recordatorios'); onClose(); }} className={`sidebar__item ${location.pathname === '/recordatorios' ? 'active' : ''}`}><span role="img" aria-label="Recordatorios">⏰</span> Recordatorios</button>
          <button type="button" onClick={() => { navigate('/configuracion'); onClose(); }} className={`sidebar__item ${location.pathname.startsWith('/configuracion') ? 'active' : ''}`}><span role="img" aria-label="Configuración">⚙️</span> Configuración</button>
        </nav>
      </aside>
    </div>
  ) : (
    <aside className="dashboard__sidebar">
      <div className="sidebar__logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={'/ASSETS/freya_logo.svg'} alt="Logo Freya" style={{ width: 32, height: 32 }} />
        Freya-app
      </div>
      <nav className="sidebar__nav">
        <button type="button" onClick={() => navigate('/home')} className={`sidebar__item ${location.pathname === '/home' ? 'active' : ''}`}><span role="img" aria-label="Inicio">📊</span> Inicio</button>
        <button type="button" onClick={() => navigate('/apuntes')} className={`sidebar__item ${location.pathname === '/apuntes' ? 'active' : ''}`}><span role="img" aria-label="Apuntes">📝</span> Apuntes</button>
        <button type="button" onClick={() => navigate('/calificaciones')} className={`sidebar__item ${location.pathname === '/calificaciones' ? 'active' : ''}`}><span role="img" aria-label="Calificaciones">🎯</span> Calificaciones</button>
        <button type="button" onClick={() => navigate('/recordatorios')} className={`sidebar__item ${location.pathname === '/recordatorios' ? 'active' : ''}`}><span role="img" aria-label="Recordatorios">⏰</span> Recordatorios</button>
        <button type="button" onClick={() => navigate('/configuracion')} className={`sidebar__item ${location.pathname.startsWith('/configuracion') ? 'active' : ''}`}><span role="img" aria-label="Configuración">⚙️</span> Configuración</button>
      </nav>
    </aside>
  )
);

export default Sidebar; 