process.on('uncaughtException', (err) => {
  console.error('CRASH:', err);
  process.exit(1);
});
