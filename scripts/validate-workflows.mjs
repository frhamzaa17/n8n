import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const workflowDir = path.resolve('workflows');
const files = (await readdir(workflowDir)).filter((file) => file.endsWith('.json'));

if (files.length === 0) {
  throw new Error('No workflow JSON files found in workflows/.');
}

for (const file of files) {
  const filePath = path.join(workflowDir, file);
  const workflow = JSON.parse(await readFile(filePath, 'utf8'));

  if (!workflow.name || !Array.isArray(workflow.nodes) || !workflow.connections) {
    throw new Error(`${file} is not a valid n8n workflow export.`);
  }

  const nodeNames = new Set(workflow.nodes.map((node) => node.name));
  for (const [sourceName, channels] of Object.entries(workflow.connections)) {
    if (!nodeNames.has(sourceName)) {
      throw new Error(`${file} has a connection from missing node "${sourceName}".`);
    }

    for (const groups of Object.values(channels)) {
      for (const group of groups) {
        for (const target of group) {
          if (!nodeNames.has(target.node)) {
            throw new Error(`${file} connects to missing node "${target.node}".`);
          }
        }
      }
    }
  }
}

console.log(`Validated ${files.length} workflow file(s).`);
