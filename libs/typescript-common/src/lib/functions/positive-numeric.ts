/**
 * Función para comprobar si un string es un número positivo o no
 * @param value Valor a comprobar
 * @returns True si el string es un número positivo, False en caso contrario
 */
export const isPositiveNumeric = (value: string): boolean => {
  return /^\d+$/.test(value);
};
