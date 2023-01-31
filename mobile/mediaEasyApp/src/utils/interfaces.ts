export interface MenuPrincipal{
  label:string;
  icon: string;
  url: string;
}


export interface CreatePostInterface {
  title: string;
  content: string;
  usuario: string;
  fecha?: string;
}


// Data para el modal

export interface DataModalTransversal{
  titulo?: string;
  contenido: string;
  imageModal?: string;
  tipoModal: string;
}
