# What
This repo is a proof-of-concept.
You can use it to repeatably build an svg with d3.js
Specifically, you can use it to build this svg:

![a blue rectangle with some text](./output.svg)

Just insure nix is installed (you have to enable flakes and the nix command separately) and run:
```
nix build github:MatrixManAtYrService/buildsvg#svg
```
The built svg will be in `result/output.svg`.

# Why

If somebody shares an image with you which visualizes some data, you can tinker with the image, but you can't see the raw data and you cant tinker with the code that generated it.
That's a shame for many reasons.

I dream of a browser which would let you provide a link to a repeatable build, and would render in its place that build output--hiding the complexity of the build.
But then if you right clicked on the output and selected "inspect", you'd be given the opportunity to tinker with the data or the code that rendered the image.
I realize that this can be done in a browser, but using nix opens the door for a wider variety of languages to participate.

It's so easy to (accidentally, or maliciously) mislead people with a data visualization.
I wish it were considered unethical to publish one without also publishing its complete build.
Then we could better suss out the accidentally misleading ones from the maliciously misleading ones and in both cases rectify the situation.

And it's not just images.
Really any numerical result or other computaionally-derived claim should be traceable back to a build so that people can properly scrutinize it.
"Publishing" a scientific paper, in such a world, would not just mean publishing a pdf.
It would mean maintaining a corresponding web of primary data and the repeatable builds which transform it into meaningful claims.

I think this would go a long way towads solving replication problems in computational science.
So this repo is a draft of what you'd see when you inspected a sufficiently annotated image.
It's the justification for that image.

Nevermind that it's just a blue rectangle.
I don't really know javascript well enough to make it look sexy.

