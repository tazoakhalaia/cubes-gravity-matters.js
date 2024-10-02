let engine = Matter.Engine.create();
let render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 600,
    height: 600,
    background: "#f0f0f0",
    wireframes: false,
  },
});

let walls = [
  Matter.Bodies.rectangle(300, 0, 600, 50, { isStatic: true }),
  Matter.Bodies.rectangle(300, 600, 600, 50, { isStatic: true }),
  Matter.Bodies.rectangle(600, 300, 50, 600, { isStatic: true }),
  Matter.Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
];

let boxA = Matter.Bodies.rectangle(100, 200, 150, 60, {
  chamfer: { radius: 30 },
});
let boxB = Matter.Bodies.rectangle(180, 200, 150, 60, {
  chamfer: { radius: 30 },
});
let boxC = Matter.Bodies.rectangle(240, 200, 150, 60, {
  chamfer: { radius: 30 },
});
let boxD = Matter.Bodies.rectangle(300, 200, 150, 60, {
  chamfer: { radius: 30 },
});
let boxE = Matter.Bodies.rectangle(360, 200, 150, 60, {
  chamfer: { radius: 30 },
});
let boxF = Matter.Bodies.rectangle(460, 200, 150, 60, {
  chamfer: { radius: 30 },
});

let mouse = Matter.Mouse.create(render.canvas);
let mouseCoonstrain = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {
      visible: false,
    },
  },
});
render.mouse = mouse;

Matter.World.add(engine.world, [
  boxA,
  boxB,
  boxC,
  boxD,
  boxE,
  boxF,
  ...walls,
  mouseCoonstrain,
]);
Matter.Runner.run(engine);
Matter.Render.run(render);
