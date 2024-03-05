// Folgender Code wirft einen SyntaxError

console.log Hallo Welt!;

try {
    console.log('Hallo Welt!');
} catch (error) {
    console.error('Ein Fehler ist aufgetreten:', error.message);
}
