// Folgender Code wirft einen TypeError

try {
    const zahl = 1024;
    
    zahl.map((item) => {
      console.log(item);
    });
} catch (error) {
    console.error('Ein Fehler ist aufgetreten:', error.message);
}
