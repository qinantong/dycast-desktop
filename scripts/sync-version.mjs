import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const writeJson = (path, data) => {
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
};

const packagePath = resolve(root, 'package.json');
const { version } = readJson(packagePath);

// Update package-lock.json
const packageLockPath = resolve(root, 'package-lock.json');
const packageLock = readJson(packageLockPath);
packageLock.version = version;
if (packageLock.packages?.['']) {
  packageLock.packages[''].version = version;
}
writeJson(packageLockPath, packageLock);

// Update Cargo.toml
const cargoPath = resolve(root, 'src-tauri', 'Cargo.toml');
writeFileSync(cargoPath, readFileSync(cargoPath, 'utf8').replace(
  /^(version\s*=\s*")[^"]+(")/m,
  `$1${version}$2`,
));

// Update Cargo.lock
const cargoLockPath = resolve(root, 'src-tauri', 'Cargo.lock');
writeFileSync(cargoLockPath, readFileSync(cargoLockPath, 'utf8').replace(
  /(\[\[package\]\]\r?\nname = "dycast-desktop"\r?\nversion = ")[^"]+(")/,
  `$1${version}$2`,
));

// Update tauri.conf.json
const tauriPath = resolve(root, 'src-tauri', 'tauri.conf.json');
writeFileSync(tauriPath, readFileSync(tauriPath, 'utf8').replace(
  /("version"\s*:\s*")[^"]+(")/,
  `$1${version}$2`,
));

console.log(`Version synced: ${version}`);
