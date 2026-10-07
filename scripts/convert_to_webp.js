const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../public/images');

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const ext = path.extname(file).toLowerCase();

        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            const webpPath = path.join(dir, path.basename(file, ext) + '.webp');

            sharp(filePath)
                .webp({ quality: 80 })
                .toFile(webpPath, (err, info) => {
                    if (err) {
                        console.error('Error converting file', file, err);
                    } else {
                        console.log('Successfully converted', file, 'to', path.basename(webpPath));
                    }
                });
        }
    });
});
