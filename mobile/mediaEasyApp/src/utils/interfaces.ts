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
