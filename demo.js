import Label from './src/Label';

vega.transforms.label = Label;

const spec = require("./bar.vg.json");

new vega.View(vega.parse(spec))
    .renderer('svg')  // set renderer (canvas or svg)
    .initialize('#vis')  // initialize view within parent DOM container
    .hover()             // enable hover encode set processing
    .run();
