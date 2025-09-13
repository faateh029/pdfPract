export const options =  {
    formate:'A3',
    orientation:"Potrait",
    border:'8mm',
    header:{
        height:"15mm",
        contents:'<h4 style="color:red;font-size:20;font-weight:800;text-align:center;">CUSTOMER INVOICE</h4'
    },
    footer:{
        height:"20mm",
        contents:{
            first:"Cover Page",
            2:'Second Page',
            default:'<span style="color:#444;">{{page}}</span>/<span>{{pages}}</span>',
            last:"last Page"
        }
    }
}