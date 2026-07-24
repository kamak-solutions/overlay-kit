export type EventListener<T> = (payload: T) => void;

type EventListeners<Events extends object> = {
  [K in keyof Events]?: Set<EventListener<Events[K]>>;
};

export class EventEmitter<Events extends object> {
  private readonly listeners: EventListeners<Events> = {};

  public on<K extends keyof Events>(
    event: K,
    listener: EventListener<Events[K]>,
  ): void {
    const eventListeners =
      this.listeners[event] ??
      new Set<EventListener<Events[K]>>();

    eventListeners.add(listener);

    this.listeners[event] = eventListeners;
  }

  public off<K extends keyof Events>(
    event: K,
    listener: EventListener<Events[K]>,
  ): void {
    this.listeners[event]?.delete(listener);
  }

  public emit<K extends keyof Events>(
    event: K,
    payload: Events[K],
  ): void {
    const eventListeners = this.listeners[event];

    if (!eventListeners) {
      return;
    }

    for (const listener of eventListeners) {
      listener(payload);
    }
  }

  public clear(): void {
    for (const event of Object.keys(this.listeners) as Array<
      keyof Events
    >) {
      delete this.listeners[event];
    }
  }
}