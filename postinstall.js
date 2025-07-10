import fse from 'fs-extra';
import path from 'path';
const topDir = '/Users/yunashin/src/yunashin.github.io';
fse.emptyDirSync(path.join(topDir, 'public', 'tinymce'));
fse.copySync(path.join(topDir, 'node_modules', 'tinymce'), path.join(topDir, 'public', 'tinymce'), { overwrite: true });
