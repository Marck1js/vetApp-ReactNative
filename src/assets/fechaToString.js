const dateToString = (date) => {
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      return date.toLocaleDateString("es-ES", options)
}

export default dateToString;