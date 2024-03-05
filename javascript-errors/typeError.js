// Folgender Code wirft einen TypeError

const zahl = 1024;

zahl.map((item) => {
  console.log(item);
});

try {
    const zahl = 1024;
    
    zahl.map((item) => {
      console.log(item);
    });
} catch (error) {
    console.error('Ein Fehler ist aufgetreten:', error.message);
}
