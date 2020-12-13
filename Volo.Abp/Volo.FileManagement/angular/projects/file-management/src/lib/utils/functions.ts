import { DirectoryContentDto } from '../proxy/directories/models';

export function transformDirectoryContentSize(
  directoryContent: DirectoryContentDto
) {
  return directoryContent.isDirectory ? '' : formatBytes(directoryContent.size);
}

export function formatBytes(size: number, precision = 2) {
  if (!Number.isInteger(size) || size <= 0) {
    return '0 Bytes';
  }

  if (size === 1) {
    return '1 Byte';
  }

  const factor = 1024;
  const decimals = precision < 0 ? 0 : precision;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const sizeIndex = Math.floor(Math.log(size) / Math.log(factor));

  return (
    parseFloat((size / factor ** sizeIndex).toFixed(decimals)) +
    ' ' +
    sizes[sizeIndex]
  );
}
