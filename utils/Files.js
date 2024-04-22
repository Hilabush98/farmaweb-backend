import ExcelJS from 'exceljs';

const  writeFile= async({fileName ,shetName = 'Libro1' },{metaData,rows})=>{
    const dateNow = new Date();
    fileName+= `${dateNow.getFullYear()}-${dateNow.getDay()}-${dateNow.getDay()}.xlsx`

    const workbook = new ExcelJS.Workbook();
    const workSheet= workbook.addWorksheet(shetName);
    
    const columnas=metaData.map((cell,index)=>{
        return {
            header:`${cell.name}`,
            key:`${index}`
        }
       })
   workSheet.columns= columnas;
   workSheet.addRows(rows);

   await workbook.xlsx.writeFile(fileName);

    return 'succes';
}
export default writeFile