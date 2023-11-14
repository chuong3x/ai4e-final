declare interface IResponse {
    statusCode: number;
    message: string;
}

declare interface IServerResponse<T> extends IResponse {
    data: T;
}

declare interface IPredictPayload {
    light: number;
    tKitchen: number;
    hKitchen: number;
    tLeaving: number;
    hLeaving: number;
    tLaundry: number;
    hLaundry: number;
    tOffice: number;
    hOffice: number;
    tBathroom: number;
    hBathroom: number;
    tOutsideBuilding: number;
    hOutsideBuilding: number;
    tIroning: number;
    hIroning: number;
    tTeenager: number;
    hTeenager: number;
    tParents: number;
    hParents: number;
    tOutside: number;
    hOutside: number;
    pressure: number;
    windSpeed: number;
    visibility: number;
    tdewpoint: number;
    r1: number;
    r2: number;
}