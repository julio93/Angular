export class Reserva {
    hora: string;
    alumno: string;
    instructor: string;
    horas_vuelo: number;
    horas_intruct: number;
    obersvacion: string;
    constructor(hora: string, 
                alumno: string,
                instructor: string,
                horas_vuelo: number,
                horas_intruct: number,
                obersvacion: string) {
      this.hora = hora;
      this.alumno = alumno;
      this.instructor = instructor;
      this.horas_vuelo = horas_vuelo;
      this.horas_intruct = horas_intruct;
      this.obersvacion = obersvacion;
      
      
    }
    
  }