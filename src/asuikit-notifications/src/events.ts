import { createUseExternalEvents } from '@asuikit/utils';
import type { NotificationProps } from './types';

export type NotificationsEvents = {
  show(notification: NotificationProps): void;
  hide(id: string): void;
  update(notification: NotificationProps & { id: string }): void;
  clean(): void;
  cleanQueue(): void;
};

export type NotificationsCustomEvents = {
  show(prefix: string, notification: NotificationProps): void;
  hide(prefix: string, id: string): void;
  update(prefix: string, notification: NotificationProps & { id: string }): void;
  clean(prefix: string): void;
  cleanQueue(prefix: string): void;
};

export const [useNotificationsEvents, createEvent] =
  createUseExternalEvents<NotificationsEvents>('asuikit-notifications');

const NotificationsEventsTempMap: Record<string, ReturnType<typeof createUseExternalEvents>> = {
  'asuikit-notifications': [useNotificationsEvents, createEvent],
};

function getNotificationsEvents(eventPrefix: string) {
  if (!NotificationsEventsTempMap[eventPrefix]) {
    NotificationsEventsTempMap[eventPrefix] =
      createUseExternalEvents<NotificationsEvents>(eventPrefix);
  }
  return NotificationsEventsTempMap[eventPrefix];
}

export const useNotificationsCustomEvents = (eventPrefix: string, handler: NotificationsEvents) => {
  const [useEvents] = getNotificationsEvents(eventPrefix);
  useEvents(handler);
};

function makeCallCreateEvent(event: keyof NotificationsEvents) {
  return (...args: any[]) => {
    if (args.length === 2 && typeof args[0] === 'string') {
      return getNotificationsEvents(args[0])[1](event)(args[1]);
    }
    return createEvent(event)(args[0]);
  };
}

export const showNotification = makeCallCreateEvent('show');
export const hideNotification = makeCallCreateEvent('hide');
export const cleanNotifications = makeCallCreateEvent('clean');
export const cleanNotificationsQueue = makeCallCreateEvent('cleanQueue');
export const updateNotification = makeCallCreateEvent('update');

export const notifications: NotificationsEvents & NotificationsCustomEvents = {
  show: showNotification,
  hide: hideNotification,
  clean: cleanNotifications,
  cleanQueue: cleanNotificationsQueue,
  update: updateNotification,
};
