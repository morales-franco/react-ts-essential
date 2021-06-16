import React from 'react';
import { delay } from '../../helpers/DelayHelper';
import { CoorsChild } from './CoorsChild';

export const UseEffectMagicNumber: React.FC = () => {
  const [magicNumber, setMagicNumber] = React.useState<number | undefined>();

  const getInflateMagicNumberAsync = async (): Promise<number> => {
    await delay(2000);
    return 10;
  };

  React.useEffect(() => {
    const inflateMagicNumber = async () => {
      const magicNumber = await getInflateMagicNumberAsync();
      setMagicNumber(magicNumber);
    };

    inflateMagicNumber();
  }, []); //useEffect sin dependencias ([]) --> Solo se ejecuta una vez sin importar los cambios de estado del componente

  return (
    <div>
      <h1>
        Magic Number {magicNumber === undefined ? 'Retrieving...' : magicNumber}
      </h1>

      {magicNumber === 10 && <CoorsChild />}
    </div>
  );
};
