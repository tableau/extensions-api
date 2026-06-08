import * as React from 'react';
import { WorkbookNode } from '../metadata/types';
import { createTableauBridge, TableauBridge } from './TableauBridge';

export interface ExtensionContextValue {
  bridge: TableauBridge;
  metadata: WorkbookNode | null;
  isLoading: boolean;
  isDirty: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  save: () => Promise<void>;
  setMetadata: (meta: WorkbookNode) => void;
}

export const ExtensionContext = React.createContext<ExtensionContextValue | null>(null);

interface ExtensionProviderProps {
  bridge?: TableauBridge;
  children: React.ReactNode;
}

export function ExtensionProvider({ bridge: bridgeProp, children }: ExtensionProviderProps): JSX.Element {
  const bridge = React.useMemo(() => bridgeProp ?? createTableauBridge(), [bridgeProp]);
  const [metadata, setMetadataState] = React.useState<WorkbookNode | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDirty, setIsDirty] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const refresh = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await bridge.getWorkbookMetadata();
      setMetadataState(data);
      setIsDirty(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoading(false);
    }
  }, [bridge]);

  const save = React.useCallback(async () => {
    if (!metadata) {
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await bridge.setWorkbookMetadata(metadata);
      setIsDirty(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoading(false);
    }
  }, [bridge, metadata]);

  const setMetadata = React.useCallback((meta: WorkbookNode) => {
    setMetadataState(meta);
    setIsDirty(true);
  }, []);

  const value: ExtensionContextValue = {
    bridge,
    metadata,
    isLoading,
    isDirty,
    error,
    refresh,
    save,
    setMetadata
  };

  return (
    <ExtensionContext.Provider value={value}>
      {children}
    </ExtensionContext.Provider>
  );
}

export function useExtensionContext(): ExtensionContextValue {
  const context = React.useContext(ExtensionContext);
  if (!context) {
    throw new Error('useExtensionContext must be used within ExtensionProvider');
  }
  return context;
}
