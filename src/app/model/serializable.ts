
export class Serializable {
  constructor(jsonObj: any) {
    if (jsonObj != null) {
      for (const propName of Object.keys(jsonObj)) {
        try {
            this[propName] = jsonObj[propName];
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
}
