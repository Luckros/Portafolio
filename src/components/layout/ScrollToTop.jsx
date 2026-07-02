import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router no resetea el scroll al navegar entre páginas por defecto.
 * Este componente vive dentro del Layout y corrige eso en cada cambio de ruta.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
