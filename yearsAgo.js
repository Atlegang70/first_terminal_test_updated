 export default function yearsAgo(year){
    var curdat = new Date();
    return curdat.getFullYear() - year;
  }