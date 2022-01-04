import { writable } from 'svelte-local-storage-store';

export const date = writable('date', {
  date:'as'
});