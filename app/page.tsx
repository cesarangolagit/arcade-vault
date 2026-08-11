export default function Home() {
  return (
    <>
      <section className="av-hero">
        <h1>Arcade Vault</h1>
        <p className="sub">
          Inserta ficha para comenzar <span className="blink">_</span>
        </p>
        <div className="detail-actions" style={{ justifyContent: "center" }}>
          <a className="btn lg pulse">Jugar ahora</a>
          <a className="btn lg magenta">Salón de la fama</a>
        </div>
      </section>

      <section className="av-grid">
        <article className="card">
          <div className="cover">
            <div className="cover-bg cover-bricks" />
            <span className="label">Clásico</span>
          </div>
          <div className="meta">
            <h2 className="title">Rompemuros</h2>
            <p className="desc">Rebota la bola y derriba cada ladrillo del tablero.</p>
          </div>
          <div className="row">
            <div className="score-badge">
              Récord
              <b>12 400</b>
            </div>
            <span className="btn">Jugar</span>
          </div>
        </article>

        <article className="card">
          <div className="cover">
            <div className="cover-bg cover-tetro" />
            <span className="label">Puzzle</span>
          </div>
          <div className="meta">
            <h2 className="title">Bloques</h2>
            <p className="desc">Encaja las piezas antes de que la pila toque el techo.</p>
          </div>
          <div className="row">
            <div className="score-badge">
              Récord
              <b>98 750</b>
            </div>
            <span className="btn">Jugar</span>
          </div>
        </article>

        <article className="card">
          <div className="cover">
            <div className="cover-bg cover-snake" />
            <span className="label">Arcade</span>
          </div>
          <div className="meta">
            <h2 className="title">Serpiente</h2>
            <p className="desc">Come, crece y evita morderte la cola.</p>
          </div>
          <div className="row">
            <div className="score-badge">
              Récord
              <b>4 320</b>
            </div>
            <span className="btn">Jugar</span>
          </div>
        </article>
      </section>
    </>
  );
}
