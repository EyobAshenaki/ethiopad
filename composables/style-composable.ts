import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export function cn(...params: ClassValue[]) {
  return twMerge(clsx(params));
}
