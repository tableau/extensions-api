import { useExtensionContext } from '../tableau/ExtensionContext';

export function useWorkbookMetadata() {
  const { metadata, isLoading, isDirty, error, refresh, save } = useExtensionContext();
  return { metadata, isLoading, isDirty, error, refresh, save };
}
