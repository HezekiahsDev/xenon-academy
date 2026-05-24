import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const dir = join(process.cwd(), 'dist', 'server');
if (!existsSync(dir)) {
  console.warn('dist/server not found; skipping server entry creation.');
  process.exit(0);
}

const content = `import server from "./index.js";

export default server;
`;
writeFileSync(join(dir, 'server.js'), content);
console.log('Created dist/server/server.js');
