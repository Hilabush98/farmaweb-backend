import Open from '../../dbconfig.js';
import { formatter } from './utils.js';


const typeDefsNominaSupport = `
  type Response {
    code:Int
    status:String
    error:String
  }
  type AccountsWithErrors {
    DIST_CODE_CONCATENATED:String
  }
  type Query {
    getAllAccountsWithError(daysBefore:Int): [AccountsWithErrors]
  }
`;

const resolverNominaSupport = {
    Query: {
        test: async () => {
            try {
                const result = await Open(`
          SELECT INVOICE_ID, INVOICE_LINE_ID,LINE_NUMBER,LINE_TYPE_LOOKUP_CODE,
          LINE_GROUP_NUMBER, AMOUNT,ACCOUNTING_DATE, DESCRIPTION,PO_LINE_LOCATION_ID,ORG_ID, DIST_CODE_CONCATENATED, ATTRIBUTE_CATEGORY, RECEIPT_NUMBER, MATCH_OPTION
             FROM APPS.AP_INVOICE_LINES_INTERFACE`, [], { maxRows: 1 })

                return formatter(result);
            } catch (error) {
                console.log('error:', error)
                return null
            }

        },
        getAllAccountsWithError: async (args,{daysBefore}) => {
            const sql= `
            SELECT DISTINCT DIST_CODE_CONCATENATED
            FROM APPS.AP_INVOICE_LINES_INTERFACE
            WHERE INVOICE_ID IN (SELECT INVOICE_ID 
            FROM APPS.AP_INVOICES_INTERFACE
            WHERE INVOICE_NUM LIKE '%Nomina%')
            AND INVOICE_LINE_ID  IN (SELECT PARENT_ID FROM APPS.AP_INTERFACE_REJECTIONS
            WHERE TRUNC(CREATION_DATE) = TRUNC(SYSDATE${daysBefore? `-${daysBefore}`:''}) 
            AND CREATED_BY = 1371 )`
            const result = await Open(sql, [], { maxRows: 50 })
            return  formatter(result);
        },
    }
};

export { resolverNominaSupport, typeDefsNominaSupport }