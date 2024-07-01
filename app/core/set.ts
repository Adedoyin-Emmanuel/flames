export default class MySet<T> {
  private collection: T[];

  constructor() {
    this.collection = [];
  }

  public length = (): number => {
    return this.collection.length;
  };

  public has = (element: T): boolean => {
    return this.collection.indexOf(element) !== -1;
  };

  public values = (): T[] => {
    return this.collection;
  };

  public add = (element: T, strict: boolean = true): boolean => {
    if (strict) {
      if (this.has(element)) return false;
    }

    this.collection.push(element);
    return true;
  };

  public remove = (element: T): boolean => {
    if (!this.has(element)) return false;

    const index = this.collection.indexOf(element);
    this.collection.splice(index, 1);
    return true;
  };

  public intersection = (set: MySet<T>): MySet<T> => {
    const intersectionSet = new MySet<T>();

    this.collection.forEach((element) => {
      if (set.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  };

  public union = (set: MySet<T>): MySet<T> => {
    const unionSet = new MySet<T>();

    this.collection.forEach((element) => {
      unionSet.add(element);
    });

    set.values().forEach((element) => {
      unionSet.add(element);
    });

    return unionSet;
  };

  public difference = (set: MySet<T>): MySet<T> => {
    const differenceSet = new MySet<T>();

    this.collection.forEach((element) => {
      if (!set.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  };

  public subset = (set: MySet<T>): boolean => {
    return this.collection.every((element) => {
      return set.has(element);
    });
  };
}
