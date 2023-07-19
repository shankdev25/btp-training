const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService{
    async init(){

        const{trainers} = this.entities ;

        this.before("READ","trainers",(req)=>{

            console.log(req.query);
        });

        this.before("CREATE","trainers",(req)=>{
           
            if ( req.data.duration > "2" )
            {
            req.reject(400,"Duration should not exceed 2 hours");
            }
        });

        this.after("READ","trainers",(res)=>{

            for(let i = 0 ; i < res.length ; i++){
                res[i].trainee = "dummy";
            }
        });


     await super.init();
    }
}

module.exports = CatalogService;