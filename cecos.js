
const generateUpdate =(accounts,dataTofixed)=>{

    const newArray=accounts.map((account)=>{
      const actualAccount= account;
      let oldAccountSplit= account.split('-');
      const existAccount= dataTofixed.find((element)=>element.oldCeco === oldAccountSplit[2])
      if(existAccount){
        console.log('a',actualAccount)
        console.log('b',existAccount)
        
        oldAccountSplit[2]=existAccount.newCeco;
        oldAccountSplit[6]=existAccount.newDepto;
        oldAccountSplit[1]=existAccount.location;
        const newAccountInfo= oldAccountSplit.join('-');
        console.log(newAccountInfo)
        const commandLine =`UPDATE APPS.AP_INVOICE_LINES_INTERFACE SET DIST_CODE_CONCATENATED = '${newAccountInfo}' WHERE DIST_CODE_CONCATENATED  = '${actualAccount}' AND INVOICE_ID IN (SELECT INVOICE_ID FROM APPS.AP_INVOICES_INTERFACE WHERE INVOICE_NUM LIKE '%Nomina%') AND INVOICE_LINE_ID  IN (SELECT PARENT_ID FROM APPS.AP_INTERFACE_REJECTIONS WHERE TRUNC(CREATION_DATE) = TRUNC(SYSDATE) AND CREATED_BY = 1371)`
        if(actualAccount === newAccountInfo){return null}
        else  return commandLine;
      }
      else{
  return null
      }
    })
 
    console.log(newArray.filter((a)=>a));
}

const data= [
  '001-010501800403-04561-0000-601100100-601011002-01630-000-0000000-0000000',
  '001-010501800403-04561-0000-601090100-601010900-01630-000-0000000-0000000',
  '001-010501800403-04561-0000-601100100-601011005-01630-000-0000000-0000000',
  '001-012206631803-05149-0000-601010100-601010100-60189-000-0000000-0000000',
  '001-010300801398-40016-0000-601090100-601010900-01600-000-0000000-0000000',
  '001-010203220398-40007-0000-601100100-601011012-01600-000-0000000-0000000',
  '001-010600106303-05185-0000-601060100-601010600-60160-000-0000000-0000000',
  '001-012004526003-05219-0000-601060100-601010600-60160-000-0000000-0000000',
  '001-010501800403-04561-0000-601010100-601010100-01630-000-0000000-0000000',
  '001-010100901898-40022-0000-601090100-601010900-01600-000-0000000-0000000',
  '001-010501800403-04561-0000-601060100-601010600-01630-000-0000000-0000000',
  '001-010300801398-40016-0000-601102500-601251000-01600-000-0000000-0000000',
  '001-010501800497-30053-0000-601010100-601010100-01600-000-0000000-0000000',
  '001-010600106303-05185-0000-601090100-601010900-60160-000-0000000-0000000',
  '001-010501800498-40023-0000-601090100-601010900-01600-000-0000000-0000000',
  '001-010501800403-04561-0000-601080100-601010800-01630-000-0000000-0000000'];

const old =[
  {newCeco:'04561', oldCeco:'04561', location:'010501800403', newDepto:'01000'},
  {newCeco:'05149', oldCeco:'05149', location:'012206631803', newDepto:'60189'},
  {newCeco:'05185', oldCeco:'05185', location:'010600106303', newDepto:'01000'},
  {newCeco:'05219', oldCeco:'05219', location:'012004526003', newDepto:'01000'},
  {newCeco:'30053', oldCeco:'30053', location:'010501800497', newDepto:'30200'},
  {newCeco:'40007', oldCeco:'40007', location:'010203220398', newDepto:'01600'},
  {newCeco:'01007', oldCeco:'40016', location:'010300801397', newDepto:'01600'},
  {newCeco:'01003', oldCeco:'40022', location:'010100901897', newDepto:'01600'},
  {newCeco:'01010', oldCeco:'40023', location:'010501800497', newDepto:'01600'}
  ];

generateUpdate(data,old);

 


