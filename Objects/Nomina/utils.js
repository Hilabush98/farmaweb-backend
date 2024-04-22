
const formatter= (result)=>{
    const data = result.rows.map((row)=>{
        const item = {};
        row.forEach((cell, index) => {
          const propertyName = result.metaData[index].name; 
          item[propertyName] = cell; 
        });
        return item;
      })
      return data
}
export {formatter};