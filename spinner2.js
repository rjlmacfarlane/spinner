const chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    process.stdout.write(chars[i]);
  },i * 100);
}