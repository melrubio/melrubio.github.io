let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #a2d2ff;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a2d2ff;">Apasionada por la tecnología, el diseño y la creatividad.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
