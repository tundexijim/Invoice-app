exports.generateRandomId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let id = '';
  
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      id += letters[randomIndex];
    }
  
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      id += numbers[randomIndex];
    }
  
    return id;
  }