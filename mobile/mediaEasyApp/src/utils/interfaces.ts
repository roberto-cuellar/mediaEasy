export interface MenuPrincipal{
  label:string;
  icon: string;
  url: string;
}


export interface CreatePostInterface {
  title: string;
  content: string;
  usuario: string;
  fecha: string;
}


// Data para el modal

export interface DataModalTransversal{
  titulo?: string;
  contenido: string;
  imageModal?: string;
  tipoModal: string;
}


export interface ConversaPrimerMensaje{
  id: number;
  autor: string;
  lastMesagge: string;
  leido: boolean;
}


export interface AuthResponse {
  error: boolean;
  status: string;
  body: BodyResponse;
}

export interface CommonResponse {
  error: boolean;
  status: string;
  body: any;
}

interface BodyResponse {
  username?: string;
  userid?: string;
  token: string;
}

export interface PostPayload {
  page: Number, len: Number, title?: string  , date?: string , userId?: string
}
