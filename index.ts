import { compressToUTF16, decompressFromUTF16 } from 'async-lz-string';
import * as fs from 'fs';
import * as path from 'path';

async function compressAndDecompress(str: string) {
    const compressed = await compressToUTF16(str);
    const decompressed = await decompressFromUTF16(compressed);
    console.log(str === decompressed);

    return "Arquivo Comprimido => " + compressed + "\n" + "Arquivo Descomprimido => " + decompressed;
}

fs.readFile(path.join(__dirname, "static", "sum"), (err, data) => {
    if (err) throw err;
    compressAndDecompress(data.toString()).then(response => {
        console.log(response);
    });
})
