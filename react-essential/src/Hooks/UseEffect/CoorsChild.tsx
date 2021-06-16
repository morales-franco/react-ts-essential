import React from 'react';

export const CoorsChild: React.FC = () => {
  const [coors, setcoors] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { x, y } = coors;

  React.useEffect(() => {
    console.log('CoorsChild component generado | montado');

    const mouseMove = (e: MouseEvent) => {
      setcoors({ x: e.x, y: e.y });
      console.log(e.x, e.y);
    };

    window.addEventListener('mouseover', mouseMove);

    /**
     * CLEAN!
     * Si no removemos el event listener por más que ruteemos a otra vista y el componente sea desmontado seguira escuchando.
     */
    return () => {
      window.removeEventListener('mouseover', mouseMove);
      console.log('Componente destroy | desmontado> Cleaning');
    };
  }, []);

  return (
    <div>
      <h3>Move el mouse bro!</h3>
      <p>
        x: {x}
        y: {y}
      </p>
    </div>
  );
};
