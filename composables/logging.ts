import { useNuxtApp } from 'nuxt/app';

export function logServerError(err: any, message?: string) {
  const nuxtApp = useNuxtApp();
  if (process?.server && nuxtApp.$logger) {
    nuxtApp.$logger.error(new Error(message || err));
  } else {
    console.error('We Have Encountered an ERROR: ', err);
  }
}

export function logServerWarn(message: string) {
  const nuxtApp = useNuxtApp();
  if (process?.server && nuxtApp.$logger) {
    nuxtApp.$logger.warn(message);
  } else {
    console.warn(message);
  }
}

export function logServerInfo(message: string) {
  const nuxtApp = useNuxtApp();
  if (process?.server && nuxtApp.$logger) {
    nuxtApp.$logger.info(message);
  } else {
    console.info(message);
  }
}
