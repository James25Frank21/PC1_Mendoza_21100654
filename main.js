const rows = document.querySelectorAll('#developers-table tr');

// Iterar por cada fila y mover la imagen a la izquierda
rows.forEach(row => {
  // Obtener las celdas de la fila
  const cells = row.querySelectorAll('td');
  
  // Mover la imagen a la izquierda en cada celda
  cells.forEach(cell => {
    cell.insertBefore(cell.querySelector('img'), cell.firstChild);
  });
});