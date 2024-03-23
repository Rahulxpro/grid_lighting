import './index.css';

function Cell() {
}

export function App() {

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactiavteCells = () => {
  };

  const activateCells = () => {
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
      </div>
    </div>
  );
}
