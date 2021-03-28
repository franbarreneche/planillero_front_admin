class BaseApiService {
    baseUrl = "http://localhost:8000/api";    
    resource;
  
    constructor(resource) {
      if (!resource) throw new Error("Resource is not provided");
      this.resource = resource;
    }
  
    getUrl(id = "") {
      return `${this.baseUrl}/${this.resource}/${id}`;
    }
  
    handleErrors(err) {
      // Note: here you may want to add your errors handling
      console.log({ message: "Errors is handled here", err });
    }
  }

  class ReadOnlyApiService extends BaseApiService {
    constructor(resource) {
      super(resource);
    }
    async fetch(config = {}) {
      try {
        const response = await fetch(this.getUrl(), config);
        return await response.json();
      } catch (err) {
        this.handleErrors(err);
      }
    }
    async get(id) {
      try {
        if (!id) throw Error("Id is not provided");
        const response = await fetch(this.getUrl(id));
        return await response.json();
      } catch (err) {
        this.handleErrors(err);
      }
    }
  }

  class ModelApiService extends ReadOnlyApiService {
    constructor(resource) {
      super(resource);
    }
    async post(data = {}) {
      try {
        const response = await fetch(this.getUrl(), {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const { id } = response.json();
        return id;
      } catch (err) {
        this.handleErrors(err);
      }
    }
    async put(id, data = {}) {
      if (!id) throw Error("Id is not provided");
      try {
        const response = await fetch(this.getUrl(id), {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const { id: responseId } = response.json();
        return responseId;
      } catch (err) {
        this.handleErrors(err);
      }
    }
    async delete(id) {
      if (!id) throw Error("Id is not provided");
      try {
        await fetch(this.getUrl(id), {
          method: "DELETE"
        });
        return true;
      } catch (err) {
        this.handleErrors(err);
      }
    }
    async search(conf = {}) {
      try {
        const response = await fetch(this.getUrl()+'search', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(conf)
        });
        return response.json();        
      } catch (err) {
        this.handleErrors(err);
      }
    }
  }

  class VeedoresApiService extends ReadOnlyApiService {
    constructor() {
      super("veedores");
    }
  }

  class ArbitrosApiService extends ReadOnlyApiService {
    constructor() {
      super("arbitros");
    }
  }

  class SedesApiService extends ReadOnlyApiService {
    constructor() {
      super('sedes');
    }
  }

  class TorneosApiService extends ModelApiService {
    constructor() {
      super('torneos');
    }
  }

  class EquiposApiService extends ModelApiService {
    constructor() {
      super('equipos');
    }

    async getJugadores(id) {
      try {
        if (!id) throw Error("Id is not provided");
        const response = await fetch(this.getUrl(id)+"/jugadores");
        return await response.json();
      } catch (err) {
        this.handleErrors(err);
      }
    }
  }

  class JugadoresApiService extends ModelApiService {
    constructor() {
      super('jugadores');
    }
  }
    
  class PartidosApiService extends ModelApiService {
    constructor() {
      super("partidos");
    }

    async agregarPlanilla(partido,data = {}) {
      try {
        const response = await fetch(this.getUrl()+partido+"/jugadores/sync", {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"resources" : data })
        });
        const { id } = response.json();
        return id;
      } catch (err) {
        this.handleErrors(err);
      }
    }
  }
    

  export const $api = {
    veedores: new VeedoresApiService(),
    arbitros: new ArbitrosApiService(),
    sedes : new SedesApiService(),
    torneos : new TorneosApiService(),
    equipos : new EquiposApiService(),
    jugadores : new JugadoresApiService(),
    partidos: new PartidosApiService()
  };