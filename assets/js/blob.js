const blobLeft = KUTE.fromTo(
  '#blob1', {
    path: '#blob1'
  }, {
    path: '#blob2'
  }, {
    repeat: Infinity,
    duration: 8000,
    yoyo: true
  }
).start();

const blobRight = KUTE.fromTo(
  '#blob3', {
    path: '#blob3'
  }, {
    path: '#blob4'
  }, {
    repeat: Infinity,
    duration: 8000,
    yoyo: true
  }
).start();