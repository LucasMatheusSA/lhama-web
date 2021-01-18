export class Document{
    "metadata": [ {
            "docType":      any[],
            "bpp":          any[],
            "dpi":          any[],
            "orientation":  any[],
            "extraInfos":   
            [{
                "info": [{  "value": any[] }]
            }]
        }
    ];
    "results":[ {
            "field":		
            [{
				"description": any[],
                "lst":
                [{ "result": [{ "value": any[] }] }]
			}]
    } ]
}

// export class Document{
//     "metadata": {
//         "docType": String,
//         "bpp": String,
//         "dpi": String,
//         "orientation": String,
//         "extraInfos":{ "info": { "value": String } }
//     };
//     "results": {"field": any}
// }

// Para envio direto
// {
//     "metadata":
//     [ 						
//         {
//             "docType":	    [""],
//             "bpp":          [""],
//             "dpi":          [""],
//             "orientation":  [""],
//             "extraInfos":   
//             [
//                 {
//                     "info":
//                     [	
//                         {
//                             "value":[""]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ];
//     "results":
//     [ 						
//         {
//             "field":		
//             [
//                 {
// 				    "description":[""],
//                     "lst":
//                     [
//                         {
//                             "result":
//                             [
//                                 {
//                                     "value":[""]
//                                 }
//                             ]
//                         }	
//                     ]
// 			    }	
//             ]
//         }
//     ]
// }