export default function convertMinutesToHour(minutos: number) {
    var hours = Math.floor(minutos / 60);
    var minutes = minutos % 60;
    var horasString, minutosString;

    if (hours==0){
        horasString='00';
    }else if (hours<10){
        horasString='0'+hours;
    }else{
        horasString=''+hours;
    }

    if (minutes==0){
        minutosString='00';
    }else if (minutes<10){
        minutosString='0'+minutes;
    }else{
        minutosString=''+minutes;
    }

  
    return horasString+':'+minutosString;
  }