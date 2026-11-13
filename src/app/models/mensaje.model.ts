// DORMAR LOS DATOS PARA QUE EL API LAS CONSUMA CON EL POST

export interface Mensaje {
    id: number; // Es asignado por el servidor
    userId: number;
    title: string;
    body: string;

}

export type NuevoMensaje = Omit<Mensaje, 'id'>;

