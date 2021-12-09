import { inject, provide } from 'vue';

export interface DfDragEvent {
  dragstart: {
    on: (cb: () => void) => void;
    off: (cb: () => void) => void;
    emit: () => void;
  };
  dragend: {
    on: (cb: () => void) => void;
    off: (cb: () => void) => void;
    emit: () => void;
  };
}

export const DfDragProvider = (() => {
  const DF_DRAG_PROVIDER = '@@DF_DRAG_PROVIDER';
  return {
    provide: (data: DfDragEvent) => {
      provide(DF_DRAG_PROVIDER, data);
    },
    inject: () => {
      return inject(DF_DRAG_PROVIDER) as DfDragEvent;
    },
  };
})();
