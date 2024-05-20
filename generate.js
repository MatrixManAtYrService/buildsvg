import fs from 'fs';
import * as d3 from 'd3';
import opentype from 'opentype.js';
import D3Node from 'd3-node';

async function createSVG() {
    const d3NodeInstance = new D3Node();

    let font;
    try {
        font = await opentype.load('ArchivoNarrow-Regular.otf');
    } catch (error) {
        console.error('Failed to load font:', error);
        return;
    }

    const svg = d3NodeInstance.createSVG(500, 500).append('g');

    // Draw a simple rectangle
    svg.append('rect')
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 200)
        .attr('height', 100)
        .attr('fill', 'blue');

    // Include text as a path so its not sensitive to font availability
    const textPath = font.getPath('Your Text Here', 0, 0, 24);
    const pathData = textPath.toPathData();

    // Add text path to SVG
    svg.append('path')
        .attr('d', pathData)
        .attr('transform', 'translate(50, 100)')
        .attr('fill', 'white');

    const output = d3NodeInstance.svgString();
    console.log('SVG generated successfully.');

    return output;
}

// Write the SVG to a file
createSVG().then(svgOutput => {
    fs.writeFile('output.svg', svgOutput, (err) => {
        if (err) {
            console.error('Error writing SVG to file:', err);
        }
    });
});
