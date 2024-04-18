import { useEffect, useState } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let timeoutId: NodeJS.Timeout | null = null;

      const updateWidth = () => {
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          setWidth(window.innerWidth);
        }, 500); // Задержка в 500 мс
      };

      // Установить начальную ширину сразу после монтирования компонента
      updateWidth();

      // Установка обработчика события ресайза
      window.addEventListener('resize', updateWidth);

      // Очистка при размонтировании компонента
      return () => {
        window.removeEventListener('resize', updateWidth);
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
      };
    }
  }, []);

  return width;
}

export default useWindowWidth;
