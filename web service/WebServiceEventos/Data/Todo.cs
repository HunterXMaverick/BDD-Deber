namespace WebServiceEventos.Data
{
    public class Todo
    {
        //Todos los campos que espera la base de datos

        public int id { get; set; } 
        public string nombreUsuario { get; set; }       
        public string correo { get; set; }     
        public string contraseña { get; set; }
        
    }
}
