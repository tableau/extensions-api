declare const __BUILD_VERSION__: string | undefined;

export function getBuildVersion(): string {
  if (typeof __BUILD_VERSION__ === 'string') {
    return __BUILD_VERSION__;
  }
  return 'dev';
}

export function formatBuildVersion(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }

  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

export function getBuildLabel(): string {
  return formatBuildVersion(getBuildVersion());
}
