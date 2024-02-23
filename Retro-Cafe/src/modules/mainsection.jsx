export function Mainsection({ main }) {
  return main.map((self) => {
    return (
      <section id={self.name} style={{ backgroundImage: `url(src/assets/${self.name}.jpg)` }}>
        <h1>{self.name}</h1>
        <p>{self.text[0]}</p>
        <p>{self.text[1]}</p>
        <div className="list">
          {self.list.map((s) => {
            return (
              <div>
                <b>{s.left}</b>
                <b>{s.right}</b>
              </div>
            );
          })}
        </div>
      </section>
    );
  });
}
