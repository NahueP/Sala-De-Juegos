export class Usuario {
    
    correo : string = '';
    clave : string = '';
    nombre : string = '';


  getTimeStamp()
  {
    const now = new Date();
    const date = now.getFullYear() + '/' + now.getMonth() + '/'+ now.getDate();
    const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    
    return (date + ' ' + time);
   
    
  }

}
