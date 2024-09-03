import fs from 'node:fs/promises'

const databasePach = new URL('../db.json',  import.meta.url)

//console.log(databasePach)

export class Database{
    #database = {}

    constructor(){
        fs.readFile(databasePach, 'utf8')
        .then(data => {
            this.#database = JSON.parse(data)
            
        })
        .catch(() => {
            this.#persist()
        })
    }

    #persist(){
      //  const dados = JSON.stringify(this.#database)
        fs.writeFile(databasePach, JSON.stringify(this.#database))
      //  console.log(dados)
    }


    select(table){
        const data = this.#database[table] ?? []

        return data

    }

    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        }else{
            this.#database[table] = [data]
        }
       // console.log("insert exe")
        this.#persist();

        return data;
    }


}