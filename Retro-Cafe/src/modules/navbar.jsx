export function Navbar({ names }) {
    
  return (
    <nav>
      {names.map(self => {
        return (
          <a key={self.name} href={'#'+self.name}>
            {self.name}
          </a>
        );
      })}
    </nav>
  );
}
