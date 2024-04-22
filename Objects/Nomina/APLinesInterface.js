import Open from '../../dbconfig.js';
import {formatter} from './utils.js';

const typeDefsLinesInterface=`
  type LinesInterface {
    INVOICE_ID: Int
    INVOICE_LINE_ID: Int
    LINE_NUMBER: Int
    LINE_TYPE_LOOKUP_CODE:String
    LINE_GROUP_NUMBER:String
    AMOUNT:Float
    ACCOUNTING_DATE: String
    DESCRIPTION:String
    DIST_CODE_CONCATENATED:String
    PO_LINE_LOCATION_ID:Int
    ATTRIBUTE_CATEGORY:String
    ORG_ID:Int
    RECEIPT_NUMBER:Int
    MATCH_OPTION:String
  }

  type Query {
    test: [LinesInterface]
  }
`;

const resolverLinesInterface = {
    Query: {
      test: async () => {
        try {
          const result = await Open(`
          SELECT INVOICE_ID, INVOICE_LINE_ID,LINE_NUMBER,LINE_TYPE_LOOKUP_CODE,
          LINE_GROUP_NUMBER, AMOUNT,ACCOUNTING_DATE, DESCRIPTION,PO_LINE_LOCATION_ID,ORG_ID, DIST_CODE_CONCATENATED, ATTRIBUTE_CATEGORY, RECEIPT_NUMBER, MATCH_OPTION
             FROM APPS.AP_INVOICE_LINES_INTERFACE`,[],{maxRows:1})
         
        return formatter(result);
        } catch (error) {
          console.log('error:', error)
          return null
        }
        
      }, 
    }
  };

  export {resolverLinesInterface,typeDefsLinesInterface}